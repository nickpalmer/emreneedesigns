import React, { useState } from 'react';

const IframeLoader = ({ src, style, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ position: 'relative', ...style }}>
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(245, 230, 211, 0.5)',
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              border: '4px solid rgba(40, 97, 64, 0.3)',
              borderTop: '4px solid #286140',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }}
          />
          <p style={{ marginTop: '20px', color: '#286140', fontSize: '14px' }}>
            Loading Instagram feed...
          </p>
        </div>
      )}
      <iframe
        src={src}
        onLoad={() => setIsLoading(false)}
        style={{
          ...style,
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in',
        }}
        {...props}
      />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default IframeLoader;
