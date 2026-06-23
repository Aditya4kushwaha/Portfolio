import './App.css'
import { SiX } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { IoDocumentText } from 'react-icons/io5'
import { NavBar } from './components/NavBar'
import { Marquee } from './components/Marquee'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { TypingEffect } from './components/TypingEffect'
import { useState, useEffect } from 'react'
import { SkillBlocks } from './components/SkillBlocks'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { Projects } from './components/Projects'
import { SocialBox } from './components/SocialBox'

let experience = [{
    'position': "Frontend Developer Intern",
    'organization': "Workafy (Remote)",
    'duration': "Aug 2025 – Jan 2026",
    'details': [
        "Developed responsive UI for a freelancer marketplace with 50K+ active users using ReactJS, Tailwind CSS, and TypeScript.",
        "Improved platform scalability and user experience through reusable components and frontend optimization.",
        "Collaborated with backend and design teams on feature delivery and performance improvements."
    ]
}]


let education = [{
    'degree': "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    'college': "Indian Institute of Information Technology, Bhagalpur",
    'duration': "2023 – 2027"
},
{
  'degree': "CBSE Senior Secondary (Class XII)",
  'college': "Smt. Banni Devi Senior Secondary School, Kushinagar",
  'duration': "2020 - 2022"
}]

const RotatingStamp = () => {
  // Generate coordinates for a 12-pointed star centered at (50, 50)
  const starPoints = Array.from({ length: 24 }).map((_, i) => {
    const angle = (i * 15 * Math.PI) / 180;
    const r = i % 2 === 0 ? 14 : 8;
    return `${(50 + r * Math.cos(angle)).toFixed(1)}, ${(50 + r * Math.sin(angle)).toFixed(1)}`;
  }).join(' ');

  return (
    <div className='relative w-36 h-36 md:w-44 md:h-44 flex items-center justify-center shrink-0 self-center md:self-auto m-2 select-none'>
      <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow-custom overflow-visible">
        <path 
          id="circlePath" 
          d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" 
          fill="transparent" 
        />
        <text className="font-outfit font-black text-[6.8px] uppercase fill-[var(--text-main)] tracking-wider">
          <textPath href="#circlePath">
            AI + FULL STACK • COMPETITIVE PROGRAMMER • WEB DEV •
          </textPath>
        </text>
        <polygon 
          points={starPoints} 
          className="fill-[var(--accent-neon)] stroke-[var(--border-color)] stroke-[2.5px] dark:fill-[var(--accent-neon)]" 
        />
      </svg>
    </div>
  );
};

function App() {
  const [skillsState, setSkillsState] = useState("blocks");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if(isDark) {
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className='flex flex-col min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-200'>
      <Analytics />
      <SpeedInsights />
      
      <NavBar setIsDark={setIsDark} isDark={isDark} />

      <main className='max-w-4xl mx-auto px-4 md:px-8 flex flex-col items-center w-full py-12 md:py-16'>
        
        {/* Intro Section */}
        <section className='w-full flex flex-col items-start mb-16'>
          {/* Welcome Box */}
          <div className='inline-block bg-[var(--accent-neon)] border-[3px] border-[var(--border-color)] px-5 py-2 brutalist-shadow-sm font-outfit font-black uppercase text-sm tracking-widest text-black mb-8 hover:bg-[var(--accent-purple)] hover:text-white hover:border-[var(--border-color)] transition-all duration-150 cursor-default select-none'>
            WELCOME
          </div>


          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-start w-full'>
            <div className='md:col-span-2 flex flex-col'>
              <h1 className='text-4xl md:text-6xl font-outfit font-black uppercase tracking-tight text-[var(--text-main)] mb-3 leading-none'>
                Aditya Kushwaha
              </h1>
              
              <div className='text-base md:text-lg flex flex-wrap items-center gap-2 mb-6 font-outfit font-bold'>
                <span className='text-[var(--subtext-color)]'>Kushinagar, UP |</span>
                <TypingEffect />
              </div>

<div className='font-outfit text-base md:text-lg text-[var(--text-color)] font-medium leading-relaxed space-y-4'>
  <p>
    I am a <span className='bg-[var(--accent-neon)] text-black px-2 py-0.5 font-extrabold uppercase tracking-wide border-2 border-black inline-block rounded-none'>Full Stack + Gen AI Developer</span> focused on building modern web applications and AI-powered experiences.
  </p>

<p>
  I build scalable web and AI applications using <span className='border-b-2 border-dashed border-[var(--accent-purple)] font-bold text-[var(--text-main)]'>React, Next.js, Node.js, FastAPI, LangChain, LangGraph, RAG, AI Agents, MCP, and modern LLM APIs</span>.
</p>

</div>
            </div>

            <div className='flex flex-col items-center justify-center gap-6 mt-6 md:mt-0'>
              <div className='relative group'>
                <div className='absolute -inset-1.5 bg-[var(--accent-purple)] border-[3px] border-[var(--border-color)] rounded-full'></div>
                <img 
                  src="/newpf.png" 
                  alt="Aditya Kushwaha" 
                  className='relative w-44 h-44 md:w-52 md:h-52 border-[3px] border-[var(--border-color)] object-cover rounded-full' 
                />
              </div>
              {/* <RotatingStamp /> */}
            </div>

          </div>
        </section>

        {/* Technologies & Tools Section */}
        <section className='w-full mt-16 flex flex-col items-center'>
          <div className='relative inline-block mb-10'>
            <div className='absolute -inset-1 bg-[var(--accent-purple)] border-[3px] border-[var(--border-color)]'></div>
            <h2 className='relative px-6 py-3 bg-[var(--accent-neon)] border-[3px] border-[var(--border-color)] text-black font-outfit font-black text-xl md:text-2xl uppercase tracking-wider'>
              Technologies & Tools
            </h2>
          </div>
          
          <SkillBlocks />
          <Marquee />
        </section>

        {/* Experience Section */}
        <section id='exp' className='w-full mt-24 flex flex-col items-center'>
          <div className='relative inline-block mb-10'>
            <div className='absolute -inset-1 bg-[var(--accent-purple)] border-[3px] border-[var(--border-color)]'></div>
            <h2 className='relative px-6 py-3 bg-[var(--accent-neon)] border-[3px] border-[var(--border-color)] text-black font-outfit font-black text-xl md:text-2xl uppercase tracking-wider'>
              Experience
            </h2>
          </div>
          
          <div className='w-full space-y-8 px-4'>
            {experience.map((exp, index) => (
              <Experience key={index} prop={exp} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects' className='w-full mt-24 flex flex-col items-center'>
          <div className='relative inline-block mb-10'>
            <div className='absolute -inset-1 bg-[var(--accent-purple)] border-[3px] border-[var(--border-color)]'></div>
            <h2 className='relative px-6 py-3 bg-[var(--accent-neon)] border-[3px] border-[var(--border-color)] text-black font-outfit font-black text-xl md:text-2xl uppercase tracking-wider'>
              Projects
            </h2>
          </div>
          
          <Projects />
        </section>

        {/* Education Section */}
        <section className='w-full mt-24 flex flex-col items-center'>
          <div className='relative inline-block mb-10'>
            <div className='absolute -inset-1 bg-[var(--accent-purple)] border-[3px] border-[var(--border-color)]'></div>
            <h2 className='relative px-6 py-3 bg-[var(--accent-neon)] border-[3px] border-[var(--border-color)] text-black font-outfit font-black text-xl md:text-2xl uppercase tracking-wider'>
              Education
            </h2>
          </div>
          
          <div className='w-full space-y-6 px-4'>
            {education.map((edu, index) => (
              <Education key={index} prop={edu}/>
            ))}
          </div>
        </section>

        {/* Let's Connect Section */}
        <section id='connect' className='w-full mt-24 flex flex-col items-center'>
          <div className='relative inline-block mb-4'>
            <div className='absolute -inset-1 bg-[var(--accent-purple)] border-[3px] border-[var(--border-color)]'></div>
            <h2 className='relative px-6 py-3 bg-[var(--accent-neon)] border-[3px] border-[var(--border-color)] text-black font-outfit font-black text-xl md:text-2xl uppercase tracking-wider'>
              Let's Connect
            </h2>
          </div>
          
          <p className='text-[var(--text-color)] text-sm md:text-base font-outfit font-medium mb-8 text-center max-w-md px-4'>
            Feel free to reach out for collaborations, full-time opportunities, or just a friendly developer chat.
          </p>
          
          <div className='flex flex-wrap justify-center gap-6 px-4'>
            <SocialBox name="GitHub" image="github.png" invert={true} link="https://github.com/Aditya4kushwaha" />
            <SocialBox name="LinkedIn" image="linkedin.png" invert={true} link="https://linkedin.com/in/aadi2005" />
            <SocialBox name="Twitter" Icon={SiX} link="https://x.com/adityakush_04" />
            <SocialBox name="Email" Icon={MdEmail} link="mailto:adityakushwahaksn@gmail.com" />
            <SocialBox name="LeetCode" image="leetcode.png" invert={false} link="https://leetcode.com/u/cpier_69/" />
            <SocialBox name="CodeForces" image="codeforces.webp" invert={false} link="https://codeforces.com/profile/aadi_kush" />
            <SocialBox name="CodeChef" image="codechef.webp" invert={true} link="https://www.codechef.com/users/aadi_kush" />
          </div>

        </section>

      </main>

      <Footer/>
    </div>
  )
}

export default App

