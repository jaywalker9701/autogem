import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import EmissionComponents from './pages/EmissionComponents';
import UnderPressure from './pages/UnderPressure';
import News from './pages/News';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="site-wrapper">
        <TopBar />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/emission" element={<EmissionComponents />} />
          <Route path="/under-pressure" element={<UnderPressure />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<Home />} /> {/* Fallback to Home */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
