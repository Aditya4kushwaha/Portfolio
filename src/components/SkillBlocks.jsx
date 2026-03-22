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
} from "react-icons/si";

export const techStack = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js", Icon: SiNextdotjs, colorClass: "text-[var(--text-main)]" },
    
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express", Icon: SiExpress, colorClass: "text-[var(--text-main)]" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", Icon: SiCss3, color: "#1572B6" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
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
      className={`group flex items-center justify-center gap-${gap} border border-[var(--border-color)] hover:border-[var(--subtext-color)] font-gabarito p-1 m-2 rounded-md duration-200 cursor-pointer`}
    >
      <img
        src={`skills/${prop.image}.png`}
        alt={prop.name}
        className={`${heightClass} w-auto py-1 object-cover duration-200`}
      />
      <div className={`${textsize}`}>{prop.name}</div>
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
    "Express"
  ];
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-4 w-full max-w-4xl">
      {techStack
        .filter((t) => activeSkills.includes(t.name))
        .map(({ name, Icon, color, colorClass }) => (
          <div
            key={name}
            className="flex items-center gap-2 rounded-full border border-dashed border-gray-400 dark:border-neutral-600 bg-[var(--hover-bg)] px-4 py-2 transition-colors hover:border-gray-600 dark:hover:border-neutral-400"
          >
            <span
              className={`flex items-center justify-center overflow-visible ${colorClass || ""}`}
              style={color ? { color } : undefined}
            >
              <Icon
                size={20}
                className="block"
                style={color ? { color } : undefined}
              />
            </span>
            <span className="text-md font-bold text-[var(--text-main)]">
              {name}
            </span>
          </div>
        ))}
    </div>
  );
};
