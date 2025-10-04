import React from 'react';
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
  return (
    <div>
      <style>{heroImageStyle}</style>
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: 'calc(100vh - var(--header-height))' }}>
        <div className="flex justify-center">
          <img
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
            <h2 className="text-xl md:text-2xl font-bold">Emily Renee</h2>
            <p className="text-base md:text-lg mt-4 italic">Emily Renee is a designer focused on creating beautiful, functional leather goods that connect people to the joy of their bodies.</p>
            <p className="text-sm md:text-base mt-4">Marrying form and function in design began at a young age for Emily Renee.</p>
            <img src={custom_01} alt="Custom design work" className="object-cover w-full mt-4" style={{ height: 'auto', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)' }} />
            <p className="text-sm md:text-base mt-4">I began sewing as a child under the guidance of my mother, eventually combining fashion and function to tailor outfits—even making my own prom dress. In 2014, after working with leather-bound journals and costumes, I began creating custom-fitted leatherwear for real people—and never looked back.</p>
            <p className="text-sm md:text-base mt-4">Today, I still make bespoke pieces for private clients and also offer small-batch ready-to-wear collections.</p>
            <p className="text-sm md:text-base mt-4">I create each piece myself in Houston, Texas, primarily using wild-sourced deer and elk hides and other exotics known for their supple feel and raw beauty. These hides carry the stories of their former life—scars, marks, wildness—and I shape them into wearable art designed to move with your body. They feel as luxurious as they look; an elegance grounded in nature.</p>
            <p className="text-sm md:text-base mt-4">I'm not part of the fast fashion world—I'm here for the long-lasting, heirloom beauty.</p>
            <img src={about_01} alt="Emily Renee" className="object-cover w-full mt-4" style={{ height: 'auto', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;