
import React from 'react';
import { Trophy } from 'lucide-react';

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

            <div className="space-y-6">
                {achievements.map((item) => (
                    <div key={item.id} className="group relative overflow-hidden rounded-[2.5rem] bg-[#111] hover:bg-[#151515] transition-all cursor-pointer p-8 flex flex-col md:flex-row gap-8 items-center border border-white/5 hover:border-white/10">
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-[#FF5C00] group-hover:scale-110 transition-transform shrink-0">
                            <Trophy size={32} />
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 group-hover:text-[#FF5C00] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-white/60 font-bold uppercase text-sm tracking-widest mb-1">{item.organization}</p>
                            <p className="text-neutral-500 text-sm">{item.description}</p>
                        </div>

                        <div className="text-neutral-600 font-bold text-xl">{item.date}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
