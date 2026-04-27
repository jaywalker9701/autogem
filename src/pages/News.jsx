import React from 'react';
import { motion } from 'framer-motion';
import featuredImg from '../assets/news_featured.png';
import whatsappImg from '../assets/news_whatsapp.png';
import winterImg from '../assets/news_winter.png';
import vegasImg from '../assets/news_vegas.png';
import yearsImg from '../assets/news_20yrs.png';
import tyresafeImg from '../assets/news_tyresafe.png';

const News = () => {
  const posts = [
    {
      image: whatsappImg,
      date: "01/04/2026",
      title: 'Autogem "AI-Sensor®", an AI-Powered TPMS That Messages You on WhatsApp',
      desc: 'In an industry first, Autogem has "announced" a new AI-powered TPMS sensor designed to change how drivers interact with their vehicles.'
    },
    {
      image: featuredImg, // Placeholder for UP news
      date: "08/03/2026",
      title: "It's go, go, go for five-star Under Pressure 26!",
      desc: "It's a case of 'go, go, go' for Under Pressure '26, which can now be confirmed for a fifth consecutive year in what promises to be the most exciting chapter to date."
    },
    {
      image: tyresafeImg,
      date: "09/02/2026",
      title: "Autogem underlines road safety commitment with TyreSafe partnership",
      desc: "In a red-letter day for everyone associated with Autogem, we can officially reveal that we're now a member of TyreSafe, as we underline our commitment to improving road safety."
    },
    {
      image: winterImg,
      date: "08/01/2026",
      title: "Autogem urge workshops to get hot on TPMS as winter mornings mean warnings",
      desc: "As more dashboard warning lights glow amid snow and the arrival of Storm Goretti, Autogem is offering free industry award winning TPMS training to put more workshops in the driving seat."
    },
    {
      image: yearsImg,
      date: "04/12/2025",
      title: "Autogem celebrating two decades of excellence!",
      desc: "Autogem is reflecting on one of the most successful years in its history, to coincide with a 20-year anniversary in the aftermarket, marking two decades of growth, innovation, and a people-first approach."
    },
    {
      image: vegasImg,
      date: "28/10/2025",
      title: "Autogem set to dazzle in Vegas with glitzy showing at AAPEX",
      desc: "Autogem is set to shine in Vegas with a glitzy aftermarket showing at this year's AAPEX Show in Las Vegas, as we bring our cutting-edge automotive solutions to the largest stage in the Western Hemisphere."
    }
  ];

  return (
    <div className="news-page">
      {/* Header Section */}
      <section className="about-header">
        <div className="about-header-content">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            News & Insights
          </motion.h1>
        </div>
        <div className="header-tech-graphic"></div>
      </section>

      {/* Featured Section */}
      <section className="news-featured-section">
        <div className="featured-container">
          <motion.div 
            className="featured-image"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img src={featuredImg} alt="Featured Studio" />
            <div className="episode-tag">NEW EPISODE</div>
          </motion.div>
          <div className="featured-content">
            <span className="featured-badge">FEATURED</span>
            <p className="pub-date">Published On: 09/04/2026</p>
            <h2>Cranking up the volume on our first studio recording!</h2>
            <p className="f-desc">Autogem is cranking up the volume on the benefits of its TPMS programme, after taking to the studio to record a smash hit recording with Garage Talk Unwrapped - The Podcast</p>
            <a href="#" className="read-more-link">Read More →</a>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="news-grid-section">
        <div className="news-grid">
          {posts.map((post, idx) => (
            <motion.div 
              key={idx} 
              className="news-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="card-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="card-body">
                <p className="pub-date">Published On: {post.date}</p>
                <h3>{post.title}</h3>
                <p className="c-desc">{post.desc} <span className="read-more-inline">(Read More)</span></p>
                <div className="card-arrow">→</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;
