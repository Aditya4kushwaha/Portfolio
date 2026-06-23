import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiGit,
  SiPython,
  SiTailwindcss,
  SiFigma,
  SiVercel,
  SiAmazonwebservices,
  SiPostman,
  SiBun,
  SiMarkdown,
  SiSocketdotio,
  SiFastapi,
  SiLangchain,
} from "react-icons/si";
import { Brain } from "lucide-react";


export const techStack = [
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, colorClass: "text-[var(--text-main)]" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express", Icon: SiExpress, colorClass: "text-[var(--text-main)]" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", Icon: SiCss3, color: "#1572B6" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "LangChain", Icon: SiLangchain, color: "#1C3C3A", colorClass: "dark:text-[#38bdf8]" },
  { name: "RAG", Icon: Brain, color: "#a855f7" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },


  {
    name: "Markdown",
    Icon: SiMarkdown,
    color: "#000000",
    colorClass: "dark:invert",
  },
  {
    name: "Socket.io",
    Icon: SiSocketdotio,
    colorClass: "text-[var(--text-main)]",
  },
];

export function Box({ prop, size, gap = 2 }) {
  let heightClass = "h-6";
  let textsize = "text-sm";
  if (size === "small") {
    heightClass = "h-4";
    textsize = "text-sm";
  }
  return (
    <div
      className={`group flex items-center justify-center gap-${gap} border-2 border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-[var(--accent-neon)] font-outfit p-1 m-2 rounded-none brutalist-shadow-sm duration-150 cursor-pointer`}
    >
      <img
        src={`skills/${prop.image}.png`}
        alt={prop.name}
        className={`${heightClass} w-auto py-1 object-cover`}
      />
      <div className={`${textsize} font-bold text-[var(--text-main)]`}>{prop.name}</div>
    </div>
  );
}

export const SkillBlocks = () => {
  const activeSkills = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "MongoDB",
    "Node.js",
    "JavaScript",
    "Express",
    "Python",
    "FastAPI",
    "LangChain",
    "RAG",
    "PostgreSQL",
  ];
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-4 w-full max-w-4xl px-4">
      {techStack
        .filter((t) => activeSkills.includes(t.name))
        .map(({ name, Icon, color, colorClass }) => (
          <div
            key={name}
            className="flex items-center gap-3 rounded-none border-[3px] border-[var(--border-color)] bg-[var(--card-bg)] px-5 py-2.5 transition-all duration-150 brutalist-shadow-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--shadow-color)] hover:bg-[var(--accent-neon)] hover:text-black group/skill cursor-default"
          >
            <span
              className={`flex items-center justify-center overflow-visible transition-colors duration-150 ${colorClass || ""}`}
              style={color ? { color } : undefined}
            >
              <Icon
                size={22}
                className="block group-hover/skill:text-black transition-colors duration-150"
                style={color ? { color } : undefined}
              />
            </span>
            <span className="text-base font-extrabold uppercase tracking-wide text-[var(--text-main)] group-hover/skill:text-black">
              {name}
            </span>
          </div>
        ))}
    </div>
  );
};

