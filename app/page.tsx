"use client";

import Image from "next/image";
import React, { useState } from "react";
import Image1 from "../public/assets/images/ourWork/1.png";
import Image2 from "../public/assets/images/ourWork/2.png";
import Image3 from "../public/assets/images/ourWork/3.png";
import Image4 from "../public/assets/images/ourWork/4.png";
import Image5 from "../public/assets/images/ourWork/5.png";
import Image6 from "../public/assets/images/ourWork/6.png";
import Image7 from "../public/assets/images/ourWork/7.png";
import Image8 from "../public/assets/images/ourWork/8.png";
import Image9 from "../public/assets/images/ourWork/9.png";
import clearLogo from "../public/assets/images/clearLogo.png";
import motor from "../public/assets/images/motor.png";
import { sliderCardData, sliderData, sliderImages } from "./data/homeData";
import Link from "next/link";
import ScrollImages from "./components/ScrollImages";
import { Carousel } from "antd";
import SliderCard from "./components/sliderCard";
import MouseFollower from "./components/mouseMove";

const Index = () => {
  const [hoveredIndex, setHoveredIndex] = useState<any>(null);
  const images = [
    {
      src: Image1,
      alt: "Image 1",
      href: "/detail/img1",
      text: (
        <div className="flex flex-col items-start justify-start py-2 px-5">
          <span className="text-md font-bold">Woolly</span>
          <span className="text-sm font-thin">Capsule Coffee Machine</span>
          <span className="text-sm font-semibold">Soft Mornings</span>
        </div>
      ),
      bg: "bg-black",
      colSpan: "col-span-2 md:col-span-1 sm:col-span-2",
      rowSpan: "row-span-3",
    },
    {
      src: Image2,
      alt: "Image 2",
      href: "/detail/img2",
      text: (
        <div className="flex flex-col items-start justify-start py-2 px-5">
          <span className="text-md font-bold">Woolly</span>
          <span className="text-sm font-thin">Capsule Coffee Machine</span>
          <span className="text-sm font-semibold">Soft Mornings</span>
        </div>
      ),
      bg: "bg-black",
      colSpan: "col-span-1 md:col-span-2 sm:col-span-1",
      rowSpan: "row-span-3",
    },
    {
      src: Image3,
      alt: "Image 3",
      href: "/detail/img3",
      text: (
        <div className="flex flex-col items-start justify-start py-2 px-5">
          <span className="text-md font-bold">Woolly</span>
          <span className="text-sm font-thin">Capsule Coffee Machine</span>
          <span className="text-sm font-semibold">Soft Mornings</span>
        </div>
      ),
      bg: "bg-[#FFCE31]",
      colSpan: "col-span-1 md:col-span-1 sm:col-span-1",
      rowSpan: "row-span-3",
    },
    {
      src: Image4,
      alt: "Image 4",
      href: "/detail/img4",
      text: (
        <div className="flex flex-col items-start justify-start py-2 px-5">
          <span className="text-md font-bold">Woolly</span>
          <span className="text-sm font-thin">Capsule Coffee Machine</span>
          <span className="text-sm font-semibold">Soft Mornings</span>
        </div>
      ),
      bg: "bg-green-300",
      colSpan: "col-span-2 md:col-span-2 sm:col-span-2",
      rowSpan: "row-span-3",
    },
    {
      src: Image5,
      alt: "Image 2",
      href: "/detail/img2",
      text: (
        <div className="flex flex-col items-start justify-start py-2 px-5">
          <span className="text-md font-bold">Woolly</span>
          <span className="text-sm font-thin">Capsule Coffee Machine</span>
          <span className="text-sm font-semibold">Soft Mornings</span>
        </div>
      ),
      bg: "bg-[#FFCE31]",
      colSpan: "col-span-1 md:col-span-1 sm:col-span-1",
      rowSpan: "row-span-3",
    },
    {
      src: Image6,
      alt: "Image 3",
      href: "/detail/img3",
      text: (
        <div className="flex flex-col items-start justify-start py-2 px-5">
          <span className="text-md font-bold">Woolly</span>
          <span className="text-sm font-thin">Capsule Coffee Machine</span>
          <span className="text-sm font-semibold">Soft Mornings</span>
        </div>
      ),
      bg: "bg-[#DCDC28]",
      colSpan: "col-span-1 md:col-span-1 sm:col-span-1",
      rowSpan: "row-span-3",
    },
    {
      src: Image7,
      alt: "Image 3",
      href: "/detail/img3",
      text: (
        <div className="flex flex-col items-start justify-start py-2 px-5">
          <span className="text-md font-bold">Woolly</span>
          <span className="text-sm font-thin">Capsule Coffee Machine</span>
          <span className="text-sm font-semibold">Soft Mornings</span>
        </div>
      ),
      bg: "bg-green-300",
      colSpan: "col-span-2 md:col-span-1 sm:col-span-2",
      rowSpan: "row-span-3",
    },
    {
      src: Image8,
      alt: "Image 3",
      href: "/detail/img3",
      text: (
        <div className="flex flex-col items-start justify-start py-2 px-5">
          <span className="text-md font-bold">Woolly</span>
          <span className="text-sm font-thin">Capsule Coffee Machine</span>
          <span className="text-sm font-semibold">Soft Mornings</span>
        </div>
      ),
      bg: "bg-[#DCDC28]",
      colSpan: "col-span-1 md:col-span-1 sm:col-span-1",
      rowSpan: "row-span-3",
    },
    {
      src: Image9,
      alt: "Image 2",
      href: "/detail/img2",
      text: (
        <div className="flex flex-col items-start justify-start py-2 px-5">
          <span className="text-md font-bold">Woolly</span>
          <span className="text-sm font-thin">Capsule Coffee Machine</span>
          <span className="text-sm font-semibold">Soft Mornings</span>
        </div>
      ),
      bg: "bg-[#FFCE31]",
      colSpan: "col-span-1 md:col-span-2 sm:col-span-1",
      rowSpan: "row-span-3",
    },
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    pauseOnHover: true,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "60px",
  };

  return (
    <div className="w-screen h-auto">
      <Image
        objectFit="contain"
        src={Image1}
        alt="Logo"
        className="w-screen phone:h-[600px]  sm:h-[550px] lg:h-[800px]"
      />
      <MouseFollower />
      <div className="z-0 w-full h-full flex flex-col items-center px-3">
        <div className="z-40 w-screen flex overflow-hidden whitespace-nowrap relative xl:h-16 lg:h-12 md:h-10 sm:h-8 h-6 -mt-6 backdrop-blur-sm bg-white/20 xl:-mt-16 lg:-mt-12 md:-mt-10 sm:-mt-8">
          <div className="flex animate-marquee  items-center xl:gap-20 lg:gap-16 md:gap-12 sm:gap-10">
            {sliderData.map((item, index) => (
              <div
                key={index}
                className="flex items-center xl:gap-20 lg:gap-16 md:gap-12 sm:gap-10"
              >
                <span className="bg-[#DCDC28] rounded-full phone:w-2 phone:h-2 w-4 h-4 mr-2"></span>
                <span className="px-20 phone:px-10 sm:text-textXxs md:text-textMd lg:text-textMd xl:text-textXl text-textXxs mr-2 text-white">
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
                <span className="bg-[#DCDC28] rounded-full phone:w-2 phone:h-2 w-4 h-4 mr-2"></span>
                <span className="px-20 phone:px-10 sm:text-textXxs md:text-textMd lg:text-textMd xl:text-textXl text-textXxs mr-2 text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/*  <div className="flex items-center justify-center px-1 py-10  max-w-[1326px] h-max-content">
          <div className="flex flex-col  md:flex-row items-start justify-between w-full">
            <div className="phone:w-full sm:w-1/3 lg:w-2/3 md:w-2/3  phone:space-y-4 xl:space-y-16 lg:space-y-8 md:space-y-4">
              <h1 className="md:text-xl sm:text-sm phone:text-[16px] phone:font-bold lg:text-3xl xl:text-5xl sm:text-md text-black  md:font-bold lg:font-bold">
                For us, design is more than just making things look good.
              </h1>
              <p className="md:text-md lg:text-xl xl:text-2xl sm:text-sm phone:text-[12px] text-gray-700 lg:w-3/4 sm:w-full">
                It’s our way of making real, positive change in the world. We
                want to create products that not only serve a purpose but also
                bring a sense of happiness and possibility to everyday life.
              </p>
              <div className="flex items-center">
                <div className="flex flex-col justify-between phone:w-3/4">
                  <ul className="lg:space-y-5 md:space-y-4 phone:space-y-4">
                    <li className="flex items-center md:text-sm phone:text-[8px] lg:text-xl sm:text-sm gap-5 phone:gap-3">
                      <span className="inline-block w-3 h-3 phone:w-2  phone:h-2 rounded-full bg-[#DCDC28] mr-2"></span>
                      Industrial Design
                    </li>
                    <li className="flex items-center md:text-sm phone:text-[8px] lg:text-xl sm:text-sm gap-5 phone:gap-3">
                      <span className="inline-block w-3 h-3 phone:w-2  phone:h-2 rounded-full bg-[#DCDC28] mr-2"></span>
                      Product Design
                    </li>
                    <li className="flex items-center md:text-sm phone:text-[8px] lg:text-xl sm:text-sm gap-5 phone:gap-3">
                      <span className="inline-block w-3 h-3 phone:w-2  phone:h-2 rounded-full bg-[#DCDC28] mr-2"></span>
                      UX/UI Design
                    </li>
                    <li className="flex items-center md:text-sm phone:text-[8px] lg:text-xl sm:text-sm gap-5 phone:gap-3">
                      <span className="inline-block w-3 h-3 phone:w-2  phone:h-2 rounded-full bg-[#DCDC28] mr-2"></span>
                      Design for Manufacturing
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:-ml-[400px] md:-ml-[150px] h-full md:hidden">
                  <Image
                    src={motor}
                    alt="Design Image"
                    className="w-full h-full"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:-ml-[400px] md:-ml-[150px] h-full phone:hidden">
              <Image
                src={motor}
                alt="Design Image"
                className="w-full h-full"
                objectFit="cover"
              />
            </div>
          </div>
        </div> */}

        <div className="flex relative items-center justify-end px-1 py-10  max-w-[1326px] h-max-content">
          <div className="flex flex-col md:flex-row items-start justify-between w-full">
            <div className="phone:w-7/12 w-full  phone:space-y-4 xl:space-y-12 lg:space-y-8 md:space-y-4">
              <h1 className="md:text-xl sm:text-sm phone:text-[12px] phone:font-bold w-full md:w-7/12 pr-4 lg:text-3xl xl:text-4xl sm:text-md text-black  md:font-bold lg:font-bold">
                For us, design is more than just making things look good.
              </h1>
              <p className="md:text-md lg:text-xl xl:text-2xl phone:w-2/3 md:w-5/12 lg:w-5/12 sm:text-sm phone:text-[8px] text-gray-700 lg:w-3/4 pr-4">
                It’s our way of making real, positive change in the world. We
                want to create products that not only serve a purpose but also
                bring a sense of happiness and possibility to everyday life.
              </p>
              <div className="flex items-center w-2/3">
                <div className="flex flex-col justify-between phone:w-full">
                  <ul className="lg:space-y-5 md:space-y-4 phone:space-y-1">
                    <li className="flex items-center md:text-sm phone:text-[6px] lg:text-xl sm:text-sm gap-5 phone:gap-3">
                      <span className="inline-block w-3 h-3 phone:w-2  phone:h-2 rounded-full bg-[#DCDC28]"></span>
                      Industrial Design
                    </li>
                    <li className="flex items-center md:text-sm phone:text-[6px] lg:text-xl sm:text-sm gap-5 phone:gap-3">
                      <span className="inline-block w-3 h-3 phone:w-2  phone:h-2 rounded-full bg-[#DCDC28]"></span>
                      Product Design
                    </li>
                    <li className="flex items-center md:text-sm phone:text-[6px] lg:text-xl sm:text-sm gap-5 phone:gap-3">
                      <span className="inline-block w-3 h-3 phone:w-2  phone:h-2 rounded-full bg-[#DCDC28]"></span>
                      UX/UI Design
                    </li>
                    <li className="flex items-center md:text-sm phone:text-[6px] lg:text-xl sm:text-sm gap-5 phone:gap-3">
                      <span className="inline-block w-3 h-3 phone:w-2  phone:h-2 rounded-full bg-[#DCDC28]"></span>
                      Design for Manufacturing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end absolute w-3/4 phone:w-4/5 h-full py-10">
            <Image
              src={motor}
              alt="Design Image"
              className="w-full h-full"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="w-screen h-full flex flex-col items-center justify-center">
          <div className="w-full bg-[#DCDC28] relative py-10 flex flex-col items-center justify-center max-w-[1326px]">
            <div className="text-center lg:px-40">
              <h2 className="phone:text-2xl text-4xl font-bold">Our Work</h2>
              <p className="mt-4 phone:text-textXs lg:text-lg phone:text-sm px-14">
                Every product we design has its own unique impact on its users.
                We strive to evoke emotions and create experiences that resonate
                on a personal level.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 ">
              <div className="rounded-full bottom-0 right-0 shadow-md flex items-center justify-center">
                <Image src={clearLogo} alt="logo" className="w-16 h-16" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 xl:max-w-[1326px] w-full  sm:px-4 md:px-4 lg:px-4 xl:px-0 gap-4 p-4 transform origin-top-center transition-transform duration-500 ease-in-out">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative cursor-pointer transition-all duration-500 ease-in-out h-80 phone:h-[180px] sm:h-[250px] lg:h-[320px] ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? `blur-sm`
                    : ""
                } ${image.colSpan} ${image.rowSpan} `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link href={image.href} passHref className="xsm:h-[100px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    className="transition-all duration-500 ease-in-out"
                  />
                </Link>
                {hoveredIndex === index && (
                  <div
                    className={`absolute bottom-0 flex items-end justify-center ${image.bg} w-full h-20 transition-all duration-800 ease-in-out`}
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

        <div className="flex flex-col items-center justify-center w-screen h-max-content my-10 gap-4">
          <div className="lg:text-4xl phone:text-xl font-medium">
            Recognitions
          </div>
          <div className="z-40 w-screen flex overflow-hidden whitespace-nowrap relative mt-4 xl:h-24 lg:h-20 md:h-16 sm:h-10 phone:h-8 backdrop-blur-sm bg-white/20">
            <div className="flex animate-marquee  items-center">
              {sliderImages.map((item, index) => (
                <div
                  key={index}
                  className="flex w-max h-full items-center gap-10 mr-10 xl:gap-20 xl:mr-20"
                >
                  <span className="bg-[#DCDC28] rounded-full w-4 h-4 phone:w-2 phone:h-2 z-40" />
                  <Image className="w-max h-full" src={item.src} alt="images" />
                </div>
              ))}
            </div>
            <div className="flex animate-marquee  items-center">
              {sliderImages.map((item, index) => (
                <div
                  key={index}
                  className="flex w-max h-full items-center gap-10 mr-10 xl:gap-20 xl:mr-20"
                >
                  <span className="bg-[#DCDC28] rounded-full w-4 h-4 phone:w-2 phone:h-2 z-40" />
                  <Image className="w-max h-full" src={item.src} alt="images" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <ScrollImages />

        <div className="w-full h-full z-40 flex flex-wrap items-center justify-between space-x-8 max-w-[1326px] ">
          <div className="relative xxmd:w-2/4 overflow-hidden">
            <h2 className="text-center text-4xl font-bold xxmd:hidden mt-12">
              Our Impact
            </h2>
            <Carousel className="h-full" {...settings}>
              {sliderCardData.map((item, index) => (
                <SliderCard
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  color={item.color}
                  designerName={item.designerName}
                  projectName={item.projectName}
                  cardTitle={item.cardTitle}
                />
              ))}
            </Carousel>
          </div>

          <div className="w-1/4 flex flex-col items-end justify-end phone:block text-end phone:hidden md:hidden xxmd:block lg:block">
            <h2 className="text-4xl font-bold">Our Impact</h2>
            <p className="mt-4 text-gray-500 text-end">
              Our design fosters collaboration, resonates with users, and
              attracts investors. Our award-winning process enhances user
              experience and delivers strong returns, helping our partners
              thrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
