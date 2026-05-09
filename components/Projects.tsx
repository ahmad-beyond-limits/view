import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Load all JSON projects dynamically from Decap CMS output
  const projectModules = import.meta.glob('../content/projects/*.json', { eager: true });
  const allProjects = Object.values(projectModules).map((m: any) => m.default || m);

  const designProjects = allProjects.filter((p: any) => p.category === 'Design Works');
  const devProjects = allProjects.filter((p: any) => p.category === 'Development Work');
  const dataProjects = allProjects.filter((p: any) => p.category === 'Data Science & Analytics');

  const ProjectSection =  ({ title, outlinedTitle, projects, isSticky = false, onProjectClick }: { title: string, outlinedTitle?: string, projects: any[], isSticky?: boolean, onProjectClick?: (p: any) => void }) => (
    <div className="mb-32">
      <div className="flex items-end justify-between mb-16">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
          {title} {outlinedTitle && <br />}
          {outlinedTitle && <span className="text-outline">{outlinedTitle}</span>}
        </h2>
      </div>

      <div className="space-y-6">
        {projects.map((p, index) => {
          const isClickable = !!onProjectClick && p.clickable !== false;
          const Component = isClickable ? 'div' : (p.clickable === false ? 'div' : 'a');
          const props = isClickable
            ? { onClick: () => onProjectClick(p) }
            : (p.clickable === false ? {} : { href: p.link || '#', target: p.link ? "_blank" : undefined, rel: p.link ? "noopener noreferrer" : undefined });

          return (
            <Component
              key={p.id}
              {...props}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-[#111] hover:bg-[#151515] transition-all ${isClickable ? 'cursor-pointer' : (p.clickable === false ? 'cursor-default opacity-80' : 'cursor-pointer')} p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center border border-white/5 hover:border-white/10 ${isSticky ? 'sticky' : ''} block`}
              style={{
                top: isSticky ? `${index * 4 + 8}rem` : undefined,
                zIndex: index
              }}
            >
              <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                  {p.tags.map((tag: string) => (
                    <span key={tag} className="text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-white/5 border border-white/5 rounded-full text-neutral-500">{tag}</span>
                  ))}
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 group-hover:text-[#FF5C00] transition-colors">
                  {p.title}
                </h3>
                <p className="text-neutral-500 font-bold uppercase text-xs tracking-[0.3em]">{p.type}</p>
              </div>

              <div className="w-16 h-16 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-600 group-hover:bg-[#FF5C00] group-hover:text-white group-hover:border-[#FF5C00] transition-all self-center md:self-auto">
                <ArrowUpRight size={28} />
              </div>
            </Component>
          );
        })}
      </div>
    </div >
  );

  return (
    <div>
      <ProjectSection
        title="DATA SCIENCE"
        outlinedTitle="& ANALYTICS"
        projects={dataProjects}
        isSticky={true}
      />
      <ProjectSection
        title="DESIGN"
        outlinedTitle="WORKS"
        projects={designProjects}
        onProjectClick={setSelectedProject}
        isSticky={true}
      />
      <ProjectSection
        title="DEVELOPMENT"
        outlinedTitle="WORK"
        projects={devProjects}
        onProjectClick={setSelectedProject}
        isSticky={true}
      />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
