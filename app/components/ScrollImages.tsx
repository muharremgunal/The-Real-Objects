import Image from "next/image";
import React, { useState } from "react";
import woolly from "../../public/assets/images/woolly.png";
import brick from "../../public/assets/images/brick.png";
import brick2 from "../../public/assets/images/brick2.png";
import Olive from "../../public/assets/images/t-olive.png";
import coffe2 from "../../public/assets/images/coffe2.png";
import { Scrollama, Step } from "react-scrollama";

const ScrollImages = () => {
  const scrollImages = [
    {
      src: brick,
      alt: "Brick",
      text: "Design Brick",
      hiddenText: "desktop mobile area",
    },
    {
      src: woolly,
      alt: "Woolly",
      text: "Woolly Design",
      hiddenText: "wolly coffe machine",
    },
    {
      src: brick2,
      alt: "Image One",
      text: "Creative One",
      hiddenText: "desktop mobile area",
    },
    {
      src: Olive,
      alt: "Olive",
      text: "Olive Product",
      hiddenText: "desktop mobile area",
    },
    {
      src: coffe2,
      alt: "Olive",
      text: "Coffe Product",
      hiddenText: "desktop mobile area",
    },
  ];

  const [currentStepIndex, setCurrentStepIndex] = useState<number | null>(0);

  const onStepEnter = ({ data }: any) => {
    setCurrentStepIndex(data);
  };

  return (
    <div className="relative h-[300vh] w-screen">
      <div className="sticky top-16 w-full h-screen">
        {scrollImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            objectFit="cover"
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ease-in ${
              currentStepIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="h-[300vh] overflow-hidden absolute top-24 w-full z-40">
        <div className="lg:text-6xl xxxsm:text-4xl w-full h-[500px] font-bold flex items-center mt-[200px] justify-center text-white left-40">
          Our Expertise
        </div>
        <Scrollama offset={0.6} onStepEnter={onStepEnter}>
          {scrollImages.map((image, index) => (
            <Step data={index} key={index}>
              <div className="h-[300px] flex items-start text-start justify-start left-40 lg:ml-40 xxxsm:ml-10">
                <div
                  className={`text-4xl text-white font-bold lg:w-1/2 xxxsm:w-full ${
                    currentStepIndex === index ? "opacity-100" : "opacity-60"
                  } inline`}
                >
                  <span className="whitespace-normal">
                    {image.text.split(" ")?.map((word, i) => (
                      <span
                        key={i}
                        className={`${
                          currentStepIndex === index
                            ? "opacity-100"
                            : "opacity-30"
                        }`}
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </span>
                  {currentStepIndex === index ? (
                    <div className="text-4xl font-normal opacity-60 inline">
                      {image.hiddenText}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </Step>
          ))}
          {scrollImages.length - 1 && (
            <div className="absolute text-6xl w-full bg-white h-[300px] mt-[100px] flex items-center justify-center text-white"></div>
          )}
        </Scrollama>
      </div>
    </div>
  );
};

export default ScrollImages;
