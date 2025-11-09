import { useState, useEffect, useRef } from "react";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer2 from "./components/Footer2"; // ✅ Imported here

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    });
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close mobile menu
    }
  };

  return (
    <div className="App bg-black text-white min-h-screen">
      {/* Navbar */}
      <nav className="bg-black shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Clickable Time */}
            <div
              className="text-lg font-mono text-blue-400 cursor-pointer hover:text-blue-500 transition-colors duration-300"
              onClick={() => scrollToSection(homeRef)}
            >
              {formatTime(currentTime)}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["Home", "Projects", "Skills", "Contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    if (section === "Home") scrollToSection(homeRef);
                    if (section === "Projects") scrollToSection(projectsRef);
                    if (section === "Skills") scrollToSection(skillsRef);
                    if (section === "Contact") scrollToSection(contactRef);
                  }}
                  className="cursor-pointer text-white hover:text-blue-500 transition-colors duration-300 font-medium"
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white focus:outline-none"
              >
                {menuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden flex flex-col bg-gray-900 mt-2 rounded-lg p-4 space-y-3">
              {["Home", "Projects", "Skills", "Contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    if (section === "Home") scrollToSection(homeRef);
                    if (section === "Projects") scrollToSection(projectsRef);
                    if (section === "Skills") scrollToSection(skillsRef);
                    if (section === "Contact") scrollToSection(contactRef);
                  }}
                  className="text-white hover:text-blue-500 transition-colors duration-300 font-medium text-left"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Sections */}
      <main className="pt-16">
  <section ref={homeRef}>
  <Home scrollToContact={() => scrollToSection(contactRef)} />
</section>

        <section ref={projectsRef}>
          <Projects />
        </section>
        <section ref={skillsRef}>
          <Skills />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>

        {/* ✅ Footer2 Added Below Contact */}
        <Footer2 />
      </main>
    </div>
  );
}

export default App;
