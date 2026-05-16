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
import looks_29 from '../assets/images/looks_29_skirt-tobacco.JPG';

const galleryImages = [looks_02, looks_03, looks_04, looks_05, looks_06, looks_07, looks_08, looks_09, looks_10, looks_11, looks_12, looks_13, looks_14, looks_15, looks_16, looks_17, looks_18, looks_19, looks_20, looks_21, looks_22, looks_23, looks_24, looks_25, looks_26, looks_27, looks_28, looks_29];

const Designs = () => {
  const { t } = useTranslation();

  return (
    <div>
      <ParallaxHero image={looks_01} alt="M. Renee Designs">
        <div className="shadow-lg" style={{
          backgroundColor: 'var(--textbox-bg)',
          padding: '20px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)',
          borderRadius: '16px',
          color: 'var(--textbox-text)'
        }}>
          <h1 className="text-2xl md:text-4xl font-bold">{t('designs.title')}</h1>
          <p className="text-base md:text-lg mt-2 italic">{t('designs.subtitle')}</p>
          <p className="text-xs md:text-sm mt-4 italic">{t('designs.description')}</p>

          <div className="mt-4 space-y-4 text-sm md:text-base">
            <div>
              <p className="font-semibold">{t('designs.elvira.title')}</p>
              <FormattedText className="mt-1">{t('designs.elvira.description')}</FormattedText>
            </div>
            <div>
              <p className="font-semibold">{t('designs.queen.title')}</p>
              <FormattedText className="mt-1">{t('designs.queen.description')}</FormattedText>
              <FormattedText className="mt-1">{t('designs.queen.variation')}</FormattedText>
            </div>
            <div>
              <p className="font-semibold">{t('designs.duster.title')}</p>
              <FormattedText className="mt-1">{t('designs.duster.description')}</FormattedText>
            </div>
            <div>
              <p className="font-semibold">{t('designs.skirt.title')}</p>
              <FormattedText className="mt-1">{t('designs.skirt.description')}</FormattedText>
            </div>
            <div>
              <p className="font-semibold">{t('designs.bustier.title')}</p>
              <FormattedText className="mt-1">{t('designs.bustier.description')}</FormattedText>
            </div>
            <div>
              <p className="font-semibold">{t('designs.halterDress.title')}</p>
              <FormattedText className="mt-1">{t('designs.halterDress.description')}</FormattedText>
            </div>
            <div>
              <p className="font-semibold">{t('designs.halterTop.title')}</p>
              <FormattedText className="mt-1">{t('designs.halterTop.description')}</FormattedText>
            </div>
            <div>
              <p className="font-semibold">{t('designs.fringe.title')}</p>
              <FormattedText className="mt-1">{t('designs.fringe.description')}</FormattedText>
            </div>
            <div>
              <p className="font-semibold">{t('designs.madeToOrder.title')}</p>
              <FormattedText className="mt-1">{t('designs.madeToOrder.description')}</FormattedText>
            </div>
            <FormattedText className="mt-4 text-xs md:text-sm italic">{t('designs.timeline')}</FormattedText>
          </div>
        </div>
      </ParallaxHero>

      <LightboxGallery images={galleryImages} altPrefix="Design" />
    </div>
  );
};

export default Designs;
