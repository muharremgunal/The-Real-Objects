import Image from "next/image";
import funnyLogo from "../../public/assets/images/funnyLogo.png";

export default function OurNotebookPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center px-4">
        <div className="mb-8">
          <Image 
            src={funnyLogo} 
            alt="The Real Objects" 
            width={120} 
            height={120} 
            className="mx-auto mb-8" 
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
          Our Notebook
        </h1>
        
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            "Just adding some final sprinkles... hang tight, we're almost ready to launch!"
          </p>
          
          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-500 font-medium">
              — The Real Objects Team
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <p className="text-gray-500 mb-4">
            In the meantime, explore our work:
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/projects" 
              className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              View Projects
            </a>
            <a 
              href="/about" 
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
