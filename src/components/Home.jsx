import pf_pic from "../assets/profile.jpg";

function Home({ scrollToContact }) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 sm:px-8 py-12 sm:py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-transparent opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 sm:mb-6">
            Hi I'm <span className="text-blue-500">Aditya</span>
          </h1>

          {/* Tech Stack Line */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-xl leading-relaxed flex flex-wrap justify-center md:justify-start items-center gap-2">
            I build modern web applications using
            {/* React */}
            <span className="bg-gray-800 px-3 py-1 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="w-4 h-4"
              />
              React
            </span>
            ,{/* Next.js */}
            <span className="bg-gray-800 px-3 py-1 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                alt="Next.js"
                className="w-4 h-4 invert"
              />
              Next.js
            </span>
            and
            {/* PostgreSQL */}
            <span className="bg-gray-800 px-3 py-1 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                alt="PostgreSQL"
                className="w-4 h-4"
              />
              PostgreSQL
            </span>.
            With a focus on <b>UI</b> and performance.
          </p>

          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-6">
            Full Stack <span className="text-blue-500">Developer</span>
          </h2>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="https://drive.google.com/file/d/1FXecm4PUM3K95jKcxm8iT5sTGzHGBGkZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold transition hover:bg-blue-700 text-sm sm:text-base"
            >
              Resume / CV
            </a>

            <button
              onClick={scrollToContact}
              className="cursor-pointer bg-white text-black px-5 py-3 rounded-xl font-semibold transition hover:bg-gray-200 text-sm sm:text-base"
            >
              Get in touch
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mt-10 md:mt-0">
          <img
            src={pf_pic}
            alt="Profile"
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
