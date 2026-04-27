import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty-page section-padding text-center">
                <div className="empty-icon"><ShoppingBag size={80} /></div>
                <h2>Your cart is empty</h2>
                <p>Browse our catalog to add products to your cart.</p>
                <button onClick={() => navigate('/products')} className="btn-navy mt-4">Start Shopping</button>
            </div>
        );
    }

    return (
        <div className="cart-page section-padding">
            <div className="container">
                <h1 className="page-title">Shopping <span>Cart</span></h1>
                
                <div className="cart-layout">
                    <div className="cart-items-list">
                        {cartItems.map((item) => (
                            <div key={item.code} className="cart-item-row">
                                <div className="item-img">
                                    {item.imageUrl ? (
                                        <img src={item.imageUrl} alt={item.title} />
                                    ) : (
                                        <div className="img-placeholder-small">A.</div>
                                    )}
                                </div>
                                <div className="item-details">
                                    <h3>{item.title}</h3>
                                    <span className="code">Code: {item.code}</span>
                                </div>
                                <div className="item-price">
                                    £{item.priceInc}
                                </div>
                                <div className="item-qty">
                                    <div className="qty-controls">
                                        <button onClick={() => updateQuantity(item.code, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.code, item.quantity + 1)}>+</button>
                                    </div>
                                </div>
                                <div className="item-subtotal">
                                    £{(parseFloat(item.priceInc) * item.quantity).toFixed(2)}
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(item.code)}>
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <aside className="cart-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>£{cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Delivery</span>
                            <span className="free">FREE</span>
                        </div>
                        <div className="summary-total">
                            <span>Total (Inc VAT)</span>
                            <span>£{cartTotal.toFixed(2)}</span>
                        </div>
                        <button className="checkout-btn" onClick={() => navigate('/checkout')}>
                            Proceed to Checkout <ArrowRight size={18} />
                        </button>
                        <button className="continue-btn" onClick={() => navigate('/products')}>
                            Continue Shopping
                        </button>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Cart;
