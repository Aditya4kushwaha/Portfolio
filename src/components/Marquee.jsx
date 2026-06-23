import React from 'react'
import './Marquee.css'
import { techStack } from './SkillBlocks'

const marqueeSkills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Python", "FastAPI", "LangChain", "RAG", "PostgreSQL"
];



function Box({techName}) {
  const tech = techStack.find(t => t.name === techName) || { name: techName };
  const Icon = tech.Icon;
  
  return (
    <div className='flex justify-center items-center gap-2 px-5 py-2.5 border-[3px] border-[var(--border-color)] bg-[var(--card-bg)] brutalist-shadow-sm m-2 text-center group/box hover:bg-[var(--accent-neon)] hover:-translate-y-0.5 transition-all duration-150 shrink-0 cursor-default'>
        {Icon ? (
             <Icon className='h-5 w-5 group-hover/box:scale-110 transition-transform duration-150' style={{ color: tech.color }} />
        ) : null}
        <div className='text-[var(--text-main)] font-black text-sm uppercase tracking-wide'>{tech.name}</div>
    </div>
  )
}
export const Marquee = () => {
    return (
        <div className='group/marquee relative flex flex-row w-full overflow-hidden justify-start items-center py-4'>
        <div className='absolute top-0 left-0 h-full w-[80px] bg-gradient-to-r from-[var(--bg-main)] to-transparent z-10 pointer-events-none'></div>
        <div className='absolute top-0 right-0 h-full w-[80px] bg-gradient-to-l from-[var(--bg-main)] to-transparent z-10 pointer-events-none'></div>
            <div className='flex justify-start animate-marquee flex-row group-hover/marquee:[animation-play-state:paused] shrink-0'>
                {marqueeSkills.map((name, index) => (
                    <Box key={index} techName={name} />
                ))}
            </div>

            <div className='flex justify-start animate-marquee flex-row group-hover/marquee:[animation-play-state:paused] shrink-0'>
                {marqueeSkills.map((name, index) => (
                    <Box key={index} techName={name} />
                ))}
            </div>
            
            <div className='flex justify-start animate-marquee flex-row group-hover/marquee:[animation-play-state:paused] shrink-0'>
                {marqueeSkills.map((name, index) => (
                    <Box key={index} techName={name} />
                ))}
            </div>
        </div>
    )
}

