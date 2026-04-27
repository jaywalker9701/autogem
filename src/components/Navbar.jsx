import React from 'react';
import { Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="main-header">
      <NavLink to="/" className="logo">
        AUTOGEM<span>.</span>
      </NavLink>
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink>
        <NavLink to="/emission" className={({ isActive }) => isActive ? 'active' : ''}>Emission Components</NavLink>
        <NavLink to="/under-pressure" className={({ isActive }) => isActive ? 'active' : ''}>Under Pressure</NavLink>
        <NavLink to="/news" className={({ isActive }) => isActive ? 'active' : ''}>News & Insights</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact Us</NavLink>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Search size={20} color="#0c152c" style={{ cursor: 'pointer' }} />
        <NavLink to="/products" className="nav-cta">Browse Products</NavLink>
      </div>
    </header>
  );
};

export default Navbar;
