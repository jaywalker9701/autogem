import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ShoppingCart, CheckCircle, ShieldCheck, Truck } from 'lucide-react';
import productsData from '../data/products.json';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { code } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);

    const product = productsData.find(p => p.code === code);

    if (!product) {
        return (
            <div className="section-padding text-center">
                <h2>Product not found</h2>
                <button onClick={() => navigate('/products')} className="btn-navy mt-4">Back to Products</button>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="product-detail-page section-padding">
            <div className="container">
                <button onClick={() => navigate(-1)} className="back-btn">
                    <ChevronLeft size={20} /> Back to Results
                </button>

                <div className="product-detail-grid">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="detail-image"
                    >
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
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="detail-info"
                    >
                        <span className="detail-cat">{product.mainCategory} / {product.subCategory}</span>
                        <h1>{product.title}</h1>
                        <div className="detail-meta">
                            <span className="code">Part Number: <strong>{product.code}</strong></span>
                            {product.inStock && <span className="stock-tag">In Stock</span>}
                        </div>

                        <div className="detail-price-box">
                            <div className="price-main">
                                <span className="price-label">Price inc VAT</span>
                                <span className="price-val">£{product.priceInc || '0.00'}</span>
                            </div>
                            <div className="pack-info">
                                <span>Pack Size: <strong>{product.packSize}</strong></span>
                            </div>
                        </div>

                        <div className="detail-description">
                            <h3>Product Description</h3>
                            <p>{product.description || 'Professional grade automotive component engineered for durability and high performance. Part of the Autogem range of workshop essentials.'}</p>
                            {product.equivalentTo && (
                                <p className="equiv">Equivalent to: <strong>{product.equivalentTo}</strong></p>
                            )}
                        </div>

                        <div className="purchase-controls">
                            <div className="qty-selector">
                                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(q => q + 1)}>+</button>
                            </div>
                            <button 
                                className={`add-to-cart-btn ${added ? 'added' : ''}`}
                                onClick={handleAddToCart}
                            >
                                {added ? <><CheckCircle size={20} /> Added to Cart</> : <><ShoppingCart size={20} /> Add to Cart</>}
                            </button>
                        </div>

                        <div className="trust-badges-detail">
                            <div className="t-badge">
                                <Truck size={18} />
                                <span>Next Day Delivery</span>
                            </div>
                            <div className="t-badge">
                                <ShieldCheck size={18} />
                                <span>Quality Guaranteed</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
