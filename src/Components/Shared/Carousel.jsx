import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Testimoni from '../Homepage/Testimoni';

// Import Lazy Load Image
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // optional blur effect

export default function CustomCarousel({ images, type, testimoni }) {
  const [isMobile, setIsMobile] = useState(false);

  const detectMobile = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    detectMobile();
    window.addEventListener('resize', detectMobile);
    return () => window.removeEventListener('resize', detectMobile);
  }, []);

  const sides = testimoni && !isMobile ? 3 : 1;

  return (
    <div className="relative">
      <Swiper
        slidesPerView={sides}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
{!type &&
  images.map((items, index) => (
    <SwiperSlide key={index}>
      <LazyLoadImage
        src={items.image}
        alt=""
        effect="blur"
        className="h-[40vh] md:h-[90vh] w-full object-cover object-[90%_center]" 
      />
    </SwiperSlide>
  ))
}


        {type &&
          testimoni.map((items, index) => (
            <SwiperSlide className="pb-10" key={index}>
              <Testimoni testimoni={items} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}
