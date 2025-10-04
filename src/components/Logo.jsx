import React, { useState, useEffect } from 'react';
import logoSvgUrl from '../assets/images/logo-dynamic.svg';

const Logo = ({ className, style }) => {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    // Fetch and load the SVG
    fetch(logoSvgUrl)
      .then(res => res.text())
      .then(svg => {
        // Modify SVG to be responsive - add viewBox, remove width/height, add style
        const modifiedSvg = svg
          .replace(/<svg([^>]*)>/, '<svg$1 viewBox="0 0 667 654" preserveAspectRatio="xMidYMid meet" class="w-[49px] md:w-[65px]" style="height: auto; display: block;">');
        setSvgContent(modifiedSvg);
      });
  }, []);

  if (!svgContent) return null;

  return (
    <div
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default Logo;
