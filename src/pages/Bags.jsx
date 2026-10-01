import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FormattedText from '../components/FormattedText';
import ParallaxHero from '../components/ParallaxHero';
import LightboxGallery from '../components/LightboxGallery';
import bag_01 from '../assets/images/bag_01_gator-messenger.jpg';
import bag_02 from '../assets/images/bag_02_purple-layered.jpg';
import bag_03 from '../assets/images/bag_03_vibrant-messenger.jpg';
import bag_04 from '../assets/images/bag_04_choc-cream-fringe.jpg';
import bag_05 from '../assets/images/bag_05_raw-edge-earth-water.jpg';
import bag_06 from '../assets/images/bag_06_teal-weightless.jpg';
import bag_07 from '../assets/images/bag_07_elk-fringe-sale.jpg';
import bag_09 from '../assets/images/bag_09_gator-angle3.jpg';
import bag_10 from '../assets/images/bag_10_gator-angle4.jpg';
import bag_12 from '../assets/images/bag_12_gator-angle6.jpg';
import bag_14 from '../assets/images/bag_14_teal-angle2.jpg';
import bag_17 from '../assets/images/bag_17_teal-angle5.jpg';
import bag_19 from '../assets/images/bag_19_teal-angle7.jpg';

const MOBILE_BREAKPOINT = 768;
const ETSY_SHOP_URL = 'https://www.etsy.com/shop/nuancejournals';

const titleGalleryImages = [bag_02, bag_04, bag_03, bag_05];
const craftGalleryImages = [bag_10, bag_12, bag_17, bag_19];
const designGalleryImages = [bag_01, bag_02, bag_03, bag_04, bag_05, bag_06, bag_07, bag_09, bag_14];
const allGalleryImages = [...titleGalleryImages, ...craftGalleryImages, ...designGalleryImages];

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

const Bags = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < MOBILE_BREAKPOINT);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <ParallaxHero image={bag_01} alt="Nuance leather messenger bag" objectPosition="center 45%" mobilePosition="center 45%">
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
              <h1 className="text-2xl md:text-4xl font-bold">{t('bags.title')}</h1>
              <FormattedText className="text-base md:text-lg mt-2 italic">
                {t('bags.subtitle')}
              </FormattedText>
              <FormattedText className="text-sm md:text-base mt-4">
                {t('bags.intro')}
              </FormattedText>
              <EtsyButton label={t('bags.cta.shop')} />
            </div>
            {!isMobile && (
              <div className="w-full md:w-1/2">
                <LightboxGallery
                  images={titleGalleryImages}
                  altPrefix="Nuance Bags"
                  noPadding
                  gridClassName="grid grid-cols-2 gap-3"
                />
              </div>
            )}
          </div>

          {/* From Journals to Bags */}
          <div className="flex flex-col md:flex-row-reverse gap-4 mt-10">
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl font-bold">{t('bags.expansion.title')}</h2>
              <FormattedText className="text-sm md:text-base mt-4">
                {t('bags.expansion.paragraph1')}
              </FormattedText>
              <FormattedText className="text-sm md:text-base mt-4">
                {t('bags.expansion.paragraph2')}
              </FormattedText>
              <FormattedText className="text-sm md:text-base mt-4">
                {t('bags.expansion.paragraph3')}
              </FormattedText>
              <EtsyButton label={t('bags.expansion.cta')} />
            </div>
            {!isMobile && (
              <div className="w-full md:w-1/2">
                <LightboxGallery
                  images={craftGalleryImages}
                  altPrefix="Bag details"
                  noPadding
                  gridClassName="grid grid-cols-2 gap-3"
                />
              </div>
            )}
          </div>

          {/* The designs */}
          <div className="mt-10">
            <h2 className="text-xl md:text-2xl font-bold">{t('bags.designs.title')}</h2>
            <FormattedText className="text-base md:text-lg mt-2 italic">
              {t('bags.designs.tagline')}
            </FormattedText>
            <FormattedText className="text-sm md:text-base mt-4">
              {t('bags.designs.text')}
            </FormattedText>
            {!isMobile && (
              <div style={{ marginTop: '16px' }}>
                <LightboxGallery
                  images={designGalleryImages}
                  altPrefix="Nuance bag designs"
                  noPadding
                  gridClassName="grid grid-cols-2 md:grid-cols-3 gap-3"
                />
              </div>
            )}
            <EtsyButton label={t('bags.designs.cta')} />
          </div>
        </div>
      </ParallaxHero>

      {/* Mobile: all images in one gallery */}
      {isMobile && (
        <LightboxGallery images={allGalleryImages} altPrefix="Nuance Bags" />
      )}
    </div>
  );
};

export default Bags;
