import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

const techStack = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl sm:text-6xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl sm:text-6xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl sm:text-6xl" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400 text-5xl sm:text-6xl" /> },
  { name: "React", icon: <FaReact className="text-blue-400 text-5xl sm:text-6xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-200 text-5xl sm:text-6xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl sm:text-6xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300 text-5xl sm:text-6xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-5xl sm:text-6xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl sm:text-6xl" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const Skills = () => {
  return (
    <section className="min-h-screen bg-black text-white py-16 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          Tech <span className="text-blue-500">Stack</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-12 mt-3 max-w-2xl mx-auto leading-relaxed">
          Technologies I use to build modern, efficient, and scalable web applications.
        </p>

        {/* Tech Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              className="bg-[#0f1115] rounded-xl py-6 sm:py-8 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all w-full"
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {tech.icon}
              <p className="mt-3 sm:mt-4 text-base sm:text-lg font-medium">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
