import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const TEXT = "Data Science graduate with a strong foundation in data analysis, statistical thinking, and problem structuring. Skilled in SQL, Python, Excel, and Power BI, with hands-on experience in data modeling, ETL processes, AI assisted analytics and building actionable dashboards. Known for approaching problems by translating business needs into clear analytical questions and delivering insights that support decision-making. Collaborative and disciplined, with experience in personal projects, hackathons, and teaching while building skills in modern end-to-end automated and AI/BI analytics to become a complete data person.";

const Word = ({ children, progress, range }: { children: string, progress: any, range: [number, number, number, number] }) => {
  const backgroundColor = useTransform(progress, range, [
    "rgba(8,18,249,0)", 
    "rgba(8,18,249,1)", 
    "rgba(8,18,249,1)", 
    "rgba(8,18,249,0)"
  ]);
  const color = useTransform(progress, range, [
    "#D1D5DB", // Gray-300 for ghost text
    "#FFFFFF", // Pure white for active text
    "#FFFFFF", 
    "#D1D5DB"
  ]);

  return (
    <motion.span
      style={{ backgroundColor, color }}
      className="inline-block px-1"
    >
      {children}
    </motion.span>
  );
};

export const ScrollSummary: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 35,
    restDelta: 0.001
  });

  const words = TEXT.split(" ");
  // To highlight exactly 7 words, the window size relative to total progress is 7 / totalWords
  const windowSize = (7 / words.length) / 2; 

  return (
    <section ref={containerRef} className="relative min-h-[450vh] bg-white mt-[100vh] md:mt-0 py-32 md:py-64">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium leading-[2.2] text-center tracking-tight flex flex-wrap justify-center">
            {words.map((word, i) => {
              const center = i / words.length;
              const start = center - windowSize;
              const peakStart = center - windowSize / 2;
              const peakEnd = center + windowSize / 2;
              const end = center + windowSize;
              
              return (
                <React.Fragment key={i}>
                  <Word progress={smoothProgress} range={[start, peakStart, peakEnd, end]}>
                    {word}
                  </Word>
                  {/* Space is also a "Word" to ensure it gets formatted blue when active */}
                  <Word progress={smoothProgress} range={[start, peakStart, peakEnd, end]}>
                    {"\u00A0"}
                  </Word>
                </React.Fragment>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
};
