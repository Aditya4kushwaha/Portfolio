import React, { useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export const NavBar = ({ setIsDark, isDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='sticky top-0 left-0 w-full bg-[var(--card-bg)] border-b-[3px] border-[var(--border-color)] text-[var(--text-main)] font-outfit z-50 transition-colors duration-200'>
        <div className='max-w-4xl mx-auto flex justify-between items-center py-4 px-4 md:px-8'>
          <a href="#" className='font-outfit text-3xl font-black tracking-tighter hover:text-[var(--accent-purple)] duration-150'>
            ADITYA !
          </a>
          
          {/* Desktop Navigation */}
          <div className='flex items-center gap-6'>
            <div className='hidden md:flex gap-6 text-sm font-extrabold uppercase tracking-wider'>
              <a href='#exp' className='hover:text-[var(--accent-purple)] transition-colors duration-150 relative py-1 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--accent-purple)] hover:after:w-full after:transition-all after:duration-200'>
                Work
              </a>
              <a href='#projects' className='hover:text-[var(--accent-purple)] transition-colors duration-150 relative py-1 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--accent-purple)] hover:after:w-full after:transition-all after:duration-200'>
                Projects
              </a>
              <a href='#connect' className='hover:text-[var(--accent-purple)] transition-colors duration-150 relative py-1 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--accent-purple)] hover:after:w-full after:transition-all after:duration-200'>
                Connect
              </a>
              <a href='https://drive.google.com/file/d/1f9LpELVggZraAeybiZuNkT0DnW-N0fF9/view?usp=sharing' target="_blank" rel="noopener noreferrer" className='hover:text-[var(--accent-purple)] transition-colors duration-150 relative py-1 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--accent-purple)] hover:after:w-full after:transition-all after:duration-200'>
                Resume
              </a>
            </div>

            {/* Theme Toggle Button - styled brutalist */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-10 h-10 flex items-center justify-center border-2 border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-[var(--accent-neon)] hover:text-black transition-all duration-150 cursor-pointer text-[var(--text-main)] brutalist-shadow-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} className="stroke-[2.5]" /> : <Moon size={18} className="stroke-[2.5]" />}
            </button>

            {/* Hamburger Menu Button */}
            <button 
              className='md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center z-20 border-2 border-[var(--border-color)] p-1 bg-[var(--card-bg)] brutalist-shadow-sm hover:bg-[var(--accent-neon)] transition-all cursor-pointer'
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span 
                className={`block w-5 h-0.5 bg-[var(--text-main)] transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span 
                className={`block w-5 h-0.5 bg-[var(--text-main)] transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span 
                className={`block w-5 h-0.5 bg-[var(--text-main)] transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed top-18 left-0 w-full bg-[var(--card-bg)] border-b-4 border-[var(--border-color)] transition-all duration-300 z-40 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className='flex flex-col p-6 gap-4 text-md uppercase font-black tracking-wider text-[var(--text-main)]'>
          <a href='#exp'
            className='hover:text-[var(--accent-purple)] cursor-pointer py-1' 
            onClick={toggleMenu}
          >
            Work
          </a>
          <a href='#projects' 
            className='hover:text-[var(--accent-purple)] cursor-pointer py-1' 
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a href='#connect' 
            className='hover:text-[var(--accent-purple)] cursor-pointer py-1' 
            onClick={toggleMenu}
          >
            Connect
          </a>
          <a href='https://drive.google.com/file/d/1f9LpELVggZraAeybiZuNkT0DnW-N0fF9/view?usp=sharing' target="_blank" rel="noopener noreferrer"
            className='hover:text-[var(--accent-purple)] cursor-pointer py-1' 
            onClick={toggleMenu}
          >
            Resume
          </a>
        </div>
      </div>

    </>
  )
}

