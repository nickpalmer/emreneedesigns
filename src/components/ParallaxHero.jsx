import React, { useRef, useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 768;

const ParallaxHero = ({ image, alt, children, objectPosition = 'center', backgroundSize = 'cover' }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < MOBILE_BREAKPOINT);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLandscape(img.naturalWidth > img.naturalHeight);
    };
    img.src = image;
  }, [image]);

  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      if (!containerRef.current || !imageRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        const offset = -rect.top * 0.3;
        imageRef.current.style.transform = `translateY(${offset}px)`;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateParallax();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const effectiveBackgroundSize = isMobile
    ? (isLandscape ? 'auto 130%' : '130% auto')
    : backgroundSize;
  const effectivePosition = isMobile ? 'center top' : objectPosition;

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        ref={containerRef}
        style={{
          height: 'calc(100vh - var(--header-height))',
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
        }}
      >
        <div
          ref={imageRef}
          role="img"
          aria-label={alt}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '130%',
            backgroundImage: `url(${image})`,
            backgroundPosition: effectivePosition,
            backgroundSize: effectiveBackgroundSize,
            backgroundRepeat: 'no-repeat',
            willChange: 'transform',
          }}
        />
      </div>
      {children && (
        <div style={{
          marginTop: '-120px',
          position: 'relative',
          zIndex: 10,
          padding: '0 15px 15px 15px',
        }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default ParallaxHero;
