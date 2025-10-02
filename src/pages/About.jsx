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
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)'
          }}>
            <h1 className="text-4xl font-bold text-[#F5E6D3]">About M. Renee Designs</h1>
            <h2 className="text-2xl font-bold text-[#F5E6D3] mt-4">Emily Renee Smith</h2>
            <p className="text-lg mt-4 text-[#F5E6D3]">Creating leather goods that "connect people to the joy of their bodies"</p>
            <p className="mt-4 text-[#F5E6D3]">Started sewing as a child under her mother's guidance, Emily Renee Smith began creating custom leather wear in 2014. She makes bespoke pieces and small-batch ready-to-wear collections. Emily even made her own prom dress and worked with leather-bound journals and costumes before focusing on leatherwear.</p>
            <p className="mt-4 text-[#F5E6D3]">She uses wild-sourced deer and elk hides, valuing "heirloom beauty" over fast fashion. She emphasizes natural imperfections in leather materials, creating pieces that showcase the hide's natural characteristics. Crafting wearable art that "move with your body" using naturally sourced materials with individual stories and character.</p>
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