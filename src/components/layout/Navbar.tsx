import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Target, Navigation, AlertTriangle, Info, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navLinks = [
    { name: 'Dashboard', path: '/', icon: <Shield size={20} /> },
    { name: 'Target ID', path: '/target-identification', icon: <Target size={20} /> },
    { name: 'Path Optimization', path: '/path-optimization', icon: <Navigation size={20} /> },
    { name: 'Threat Detection', path: '/threat-detection', icon: <AlertTriangle size={20} /> },
    { name: 'About', path: '/about', icon: <Info size={20} /> },
  ];
  
  return (
    <nav className={`sticky top-0 z-50 py-4 transition-all duration-300 ${
      scrolled ? 'bg-navy-900 shadow-lg' : 'bg-navy-900 bg-opacity-90'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="text-accent-teal" size={28} />
              </div>
              <div className="radar-ping"></div>
            </div>
            <span className="text-xl font-bold text-white">AI Warfare</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-2 py-2 transition-colors duration-300 ${
                  location.pathname === link.path 
                    ? 'text-accent-teal font-medium' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Mobile navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 rounded-lg bg-navy-800 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-3 px-4 py-3 ${
                  location.pathname === link.path 
                    ? 'bg-navy-700 text-accent-teal font-medium' 
                    : 'text-gray-300 hover:bg-navy-700 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;