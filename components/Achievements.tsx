import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

export const Achievements: React.FC = () => {
    const achievements = [
        {
            id: 1,
            title: "Meta Hacker Cup",
            organization: "Meta",
            date: "2025",
            description: "Advanced to Round 3, ranking among the top 0.01% of 5000+ global participants on AI track."
        },
        {
            id: 2,
            title: "CS50 Puzzle Day Winner",
            organization: "Harvard University",
            date: "2024",
            description: "Demonstrated superior logic, critical thinking, and algorithmic problem-solving skills."
        },
        {
            id: 3,
            title: "PEEF Merit Scholarship",
            organization: "Punjab Govt.",
            date: "2021",
            description: "Recipient of the prestigious scholarship, awarded for exceptional academic performance."
        },
        {
            id: 4,
            title: "Berkeley CALICO",
            organization: "UC Berkeley",
            date: "2025",
            description: "Ranked in the top 49% of participants in Pakistan."
        },
        {
            id: 5,
            title: "Hack Nation",
            organization: "Google & OpenAI & MIT",
            date: "2024",
            description: "Participant in the global hackathon supported by Google, OpenAI, and MIT."
        },
        {
            id: 6,
            title: "DeepMind Gemini 3 Hack",
            organization: "Google DeepMind",
            date: "2024",
            description: "Competed in the Gemini 3 Hackathon leveraging advanced AI models."
        }
    ];

    return (
        <div>
            <SectionHeader 
                overline="RECOGNITION"
                titlePart1="Solving problems in"
                titlePart2="real-world arenas."
                description="A record of my performance in global hackathons and academic competitions, proving my ability to deliver under pressure."
            />

            <div className="w-full flex flex-col border-t border-theme-border">
                {achievements.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <div className="group relative flex flex-col md:flex-row w-full border-b border-theme-border-faint py-12 md:py-16 transition-all duration-500 hover:bg-theme-accent-soft items-center px-4 md:px-8 border-l-0 hover:border-l-8 hover:border-theme-accent">
                            {/* Col 1: Label */}
                            <div className="w-full md:w-1/6 flex-shrink-0 mb-4 md:mb-0">
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-theme-muted group-hover:text-theme-accent transition-colors">
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
                                <div className="text-sm md:text-base text-theme-muted group-hover:text-theme-text transition-colors leading-relaxed">
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
