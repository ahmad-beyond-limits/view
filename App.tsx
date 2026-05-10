import React, { useState, useEffect } from 'react';
import { ProfileSidebar } from './components/ProfileSidebar';
import { Navbar } from './components/Navbar';
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

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('projects');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'experience', 'research', 'certifications', 'tools', 'education', 'achievements', 'languages', 'thoughts', 'contact'];
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
    <div className="min-h-screen flex flex-col lg:flex-row max-w-[1400px] mx-auto px-4 lg:px-12 py-8 gap-8 lg:gap-16 w-full overflow-hidden lg:overflow-visible">
      {/* Fixed Sidebar for desktop, Static for mobile */}
      <aside className="w-full lg:w-[320px] lg:sticky lg:top-8 h-fit z-40">
        <ProfileSidebar />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 w-full space-y-32 pb-24 relative">
        <Navbar activeSection={activeSection} />

        <section id="projects" className="scroll-mt-32 pt-20">
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

        {/* <section id="thoughts" className="scroll-mt-32">
          <DesignThoughts />
        </section> */}

        <section id="contact" className="scroll-mt-32">
          <ContactForm />
        </section>
      </main>
    </div>
  );
};

export default App;
