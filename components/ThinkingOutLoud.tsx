import React from 'react';
import { MoveUpRight, BookOpen, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import coverImage from '../assets/thinking_out_loud_cover.png';

export const ThinkingOutLoud: React.FC = () => {
  const articles = [
    {
      id: '1',
      title: "The Analytics Engineer's Manifesto: Beyond the SQL",
      excerpt: "Moving from data janitor to strategic partner. How we bridge the gap between raw bits and business outcomes.",
      date: 'May 2024',
      readTime: '8 min read',
      category: 'Strategy'
    },
    {
      id: '2',
      title: "Why Data Visualization is the Last Mile of Human Behavior",
      excerpt: "The science of how colors, shapes, and positions translate into billion-dollar decisions.",
      date: 'Apr 2024',
      readTime: '6 min read',
      category: 'Design'
    },
    {
      id: '3',
      title: "The Cost of Indecision: Measuring the Unseen Data Gap",
      excerpt: "Every question left unasked has a price tag. Analyzing the ROI of intellectual curiosity in business.",
      date: 'Mar 2024',
      readTime: '10 min read',
      category: 'Analytics'
    }
  ];

  return (
    <section id="thoughts" className="w-full">
      {/* High Impact Cover */}
      <div className="relative w-full h-[40vh] md:h-[60vh] rounded-[3rem] overflow-hidden mb-24 group">
        <img 
          src={coverImage} 
          alt="Thinking Out Loud" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl lg:text-[120px] font-black text-white tracking-tighter uppercase leading-none mb-4">
              Thinking <br />
              <span className="text-white/50 italic">out loud</span>
            </h2>
            <p className="text-white/60 text-lg md:text-2xl font-medium max-w-2xl">
              Exploring the intersection of data science, behavioral economics, and intentional engineering.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="h-full p-8 rounded-[2rem] border border-theme-border bg-theme-bg/50 hover:bg-theme-text hover:border-theme-text transition-all duration-500 flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="px-4 py-2 rounded-full border border-theme-border text-[10px] font-bold uppercase tracking-widest group-hover:text-theme-bg group-hover:border-theme-bg/20 transition-colors">
                    {article.category}
                  </span>
                  <div className="w-12 h-12 rounded-full border border-theme-border flex items-center justify-center group-hover:bg-theme-bg group-hover:text-theme-text transition-all">
                    <MoveUpRight size={20} />
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold leading-tight mb-6 group-hover:text-theme-bg transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-lg text-theme-muted group-hover:text-theme-bg/70 transition-colors line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-theme-border group-hover:border-theme-bg/10 flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-theme-muted group-hover:text-theme-bg/50 transition-colors">
                <span className="flex items-center gap-2">
                  <BookOpen size={14} /> {article.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} /> {article.readTime}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
