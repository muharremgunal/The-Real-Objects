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
    <div className="flex flex-col justify-center p-4 items-center rounded-3xl h-full mt-10">
      <div className="relative w-full h-72 xl:h-80 lg:h-72 md:h-64 sm:h-40 phone:h-40">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div
        className={`flex flex-col w-full ${color} p-4 text-white text-left h-full rounded-b-3xl`}
      >
        <div className="text-lg">{cardTitle}</div>
        <div className="flex items-center justify-between text-sm mt-1 text-black">
          <div>{designerName}</div>
          <div>{projectName}</div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
