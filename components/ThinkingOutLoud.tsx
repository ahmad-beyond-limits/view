import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  link: string;
  order: number;
  image?: string;
}

export const ThinkingOutLoud: React.FC = () => {
  // Load all JSON articles dynamically
  const articleModules = import.meta.glob('../content/articles/*.json', { eager: true });
  const allArticles = Object.values(articleModules).map((m: any) => m.default || m) as Article[];
  
  // Sort articles by order
  const articles = [...allArticles].sort((a, b) => (a.order || 0) - (b.order || 0));

  if (articles.length === 0) return null;

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

        <div className="flex flex-col mt-12 gap-16">
          {/* GRID ARTICLES (3 Columns - Square Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {articles.map((article, index) => (
              <motion.a
                href={article.link}
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative flex flex-col w-full aspect-square bg-theme-bg border border-theme-border/60 hover:border-theme-border transition-all duration-500 hover:-translate-y-2 p-6 md:p-8 overflow-hidden"
              >
                {/* Optional Image Background (fades in on hover or stays subtle) */}
                {article.image && (
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                    <img src={article.image} className="w-full h-full object-cover" alt="" />
                    <div className="absolute inset-0 bg-theme-bg/50"></div>
                  </div>
                )}

                {/* Top Row: Number & Icon */}
                <div className="relative z-10 flex justify-between items-start w-full">
                  <span className="text-3xl md:text-4xl font-black text-theme-text tracking-tighter">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  <div className="w-10 h-10 rounded-full bg-theme-border-faint flex items-center justify-center text-theme-text group-hover:bg-theme-text group-hover:text-theme-bg transition-colors duration-300">
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Bottom Row: Content */}
                <div className="relative z-10 mt-auto flex flex-col w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-theme-text mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-theme-muted line-clamp-2 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-theme-muted font-medium">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
