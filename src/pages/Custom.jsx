import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import custom_01 from '../assets/images/custom_01_Emily_Renee_Smith.jpg';
import custom_02 from '../assets/images/custom_02_Photo_Apr_19.jpg';
import custom_03 from '../assets/images/custom_03_Photo_Aug_15.jpg';
import custom_04 from '../assets/images/custom_04_Photo_Jul_24.jpg';
import HorizontalScrollCarousel from '../components/HorizontalScrollCarousel';

const heroImageStyle = `
  .custom-hero-image {
    max-height: 50vh;
    height: auto;
    padding-left: 0;
  }
  @media (min-width: 768px) {
    .custom-hero-image {
      max-height: 75vh !important;
      height: auto !important;
      width: auto !important;
      padding-left: 15px !important;
      object-fit: cover;
    }
  }
`;

const carouselImages = [custom_02, custom_03, custom_04];

const Custom = () => {
  const { t } = useTranslation();

  return (
    <div>
      <style>{heroImageStyle}</style>
      <div className="flex flex-col md:flex-row md:min-h-[calc(100vh-var(--header-height))]">
        <div className="md:w-1/2 md:flex md:items-center md:justify-center">
          <img
            src={custom_01}
            alt="Custom design work"
            className="custom-hero-image object-cover object-center w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 flex flex-col md:justify-center" style={{ padding: '15px 15px 0 15px' }}>
          <div className="shadow-lg" style={{
            backgroundColor: 'var(--textbox-bg)',
            padding: '20px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)',
            borderRadius: '16px',
            color: 'var(--textbox-text)'
          }}>
            <h1 className="text-2xl md:text-4xl font-bold">{t('custom.title')}</h1>
            <p className="text-base md:text-lg mt-4">"{t('custom.tagline')}"</p>
            <h2 className="text-xl md:text-2xl font-bold mt-4">{t('custom.subtitle')}</h2>
            <p className="text-base md:text-lg mt-4">{t('custom.motto')}</p>
            <p className="text-sm md:text-base mt-4">{t('custom.description')}</p>
            <p className="text-sm md:text-base mt-4">
              {t('custom.cta')}{' '}
              <Link to="/contact" className="transition-colors" style={{ textDecoration: 'underline', color: 'var(--textbox-text)' }}>
                {t('custom.cta.link')}
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <HorizontalScrollCarousel items={carouselImages} containerHeight="200vh" />
      </div>
      <div className="md:hidden" style={{ padding: '15px' }}>
        <div className="grid grid-cols-1 gap-4">
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Custom work ${index + 1}`}
              className="w-full h-auto object-cover"
              style={{ borderRadius: '8px', maxHeight: 'calc(100vh - var(--header-height))', objectFit: 'contain', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Custom;