import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function CustomCarousel({images}) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
    {
        images.map(items=>     <SwiperSlide>
            <img className='md:h-[90vh]' src={items.image} alt="" />
        </SwiperSlide>)
    }

      </Swiper>
    </>
  );
}
