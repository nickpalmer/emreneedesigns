import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const ColorPicker = () => {
  // Check if domain contains "nick.codes" or is localhost
  const shouldShowPicker = window.location.hostname.includes('nick.codes') ||
                           window.location.hostname === 'localhost' ||
                           window.location.hostname === '127.0.0.1';

  const [isOpen, setIsOpen] = useState(false);
  const [activeColor, setActiveColor] = useState(null);
  const [colors, setColors] = useState({
    // Header & Footer
    headerFooterBg: getComputedStyle(document.documentElement).getPropertyValue('--header-footer-bg').trim(),
    headerFooterText: getComputedStyle(document.documentElement).getPropertyValue('--header-footer-text').trim(),
    headerFooterHover: getComputedStyle(document.documentElement).getPropertyValue('--header-footer-hover').trim(),

    // Gradient
    gradientTop: getComputedStyle(document.documentElement).getPropertyValue('--gradient-top').trim(),
    gradientBottom: getComputedStyle(document.documentElement).getPropertyValue('--gradient-bottom').trim(),

    // Text Box
    textboxBg: getComputedStyle(document.documentElement).getPropertyValue('--textbox-bg').trim(),
    textboxText: getComputedStyle(document.documentElement).getPropertyValue('--textbox-text').trim(),

    // Logo
    logoColor: getComputedStyle(document.documentElement).getPropertyValue('--logo-color').trim(),
    logoTailTipColor: getComputedStyle(document.documentElement).getPropertyValue('--logo-tail-tip-color').trim(),
    nameLogoColor: getComputedStyle(document.documentElement).getPropertyValue('--name-logo-color').trim(),
  });

  if (!shouldShowPicker) {
    return null;
  }

  const brandColors = [
    { name: 'Olive Dark', hex: '#3D441E' },
    { name: 'Brown Dark', hex: '#833921' },
    { name: 'Brown Light', hex: '#B86125' },
    { name: 'Green Dark', hex: '#286140' },
    { name: 'Olive Light', hex: '#4E5B31' },
    { name: 'Blue Dark', hex: '#012169' },
    { name: 'Cream', hex: '#F5E6D3' },
  ];

  const colorSections = [
    {
      title: 'Header & Footer',
      colors: [
        { key: 'headerFooterBg', label: 'Background', cssVar: '--header-footer-bg' },
        { key: 'headerFooterText', label: 'Text', cssVar: '--header-footer-text' },
        { key: 'headerFooterHover', label: 'Hover', cssVar: '--header-footer-hover' },
      ]
    },
    {
      title: 'Gradient',
      colors: [
        { key: 'gradientTop', label: 'Top', cssVar: '--gradient-top' },
        { key: 'gradientBottom', label: 'Bottom', cssVar: '--gradient-bottom' },
      ]
    },
    {
      title: 'Text Boxes',
      colors: [
        { key: 'textboxBg', label: 'Background', cssVar: '--textbox-bg' },
        { key: 'textboxText', label: 'Text', cssVar: '--textbox-text' },
      ]
    },
    {
      title: 'Logos',
      colors: [
        { key: 'logoColor', label: 'Logo', cssVar: '--logo-color' },
        { key: 'logoTailTipColor', label: 'Logo Tail Tip', cssVar: '--logo-tail-tip-color' },
        { key: 'nameLogoColor', label: 'Name Logo', cssVar: '--name-logo-color' },
      ]
    }
  ];

  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorChange = (color) => {
    if (activeColor) {
      const newColors = { ...colors, [activeColor.key]: color };
      setColors(newColors);
      document.documentElement.style.setProperty(activeColor.cssVar, color);
    }
  };

  const handleColorClick = (colorItem) => {
    setActiveColor(colorItem);
    setShowColorPicker(true);
  };

  const exportColors = () => {
    const css = `:root {
  /* Header & Footer Colors */
  --header-footer-bg: ${colors.headerFooterBg};
  --header-footer-text: ${colors.headerFooterText};
  --header-footer-hover: ${colors.headerFooterHover};

  /* Gradient Colors */
  --gradient-top: ${colors.gradientTop};
  --gradient-bottom: ${colors.gradientBottom};

  /* Text Box Colors */
  --textbox-bg: ${colors.textboxBg};
  --textbox-text: ${colors.textboxText};

  /* Logo Colors */
  --logo-color: ${colors.logoColor};
  --logo-tail-tip-color: ${colors.logoTailTipColor};
  --name-logo-color: ${colors.nameLogoColor};
}`;

    navigator.clipboard.writeText(css);
    alert('Colors copied to clipboard! You can now paste them into an email.');
  };

  const importColors = () => {
    const cssText = prompt('Paste the CSS here:');
    if (!cssText) return;

    // Parse CSS and extract color values
    const colorMap = {
      '--header-footer-bg': 'headerFooterBg',
      '--header-footer-text': 'headerFooterText',
      '--header-footer-hover': 'headerFooterHover',
      '--gradient-top': 'gradientTop',
      '--gradient-bottom': 'gradientBottom',
      '--textbox-bg': 'textboxBg',
      '--textbox-text': 'textboxText',
      '--logo-color': 'logoColor',
      '--logo-tail-tip-color': 'logoTailTipColor',
      '--name-logo-color': 'nameLogoColor',
    };

    const newColors = { ...colors };

    Object.keys(colorMap).forEach(cssVar => {
      const regex = new RegExp(`${cssVar.replace(/[-]/g, '\\-')}:\\s*([^;]+);`, 'i');
      const match = cssText.match(regex);
      if (match) {
        const color = match[1].trim();
        newColors[colorMap[cssVar]] = color;
        document.documentElement.style.setProperty(cssVar, color);
      }
    });

    setColors(newColors);
    alert('Colors imported successfully!');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#286140',
          color: '#F5E6D3',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          fontSize: '24px',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        🎨
      </button>

      {/* Color Picker Dialog */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            maxWidth: '90vw',
            width: '800px',
            maxHeight: '80vh',
            overflowY: 'auto',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
            zIndex: 1001,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ margin: 0, color: '#333' }}>Color Picker</h2>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666',
              }}
            >
              ✕
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {colorSections.map((section) => (
              <div key={section.title}>
                <h3 style={{ marginBottom: '12px', color: '#555', fontSize: '16px' }}>{section.title}</h3>
                {section.colors.map((colorItem) => (
                <div
                  key={colorItem.key}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleColorClick(colorItem)}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: colors[colorItem.key],
                      marginRight: '12px',
                      border: '1px solid #ddd',
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: '500', color: '#333' }}>{colorItem.label}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>{colors[colorItem.key]}</div>
                  </div>
                </div>
                ))}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
            <button
              onClick={importColors}
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: '#666',
                color: '#F5E6D3',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '500',
              }}
            >
              Import Colors
            </button>
            <button
              onClick={exportColors}
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: '#286140',
                color: '#F5E6D3',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '500',
              }}
            >
              Export Colors
            </button>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
          }}
        />
      )}

      {/* Color Picker Dialog */}
      {showColorPicker && activeColor && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
            zIndex: 1002,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ margin: 0, color: '#333' }}>Editing: {activeColor.label}</h3>
            <button
              onClick={() => setShowColorPicker(false)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666',
              }}
            >
              ✕
            </button>
          </div>
          <HexColorPicker color={colors[activeColor.key]} onChange={handleColorChange} />
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>Current Color</div>
            <div style={{ fontSize: '16px', fontWeight: '500', color: '#333' }}>{colors[activeColor.key]}</div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '12px', fontWeight: '500' }}>Brand Colors</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              {brandColors.map((brandColor) => (
                <div
                  key={brandColor.hex}
                  onClick={() => handleColorChange(brandColor.hex)}
                  style={{
                    width: '100%',
                    aspectRatio: '1',
                    backgroundColor: brandColor.hex,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    border: colors[activeColor.key].toLowerCase() === brandColor.hex.toLowerCase() ? '3px solid #333' : '1px solid #ddd',
                    position: 'relative',
                  }}
                  title={`${brandColor.name} (${brandColor.hex})`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ColorPicker;
