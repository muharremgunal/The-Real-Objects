import Image from "next/image";
import React from "react";

const SliderCard = ({
  src,
  alt,
  color,
  designerName,
  projectName,
  cardTitle,
}: any) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-3xl h-full mt-10">
      <div className="relative w-full h-72 xl:h-96 lg:h-80 md:h-72 sm:h-56 phone:h-48">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          className="object-fill rounded-t-lg"
        />
      </div>
      <div
        className={`flex flex-col w-full ${color} py-4 px-10 text-white text-left h-full rounded-b-3xl`}
      >
        <div className="flex flex-col justify-between text-sm mt-1 text-black">
          <div className="text-lg w-full block text-start">{cardTitle}</div>
          <div className="w-full text-center">{designerName}</div>
          <div className="w-full text-end">{projectName}</div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
