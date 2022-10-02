
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CardSlider.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

export default function CardSlider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="sliderimage"
            src="https://i.postimg.cc/05KMHL6x/imag11111111111.png"
            alt="error" 
          />
        </SwiperSlide>
       
        <SwiperSlide>
          <img className="sliderimage"
            src="https://i.postimg.cc/JzG84Wjd/fast-company.png"
            alt="error" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="sliderimage"
            src="https://i.postimg.cc/PxdFJmBr/media-city.png"
            alt="error" 
            
          />
          
        </SwiperSlide>
      
        <SwiperSlide>
          <img className="sliderimage"
            src="https://i.postimg.cc/05KMHL6x/imag11111111111.png"
            alt="error" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="sliderimage"
            src="https://i.postimg.cc/JzG84Wjd/fast-company.png"
            alt="error" 
          />
        </SwiperSlide>
       
        <SwiperSlide>
          <img className="sliderimage"
            src="https://i.postimg.cc/JzG84Wjd/fast-company.png"
            alt="error" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="sliderimage"
            src="https://i.postimg.cc/05KMHL6x/imag11111111111.png"
            alt="error" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="sliderimage"
            src="https://i.postimg.cc/JzG84Wjd/fast-company.png"
            alt="error" 
          />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
