"use client";

import Image from "next/image";
import React, { useState } from "react";
import clearLogo from "../public/assets/images/clearLogo.png";
import {
  hoverImages,
  sliderData,
  sliderImages,
} from "./data/homeData";
import Link from "next/link";
import ScrollImages from "./components/ScrollImages";
import MouseFollower from "./components/mouseMove";
import Marquee from "react-fast-marquee";

const Index = () => {
  const [hoveredIndex, setHoveredIndex] = useState<any>(null);

  return (
    <div className="w-screen h-auto">
      <video
        className="w-screen xl:h-screen object-cover phone:h-[400px] sm:h-[600px] md:h-[600px]"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      >
        <source src="/assets/images/video/video.mp4" type="video/mp4" />
      </video>
      <MouseFollower />
      <div className="z-0 w-full h-full flex flex-col items-center px-3">
        <div className="z-40 w-screen flex overflow-hidden whitespace-nowrap gap-10 relative xl:h-16 lg:h-12 md:h-10 sm:h-8 h-6 -mt-6 backdrop-blur-sm bg-white/20 xl:-mt-16 lg:-mt-12 md:-mt-10 sm:-mt-8">
          <Marquee gradient={false} speed={30}>
            {sliderData.map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="bg-[#DCDC28] rounded-full phone:w-2 phone:h-2 sm:w-3 sm:h-3 w-4 h-4 mr-2"></span>
                <span className="px-20 phone:px-10 sm:text-textXxs md:text-textMd lg:text-textMd xl:text-textXl text-textXxs mr-2 text-white">
                  {item}
                </span>
              </div>
            ))}
          </Marquee>
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
              <div className="bottom-0 right-0 flex items-center justify-center">
                <Image src={clearLogo} alt="logo" className="w-16 h-16" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:max-w-[1326px] w-full sm:px-4 md:px-4 lg:px-4 xl:px-0 gap-6 p-6">
            {hoverImages.map((image, index) => (
              <div
                key={index}
                className="relative cursor-pointer transition-all duration-500 ease-in-out h-80 phone:h-[200px] sm:h-[250px] lg:h-[320px] hover:scale-105"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link href={`/projects/${index + 1}`} className="relative block w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    style={{ objectFit: "cover" }}
                    className="transition-all duration-500 ease-in-out rounded-lg"
                    priority={index < 6}
                  />
                </Link>

                <div
                  className={`absolute bottom-0 flex items-end justify-center ${image.bg} w-full h-16 transition-all duration-800 ease-in-out rounded-b-lg`}
                >
                  <span className="w-full h-full flex items-center justify-start font-bold text-black px-4">
                    {image.text}
                  </span>
                </div>

                {hoveredIndex === index && (
                  <div
                    className={`absolute bottom-0 flex items-end justify-center ${image.bgHover} w-full h-16 transition-all duration-800 ease-in-out rounded-b-lg`}
                  >
                    <span className="w-full h-full flex items-start justify-start font-bold text-white px-4">
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
          <Marquee gradient={false} speed={30}>
            {sliderImages.map((item, index) => (
              <div
                key={index}
                className="flex w-max h-full items-center gap-10 mr-10 mt-4 xl:gap-20 xl:mr-20 xl:h-20 lg:h-26 md:h-16 sm:h-8 phone:h-10"
              >
                <span className="bg-[#DCDC28] rounded-full w-4 h-4 sm:w-3 sm:h-3 phone:w-2 phone:h-2 xl:w-5 xl:h-5 z-40" />
                <Image className="w-max h-full" src={item.src} alt="images" />
              </div>
            ))}
          </Marquee>
        </div>

        <ScrollImages />

      </div>
    </div>
  );
};

export default Index;