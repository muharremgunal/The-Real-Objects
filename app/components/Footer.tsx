import Image from "next/image";
import React from "react";
import { FaLinkedin, FaBehance, FaInstagram } from "react-icons/fa";
import footerImage from "../../public/assets/images/footerImages.png";

const Footer = () => {
  return (
    <footer className="bg-[#DCDC28] relative mt-20">
      <div className="max-w-[1326px] mx-auto p-4 w-full flex flex-col sm:flex-row justify-start h-full items-end">
        <div className="text-left text-black text-sm w-1/5 ">
          <p>© 2024 The Real Objects</p>
          <p>Milano Business Center s.r.l.</p>
          <p>Via Mauro Macchi, 8</p>
          <p>20124 Milano</p>
        </div>

        <div className="flex flex-col gap-9 text-center my-6 sm:my-0 w-2/3">
          <h2 className="text-white text-3xl sm:text-4xl font-bold">
            Start Your Project Today.
          </h2>
          <div className="flex flex-col items-center text-center">
            <div className="flex space-x-3 mb-4">
              <FaLinkedin className="text-black text-2xl" />
              <FaBehance className="text-black text-2xl" />
              <FaInstagram className="text-black text-2xl" />
            </div>
            <p className="text-black text-sm sm:text-base">
              hello@therealobjects.com
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 rounded-full">
        <Image width={80} height={80} src={footerImage} alt="footerImage" />
      </div>
    </footer>
  );
};

export default Footer;
