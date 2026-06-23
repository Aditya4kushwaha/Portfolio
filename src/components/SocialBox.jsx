import React from 'react'

export const SocialBox = ({ image, Icon, name, link, invert }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className='group flex items-center justify-center gap-3 font-outfit font-black uppercase text-xs md:text-sm tracking-wider border-[3px] border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-[var(--accent-neon)] hover:text-black p-3 px-5 rounded-none brutalist-shadow-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-100 cursor-pointer text-[var(--text-main)]'
    >
      {Icon ? (
        <Icon className="h-5 w-5 transition-all duration-100 group-hover:scale-115 text-[var(--text-main)] group-hover:text-black" />
      ) : (
        <img 
          src={`icons/${image}`} 
          alt={name} 
          className={`h-5 w-auto object-contain transition-all duration-100 group-hover:scale-115 ${invert ? "invert-[var(--invert-value)] group-hover:invert-0" : ""}`} 
        />
      )}
      <span>{name}</span>
    </a>
  )
}


