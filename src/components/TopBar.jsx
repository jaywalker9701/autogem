import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-info">
        <div><MapPin size={14} /> Park Royal, London</div>
        <div><Phone size={14} /> 0208 838 0910</div>
        <div><Mail size={14} /> sales@autogem.co.uk</div>
      </div>
      <div style={{ display: 'flex', gap: '15px' }}>
        <span>Follow Us:</span>
        {/* Social Icons would go here */}
      </div>
    </div>
  );
};

export default TopBar;
