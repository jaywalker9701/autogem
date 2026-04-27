import React from 'react';
import { Package, GraduationCap, Headphones, TrendingUp, Megaphone, BarChart3, Users, Database } from 'lucide-react';

const Solutions = () => {
  return (
    <section className="section-padding">
      <div className="section-title">
        <p style={{ color: '#ce1126', fontWeight: '700', marginBottom: '10px' }}>Products, Processes, And People</p>
        <h2>Here are the solutions and services we offer</h2>
      </div>

      <div className="solutions-grid">
        <div className="solution-card">
          <div className="solution-icon"><Package size={30} /></div>
          <h3>Products</h3>
          <p>Premium solutions to add professionalism and raise revenue</p>
          <a href="#" className="solution-link">Visit our Online Shop →</a>
        </div>
        <div className="solution-card">
          <div className="solution-icon"><GraduationCap size={30} /></div>
          <h3>Training</h3>
          <p>Award winning training programme to empower technicians</p>
          <a href="#" className="solution-link">Autogem Knowledge Hub →</a>
        </div>
        <div className="solution-card">
          <div className="solution-icon"><Headphones size={30} /></div>
          <h3>Technical Support</h3>
          <p>Round-the-clock assistance and support whenever you need us</p>
          <a href="#" className="solution-link">Contact Us →</a>
        </div>
        <div className="solution-card">
          <div className="solution-icon"><TrendingUp size={30} /></div>
          <h3>Sales Support</h3>
          <p>Tailored tools and resources to boost business</p>
          <a href="#" className="solution-link">Contact Us →</a>
        </div>
      </div>

      {/* Second Row of Solutions */}
      <div className="solutions-grid" style={{ marginTop: '30px' }}>
        <div className="solution-card">
          <div className="solution-icon"><Megaphone size={30} /></div>
          <h3>Marketing</h3>
          <p>Digital assets and workshop creatives to make a big impression</p>
        </div>
        <div className="solution-card">
          <div className="solution-icon"><BarChart3 size={30} /></div>
          <h3>Benchmarking</h3>
          <p>Measuring skills, knowledge, sales performance and market trends</p>
        </div>
        <div className="solution-card">
          <div className="solution-icon"><Users size={30} /></div>
          <h3>Collaboration</h3>
          <p>Insights through programme reviews and focused discussions</p>
        </div>
        <div className="solution-card">
          <div className="solution-icon"><Database size={30} /></div>
          <h3>Data Management</h3>
          <p>In-house expertise provides exceptional performance</p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
