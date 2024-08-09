"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
const academyCourses = [
  {
    title: "Primary school Mathematics",
    description: "Mathematics for primary school students.",
    classGroup: "Primary 1-6",
    image: "/BasicMath.svg",
  },
  {
    title: "Primary school English",
    description: "Improve your English reading and writing skills.",
    classGroup: "Primary 1-6",
    image: "/BasicEnglish.svg",
  },
  {
    title: "Primary school Science",
    description: "Explore the world of science with engaging lessons.",
    classGroup: "Primary 1-6",
    image: "/BasicScience.svg",
  },
  {
    title: "JSS Mathematics",
    description: "Master key math concepts for JSS students.",
    classGroup: "JSS 1-3",
    image: "/BasicMath.svg",
  },
  {
    title: "JSS English",
    description: "Improve your grammar, writing, and reading skills.",
    classGroup: "JSS 1-3",
    image: "/BasicEnglish.svg",
  },
  {
    title: "JSS Science",
    description: "Explore core science topics for JSS levels.",
    classGroup: "JSS 1-3",
    image: "/BasicScience.svg",
  },
];
const otherCourses = [
  {
    title: "Basic Web Development",
    description: "Learn the fundamentals of web development.",
    classGroup: "Age 8 - 16",
    image: "/WebDevelopment.svg",
  },
  {
    title: "Basic Game Development",
    description: "Create your own games using simple tools.",
    classGroup: "Age 8 - 16",
    image: "/GameDevelopment.svg",
  },
  {
    title: "Creative Writing",
    description: "Develop storytelling and writing skills.",
    classGroup: "Age 10 - 16",
    image: "/CreativeWriting.svg",
  },
  {
    title: "Digital Art and Animation",
    description: "Create digital art and animations using fun tools.",
    classGroup: "Age 10 - 16",
    image: "/DigitalArt.svg",
  },
];
const Offers = () => {
  return (
    <div className="bg-[#FFA391] w-full my-2 flex flex-col py-2 gap-0">
      <div className="bg-[#26335D] w-full p-5 md:px-10 md:py-16">
        <h2 className="text-white text-2xl md:text-4xl font-bold mb-5">
          Academy Courses
        </h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            840: {
              slidesPerView: 3,
            },
            1240: {
              slidesPerView: 4,
            },
          }}
        >
          {academyCourses.map((course) => (
            <SwiperSlide
              key={course.title}
              className="group card glass w-80 h-96 shadow-lg my-2"
            >
              <div className="w-full h-56 overflow-hidden rounded-t-xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-56 w-full object-center object-cover group-hover:scale-110 overflow-hidden"
                />
              </div>
              <div className="card-body">
                <h2 className="font-bold text-md text-white">{course.title}</h2>
                <p className="text-gray-200 font-light">{course.description}</p>
                <div className="font-medium text-right text-white">
                  <p>{course.classGroup}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full p-5 md:px-10 md:py-16">
        <h2 className="text-gray-950 text-2xl md:text-4xl font-bold mb-5">
          Other Courses
        </h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            840: {
              slidesPerView: 3,
            },
            1240: {
              slidesPerView: 4,
            },
          }}
        >
          {otherCourses.map((course) => (
            <SwiperSlide
              key={course.title}
              className="group card glass w-80 h-96 shadow-xl my-2"
            >
              <div className="w-full h-56 overflow-hidden rounded-t-xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-56 w-full object-center object-cover group-hover:scale-110 overflow-hidden"
                />
              </div>
              <div className="card-body">
                <h2 className="font-bold text-md text-gray-800">
                  {course.title}
                </h2>
                <p className="text-gray-800 font-light">{course.description}</p>
                <div className="font-medium text-right text-gray-800">
                  <p>{course.classGroup}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Offers;
