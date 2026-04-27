const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../scraped_data');
const outputFile = path.join(__dirname, '../src/data/products.json');

const allProducts = [];

function readDirRecursive(dir, categoryName = '') {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            readDirRecursive(fullPath, file);
        } else if (file.endsWith('.json')) {
            const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
            const subCategory = file.replace('.json', '');
            
            data.forEach(product => {
                allProducts.push({
                    ...product,
                    mainCategory: categoryName || 'Other',
                    subCategory: subCategory
                });
            });
        }
    });
}

if (!fs.existsSync(path.dirname(outputFile))) {
    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
}

readDirRecursive(baseDir);

fs.writeFileSync(outputFile, JSON.stringify(allProducts, null, 2));
console.log(`Merged ${allProducts.length} products into ${outputFile}`);
