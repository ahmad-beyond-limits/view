import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  link: string;
  order: number;
}

export const ThinkingOutLoud: React.FC = () => {
  // Load all JSON articles dynamically
  const articleModules = import.meta.glob('../content/articles/*.json', { eager: true });
  const allArticles = Object.values(articleModules).map((m: any) => m.default || m);
  
  // Sort articles by order
  const articles = [...allArticles].sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <section id="thoughts" className="py-24">
      <div className="flex flex-col">
        {/* Unified Section Header */}
        <SectionHeader 
          overline="Articles"
          titlePart1="Thinking"
          titlePart2="out loud"
          description="Honest thoughts on data, decisions, and what actually works in the real world."
        />

        {/* List Layout - Matching Project Typography */}
        <div className="flex flex-col border-t border-theme-border">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-16 md:py-24 border-b border-theme-border hover:bg-theme-faint transition-all duration-500 px-4 md:px-8 -mx-4 md:-mx-8 overflow-hidden"
            >
              {/* Highlight Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-0 bg-theme-accent transition-all duration-500 group-hover:w-1"></div>

              <div className="flex-1 flex flex-col gap-4">
                {/* Meta Tags - Matching Project Tag Style */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 bg-theme-accent-soft text-theme-accent rounded-full border border-theme-border">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 text-theme-muted">
                    <Clock size={12} className="text-theme-accent" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl text-theme-text group-hover:italic transition-all duration-500 max-w-4xl pr-8">
                  {article.title}
                </h3>
                
                <p className="text-base md:text-lg text-theme-muted group-hover:text-theme-text transition-colors duration-500 max-w-2xl font-medium mt-2">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-8 md:mt-0 flex items-center gap-8">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-theme-muted whitespace-nowrap">
                  {article.date}
                </span>
                <div className="w-16 h-16 rounded-full border border-theme-border flex items-center justify-center group-hover:bg-theme-accent group-hover:border-theme-accent group-hover:text-theme-bg transition-all duration-500">
                  <ArrowUpRight size={28} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
