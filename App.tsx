import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ExperienceSection } from './components/ExperienceSection';
import { ToolsGrid } from './components/ToolsGrid';
import { Education } from './components/Education';
import { DesignThoughts } from './components/DesignThoughts';
import { Research } from './components/Research';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Languages } from './components/Languages';
import { ContactForm } from './components/ContactForm';
import { ScrollSummary } from './components/ScrollSummary';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'experience', 'research', 'certifications', 'tools', 'education', 'achievements', 'languages', 'thoughts', 'contact'];
      const scrollPosition = window.scrollY + 150; // Slightly larger offset for smoother activation

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full flex flex-col min-h-screen">
      <Navbar activeSection={activeSection} />

      <main className="flex-1 w-full flex flex-col">
        <section id="home">
          <Hero />
        </section>

        <ScrollSummary />

        {/* Constrain the rest of the content */}
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-12 space-y-32 py-32">
          <section id="work" className="scroll-mt-32">
            <Projects />
          </section>

          <section id="experience" className="scroll-mt-32">
            <ExperienceSection />
          </section>

          <section id="research" className="scroll-mt-32">
            <Research />
          </section>

          <section id="certifications" className="scroll-mt-32">
            <Certifications />
          </section>

          <section id="tools" className="scroll-mt-32">
            <ToolsGrid />
          </section>

          <section id="education" className="scroll-mt-32">
            <Education />
          </section>

          <section id="achievements" className="scroll-mt-32">
            <Achievements />
          </section>

          <section id="languages" className="scroll-mt-32">
            <Languages />
          </section>

        </div>

        <ContactForm />
      </main>
    </div>
  );
};

export default App;
