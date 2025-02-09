"use client";
import Image from "next/image";
import graphicAbout from "../../public/assets/images/graphicAbout.png";
import designerWorkOffice from "../../public/assets/images/designer-work-office.png";
import { TypeAnimation } from "react-type-animation";
import Marquee from "react-fast-marquee";
import {
  aboutSliderDat2,
  aboutSliderData,
  sliderImages,
} from "../data/homeData";

const AboutPage = () => {
  return (
    <div className="w-screen h-auto">
      <div className="w-full bg-white">
        <div className="relative w-full h-[80vh] bg-gray-100">
          <Image
            src={graphicAbout}
            alt="title"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl phone:text-base md:text-4xl font-light md:mx-20 xl:w-1/2 text-white text-center font-sans font-semibold">
              <span className="text-gray-500 font-sans mr-2 bg-white font-bold">
                "
              </span>
              Each product we design makes a unique impact on users, aiming to
              create personal, emotional experiences.
              <span className="text-gray-500 font-sans font-bold bg-white ml-2">
                "
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="w-screen flex flex-col items-center justify-center my-16">
        <div className="bg-[#DCDC28] px-20 phone:px-2 font-semibold mb-5 text-xl">
          Our Approach
        </div>
        <div className="xl:w-2/4 w-full phone:px-4 md:px-4 md:text-2xl phone:text-sm font-normal flex items-center justify-center px-20 text-center">
          We believe design can shape a better future. Every collaboration
          focuses on creativity, inclusivity, and sustainability, forming
          meaningful partnerships that create lasting impact. Our team pushes
          boundaries, crafting functional and emotionally engaging designs that
          adapt to a changing world. Our mission is to improve life through
          design—bringing joy, inspiration, and freedom to everyday experiences.
          With purposeful, strategic design, we aim to contribute to a brighter,
          more inclusive future.
        </div>
      </div>
      <div className="w-screen h-48">
        <Image
          src={designerWorkOffice}
          alt="logo"
          objectFit="contain"
          className="h-48"
        />
      </div>
      <div className="w-screen flex flex-col items-center justify-center my-16">
        <div className="bg-[#DCDC28] px-20 font-semibold mb-5 text-xl">
          The Studio
        </div>
        <div className="xl:w-2/4 w-full phone:px-4 md:px-4 md:text-2xl phone:text-sm font-normal flex items-center justify-center mx-20 text-center">
          The Real Objects is a multidisciplinary design studio founded in 2024
          by two industrial designers in Milan. We help push the boundaries of
          product innovation, applying user-centered strategies in every project
          to create experiences that foster emotional connections.
        </div>
      </div>
      <Marquee gradient={false} speed={30}>
        {aboutSliderData.map((item, index) => (
          <div
            key={index}
            className="flex w-max h-full items-center gap-2 mr-2 mt-4 xl:gap-2 xl:mr-2 xl:h-40 lg:h-36 md:h-32 sm:h-18 phone:h-32"
          >
            <Image className="w-max h-full" src={item.src} alt="images" />
          </div>
        ))}
      </Marquee>
      <Marquee gradient={false} speed={30} direction="right">
        {aboutSliderDat2.map((item, index) => (
          <div
            key={index}
            className="flex w-max h-full items-center gap-2 mr-2 mt-4 xl:gap-2 xl:mr-2 xl:h-40 lg:h-36 md:h-32 sm:h-18 phone:h-32"
          >
            <Image className="w-max h-full" src={item.src} alt="images" />
          </div>
        ))}
      </Marquee>
      <div className="w-screen flex flex-col items-center justify-center my-16">
        <div className="bg-[#DCDC28] px-20 font-semibold mb-5 text-xl">
          Our Journey
        </div>
        <div className="xl:w-2/4 w-full phone:px-4 md:px-4 md:text-2xl phone:text-sm font-normal flex items-center justify-center mx-20 text-center">
          The Real Objects was founded by Pınar Aydoğdu and Can Erdinçmer with
          the vision of creating meaningful designs that adapt to a constantly
          changing world. Over the years, they have made a name for themselves
          with their experience and prestigious awards such as the IDA Silver
          Award 2023, Good Design Award 2023, European Design Award 2023, Plus X
          Award 2022, and the 13th Design for Export. This design studio
          continues its journey by creating products that empower users,
          offering not only functionality but also freedom and joy.
        </div>
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
      <div className="flex flex-col items-center justify-center text-white my-20 text-xl">
        <p className="text-center text-black font-custom text-3xl">
          Let's create intuitive and meaningful experiences together.
        </p>
        <p className="text-[#DCDC28] text-2xl px-2 py-1 mt-2 font-custom font-bold">
          hello@therealobjects.com
        </p>
        <p className="text-center text-3xl font-normal mt-2 text-black font-custom">
          Stay The Real!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
