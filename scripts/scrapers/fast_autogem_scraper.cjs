const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function scrapeCategory(url) {
    console.log(`\n--- Starting Ultimate Fast Scrape for: ${url} ---`);
    const browser = await puppeteer.launch({ 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // Speed optimization: block only heavy non-essential resources (keep images for src extraction)
    await page.setRequestInterception(true);
    page.on('request', (req) => {
        if (['stylesheet', 'font'].includes(req.resourceType())) {
            req.abort();
        } else {
            req.continue();
        }
    });

    try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        // 1. Get all products from the grid (most reliable for Code + Price)
        const gridProducts = await page.evaluate(() => {
            const items = document.querySelectorAll('.product-list-item');
            return Array.from(items).map(item => {
                const link = item.querySelector('h3 a') || item.querySelector('a');
                const code = item.querySelector('.product-code')?.innerText?.trim() || '';
                
                // Price inc VAT - visible on grid without login
                const priceIncEl = item.querySelector('span.price-inner');
                const priceInc = priceIncEl ? priceIncEl.innerText.trim() : '';
                
                // Price ex VAT - the smaller text below
                const priceExEl = item.querySelector('.price-ex');
                const priceEx = priceExEl ? priceExEl.innerText.replace('ex VAT', '').trim() : '';

                // Pack/Size from the caption
                const packSize = item.querySelector('.pack-size')?.innerText?.trim() || '';
                
                // Stock status
                const inStock = !!item.querySelector('.in-stock');

                // Image URL - construct directly from product code (pattern: /userfiles/images/products/188x188/{CODE}.jpg)
                const imageUrl = code 
                    ? `https://shop.autogem.co.uk/userfiles/images/products/188x188/${code}.jpg`
                    : '';
                
                return {
                    title: item.querySelector('h3')?.innerText?.trim() || '',
                    code,
                    priceInc,
                    priceEx,
                    packSize,
                    inStock,
                    imageUrl,
                    url: link ? link.href : null
                };
            }).filter(p => p.url && p.url.includes('/product/'));
        });

        console.log(`Found ${gridProducts.length} products in grid.`);

        const results = [];
        const batchSize = 5;

        for (let i = 0; i < gridProducts.length; i += batchSize) {
            const batch = gridProducts.slice(i, i + batchSize);
            console.log(`Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(gridProducts.length/batchSize)}...`);
            
            const batchPromises = batch.map(gridData => scrapeProductDetail(browser, gridData));
            const batchResults = await Promise.all(batchPromises);
            results.push(...batchResults);
        }

        saveData(results, url, 'Abrasives');
        console.log(`Finished! Scraped ${results.length} products.`);

    } catch (err) {
        console.error(`Failed to scrape category ${url}:`, err.message);
    } finally {
        await browser.close();
    }
}

async function scrapeProductDetail(browser, gridData) {
    const page = await browser.newPage();
    try {
        await page.goto(gridData.url, { waitUntil: 'domcontentloaded', timeout: 20000 });
        
        const detailData = await page.evaluate(() => {
            const attributes = {};
            document.querySelectorAll('ul.attributes li').forEach(li => {
                const label = li.querySelector('label')?.innerText?.replace(':', '').trim();
                if (label) {
                    let value = li.innerText.replace(li.querySelector('label').innerText, '').trim();
                    attributes[label] = value;
                } else if (li.innerText.includes(':')) {
                    const [k, ...v] = li.innerText.split(':');
                    attributes[k.trim()] = v.join(':').trim();
                }
            });

            return {
                equivalentTo: attributes['Equivalent to'] || '',
                packSize: attributes['Pack/Size'] || '',
                description: document.querySelector('.product-description')?.innerText?.trim() || '',
                priceInc: document.querySelector('.price-inc')?.innerText?.trim() || '',
                priceEx: document.querySelector('.price-ex')?.innerText?.trim() || '',
                imageUrl: document.querySelector('.product-main-image img')?.src || ''
            };
        });

        await page.close();
        
        // Merge: grid data has priority (especially imageUrl built from code)
        return {
            ...gridData,
            equivalentTo: detailData.equivalentTo,
            packSize: gridData.packSize || detailData.packSize,
            priceInc: gridData.priceInc || detailData.priceInc,
            priceEx: detailData.priceEx,
            description: detailData.description,
            imageUrl: gridData.imageUrl || detailData.imageUrl
        };
    } catch (err) {
        console.error(`   !! Error on ${gridData.url}:`, err.message);
        await page.close();
        return gridData; // Return grid data at least
    }
}

function saveData(data, categoryUrl, subDir = '') {
    if (data.length === 0) return;
    const categoryName = categoryUrl.split('/').pop() || 'scraped_data';
    const baseDir = path.join(__dirname, '../../scraped_data', subDir);
    const outputPath = path.join(baseDir, `${categoryName}.json`);
    
    if (!fs.existsSync(baseDir)) {
        fs.mkdirSync(baseDir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`Saved to ${outputPath}`);
}

const urls = process.argv.slice(2);
(async () => {
    for (const url of urls) {
        await scrapeCategory(url);
    }
})();
