import React from 'react';

const ParallaxHero = ({ image, alt, children, objectPosition = 'center' }) => {
  return (
    <div>
      <div
        role="img"
        aria-label={alt}
        style={{
          height: 'calc(100vh - var(--header-height))',
          backgroundImage: `url(${image})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: objectPosition,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
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
