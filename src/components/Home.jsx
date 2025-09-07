import { motion } from "framer-motion";
import pf_pic from "../assets/profile.jpg"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 120,
    },
  },
};

function Home({ scrollToSkills }) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-transparent opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 sm:mb-6"
          >
            Hi I'm <span className="text-blue-500">Aditya</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-lg"
          >
            3rd Year Computer Science undergraduate with a specialization in
            Frontend Development. Proficient in the MERN stack, I am dedicated
            to building efficient, scalable, and visually appealing web
            applications. 
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6"
          >
            Full Stack <span className="text-blue-500">Web Developer</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-wrap gap-4 justify-center sm:justify-start"
          >
            <motion.a
              href="https://drive.google.com/file/d/1nl2Tor8MZum_bjWOBf_f3uV_mlXYEtcp/view?usp=drive_link"
              download
              target="_blank"
              className="bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold transition hover:bg-blue-700 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Download CV
            </motion.a>
            <motion.button
              onClick={scrollToSkills}
              className="cursor-pointer bg-white text-black px-5 py-3 rounded-xl font-semibold transition hover:bg-gray-200 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Hire Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center mt-6 md:mt-0"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src={pf_pic}
            alt="Profile"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
