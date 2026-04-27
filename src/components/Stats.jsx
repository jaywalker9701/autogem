import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { value: "1963", label: "Year Founded" },
    { value: "10000", label: "Products" },
    { value: "5000+", label: "Customers" },
    { value: "75000sq/ft", label: "Freehold Warehouse" }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
