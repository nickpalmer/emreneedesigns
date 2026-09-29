import React, { useState, useEffect, useCallback } from 'react';
import ProgressiveImage from './ProgressiveImage';

const LightboxGallery = ({ images, altPrefix = 'Gallery image', noPadding = false, gridClassName }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const isOpen = lightboxIndex !== null;

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => {
    setLightboxIndex(i => (i > 0 ? i - 1 : images.length - 1));
  }, [images.length]);
  const next = useCallback(() => {
    setLightboxIndex(i => (i < images.length - 1 ? i + 1 : 0));
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    document.documentElement.classList.add('lightbox-open');
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
      document.documentElement.classList.remove('lightbox-open');
    };
  }, [isOpen, close, prev, next]);

  return (
    <>
      <div style={noPadding ? undefined : { padding: '15px' }}>
        <div className={gridClassName || "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"}>
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer overflow-hidden"
              style={{
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
              }}
              onClick={() => setLightboxIndex(index)}
            >
              <ProgressiveImage
                src={image}
                alt={`${altPrefix} ${index + 1}`}
                className="w-full object-cover transition-transform duration-300 hover:scale-110"
                style={{ aspectRatio: '3/4' }}
              />
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)' }}
          onClick={close}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 z-50 cursor-pointer flex items-center justify-center"
            style={{
              width: '44px',
              height: '44px',
              background: 'rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              color: 'white',
              fontSize: '20px',
              lineHeight: 1,
            }}
            aria-label="Close lightbox"
          >
            ✕
          </button>

          {/* Previous arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 md:left-6 z-50 cursor-pointer flex items-center justify-center"
            style={{
              width: '48px',
              height: '48px',
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              color: 'white',
              fontSize: '24px',
              lineHeight: 1,
            }}
            aria-label="Previous image"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Image */}
          <img
            src={images[lightboxIndex]}
            alt={`${altPrefix} ${lightboxIndex + 1}`}
            className="max-h-[85vh] max-w-[85vw] object-contain"
            style={{
              borderRadius: '4px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 md:right-6 z-50 cursor-pointer flex items-center justify-center"
            style={{
              width: '48px',
              height: '48px',
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              color: 'white',
              fontSize: '24px',
              lineHeight: 1,
            }}
            aria-label="Next image"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Dots indicator */}
          <div
            className="absolute bottom-4 left-1/2 flex gap-2"
            style={{ transform: 'translateX(-50%)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setLightboxIndex(index)}
                className="cursor-pointer"
                style={{
                  width: index === lightboxIndex ? '10px' : '8px',
                  height: index === lightboxIndex ? '10px' : '8px',
                  borderRadius: '50%',
                  border: 'none',
                  padding: 0,
                  backgroundColor: index === lightboxIndex
                    ? 'rgba(255, 255, 255, 0.95)'
                    : 'rgba(255, 255, 255, 0.35)',
                  transition: 'all 0.2s ease',
                }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default LightboxGallery;
