import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import nameLogo from '../assets/images/name-logo.svg';
import { useScrollDirection } from '../hooks/useScrollDirection';

const Header = () => {
  const scrollDirection = useScrollDirection();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-[#286140] ${
        scrollDirection === "up" ? "transition-transform duration-300 ease-in-out translate-y-0" : ""
      }`}
      style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)' }}
    >
      <div className="px-4 py-[11px] flex justify-between items-center h-[86px]">
        <div className="flex items-center" style={{ gap: '16px' }}>
          <Link to="/">
            <img src={nameLogo} alt="M. Renee Designs Name" className="max-h-[60px] w-auto object-contain" style={{ paddingLeft: '16px' }} />
          </Link>
          <Link to="/">
            <img src={logo} alt="M. Renee Designs Logo" className="max-h-[60px] w-auto object-contain" />
          </Link>
        </div>
        <nav>
          <ul className="flex list-none" style={{ margin: 0, padding: 0, gap: '8px' }}>
            <li>
              <Link to="/" className={`block text-[#F5E6D3] hover:text-[#B86125] transition-colors ${isActive('/') ? 'underline' : ''}`} style={{ padding: '12px 24px', textDecoration: isActive('/') ? 'underline' : 'none' }}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={`block text-[#F5E6D3] hover:text-[#B86125] transition-colors ${isActive('/about') ? 'underline' : ''}`} style={{ padding: '12px 24px', textDecoration: isActive('/about') ? 'underline' : 'none' }}>About</Link>
            </li>
            <li>
              <Link to="/designs" className={`block text-[#F5E6D3] hover:text-[#B86125] transition-colors ${isActive('/designs') ? 'underline' : ''}`} style={{ padding: '12px 24px', textDecoration: isActive('/designs') ? 'underline' : 'none' }}>Designs</Link>
            </li>
            <li>
              <Link to="/custom" className={`block text-[#F5E6D3] hover:text-[#B86125] transition-colors ${isActive('/custom') ? 'underline' : ''}`} style={{ padding: '12px 24px', textDecoration: isActive('/custom') ? 'underline' : 'none' }}>Custom</Link>
            </li>
            <li>
              <Link to="/contact" className={`block text-[#F5E6D3] hover:text-[#B86125] transition-colors ${isActive('/contact') ? 'underline' : ''}`} style={{ padding: '12px 24px', textDecoration: isActive('/contact') ? 'underline' : 'none' }}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
