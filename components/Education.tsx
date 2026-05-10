import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

export const Education: React.FC = () => {
    return (
    <div>
      <SectionHeader 
        overline="FOUNDATIONS"
        titlePart1="Rooted in science,"
        titlePart2="driven by intent."
        description="My academic path in Data Science, providing the mathematical foundation for my engineering work."
      />

            <div className="w-full flex flex-col border-t border-theme-border">
                <motion.div
                    initial={{ opacity: 0, y: 100, filter: "blur(20px)", scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full"
                >
                    <div className="group relative flex flex-col md:flex-row w-full border-b border-theme-border-faint py-16 md:py-24 transition-all items-start">
                        <div className="w-full md:w-1/3 flex-shrink-0 mb-8 md:mb-0 flex items-center md:items-start">
                            <span className="font-['Playfair_Display'] text-[120px] md:text-[220px] leading-none text-theme-faint group-hover:text-theme-faint-hover transition-colors duration-500 select-none">
                                01
                            </span>
                        </div>
                        
                        <div className="w-full md:w-2/3 flex flex-col justify-center relative h-full">
                            <div className="mb-6 flex flex-wrap gap-2">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 bg-theme-accent-soft text-theme-accent rounded-full border border-theme-border">
                                    Oct 2021 - July 2025
                                </span>
                            </div>
                            
                            <h3 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-7xl text-theme-text group-hover:italic transition-all duration-500 mb-6 max-w-4xl pr-8">
                                Government College University
                            </h3>
                            
                            <p className="text-xl md:text-2xl text-theme-muted group-hover:text-theme-text transition-colors duration-500 max-w-2xl font-medium mb-8">
                                Bachelors of Science in Data Science<br/>
                                <span className="text-lg opacity-80">Faisalabad, Pakistan</span>
                            </p>

                            <div className="space-y-6 max-w-2xl">
                                <div>
                                    <span className="text-theme-accent font-bold uppercase tracking-widest text-xs mb-2 block">Concentrations</span>
                                    <p className="text-theme-text opacity-90">Data Science and Analytics</p>
                                </div>

                                <div>
                                    <span className="text-theme-accent font-bold uppercase tracking-widest text-xs mb-2 block">Related Coursework</span>
                                    <p className="text-theme-muted leading-relaxed text-sm">
                                        Computing in Python, Descriptive and Inferential Statistics in R, Machine Learning, Data Analysis, Mathematics, Artificial Intelligence, Data Visualization, Data Structures, Databases, Data warehousing and BI, Data Analysis using SQL.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
