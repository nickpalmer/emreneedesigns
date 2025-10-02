import React from 'react';
import about_01 from '../assets/images/about_01_IMG_7888.jpg';
import about_02 from '../assets/images/about_02_IMG_2431.jpg';
import custom_01 from '../assets/images/custom_01_Emily_Renee_Smith.jpg';

const About = () => {
  return (
    <div style={{ backgroundColor: '#286140' }}>
      <div className="flex items-center" style={{ height: 'calc(100vh - 86px)' }}>
        <img
          src={about_02}
          alt="Emily Renee Smith"
          className="object-cover object-center"
          style={{ height: '100%', width: 'auto', paddingLeft: '15px' }}
        />
        <div className="flex flex-col justify-center flex-1" style={{ padding: '15px' }}>
          <div className="shadow-lg" style={{
            backgroundColor: 'rgba(184, 97, 37, 0.75)',
            padding: '32px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)',
            borderRadius: '16px'
          }}>
            <h2 className="text-2xl font-bold text-[#F5E6D3]">Emily Renee Smith</h2>
            <p className="text-lg mt-4 text-[#F5E6D3] italic">Emily Renee Smith is a designer focused on creating beautiful, functional leather goods that connect people to the joy of their bodies.</p>
            <p className="mt-4 text-[#F5E6D3]">Marrying form and function in design began at a young age for Emily Renee. I began sewing as a child under the guidance of my mother, eventually combining fashion and function to tailor outfits—even making my own prom dress. In 2014, after working with leather-bound journals and costumes, I began creating custom-fitted leatherwear for real people—and never looked back.</p>
            <p className="mt-4 text-[#F5E6D3]">Today, I still make bespoke pieces for private clients and also offer small-batch ready-to-wear collections.</p>
            <p className="mt-4 text-[#F5E6D3]">I create each piece myself in Houston, Texas, primarily using wild-sourced deer and elk hides and other exotics known for their supple feel and raw beauty. These hides carry the stories of their former life—scars, marks, wildness—and I shape them into wearable art designed to move with your body. They feel as luxurious as they look; an elegance grounded in nature.</p>
            <p className="mt-4 text-[#F5E6D3]">I'm not part of the fast fashion world—I'm here for the long-lasting, heirloom beauty.</p>
            <div className="flex mt-4" style={{ gap: '16px' }}>
              <img src={about_01} alt="Emily Renee Smith" className="object-cover" style={{ width: '25vw', height: 'auto' }} />
              <img src={custom_01} alt="Custom design work" className="object-cover" style={{ width: '25vw', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;