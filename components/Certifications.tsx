import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Certifications: React.FC = () => {
    const certifications = [
        {
            id: 1,
            title: "100 Days of Code™: The Complete Python Pro Bootcamp",
            issuer: "Udemy",
            tags: ["Python", "Bootcamp"],
        },
        {
            id: 2,
            title: "Forward Leadership",
            issuer: "McKinsey Forward",
            tags: ["Leadership", "Managment"],
        },
        {
            id: 3,
            title: "Supervised Learning with scikit-learn",
            issuer: "DataCamp",
            tags: ["Machine Learning", "Python"],
        },
        {
            id: 4,
            title: "Introduction to Deep Learning in Python",
            issuer: "DataCamp",
            tags: ["Deep Learning", "AI"],
        }
    ];

    return (
        <div>
            <div className="flex items-end justify-between mb-16">
                <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
                    LICENSES & <br />
                    <span className="text-outline">CERT.</span>
                </h2>
            </div>

            <div className="w-full flex flex-col border-t border-theme-border">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={cert.id}
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
                                     {cert.tags.map(tag => (
                                       <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 bg-theme-accent-soft text-theme-accent rounded-full border border-theme-border">
                                         {tag}
                                       </span>
                                     ))}
                                </div>
                                
                                <h3 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-7xl text-theme-text group-hover:italic transition-all duration-500 mb-6 max-w-4xl pr-8">
                                    {cert.title}
                                </h3>
                                
                                <p className="text-xl md:text-2xl text-theme-muted group-hover:text-theme-text transition-colors duration-500 max-w-2xl font-medium">
                                    {cert.issuer}
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
