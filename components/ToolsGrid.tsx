import React from 'react';
import { BrainCircuit, Bot, PieChart, BarChart3, Code2, Users, Palette, Cloud, Terminal } from 'lucide-react';

export const ToolsGrid: React.FC = () => {
  const stack = [
    { name: 'Design', category: 'Figma, Canva, Adobe Illustrator, Affinity (Designed)', icon: Palette },
    { name: 'Statistics', category: 'Descriptive and Inferential Statistics (Academic)', icon: PieChart },
    { name: 'Visualization', category: 'Tableau, Power BI, Looker, Excel, KPIs, Data Storytelling (Olist Analytics)', icon: BarChart3 },
    { name: 'Machine Learning', category: 'PyTorch, Scikit-learn, Deep Learning (Toy GPT)', icon: Bot },
    { name: 'Generative AI', category: 'LangChain, LangGraph, Prompt Engineering (Renal Sense)', icon: BrainCircuit },
    { name: 'Cloud & Data', category: 'AWS, Snowflake, Google Cloud, Databases, Data Warehousing, Databricks (Familiar)', icon: Cloud },
    { name: 'Tools', category: 'Git/GitHub, Docker, Jupyter Notebook, VS Code, PyCharm, Google Colab, Vercel, Gemini AI Studio, Claude, DeepSeek, OpenAI, Gemini, Codex, Cursor, Qwen AI Assistant (Used)', icon: Terminal },
    { name: 'Languages', category: 'Python, SQL, R, HTML/CSS (Used)', icon: Code2 },
    { name: 'Soft Skills', category: 'Collaboration & Communication, Analytical & Critical Thinking, Problem-Solving, Adaptability (Possess)', icon: Users },
  ];

  return (
    <div>
      <h2 className="text-7xl lg:text-9xl font-black tracking-tighter uppercase mb-16 leading-[0.85] text-theme-text">
        STACK & <br />
        <span className="text-outline">SKILLS</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-theme-border-faint border border-theme-border-faint rounded-[3rem] overflow-hidden">
        {stack.map((item, i) => {
          const match = item.category.match(/(.*)\s+\(([^)]+)\)$/);
          const text = match ? match[1] : item.category;
          const tag = match ? match[2] : null;

          return (
            <div
              key={i}
              className="bg-theme-bg p-10 group hover:bg-theme-border-faint transition-colors cursor-crosshair flex flex-col items-start"
            >
              <item.icon size={32} className="text-theme-muted mb-6 group-hover:text-theme-accent transition-colors" />
              <h4 className="text-xl font-bold mb-3 text-theme-text">{item.name}</h4>
              <p className="text-sm text-theme-muted leading-relaxed mb-6 flex-1">{text}</p>

              {tag && (
                <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-theme-border-faint border border-theme-border rounded-full text-theme-muted group-hover:text-theme-accent group-hover:border-theme-accent transition-all">
                  {tag}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
