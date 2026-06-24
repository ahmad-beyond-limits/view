import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

export const Certifications: React.FC = () => {
    // Load certifications
    const certsData = import.meta.glob('../content/certifications/*.json', { eager: true });
    const certifications = Object.values(certsData).map((file: any) => file.default || file);
    certifications.sort((a, b) => (a.order || 0) - (b.order || 0));

    // Load header
    const headersData = import.meta.glob('../content/headers/certifications.json', { eager: true });
    const headerPath = Object.keys(headersData)[0];
    const header: any = headerPath ? (headersData[headerPath] as any).default || headersData[headerPath] : {
        overline: "VALIDATION",
        titlePart1: "Bridging the gap with",
        titlePart2: "specialized knowledge.",
        description: "A selection of certifications that complement my formal education with practical, industry-leading skills."
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
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <div className="group relative flex flex-col md:flex-row w-full border-b border-theme-border-faint py-12 md:py-16 transition-all duration-500 items-center px-4 md:px-8">
                            {/* Col 1: Index Label */}
                            <div className="w-full md:w-2/12 flex-shrink-0 mb-4 md:mb-0">
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-theme-muted transition-colors">
                                    CERT {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                            
                            {/* Col 2: Title */}
                            <div className="w-full md:w-6/12 mb-4 md:mb-0">
                                <h3 className="font-['Playfair_Display'] text-3xl md:text-5xl text-theme-text group-hover:text-theme-accent group-hover:italic transition-all duration-500">
                                    {cert.title}
                                </h3>
                            </div>
                            
                            {/* Col 3: Details */}
                            <div className="w-full md:w-4/12 md:text-right">
                                <p className="text-sm md:text-base text-theme-muted transition-colors leading-relaxed">
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
