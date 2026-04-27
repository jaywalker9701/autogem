import React from 'react';
import { motion } from 'framer-motion';
import { Hourglass, Medal, Banknote, FileText, Briefcase, MonitorPlay, GraduationCap, ListChecks, Users, Search, Box } from 'lucide-react';
import vansImg from '../assets/about_vans.png';
import buildingImg from '../assets/about_building.png';
import isensorImg from '../assets/about_isensor.png';

const About = () => {
  return (
    <div className="about-page">
      {/* Header Section */}
      <section className="about-header">
        <div className="about-header-content">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h1>
        </div>
        <div className="header-tech-graphic"></div>
      </section>

      {/* Main Beyond Transactional Section */}
      <section className="about-beyond-section">
        <div className="about-beyond-bg-pattern"></div>
        <motion.div 
          className="about-card-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-main-card">
            <div className="card-left">
              <h2>Beyond Transactional. Beyond Expectations.</h2>
              <div className="card-text-item">
                <p>At Autogem, we've been building trusted partnerships since the 1960s by going beyond the transactional. Our mission is simple: to make our customers happy by delivering exceptional service and support.</p>
              </div>
              <div className="card-text-item">
                <p>Our award-winning team is dedicated to understanding your needs and providing tailored solutions that get the job done. Whether it's our comprehensive TPMS offering, high-quality workshop consumables, or in-house manufactured exhaust components supplied globally, we have the expertise and products to keep your business running like clockwork.</p>
              </div>
              <div className="card-text-item">
                <p>We take pride in being more than just a supplier—we're your dedicated partner. With multiple accolades, including four Tyre Industry Supplier of the Year awards, we offer top-notch technical support, training, and a steadfast commitment to quality.</p>
                <p className="strong-text">Choose Autogem, where care, expertise, and exclusive programmes make all the difference.</p>
              </div>
            </div>
            <div className="card-right">
              <img src={vansImg} alt="Autogem Vans" />
              <img src={buildingImg} alt="Autogem Building" />
              <img src={isensorImg} alt="i-Sensor Tool" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Ethos and Promise Section */}
      <section className="ethos-promise-section">
        <div className="ethos-container">
          <motion.div 
            className="ethos-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Autogem Ethos</h3>
            <p>Our company ethos can be defined in two words: <span className="red-text">'Beyond Transactional.'</span></p>
            <p>Autogem prides itself on partnership, featuring award winning training, technical support and industry-defining solutions which are unique to the industry.</p>
            <p>Our friendly, experienced team is always at the end of a phone, email or message whenever you need us, with some of the most extensive levels of knowledge in the industry on tap whenever required.</p>
          </motion.div>

          <motion.div 
            className="promise-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Our <span className="red-text">Promise</span> to You</h3>
            <p className="subtitle">All of our aftermarket solutions underpin the following pledges:</p>
            <div className="promise-icons">
              <div className="promise-item">
                <div className="p-icon"><Hourglass size={32} /></div>
                <p>To save time and add convenience</p>
              </div>
              <div className="promise-item">
                <div className="p-icon"><Medal size={32} /></div>
                <p>To provide an extra level of professionalism</p>
              </div>
              <div className="promise-item">
                <div className="p-icon"><Banknote size={32} /></div>
                <p>To add an extra revenue stream wherever possible</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Toolbox Section */}
      <section className="toolbox-section">
        <div className="toolbox-bg-pattern"></div>
        <div className="section-title">
          <h2>A Toolbox of Assets at Your Fingertip</h2>
          <div className="toolbox-subtitle">
            <p>We know that different people learn best in different ways, which is why our package of support is broad enough to suit everyone's needs.</p>
          </div>
        </div>

        <div className="toolbox-grid">
          {[
            { icon: <FileText size={28} />, label: "In-store workflow guides" },
            { icon: <Briefcase size={28} />, label: "Onboarding" },
            { icon: <MonitorPlay size={28} />, label: "e-Learning" },
            { icon: <GraduationCap size={28} />, label: "TtT: Train the trainer" },
            { icon: <ListChecks size={28} />, label: "Regional Manager checklists" },
            { icon: <Users size={28} />, label: "Quarterly training tune up sessions" },
            { icon: <Search size={28} />, label: "Mystery shopping" },
            { icon: <Box size={28} />, label: "Informative QR coded packaging" }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              className="toolbox-item"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="t-icon">{item.icon}</div>
              <p>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
