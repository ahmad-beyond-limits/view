import React from 'react';
import { MoveUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      id: '1',
      company: 'Stanford University',
      role: 'CiP Section Leader (Remote)',
      period: 'March 2025 – May 2025',
      description: [
        'Lead weekly section classes for undergraduate computer science students.',
        'Guide students through complex problem-solving activities and programming exercises.',
        'Grade assignments and projects with constructive feedback.',
        'Facilitate code reviews to improve students\' programming skills.',
        'Explain technical concepts clearly to students with diverse backgrounds.',
        'Develop leadership and mentorship abilities in an academic setting.',
        'Boosted my soft skills like Stakeholder Communication and critical thinking as making fast decisions in no time.'
      ]
    },
    {
      id: '2',
      company: 'LabLab / Devpost',
      role: 'Hackathons Participant (Remote, Worldwide)',
      period: 'June 2024 – Present',
      description: [
        'Worked in fast-paced, international teams, coordinating tasks and ensuring collaboration across diverse skill sets.',
        'Practiced clear and concise communication to align teammates quickly and avoid bottlenecks under tight deadlines.',
        'Delivered multiple projects within 24–72 hour sprints, balancing competing priorities and ensuring timely completion.',
        'Strengthened problem-solving resilience by adapting to shifting requirements and constraints in real time.',
        'Contributed to a culture of team synergy, accountability, and constructive feedback, enabling smoother execution under pressure.',
        'Gained experience in global collaboration, working with peers across time zones and cultural contexts.'
      ]
    },
  ];

  return (
    <div>
      <h2 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase mb-12">
        EXPERIENCE
      </h2>

      <div className="w-full flex flex-col border-t border-theme-border">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 100, filter: "blur(20px)", scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full"
          >
            <div className="group relative flex flex-col md:flex-row w-full border-b border-theme-border-faint py-16 md:py-24 transition-all cursor-pointer items-start">
              <div className="w-full md:w-1/3 flex-shrink-0 mb-8 md:mb-0 flex items-center md:items-start">
                <span className="font-['Playfair_Display'] text-[120px] md:text-[220px] leading-none text-theme-faint group-hover:text-theme-faint-hover transition-colors duration-500 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              
              <div className="w-full md:w-2/3 flex flex-col justify-center relative h-full">
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 bg-theme-accent-soft text-theme-accent rounded-full border border-theme-border">
                    {exp.period}
                  </span>
                </div>
                
                <h3 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-7xl text-theme-text group-hover:italic transition-all duration-500 mb-4 max-w-4xl pr-8">
                  {exp.company}
                </h3>
                
                <h4 className="text-xl md:text-2xl text-theme-accent font-bold mb-8">
                  {exp.role}
                </h4>

                <ul className="space-y-4 list-none text-theme-muted leading-relaxed text-lg max-w-3xl">
                  {exp.description.map((item, i) => (
                    <li key={i} className="relative pl-6">
                      <span className="absolute left-0 top-3 w-1.5 h-1.5 rounded-full bg-theme-accent opacity-50 group-hover:opacity-100 transition-colors"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 hidden md:flex w-16 h-16 rounded-full border border-theme-border items-center justify-center text-theme-text group-hover:bg-theme-accent group-hover:border-theme-accent group-hover:text-theme-bg">
                  <MoveUpRight size={28} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
