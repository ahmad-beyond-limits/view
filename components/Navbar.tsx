import React, { useState, useEffect } from 'react';
import { Home, FolderClosed, Briefcase, Box, Mail, Award, Trophy, Languages as LanguageIcon, GraduationCap, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'projects', icon: FolderClosed, label: 'Projects' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'certifications', icon: Award, label: 'Certifications' },
    { id: 'tools', icon: Box, label: 'Tools' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'achievements', icon: Trophy, label: 'Extra' },
    { id: 'languages', icon: LanguageIcon, label: 'Languages' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <>
      <div className="fixed top-8 right-10 z-50 md:hidden flex gap-4">
        <button
          onClick={toggleTheme}
          className="p-3 bg-theme-border-faint backdrop-blur-md rounded-full border border-theme-border text-theme-text"
        >
          {isDark ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-theme-border-faint backdrop-blur-md rounded-full border border-theme-border text-theme-text"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-theme-bg md:hidden flex flex-col justify-center items-center p-8"
          >
            <nav className="flex flex-col gap-6 w-full max-w-sm">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 text-2xl font-bold p-4 rounded-2xl transition-all ${isActive
                      ? 'bg-theme-text text-theme-bg'
                      : 'text-theme-muted hover:text-theme-text hover:bg-theme-border-faint'
                      }`}
                  >
                    <item.icon size={24} />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden md:flex fixed top-8 left-1/2 -translate-x-1/2 lg:sticky lg:top-8 lg:translate-x-0 z-50 w-fit mx-auto gap-4">
        <nav className="glass rounded-full p-2 flex items-center gap-1.5 shadow-2xl border border-theme-border">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative p-3 rounded-full transition-all duration-500 group overflow-hidden ${isActive ? 'text-theme-bg' : 'text-theme-muted hover:text-theme-text'
                  }`}
                title={item.label}
              >
                {/* Background Glow for Active State */}
                {isActive && (
                  <div className="absolute inset-0 bg-theme-text transition-all duration-500" />
                )}

                {/* Subtle Hover Ring */}
                {!isActive && (
                  <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-theme-border transition-all duration-300" />
                )}

                <item.icon
                  size={18}
                  strokeWidth={isActive ? 2.5 : 2}
                  className="relative z-10 transition-transform duration-300 group-active:scale-90"
                />

                {/* Indicator Dot for Active */}
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-theme-accent rounded-full z-20" style={{boxShadow: '0 0 8px var(--accent)'}} />
                )}
              </a>
            );
          })}
        </nav>
        
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="glass rounded-full p-3 flex items-center justify-center shadow-2xl border border-theme-border text-theme-muted hover:text-theme-text transition-colors"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </>
  );
};
