import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
            description: "Demonstrated superior logic, critical thinking, and algorithmic problem-solving skills under time constraints."
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
            title: "Advent of Code",
            organization: "Global",
            date: "2025",
            description: "Participant in the annual algorithmic coding challenge."
        },
        {
            id: 5,
            title: "Berkeley CALICO",
            organization: "UC Berkeley",
            date: "2025",
            description: "Ranked in the top 49% of participants in Pakistan."
        },
        {
            id: 6,
            title: "Hack Nation",
            organization: "Google & OpenAI & MIT",
            date: "*",
            description: "Participant in the Hack Nation hackathon supported by Google, OpenAI, and MIT."
        },
        {
            id: 7,
            title: "DeepMind Gemini 3 Hack",
            organization: "Google DeepMind",
            date: "*",
            description: "Competed in the Gemini 3 Hackathon leveraging advanced AI models."
        },
        {
            id: 8,
            title: "MedGemma Impact Challenge",
            organization: "Google research",
            date: "*",
            description: "Participated in the MedGemma Impact Challenge."
        }
    ];

    return (
        <div>
            <div className="flex items-end justify-between mb-16">
                <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
                    EXTRA
                </h2>
            </div>

            <div className="w-full flex flex-col border-t border-theme-border">
                {achievements.map((item, index) => (
                    <motion.div
                        key={item.id}
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
                                        {item.organization}
                                    </span>
                                </div>
                                
                                <h3 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-7xl text-theme-text group-hover:italic transition-all duration-500 mb-6 max-w-4xl pr-8">
                                    {item.title}
                                </h3>
                                
                                <p className="text-xl md:text-2xl text-theme-muted group-hover:text-theme-text transition-colors duration-500 max-w-2xl font-medium mb-4">
                                    {item.description}
                                </p>
                                
                                <p className="text-theme-muted font-bold text-sm uppercase tracking-widest">
                                    {item.date}
                                </p>

                                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 hidden md:flex w-16 h-16 rounded-full border border-theme-border items-center justify-center text-theme-text group-hover:bg-theme-accent group-hover:border-theme-accent group-hover:text-theme-bg">
                                    <ArrowUpRight size={28} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
