
import React from 'react';
import { ArrowDownRight, Sparkles, PenTool, Search } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="relative mb-24 overflow-hidden">
        {/* Background Scrolling Marquee */}
        <div className="flex whitespace-nowrap overflow-hidden select-none pointer-events-none opacity-[0.03] absolute -top-10 -left-10 w-[150%]">
          <div className="animate-marquee flex gap-20 py-4">
            <span className="text-8xl md:text-[180px] font-black uppercase">Researching rewarding user experiences</span>
            <span className="text-8xl md:text-[180px] font-black uppercase">Researching rewarding user experiences</span>
          </div>
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
            <Sparkles size={14} className="text-[#FF5C00]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Based in Punjab, Pakistan</span>
          </div>

          <h2 className="text-5xl md:text-8xl lg:text-[140px] font-black leading-[0.85] tracking-tighter uppercase mb-12">
            PRODUCT <br />
            <span className="text-outline">RESEARCHER</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-12 md:items-end justify-between">
            {/* <p className="text-neutral-400 text-xl max-w-lg leading-relaxed font-medium">
              I collaborate with forward-thinking companies to build immersive digital experiences that matter.
            </p> */}
            <div className="flex-1"></div> {/* Spacer to maintain layout if needed, or remove if flex handles it */}

            {/* <div className="flex gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[#050505] overflow-hidden bg-neutral-800">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-bold">
                <p>+50 Clients</p>
                <p className="text-neutral-500 font-medium">Worldwide</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white group rounded-[3rem] p-10 flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px] cursor-pointer hover:border-black/10 transition-all text-black">
          <div className="flex justify-between items-start">
            <div className="p-4 bg-black/5 rounded-2xl group-hover:bg-[#FF5C00]/20 transition-colors">
              <Search size={32} className="text-black group-hover:text-[#FF5C00] transition-colors" />
            </div>
            <ArrowDownRight size={24} className="text-neutral-400 group-hover:text-black transition-colors" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mb-2 block">Service 01</span>
            <h4 className="text-2xl md:text-4xl font-extrabold uppercase leading-none tracking-tighter">Data Science <br />& Analytics</h4>
          </div>
        </div>

        <div className="bg-[#FF5C00] group rounded-[3rem] p-10 flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px] cursor-pointer hover:scale-[1.02] transition-all text-white">
          <div className="flex justify-between items-start">
            <div className="p-4 bg-black/10 rounded-2xl">
              <PenTool size={32} />
            </div>
            <ArrowDownRight size={24} className="opacity-40" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 mb-2 block">Service 02</span>
            <h4 className="text-2xl md:text-4xl font-extrabold uppercase leading-none tracking-tighter">Development <br />{`</>`}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
