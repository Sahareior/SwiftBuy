import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Banner = ({ image, altText }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <div 
      ref={ref}
      className="relative overflow-hidden md:w-[40vw] h-[600px] flex items-center justify-center"
    >
      {/* Parallax Image Container */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          className={`w-full h-full object-cover bg-fixed transition-transform duration-1000 ${
            inView ? 'scale-105' : 'scale-100'
          }`} 
          src={image} 
          alt={altText} 
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4">
        <p className={`text-lg md:text-xl font-light mb-2 transition-all duration-500 delay-100 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Spring Collections
        </p>
        <h5 className={`text-3xl mt-5 md:text-5xl font-bold mb-4 transition-all duration-500 delay-200 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Free Shipping <br/>
          <span className="text-amber-300 mt-4">Over Order $150</span>
        </h5>
        <button className={`btn btn-outline mt-4 text-white border-white hover:bg-white hover:text-black transition-all duration-500 delay-300 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Explore Now
        </button>
      </div>
    </div>
  );
};

const Twobanner = () => {
  return (
    <div className="flex md:flex-row flex-col gap-8 mt-28 justify-around">
      <Banner
        image="https://foesta-demo.myshopify.com/cdn/shop/files/banner-1.png?v=1710390689&width=1420"
        altText="Spring Collection 1"
      />
      <Banner
        image="https://foesta-demo.myshopify.com/cdn/shop/files/banner-2.png?v=1710390719&width=1420"
        altText="Spring Collection 2"
      />
    </div>
  );
};

export default Twobanner;