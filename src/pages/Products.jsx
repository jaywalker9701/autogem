import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import productsData from '../data/products.json';
import { motion, AnimatePresence } from 'framer-motion';

const Products = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Extract hierarchical categories
    const categoryGroups = useMemo(() => {
        const groups = {};
        productsData.forEach(p => {
            if (!groups[p.mainCategory]) groups[p.mainCategory] = new Set();
            groups[p.mainCategory].add(p.subCategory);
        });
        return groups;
    }, []);

    // Filter products
    const filteredProducts = useMemo(() => {
        return productsData.filter(product => {
            const matchesCategory = selectedCategory === 'All' || 
                                 product.mainCategory === selectedCategory || 
                                 product.subCategory === selectedCategory;
            const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                 product.code.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    // Format subcategory names for display (e.g., "emery-paper-cc02" -> "Emery Paper")
    const formatName = (name) => {
        return name
            .split('-')
            .filter(part => !part.match(/[a-z]{2}\d{2}/)) // Remove codes like ba01, cc02
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <div className="products-page">
            <div className="products-hero">
                <div className="hero-content">
                    <h1>Our <span>Catalog</span></h1>
                    <p>Browse our extensive range of high-quality workshop consumables and tools.</p>
                </div>
            </div>

            <div className="products-layout section-padding">
                <aside className="products-sidebar">
                    <div className="sidebar-section">
                        <h3>Search</h3>
                        <div className="search-box">
                            <input 
                                type="text" 
                                placeholder="Name or code..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="sidebar-section">
                        <button 
                            className={`category-item all-btn ${selectedCategory === 'All' ? 'active' : ''}`}
                            onClick={() => setSelectedCategory('All')}
                        >
                            All Products
                            <span className="cat-count">({productsData.length})</span>
                        </button>
                        
                        {Object.keys(categoryGroups).map(mainCat => (
                            <div key={mainCat} className="main-cat-group">
                                <h4 onClick={() => setSelectedCategory(mainCat)} className={selectedCategory === mainCat ? 'active' : ''}>
                                    {mainCat}
                                </h4>
                                <div className="sub-cat-list">
                                    {[...categoryGroups[mainCat]].map(subCat => (
                                        <button 
                                            key={subCat}
                                            className={`category-item sub-item ${selectedCategory === subCat ? 'active' : ''}`}
                                            onClick={() => setSelectedCategory(subCat)}
                                        >
                                            {formatName(subCat)}
                                            <span className="cat-count">
                                                ({productsData.filter(p => p.subCategory === subCat).length})
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>

                <main className="products-content">
                    <div className="products-grid">
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product, index) => (
                                <motion.div 
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: (index % 3) * 0.1 }}
                                    key={`${product.code}-${index}`} 
                                    className="product-card"
                                    onClick={() => navigate(`/product/${product.code}`)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="product-image">
                                        {product.imageUrl ? (
                                            <img 
                                                src={product.imageUrl} 
                                                alt={product.title} 
                                                onError={(e) => { 
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                        ) : null}
                                        <div className="img-placeholder" style={{ display: product.imageUrl ? 'none' : 'flex' }}>
                                            AUTOGEM<span>.</span>
                                        </div>
                                        {product.inStock && <span className="stock-badge">In Stock</span>}
                                    </div>
                                    <div className="product-info">
                                        <span className="product-category">{product.subCategory}</span>
                                        <h3>{product.title}</h3>
                                        <div className="product-meta">
                                            <span className="product-code">Code: {product.code}</span>
                                            <span className="product-pack">Pack: {product.packSize}</span>
                                        </div>
                                        <div className="product-footer">
                                            <div className="price-box">
                                                {product.priceInc && (
                                                    <span className="price">£{product.priceInc} <small>inc VAT</small></span>
                                                )}
                                            </div>
                                            <button className="add-quote-btn">View Details</button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="no-results">
                            <h3>No products found matching your search.</h3>
                            <p>Try different keywords or category.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Products;
