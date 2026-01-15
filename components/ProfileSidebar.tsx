
import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import profileImage from '../assets/image.png';

export const ProfileSidebar: React.FC = () => {
  return (
    <div className="bg-white rounded-[3rem] p-8 text-black flex flex-col items-center shadow-2xl relative overflow-hidden h-full min-h-[700px]">
      {/* Dynamic Status Badge */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-green-50 px-4 py-1.5 rounded-full">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-green-700">Available for Work</span>
      </div>

      <div className="relative w-full aspect-[4/5] mt-8 mb-8 group">
        <div className="absolute inset-0 bg-neutral-100 rounded-[2rem] overflow-hidden">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover grayscale brightness-110 group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        {/* Abstract shape overlay */}
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FF5C00] rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="text-center w-full">
        <h1 className="text-4xl font-extrabold mb-1 tracking-tight leading-none">MUHAMMAD AHMAD</h1>
        <p className="text-neutral-400 font-semibold text-sm mb-6 uppercase tracking-widest">Product Researcher</p>

        <div className="w-full h-[1px] bg-neutral-100 mb-6"></div>

        <p className="text-neutral-500 text-sm leading-relaxed mb-8 px-4 font-medium text-justify hyphens-auto tracking-tight">
          I am fascinated by how AI can be used to build products that genuinely help people. As a Data Science graduate with experience across Analytics, Machine Learning, and Development, I am focused on using these technical skills to craft data-driven products that deliver tangible user value. I have honed my ability to deliver in fast-paced environments by competing in competitions and serving as a Section Leader at Stanford Code in Place. Currently, I am expanding my research by exploring how Multi-Agent Systems can be applied to Social Science.
        </p>
      </div>

      <div className="w-full space-y-3 mb-8">
        <a href="mailto:ahmad.bsds@gmail.com" className="w-full bg-black text-white rounded-2xl py-4 flex items-center justify-center gap-2 font-bold hover:bg-[#FF5C00] transition-all group">
          Hire Me
          <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
        {/* <button className="w-full border border-neutral-200 text-black rounded-2xl py-4 font-bold hover:bg-neutral-50 transition-all">
          Download CV
        </button> */}
      </div>

      <div className="flex gap-2 mt-auto">
        <a href="https://github.com/lead-with-data" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-50 text-neutral-400 hover:text-[#FF5C00] hover:bg-neutral-100 transition-all">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/ahmad-bsds/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-50 text-neutral-400 hover:text-[#FF5C00] hover:bg-neutral-100 transition-all">
          <Linkedin size={18} />
        </a>
        <a href="mailto:ahmad.bsds@gmail.com" className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-50 text-neutral-400 hover:text-[#FF5C00] hover:bg-neutral-100 transition-all">
          <Mail size={18} />
        </a>
      </div>
    </div>
  );
};
