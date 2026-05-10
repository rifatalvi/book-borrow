"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // Fade effect er jonno
const SwepSliide = () => {
    const slideImages = [
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&q=80&w=1200"
  ];
    return (
        <div className="flex-1 relative w-full">
            <div className="relative z-20 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
              <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                effect={'fade'} // Slide na hoye fade hobe, premium feel ashbe
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true, // Choto-boro bullet points
                }}
                className="mySwiper"
              >
                {slideImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img 
                      src={img} 
                      alt={`Library Slide ${index + 1}`} 
                      className="w-full h-[550px] object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10"></div>
            </div>
            </div>
    );
};

export default SwepSliide;