"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const testimonials = [
  {
    quote:
      "This tutoring service has greatly improved my child's understanding of mathematics.",
    name: "Jane Doe",
    rating: 5,
  },
  {
    quote:
      "The personalized attention has helped my daughter excel in her studies.",
    name: "John Smith",
    rating: 4,
  },
  {
    quote:
      "A fantastic program! My son loves the classes and is always eager to learn more.",
    name: "Mrs Comfort Kayode",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="w-full p-2 py-10 md:py-16">
      <h2 className="text-2xl md:text-4l font-bold text-center mb-5">
        Testimonials
      </h2>
      <div className="px-5 md:px-10 lg:px-20">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={25}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1000: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-5 bg-white shadow-lg rounded-lg h-48 md:h-56 border-2 border-gray-500 hover:border-primary">
                <p className="italic text-gray-700 text-lg md:text-xl mb-4">
                  {testimonial.quote}
                </p>
                <div className="flex flex-col mt-5 md:mt-16 relative bottom-2">
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.586 4.892a1 1 0 00.95.69h5.075c.969 0 1.371 1.24.588 1.81l-4.105 2.983a1 1 0 00-.364 1.118l1.587 4.892c.3.921-.755 1.688-1.54 1.118l-4.106-2.983a1 1 0 00-1.175 0l-4.105 2.983c-.784.57-1.84-.197-1.54-1.118l1.587-4.892a1 1 0 00-.364-1.118L2.326 9.32c-.783-.57-.38-1.81.588-1.81h5.075a1 1 0 00.95-.69l1.586-4.892z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
