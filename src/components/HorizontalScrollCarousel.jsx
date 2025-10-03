import React, { useEffect, useRef } from 'react';

const HorizontalScrollCarousel = ({
  items,
  showTitles = false,
  imageMaxHeight = '100vh'
}) => {
  const scrollContainerRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current || !imagesRef.current) return;

      const container = scrollContainerRef.current;
      const images = imagesRef.current;
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;

      // Calculate offsets - center first image and end with last image centered
      const firstImageWidth = images.children[0]?.offsetWidth || 0;
      const lastImageWidth = images.children[images.children.length - 1]?.offsetWidth || 0;

      // Use Math.max to handle cases where images are larger than viewport
      const initialOffset = Math.max(0, (window.innerWidth - firstImageWidth) / 2);
      const finalOffset = Math.max(0, (window.innerWidth - lastImageWidth) / 2);

      // Calculate scroll distance needed:
      // Start: translateX = initialOffset (first image centered)
      // End: translateX = finalOffset - scrollWidth
      // Distance = start - end
      const totalTranslate = initialOffset + images.scrollWidth - finalOffset;

      // Only apply transform when container is in view
      if (containerTop <= 0 && containerTop > -containerHeight) {
        const scrollProgress = Math.abs(containerTop) / containerHeight;
        const translateX = initialOffset - (scrollProgress * totalTranslate);
        images.style.transform = `translateX(${translateX}px)`;
      } else if (containerTop > 0) {
        // Reset to initial centered position
        images.style.transform = `translateX(${initialOffset}px)`;
      }
    };

    handleScroll(); // Initialize position
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={scrollContainerRef} style={{ height: `${items.length * 100}vh`, position: 'relative', marginTop: '32px' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        <div ref={imagesRef} className="flex items-center" style={{ height: '100vh', width: 'max-content', gap: '32px' }}>
          {items.map((item, index) => (
            showTitles ? (
              <div key={index} style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover"
                  style={{
                    maxHeight: '85vh',
                    maxWidth: index === items.length - 1 ? '100vw' : undefined,
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)',
                    borderRadius: '8px'
                  }}
                />
                <h2 className="text-xl font-bold text-[#F5E6D3] text-center mt-4">{item.name}</h2>
              </div>
            ) : (
              <img
                key={index}
                src={item.image || item}
                alt={item.name || `Image ${index + 1}`}
                className="object-cover"
                style={{
                  height: imageMaxHeight,
                  maxWidth: index === items.length - 1 ? '100vw' : undefined,
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)',
                  borderRadius: '8px'
                }}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;
