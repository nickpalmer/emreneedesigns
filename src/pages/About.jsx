import React from 'react';
import { useTranslation } from 'react-i18next';
import ProgressiveImage from '../components/ProgressiveImage';
import FormattedText from '../components/FormattedText';
import about_01 from '../assets/images/about_01_IMG_7888.jpg';
import about_02 from '../assets/images/about_02_IMG_2431.jpg';
import custom_01 from '../assets/images/custom_01_Emily_Renee_Smith.jpg';

const heroImageStyle = `
  .about-hero-image {
    max-height: 50vh;
    height: auto;
    padding-left: 0;
  }
  @media (min-width: 768px) {
    .about-hero-image {
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

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <style>{heroImageStyle}</style>
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: 'calc(100vh - var(--header-height))' }}>
        <div className="flex justify-center">
          <ProgressiveImage
            src={about_02}
            alt="Emily Renee"
            className="about-hero-image object-cover object-center w-full h-auto md:h-full"
          />
        </div>
        <div className="flex flex-col justify-center" style={{ padding: '15px' }}>
          <div className="shadow-lg" style={{
            backgroundColor: 'var(--textbox-bg)',
            padding: '20px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)',
            borderRadius: '16px',
            color: 'var(--textbox-text)'
          }}>
            <h2 className="text-xl md:text-2xl font-bold">{t('about.title')}</h2>
            <FormattedText className="text-base md:text-lg mt-4 italic">
              {t('about.tagline')}
            </FormattedText>
            <FormattedText className="text-sm md:text-base mt-4">
              {t('about.intro')}
            </FormattedText>
            <ProgressiveImage src={custom_01} alt="Custom design work" className="object-cover w-full mt-4" style={{ height: 'auto', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)' }} />
            <FormattedText className="text-sm md:text-base mt-4">
              {t('about.paragraph1')}
            </FormattedText>
            <FormattedText className="text-sm md:text-base mt-4">
              {t('about.paragraph2')}
            </FormattedText>
            <FormattedText className="text-sm md:text-base mt-4">
              {t('about.paragraph3')}
            </FormattedText>
            <FormattedText className="text-sm md:text-base mt-4">
              {t('about.paragraph4')}
            </FormattedText>
            <ProgressiveImage src={about_01} alt="Emily Renee" className="object-cover w-full mt-4" style={{ height: 'auto', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;