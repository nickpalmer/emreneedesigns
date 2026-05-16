import React, { useRef, useEffect } from 'react';

const ParallaxHero = ({ image, alt, children, objectPosition = 'center', backgroundSize = 'cover' }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

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
            backgroundPosition: objectPosition,
            backgroundSize,
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
