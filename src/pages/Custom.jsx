import React from 'react';
import { Link } from 'react-router-dom';
import custom_01 from '../assets/images/custom_01_Emily_Renee_Smith.jpg';
import custom_02 from '../assets/images/custom_02_Photo_Apr_19.jpg';
import custom_03 from '../assets/images/custom_03_Photo_Aug_15.jpg';
import custom_04 from '../assets/images/custom_04_Photo_Jul_24.jpg';
import HorizontalScrollCarousel from '../components/HorizontalScrollCarousel';

const carouselImages = [custom_02, custom_03, custom_04];

const Custom = () => {

  return (
    <div style={{ backgroundColor: '#286140' }}>
      <div className="flex items-center" style={{ minHeight: 'calc(100vh - 86px)' }}>
        <img
          src={custom_01}
          alt="Custom design work"
          className="object-cover object-center"
          style={{ maxHeight: '75vh', width: 'auto', paddingLeft: '15px' }}
        />
        <div className="flex flex-col justify-center flex-1" style={{ padding: '15px' }}>
          <div className="shadow-lg" style={{
            backgroundColor: 'rgba(184, 97, 37, 0.75)',
            padding: '32px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)',
            borderRadius: '16px'
          }}>
            <h1 className="text-4xl font-bold text-[#F5E6D3]">Custom Designs</h1>
            <p className="text-lg mt-4 text-[#F5E6D3]">"Custom design fittings are one on one, creating bespoke epic fashion from the hides of your choice, draped to flatter your form and suit your function"</p>
            <h2 className="text-2xl font-bold text-[#F5E6D3] mt-4">Empowerment through personalized fashion design</h2>
            <p className="text-lg mt-4 text-[#F5E6D3]">Deep roots. Strong wings.</p>
            <p className="mt-4 text-[#F5E6D3]">Our services include custom design fittings (one-on-one), bespoke epic fashion creation, custom hide selection, personalized draping and fitting, and functional and flattering designs.</p>
            <p className="mt-4 text-[#F5E6D3]">
              To have bespoke clothing made for you please{' '}
              <Link to="/contact" className="text-[#F5E6D3] hover:text-[#286140] transition-colors" style={{ textDecoration: 'underline' }}>
                contact us
              </Link>
            </p>
          </div>
        </div>
      </div>

      <HorizontalScrollCarousel items={carouselImages} containerHeight="200vh" />
    </div>
  );
};

export default Custom;