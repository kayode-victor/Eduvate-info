import React from "react";

const classDetails = [
  {
    title: "Age Group",
    content: "For ages 3 to 16 years",
  },
  {
    title: "Frequency",
    content: "Classes are held twice a week, ensuring consistent progress.",
  },
  {
    title: "Duration",
    content:
      "Each session lasts 2 hours, providing ample time for in-depth learning and practice.",
  },
  {
    title: "Format",
    content:
      "One-on-one personalized tutoring tailored to meet the unique learning needs of each student.",
  },
  {
    title: "Outcome",
    content:
      "Our program is designed to boost your child's confidence, enhance their academic skills, and foster a love for learning.",
  },
];

const Details = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-[500px] px-5 md:px-20 lg:px-40 mb-10 relative">
      {/* Image Section */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center mb-10 md:mb-0">
        <img
          src="/imgBg2.svg"
          alt="Background-image"
          className="hidden md:block h-[400px] w-[400px] absolute z-0"
        />
        <img
          src="/dancingBoy.svg"
          alt="Confident-dancing-boy"
          className="hidden md:block h-[440px] w-[440px] relative z-10"
        />
      </div>

      {/* Details Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-start px-2 md:px-5 py-10 bg-transparent  border-2 hover:border-primary z-10">
        <div className="block md:hidden absolute inset-0 z-0 opacity-10 bg-cover bg-center">
          <img
            src="/imgBg2.svg"
            alt="Background-image"
            className="h-[400px] w-[400px] absolute z-0"
          />
          <img
            src="/dancingBoy.svg"
            alt="Confident-dancing-boy"
            className=" h-[440px] w-[440px] relative z-10"
          />
        </div>
        <p className="text-gray-800 font-bold text-xl md:text-3xl uppercase mb-2 text-center md:text-left tracking-wide">
          Our Class Overview
        </p>
        {classDetails.map((detail, index) => (
          <p
            key={index}
            className="text-sm md:text-md font-normal text-gray-700 py-2"
          >
            <span className="font-semibold">{detail.title}:</span>{" "}
            {detail.content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Details;
