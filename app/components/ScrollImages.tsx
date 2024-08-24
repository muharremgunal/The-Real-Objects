import Image from "next/image";
import React, { useState } from "react";
import woolly from "../../public/assets/images/woolly.png";
import brick from "../../public/assets/images/brick.png";
import Olive from "../../public/assets/images/t-olive.png";
import one from "../../public/assets/images/1.png";
import coffe from "../../public/assets/images/caffe.jpeg";
import { Scrollama, Step } from "react-scrollama";

const ScrollImages = () => {
  const scrollImages = [
    { src: brick, alt: "Brick", text: "Design Brick" },
    { src: woolly, alt: "Woolly", text: "Woolly Design" },
    { src: one, alt: "Image One", text: "Creative One" },
    { src: coffe, alt: "Coffee", text: "Coffee Art" },
    { src: Olive, alt: "Olive", text: "Olive Product" },
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
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              currentStepIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="h-[300vh] overflow-hidden absolute top-24 w-full z-40">
        <div className="text-6xl w-full h-[200px] flex items-start justify-start text-white left-40"></div>
        <Scrollama offset={0.5} onStepEnter={onStepEnter}>
          {scrollImages.map((image, index) => (
            <Step data={index} key={index}>
              <div className="h-[400px] flex items-start text-start justify-start left-40 ml-40">
                <p
                  className={`text-4xl text-white font-bold  ${
                    currentStepIndex === index ? "opacity-100" : "opacity-20"
                  }`}
                >
                  {image.text}
                </p>
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>
    </div>
  );
};

export default ScrollImages;
