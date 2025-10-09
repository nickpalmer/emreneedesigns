import React from 'react';
import { useTranslation } from 'react-i18next';
import ProgressiveImage from '../components/ProgressiveImage';
import ResponsiveVideo from '../components/ResponsiveVideo';
import home_01 from '../assets/images/home_01_zoeSm.jpg';
import home_02 from '../assets/images/home_02_3C5330C5.jpeg';
import home_03 from '../assets/images/home_03_IMG_9621.jpg';
import home_04 from '../assets/images/home_04_etsy_285019522.jpg';
import home_05 from '../assets/images/home_05_BoleroVest.jpg';
import home_06 from '../assets/images/home_06_Photo_Jun_09.jpg';
import store_01 from '../assets/images/store_01_IMG_7890.jpg';
import store_02 from '../assets/images/store_02_IMG_9654.jpg';
import HorizontalScrollCarousel from '../components/HorizontalScrollCarousel';

const heroImageStyle = `
  .hero-image {
    max-height: 50vh;
    height: auto;
    padding-left: 0;
  }
  @media (min-width: 768px) {
    .hero-image {
      height: calc(100vh - var(--header-height)) !important;
      width: auto !important;
      max-height: none !important;
      padding-left: 15px !important;
      padding-top: 15px !important;
      padding-bottom: 15px !important;
      object-fit: cover;
    }
  }
`;

const carouselImages = [home_02, home_05, home_06, store_02, store_01];

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <style>{heroImageStyle}</style>
      <div className="flex flex-col md:flex-row md:min-h-[calc(100vh-var(--header-height))]">
        <div className="md:w-1/2 flex justify-center">
          <ProgressiveImage
            src={home_01}
            alt="M. Renee Designs Fashion"
            className="hero-image object-cover object-center w-full h-auto md:h-full"
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
            <h1 className="text-2xl md:text-4xl font-bold">{t('home.hero.title')}</h1>
            <p className="text-base md:text-lg mt-4">{t('home.hero.description1')}</p>
            <p className="text-base md:text-lg mt-4">{t('home.hero.description2')}</p>
          </div>
        </div>
      </div>

      <div style={{ padding: '15px' }}>
        <ResponsiveVideo
          className="w-full h-auto"
          style={{
            borderRadius: '16px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)',
            maxHeight: '70vh',
            objectFit: 'contain'
          }}
        />
      </div>

      <div className="hidden md:block">
        <HorizontalScrollCarousel items={carouselImages} />
      </div>
      <div className="md:hidden" style={{ padding: '15px' }}>
        <div className="grid grid-cols-1 gap-4">
          {carouselImages.map((image, index) => (
            <ProgressiveImage
              key={index}
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto object-cover"
              style={{ borderRadius: '8px', maxHeight: 'calc(100vh - var(--header-height))', objectFit: 'contain', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
