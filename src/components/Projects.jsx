import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

import memeGenerator from "../assets/Meme.png";
import UrlShort from "../assets/url-shortener.png";
import CryptoHunterMini from "../assets/CryptoHunterMini.png";
import Cluely from "../assets/Cluely.png";
import Chillz from "../assets/Chillz.png"

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.3 },
  },
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  
  const frontendProjects = [
    {
      title: "Meme Generator",
      link: "https://meme-generator-kappa-brown.vercel.app/",
      github: "https://github.com/Aditya4kushwaha/Meme-Generator",
      image: memeGenerator,
      tech: ["React", "Tailwind CSS"],
    },
    {
      title: "URL Shortener",
      link: "https://url-shortener-theta-two.vercel.app/",
      github: "https://github.com/Aditya4kushwaha/URL-Shortener",
      image: UrlShort,
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Crypto Hunter",
      link: "https://crypto-hunter-one-mu.vercel.app/",
      github: "https://github.com/Aditya4kushwaha/Crypto-Hunter",
      image: CryptoHunterMini,
      tech: ["React", "CSS"],
    },
  ];

  const landingPageProjects = [
    {
      title: "Cluely",
      link: "https://cluely-landing-page.vercel.app/",
      github: "https://github.com/Aditya4kushwaha/Cluely-landing-page",
      image: Cluely,
      tech: ["React", "Tailwind CSS"],
    },
    {
      title: "Chillz",
      link: "https://chillz-seven.vercel.app/",
      github: "https://github.com/Aditya4kushwaha/Chillz",
      image: Chillz,
      tech: ["React", "Tailwind CSS"],
    },
  ];

  const techIcons = {
    React: <FaReact className="text-cyan-400" />,
    "Node.js": <FaNodeJs className="text-green-500" />,
    MongoDB: <SiMongodb className="text-green-700" />,
    Express: <SiExpress className="text-gray-300" />,
    HTML: <FaHtml5 className="text-orange-500" />,
    CSS: <FaCss3Alt className="text-blue-500" />,
    JavaScript: <SiJavascript className="text-yellow-400" />,
    "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  };

  const displayedProjects =
    activeTab === "frontend" ? frontendProjects : landingPageProjects;

  return (
    <motion.section
      className="bg-black text-white py-16 px-4 min-h-screen"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading */}
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-blue-500">Projects</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          A showcase of my web development journey, featuring Frontend Apps and
          Landing Pages.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mt-10 mb-8">
        <button
          className={`cursor-pointer px-5 py-2 rounded-lg font-medium transition ${
            activeTab === "frontend"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab("frontend")}
        >
          Frontend Projects
        </button>
        <button
          className={`cursor-pointer px-5 py-2 rounded-lg font-medium transition ${
            activeTab === "landing"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab("landing")}
        >
          Landing Pages
        </button>
      </div>

      {/* Project Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-2 sm:px-4"
        key={activeTab}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {displayedProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              exit="exit"
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg w-80 flex-shrink-0"
              whileHover={{
                y: -8,
                boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Image */}
              <div className="w-full h-48 sm:h-52 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg sm:text-xl font-semibold">
                    {project.title}
                  </h2>
                  <div className="flex gap-3 text-lg">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Site"
                      className="text-white hover:text-blue-400"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub Repository"
                        className="text-white hover:text-gray-400"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4 text-2xl">
                  {project.tech.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-1 text-sm"
                      title={tech}
                    >
                      {techIcons[tech]}
                      <span className="sr-only">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
