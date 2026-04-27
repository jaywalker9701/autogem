import { Search, Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <NavLink to="/" className="logo">
        AUTOGEM<span>.</span>
      </NavLink>
      
      <div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
      
      <nav className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
        <NavLink to="/products" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink>
        <NavLink to="/emission" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Emission Components</NavLink>
        <NavLink to="/under-pressure" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Under Pressure</NavLink>
        <NavLink to="/news" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>News & Insights</NavLink>
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Contact Us</NavLink>
      </nav>

      <div className="nav-actions">
        <Search size={20} className="search-trigger" />
        <NavLink to="/products" className="nav-cta hide-mobile">Browse Products</NavLink>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
