import React, { useState, useEffect } from 'react';

const ProgressiveImage = ({
  src,
  placeholder = null,
  alt = '',
  className = '',
  style = {},
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(placeholder || src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setImgSrc(src);
      setIsLoading(false);
    };

    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <div style={{ position: 'relative', ...style }}>
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        loading="lazy"
        style={{
          ...style,
          filter: isLoading ? 'blur(20px)' : 'none',
          transition: 'filter 0.3s ease-out',
        }}
        {...props}
      />
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderRadius: 'inherit',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              border: '3px solid rgba(40, 97, 64, 0.3)',
              borderTop: '3px solid #286140',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }}
          />
        </div>
      )}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ProgressiveImage;
