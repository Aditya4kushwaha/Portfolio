import {
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";

const techStack = [
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 text-5xl sm:text-6xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-5xl sm:text-6xl" />,
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-400 text-5xl sm:text-6xl" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white text-5xl sm:text-6xl" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 text-5xl sm:text-6xl" />,
  },
  {
    name: "Express",
    icon: <SiExpress className="text-gray-300 text-5xl sm:text-6xl" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500 text-5xl sm:text-6xl" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-400 text-5xl sm:text-6xl" />,
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-black text-white py-16 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          Tech <span className="text-blue-500">Stack</span>
        </h2>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-12 mt-3 max-w-2xl mx-auto leading-relaxed">
          Technologies I use to build modern and scalable web applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="bg-[#0f1115] rounded-xl py-8 flex flex-col items-center justify-center
                         shadow-md transition-all duration-300 ease-in-out
                         hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
            >
              {tech.icon}
              <p className="mt-4 text-base sm:text-lg font-medium">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
