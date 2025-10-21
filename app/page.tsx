"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import clearLogo from "../public/assets/images/clearLogo.png";
import navLogo from "../public/assets/images/navLogo.png";
import ScrollImages from "./components/ScrollImages";
import Marquee from "react-fast-marquee";
import {
  hoverImages,
  sliderData,
  sliderImages,
} from "./data/homeData";

const Index = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section with Video */}
      <section className="relative h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        >
          <source src="/assets/images/video/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center space-y-8 px-4 text-white">
            <Image 
              src={navLogo} 
              alt="The Real Objects" 
              width={200} 
              height={80} 
              className="mx-auto mb-8 brightness-0 invert" 
              priority
            />
            <h1 className="text-4xl md:text-6xl font-light">
              Design Studio
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              We create products that truly matter, adapting to a world in constant change.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {sliderData.slice(0, 5).map((item, index) => (
                <span key={index} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Text Slider */}
      <div className="relative">
        <div className="bg-white/20 backdrop-blur-sm border-y border-gray-200">
          <Marquee gradient={false} speed={30}>
            {sliderData.map((item, index) => (
              <div key={index} className="flex items-center py-4">
                <span className="bg-gray-900 rounded-full w-2 h-2 mr-4"></span>
                <span className="px-8 text-gray-700 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Our Work Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Our Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every product we design has its own unique impact on its users. 
              We strive to evoke emotions and create experiences that resonate on a personal level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hoverImages.slice(0, 6).map((image, index) => (
              <Link
                key={index}
                href={`/projects/${index + 1}`}
                className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  {image.text}
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/projects" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Our Expertise Section with ScrollImages */}
      <ScrollImages />

      {/* Recognition Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Recognitions
            </h2>
            <p className="text-gray-600">
              Our work has been featured by leading design publications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {sliderImages.slice(0, 12).map((item, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={120}
                  height={40}
                  style={{ objectFit: "contain" }}
                  className="max-h-10 w-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Image 
            src={clearLogo} 
            alt="Logo" 
            width={80} 
            height={80} 
            className="mx-auto mb-8 opacity-80" 
          />
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Ready to bring your product vision to life?
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors font-medium"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;