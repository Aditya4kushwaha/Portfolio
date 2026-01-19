import { FaTwitter, FaEnvelope, FaInstagram, FaPinterest, FaMedium } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-12 px-4 flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8 sm:gap-10">
        
        {/* Heading */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
          <span className="text-blue-500">Connect</span> With Me
        </h3>

        {/* Social Icons with Tooltips */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 relative">
          
          {/* Social Icon Reusable Style */}
          {[
            { icon: <FaTwitter />, label: "Twitter", link: "https://x.com/adityakush_04" },
            { icon: <FaInstagram />, label: "Instagram", link: "https://www.instagram.com/im_adity04?igsh=MTh2Y29qcXIza2dmOA==" },
            { icon: <FaPinterest />, label: "Pinterest", link: "https://in.pinterest.com/adityakushwahaindia/_profile/" },
            { icon: <FaMedium />, label: "Medium", link: "https://medium.com/@adityakushwahaindia" },
            { icon: <SiPeerlist />, label: "Peerlist", link: "https://peerlist.io/aadi_2005" },
            { icon: <FaEnvelope />, label: "Email", link: "mailto:adityakushwahaksn@gmail.com" },
          ].map(({ icon, label, link }) => (
            <div key={label} className="relative group">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 sm:p-4 md:p-5 border border-gray-600 rounded-full hover:bg-gray-800 
                           transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center justify-center"
              >
                <div className="text-white text-[20px] sm:text-[22px] md:text-[24px]">
                  {icon}
                </div>
              </a>

              {/* Tooltip */}
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm 
                               bg-gray-200 text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 
                               transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Full-width Divider */}
        <div className="w-full h-[1px] bg-gray-700 rounded-full mt-6" />
      </div>
    </footer>
  );
};

export default Footer;
