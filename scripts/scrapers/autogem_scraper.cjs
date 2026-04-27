const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const targetUrl = process.argv[2];

if (!targetUrl) {
    console.error('Please provide a URL to scrape. Example: node autogem_scraper.js https://shop.autogem.co.uk/catalogue/adhesives-tapes-sealants-aa01');
    process.exit(1);
}

(async () => {
    console.log(`Starting enhanced scraper for: ${targetUrl}`);
    const browser = await puppeteer.launch({ 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const visitedUrls = new Set();
    const productData = [];
    const queue = [{ url: targetUrl, type: 'category', depth: 0 }];
    const maxDepth = 2;

    while (queue.length > 0) {
        const { url, type, depth } = queue.shift();
        
        if (visitedUrls.has(url)) continue;
        visitedUrls.add(url);

        console.log(`[Queue: ${queue.length}] Processing (${type}): ${url}`);

        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });

        try {
            await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

            if (type === 'category' && depth < maxDepth) {
                // Look for sub-categories and products
                const links = await page.evaluate(() => {
                    const catalogueLinks = Array.from(document.querySelectorAll('a[href*="/catalogue/"]'))
                        .map(a => a.href)
                        .filter(href => !href.includes('#'));
                    
                    const productLinks = Array.from(document.querySelectorAll('a[href*="/product/"]'))
                        .map(a => a.href)
                        .filter(href => !href.includes('#'));

                    return { 
                        categories: [...new Set(catalogueLinks)], 
                        products: [...new Set(productLinks)] 
                    };
                });

                console.log(`Found ${links.categories.length} sub-categories and ${links.products.length} products on this page.`);

                // Add sub-categories to queue
                links.categories.forEach(catUrl => {
                    if (!visitedUrls.has(catUrl)) {
                        queue.push({ url: catUrl, type: 'category', depth: depth + 1 });
                    }
                });

                // Add products to queue
                links.products.forEach(prodUrl => {
                    if (!visitedUrls.has(prodUrl)) {
                        queue.push({ url: prodUrl, type: 'product', depth: depth + 1 });
                    }
                });

            } else if (type === 'product') {
                // Extract product details
                const details = await page.evaluate(() => {
                    const title = document.querySelector('h1')?.innerText?.trim() || '';
                    const imageUrl = document.querySelector('.product-main-image img')?.src || '';
                    const priceInc = document.querySelector('.price-inc')?.innerText?.trim() || '';
                    const priceEx = document.querySelector('.price-ex')?.innerText?.trim() || '';
                    const description = document.querySelector('.product-description')?.innerText?.trim() || '';
                    
                    // Extract attributes (Code, Equivalent, Pack/Size)
                    const attributes = {};
                    document.querySelectorAll('ul.attributes li').forEach(li => {
                        const text = li.innerText;
                        if (text.includes(':')) {
                            const [key, ...valueParts] = text.split(':');
                            const value = valueParts.join(':').trim();
                            attributes[key.trim()] = value;
                        }
                    });

                    // Extract specs/features from the description list
                    const specs = Array.from(document.querySelectorAll('.product-description ul li'))
                        .map(li => li.innerText.trim());

                    return { 
                        title, 
                        code: attributes['Product Code'] || '',
                        equivalentTo: attributes['Equivalent to'] || '',
                        packSize: attributes['Pack/Size'] || '',
                        priceInc, 
                        priceEx, 
                        description, 
                        imageUrl, 
                        specs,
                        attributes 
                    }
                });

                console.log(`   -> Scraped: ${details.title} (${details.code})`);
                productData.push({ ...details, url });
            }

        } catch (err) {
            console.error(`   !! Failed to process ${url}:`, err.message);
        } finally {
            await page.close();
        }

        // Periodic save to prevent data loss
        if (productData.length % 10 === 0 && productData.length > 0) {
            saveData(productData, targetUrl);
        }
    }

    // Final save
    saveData(productData, targetUrl);
    console.log(`Total products scraped: ${productData.length}`);
    await browser.close();
})();

function saveData(data, targetUrl) {
    if (data.length === 0) return;
    const categoryName = targetUrl.split('/').pop() || 'scraped_products';
    const outputPath = path.join(__dirname, '../../scraped_data', `${categoryName}.json`);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`Saved ${data.length} products to ${outputPath}`);
}
