import React from 'react';
import Logo from './Logo';
import NameLogo from './NameLogo';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--header-footer-bg)',
      boxShadow: 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.3), inset 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
      height: '100px'
    }}>
      <div className="px-2 md:px-4 h-full flex items-center justify-between" style={{ color: 'var(--header-footer-text)' }}>
        <div className="flex items-center gap-2 md:gap-4">
          <Logo style={{ maxHeight: '40px', width: 'auto', objectFit: 'contain', paddingLeft: '8px' }} />
          <NameLogo style={{ maxHeight: '40px', width: 'auto', objectFit: 'contain' }} />
        </div>
        <p className="text-xs md:text-sm">&copy; {new Date().getFullYear()} M. Renee Designs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;