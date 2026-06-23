import React from 'react'

export const Education = ({ prop }) => {
  return (
    <div className='bg-[var(--card-bg)] border-[3px] border-[var(--border-color)] rounded-none brutalist-shadow hover:shadow-[7px_7px_0px_0px_var(--shadow-color)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150 p-5 md:p-6 w-full'>
      <div className='flex flex-col gap-2'>
        <h3 className='font-outfit text-base font-black uppercase tracking-tight text-[var(--text-main)] md:text-lg'>
          {prop.college}
        </h3>
        <div className='flex flex-wrap items-baseline justify-between gap-4'>
          <p className='text-sm font-outfit font-medium text-[var(--text-color)]'>
            {prop.degree}
          </p>
          <span className='shrink-0 text-xs md:text-sm font-outfit font-extrabold uppercase tracking-wide bg-[var(--hover-bg)] border border-[var(--border-color)] px-2.5 py-1 text-[var(--text-main)]'>
            {prop.duration}
          </span>
        </div>
      </div>
    </div>
  )
}
export default Education;

