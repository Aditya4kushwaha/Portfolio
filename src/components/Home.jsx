import { motion } from "framer-motion";
import pf_pic from "../assets/profile.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, type: "spring", stiffness: 120 },
  },
};

function Home({ scrollToSkills }) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 sm:px-8 py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-transparent opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center text-center md:text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 sm:mb-6"
          >
            Hi I'm <span className="text-blue-500">Aditya</span>
          </motion.h1>

          {/* Tech Stack Line */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-lg leading-relaxed flex flex-wrap justify-center md:justify-start items-center gap-2"
          >
            I build interactive web apps using{" "}
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-2.5 py-1 rounded-md text-xs sm:text-sm font-medium flex items-center gap-1 hover:bg-gray-700 transition-all"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                className="w-4 h-4"
              />
              TypeScript
            </a>
            ,
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-2.5 py-1 rounded-md text-xs sm:text-sm font-medium flex items-center gap-1 hover:bg-gray-700 transition-all"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React.js"
                className="w-4 h-4"
              />
              React.js
            </a>
            ,
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-2.5 py-1 rounded-md text-xs sm:text-sm font-medium flex items-center gap-1 hover:bg-gray-700 transition-all"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                alt="Next.js"
                className="w-4 h-4 invert"
              />
              Next.js
            </a>
            ,
            <a
              href="https://nodejs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-2.5 py-1 rounded-md text-xs sm:text-sm font-medium flex items-center gap-1 hover:bg-gray-700 transition-all"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                className="w-4 h-4"
              />
              Node.js
            </a>
            ,
            <a
              href="https://expressjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-2.5 py-1 rounded-md text-xs sm:text-sm font-medium flex items-center gap-1 hover:bg-gray-700 transition-all"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                alt="Express.js"
                className="w-4 h-4 invert"
              />
              Express.js
            </a>
             and
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-2.5 py-1 rounded-md text-xs sm:text-sm font-medium flex items-center gap-1 hover:bg-gray-700 transition-all"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
                className="w-4 h-4"
              />
              MongoDB
            </a>
            . With a focus on{" "}
            <span className="font-semibold text-white">UI</span> design.
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-2xl md:text-3xl font-bold mb-6"
          >
            Frontend <span className="text-blue-500">Developer</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <motion.a
              href="https://drive.google.com/file/d/13Glow-PxdALt-oTxAzRJSodJBzUFrCmn/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold transition hover:bg-blue-700 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Resume / CV
            </motion.a>

            <motion.button
              onClick={scrollToSkills}
              className="cursor-pointer bg-white text-black px-5 py-3 rounded-xl font-semibold transition hover:bg-gray-200 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Get in touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center mt-10 md:mt-0"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src={pf_pic}
            alt="Profile"
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
