import React from 'react';
import store_01 from '../assets/images/store_01_IMG_7890.jpg';
import store_02 from '../assets/images/store_02_IMG_9654.jpg';
import store_03 from '../assets/images/store_03_IMG_9653.jpg';
import store_04 from '../assets/images/store_04_IMG_9627.jpg';
import store_05 from '../assets/images/store_05_IMG_9626.jpg';
import store_06 from '../assets/images/store_06_FE18916E.jpeg';
import store_07 from '../assets/images/store_07_etsy_4403213174.jpg';
import home_03 from '../assets/images/home_03_IMG_9621.jpg';
import home_05 from '../assets/images/home_05_BoleroVest.jpg';
import home_06 from '../assets/images/home_06_Photo_Jun_09.jpg';
import HorizontalScrollCarousel from '../components/HorizontalScrollCarousel';

const heroImageStyle = `
  .designs-hero-image {
    max-height: 50vh;
    height: auto;
    padding-left: 0;
  }
  @media (min-width: 768px) {
    .designs-hero-image {
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

const products = [
  {
    name: 'Queen Collar Full Grain Leather Coat (front)',
    image: store_05
  },
  {
    name: 'Queen Collar Full Grain Leather Coat (back)',
    image: store_04
  },
  {
    name: 'Queen Peplum Vest',
    image: store_02
  },
  {
    name: 'Backless Leather Dress',
    image: store_06
  },
  {
    name: 'Bolero Vest',
    image: home_05
  },
  {
    name: 'Halter Top Leather Dress',
    image: home_06
  }
];

const Designs = () => {

  return (
    <div>
      <style>{heroImageStyle}</style>
      <div className="flex flex-col md:flex-row md:min-h-[calc(100vh-var(--header-height))]">
        <div className="md:w-1/2">
          <img
            src={store_01}
            alt="M. Renee Designs"
            className="designs-hero-image object-cover object-center w-full h-auto md:h-full"
          />
        </div>
        <div className="md:w-1/2 flex flex-col md:justify-center" style={{ padding: '15px 15px 0 15px' }}>
          <div className="shadow-lg" style={{
            backgroundColor: 'rgba(184, 97, 37, 1)',
            padding: '20px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)',
            borderRadius: '16px'
          }}>
            <h1 className="text-2xl md:text-4xl font-bold text-[#F5E6D3]">Designs</h1>
            <p className="text-base md:text-lg mt-4 text-[#F5E6D3]">Natural ~ Refined ~ Fantastical</p>
            <p className="text-sm md:text-base mt-4 text-[#F5E6D3]">Emily creates limited run collections of handcrafted leatherware, each piece made from wild-sourced deer and elk hides. Every collection celebrates the natural beauty and unique characteristics of the materials, ensuring that each item is truly one-of-a-kind.</p>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <HorizontalScrollCarousel items={products} showTitles={true} />
      </div>
      <div className="md:hidden" style={{ padding: '15px' }}>
        <div className="grid grid-cols-1 gap-6">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
                style={{ borderRadius: '8px', maxHeight: 'calc(100vh - var(--header-height))', objectFit: 'contain', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)' }}
              />
              <h2 className="text-lg font-bold text-[#F5E6D3] mt-3">{product.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Designs;
