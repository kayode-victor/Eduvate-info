import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaClock } from "react-icons/fa";

const services = [
  {
    title: "Personalized Attention",
    description:
      "One-on-one sessions tailored to your child's unique learning needs.",
    icon: (
      <FaUserGraduate className="text-4xl text-primary group-hover:text-white mb-4 mx-auto" />
    ),
  },
  {
    title: "Experienced Instructor",
    description: "Dedicated and skilled educators with passion for teaching.",
    icon: (
      <FaChalkboardTeacher className="text-4xl text-primary group-hover:text-white mb-4 mx-auto" />
    ),
  },
  {
    title: "Flexible Scheduling",
    description: "Convenient class times to fit your busy schedule.",
    icon: (
      <FaClock className="text-4xl text-primary group-hover:text-white mb-4 mx-auto" />
    ),
  },
];

const Service = () => {
  return (
    <div className="flex relative flex-col gap-10 items-center md:items-start py-5 md:py-10 px-5 md:px-20 md:-top-36">
      <h1 className="text-xl font-bold tracking-wider text-center md:text-left text-gray-600 pt-5 md:py-0 md:px-20">
        Why Choose Our Tutoring Services?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 md:px-20 gap-8 z-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white hover:bg-primary group shadow-lg rounded-xl p-4 text-center cursor-pointer"
          >
            {service.icon}
            <h2 className="text-lg font-semibold border-b-2 group-hover:border-white border-primary group-hover:text-white mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600 font-light group-hover:text-white tracking-tight">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
