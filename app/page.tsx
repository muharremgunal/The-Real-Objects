"use client";

import Image from "next/image";
import React, { useState } from "react";
import firstImage from "../public/assets/images/firstImage.png";
import woolly from "../public/assets/images/woolly.png";
import brick from "../public/assets/images/brick.png";
import Olive from "../public/assets/images/t-olive.png";
import one from "../public/assets/images/1.png";
import motor from "../public/assets/images/motor.png";
import logo from "../public/assets/images/logo.jpg";
import vicle from "../public/assets/images/vicle.jpeg";
import coffe from "../public/assets/images/caffe.jpeg";
import { sliderData } from "./data/homeData";
import Link from "next/link";
import ScrollImages from "./components/ScrollImages";

const Index = () => {
  const [hoveredIndex, setHoveredIndex] = useState<any>(null);
  const images = [
    {
      src: brick,
      alt: "Image 1",
      href: "/detail/img1",
      text: (
        <div className="flex flex-col items-start justify-start">
          <span className="text-xl">Brick</span>
          <span className="text-lg">olive</span>
        </div>
      ),
      bg: "bg-green-300",
      colSpan: "col-span-2 md:col-span-1 sm:col-span-2",
      rowSpan: "sm:row-span-2 md:col-span-1",
    },
    {
      src: woolly,
      alt: "Image 2",
      href: "/detail/img2",
      text: "Coffe",
      bg: "bg-green-300",
      colSpan: "col-span-1 md:col-span-2 sm:col-span-1",
      rowSpan: "sm:row-span-2 ",
    },
    {
      src: one,
      alt: "Image 3",
      href: "/detail/img3",
      text: "Coffe",
      bg: "bg-green-300",
      colSpan: "col-span-1 md:col-span-1 sm:col-span-1",
      rowSpan: "sm:row-span-2 md:col-span-1",
    },
    {
      src: coffe,
      alt: "Image 4",
      href: "/detail/img4",
      text: "Coffe",
      bg: "bg-green-300",
      colSpan: "col-span-2 md:col-span-2 sm:col-span-2",
      rowSpan: "sm:row-span-2",
    },
    {
      src: vicle,
      alt: "Image 2",
      href: "/detail/img2",
      text: "Coffe",
      bg: "bg-green-300",
      colSpan: "col-span-1 md:col-span-1 sm:col-span-1",
      rowSpan: "sm:row-span-2",
    },
    {
      src: one,
      alt: "Image 3",
      href: "/detail/img3",
      text: "Coffe",
      bg: "bg-green-300",
      colSpan: "col-span-1 md:col-span-1 sm:col-span-1",
      rowSpan: "sm:row-span-2",
    },
    {
      src: one,
      alt: "Image 3",
      href: "/detail/img3",
      text: "Coffe",
      bg: "bg-green-300",
      colSpan: "col-span-2 md:col-span-1 sm:col-span-2",
      rowSpan: "sm:row-span-2 md:col-span-1",
    },
    {
      src: one,
      alt: "Image 3",
      href: "/detail/img3",
      text: "Coffe",
      bg: "bg-sky-300",
      colSpan: "col-span-1 md:col-span-1 sm:col-span-1",
      rowSpan: "sm:row-span-2 md:col-span-1",
    },
    {
      src: Olive,
      alt: "Image 2",
      href: "/detail/img2",
      text: "Coffe",
      bg: "bg-green-300",
      colSpan: "col-span-1 md:col-span-2 sm:col-span-1",
      rowSpan: "sm:row-span-2 ",
    },
  ];

  return (
    <div className="w-screen h-auto">
      <Image
        objectFit="cover"
        src={firstImage}
        alt="Logo"
        className="w-screen"
      />

      <div className="z-0 w-full h-full flex flex-col items-center">
        <div className="z-40 w-screen flex overflow-hidden whitespace-nowrap relative xl:h-16 lg:h-12 md:h-10 sm:h-8 h-6 -mt-6 backdrop-blur-sm bg-white/20 xl:-mt-16 lg:-mt-12 md:-mt-10 sm:-mt-8">
          <div className="flex animate-marquee  items-center xl:gap-20 lg:gap-16 md:gap-12 sm:gap-10">
            {sliderData.map((item, index) => (
              <div
                key={index}
                className="flex items-center xl:gap-20 lg:gap-16 md:gap-12 sm:gap-10"
              >
                <span className="bg-[#DCDC28] rounded-full w-3 h-3 mr-2"></span>
                <span className="xl:w-60 lg:w-40 md:w-20 sm:w-10 sm:text-textXxs md:text-textMd lg:text-textMd xl:text-textXl text-textXxs mr-2">
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
                <span className="bg-[#DCDC28] rounded-full w-3 h-3 mr-2"></span>
                <span className="xl:w-60 lg:w-40 md:w-20 sm:w-10 sm:text-textXxs md:text-textMd lg:text-textMd xl:text-textXl text-textXxs mr-2">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center px-1 my-20 max-w-[1326px]">
          <div className="flex flex-col md:flex-row items-start justify-between w-full">
            <div className="w-2/3 space-y-8">
              <h1 className="text-6xl text-black">
                For us, design is more than just making things look good.
              </h1>
              <p className="text-2xl text-gray-700 w-3/4">
                It’s our way of making real, positive change in the world. We
                want to create products that not only serve a purpose but also
                bring a sense of happiness and possibility to everyday life.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-2xl gap-5">
                  <span className="inline-block w-3 h-3 rounded-full bg-[#DCDC28] mr-2"></span>
                  Industrial Design
                </li>
                <li className="flex items-center text-2xl gap-5">
                  <span className="inline-block w-3 h-3 rounded-full bg-[#DCDC28] mr-2"></span>
                  Product Design
                </li>
                <li className="flex items-center text-2xl gap-5">
                  <span className="inline-block w-3 h-3 rounded-full bg-[#DCDC28] mr-2"></span>
                  UX/UI Design
                </li>
                <li className="flex items-center text-2xl gap-5">
                  <span className="inline-block w-3 h-3 rounded-full bg-[#DCDC28] mr-2"></span>
                  Design for Manufacturing
                </li>
              </ul>
            </div>
            <div className="w-full -ml-[400px] h-full">
              <Image
                src={motor}
                alt="Design Image"
                className="w-full h-full"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#DCDC28] relative py-10 flex flex-col items-center justify-center max-w-[1326px]">
          <div className="text-center px-40">
            <h2 className="text-4xl font-bold">Our Work</h2>
            <p className="mt-4 text-lg px-10">
              Every product we design has its own unique impact on its users. We
              strive to <span className="font-bold">evoke emotions</span> and
              create{" "}
              <span className="font-bold">
                experiences that resonate on a personal level.
              </span>
            </p>
          </div>
          <div className="absolute bottom-0 right-0 ">
            <div className="bg-white rounded-full p-2 shadow-md flex items-center justify-center">
              <Image src={logo} alt="logo" width={30} height={30} />
            </div>
          </div>
        </div>
        <div className="w-screen flex items-center justify-center">
          <div
            className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 xl:max-w-[1326px] w-full h-screen sm:px-4 md:px-4 lg:px-4 xl:px-0 gap-4 p-4 transform origin-top-center transition-transform duration-500 ease-in-out 
          scale-100 md:scale-x-[0.90] md:scale-y-[0.50] sm:scale-x-[0.90] sm:scale-y-[0.50] lg:scale-x-90 lg:scale-y-50 xl:scale-100"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative cursor-pointer transition-all duration-500 ease-in-out ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? `blur-sm`
                    : ""
                } ${image.colSpan} ${image.rowSpan} `}
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
                {hoveredIndex === index && (
                  <div
                    className={`absolute bottom-0 flex items-end justify-center ${image.bg} w-full h-16 transition-all duration-800 ease-in-out`}
                  >
                    <span className="w-full h-full flex items-start justify-start font-bold text-white">
                      {image.text}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <ScrollImages />
      </div>
    </div>
  );
};

export default Index;
