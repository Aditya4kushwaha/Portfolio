import { useState } from 'react'
import { techStack } from './SkillBlocks'
import { ChevronDown, ChevronUp } from 'lucide-react'

const projects = [
    {
        name: "Chit Chat",
        image: "chitchat",
        techStack: ["React", "JavaScript", "Tailwind CSS", "Node.js", "MongoDB", "Express", "Socket.io"],
        description: "A real-time chat application built with React and Node.js, featuring real-time messaging, user authentication, and a modern UI.",
        liveDemoLink: "https://chat-app-three-inky-99.vercel.app/",
        githubLink: "https://github.com/Aditya4kushwaha/Chat-App"
    },
    {
        name: "Meme Centre",
        image: "memecentre",
        techStack: ["React", "JavaScript", "Tailwind CSS"],
        description: "Built a meme generator app with a clean UI, allowing users to create custom memes without any mess in ui.",
        liveDemoLink: "https://meme-generator-kappa-brown.vercel.app/",
        githubLink: "https://github.com/Aditya4kushwaha/Meme-Generator"
    },
    // Add more projects here...
]

const VISIBLE_COUNT = 2

const ProjectCard = ({ project }) => {
    return (
        <div className='border bg-[var(--card-bg)] border-[var(--card-border)] rounded-xl hover:shadow-lg hover:shadow-amber-300/10 duration-200 group'>
            <img src={`projects/${project.image}.png`} alt={project.name} className='rounded-xl group-hover:scale-105 group-hover:border group-hover:border-neutral-500 duration-200' />
            <div className='md:p-6 p-2'>
                <h3 className='text-2xl text-[var(--text-color)] font-gabarito font-bold md:mb-2 group-hover:text-[var(--head-color)] duration-200'>
                    {project.name}
                </h3>
                <div className='flex flex-wrap gap-2 md:mb-4'>
                    {project.techStack.map((techName, idx) => {
                        const tech = techStack.find(t => t.name === techName) || { name: techName }
                        const Icon = tech.Icon
                        return (
                            <div key={idx} className='relative group/tooltip p-2 bg-[var(--hover-bg)] rounded-lg border border-transparent hover:border-[var(--border-color)] transition-all duration-200'>
                                {Icon ? (
                                    <Icon className={`w-5 h-5 ${tech.colorClass || ''}`} style={{ color: tech.color }} />
                                ) : (
                                    <span className="text-sm font-bold">{tech.name[0]}</span>
                                )}
                                <span className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-[var(--bg-main)] bg-[var(--text-main)] rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none'>
                                    {tech.name}
                                </span>
                            </div>
                        )
                    })}
                </div>
                <p className='text-[var(--subtext-color)] group-hover:text-[var(--text-color)] mb-4 duration-200 text-sm'>
                    {project.description}
                </p>
                <div className='flex gap-4'>
                    <div className='group/button flex justify-center items-center gap-2 border border-[var(--subtext-color)] hover:bg-[var(--hover-bg)] p-1 rounded-md'>
                        <img src="icons/internet.png" className='invert-[var(--invert-value)] opacity-80 group-hover/button:opacity-100 h-5 duration-200' alt="" />
                        <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className='text-[var(--subtext-color)] group-hover/button:text-[var(--text-color)] text-sm duration-200'>
                            Live Demo
                        </a>
                    </div>
                    <div className='group/button flex justify-center items-center gap-2 border border-[var(--subtext-color)] hover:bg-[var(--hover-bg)] p-1 rounded-md'>
                        <img src="icons/github.png" className='invert-[var(--invert-value)] h-5' alt="" />
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className='text-[var(--subtext-color)] group-hover/button:text-[var(--text-color)] text-sm duration-200'>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Projects = () => {
    const [showAll, setShowAll] = useState(false)

    const visibleProjects = showAll ? projects : projects.slice(0, VISIBLE_COUNT)
    const hasMore = projects.length > VISIBLE_COUNT

    return (
        <div className='flex flex-col items-center gap-6 md:w-full w-3/4'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
                {visibleProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

            {hasMore && (
                <button
                    onClick={() => setShowAll(prev => !prev)}
                    className='flex items-center gap-2 px-5 py-2 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--subtext-color)] hover:text-[var(--text-color)] hover:bg-[var(--hover-bg)] transition-all duration-200 text-sm font-medium'
                >
                    {showAll ? 'Show Less' : `+${projects.length - VISIBLE_COUNT} More Projects`}
                    {showAll ? <ChevronUp className='w-4 h-4' /> : <ChevronDown className='w-4 h-4' />}
                </button>
            )}

        </div>
    )
}

export default Projects