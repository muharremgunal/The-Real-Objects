import Image from "next/image";
import Link from "next/link";
import { socialIcons } from "../data/homeData";

const ContactPage = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="w-full py-16 md:py-24 h-[40vh] phone:h-[30vh] flex flex-col justify-center items-center">
        <section className="w-full flex flex-col text-left px-6 xl:px-32 phone:mt-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-4 phone:mb-2 phone:text-4xl flex items-center">
            Let's Talk
            <span className="inline-block transform -rotate-45 ml-2">↓</span>
          </h1>
          <p className="bg-[#DCDC28] text-black text-xl md:text-2xl md:leading-4 phone:leading-4 lg:text-3xl lg:leading-4 w-max text-left px-4">
            hello@therealobjects.com
          </p>
        </section>
      </div>
      <div className="w-full absolute bottom-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end px-6 xl:px-32 mb-4 gap-6 phone:gap-2 md:gap-0">
          <div className="flex items-center gap-4">
            <p className="text-2xl md:text-3xl lg:text-4xl phone:text-xl font-thin">
              Follow us
            </p>
            <div className="flex space-x-4 z-50">
              {socialIcons.map((item, index) => (
                <Link key={index} href={item.link} target="_blank">
                  <Image
                    className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
                    src={item.src}
                    alt="Social Images"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-end gap-4 phone:gap-2 md:gap-8 text-sm md:text-base">
            <div className="flex flex-col text-left">
              <p>Milano Business Center s.r.l.</p>
              <p>Via Mauro Macchi, 8, 20124 Milano</p>
            </div>
            <p>® 2024 The Real Objects</p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.4110600402046!2d9.2046592!3d45.481666499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6c4381ae8b5%3A0xdeefd270e4a87e80!2sMilano%20Business%20Center!5e0!3m2!1str!2str!4v1734211486403!5m2!1str!2str"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[48vh]"
        />
      </div>
    </div>
  );
};

export default ContactPage;
