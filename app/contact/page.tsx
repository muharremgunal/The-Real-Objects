import Image from "next/image";
import Link from "next/link";
import { socialIcons } from "../data/homeData";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Contact Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8">
            Let's Talk
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            Ready to bring your product vision to life? We'd love to hear from you.
          </p>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="p-8 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Email</h2>
              <Link 
                href="mailto:hello@therealobjects.com"
                className="text-xl text-gray-700 hover:text-gray-900 transition-colors"
              >
                hello@therealobjects.com
              </Link>
            </div>
            
            <div className="p-8 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Address</h2>
              <div className="text-gray-700">
                <p>Milano Business Center s.r.l.</p>
                <p>Via Mauro Macchi, 8</p>
                <p>20124 Milano, Italy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-medium text-gray-900 mb-8">Follow Our Work</h2>
          <div className="flex justify-center space-x-8">
            {socialIcons.map((item, index) => (
              <Link 
                key={index} 
                href={item.link} 
                target="_blank"
                className="p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Image
                  src={item.src}
                  alt={`Social platform ${index + 1}`}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative">
        <div className="h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.4110600402046!2d9.2046592!3d45.481666499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6c4381ae8b5%3A0xdeefd270e4a87e80!2sMilano%20Business%20Center!5e0!3m2!1str!2str!4v1734211486403!5m2!1str!2str"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
            title="Milano Business Center Location"
          />
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-8 px-4 text-center bg-gray-900 text-white">
        <p className="text-sm text-gray-400">
          © 2024 The Real Objects. All rights reserved.
        </p>
      </section>
    </div>
  );
};

export default ContactPage;
