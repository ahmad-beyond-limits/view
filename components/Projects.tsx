
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectModal } from './ProjectModal';
import vf1 from '../assets/VF-1.png';
import vf2 from '../assets/VF-2.png';
import vf3 from '../assets/VF-3.png';
import renalSenseImg from '../assets/RenalSense.png';
import vg1 from '../assets/VG-1.png';
import vg2 from '../assets/VG-2.png';
import vg3 from '../assets/VG-3.png';
import lumina1 from '../assets/Lumina_1.png';
import lumina2 from '../assets/Lumina_2.png';
import comingSoon from '../assets/coming_soon.png';
import aether from '../assets/aether.png';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const designProjects = [
    {
      id: 'lumina-coming-soon',
      title: 'AETHER $ VOID UI/UX',
      type: 'UI Design',
      tags: ['Figma', 'UI/UX'],
      image: aether,
      images: [aether],
      displayImage: aether,
      description: 'Lumina is hypothetical video generation platform for which i have created two graphics using gemini nano banana.',
      clickable: true,
      figmaLink: 'https://www.figma.com/design/Xhgi8iDu2aS6abnCd2Gu8y/aether---void?node-id=64-478&t=uBNpK98utjoQY4Rc-1'
    },
    {
      id: 'lumina-graphics',
      title: 'AI Graphics designing',
      type: 'Graphic Design',
      tags: ['Gemini', 'Graphics', 'AI'],
      image: lumina1,
      images: [lumina1],
      description: 'Lumina is hypothetical video generation platform for which i have created two graphics using gemini nano banana.'
    },
    {
      id: 'lumina-visuals',
      title: 'Lumina Visuals',
      type: 'Graphic Design',
      tags: ['Graphics', 'AI'],
      image: lumina2,
      description: 'Design for Lumina platform.',
      clickable: true
    }
  ];

  const infoProjects = [
    {
      id: '2',
      title: 'Echo Labs',
      type: 'Visual Identity',
      tags: ['UI Design', 'App'],
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
      images: [
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800', // Tech Hub
        'https://images.unsplash.com/photo-1596778402284-8398c7b09521?auto=format&fit=crop&q=80&w=800', // App Interface
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800', // Dashboard Dark
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', // Analytics Graph
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'  // Data Screen
      ],
      figmaLink: 'https://www.figma.com', // Placeholder
      description: 'Visual identity system and user interface design for a next-generation tech startup.'
    }
  ];

  const devProjects = [
    {
      id: '4',
      title: 'Visual Forensic',
      type: 'AI Analysis Tool',
      tags: ['Gemini', 'Multi-Agent', 'Heatmaps'],
      image: vf1,
      images: [vf1, vf2, vf3],
      githubLink: 'https://lead-with-data.github.io/Visual-Forensics/',
      description: 'AI Gemini-based multi-agent council which look att interface and make a detailed report on heatmaps AB testing and other.'
    },
    {
      id: '5',
      title: 'Renal Sense',
      type: 'Healthcare AI Platform',
      tags: ['GenAI', 'RAG', 'Healthcare'],
      image: renalSenseImg,
      images: [renalSenseImg],
      githubLink: 'https://github.com/ahmad-bsds/RenalSense',
      description: 'Developed Renal Sense, an AI-powered platform for kidney health monitoring and patient support. Integrated a generative AI chatbot for personalized health insights.'
    },
    {
      id: '6',
      title: 'VisionGuard',
      type: 'Health & Productivity Tool',
      tags: ['Health', 'Automation', 'Analytics'],
      image: vg1,
      images: [vg1, vg2, vg3],
      githubLink: 'https://github.com/lead-with-data/VisionGuard-',
      description: 'A project which traces your screentime and at every 20 minutes it adds 20 second screen filter to look away for eyes health, also gives you the insights.'
    }
  ];

  const dataProjects = [
    {
      id: '2a',
      title: 'Olist Retail & E-commerce',
      type: 'Growth Analytics',
      tags: ['Python', 'SQL', 'Power BI'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/ahmad-bsds/OlistAnalytics'
    },
    {
      id: '2b',
      title: 'Marketing Analytics Dashboard',
      type: 'BI & Visualization',
      tags: ['Excel', 'Segmentation'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/ahmad-bsds/MarketingAnalyticsExcel'
    },
    {
      id: '2c',
      title: 'Customers Segmentation',
      type: 'Unsupervised Learning',
      tags: ['Python', 'Clustering', 'RFM'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/ahmad-bsds/CustomerSegmentation'
    },
    {
      id: '2d',
      title: 'ToyGPT',
      type: 'Deep Learning',
      tags: ['PyTorch', 'Transformer', 'LLM'],
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/ahmad-bsds/toygpt'
    }
  ];

  const ProjectSection = ({ title, outlinedTitle, projects, isSticky = false, onProjectClick }: { title: string, outlinedTitle?: string, projects: any[], isSticky?: boolean, onProjectClick?: (p: any) => void }) => (
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
