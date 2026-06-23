import { useState } from "react";
import { techStack } from "./SkillBlocks";
import { ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    name: "Chit Chat",
    image: "chitchat",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express",
      "Socket.io",
    ],
    description:
      "A real-time chat application built with React and Node.js, featuring real-time messaging, user authentication, and a modern UI.",
    liveDemoLink: "https://chat-app-three-inky-99.vercel.app/",
    githubLink: "https://github.com/Aditya4kushwaha/Chat-App",
  },
  {
    name: "Resume Sync",
    image: "resumeSync",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express",
    ],
    description:
      "An AI-powered Resume Analyzer that compares resumes with job descriptions to provide skill gap analysis and help in making ATS friendly resume that aligned with Job Description.",
    liveDemoLink: "https://resume-sync-peach.vercel.app/",
    githubLink: "https://github.com/Aditya4kushwaha/ResumeSync",
  },
  {
    name: "Meme Centre",
    image: "memecentre",
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    description:
      "Built a meme generator app with a clean UI, allowing users to create custom memes without any mess in ui.",
    liveDemoLink: "https://meme-generator-kappa-brown.vercel.app/",
    githubLink: "https://github.com/Aditya4kushwaha/Meme-Generator",
  },
  // Add more projects here...
];

const VISIBLE_COUNT = 2;

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[var(--card-bg)] border-[3px] border-[var(--border-color)] rounded-none brutalist-shadow hover:shadow-[7px_7px_0px_0px_var(--shadow-color)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150 flex flex-col h-full">
      <div className="border-b-[3px] border-[var(--border-color)] overflow-hidden bg-neutral-100">
        <img
          src={`projects/${project.image}.png`}
          alt={project.name}
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>
      <div className="md:p-6 p-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl md:text-2xl text-[var(--text-main)] font-outfit font-black uppercase tracking-tight mb-2">
            {project.name}
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((techName, idx) => {
              const tech = techStack.find((t) => t.name === techName) || {
                name: techName,
              };
              const Icon = tech.Icon;
              return (
                <div
                  key={idx}
                  className="relative group/tooltip p-1.5 bg-[var(--hover-bg)] border border-[var(--border-color)] transition-all duration-150 hover:bg-[var(--accent-neon)] rounded-none"
                >
                  {Icon ? (
                    <Icon
                      className={`w-4 h-4 ${tech.colorClass || ""}`}
                      style={{ color: tech.color }}
                    />
                  ) : (
                    <span className="text-xs font-black">{tech.name[0]}</span>
                  )}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black border border-white uppercase tracking-wider font-extrabold rounded-none opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="text-[var(--text-color)] mb-6 text-sm font-outfit font-medium leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href={project.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group/button flex justify-center items-center gap-2 border-2 border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-[var(--accent-neon)] hover:text-black p-2 px-4 rounded-none brutalist-shadow-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-100 font-outfit font-black uppercase tracking-wider text-xs cursor-pointer text-[var(--text-main)]"
          >
            <img
              src="icons/internet.png"
              className="invert-[var(--invert-value)] opacity-80 group-hover/button:opacity-100 h-4 duration-150"
              alt=""
            />
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group/button flex justify-center items-center gap-2 border-2 border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-[var(--accent-neon)] hover:text-black p-2 px-4 rounded-none brutalist-shadow-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-100 font-outfit font-black uppercase tracking-wider text-xs cursor-pointer text-[var(--text-main)]"
          >
            <img
              src="icons/github.png"
              className="invert-[var(--invert-value)] h-4"
              alt=""
            />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, VISIBLE_COUNT);
  const hasMore = projects.length > VISIBLE_COUNT;

  return (
    <div className="flex flex-col items-center gap-8 md:w-full w-full px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {hasMore && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="flex items-center gap-2 px-6 py-3 border-[3px] border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-main)] hover:bg-[var(--accent-neon)] hover:text-black hover:-translate-x-0.5 hover:-translate-y-0.5 brutalist-shadow-sm transition-all duration-150 text-sm font-black uppercase tracking-wider cursor-pointer"
        >
          {showAll
            ? "Show Less"
            : `+${projects.length - VISIBLE_COUNT} More Projects`}
          {showAll ? (
            <ChevronUp className="w-4 h-4 stroke-[3]" />
          ) : (
            <ChevronDown className="w-4 h-4 stroke-[3]" />
          )}
        </button>
      )}
    </div>
  );
};

export default Projects;

