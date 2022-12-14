import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import * as Data from "../utils/data";
import Image from "next/image";

const Testimonials = () => {
  const { Testimonials } = Data.Data;

  return (
    <div className="testimonials">
      <h1 className="text-center text-[2rem] font-medium">
        Hear From Our Clients
      </h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {Testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="slide flex w-[90%] h-auto gap-[.5rem] justify-between  my-[4rem] mx-auto py-[2rem] px-[1rem] shadow-lg shadow-[#ccc] rounded-lg">
              <div className="image w-[130px] h-[130px] relative  rounded-full">
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
