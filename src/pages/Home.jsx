import React from 'react';
import home_01 from '../assets/images/home_01_zoeSm.jpg';
import home_02 from '../assets/images/home_02_3C5330C5.jpeg';
import home_03 from '../assets/images/home_03_IMG_9621.jpg';
import home_04 from '../assets/images/home_04_etsy_285019522.jpg';
import home_05 from '../assets/images/home_05_BoleroVest.jpg';
import home_06 from '../assets/images/home_06_Photo_Jun_09.jpg';
import store_01 from '../assets/images/store_01_IMG_7890.jpg';
import store_02 from '../assets/images/store_02_IMG_9654.jpg';
import HorizontalScrollCarousel from '../components/HorizontalScrollCarousel';

const carouselImages = [home_02, home_03, home_04, home_05, home_06, store_01, store_02];

const Home = () => {

  return (
    <div style={{ backgroundColor: '#286140' }}>
      <div className="flex items-center" style={{ height: 'calc(100vh - 86px)' }}>
        <img
          src={home_01}
          alt="M. Renee Designs Fashion"
          className="object-cover object-left-top"
          style={{ height: '100%', width: 'auto', maxWidth: '60vw' }}
        />
        <div className="flex flex-col justify-center flex-1" style={{ padding: '15px' }}>
          <div className="shadow-lg" style={{
            backgroundColor: 'rgba(184, 97, 37, 0.75)',
            padding: '32px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)'
          }}>
            <h1 className="text-4xl font-bold text-[#F5E6D3]">Bespoke Wearable Art</h1>
            <p className="text-lg mt-4 text-[#F5E6D3]">Heirloom-quality leather pieces handcrafted in Houston from wild-sourced deer and elk hides. Each garment is a one-of-a-kind work of art, designed to move with your body and celebrate its natural beauty.</p>
            <p className="text-lg mt-4 text-[#F5E6D3]">From intimate one-on-one design fittings to personalized draping and custom hide selection, every piece tells a story—yours and the hide's. An elegance grounded in nature, built to last generations.</p>
          </div>
        </div>
      </div>

      <HorizontalScrollCarousel items={carouselImages} />
    </div>
  );
};

export default Home;
