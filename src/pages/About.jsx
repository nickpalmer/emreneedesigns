import React from 'react';
import { useTranslation } from 'react-i18next';
import ProgressiveImage from '../components/ProgressiveImage';
import FormattedText from '../components/FormattedText';
import about_header from '../assets/images/about_header.jpg';
import about_footer from '../assets/images/about_footer.JPEG';
import about_01 from '../assets/images/about_01_sewing-fur.jpg';
import about_02 from '../assets/images/about_02_waterfall.JPG';
import about_03 from '../assets/images/about_03_headshot-brown.JPG';
import about_04 from '../assets/images/about_04_headshot-teal.JPG';
import about_05 from '../assets/images/about_05_headshot-teal2.JPG';
import about_06 from '../assets/images/about_06_headshot-laughter.jpg';
import about_07 from '../assets/images/about_07_img6678.JPG';
import about_08 from '../assets/images/about_08_jacket-elvira.JPG';
import about_09 from '../assets/images/about_09_skirt-messbag.JPG';
import about_10 from '../assets/images/about_10_teal.jpg';
import about_11 from '../assets/images/about_11_photoshoot-bts.JPG';
import HorizontalScrollCarousel from '../components/HorizontalScrollCarousel';

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
      object-position: 25% center;
    }
  }
`;

const carouselImages = [about_01, about_02, about_03, about_04, about_05, about_06, about_07, about_08, about_09, about_10, about_11];

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <style>{heroImageStyle}</style>
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: 'calc(100vh - var(--header-height))' }}>
        <div className="flex justify-center">
          <ProgressiveImage
            src={about_header}
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
            <a
              href="mailto:emily@mReneeDesigns.com?subject=Trunk%20Show%20Inquiry"
              className="inline-block mt-6 px-6 py-3 text-sm md:text-base font-semibold rounded-lg transition-colors text-center"
              style={{
                backgroundColor: 'var(--textbox-text)',
                color: 'var(--textbox-bg)',
              }}
            >
              {t('about.cta')}
            </a>
            <ProgressiveImage src={about_footer} alt="Emily Renee" className="object-cover w-full mt-4" style={{ height: 'auto', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)' }} />
          </div>
        </div>
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
              alt={`About image ${index + 1}`}
              className="w-full h-auto object-cover"
              style={{ borderRadius: '8px', maxHeight: 'calc(100vh - var(--header-height))', objectFit: 'contain', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
