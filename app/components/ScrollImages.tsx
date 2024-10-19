import Image from "next/image";
import React, { useState } from "react";
import Image1 from "../../public/assets/images/ourServiceImages/1.png";
import Image2 from "../../public/assets/images/ourServiceImages/2.png";
import Image3 from "../../public/assets/images/ourServiceImages/3.png";
import Image4 from "../../public/assets/images/ourServiceImages/4.png";
import Image5 from "../../public/assets/images/ourServiceImages/5.png";
import Image6 from "../../public/assets/images/ourServiceImages/6.png";
import Image7 from "../../public/assets/images/ourServiceImages/7.png";
import Image8 from "../../public/assets/images/ourServiceImages/8.png";
import Image9 from "../../public/assets/images/ourServiceImages/9.png";
import Image10 from "../../public/assets/images/ourServiceImages/10.png";
import { Scrollama, Step } from "react-scrollama";

const ScrollImages = () => {
  const scrollImages = [
    {
      src: Image1,
      alt: "Brick",
      number: "01",
      text: "Industrial/Product Design",
      hiddenText:
        "Our industrial design adapts to a world in constant change, creating products that truly matter.",
    },
    {
      src: Image2,
      alt: "Woolly",
      number: "02",
      text: "Branding Design",
      hiddenText: "wolly coffe machine",
    },
    {
      src: Image3,
      alt: "Image One",
      number: "03",
      text: "Product Visualization",
      hiddenText: "desktop mobile area",
    },
    {
      src: Image4,
      alt: "Olive",
      number: "04",
      text: "Design consultancy",
      hiddenText: "desktop mobile area",
    },
    {
      src: Image5,
      alt: "3D Modeling",
      number: "05",
      text: "3D Modeling",
      hiddenText: "desktop mobile area",
    },
    {
      src: Image6,
      alt: "Prototyping",
      number: "06",
      text: "Prototyping",
      hiddenText: "desktop mobile area",
    },
    {
      src: Image7,
      alt: "Olive",
      number: "07",
      text: "Market Research",
      hiddenText: "desktop mobile area",
    },
    {
      src: Image8,
      alt: "Olive",
      number: "08",
      text: "Color, Material, Finish",
      hiddenText: "desktop mobile area",
    },
    {
      src: Image9,
      alt: "Olive",
      number: "09",
      text: "Design For Manufacturing",
      hiddenText: "desktop mobile area",
    },
    {
      src: Image10,
      alt: "Olive",
      number: "10",
      text: "UX/UI Design",
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
        <div className="lg:text-6xl phone:text-4xl lg:text-6xl md:text-6xl xxmd:text-6xl w-full h-[300px] font-bold flex items-center mt-[100px] justify-center text-white left-40">
          Our Expertise
        </div>
        <Scrollama offset={0.5} onStepEnter={onStepEnter}>
          {scrollImages.map((image, index) => (
            <Step data={index} key={index}>
              <span className="xxxxsm:h-[125px] xxxsm:h-[170px] xxxxxsm:h-[140px] xxsm:h-[180px] xsm:h-[190px] xxxmd:h-[220px] xxmd:h-[260px] xmd:h-[320px] web:h-[170px] flex items-start text-start justify-start left-40 web:ml-32 phone:ml-5 xxxmd:ml-5 xxmd:ml-5 xmd:ml-5">
                {currentStepIndex === index && (
                  <div className="sm:text-8xl lg:text-8xl xxmd:text-8xl md::text-8xl phone:text-5xl text-white mr-2 font-normal opacity-60 inline">
                    {image.number}
                  </div>
                )}
                <div
                  className={`flex flex-col text-start lg:text-4xl md:text-4xl air:text-4xl xxmd:text-4xl web:text-4xl phone:text-md text-white font-bold lg:w-1/2 xxxsm:w-1/2 gap-3 mt-2 phone:mt-0 ${
                    currentStepIndex === index ? "opacity-100" : "opacity-50"
                  } inline`}
                >
                  <span className="phone:w-[140px] web:w-[280px] h-[60px]">
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
                  {/* {currentStepIndex === index ? (
                    <div className="text-4xl phone:text-xl font-normal opacity-60 inline">
                      {image.hiddenText}
                    </div>
                  ) : (
                    ""
                  )} */}
                </div>
              </span>
            </Step>
          ))}
        </Scrollama>
      </div>
    </div>
  );
};

export default ScrollImages;
