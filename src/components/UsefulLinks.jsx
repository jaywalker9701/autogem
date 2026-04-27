import React from 'react';
import { motion } from 'framer-motion';
import isensorImg from '../assets/isensor.png';
import shopImg from '../assets/shop.png';
import knowledgeImg from '../assets/knowledge.png';

const UsefulLinks = () => {
  const links = [
    {
      image: isensorImg,
      title: "Update Your i-Sensor Tool",
      description: "See How You Can Update Your Tool"
    },
    {
      image: shopImg,
      title: "Autogem Online Shop",
      description: "Browse Through 1000s Items"
    },
    {
      image: knowledgeImg,
      title: "Autogem Knowledge Hub",
      description: "Master Your TPMS Skills for Free!"
    }
  ];

  return (
    <section className="useful-links-section">
      <div className="wavy-bg"></div>
      <div className="section-title">
        <h2>Useful Links</h2>
        <p>Easily navigate to important resources, tools, and information you need.</p>
      </div>

      <div className="links-grid">
        {links.map((link, index) => (
          <motion.div 
            key={index} 
            className="link-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="link-card-img">
              <img src={link.image} alt={link.title} />
            </div>
            <div className="link-card-content">
              <h3>{link.title}</h3>
              <p>{link.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UsefulLinks;
