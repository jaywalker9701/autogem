import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Truck, CheckCircle, Send } from 'lucide-react';
import videoThumb from '../assets/emission_video.png';
import productsImg from '../assets/emission_products.png';

const EmissionComponents = () => {
  return (
    <div className="emission-page">
      {/* Header Section */}
      <section className="about-header">
        <div className="about-header-content">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Autogem Emission Components
          </motion.h1>
        </div>
        <div className="header-tech-graphic"></div>
      </section>

      {/* Hero Section */}
      <section className="emission-hero">
        <div className="emission-hero-container">
          <div className="emission-hero-text">
            <h2>Specialized Emission Solutions for Diverse Applications</h2>
            <p>Delivering high-performance emission solutions for OEMs, aftermarket manufacturers and automotive distributors.</p>
            <div className="emission-hero-btns">
              <a href="#" className="btn-navy">Our Catalogue</a>
              <a href="#" className="btn-outline">Get in Touch</a>
            </div>
          </div>
          <div className="emission-hero-video">
            <div className="video-wrapper">
              <img src={videoThumb} alt="Innovation Video" />
              <div className="play-button">▶</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="emission-categories">
        <div className="categories-container">
          <div className="categories-left">
            <img src={productsImg} alt="Emission Products" />
          </div>
          <div className="categories-right">
            <div className="cat-box navy">
              <h3>Gaskets</h3>
              <p>High-performance sealing solutions</p>
            </div>
            <div className="cat-box red">
              <h3>Clamps</h3>
              <p>Leak-Proof and Secure Emission Couplings</p>
            </div>
            <div className="cat-box red">
              <h3>Rubber Mountings</h3>
              <p>Vibration dampening and noise reduction components</p>
            </div>
            <div className="cat-box navy">
              <h3>Fitting Kits</h3>
              <p>Comprehensive fitting solutions for seamless installation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="commitment-section">
        <div className="commitment-container">
          <div className="commitment-left">
            <h3>Our Commitment to Quality</h3>
            <p>At the heart of our operations, we place a strong emphasis on rigorous quality control processes to ensure each component meets the highest standards. We test for accuracy and performance, ensuring long-lasting reliability for our customers.</p>
          </div>
          <div className="commitment-right">
            <div className="commit-item">
              <Hammer size={24} className="commit-icon" />
              <div>
                <h4>Durability</h4>
                <p>Engineered for long-lasting performance</p>
              </div>
            </div>
            <div className="commit-item">
              <Truck size={24} className="commit-icon" />
              <div>
                <h4>Timely Delivery</h4>
                <p>Extensive stockholding for prompt order fulfilment</p>
              </div>
            </div>
            <div className="commit-item">
              <CheckCircle size={24} className="commit-icon" />
              <div>
                <h4>OE Compliance</h4>
                <p>Designed to meet industry and customer specifications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="emission-contact">
        <div className="contact-container">
          <h2>Contact us</h2>
          <form className="contact-form">
            <div className="form-group">
              <label>Your Name *</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input type="tel" required />
            </div>
            <div className="form-group">
              <label>Message *</label>
              <textarea rows="4" required></textarea>
            </div>
            <div className="recaptcha-placeholder">
              <div className="captcha-box">
                <span>protected by reCAPTCHA</span>
              </div>
            </div>
            <button type="submit" className="btn-submit">
              Send Call Back Request →
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EmissionComponents;
