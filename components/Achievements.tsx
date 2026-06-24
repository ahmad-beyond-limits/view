import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

export const Achievements: React.FC = () => {
    // Load achievements
    const achievementsData = import.meta.glob('../content/achievements/*.json', { eager: true });
    const achievements = Object.values(achievementsData).map((file: any) => file.default || file);
    achievements.sort((a, b) => (a.order || 0) - (b.order || 0));

    // Load header
    const headersData = import.meta.glob('../content/headers/achievements.json', { eager: true });
    const headerPath = Object.keys(headersData)[0];
    const header: any = headerPath ? (headersData[headerPath] as any).default || headersData[headerPath] : {
        overline: "RECOGNITION",
        titlePart1: "Solving problems in",
        titlePart2: "real-world arenas.",
        description: "A record of my performance in global hackathons and academic competitions, proving my ability to deliver under pressure."
    };

    return (
        <div>
            <SectionHeader 
                overline={header.overline}
                titlePart1={header.titlePart1}
                titlePart2={header.titlePart2}
                description={header.description}
            />

            <div className="w-full flex flex-col border-t border-theme-border">
                {achievements.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <div className="group relative flex flex-col md:flex-row w-full border-b border-theme-border-faint py-12 md:py-16 transition-all duration-500 items-center px-4 md:px-8">
                            {/* Col 1: Label */}
                            <div className="w-full md:w-1/6 flex-shrink-0 mb-4 md:mb-0">
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-theme-muted transition-colors">
                                    HONOR {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                            
                            {/* Col 2: Title */}
                            <div className="w-full md:w-3/6 mb-4 md:mb-0">
                                <h3 className="font-['Playfair_Display'] text-3xl md:text-5xl text-theme-text group-hover:text-theme-accent group-hover:italic transition-all duration-500">
                                    {item.title}
                                </h3>
                            </div>
                            
                            {/* Col 3: Details */}
                            <div className="w-full md:w-2/6">
                                <div className="text-sm md:text-base text-theme-muted transition-colors leading-relaxed">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="font-bold text-theme-text">{item.organization}</span>
                                        <span className="text-[10px] font-bold opacity-60">{item.date}</span>
                                    </div>
                                    <p className="opacity-80">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
