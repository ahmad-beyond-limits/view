import React from 'react';
import { Languages as LanguageIcon } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export const Languages: React.FC = () => {
    const languages = [
        {
            id: 1,
            language: "URDU",
            level: "Native",
        },
        {
            id: 2,
            language: "ENGLISH",
            level: "DET 130 Score", // Assuming DET 130 "app score" means the score obtained.
        }
    ];

    return (
    <div>
      <SectionHeader 
        overline="COMMUNICATION"
        titlePart1="Bridging cultures through"
        titlePart2="articulate speech."
        description="Proficiency in multiple languages allows me to collaborate effectively across global teams and diverse contexts."
      />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {languages.map((lang) => (
                    <div key={lang.id} className="group relative overflow-hidden rounded-[2.5rem] bg-theme-border-faint hover:bg-theme-border transition-all cursor-pointer p-10 border border-theme-border-faint hover:border-theme-border text-theme-text">
                        <div className="flex items-center gap-6 mb-4">
                            <div className="w-12 h-12 rounded-full bg-theme-bg flex items-center justify-center text-theme-accent group-hover:scale-110 transition-transform">
                                <LanguageIcon size={24} />
                            </div>
                            <h3 className="text-4xl font-black uppercase tracking-tighter group-hover:text-theme-accent transition-colors font-['Playfair_Display']">
                                {lang.language}
                            </h3>
                        </div>
                        <p className="text-theme-muted font-bold uppercase text-lg tracking-[0.2em] pl-[4.5rem]">{lang.level}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
