import React from 'react';
import profileImage from '../assets/image.png';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#0812F9] overflow-hidden flex flex-col justify-center font-['Plus_Jakarta_Sans']">
      {/* Cloud / Gradient Effects */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-white opacity-5 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-white opacity-10 rounded-full blur-[200px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300 opacity-20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-8 flex flex-col min-h-screen">
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col justify-center mt-12 md:mt-20">
          {/* Overline */}
          <div className="mb-12">
            <span className="text-white/80 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
              Analytics Engineer
            </span>
          </div>

          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-16 xl:gap-8">
            
            {/* Typography */}
            <div className="flex-1 w-full relative z-20">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-['Playfair_Display'] text-white leading-[1.3] md:leading-[1.3] tracking-tight max-w-4xl">
                Your data <span className="italic text-blue-200">can't</span> grow your business. <br />
                But the <span className="italic text-blue-200">right</span> decisions can — and it starts with asking better questions.
              </h1>

              <div className="mt-16 md:mt-24 flex flex-col md:flex-row items-start md:items-end justify-between border-t border-white/20 pt-8 max-w-4xl relative z-20">
                <p className="text-white/90 text-sm md:text-base max-w-[400px] font-medium leading-relaxed mb-8 md:mb-0">
                  I build end-to-end data pipelines and actionable dashboards that help organizations make confident, data-driven decisions.
                </p>
              </div>
            </div>

            {/* Profile Image Integration */}
            <div className="relative w-full max-w-[400px] xl:max-w-[450px] shrink-0 group mx-auto xl:mx-0 z-10 xl:-mt-12">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] border border-white/20 bg-[#f5f5f5] shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="MUHAMMAD AHMAD (ahmad-beyond-limits)" 
                  className="w-full h-full object-cover grayscale brightness-110 group-hover:scale-105 transition-transform duration-700 relative z-10"
                />
              </div>
              
              {/* Explore Circular Button */}
              <a href="#projects" className="absolute -bottom-8 -left-8 md:-left-12 w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/30 bg-[#0812F9]/80 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer shadow-2xl z-30">
                <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-white/40 flex items-center justify-center animate-[spin_10s_linear_infinite]"></div>
                <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.1em] text-center px-4 relative z-10">SEE MY<br/>WORK</span>
              </a>
            </div>

          </div>
        </div>

        {/* Footer info inside Hero */}
        <div className="mt-auto pt-20 flex flex-col md:flex-row justify-between items-start md:items-end text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase gap-6">
          <div className="flex flex-col gap-1.5">
            <span>Lahore, Pakistan</span>
            <span className="text-white/40 normal-case tracking-normal text-xs font-medium">@ahmad-beyond-limits</span>
          </div>
          <div className="flex gap-8 items-center">
            <a href="https://github.com/ahmad-beyond-limits" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub Profile">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/ahmad-beyond-limits/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn Profile">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
