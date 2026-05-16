import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ProgressiveImage from '../components/ProgressiveImage';
import FormattedText from '../components/FormattedText';
import ParallaxHero from '../components/ParallaxHero';
import LightboxGallery from '../components/LightboxGallery';
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

const MOBILE_BREAKPOINT = 768;

const galleryImages = [about_01, about_02, about_03, about_04, about_05, about_06, about_07, about_08, about_09, about_10, about_11];

const About = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < MOBILE_BREAKPOINT);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <ParallaxHero image={about_header} alt="Emily Renee">
        <div className="shadow-lg" style={{
          backgroundColor: 'var(--textbox-bg)',
          padding: '20px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)',
          borderRadius: '16px',
          color: 'var(--textbox-text)'
        }}>
          <h2 className="text-xl md:text-2xl font-bold">{t('about.title')}</h2>
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
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="mailto:emily@mReneeDesigns.com?subject=Trunk%20Show%20Inquiry"
              className="inline-block px-6 py-3 text-sm md:text-base font-semibold rounded-lg transition-colors text-center"
              style={{
                backgroundColor: 'var(--textbox-text)',
                color: 'var(--textbox-bg)',
              }}
            >
              {t('about.cta')}
            </a>
            <a
              href="https://www.instagram.com/mrenee_designs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-sm md:text-base font-semibold rounded-lg transition-colors text-center"
              style={{
                backgroundColor: 'var(--textbox-text)',
                color: 'var(--textbox-bg)',
              }}
            >
              {t('about.instagram')}
            </a>
          </div>
          <ProgressiveImage src={about_footer} alt="Emily Renee" className="object-cover w-full mt-4" style={{ height: 'auto', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)' }} />

          {/* Desktop: gallery inside textbox in 2 columns */}
          {!isMobile && (
            <div style={{ marginTop: '16px' }}>
              <LightboxGallery
                images={galleryImages}
                altPrefix="About"
                noPadding
                gridClassName="grid grid-cols-2 gap-3"
              />
            </div>
          )}
        </div>
      </ParallaxHero>

      {/* Mobile: gallery outside textbox */}
      {isMobile && (
        <LightboxGallery images={galleryImages} altPrefix="About" />
      )}
    </div>
  );
};

export default About;
