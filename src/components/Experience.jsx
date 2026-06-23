import React from 'react'
import { ChevronDown, ChevronUp, UnfoldVertical, FoldVertical } from 'lucide-react'

export const Experience = ({ prop }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <div className='bg-[var(--card-bg)] border-[3px] border-[var(--border-color)] rounded-none brutalist-shadow hover:shadow-[7px_7px_0px_0px_var(--shadow-color)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150 p-5 md:p-6 w-full'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full'>
        <div className='flex gap-4 items-center'>
          {prop.image && (
            <img 
              src={`./exp/${prop.image}.jpg`} 
              className='h-12 w-12 border-2 border-[var(--border-color)] object-cover rounded-none' 
              alt="" 
            />
          )}
          <div className='flex flex-col'>
            <h3 className='text-lg md:text-xl text-[var(--text-main)] font-outfit font-black uppercase tracking-tight'>
              {prop.position}
            </h3>
            <p className='text-[var(--accent-purple)] font-outfit font-bold text-sm uppercase tracking-wider'>
              {prop.organization}
            </p>
          </div>
        </div>

        <div className='flex items-center gap-4 self-end sm:self-auto'>
          <span className='text-[var(--text-color)] text-xs md:text-sm font-extrabold uppercase tracking-wide bg-[var(--hover-bg)] border border-[var(--border-color)] px-2 py-1'>
            {prop.duration}
          </span>
          <button 
            className='w-9 h-9 flex items-center justify-center border-2 border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-[var(--accent-neon)] hover:text-black transition-all duration-100 cursor-pointer brutalist-shadow-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none'
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label="Toggle details"
          >
            {isExpanded ? (
              <FoldVertical size={16} className="stroke-[2.5]" />
            ) : (
              <UnfoldVertical size={16} className="stroke-[2.5]" />
            )}
          </button>
        </div>
      </div>

      {isExpanded && (
        <ul className='mt-6 border-t-2 border-dashed border-[var(--border-color)] pt-4 space-y-3 text-sm text-[var(--text-color)] font-outfit font-medium leading-relaxed'>
          {prop.details.map((detail, index) => (
            <li key={index} className='flex items-start gap-2'>
              <span className='text-[var(--accent-purple)] font-black text-md shrink-0 select-none'>✦</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

