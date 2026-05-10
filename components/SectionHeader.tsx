import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  overline: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ overline, titlePart1, titlePart2, description, light }) => {
  return (
    <div className="mb-24">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6 block ${light ? 'text-white/60' : 'text-theme-accent'}`}
      >
        {overline}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl lg:text-8xl font-['Playfair_Display'] leading-[1.1] md:leading-[1] tracking-tight mb-8"
      >
        <span className={`${light ? 'text-white/40' : 'text-theme-muted opacity-40'}`}>{titlePart1} </span>
        <span className={`italic ${light ? 'text-white' : 'text-theme-text'}`}>{titlePart2}</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className={`text-lg md:text-xl max-w-3xl leading-relaxed font-medium ${light ? 'text-white/70' : 'text-theme-muted'}`}
      >
        {description}
      </motion.p>
    </div>
  );
};
