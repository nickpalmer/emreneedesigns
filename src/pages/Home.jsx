import React from 'react';
import { useTranslation } from 'react-i18next';
import ProgressiveImage from '../components/ProgressiveImage';
import ResponsiveVideo from '../components/ResponsiveVideo';
import FormattedText from '../components/FormattedText';
import home_01 from '../assets/images/home_01_before-video-queen1.jpg';
import home_02 from '../assets/images/home_02_before-video-queen2.jpg';
import home_03 from '../assets/images/home_03_custom-elvira-catpow-tritone.jpeg';
import home_04 from '../assets/images/home_04_cyrus-sam.jpg';
import home_05 from '../assets/images/home_05_toby1.jpg';
import home_06 from '../assets/images/home_06_editorial-3jackets-vine.jpg';
import home_07 from '../assets/images/home_07_raw-tobacco-cloe.jpg';
import home_08 from '../assets/images/home_08_boutique-relocated.jpg';
import home_09 from '../assets/images/home_09_queen-gwen.jpg';
import home_10 from '../assets/images/home_10_dress.JPG';
import home_11 from '../assets/images/home_11_dz-2015.jpg';
import home_12 from '../assets/images/home_12_rawZoe.jpg';
import home_13 from '../assets/images/home_13_teal-3-dress.jpg';
import home_14 from '../assets/images/home_14_sewing.jpg';
import home_15 from '../assets/images/home_15_sewing2.jpg';
import home_16 from '../assets/images/home_16_teal-fringe.jpg';
import home_17 from '../assets/images/home_17_red-halter-jamie.jpg';
import home_18 from '../assets/images/home_18_skirt-fringe1.jpg';
import home_19 from '../assets/images/home_19_zebra.jpg';
import home_20 from '../assets/images/home_20_teal2.jpg';
import home_21 from '../assets/images/home_21_long-banner.jpg';
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

const carouselImages = [home_02, home_03, home_04, home_05, home_06, home_07, home_08, home_09, home_10, home_11, home_12, home_13, home_14, home_15, home_16, home_17, home_18, home_19, home_20, home_21];

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
            className="hero-image object-cover object-center md:object-right w-full h-auto md:h-full"
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
            <FormattedText className="text-base md:text-lg mt-4">
              {t('home.hero.description1')}
            </FormattedText>
            <a
              href="mailto:emily@mReneeDesigns.com?subject=Inquiry%20from%20Website"
              className="inline-block mt-6 px-6 py-3 text-sm md:text-base font-semibold rounded-lg transition-colors text-center"
              style={{
                backgroundColor: 'var(--textbox-text)',
                color: 'var(--textbox-bg)',
              }}
            >
              {t('home.hero.cta')}
            </a>
          </div>
        </div>
      </div>

      <div style={{ padding: '15px 15px 0 15px' }}>
        <div className="shadow-lg" style={{
          backgroundColor: 'var(--textbox-bg)',
          padding: '20px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)',
          borderRadius: '16px',
          color: 'var(--textbox-text)'
        }}>
          <FormattedText className="text-base md:text-lg">
            {t('home.hero.description2')}
          </FormattedText>
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
