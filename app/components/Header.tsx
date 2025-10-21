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
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center">
            <Image
              width={60}
              height={24}
              src={navLogo}
              alt="The Real Objects"
              priority
              style={{ height: 'auto' }}
              className="h-6 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navbarText.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <Image
                  src={headerIcon}
                  alt="Close"
                  width={20}
                  height={20}
                />
              ) : (
                <LuGrip className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navbarText.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
