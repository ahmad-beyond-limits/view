
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Research: React.FC = () => {
    const researches = [
        {
            id: 1,
            title: "Multi-Agent system based on PersonaLLM for UX Audit",
            status: "In Progress",
            tags: ["AI", "Multi-Agent", "UX Research"], // Inferring tags based on content
        }
    ];

    return (
        <div>
            <div className="flex items-end justify-between mb-16">
                <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
                    RESEARCH
                </h2>
            </div>

            <div className="space-y-6">
                {researches.map((item) => (
                    <div key={item.id} className="group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-[#111] hover:bg-[#151515] transition-all cursor-pointer p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center border border-white/5 hover:border-white/10">
                        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3 md:mb-4">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-white/5 border border-white/5 rounded-full text-neutral-500">{tag}</span>
                                ))}
                            </div>
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 group-hover:text-[#FF5C00] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-neutral-500 font-bold uppercase text-xs tracking-[0.3em]">{item.status}</p>
                        </div>

                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-600 group-hover:bg-[#FF5C00] group-hover:text-white group-hover:border-[#FF5C00] transition-all self-center md:self-auto shrink-0">
                            <ArrowUpRight size={24} className="md:w-7 md:h-7" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
