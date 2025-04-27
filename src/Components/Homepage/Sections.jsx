import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // optional blur effect

const Sections = ({ items }) => {
  return (
    <div>
      <div className="relative h-[300px] md:h-[300px] md:w-[300px] w-[93vw] overflow-hidden rounded-xl group transition-all duration-300 hover:shadow-xl">
        <LazyLoadImage
          className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={items.image}
          alt="Kids Collection"
          effect="blur" // 👈 nice blur while loading
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
          <div className="space-y-3 text-center">
            <h4 className="text-white text-2xl md:text-3xl font-bold drop-shadow-md">
              {items.text}
            </h4>
            <button
              className="btn bg-amber-400 text-black hover:bg-amber-500 hover:scale-105 transition-all duration-300 border-0 px-8 py-3 rounded-full shadow-lg"
              aria-label="Shop Kids Collection"
            >
              Shop Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
