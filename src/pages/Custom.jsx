import React from 'react';
import { useTranslation } from 'react-i18next';
import FormattedText from '../components/FormattedText';
import ParallaxHero from '../components/ParallaxHero';
import LightboxGallery from '../components/LightboxGallery';
import custom_01 from '../assets/images/custom_01_capezebra.jpg';
import custom_02 from '../assets/images/custom_02_chaps-jv1.jpg';
import custom_03 from '../assets/images/custom_03_chaps-jv2.jpg';
import custom_04 from '../assets/images/custom_04_fringe-halter.jpg';
import custom_05 from '../assets/images/custom_05_zoe.jpg';
import custom_06 from '../assets/images/custom_06_zoe1.jpg';
import custom_07 from '../assets/images/custom_07_zoe2.jpg';
import custom_08 from '../assets/images/custom_08_queen-green.jpg';
import custom_09 from '../assets/images/custom_09_jockstrap-python.jpg';
import custom_10 from '../assets/images/custom_10_customtop.jpg';
import custom_11 from '../assets/images/custom_11_italian.JPG';
import custom_12 from '../assets/images/custom_12_fringe-britt.JPG';
import custom_13 from '../assets/images/custom_13_fringe-qat.JPG';
import custom_14 from '../assets/images/custom_14_fringe-qat2.JPG';
import custom_15 from '../assets/images/custom_15_rawduster.jpeg';
import custom_16 from '../assets/images/custom_16_rawjacket.JPG';
import custom_17 from '../assets/images/custom_17_skirt-chocolate.JPG';
import custom_18 from '../assets/images/custom_18_skirt-fringe1.JPG';
import custom_19 from '../assets/images/custom_19_skirt-fringe4.JPG';
import custom_20 from '../assets/images/custom_20_tealbag.jpg';
import custom_21 from '../assets/images/custom_21_queen-green2.JPG';
import custom_22 from '../assets/images/custom_22_editorial-zoe.jpg';
import custom_23 from '../assets/images/custom_23_qat-moss.jpg';
import custom_24 from '../assets/images/custom_24_trei.JPEG';
import custom_25 from '../assets/images/custom_25_treimonica.JPEG';
import custom_26 from '../assets/images/custom_26_zdeertails.JPG';

const galleryImages = [custom_02, custom_03, custom_04, custom_05, custom_06, custom_07, custom_08, custom_09, custom_10, custom_11, custom_12, custom_13, custom_14, custom_15, custom_16, custom_17, custom_18, custom_19, custom_20, custom_21, custom_22, custom_23, custom_24, custom_25, custom_26];

const Custom = () => {
  const { t } = useTranslation();

  return (
    <div>
      <ParallaxHero image={custom_01} alt="Custom design work">
        <div className="shadow-lg" style={{
          backgroundColor: 'var(--textbox-bg)',
          padding: '20px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)',
          borderRadius: '16px',
          color: 'var(--textbox-text)'
        }}>
          <h1 className="text-2xl md:text-4xl font-bold">{t('custom.title')}</h1>
          <FormattedText className="text-base md:text-lg mt-2 italic">
            {t('custom.tagline')}
          </FormattedText>
          <FormattedText className="text-sm md:text-base mt-4">
            {t('custom.description')}
          </FormattedText>

          <div className="mt-6 space-y-4 text-sm md:text-base">
            <div>
              <p className="font-semibold italic">{t('custom.refined.title')}</p>
              <ul className="list-disc list-inside mt-1 space-y-1">
                {t('custom.refined.items').split('\n').map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold italic">{t('custom.natural.title')}</p>
              <ul className="list-disc list-inside mt-1 space-y-1">
                {t('custom.natural.items').split('\n').map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold italic">{t('custom.fantastical.title')}</p>
              <ul className="list-disc list-inside mt-1 space-y-1">
                {t('custom.fantastical.items').split('\n').map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <FormattedText className="text-sm md:text-base mt-6">
            {t('custom.discretion')}
          </FormattedText>
          <FormattedText className="text-xs md:text-sm mt-4 italic">
            {t('custom.timeline')}
          </FormattedText>
          <a
            href="mailto:emily@mReneeDesigns.com?subject=Custom%20Design%20Inquiry"
            className="inline-block mt-6 px-6 py-3 text-sm md:text-base font-semibold rounded-lg transition-colors text-center"
            style={{
              backgroundColor: 'var(--textbox-text)',
              color: 'var(--textbox-bg)',
            }}
          >
            {t('custom.cta')}
          </a>
        </div>
      </ParallaxHero>

      <LightboxGallery images={galleryImages} altPrefix="Custom work" />
    </div>
  );
};

export default Custom;
