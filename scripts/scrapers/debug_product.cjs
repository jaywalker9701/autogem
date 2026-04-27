const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const url = 'https://shop.autogem.co.uk/product/adhesives-ba01/gemlok-nutlock-pg302';
    
    console.log(`Checking: ${url}`);
    await page.goto(url, { waitUntil: 'networkidle2' });
    
    const data = await page.evaluate(() => {
        const attributes = {};
        document.querySelectorAll('ul.attributes li').forEach(li => {
            attributes[li.innerText] = 'found';
            const label = li.querySelector('label')?.innerText;
            const text = li.innerText;
            attributes[`DEBUG_LABEL_${label}`] = text;
        });
        return {
            html: document.querySelector('ul.attributes')?.innerHTML,
            attributes
        };
    });
    
    console.log(JSON.stringify(data, null, 2));
    await browser.close();
})();
