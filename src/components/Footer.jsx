import { FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8">
        
        {/* Heading */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
          Connect With Me
        </h3>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          <a
            href="https://x.com/adityakush_04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="p-3 sm:p-4 md:p-5 bg-transparent border border-gray-600 rounded-full 
                       hover:bg-gray-700 transition-all duration-300 
                       hover:scale-110 hover:-translate-y-1 flex items-center justify-center"
          >
            <FaTwitter className="text-white text-[20px] sm:text-[22px] md:text-[24px]" />
          </a>

          <a
            href="mailto:adityakushwahaindia@gmail.com"
            aria-label="Email"
            className="p-3 sm:p-4 md:p-5 bg-transparent border border-gray-600 rounded-full 
                       hover:bg-gray-700 transition-all duration-300 
                       hover:scale-110 hover:-translate-y-1 flex items-center justify-center"
          >
            <FaEnvelope className="text-white text-[20px] sm:text-[22px] md:text-[24px]" />
          </a>
        </div>

        {/* Divider (optional aesthetic touch) */}
        <div className="w-16 sm:w-20 h-[1px] bg-gray-700 rounded-full" />

        {/* Copyright */}
<p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed text-center">
  Design & Developed with <span className="text-red-500">❤️</span> by{" "}
  <span className="font-semibold text-white">AdityaXdev</span>
  <br />
  © 2025. All rights reserved.
</p>



      </div>
    </footer>
  );
};

export default Footer;
