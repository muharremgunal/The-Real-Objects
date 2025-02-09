"use client";

import React from "react";
import { projects, Project } from "@/app/data/projectsData";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { sliderImages } from "@/app/data/homeData";
import Comingsoon from "../../../public/assets/images/comingSoon.png";
import funnyLogo from "../../../public/assets/images/funnyLogo.png";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentProject = projects.find((p) => p.id === parseInt(params.id));
    if (currentProject) {
      setProject(currentProject);
    }
    setIsLoading(false);
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#DCDC28]"></div>
      </div>
    );
  }

  if (!project) {
    return notFound();
  }

  return (
    <>
      {project.images.details.length !== 0 ? (
        <div className="w-full bg-white">
          <div className="relative w-full h-[100vh] phone:h-[60vh]">
            <Image
              src={project.images.details[0]}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-6xl phone:base md:text-7xl font-light text-white">
                {project.title}
              </h1>
            </div>
          </div>

          <div className="w-full max-w-xl mx-auto text-center py-16">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="text-gray-600 mb-1">{project.subtitle}</p>
            <p className="text-gray-500 mb-8">{project.details.year}</p>
            <p className="text-xl font-normal">{project.images.gallery[0]}</p>
          </div>

          <div className="w-full xl:px-32 px-4">
            <div className="relative w-full h-[100vh] phone:h-[50vh]">
              <Image
                src={project.images.details[1]}
                alt={`${project.title} main view`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center my-20 max-w-5xl mx-auto phone:my-10 xl:text-xl text-md phone:text-sm phone:px-4">
            {project.images.gallery[1]}
          </div>

          <div className="w-full xl:px-32 px-4">
            <div className="relative w-full h-[100vh] phone:h-[50vh]">
              <Image
                src={project.images.details[2]}
                alt={`${project.title} main view`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center my-20 max-w-5xl mx-auto phone:my-5"></div>

          <div className="w-full xl:px-32 px-4 mb-10">
            <div className="grid xl:grid-cols-2 gap-8 phone:grid-cols-1 sm:grid-cols-1">
              <div className="relative h-[50vh] phone:h-[50vh]">
                <Image
                  src={project.images.details[3]}
                  alt={`${project.title} detail part 1`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[50vh] phone:h-[50vh]">
                <Image
                  src={project.images.details[4]}
                  alt={`${project.title} detail part 2`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full xl:px-32 px-4 mb-10">
            <div className="relative w-full xl:h-[100vh] phone:h-[50vh] md:h-[50vh] sm:h-[50vh]">
              <Image
                src={project.images.details[5]}
                alt={`${project.title} close-up`}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center my-20 max-w-5xl mx-auto phone:my-5">
              <p className="text-center font-semibold mb-4 text-2xl">
                {project.images.gallery[2]}
              </p>
              <p className="text-xl phone:text-sm phone:px-4">
                {project.images.gallery[3]}
              </p>
            </div>
          </div>
          <div className="w-full xl:px-32 px-4 mb-10">
            <div className="relative w-full xl:h-[100vh] phone:h-[50vh] md:h-[50vh] sm:h-[50vh]">
              <Image
                src={project.images.details[6]}
                alt={`${project.title} close-up`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full xl:px-32 px-4">
            <div className="grid xl:grid-cols-2 gap-8 phone:grid-cols-1 sm:grid-cols-1">
              <div className="relative h-[50vh] phone:h-[35vh]">
                <Image
                  src={project.images.details[7]}
                  alt={`${project.title} detail part 1`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[50vh] phone:h-[35vh]">
                <Image
                  src={project.images.details[8]}
                  alt={`${project.title} detail part 2`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="text-center my-20 max-w-5xl mx-auto phone:my-10">
            <p className="text-xl phone:text-sm phone:px-4">
              {project.images.gallery[4]}
            </p>
          </div>

          <div className="w-full xl:px-32 px-4 mb-10">
            <div className="grid xl:grid-cols-4 gap-4 phone:grid-cols-1 md:grid-cols-2 sm:grid-cols-2">
              {[9, 10, 11, 12].map((index) => (
                <div key={index} className="relative h-[35vh] phone:h-[25vh]">
                  <Image
                    src={project.images.details[index]}
                    alt={`${project.title} interface ${index - 6}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="text-center my-20 max-w-5xl mx-auto phone:my-10">
            <p className="text-xl phone:text-sm phone:px-4">
              {project.images.gallery[5]}
            </p>
          </div>

          <div className="w-full xl:px-32 px-4 mb-20">
            <div className="grid xl:grid-cols-2 gap-4 phone:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
              {[13, 14, 15, 16].map((index) => (
                <div key={index} className="relative h-[50vh] phone:h-[25vh]">
                  <Image
                    src={project.images.details[index]}
                    alt={`${project.title} color ${index - 10}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center my-20 max-w-5xl mx-auto phone:my-5">
            <p className="text-xl phone:text-sm phone:px-4">
              <p className="font-semibold text-2xl mb-4">
                Thanks for watching!
              </p>
              <br />
              <p className="font-semibold text-2xl mb-4">
                {project.images.gallery[6]}
              </p>
            </p>
            {project.link.length > 0 ? (
              <p className="text-xl phone:text-sm phone:px-4">
                <Link
                  target="_blank"
                  className="font-semibold text-2xl text-blue-500"
                  href={project.link[0]?.href1 || ""}
                >
                  {project.link[0]?.name1}
                </Link>
                <br />
                <Link
                  target="_blank"
                  className="font-semibold text-2xl text-blue-500"
                  href={project.link[1]?.href2 || ""}
                >
                  {project.link[1]?.name2}
                </Link>

                <br />
                <Link
                  target="_blank"
                  className="font-semibold text-2xl text-blue-500"
                  href={project.link[2]?.href3 || ""}
                >
                  {project.link[2]?.name3}
                </Link>
                <br />
                <Link
                  target="_blank"
                  className="font-semibold text-2xl text-blue-500"
                  href={project.link[3]?.href4 || ""}
                >
                  {project.link[3]?.name4}
                </Link>
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="w-full xl:px-32 px-4 py-10 border-t">
            <div className="flex justify-between items-center">
              {parseInt(params.id) > 1 && (
                <Link
                  href={`/projects/${parseInt(params.id) - 1}`}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  ← Previous Project
                </Link>
              )}
              {parseInt(params.id) < projects.length && (
                <Link
                  href={`/projects/${parseInt(params.id) + 1}`}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Next Project →
                </Link>
              )}
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
            <p className="text-center text-black font-custom">
              Let's create intuitive and meaningful experiences together.
            </p>
            <p className="text-[#DCDC28] px-2 py-1 mt-2 font-custom font-bold">
              hello@therealobjects.com
            </p>
            <p className="text-center mt-2 text-black font-custom">
              Stay The Real!
            </p>
          </div>
        </div>
      ) : (
        <div
          className="min-h-screen w-screen flex items-center justify-center bg-cover bg-center -mb-32"
          style={{ backgroundImage: `url(${Comingsoon.src})` }}
        >
          <div className="bg-opacity-90 text-white px-8 py-4 text-center w-5/6">
            <div className="bg-black w-full h-12 mb-1"></div>
            <p className="text-lg md:text-2xl px-20 py-2 phone:px-8 font-light bg-black mb-1">
              {" "}
              "Just adding some final sprinkles... hang tight, we're almost
              ready to launch!"
            </p>
            <p className="text-right pr-3 text-sm md:text-lg bg-black py-2 mb-1">
              The Real Object's Team
            </p>
            <div className="relative bg-black w-full h-12 mb-1">
              <div className="absolute bottom-0 right-0">
                <Image
                  className="w-12 h-12"
                  src={funnyLogo}
                  alt="Footer Image"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
