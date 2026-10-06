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
import bag_20 from '../assets/images/bag_20_black-fringe-crossbody.jpg';
import bag_21 from '../assets/images/bag_21_tan-fringe-hip.jpg';
import bag_22 from '../assets/images/bag_22_teal-crossbody.jpg';
import bag_23 from '../assets/images/bag_23_fringe-hip-olive.jpg';
import bag_26 from '../assets/images/bag_26_choc-messenger.jpg';
import bag_27 from '../assets/images/bag_27_teal-messenger.jpg';
import bag_28 from '../assets/images/bag_28_tobacco-messenger.jpg';
import bag_29 from '../assets/images/bag_29_brown-clutch.jpg';
import bag_30 from '../assets/images/bag_30_seafoam-clutch.jpg';
import bag_31 from '../assets/images/bag_31_seafoam-crossbody.jpg';
import bag_32 from '../assets/images/bag_32_red-fringe.jpg';
import bag_33 from '../assets/images/bag_33_gold-fringe.jpg';
import bag_34 from '../assets/images/bag_34_green-fringe.jpg';
import bag_35 from '../assets/images/bag_35_backpack.jpg';

const MOBILE_BREAKPOINT = 768;
const ETSY_SHOP_URL = 'https://www.etsy.com/shop/nuancejournals';

// One shot per design for variety — messenger, fringe purse, crossbody, teal, hip purse...
const titleGalleryImages = [bag_02, bag_04, bag_20, bag_22];
const craftGalleryImages = [bag_21, bag_05, bag_23, bag_07];
const designGalleryImages = [bag_03, bag_06, bag_26, bag_27, bag_28, bag_29, bag_30, bag_31, bag_32, bag_33, bag_34, bag_35];
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
                  gridClassName="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
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
