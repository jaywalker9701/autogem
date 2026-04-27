import React from 'react';
import { Youtube, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-top-border"></div>
      
      <div className="footer-container">
        {/* Column 1: Logo and Socials */}
        <div className="footer-col">
          <div className="footer-logo-container">
            <h2 className="footer-logo">AUTOGEM<span className="diamond-icon">◆</span></h2>
            <div className="social-icons">
              <a href="#"><Youtube size={20} /></a>
              <a href="#"><Linkedin size={20} /></a>
            </div>
            <div className="membership">
              <p>Proud member of:</p>
              <div className="membership-logos">
                <span className="member-logo">NTDA</span>
                <span className="member-logo">TyreSafe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Products */}
        <div className="footer-col">
          <h3>Products</h3>
          <ul className="footer-links">
            <li><a href="#">i-Sensor® EVO TPMS Tool</a></li>
            <li><a href="#">GemSeal Tyre Sealant</a></li>
            <li><a href="#">Autogem Online Shop</a></li>
            <li><a href="#">Autogem Emission Components</a></li>
          </ul>
        </div>

        {/* Column 3: Useful Links */}
        <div className="footer-col">
          <h3>Useful Links</h3>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><a href="#">Catalogues</a></li>
            <li><a href="#">News & Insights</a></li>
            <li><a href="#">Update i-Sensor Tool</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>Autogem House, Abbey Road, London, NW10 7GJ</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>0208 838 0910</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>sales@autogem.co.uk</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026 - Autogem - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
