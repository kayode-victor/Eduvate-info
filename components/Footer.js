import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-primary flex justify-center items-center p-4 z-10">
      <aside className="grid-flow-col items-center ">
        <p className="text-white">
          Copyright © {new Date().getFullYear()} - All right reserved by Eduvate
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
