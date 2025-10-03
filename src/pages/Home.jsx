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

const heroImageStyle = `
  .hero-image-container {
    max-height: 50vh;
  }
  .hero-image {
    max-height: 50vh;
  }
  @media (min-width: 768px) {
    .hero-image-container {
      padding-top: 15px;
      height: calc(100vh - var(--header-height)) !important;
      max-height: none !important;
    }
    .hero-image {
      height: 100% !important;
      width: auto !important;
      max-width: 60vw !important;
      max-height: none !important;
      object-fit: cover;
    }
  }
`;

const carouselImages = [home_02, home_05, home_06, store_01, store_02];

const Home = () => {

  return (
    <div>
      <style>{heroImageStyle}</style>
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: 'calc(100vh - var(--header-height))' }}>
        <div className="hero-image-container">
          <img
            src={home_01}
            alt="M. Renee Designs Fashion"
            className="hero-image object-cover object-center md:object-left-top w-full h-auto md:h-full"
          />
        </div>
        <div className="flex flex-col justify-center" style={{ padding: '15px' }}>
          <div className="shadow-lg" style={{
            backgroundColor: 'rgba(184, 97, 37, 1)',
            padding: '20px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)',
            borderRadius: '16px'
          }}>
            <h1 className="text-2xl md:text-4xl font-bold text-[#F5E6D3]">Bespoke Wearable Art</h1>
            <p className="text-base md:text-lg mt-4 text-[#F5E6D3]">Heirloom-quality leather pieces handcrafted in Houston from wild-sourced deer and elk hides and other exotics. Each garment is a one-of-a-kind work of art, designed to move with your body and celebrate its natural beauty.</p>
            <p className="text-base md:text-lg mt-4 text-[#F5E6D3]">From intimate one-on-one design fittings to personalized draping and custom hide selection, every piece tells a story—yours and the hide's. An elegance grounded in nature, built to last generations.</p>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <HorizontalScrollCarousel items={carouselImages} />
      </div>
      <div className="md:hidden" style={{ padding: '15px' }}>
        <div className="grid grid-cols-1 gap-4">
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto object-cover"
              style={{ borderRadius: '8px', maxHeight: 'calc(100vh - var(--header-height))', objectFit: 'contain' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
