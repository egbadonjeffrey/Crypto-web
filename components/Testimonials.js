import React from "react";
import style from "../styles/testimonials.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import * as Data from "../utils/data";
import Image from "next/image";

const Testimonials = () => {
  const { Testimonials } = Data.Data;

  return (
    <div className="testimonials w-[70%] mx-auto">
      <h1 className="text-center text-[2rem] font-medium">
        Hear From Our Clients
      </h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {Testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="slide flex  h-auto gap-[1.5rem] justify-around  my-[4rem]  py-[2rem] px-[1rem] s rounded-lg">
              <div
                className={`${style.image} w-[100px] h-[100px] relative  rounded-full`}
              >
                <Image
                  src={testimonial.image}
                  alt="Customer Image"
                  className="rounded-full w-full h-full"
                />
              </div>
              <div className="description flex flex-col justify-between flex-1 gap-[1rem]">
                <p className="text-[1rem] text-[#212529] font-[200] leading-6">
                  {testimonial.statement}
                </p>
                <b className="text-[#2a2a2a] uppercase">{testimonial.name}</b>

                <span>{testimonial.profession}</span>

                <span className="text-[blue]">{testimonial.country}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
