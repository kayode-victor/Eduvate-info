import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <button className="relative bg-primary text-white btn hover:bg-white hover:text-primary hover:border-primary hover:border-2">
      <a
        href="https://wa.me/2348059406381"
        className="relative flex items-center gap-2"
      >
        Contact Now
        <span className="absolute left-0 flex items-center justify-center w-full h-full text-xl animate-ping duration-500 opacity-40 z-0">
          <FaWhatsapp />
        </span>
      </a>
    </button>
  );
};

export default WhatsappButton;
