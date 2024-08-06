import React from "react";
import WhatsappButton from "./WhatsappButton";

const Hero = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row justify-between w-full md:px-10">
        <div className="bg-white flex flex-col w-full md:w-3/5 py-10 pb-10 md:pb-0 px-10 md:px-20 md:py-5 gap-y-6 md:gap-12">
          <p className="text-md text-primary uppercase">
            Invest in Their Future
          </p>
          <h1 className="font-bold text-gray-800 text-3xl md:text-5xl leading-tight tracking-wide">
            Empower Your Child&apos;s Confidence and Skills!
          </h1>
          <p className="text-gray-500 text-sm md:text-lg">
            Expert One-on-One Tutoring Tailored for Ages 3 to 16.
          </p>
          <div>
            <WhatsappButton />
          </div>
        </div>
        <div className="bg-[#184C99] relative flex items-center justify-center w-full md:w-2/5 h-[520px]">
          <img
            src="/ImgBg.svg"
            alt="Background-image"
            className="h-[400px] w-[400px] absolute -bottom-10 z-0"
          />
          <img
            src="/lilGirl.svg"
            alt="Confident-young-student"
            className="h-[440px] w-[440px] -bottom-12 -left-10 relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
