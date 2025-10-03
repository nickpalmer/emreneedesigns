import React from 'react';
import nameLogo from '../assets/images/name-logo.svg';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#286140',
      boxShadow: 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.3), inset 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
      height: '60px'
    }}>
      <div className="px-2 md:px-4 h-full flex items-center justify-between text-[#F5E6D3]">
        <img src={nameLogo} alt="M. Renee Designs Logo" style={{ maxHeight: '40px', width: 'auto', objectFit: 'contain', paddingLeft: '8px' }} />
        <p className="text-xs md:text-sm">&copy; {new Date().getFullYear()} M. Renee Designs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;