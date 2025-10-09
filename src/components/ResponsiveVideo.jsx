import React, { useRef, useEffect, useState } from 'react';

const ResponsiveVideo = ({ className = '', style = {} }) => {
  const videoRef = useRef(null);
  const [currentSource, setCurrentSource] = useState('');

  useEffect(() => {
    const selectVideoSource = () => {
      const width = window.innerWidth;

      // Select appropriate video quality based on screen width
      if (width >= 1920) {
        return '/assets/looks_1080p.mp4';
      } else if (width >= 1280) {
        return '/assets/looks_720p.mp4';
      } else {
        return '/assets/looks_480p.mp4';
      }
    };

    const source = selectVideoSource();
    setCurrentSource(source);

    // Update video source on resize
    const handleResize = () => {
      const newSource = selectVideoSource();
      if (newSource !== currentSource && videoRef.current) {
        const currentTime = videoRef.current.currentTime;
        const wasPaused = videoRef.current.paused;

        setCurrentSource(newSource);

        // Restore playback state after source change
        videoRef.current.addEventListener('loadedmetadata', () => {
          videoRef.current.currentTime = currentTime;
          if (!wasPaused) {
            videoRef.current.play().catch(err => console.log('Autoplay prevented:', err));
          }
        }, { once: true });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSource]);

  return (
    <video
      ref={videoRef}
      className={className}
      style={style}
      controls
      loop
      playsInline
      preload="metadata"
      src={currentSource}
    >
      <source src="/assets/looks_1080p.mp4" type="video/mp4" />
      <source src="/assets/looks_720p.mp4" type="video/mp4" />
      <source src="/assets/looks_480p.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default ResponsiveVideo;
