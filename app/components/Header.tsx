"use client";

import Image from "next/image";
import Link from "next/link";
import navLogo from "../../public/assets/images/navLogo.png";
import { useState } from "react";
import { navbarText } from "../data/headerData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  return (
    <nav className="bg-gray-100 fixed border border-gray-200 sm:h-[70px] xl:h-30 flex items-center justify-center w-screen z-50">
      <div className="flex items-center xl:w-11/12 w-full sm:px-4 md:px-4 lg:px-4 xl:px-12 px-4 justify-between">
        <div className="flex items-center">
          <Image
            width={100}
            height={100}
            src={navLogo}
            alt="Logo"
            className="mr-2"
          />
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 hover:text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex space-x-4 z-50 gap-4 bg-white md:bg-transparent md:static absolute top-16 left-0 right-0 md:top-12 md:left-auto md:right-auto md:space-x-4 md:flex-row flex flex-col items-center`}
        >
          {navbarText.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`px-2 py-1 md:w-full mt-2 mb-2 ${item.color} lg:min-w-max border border-nav-bg rounded-md sm:text-textXs lg:text-textMd xl:text-textMd bg-transparent ${item.hover}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;