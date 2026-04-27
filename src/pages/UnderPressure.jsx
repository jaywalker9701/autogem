import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle, Folder, Trophy, Star } from 'lucide-react';
import heroBg from '../assets/up_hero.png';
import videoThumb from '../assets/up_video.png';
import sponsorsImg from '../assets/up_sponsors.png';

const UnderPressure = () => {
  return (
    <div className="under-pressure-page">
      {/* Hero Section */}
      <section className="up-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="up-hero-overlay"></div>
        <div className="up-hero-container">
          <div className="up-hero-left">
            <div className="up-logo-container">
              <span className="star-icon"><Star size={60} /></span>
              <h1>Under Pressure<span>26</span></h1>
            </div>
            <div className="up-hero-text">
              <p>Under Pressure is our award winning competition designed to celebrate TPMS excellence across the UK.</p>
              <p>It's the only competition focused on Tyre Pressure Monitoring Systems (TPMS), where participants identify, diagnose, and resolve complex issues while demonstrating their ability to engage with consumers.</p>
              <p>Under Pressure raises standards across the industry, shares best practice methods and celebrates the most talented professionals in the UK garage & tyre trade.</p>
            </div>
            
            {/* Countdown Boxes */}
            <div className="up-countdowns">
              <div className="countdown-row">
                <div className="countdown-label">
                  Qualifying rounds taking place on <strong>19, 20 and 21 May 2026</strong>
                </div>
                <div className="countdown-boxes">
                  <div className="c-box"><span>22</span> Days</div>
                  <div className="c-box"><span>08</span> Hrs</div>
                  <div className="c-box"><span>02</span> Min</div>
                  <div className="c-box"><span>45</span> Sec</div>
                </div>
              </div>
              <div className="countdown-row">
                <div className="countdown-label">
                  The final round takes place on <strong>June 24th 2026</strong>
                </div>
                <div className="countdown-boxes">
                  <div className="c-box"><span>58</span> Days</div>
                  <div className="c-box"><span>02</span> Hrs</div>
                  <div className="c-box"><span>02</span> Min</div>
                  <div className="c-box"><span>45</span> Sec</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="up-hero-right">
            <div className="up-video-card">
              <img src={videoThumb} alt="Under Pressure 25 Highlights" />
              <div className="video-overlay">
                <h3>Highlights</h3>
                <div className="stars-row">★★★★★</div>
                <p>Only The TPMS Competition</p>
                <div className="play-circle">▶</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="up-info-section">
        <div className="up-info-bg-slants"></div>
        <div className="up-info-container">
          <motion.div 
            className="info-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="info-icon-circle"><UserCircle size={28} /></div>
            <div className="info-content">
              <h3>Who can enter Under Pressure?</h3>
              <p>Under Pressure is open to all UK tyre technicians using our patented i-Sensor® technology.</p>
            </div>
          </motion.div>

          <motion.div 
            className="info-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="info-icon-circle"><Folder size={28} /></div>
            <div className="info-content">
              <h3>What category can I enter?</h3>
              <p>Categories for participating TPMS technicians will be comprised of:</p>
              <ul>
                <li>Large retailer network</li>
                <li>Small retailer</li>
                <li>Under-23</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="info-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="info-icon-circle"><Trophy size={28} /></div>
            <div className="info-content">
              <h3>The Road to the Pirelli Performance Centre</h3>
              <p>Qualifying rounds will take place on May 19th, 20th, and 21st, 2026. Qualifying will consist of a series of online questions relating to TPMS troubleshooting in a quiz format.</p>
              <p>Technicians with the highest scores will then progress to the final at the flagship Pirelli Performance Centre (PPC) in Burton-upon-Trent on June 24th.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsors & Hall of Fame Section */}
      <section className="up-footer-sections">
        <div className="up-sponsors">
          <h3>Under Pressure '26 Sponsors</h3>
          <div className="sponsors-grid">
            <img src={sponsorsImg} alt="Sponsors" />
          </div>
        </div>
        
        <div className="up-hall-of-fame">
          <div className="hof-divider"></div>
          <div className="hof-content">
            <div className="hof-icon-gold">
              <Trophy size={32} />
            </div>
            <h3>Under Pressure Hall of Fame</h3>
            <p>Come and meet our past winners, who have played a huge part in raising standards and making Under Pressure, the prestigious event it is today.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnderPressure;
