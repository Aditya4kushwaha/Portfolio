import pic from "../assets/pf_pic.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiCodeforces,
  SiCodechef,
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16 sm:py-20">
      {/* Heading */}
      <h1 className="flex flex-wrap justify-center mb-8 text-center">
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          About&nbsp;
        </span>
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500">
          Me
        </span>
      </h1>

      {/* Profile Card */}
      <div className="p-6 sm:p-8 md:p-10 rounded-xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl text-center">
        <img
          src={pic}
          alt="Aditya Kushwaha"
          className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full object-cover mb-4 border-4 border-gray-600"
        />
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">
          Aditya Kushwaha
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mb-8">
          Full Stack Developer | Competitive Programmer
        </p>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-4 w-full">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full">
            <a
              href="https://github.com/Aditya4kushwaha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[130px] sm:min-w-[160px] px-4 py-2 sm:py-3 rounded-md 
                         flex items-center justify-center gap-2 border border-gray-600 
                         hover:bg-gray-800 transition text-sm sm:text-base"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-kushwaha-3a9936285/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[130px] sm:min-w-[160px] px-4 py-2 sm:py-3 rounded-md 
                         flex items-center justify-center gap-2 border border-gray-600 
                         hover:bg-gray-800 transition text-sm sm:text-base"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://codeforces.com/profile/aadi_kush"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[130px] sm:min-w-[160px] px-4 py-2 sm:py-3 rounded-md 
                         flex items-center justify-center gap-2 border border-gray-600 
                         hover:bg-gray-800 transition text-sm sm:text-base"
            >
              <SiCodeforces /> Codeforces
            </a>
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full">
            <a
              href="https://www.codechef.com/users/aadi_kush"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[130px] sm:min-w-[160px] px-4 py-2 sm:py-3 rounded-md 
                         flex items-center justify-center gap-2 border border-gray-600 
                         hover:bg-gray-800 transition text-sm sm:text-base"
            >
              <SiCodechef /> CodeChef
            </a>
            <a
              href="https://leetcode.com/u/aadi_kush/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[130px] sm:min-w-[160px] px-4 py-2 sm:py-3 rounded-md 
                         flex items-center justify-center gap-2 border border-gray-600 
                         hover:bg-gray-800 transition text-sm sm:text-base"
            >
              <SiLeetcode /> LeetCode
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
