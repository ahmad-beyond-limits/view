import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Send, Check, Loader2 } from 'lucide-react';

const SUGGESTIONS = [
  "I need to grow my revenue but I don't know where to start...",
  "I want to visualise my sales data without needing a data team...",
  "My dashboards exist. but nobody actually uses them...",
  "I need to understand why our churn spiked last quarter...",
  "We're making decisions based on gut feel, not numbers...",
  "I have the data. I just don't know what it's telling me..."
];

const TypewriterSuggestion = ({ isActive }: { isActive: boolean }) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 50;
  const deletingSpeed = 30;
  const pauseDuration = 2000;

  useEffect(() => {
    if (!isActive) return;

    const currentFullText = SUGGESTIONS[index];
    
    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % SUGGESTIONS.length);
        }
      }
    };

    const timer = setTimeout(handleType, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, isActive]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-8">
      <p className="text-3xl md:text-5xl font-medium text-white text-center leading-relaxed">
        {displayText}<span className="animate-pulse">|</span>
      </p>
    </div>
  );
};

export const ContactForm: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const problemInputRef = useRef<HTMLTextAreaElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  
  const [problem, setProblem] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Opacities for different steps
  const step1Opacity = useTransform(smoothScroll, [0, 0.1, 0.25, 0.3], [0, 1, 1, 0]);
  const step2Opacity = useTransform(smoothScroll, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
  const step3Opacity = useTransform(smoothScroll, [0.7, 0.8, 1], [0, 1, 1]);
  
  // Get active state for typewriter
  const [isStep2Active, setIsStep2Active] = useState(false);
  useEffect(() => {
    return smoothScroll.onChange((v) => {
      setIsStep2Active(v >= 0.3 && v < 0.7);
    });
  }, [smoothScroll]);

  // Stacking and Pointer Events logic
  const step1PointerEvents = useTransform(smoothScroll, (v) => v < 0.25 ? 'auto' : 'none');
  const step2PointerEvents = useTransform(smoothScroll, (v) => (v >= 0.3 && v < 0.7) ? 'auto' : 'none');
  const step3PointerEvents = useTransform(smoothScroll, (v) => v >= 0.7 ? 'auto' : 'none');

  // Scales and Y movements
  const step1Scale = useTransform(smoothScroll, [0, 0.1], [0.8, 1]);
  const step2Y = useTransform(smoothScroll, [0.3, 0.4], [50, 0]);
  const step3Y = useTransform(smoothScroll, [0.7, 0.8], [50, 0]);

  const ahmadOpacity = useTransform(smoothScroll, [0.8, 1], [0, 0.15]);
  const ahmadY = useTransform(smoothScroll, [0.8, 1], [100, 0]);

  const handleSend = async () => {
    if (!email || !problem || status === 'sending') {
      if (!email && emailInputRef.current) {
        emailInputRef.current.focus();
        // Visual cue: add a quick pulse or border color change could be added here
      }
      return;
    }
    try {
      const response = await fetch('https://sveltia-cms-auth.ahmad-bsds.workers.dev/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message: problem })
      });
      if (response.ok) {
        setStatus('sent');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleNext = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const scrollTarget = window.scrollY + rect.height * 0.35;
      window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
      setTimeout(() => emailInputRef.current?.focus(), 800);
    }
  };

  return (
    <div ref={containerRef} className="h-[400vh] w-full bg-[#0812F9] relative">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* STEP 1: The Reveal */}
        <motion.div 
          style={{ opacity: step1Opacity, scale: step1Scale, pointerEvents: step1PointerEvents as any }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h2 className="text-6xl md:text-8xl lg:text-[140px] font-['Playfair_Display'] text-white leading-tight tracking-tight">
            Ready to <span className="italic text-white/50">rewire</span> <br />
            your experience?
          </h2>
          <div className="mt-12 text-white/30 text-sm font-bold uppercase tracking-[0.4em] animate-pulse">
            Scroll to begin
          </div>
        </motion.div>

        {/* STEP 2: The Problem Inquiry */}
        <motion.div 
          style={{ opacity: step2Opacity, y: step2Y, pointerEvents: step2PointerEvents as any }}
          onClick={() => problemInputRef.current?.focus()}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 max-w-5xl mx-auto w-full cursor-text"
        >
          <h3 className="text-3xl md:text-5xl font-['Playfair_Display'] text-white/60 mb-12 text-center">
            What is the one <span className="text-white italic">problem</span> you need to solve?
          </h3>
          <div className="w-full relative min-h-[200px] flex items-center">
            {problem === '' && <TypewriterSuggestion isActive={isStep2Active} />}
            <textarea
              ref={problemInputRef}
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleNext();
                }
              }}
              className="w-full bg-transparent py-8 text-3xl md:text-5xl font-medium text-white caret-white outline-none transition-all resize-none text-center selection:bg-white/20 relative z-10"
              rows={2}
            />
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20" />
          </div>
          <div className="mt-6 text-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">
            Press Enter to continue
          </div>
        </motion.div>

        {/* STEP 3: The Action (Email + Button) */}
        <motion.div 
          style={{ opacity: step3Opacity, y: step3Y, pointerEvents: step3PointerEvents as any }}
          onClick={() => emailInputRef.current?.focus()}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 max-w-4xl mx-auto w-full cursor-text"
        >
          <h3 className="text-2xl md:text-4xl font-['Playfair_Display'] text-white/60 mb-12 text-center">
            <span className="text-white italic">solution</span> needs email
          </h3>
          <div className="w-full space-y-12 flex flex-col items-center">
            <input
              ref={emailInputRef}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="your@email.com"
              className="w-full bg-transparent border-b-2 border-white/20 py-6 text-2xl md:text-4xl font-medium text-white outline-none focus:border-white transition-all placeholder:text-white/10 text-center"
            />
            
            <motion.button
              disabled={status === 'sending'}
              whileHover={{ scale: status !== 'idle' ? 1 : 1.05 }}
              whileTap={{ scale: status !== 'idle' ? 1 : 0.95 }}
              animate={{ 
                backgroundColor: status === 'sent' ? "#10b981" : status === 'error' ? "#ef4444" : "#ffffff",
                color: (status === 'sent' || status === 'error') ? "#ffffff" : "#0812F9"
              }}
              className="group relative px-16 py-8 rounded-full shadow-2xl flex items-center gap-8 overflow-hidden pointer-events-auto disabled:cursor-not-allowed"
              onClick={(e) => {
                e.stopPropagation();
                handleSend();
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span 
                  key={status}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-2xl md:text-4xl font-black uppercase tracking-tighter relative z-10"
                >
                  {status === 'sending' ? 'Solving...' : 
                   status === 'sent' ? 'Ready to meet' : 
                   status === 'error' ? 'Failed' : 'Solve this'}
                </motion.span>
              </AnimatePresence>
              
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center relative z-10 transition-colors duration-300 ${
                status === 'sent' ? 'bg-white text-[#10b981]' : 
                status === 'error' ? 'bg-white text-[#ef4444]' : 
                'bg-[#0812F9] text-white'
              }`}>
                {status === 'sending' ? <Loader2 className="animate-spin" size={32} /> : 
                 status === 'sent' ? <Check size={32} /> : 
                 <Send size={32} />}
              </div>
              
              {status === 'idle' && <div className="absolute inset-0 bg-[#0812F9]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />}
            </motion.button>
          </div>
        </motion.div>

        {/* STEP 4: The Signature (AHMAD) */}
        <motion.div 
          style={{ opacity: ahmadOpacity, y: ahmadY }}
          className="absolute bottom-0 left-0 w-full select-none pointer-events-none z-0"
        >
          <h1 className="text-[30vw] font-black text-white leading-none tracking-tighter text-center whitespace-nowrap">
            AHMAD
          </h1>
        </motion.div>

        {/* Progress Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-50">
           {[0, 1, 2].map((i) => (
             <motion.div 
               key={i}
               className="w-12 h-1 rounded-full bg-white/10 overflow-hidden"
             >
               <motion.div 
                 className="h-full bg-white"
                 style={{ 
                   scaleX: useTransform(smoothScroll, [i * 0.33, (i + 1) * 0.33], [0, 1]) 
                 }}
               />
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};
