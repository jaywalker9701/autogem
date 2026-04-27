const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const url = 'https://shop.autogem.co.uk/catalogue/adhesives-ba01';
    
    await page.goto(url, { waitUntil: 'networkidle2' });
    
    const products = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.product-list-item')).map(item => {
            return {
                title: item.querySelector('h3')?.innerText?.trim(),
                code: item.querySelector('.product-code')?.innerText?.trim(),
                price: item.querySelector('.price-inc')?.innerText?.trim(),
                html: item.innerHTML.substring(0, 500) // snippet
            };
        });
    });
    
    console.log(JSON.stringify(products, null, 2));
    await browser.close();
})();
