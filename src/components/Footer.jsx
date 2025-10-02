import React from 'react';
import nameLogo from '../assets/images/name-logo.svg';

const Footer = () => {
  return (
    <footer className="py-4 mt-8" style={{
      backgroundColor: '#286140',
      boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.3), 0 -2px 4px -1px rgba(0, 0, 0, 0.2)'
    }}>
      <div className="container mx-auto px-4 text-center text-[#F5E6D3]">
        <img src={nameLogo} alt="M. Renee Designs Logo" className="mx-auto" style={{ maxHeight: '80px', width: 'auto', objectFit: 'contain', marginTop: '32px', marginBottom: '16px' }} />
        <p>&copy; {new Date().getFullYear()} M. Renee Designs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;