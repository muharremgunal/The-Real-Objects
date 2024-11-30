"use client";

import Image from "next/image";
import Link from "next/link";
import navLogo from "../../public/assets/images/navLogo.png";
import headerIcon from "../../public/assets/images/headerIcon.png";
import { useEffect, useState } from "react";
import { navbarText } from "../data/headerData";
import { LuGrip } from "react-icons/lu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.position = "fixed";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.position = "";
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <nav className="backdrop-blur-sm bg-white/30 fixed  sm:h-[70px] xl:h-30 flex top-0 items-center justify-center w-screen z-50">
      <div className="flex items-center h-20 xl:w-11/12 w-full sm:px-4 md:px-4 lg:px-4 xl:px-12 px-4 justify-between">
        <div className="flex items-center">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              width={100}
              height={100}
              src={navLogo}
              alt="Logo"
              className="mr-2"
            />
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 hover:text-gray-600 focus:outline-none"
          >
            {isMenuOpen ? (
              <Image
                src={headerIcon}
                alt="headerIcon"
                width={22}
                height={22}
                className="mr-1"
              />
            ) : (
              <LuGrip className="w-8 h-8" color="black" />
            )}
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex z-50 phone:h-screen gap-4 px-4 phone:w-full phone:bg-white/80 bg-white md:bg-transparent md:static absolute top-20 left-0 right-0 mb-2 md:top-12 md:left-auto md:right-auto md:space-x-4 md:flex-row flex flex-col items-center`}
        >
          {navbarText.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`px-2 py-1 phone:w-full text-center phone:py-6 phone:px-10 mt-4 mb-2 ${item.color} ${item.border} lg:min-w-max border border-gray-400 rounded-md sm:text-textXs lg:text-textMd xl:text-textLg bg-transparent ${item.hover}`}
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
