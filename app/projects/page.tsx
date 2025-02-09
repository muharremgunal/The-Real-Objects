"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { hoverImages } from "../data/homeData";
import Image1 from "../../public/assets/images/ourWork/1.png";
import { MdOutlineCancel } from "react-icons/md";

export default function ProjectsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="w-full min-h-screen bg-white flex flex-col items-center">
      <div className="w-full bg-white">
        <div className="relative w-full h-[80vh] bg-gray-100">
          <Image
            src={Image1}
            alt="title"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl phone:text-base md:text-4xl font-light text-white text-center font-sans font-semibold">
              <span className="text-gray-500 font-sans mr-2 bg-white font-bold">
                "
              </span>
              Where Functionality Meets Joy.
              <span className="text-gray-500 font-sans font-bold bg-white ml-2">
                "
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="w-screen h-full flex flex-col items-center justify-center">
        <div className="w-screen flex flex-col items-center justify-center mt-16">
          <div className="bg-[#DCDC28] px-20 font-semibold text-xl">
            Designs
          </div>
        </div>
        <div className="w-full min-h-screen flex flex-col items-center">
          <div className="w-full max-w-md mx-auto my-8 px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="SEARCH"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border-2 rounded-3xl border-gray-400 focus:outline-none focus:border-gray-800 text-start"
              />

              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <MdOutlineCancel />
              </button>
            </div>
          </div>

          <div className="w-full xl:max-w-[1326px] px-4 mb-8">
            {searchTerm ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {hoverImages
                  .map((image, idx) => ({ ...image, originalIndex: idx }))
                  .filter((image) =>
                    (
                      (image.text as any).props.children[0].props.children +
                      (image.text as any).props.children[1].props.children
                    )
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  )
                  .map((image) => (
                    <div
                      key={image.originalIndex}
                      className={`relative cursor-pointer transition-all duration-500 ease-in-out 
                      w-full h-80 phone:h-[180px] sm:h-[250px] lg:h-[320px]
                      col-span-1
                      ${image.colSpan} ${image.rowSpan}`}
                      style={{ position: "relative" }}
                      onMouseEnter={() => setHoveredIndex(image.originalIndex)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Link
                        href={`/projects/${image.originalIndex + 1}`}
                        className="block w-full h-full"
                      >
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
                        <span className="w-full h-full flex items-center justify-start font-bold text-black">
                          {image.text}
                        </span>
                      </div>

                      {hoveredIndex === image.originalIndex && (
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
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-4">
                {hoverImages.map((image, index) => (
                  <div
                    key={index}
                    className={`relative cursor-pointer transition-all duration-500 ease-in-out 
                    h-80 phone:h-[180px] sm:h-[250px] lg:h-[320px]
                    ${
                      hoveredIndex !== null && hoveredIndex !== index
                        ? "blur-sm"
                        : "opacity-100"
                    }
                    ${image.colSpan} ${image.rowSpan}`}
                    style={{ position: "relative" }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Link
                      href={`/projects/${index + 1}`}
                      className="xsm:h-[100px]"
                    >
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
                      <span className="w-full h-full flex items-center justify-start font-bold text-black">
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
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-white text-xl">
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
    </main>
  );
}
