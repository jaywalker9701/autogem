import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This industry is full of some great businesses that work very well from a transactional base. But we are a very connected business. People like Autogem, that do collaborate with us, that understand our needs as well as the industry needs, are really important. We are a traditional tyre business and we're growing into more of an auto care business, having that technical aspect from Autogem, making sure they collaborate, making sure they understand where we have gaps and that we're actually working towards making sure we leverage that as well.",
      author: "Retail director, national workshop chain"
    },
    {
      quote: "I don't think we've ever looked Autogem as a supplier. They are a business partner. They are a friend of our business and we are a friend of their business. The training, the support they give us, always bringing new products to the table for us to look at. Different pieces of software technology. They're instrumental to the success of our business.",
      author: "Retail director, regional workshop chain"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-bg-pattern"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="testimonials-header"
      >
        <h2>Trusted by Industry Leaders</h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="testimonials-container"
      >
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-content">
                <p>"{t.quote}"</p>
              </div>
              <div className="author-info">
                <p>{t.author}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
