import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TEXT = "Data Science graduate with a strong foundation in data analysis, statistical thinking, and problem structuring. Skilled in SQL, Python, Excel, and Power BI, with hands-on experience in data modeling, ETL processes, AI assisted analytics and building actionable dashboards. Known for approaching problems by translating business needs into clear analytical questions and delivering insights that support decision-making. Collaborative and disciplined, with experience in personal projects, hackathons, and teaching while building skills in modern end-to-end automated and AI/BI analytics to become a complete data person.";

const Word = ({ children, progress, range }: { children: string, progress: any, range: [number, number] }) => {
  // Using opacity is much more reliable and performant than color interpolation
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block mr-[0.25em] mb-[0.1em] text-white"
    >
      {children}
    </motion.span>
  );
};

export const ScrollSummary: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const words = TEXT.split(" ");
  const step = 1 / words.length;

  return (
    <section ref={containerRef} className="relative min-h-[300vh] bg-[#050505]">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{
             backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
             backgroundSize: "4rem 4rem",
             maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
           }}>
      </div>

      <div className="sticky top-0 h-screen w-full flex flex-col pt-32 pb-16 px-4 md:px-12 overflow-hidden items-center justify-center">
        <div className="max-w-5xl mx-auto w-full">
          <p className="text-xl md:text-3xl lg:text-4xl font-medium leading-[1.6] md:leading-[1.5] tracking-tight flex flex-wrap justify-center text-center">
            {words.map((word, i) => {
              const start = i * step;
              const end = start + step;
              
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
};
