import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import locationImg from '../assets/about_building.png';
import teamImg from '../assets/news_featured.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="about-header">
        <div className="about-header-content">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
        </div>
        <div className="header-tech-graphic"></div>
      </section>

      {/* Top Cards Section */}
      <section className="contact-top-cards">
        <div className="contact-cards-container">
          <motion.div 
            className="contact-info-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="card-image-box">
              <img src={locationImg} alt="Location" />
              <div className="image-overlay">
                <h3>Office & Warehouse Location</h3>
              </div>
            </div>
            <div className="card-bottom-text">
              <p>Park Royal, London, NW10 7GJ</p>
            </div>
          </motion.div>

          <motion.div 
            className="contact-info-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="card-image-box">
              <img src={teamImg} alt="Email Team" />
              <div className="image-overlay">
                <h3>Email Our Team</h3>
              </div>
            </div>
            <div className="card-bottom-text">
              <p>sales@autogem.co.uk</p>
            </div>
          </motion.div>

          <motion.div 
            className="contact-info-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="card-image-box">
              <div className="placeholder-hours-bg">
                <Clock size={48} color="rgba(255,255,255,0.2)" />
              </div>
              <div className="image-overlay">
                <h3>Working Hours</h3>
              </div>
            </div>
            <div className="card-bottom-text">
              <p>Monday to Friday : 9am – 5:30pm</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Split Section */}
      <section className="contact-main-split">
        <div className="split-container">
          <div className="split-left">
            <p className="tagline">Passionate – Progressive – Professional</p>
            <h2>We Want to Hear From You!</h2>
            <div className="split-text">
              <p>We'd be delighted to discuss your aftermarket requirements and explore how we can benefit your business. Whether you have a question, need support, or want to learn more about our products, we're here to help.</p>
              <p>You can fill out our call-back request form, and we'll get back to you at a time that's convenient. Alternatively, feel free to reach out via email at sales@autogem.co.uk or chat with us live on our website.</p>
              <p>Our headquarters is based in Park Royal, London, and we're always ready to connect. Simply fill in your details, click the red button, and we'll look forward to speaking with you soon!</p>
              <p>Alternatively, call:</p>
            </div>
            <div className="contact-phone-big">
              <div className="phone-icon-bg">
                <Phone size={24} fill="currentColor" />
              </div>
              <span>+44 208 838 0910</span>
            </div>
          </div>

          <div className="split-right">
            <div className="contact-form-card">
              <h3>Contact Us</h3>
              <p className="form-subtitle">We'd love to hear from you! Please fill out the form and we'll get back to you as soon as possible.</p>
              
              <form className="multi-step-form">
                <div className="form-row">
                  <div className="form-item">
                    <label>First Name*</label>
                    <input type="text" placeholder="" />
                  </div>
                  <div className="form-item">
                    <label>Last Name*</label>
                    <input type="text" placeholder="" />
                  </div>
                </div>
                <div className="form-item full-width">
                  <label>Email*</label>
                  <input type="email" placeholder="" />
                </div>
                
                <div className="form-progress">
                  <div className="progress-text">1/2</div>
                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>
                </div>

                <button type="button" className="btn-next">
                  Next <ChevronRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps?q=Autogem%20Invicta%20Abbey%20Rd%20London%20NW10%207GJ&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '15px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Autogem Invicta Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
