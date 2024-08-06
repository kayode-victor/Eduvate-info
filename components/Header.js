import React from "react";
import WhatsappButton from "./WhatsappButton";
const Header = () => {
  return (
    <div className="navbar bg-transparent px-2 md:px-10">
      <div className="flex-1 justify-between items-center">
        <div className="">
          <img src="/Redlogo.svg" alt="Eduvate" />
        </div>
        <div>
          <WhatsappButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
