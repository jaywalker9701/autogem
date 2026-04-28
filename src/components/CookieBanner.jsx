import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, ShieldCheck, X } from 'lucide-react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Slight delay to allow page load before showing the banner
    const timer = setTimeout(() => {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        setIsVisible(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleConsent = (status) => {
    localStorage.setItem('cookieConsent', status);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="cookie-banner-wrapper"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
        >
          <div className="cookie-glass-card">
            <button 
              className="cookie-close-btn" 
              onClick={() => handleConsent('dismissed')}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            
            <div className="cookie-content-layout">
              <div className="cookie-icon-container">
                <div className="cookie-icon-pulse"></div>
                <Cookie size={32} className="cookie-icon" />
              </div>
              
              <div className="cookie-text-content">
                <h3>Your Privacy Matters</h3>
                <p>
                  We use cookies to ensure you get the best experience on our website, 
                  analyze site traffic, and deliver targeted content.
                </p>
              </div>
            </div>

            <div className="cookie-action-buttons">
              <button 
                className="btn-reject" 
                onClick={() => handleConsent('rejected')}
              >
                Reject All
              </button>
              <button 
                className="btn-accept" 
                onClick={() => handleConsent('accepted')}
              >
                <ShieldCheck size={18} />
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
