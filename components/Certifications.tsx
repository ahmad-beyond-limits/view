import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

export const Certifications: React.FC = () => {
    const certifications = [
        {
            id: 1,
            title: "100 Days of Code: The Complete Python Pro Bootcamp",
            issuer: "Udemy",
            tags: ["Python", "Bootcamp"],
        },
        {
            id: 2,
            title: "Forward Leadership",
            issuer: "McKinsey Forward",
            tags: ["Leadership", "Management"],
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
            <SectionHeader 
                overline="VALIDATION"
                titlePart1="Bridging the gap with"
                titlePart2="specialized knowledge."
                description="A selection of certifications that complement my formal education with practical, industry-leading skills."
            />

            <div className="w-full flex flex-col border-t border-theme-border">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <div className="group relative flex flex-col md:flex-row w-full border-b border-theme-border-faint py-12 md:py-16 transition-all duration-500 hover:bg-theme-accent-soft items-center px-4 md:px-8 border-l-0 hover:border-l-8 hover:border-theme-accent">
                            {/* Col 1: Index Label */}
                            <div className="w-full md:w-1/6 flex-shrink-0 mb-4 md:mb-0">
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-theme-muted group-hover:text-theme-accent transition-colors">
                                    CERT {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                            
                            {/* Col 2: Title */}
                            <div className="w-full md:w-3/6 mb-4 md:mb-0">
                                <h3 className="font-['Playfair_Display'] text-3xl md:text-5xl text-theme-text group-hover:text-theme-accent group-hover:italic transition-all duration-500">
                                    {cert.title}
                                </h3>
                            </div>
                            
                            {/* Col 3: Details */}
                            <div className="w-full md:w-2/6">
                                <p className="text-sm md:text-base text-theme-muted group-hover:text-theme-text transition-colors leading-relaxed">
                                    <span className="font-bold text-theme-text block mb-1">{cert.issuer}</span>
                                    {cert.tags.join(' • ')}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
