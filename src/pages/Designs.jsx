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
  },
  {
    name: 'Leather Messenger Bags',
    image: home_03
  },
  {
    name: 'Leather Journals',
    image: store_07
  }
];

const Designs = () => {

  return (
    <div style={{ backgroundColor: '#286140' }}>
      <div className="flex items-center" style={{ height: 'calc(100vh - 86px)' }}>
        <img
          src={store_01}
          alt="M. Renee Designs"
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
            <h1 className="text-4xl font-bold text-[#F5E6D3]">Designs</h1>
            <p className="text-lg mt-4 text-[#F5E6D3]">Natural ~ Refined ~ Fantastical</p>
            <p className="mt-4 text-[#F5E6D3]">Emily creates limited run collections of handcrafted leatherware, each piece made from wild-sourced deer and elk hides. Every collection celebrates the natural beauty and unique characteristics of the materials, ensuring that each item is truly one-of-a-kind.</p>
          </div>
        </div>
      </div>

      <HorizontalScrollCarousel items={products} showTitles={true} />
    </div>
  );
};

export default Designs;
