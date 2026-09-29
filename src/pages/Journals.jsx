import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ProgressiveImage from '../components/ProgressiveImage';
import FormattedText from '../components/FormattedText';
import ParallaxHero from '../components/ParallaxHero';
import LightboxGallery from '../components/LightboxGallery';
import journal_hero from '../assets/images/journal_01_hero-photo-apr-03.jpg';
import journal_02 from '../assets/images/journal_02_journals-2495c1bd.jpg';
import journal_03 from '../assets/images/journal_03_img-0644.jpg';
import journal_04 from '../assets/images/journal_04_img-2397.jpg';
import journal_05 from '../assets/images/journal_05_img-6511.jpg';
import journal_06 from '../assets/images/journal_06_img-7608.jpg';
import journal_07 from '../assets/images/journal_07_img-7611.jpg';
import journal_08 from '../assets/images/journal_08_joshhailey2.jpeg';
import journal_09 from '../assets/images/journal_09_joshhailey3.jpeg';
import journal_10 from '../assets/images/journal_10_joshhailey4.jpeg';
import journal_13 from '../assets/images/journal_13_emily-4471662.jpg';
import journal_14 from '../assets/images/journal_14_157921.jpg';
import journal_15 from '../assets/images/journal_15_5818836.jpg';
import journal_16 from '../assets/images/journal_16_4228095.jpg';
import journal_17 from '../assets/images/journal_17_3115526.jpg';
import journal_18 from '../assets/images/journal_18_6429404.jpg';
import journal_19 from '../assets/images/journal_19_441933.jpg';

const MOBILE_BREAKPOINT = 768;
const ETSY_SHOP_URL = 'https://www.etsy.com/shop/nuancejournals';

const titleGalleryImages = [journal_04, journal_07, journal_06, journal_05];
const processGalleryImages = [journal_02, journal_08, journal_09, journal_10];
const originsGalleryImages = [journal_13];
const travelGalleryImages = [journal_03, journal_15, journal_16, journal_17, journal_18, journal_19];
const allGalleryImages = [...titleGalleryImages, ...processGalleryImages, ...originsGalleryImages, ...travelGalleryImages];

const EtsyButton = ({ label }) => (
  <a
    href={ETSY_SHOP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-6 px-6 py-3 text-sm md:text-base font-semibold rounded-lg transition-colors text-center"
    style={{
      backgroundColor: 'var(--textbox-text)',
      color: 'var(--textbox-bg)',
    }}
  >
    {label}
  </a>
);

const Journals = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < MOBILE_BREAKPOINT);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <ParallaxHero image={journal_hero} alt="Handbound leather journal" objectPosition="center bottom" mobilePosition="center bottom" initialOffset={-260}>
        <div className="shadow-lg" style={{
          backgroundColor: 'var(--textbox-bg)',
          padding: '20px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)',
          borderRadius: '16px',
          color: 'var(--textbox-text)'
        }}>
          {/* Title section */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <h1 className="text-2xl md:text-4xl font-bold">{t('journals.title')}</h1>
              <FormattedText className="text-base md:text-lg mt-2 italic">
                {t('journals.subtitle')}
              </FormattedText>
              <FormattedText className="text-sm md:text-base mt-4">
                {t('journals.intro')}
              </FormattedText>
              <EtsyButton label={t('journals.cta.shop')} />
            </div>
            {!isMobile && (
              <div className="w-full md:w-1/2">
                <LightboxGallery
                  images={titleGalleryImages}
                  altPrefix="Nuance Journals"
                  noPadding
                  gridClassName="grid grid-cols-2 gap-3"
                />
              </div>
            )}
          </div>

          {/* About the process */}
          <div className="flex flex-col md:flex-row-reverse gap-4 mt-10">
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl font-bold">{t('journals.process.title')}</h2>
              <FormattedText className="text-sm md:text-base mt-4">
                {t('journals.process.paragraph1')}
              </FormattedText>
              <FormattedText className="text-sm md:text-base mt-4">
                {t('journals.process.paragraph2')}
              </FormattedText>
              <FormattedText className="text-sm md:text-base mt-4">
                {t('journals.process.paragraph3')}
              </FormattedText>
              <FormattedText className="text-sm md:text-base mt-4 italic">
                {t('journals.process.paragraph4')}
              </FormattedText>
              <EtsyButton label={t('journals.process.cta')} />
            </div>
            {!isMobile && (
              <div className="w-full md:w-1/2">
                <LightboxGallery
                  images={processGalleryImages}
                  altPrefix="Journal making process"
                  noPadding
                  gridClassName="grid grid-cols-2 gap-3"
                />
              </div>
            )}
          </div>

          {/* The Origins Of Nuance */}
          <div className="flex flex-col md:flex-row gap-4 mt-10">
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl font-bold">{t('journals.origins.title')}</h2>
              <FormattedText className="text-sm md:text-base mt-4 italic">
                {t('journals.origins.quote')}
              </FormattedText>
              <FormattedText className="text-sm md:text-base mt-4">
                {t('journals.origins.paragraph1')}
              </FormattedText>
              <FormattedText className="text-sm md:text-base mt-4">
                {t('journals.origins.paragraph2')}
              </FormattedText>
              <FormattedText className="text-sm md:text-base mt-4">
                {t('journals.origins.paragraph3')}
              </FormattedText>
              <FormattedText className="text-sm md:text-base mt-4">
                {t('journals.origins.paragraph4')}
              </FormattedText>
              <FormattedText className="text-sm md:text-base mt-4">
                {t('journals.origins.paragraph5')}
              </FormattedText>
              <FormattedText className="text-sm md:text-base mt-4">
                {t('journals.origins.paragraph6')}
              </FormattedText>
              <FormattedText className="text-base md:text-lg mt-4 italic font-semibold">
                {t('journals.origins.tagline')}
              </FormattedText>
              <EtsyButton label={t('journals.origins.cta')} />
            </div>
            {!isMobile && (
              <div className="w-full md:w-1/2">
                <LightboxGallery
                  images={originsGalleryImages}
                  altPrefix="Emily Renee"
                  noPadding
                  gridClassName="grid grid-cols-1 gap-3"
                />
              </div>
            )}
          </div>

          {/* From My Journal */}
          <div className="mt-10">
            <h2 className="text-xl md:text-2xl font-bold">{t('journals.fromMyJournal.title')}</h2>
            <FormattedText className="text-base md:text-lg mt-2 italic">
              {t('journals.fromMyJournal.tagline')}
            </FormattedText>
            <FormattedText className="text-sm md:text-base mt-4">
              {t('journals.fromMyJournal.text')}
            </FormattedText>
            <ProgressiveImage
              src={journal_14}
              alt="Cycling through the countryside with a Nuance Journal"
              className="object-cover w-full mt-4"
              style={{ height: 'auto', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)' }}
            />
            {!isMobile && (
              <div style={{ marginTop: '16px' }}>
                <LightboxGallery
                  images={travelGalleryImages}
                  altPrefix="From my journal"
                  noPadding
                  gridClassName="grid grid-cols-2 md:grid-cols-3 gap-3"
                />
              </div>
            )}
            <EtsyButton label={t('journals.fromMyJournal.cta')} />
          </div>
        </div>
      </ParallaxHero>

      {/* Mobile: all images in one gallery */}
      {isMobile && (
        <LightboxGallery images={allGalleryImages} altPrefix="Nuance Journals" />
      )}
    </div>
  );
};

export default Journals;
