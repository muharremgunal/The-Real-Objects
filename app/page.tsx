"use client";

import Image from "next/image";
import React, { useState } from "react";
import clearLogo from "../public/assets/images/clearLogo.png";
import motor from "../public/assets/images/motor.png";
import {
  hoverImages,
  sliderCardData,
  sliderData,
  sliderImages,
} from "./data/homeData";
import Link from "next/link";
import ScrollImages from "./components/ScrollImages";
import { Carousel } from "antd";
import SliderCard from "./components/sliderCard";
import MouseFollower from "./components/mouseMove";

const Index = () => {
  const [hoveredIndex, setHoveredIndex] = useState<any>(null);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    pauseOnHover: true,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "80px",
  };

  return (
    <div className="w-screen h-auto">
      <video
        className="w-screen xl:h-screen object-cover phone:h-[400px] sm:h-[600px] md:h-[600px]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/images/video/video.mp4" type="video/mp4" />
      </video>
      <MouseFollower />
      <div className="z-0 w-full h-full flex flex-col items-center px-3">
        <div className="z-40 w-screen flex overflow-hidden whitespace-nowrap gap-10 relative xl:h-16 lg:h-12 md:h-10 sm:h-8 h-6 -mt-6 backdrop-blur-sm bg-white/20 xl:-mt-16 lg:-mt-12 md:-mt-10 sm:-mt-8">
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

        <div className="flex items-center justify-center px-1 py-10  max-w-[1326px] md:px-5">
          <div
            className="flex items-center justify-center bg-cover bg-center w-screen h-[80vh] backdrop-blur-sm bg-white/50"
            style={{ backgroundImage: `url(${motor.src})` }}
          >
            <div className="flex flex-col items-center justify-center w-full h-full">
              <div className="flex flex-col items-start justify-center font-bold w-full h-full  phone:space-y-4 xl:space-y-12 lg:space-y-8 md:space-y-4">
                <div className="flex items-start">
                  <span className="inline-block w-3 h-3 phone:w-2  phone:h-2 rounded-full bg-[#DCDC28] mt-3 mr-4"></span>
                  <h1 className="w-full text-black  md:font-bold lg:font-bold text-4xl phone:text-xl">
                    For us, design is more than <br className="phone:hidden" />
                    just making things look good.
                  </h1>
                </div>
                <p className="text-gray-700 pr-4 text-xl phone:text-sm font-thin ml-7">
                  It’s our way of making real, positive change in the world.{" "}
                  <br className="phone:hidden" /> We want to create products
                  that not only serve a purpose <br className="phone:hidden" />{" "}
                  but also bring a sense of happiness and possibility to
                  everyday life.
                </p>
                <div className="flex items-center">
                  <div className="flex flex-col justify-between phone:w-full mt-16">
                    <ul className="lg:space-y-5 md:space-y-4 phone:space-y-1">
                      <li className="flex items-center gap-5 phone:gap-3 text-2xl phone:text-xl">
                        <span className="inline-block w-3 h-3 phone:w-2  phone:h-2 rounded-full bg-[#DCDC28]"></span>
                        Industrial Design
                      </li>
                      <li className="flex items-center gap-5 phone:gap-3 text-2xl phone:text-xl">
                        <span className="inline-block w-3 h-3 phone:w-2  phone:h-2 rounded-full bg-[#DCDC28]"></span>
                        Product Design
                      </li>
                      <li className="flex items-center gap-5 phone:gap-3 text-2xl phone:text-xl">
                        <span className="inline-block w-3 h-3 phone:w-2  phone:h-2 rounded-full bg-[#DCDC28]"></span>
                        UX/UI Design
                      </li>
                      <li className="flex items-center gap-5 phone:gap-3 text-2xl phone:text-xl">
                        <span className="inline-block w-3 h-3 phone:w-2  phone:h-2 rounded-full bg-[#DCDC28]"></span>
                        Design for Manufacturing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
            {hoverImages.map((image, index) => (
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
                    objectFit="cover"
                    className="transition-all duration-500 ease-in-out bg-auto"
                  />
                </Link>

                <div
                  className={`absolute bottom-0 flex items-end justify-center ${image.bg} w-full h-16 transition-all duration-800 ease-in-out`}
                >
                  <span className="w-full h-full flex items-start justify-start font-bold text-black">
                    {image.text}
                  </span>
                </div>

                {hoveredIndex === index && (
                  <div
                    className={`absolute bottom-0 flex items-end justify-center ${image.bgHover} w-full h-16 transition-all duration-800 ease-in-out`}
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

        <div className="w-full h-full z-40 flex flex-wrap items-center justify-between space-x-4 max-w-[1326px] ">
          <div className="relative xxmd:w-2/4 overflow-hidden">
            <div className="flex items-center justify-center mt-12 w-full">
              <h4 className="text-center text-3xl font-semibold xxmd:hidden bg-[#DCDC28] px-14">
                Our Impact
              </h4>
            </div>
            <Carousel className="carousel-card h-full" {...settings}>
              {sliderCardData.map((item, index) => (
                <SliderCard
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  color={item.color}
                  designerName={item.designerName}
                  projectName={item.projectDescription}
                  cardIcon={item.cardIcon}
                  projectLink={item.projectLink}
                />
              ))}
            </Carousel>
          </div>

          <div className="w-1/4 flex flex-col items-end justify-end phone:block text-end phone:hidden md:hidden xxmd:block lg:block">
            <div className="flex items-end justify-end mt-12 w-full">
              <h4 className="text-center text-2xl font-semibold bg-[#DCDC28] pl-24">
                Our Impact
              </h4>
            </div>
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
