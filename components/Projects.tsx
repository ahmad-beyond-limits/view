import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectModal } from './ProjectModal';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Load all JSON projects dynamically
  const projectModules = import.meta.glob('../content/projects/*.json', { eager: true });
  const allProjects = Object.values(projectModules).map((m: any) => m.default || m);

  // Sort projects if needed, or just take them all
  const sortedProjects = [...allProjects].sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <div className="mb-32">
      <SectionHeader 
        overline="SELECTED WORK"
        titlePart1="Data doesn't speak."
        titlePart2="I make it articulate."
        description="I build technical systems that transform raw numbers into clear, readable stories for decision-makers."
      />

      <div className="w-full flex flex-col border-t border-theme-border">
        {sortedProjects.map((p, index) => {
          const isClickable = p.clickable !== false;
          const Component = isClickable ? 'div' : (p.clickable === false ? 'div' : 'a');
          const props = isClickable
            ? { onClick: () => setSelectedProject(p) }
            : (p.clickable === false ? {} : { href: p.link || '#', target: p.link ? "_blank" : undefined, rel: p.link ? "noopener noreferrer" : undefined });

          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 100, filter: "blur(20px)", scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full"
            >
              <Component
                {...props}
                className={`group relative flex flex-col md:flex-row w-full border-b border-theme-border-faint py-16 md:py-24 transition-all ${isClickable ? 'cursor-pointer' : (p.clickable === false ? 'cursor-default opacity-80' : 'cursor-pointer')} block items-start`}
              >
                {/* Column 1: Massive Number */}
                <div className="w-full md:w-1/3 flex-shrink-0 mb-8 md:mb-0 flex items-center md:items-start">
                  <span className="font-['Playfair_Display'] text-[120px] md:text-[220px] leading-none text-theme-faint group-hover:text-theme-faint-hover transition-colors duration-500 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                {/* Column 2: Content */}
                <div className="w-full md:w-2/3 flex flex-col justify-center relative h-full">
                  <div className="mb-6 flex flex-wrap gap-2">
                     {p.tags?.map((tag: string) => (
                       <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 bg-theme-accent-soft text-theme-accent rounded-full border border-theme-border">
                         {tag}
                       </span>
                     ))}
                  </div>
                  
                  <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-5xl text-theme-text group-hover:italic transition-all duration-500 mb-4 max-w-4xl pr-8">
                    {p.title}
                  </h3>
                  
                  <p className="text-base md:text-lg text-theme-muted group-hover:text-theme-text transition-colors duration-500 max-w-2xl font-medium">
                    {p.type}
                  </p>

                  <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 hidden md:flex w-16 h-16 rounded-full border border-theme-border items-center justify-center text-theme-text group-hover:bg-theme-accent group-hover:border-theme-accent group-hover:text-theme-bg">
                    <ArrowUpRight size={28} />
                  </div>
                </div>
              </Component>
            </motion.div>
          );
        })}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
