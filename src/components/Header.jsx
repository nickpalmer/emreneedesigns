import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import nameLogo from '../assets/images/name-logo.svg';
import { useScrollDirection } from '../hooks/useScrollDirection';

const Header = () => {
  const scrollDirection = useScrollDirection();
  const location = useLocation();
  const [isHovered, setIsHovered] = React.useState(false);
  const [isTouched, setIsTouched] = React.useState(false);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  const isActive = (path) => {
    return location.pathname === path;
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const scrollDiff = Math.abs(currentScrollY - lastScrollY);

      if (scrollDiff > 50) {
        if (isTouched) {
          setIsTouched(false);
        }
        if (scrollDirection === "down" && isHovered && !isTouched) {
          setIsHovered(false);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDirection, isTouched, isHovered, lastScrollY]);

  const isCompact = scrollDirection === "down" && !isHovered && !isTouched;

  return (
    <header
      className={`sticky top-0 z-50 bg-[#286140] transition-all duration-300 ease-in-out ${
        isCompact ? 'h-[50px] md:h-[70px]' : 'h-[60px] md:h-[86px] w-full'
      }`}
      style={{
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        width: isCompact ? '100px' : '100%'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsTouched(true)}
    >
      <div className={`flex items-center h-full transition-all duration-300 ${
        isCompact ? 'py-1 justify-center w-full' : 'px-2 md:px-4 py-2 md:py-[11px] justify-between'
      }`}>
        <div className={`flex items-center gap-2 md:gap-4 ${isCompact ? 'justify-center' : ''}`}>
          <Link to="/" className={`transition-all duration-300 ${isCompact ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
            <img
              src={logo}
              alt="M. Renee Designs Logo"
              className={`w-auto object-contain transition-all duration-300 ${
                isCompact ? 'max-h-[32px] md:max-h-[50px]' : 'max-h-[40px] md:max-h-[60px]'
              }`}
              style={{ paddingLeft: isCompact ? '0' : '8px' }}
            />
          </Link>
          <Link to="/">
            <img
              src={nameLogo}
              alt="M. Renee Designs Name"
              className={`w-auto object-contain transition-all duration-300 ${
                isCompact ? 'max-h-[32px] md:max-h-[50px]' : 'max-h-[40px] md:max-h-[60px]'
              }`}
              style={{ margin: isCompact ? 'auto' : '0' }}
            />
          </Link>
        </div>
        <nav className={`transition-all duration-300 ${
          isCompact ? 'opacity-0 pointer-events-none w-0 overflow-hidden' : 'opacity-100'
        }`}>
          <ul className="flex list-none" style={{ margin: 0, padding: 0, gap: '4px' }}>
            <li>
              <Link to="/" className={`block text-[#F5E6D3] hover:text-[#B86125] transition-colors text-xs md:text-base ${isActive('/') ? 'underline' : ''}`} style={{ padding: '8px 8px', textDecoration: isActive('/') ? 'underline' : 'none' }}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={`block text-[#F5E6D3] hover:text-[#B86125] transition-colors text-xs md:text-base ${isActive('/about') ? 'underline' : ''}`} style={{ padding: '8px 8px', textDecoration: isActive('/about') ? 'underline' : 'none' }}>About</Link>
            </li>
            <li>
              <Link to="/designs" className={`block text-[#F5E6D3] hover:text-[#B86125] transition-colors text-xs md:text-base ${isActive('/designs') ? 'underline' : ''}`} style={{ padding: '8px 8px', textDecoration: isActive('/designs') ? 'underline' : 'none' }}>Designs</Link>
            </li>
            <li>
              <Link to="/custom" className={`block text-[#F5E6D3] hover:text-[#B86125] transition-colors text-xs md:text-base ${isActive('/custom') ? 'underline' : ''}`} style={{ padding: '8px 8px', textDecoration: isActive('/custom') ? 'underline' : 'none' }}>Custom</Link>
            </li>
            <li>
              <Link to="/contact" className={`block text-[#F5E6D3] hover:text-[#B86125] transition-colors text-xs md:text-base ${isActive('/contact') ? 'underline' : ''}`} style={{ padding: '8px 8px', textDecoration: isActive('/contact') ? 'underline' : 'none' }}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
