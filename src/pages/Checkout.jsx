import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
    const { cartItems, cartTotal } = useCart();
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);

    if (cartItems.length === 0) {
        navigate('/cart');
        return null;
    }

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setShowAlert(true);
    };

    return (
        <div className="checkout-page section-padding">
            <div className="container">
                <h1 className="page-title">Check<span>out</span></h1>

                <div className="checkout-grid">
                    <div className="checkout-form-area">
                        <form onSubmit={handlePlaceOrder}>
                            <div className="form-section">
                                <h3>Contact Information</h3>
                                <div className="form-row">
                                    <div className="input-group">
                                        <label>Email Address</label>
                                        <input type="email" required placeholder="your@email.com" />
                                    </div>
                                    <div className="input-group">
                                        <label>Phone Number</label>
                                        <input type="tel" required placeholder="+44 123 456789" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-section">
                                <h3>Shipping Address</h3>
                                <div className="form-row">
                                    <div className="input-group">
                                        <label>Full Name</label>
                                        <input type="text" required placeholder="John Doe" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-group">
                                        <label>Address Line 1</label>
                                        <input type="text" required placeholder="123 Street Name" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-group">
                                        <label>City</label>
                                        <input type="text" required placeholder="London" />
                                    </div>
                                    <div className="input-group">
                                        <label>Postcode</label>
                                        <input type="text" required placeholder="SW1A 1AA" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-section">
                                <h3>Payment Method</h3>
                                <div className="payment-options">
                                    <div className="p-option active">
                                        <input type="radio" checked readOnly />
                                        <label>Invoice to Account</label>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="place-order-btn">
                                Place Order (£{cartTotal.toFixed(2)})
                            </button>
                        </form>
                    </div>

                    <aside className="checkout-summary">
                        <h3>Order Details</h3>
                        <div className="checkout-items">
                            {cartItems.map(item => (
                                <div key={item.code} className="mini-item">
                                    <span className="qty">{item.quantity}x</span>
                                    <span className="name">{item.title}</span>
                                    <span className="price">£{(parseFloat(item.priceInc) * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        <div className="summary-footer">
                            <div className="row">
                                <span>Subtotal</span>
                                <span>£{cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="row total">
                                <span>Grand Total</span>
                                <span>£{cartTotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Capacity Alert Modal */}
            <AnimatePresence>
                {showAlert && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-overlay"
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="capacity-modal"
                        >
                            <button className="close-modal" onClick={() => setShowAlert(false)}>
                                <X size={20} />
                            </button>
                            <div className="modal-icon">
                                <AlertTriangle size={60} color="#e31e24" />
                            </div>
                            <h2>Order Limit Reached</h2>
                            <p className="urdu-msg">"Hamari capacity full hy is lia ham order nai ly rahy"</p>
                            <p className="eng-msg">Due to exceptionally high demand, our production capacity is currently full. We are temporarily not accepting new orders. Please check back later.</p>
                            <button className="btn-navy" onClick={() => setShowAlert(false)}>Understand</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Checkout;
