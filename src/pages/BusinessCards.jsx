import React from 'react';

const BusinessCards = () => {
  return (
    <div style={{ width: '100%' }}>
      <div style={{
        textAlign: 'center',
        padding: '12px 16px',
        background: 'var(--gradient-top, #f8f5f0)',
        borderBottom: '1px solid #d4c5b3',
      }}>
        <a
          href="/business-cards.pdf"
          download="MReneeDesigns-BusinessCards.pdf"
          style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: '11pt',
            color: '#833921',
            textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
        >
          Download Business Cards PDF &darr;
        </a>
      </div>
      <iframe
        src={`/business-cards.html?t=${Date.now()}`}
        title="M. Renee Designs Business Cards"
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

export default BusinessCards;
