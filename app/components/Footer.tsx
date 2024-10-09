import Image from "next/image";
import React from "react";
import { FaLinkedin, FaBehance, FaInstagram } from "react-icons/fa";
import clearLogo from "../../public/assets/images/clearLogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#DCDC28] relative mt-20">
      <div className="max-w-[1326px] mx-auto p-4 w-full h-full flex flex-col justify-between items-center">
        {/* Sol tarafta Adres Bilgisi */}
        <div className="text-left text-black phone:text-textXxxs md:text-textXxs xl:text-sm w-full xl:pl-32 lg:pl-5 md:pl-5 phone:pl-4 absolute bottom-4 lg:text-base">
          <p>© 2024 The Real Objects</p>
          <p>Milano Business Center s.r.l.</p>
          <p>Via Mauro Macchi, 8</p>
          <p>20124 Milano</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="lg:text-2xl phone:text-md  text-white font-semibold mb-8">
            Start Your Project Today.
          </h2>
          <div className="flex space-x-4">
            <FaLinkedin className="text-black lg:text-2xl phone:text-sm" />
            <FaBehance className="text-black lg:text-2xl phone:text-sm" />
            <FaInstagram className="text-black lg:text-2xl phone:text-sm" />
          </div>
          <p className="text-black text-sm phone:text-textXxs lg:text-textXs mt-4">
            hello@therealobjects.com
          </p>
        </div>

        <div className="absolute bottom-0 right-0">
          <Image
            className="w-24 h-24 phone:w-16 phone:h-16"
            src={clearLogo}
            alt="Footer Image"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
