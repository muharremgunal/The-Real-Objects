"use client";

import Image from "next/image";
import React, { useState } from "react";
import firstImage from "../public/assets/images/firstImage.png";
import one from "../public/assets/images/1.png";
import two from "../public/assets/images/2.png";
import tree from "../public/assets/images/3.png";
import four from "../public/assets/images/4.png";
import { sliderData } from "./data/homeData";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const Index = () => {
  const [hoveredIndex, setHoveredIndex] = useState<any>(null);

  const images = [
    {
      src: one,
      alt: "Image 1",
      href: "/detail/img1",
      colSpan: "col-span-2 md:col-span-1 sm:col-span-2",
      rowSpan: "row-span-1 md:col-span-1",
    },
    {
      src: one,
      alt: "Image 2",
      href: "/detail/img2",
      colSpan: "col-span-1 md:col-span-2 sm:col-span-1",
      rowSpan: "row-span-1 ",
    },
    {
      src: one,
      alt: "Image 3",
      href: "/detail/img3",
      colSpan: "col-span-1 md:col-span-1 sm:col-span-1",
      rowSpan: "row-span-1 md:col-span-1",
    },
    {
      src: one,
      alt: "Image 4",
      href: "/detail/img4",
      colSpan: "col-span-2 md:col-span-2 sm:col-span-2",
      rowSpan: "row-span-1",
    },
    {
      src: one,
      alt: "Image 2",
      href: "/detail/img2",
      colSpan: "col-span-1 md:col-span-1 sm:col-span-1",
      rowSpan: "row-span-1",
    },
    {
      src: one,
      alt: "Image 3",
      href: "/detail/img3",
      colSpan: "col-span-1 md:col-span-1 sm:col-span-1",
      rowSpan: "row-span-1",
    },
    {
      src: one,
      alt: "Image 3",
      href: "/detail/img3",
      colSpan: "col-span-2 md:col-span-1 sm:col-span-2",
      rowSpan: "row-span-1 md:col-span-1",
    },
    {
      src: one,
      alt: "Image 3",
      href: "/detail/img3",
      colSpan: "col-span-1 md:col-span-1 sm:col-span-1",
      rowSpan: "row-span-1 md:col-span-1",
    },
    {
      src: one,
      alt: "Image 2",
      href: "/detail/img2",
      colSpan: "col-span-1 md:col-span-2 sm:col-span-1",
      rowSpan: "row-span-1 ",
    },
  ];
  return (
    <div className="w-screen h-auto">
      <Image
        width={5000}
        height={300}
        objectFit="contain"
        src={firstImage}
        alt="Logo"
      />

      <div className="z-0 w-full h-full">
        <div className="z-40 w-screen flex overflow-hidden whitespace-nowrap relative xl:h-16 lg:h-12 md:h-10 sm:h-8 h-6 -mt-6 backdrop-blur-sm bg-white/20 xl:-mt-16 lg:-mt-12 md:-mt-10 sm:-mt-8">
          <div className="flex animate-marquee  items-center xl:gap-20 lg:gap-16 md:gap-12 sm:gap-10">
            {sliderData.map((item, index) => (
              <div
                key={index}
                className="flex items-center xl:gap-20 lg:gap-16 md:gap-12 sm:gap-10"
              >
                <span className="bg-lime-300 rounded-full w-3 h-3 mr-2"></span>
                <span className="xl:w-60 lg:w-40 md:w-20 sm:w-10 sm:text-textXxs md:text-textMd lg:text-textMd xl:text-textMd text-textXxs mr-2">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee  items-center xl:gap-20 lg:gap-16 md:gap-12 sm:gap-10">
            {sliderData.map((item, index) => (
              <div
                key={index}
                className="flex items-center xl:gap-20 lg:gap-16 md:gap-12 sm:gap-10"
              >
                <span className="bg-lime-300 rounded-full w-3 h-3 mr-2"></span>
                <span className="xl:w-60 lg:w-40 md:w-20 sm:w-10 sm:text-textXxs md:text-textMd lg:text-textMd xl:text-textMd text-textXxs mr-2">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-full h-screen sm:px-4 md:px-4 lg:px-4 xl:px-12 gap-4 p-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative cursor-pointer transition-all duration-500 ease-in-out ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "blur-sm"
                    : ""
                } ${image.colSpan} ${image.rowSpan}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link href={image.href} passHref>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    className="transition-all duration-500 ease-in-out"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
