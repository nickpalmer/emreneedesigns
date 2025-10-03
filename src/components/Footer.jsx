import React from 'react';
import logo from '../assets/images/logo.svg';
import nameLogo from '../assets/images/name-logo.svg';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#286140',
      boxShadow: 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.3), inset 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
      height: '60px'
    }}>
      <div className="px-2 md:px-4 h-full flex items-center justify-between text-[#F5E6D3]">
        <div className="flex items-center gap-2 md:gap-4">
          <img src={logo} alt="M. Reneé Designs Logo" style={{ maxHeight: '40px', width: 'auto', objectFit: 'contain', paddingLeft: '8px' }} />
          <img src={nameLogo} alt="M. Reneé Designs Name" style={{ maxHeight: '40px', width: 'auto', objectFit: 'contain' }} />
        </div>
        <p className="text-xs md:text-sm">&copy; {new Date().getFullYear()} M. Reneé Designs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;