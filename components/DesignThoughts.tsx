import React from 'react';
import { MoveUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const DesignThoughts: React.FC = () => {
  const posts = [
    {
      id: '1',
      title: 'Starting and Growing a Career in Web Design',
      excerpt: 'As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.',
      date: 'Apr 8, 2022',
      readTime: '6min read'
    },
    {
      id: '2',
      title: 'Create a Landing Page That Performs Great',
      excerpt: 'Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page.',
      date: 'Mar 15, 2022',
      readTime: '6min read'
    },
    {
      id: '3',
      title: 'How Can Designers Prepare for the Future?',
      excerpt: 'Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page.',
      date: 'Feb 28, 2022',
      readTime: '6min read'
    },
  ];

  return (
    <div>
      <h2 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase mb-12">
        Design <br />
        <span className="text-theme-faint">Thoughts</span>
      </h2>

      <div className="w-full flex flex-col border-t border-theme-border">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 100, filter: "blur(20px)", scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full"
          >
            <div className="group relative flex flex-col md:flex-row w-full border-b border-theme-border-faint py-16 md:py-24 transition-all cursor-pointer items-start">
              <div className="w-full md:w-1/3 flex-shrink-0 mb-8 md:mb-0 flex items-center md:items-start">
                <span className="font-['Playfair_Display'] text-[120px] md:text-[220px] leading-none text-theme-faint group-hover:text-theme-faint-hover transition-colors duration-500 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              
              <div className="w-full md:w-2/3 flex flex-col justify-center relative h-full">
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 bg-theme-accent-soft text-theme-accent rounded-full border border-theme-border">
                    {post.date} · {post.readTime}
                  </span>
                </div>
                
                <h3 className="font-['Playfair_Display'] text-3xl md:text-5xl text-theme-text group-hover:italic transition-all duration-500 mb-6 max-w-4xl pr-8">
                  {post.title}
                </h3>
                
                <p className="text-xl md:text-2xl text-theme-muted group-hover:text-theme-text transition-colors duration-500 max-w-2xl font-medium">
                  {post.excerpt}
                </p>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 hidden md:flex w-16 h-16 rounded-full border border-theme-border items-center justify-center text-theme-text group-hover:bg-theme-accent group-hover:border-theme-accent group-hover:text-theme-bg">
                  <MoveUpRight size={28} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
