import Comingsoon from "../../public/assets/images/comingSoon.png";

const ContactPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center -mb-32"
      style={{ backgroundImage: `url(${Comingsoon.src})` }}
    >
      <div className="bg-opacity-90 text-white px-8 py-4 text-center w-5/6">
        <div className="bg-black w-full h-12 mb-1"></div>
        <p className="text-lg md:text-2xl px-20 py-2 font-light bg-black mb-1">
          "Just adding some final sprinkles... hang tight, we're almost ready to
          launch!"
        </p>
        <p className="text-right pr-3 text-sm md:text-lg bg-black py-2 mb-1">
          The Real Object's Team
        </p>
        <div className="bg-black w-full h-12 mb-1"></div>
      </div>
    </div>
  );
};

export default ContactPage;
