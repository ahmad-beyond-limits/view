import React from 'react';
import { ArrowDownRight, Sparkles, PenTool, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="pt-20 lg:pt-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-theme-accent/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="relative mb-32 overflow-hidden z-10">
        {/* Background Scrolling Marquee */}
        <div className="flex whitespace-nowrap overflow-hidden select-none pointer-events-none absolute -top-10 -left-10 w-[150%] opacity-40">
          <div className="animate-marquee flex gap-20 py-4">
            <span className="text-8xl md:text-[220px] font-['Playfair_Display'] italic uppercase text-theme-faint">Researching</span>
            <span className="text-8xl md:text-[220px] font-['Playfair_Display'] italic uppercase text-theme-faint">Experiences</span>
            <span className="text-8xl md:text-[220px] font-['Playfair_Display'] italic uppercase text-theme-faint">Researching</span>
            <span className="text-8xl md:text-[220px] font-['Playfair_Display'] italic uppercase text-theme-faint">Experiences</span>
          </div>
        </div>

        <div className="relative z-10 pt-10 px-4 md:px-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-theme-bg/50 backdrop-blur-md border border-theme-border rounded-full mb-12 shadow-sm"
          >
            <Sparkles size={16} className="text-theme-accent animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-theme-text">Based in Punjab, Pakistan</span>
          </motion.div>

          <h2 className="text-6xl md:text-8xl lg:text-[150px] font-black leading-[0.9] tracking-tighter uppercase mb-16 flex flex-col items-start gap-0">
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-theme-text font-['Playfair_Display']"
            >
              PRODUCT
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Playfair_Display'] italic"
              style={{ WebkitTextStroke: '2px var(--text-color)', color: 'transparent' }}
            >
              RESEARCHER
            </motion.span>
          </h2>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-12 md:items-end justify-between"
          >
            <div className="flex-1"></div>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-theme-bg border border-theme-border group rounded-[3rem] p-10 flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px] cursor-pointer hover:bg-theme-border-faint transition-all text-theme-text shadow-sm hover:shadow-xl"
        >
          <div className="flex justify-between items-start">
            <div className="p-4 bg-theme-border-faint rounded-2xl group-hover:scale-110 group-hover:bg-theme-accent/10 transition-all">
              <Search size={32} className="text-theme-text group-hover:text-theme-accent transition-colors" />
            </div>
            <ArrowDownRight size={24} className="text-theme-muted group-hover:text-theme-text transition-colors" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-theme-muted mb-3 block">Service 01</span>
            <h4 className="text-3xl md:text-4xl font-extrabold uppercase leading-[1.1] tracking-tight font-['Playfair_Display']">Data Science <br />& Analytics</h4>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-theme-accent border border-theme-accent group rounded-[3rem] p-10 flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px] cursor-pointer hover:-translate-y-2 transition-all text-theme-bg shadow-2xl shadow-theme-accent/20"
        >
          <div className="flex justify-between items-start">
            <div className="p-4 bg-theme-bg/20 rounded-2xl group-hover:bg-theme-bg/30 transition-all">
              <PenTool size={32} />
            </div>
            <ArrowDownRight size={24} className="opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-theme-bg/60 mb-3 block">Service 02</span>
            <h4 className="text-3xl md:text-4xl font-extrabold uppercase leading-[1.1] tracking-tight font-['Playfair_Display'] text-theme-bg">Development <br />{`</>`}</h4>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
