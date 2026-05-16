import React from 'react';

/**
 * Parses inline *italic* markers within a text string.
 * Returns an array of React nodes with <em> wrapping italic segments.
 */
const parseInlineStyles = (text) => {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
};

/**
 * FormattedText component that converts newlines in text to proper HTML breaks or paragraphs
 * - Single newlines become <br /> tags
 * - Multiple consecutive newlines (2+) create separate paragraphs
 * - *text* becomes <em>text</em>
 */
const FormattedText = ({ children, className = '' }) => {
  if (!children) return null;

  // Split text by multiple newlines (2 or more) to create paragraphs
  const paragraphs = children.split(/\n{2,}/);

  return (
    <>
      {paragraphs.map((paragraph, pIndex) => {
        // Skip empty paragraphs
        if (!paragraph.trim()) return null;

        // Split each paragraph by single newlines to create line breaks
        const lines = paragraph.split(/\n/);

        return (
          <p key={pIndex} className={className}>
            {lines.map((line, lIndex) => (
              <React.Fragment key={lIndex}>
                {parseInlineStyles(line)}
                {lIndex < lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </>
  );
};

export default FormattedText;
