"use client";
import Image from "next/image";
import Link from "next/link";
import graphicAbout from "../../public/assets/images/graphicAbout.png";
import designerWorkOffice from "../../public/assets/images/designer-work-office.png";
import {
  aboutSliderData,
  sliderImages,
} from "../data/homeData";

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={graphicAbout}
            alt="About The Real Objects"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <blockquote className="text-2xl md:text-4xl lg:text-5xl font-light text-white max-w-4xl mx-auto leading-tight">
            "Each product we design makes a unique impact on users, aiming to create personal, emotional experiences."
          </blockquote>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
            Our Approach
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We believe design can shape a better future. Every collaboration focuses on creativity, 
            inclusivity, and sustainability, forming meaningful partnerships that create lasting impact. 
            Our team pushes boundaries, crafting functional and emotionally engaging designs that 
            adapt to a changing world.
          </p>
        </div>
      </section>

      {/* Designer Work Office Image */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src={designerWorkOffice}
              alt="Designer work office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* The Studio Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
            The Studio
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
            The Real Objects is a multidisciplinary design studio founded in 2024 by two industrial 
            designers in Milan. We help push the boundaries of product innovation, applying 
            user-centered strategies in every project to create experiences that foster emotional connections.
          </p>
        </div>

        {/* Studio Images Grid */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {aboutSliderData.slice(0, 12).map((item, index) => (
              <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                <Image 
                  src={item.src} 
                  alt={`Studio ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
            Our Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            The Real Objects was founded by Pınar Aydoğdu and Can Erdinçmer with the vision of 
            creating meaningful designs that adapt to a constantly changing world.
          </p>
          
          {/* Awards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Awards & Recognition</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• IDA Silver Award 2023</li>
                <li>• Good Design Award 2023</li>
                <li>• European Design Award 2023</li>
                <li>• Plus X Award 2022</li>
                <li>• 13th Design for Export</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-left">
                To create products that empower users, offering not only functionality 
                but also freedom and joy in everyday experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Logos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-center text-xl font-medium text-gray-900 mb-12">Featured In</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {sliderImages.slice(0, 12).map((item, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={100}
                  height={40}
                  className="max-h-8 w-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Let's create intuitive and meaningful experiences together.
          </h2>
          <div className="space-y-4">
            <Link 
              href="mailto:hello@therealobjects.com"
              className="inline-block text-xl text-gray-700 hover:text-gray-900 transition-colors"
            >
              hello@therealobjects.com
            </Link>
            <p className="text-xl font-medium text-gray-900">
              Stay The Real!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
