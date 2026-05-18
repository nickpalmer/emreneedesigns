import React from 'react';
import { useTranslation } from 'react-i18next';
import FormattedText from '../components/FormattedText';
import ParallaxHero from '../components/ParallaxHero';
import LightboxGallery from '../components/LightboxGallery';
import looks_01 from '../assets/images/looks_01_queen2.jpg';
import looks_02 from '../assets/images/looks_02_queen3.jpg';
import looks_03 from '../assets/images/looks_03_queen4.jpg';
import looks_04 from '../assets/images/looks_04_vest-peplum.jpg';
import looks_05 from '../assets/images/looks_05_deerhide.jpg';
import custom_13 from '../assets/images/custom_13_fringe-qat.JPG';
import custom_14 from '../assets/images/custom_14_fringe-qat2.JPG';
import custom_17 from '../assets/images/custom_17_skirt-chocolate.JPG';
import custom_18 from '../assets/images/custom_18_skirt-fringe1.JPG';
import custom_19 from '../assets/images/custom_19_skirt-fringe4.JPG';
import looks_06 from '../assets/images/looks_06_blonde.jpg';
import looks_07 from '../assets/images/looks_07_bolero-pink-cloe.jpg';
import looks_08 from '../assets/images/looks_08_bolerobustier-black.jpeg';
import looks_09 from '../assets/images/looks_09_dress-red-zoe-back.jpeg';
import looks_10 from '../assets/images/looks_10_dress-red-zoe-front.jpeg';
import looks_11 from '../assets/images/looks_11_dress-black-lauren1.jpg';
import looks_12 from '../assets/images/looks_12_dress-black-lauren2.jpg';
import looks_13 from '../assets/images/looks_13_dress-choc-lauren2.jpg';
import looks_14 from '../assets/images/looks_14_dress-choc1.jpg';
import looks_15 from '../assets/images/looks_15_dress-tobacco.JPG';
import looks_16 from '../assets/images/looks_16_dress-tobacco-jamie.jpg';
import looks_17 from '../assets/images/looks_17_elvira-black2.jpg';
import looks_18 from '../assets/images/looks_18_elvira-red-emily.jpg';
import looks_19 from '../assets/images/looks_19_elvira-tritone.jpeg';
import looks_20 from '../assets/images/looks_20_elvira-tritone2.jpeg';
import looks_21 from '../assets/images/looks_21_halter-red-zoe.jpeg';
import looks_22 from '../assets/images/looks_22_halter-red.jpg';
import looks_23 from '../assets/images/looks_23_halter-seafoam.JPG';
import looks_24 from '../assets/images/looks_24_queen-midi2.jpg';
import looks_25 from '../assets/images/looks_25_skirt-black-coko.jpg';
import looks_26 from '../assets/images/looks_26_skirt-black-shawl.jpg';
import looks_27 from '../assets/images/looks_27_skirt-chocolate.JPG';
import looks_28 from '../assets/images/looks_28_skirt-shawl.JPG';

const textboxStyle = {
  backgroundColor: 'var(--textbox-bg)',
  padding: '20px',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)',
  borderRadius: '16px',
  color: 'var(--textbox-text)',
};

const sections = [
  {
    titleKey: 'designs.elvira.title',
    descriptionKey: 'designs.elvira.description',
    images: [looks_17, looks_18, looks_19, looks_20],
  },
  {
    titleKey: 'designs.queen.title',
    descriptionKey: 'designs.queen.description',
    images: [looks_01, looks_02, looks_03],
  },
  {
    titleKey: null,
    descriptionKey: 'designs.queen.variation',
    images: [looks_04, looks_24],
  },
  {
    titleKey: 'designs.duster.title',
    descriptionKey: 'designs.duster.description',
    images: [],
  },
  {
    titleKey: 'designs.skirt.title',
    descriptionKey: 'designs.skirt.description',
    images: [looks_25, looks_26, looks_27, looks_28],
  },
  {
    titleKey: 'designs.bustier.title',
    descriptionKey: 'designs.bustier.description',
    images: [looks_08, looks_07],
  },
  {
    titleKey: 'designs.halterDress.title',
    descriptionKey: 'designs.halterDress.description',
    images: [looks_06, looks_09, looks_10, looks_11, looks_12, looks_13, looks_14, looks_15, looks_16],
  },
  {
    titleKey: 'designs.halterTop.title',
    descriptionKey: 'designs.halterTop.description',
    images: [looks_21, looks_22, looks_23],
  },
  {
    titleKey: 'designs.fringe.title',
    descriptionKey: 'designs.fringe.description',
    images: [custom_13, custom_14, custom_17, custom_18, custom_19],
  },
];

const Designs = () => {
  const { t } = useTranslation();

  return (
    <div>
      <ParallaxHero image={looks_05} alt="M. Renee Designs" objectPosition="center top" mobilePosition="40% top" backgroundSize="75% auto" initialOffset={-175}>
        <div className="shadow-lg" style={{ ...textboxStyle, maxWidth: '600px', margin: '0 auto' }}>
          <h1 className="text-2xl md:text-4xl font-bold">{t('designs.title')}</h1>
          <p className="text-base md:text-lg mt-2 italic">{t('designs.subtitle')}</p>
          <p className="text-xs md:text-sm mt-4 italic">{t('designs.description')}</p>
        </div>
      </ParallaxHero>

      {sections.map((section, index) => {
        const hasImages = section.images.length > 0;

        if (!hasImages) {
          return (
            <div key={index} style={{ padding: '15px' }}>
              <div className="shadow-lg" style={textboxStyle}>
                {section.titleKey && (
                  <p className="font-semibold text-sm md:text-base">{t(section.titleKey)}</p>
                )}
                <FormattedText className="text-sm md:text-base mt-1">
                  {t(section.descriptionKey)}
                </FormattedText>
              </div>
            </div>
          );
        }

        return (
          <div key={index} style={{ padding: '15px' }}>
            <div className="shadow-lg" style={textboxStyle}>
              {section.titleKey && (
                <h2 className="text-base md:text-lg font-semibold text-center mb-4 w-full">{t(section.titleKey)}</h2>
              )}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <div className="flex-1 flex items-center">
                    <FormattedText className="text-sm md:text-base text-center">
                      {t(section.descriptionKey)}
                    </FormattedText>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <LightboxGallery
                    images={section.images}
                    altPrefix={section.titleKey ? t(section.titleKey) : 'Design'}
                    noPadding
                    gridClassName="grid grid-cols-2 md:grid-cols-3 gap-3"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Made to Order */}
      <div style={{ padding: '15px' }}>
        <div className="shadow-lg" style={textboxStyle}>
          <p className="font-semibold text-sm md:text-base">{t('designs.madeToOrder.title')}</p>
          <FormattedText className="text-sm md:text-base mt-1">
            {t('designs.madeToOrder.description')}
          </FormattedText>
          <FormattedText className="mt-4 text-xs md:text-sm italic">
            {t('designs.timeline')}
          </FormattedText>
        </div>
      </div>
    </div>
  );
};

export default Designs;
