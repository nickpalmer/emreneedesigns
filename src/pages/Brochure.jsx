import React from 'react';

const Brochure = () => {
  return (
    <div style={{ width: '100%' }}>
      <div style={{
        textAlign: 'center',
        padding: '12px 16px',
        background: 'var(--gradient-top, #f8f5f0)',
        borderBottom: '1px solid #d4c5b3',
      }}>
        <a
          href="/brochure.pdf"
          download="MReneeDesigns-Brochure.pdf"
          style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: '11pt',
            color: '#833921',
            textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
        >
          Download Brochure PDF &darr;
        </a>
      </div>
      <iframe
        src="/brochure.html"
        title="M. Renee Designs Brochure"
        style={{
          width: '100%',
          height: 'calc(100vh - 105px)',
          border: 'none',
          display: 'block',
        }}
      />
    </div>
  );
};

export default Brochure;
