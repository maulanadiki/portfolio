"use client"
import './testimoni.css'
import {Data} from './Data'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
// slidernya menggunakan swiper

const Testimoni = () => {
  return (
    <section className="testimonial container section">
        <h2 className="section__title">My Client Say</h2>
        <span className="section__subtitle">Testimonial</span>
    
        <Swiper className="testimonials__container mySwiper"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          }
         
        }}
        modules={[Pagination]}
        >
            {Data.map( ({id,image,title,Description})=>{
                return(
                    <SwiperSlide key={id} className="testimonial__card">
                        <Image src={image} alt={title} className="testimonial__img"/>

                        <h3 className="testimonial__name">{title}</h3>
                        <p className="testimonial__description">{Description}</p>
                    </SwiperSlide>
                )
            } )}
        </Swiper>
    </section>
  )
}

export default Testimoni