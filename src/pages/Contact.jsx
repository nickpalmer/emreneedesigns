import React from 'react';

const Contact = () => {
  const getEmail = () => {
    const user = 'emily';
    const domain = 'mReneeDesigns.com';
    return `${user}@${domain}`;
  };

  const getPhone = () => {
    const parts = ['504', '383', '5044'];
    return `(${parts[0]}) ${parts[1]}-${parts[2]}`;
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${getEmail()}`;
  };

  const handlePhoneClick = (e) => {
    e.preventDefault();
    window.location.href = `tel:+1${getPhone().replace(/\D/g, '')}`;
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:min-h-[calc(100vh-var(--header-height))]">
        <div className="md:w-1/2 hidden md:flex items-center justify-center" style={{ padding: '15px', minHeight: '75vh' }}>
          <iframe
            src="https://www.instagram.com/mrenee_designs/embed"
            style={{
              width: '100%',
              maxWidth: '540px',
              height: '75vh',
              border: 'none',
              overflow: 'hidden'
            }}
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
        <div className="md:w-1/2 flex flex-col md:justify-center" style={{ padding: '15px 15px 0 15px' }}>
          <div className="shadow-lg" style={{
            backgroundColor: 'var(--textbox-bg)',
            padding: '20px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)',
            borderRadius: '16px',
            color: 'var(--textbox-text)'
          }}>
            <h1 className="text-2xl md:text-4xl font-bold">Contact Us</h1>
            <p className="text-base md:text-lg mt-4">
              <span className="font-bold">Email:</span>{' '}
              <a
                href="#"
                onClick={handleEmailClick}
                className="underline cursor-pointer"
                style={{ color: 'var(--textbox-text)' }}
              >
                {getEmail()}
              </a>
            </p>
            <p className="text-base md:text-lg mt-2">
              <span className="font-bold">Phone:</span>{' '}
              <a
                href="#"
                onClick={handlePhoneClick}
                className="underline cursor-pointer"
                style={{ color: 'var(--textbox-text)' }}
              >
                {getPhone()}
              </a>
            </p>
            <p className="text-base md:text-lg mt-2"><span className="font-bold">Location:</span> Houston Heights</p>
            <p className="text-base md:text-lg mt-2"><span className="font-bold">Hours:</span> By appointment</p>
            <div className="flex items-center mt-4" style={{ gap: '8px' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-base md:text-lg">
                <span className="font-bold">Follow us on Instagram</span>{' '}
                <a
                  href="https://www.instagram.com/mrenee_designs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: 'var(--textbox-text)' }}
                >
                  @mrenee_designs
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden" style={{ padding: '15px' }}>
        <iframe
          src="https://www.instagram.com/mrenee_designs/embed"
          style={{
            width: '100%',
            height: '500px',
            border: 'none',
            overflow: 'hidden'
          }}
          scrolling="no"
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;