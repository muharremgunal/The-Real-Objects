import recognitions1 from "../../public/assets/images/recognise/1.png";
import recognitions2 from "../../public/assets/images/recognise/2.png";
import recognitions3 from "../../public/assets/images/recognise/3.png";
import recognitions4 from "../../public/assets/images/recognise/4.png";
import recognitions5 from "../../public/assets/images/recognise/5.png";
import recognitions6 from "../../public/assets/images/recognise/6.png";
import recognitions7 from "../../public/assets/images/recognise/7.png";
import recognitions8 from "../../public/assets/images/recognise/8.png";
import recognitions9 from "../../public/assets/images/recognise/9.png";

import Image1 from "../../public/assets/images/ourWork/1.png";
import Image2 from "../../public/assets/images/ourWork/2.png";
import Image3 from "../../public/assets/images/ourWork/3.png";
import Image4 from "../../public/assets/images/ourWork/4.png";
import Image5 from "../../public/assets/images/ourWork/5.png";
import Image6 from "../../public/assets/images/ourWork/6.png";
import Image7 from "../../public/assets/images/ourWork/7.png";
import Image8 from "../../public/assets/images/ourWork/8.png";
import Image9 from "../../public/assets/images/ourWork/9.png";

import carousel1 from "../../public/assets/images/ourImpact/1.png";
import carousel2 from "../../public/assets/images/ourImpact/2.png";
import carousel3 from "../../public/assets/images/ourImpact/3.png";
import carousel4 from "../../public/assets/images/ourImpact/4.png";
import carousel5 from "../../public/assets/images/ourImpact/5.png";
import carousel6 from "../../public/assets/images/ourImpact/6.png";

import socialIcon1 from "../../public/assets/images/socialIcons/1.png";
import socialIcon2 from "../../public/assets/images/socialIcons/2.png";
import socialIcon3 from "../../public/assets/images/socialIcons/3.png";

export const sliderImages = [
  { src: recognitions1, alt: "recognitions1" },
  { src: recognitions2, alt: "recognitions2" },
  { src: recognitions3, alt: "recognitions3" },
  { src: recognitions4, alt: "recognitions4" },
  { src: recognitions5, alt: "recognitions5" },
  { src: recognitions6, alt: "recognitions7" },
  { src: recognitions7, alt: "recognitions8" },
  { src: recognitions8, alt: "recognitions9" },
  { src: recognitions9, alt: "recognitions9" },
];

export const sliderData = [
  "Industrial Design",
  "Product Design",
  "Product Visualization",
  "Design Consultancy",
  "3D Modeling",
  "Prototyping",
  "Trend Analysis",
  "Color,Material,Finish",
  "Design for Manufacturing",
  "UX/UI Design",
];

export const sliderCardData = [
  {
    src: carousel1,
    alt: "Brick",
    cardIcon: recognitions4,
    designerName: "JC Torres",
    projectDescription:
      "Tactile lamp and timer concept fosters focus and mindfulness in work-from-home arrangements",
    color: "bg-[#647ACD]",
    projectLink:
      "https://www.yankodesign.com/2024/02/12/tactile-lamp-and-timer-concept-fosters-focus-and-mindfulness-in-work-from-home-arrangements/",
  },
  {
    src: carousel2,
    alt: "Woolly",
    cardIcon: recognitions7,
    designerName: "Gregory Han",
    projectDescription:
      "The Woolly Capsule Coffee Machine Drips With Warmly Tactile Details",
    color: "bg-[#EB6854]",
    projectLink: "https://design-milk.com/woolly-capsule-coffee-machine/",
  },
  {
    src: carousel3,
    alt: "Image One",
    cardIcon: recognitions5,
    designerName: "Mickael Hemsworth",
    projectDescription: "The Conceptual Pofu Lamp Encourages Interaction",
    color: "bg-[#DCDC28]",
    projectLink: "https://www.trendhunter.com/trends/pofu-lamp",
  },
  {
    src: carousel4,
    alt: "Olive",
    cardIcon: recognitions4,
    designerName: "Sarang Sheth",
    projectDescription:
      "LEGO-themed wireless charger platform proves why LEGO should build ‘fun-filled’ tech gadgets",
    color: "bg-[#FBD51B]",
    projectLink:
      "https://www.yankodesign.com/2023/01/20/lego-themed-wireless-charger-platform-proves-why-lego-should-build-fun-filled-tech-gadgets/",
  },
  {
    src: carousel5,
    alt: "Olive",
    cardIcon: recognitions3,
    designerName: "Matt Bolton",
    projectDescription:
      "I wish I could buy this stunning OLED TV inspired by a speaker design legend",
    color: "bg-[#EB6854]",
    projectLink:
      "https://www.techradar.com/opinion/i-wish-i-could-buy-this-stunning-oled-tv-inspired-by-a-speaker-design-legend",
  },
  {
    src: carousel6,
    alt: "Olive",
    cardIcon: recognitions4,
    designerName: "Gaurav Sood",
    projectDescription:
      "Take a Rest 32-inch touchscreen fits snugly besides your workstation and right in your life",
    color: "bg-[#DCDC28]",
    projectLink:
      "https://www.yankodesign.com/2023/09/07/vestels-take-a-rest-32-inch-touchscreen-fits-snugly-besides-your-workstation-and-right-in-your-life/",
  },
];

export const hoverImages = [
  {
    src: Image1,
    alt: "Image 1",
    href: "/",
    text: (
      <div className="flex flex-col items-start justify-start py-2 px-5">
        <span className="text-md font-bold">Woolly</span>
        <span className="text-sm font-thin">Capsule Coffee Machine</span>
      </div>
    ),
    bg: "bg-black",
    colSpan: "col-span-2 md:col-span-1 sm:col-span-2",
    rowSpan: "row-span-3",
  },
  {
    src: Image2,
    alt: "Image 2",
    href: "/",
    text: (
      <div className="flex flex-col items-start justify-start py-2 px-5">
        <span className="text-md font-bold">Woolly</span>
        <span className="text-sm font-thin">Capsule Coffee Machine</span>
      </div>
    ),
    bg: "bg-black",
    colSpan: "col-span-1 md:col-span-2 sm:col-span-1",
    rowSpan: "row-span-3",
  },
  {
    src: Image3,
    alt: "Image 3",
    href: "/",
    text: (
      <div className="flex flex-col items-start justify-start py-2 px-5">
        <span className="text-md font-bold">Woolly</span>
        <span className="text-sm font-thin">Capsule Coffee Machine</span>
      </div>
    ),
    bg: "bg-black",
    colSpan: "col-span-1 md:col-span-1 sm:col-span-1",
    rowSpan: "row-span-3",
  },
  {
    src: Image4,
    alt: "Image 4",
    href: "/",
    text: (
      <div className="flex flex-col items-start justify-start py-2 px-5">
        <span className="text-md font-bold">Woolly</span>
        <span className="text-sm font-thin">Capsule Coffee Machine</span>
      </div>
    ),
    bg: "bg-black",
    colSpan: "col-span-2 md:col-span-2 sm:col-span-2",
    rowSpan: "row-span-3",
  },
  {
    src: Image5,
    alt: "Image 2",
    href: "/",
    text: (
      <div className="flex flex-col items-start justify-start py-2 px-5">
        <span className="text-md font-bold">Woolly</span>
        <span className="text-sm font-thin">Capsule Coffee Machine</span>
      </div>
    ),
    bg: "bg-black",
    colSpan: "col-span-1 md:col-span-1 sm:col-span-1",
    rowSpan: "row-span-3",
  },
  {
    src: Image6,
    alt: "Image 3",
    href: "/",
    text: (
      <div className="flex flex-col items-start justify-start py-2 px-5">
        <span className="text-md font-bold">Woolly</span>
        <span className="text-sm font-thin">Capsule Coffee Machine</span>
      </div>
    ),
    bg: "bg-black",
    colSpan: "col-span-1 md:col-span-1 sm:col-span-1",
    rowSpan: "row-span-3",
  },
  {
    src: Image7,
    alt: "Image 3",
    href: "/",
    text: (
      <div className="flex flex-col items-start justify-start py-2 px-5">
        <span className="text-md font-bold">Woolly</span>
        <span className="text-sm font-thin">Capsule Coffee Machine</span>
      </div>
    ),
    bg: "bg-black",
    colSpan: "col-span-2 md:col-span-1 sm:col-span-2",
    rowSpan: "row-span-3",
  },
  {
    src: Image8,
    alt: "Image 3",
    href: "/",
    text: (
      <div className="flex flex-col items-start justify-start py-2 px-5">
        <span className="text-md font-bold">Woolly</span>
        <span className="text-sm font-thin">Capsule Coffee Machine</span>
      </div>
    ),
    bg: "bg-black",
    colSpan: "col-span-1 md:col-span-1 sm:col-span-1",
    rowSpan: "row-span-3",
  },
  {
    src: Image9,
    alt: "Image 2",
    href: "/",
    text: (
      <div className="flex flex-col items-start justify-start py-2 px-5">
        <span className="text-md font-bold">Woolly</span>
        <span className="text-sm font-thin">Capsule Coffee Machine</span>
      </div>
    ),
    bg: "bg-black",
    colSpan: "col-span-1 md:col-span-2 sm:col-span-1",
    rowSpan: "row-span-3",
  },
];

export const socialIcons = [
  { src: socialIcon1, link: "", alt: "recognitions1" },
  { src: socialIcon2, link: "", alt: "socialIcon2" },
  { src: socialIcon3, link: "", alt: "socialIcon3" },
];
