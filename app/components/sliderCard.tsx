import Image from "next/image";
import Link from "next/link";
import React from "react";

const SliderCard = ({
  src,
  alt,
  color,
  designerName,
  projectName,
  cardIcon,
  projectLink,
}: any) => {
  return (
    <Link href={projectLink || ""}>
      <div className="flex flex-col justify-center items-center rounded-3xl h-full mt-10 shadow-card-shadow">
        <div className="relative w-full h-72 xl:h-96 lg:h-80 md:h-72 sm:h-56 phone:h-48">
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div
          className={`relative flex flex-col w-full h-[120px] phone:h-[70px] ${color} phone:py-2 py-4 px-6 phone:px-2 text-white rounded-b-3xl`}
        >
          <p className="w-full text-center h-[40px] phone:h-[20px] lg:text-textLg xl:text-textLg phone:text-textXxxs pro:text-textXss leading-normal px-2">
            "{projectName}"
          </p>
          <div className="absolute flex items-center justify-between bottom-0 left-0 right-0 px-4 py-2">
            <div className="text-start phone:text-textXxxs text-md text-black">
              {designerName}
            </div>
            <Image
              src={cardIcon}
              alt={alt}
              layout="cover"
              className="object-contain w-20 h-10 phone:w-10 phone:h-5 text-end xxmd:w-14 xxmd:h-8"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SliderCard;
