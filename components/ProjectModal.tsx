import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Figma, ChevronLeft, ChevronRight, Github } from 'lucide-react';

interface Project {
    id: string;
    title: string;
    type: string;
    tags: string[];
    image: string;
    images?: string[];
    link?: string;
    figmaLink?: string;
    githubLink?: string;
    description?: string;
}

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
            setCurrentImageIndex(0);
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [project]);

    const baseUrl = import.meta.env.BASE_URL || '/';
    const formatUrl = (url: string) => {
        if (!url) return '';
        if (url.startsWith('http') || url.startsWith('data:')) return url;
        return `${baseUrl}${url.startsWith('/') ? url.slice(1) : url}`;
    };

    const rawGallery = project ? (project.images && project.images.length > 0 ? project.images : [project.image]) : [];
    const gallery = rawGallery.map(formatUrl);

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    };

    if (!project) return null;

    return (
        <AnimatePresence>
            {project && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md z-[60] flex items-center justify-center p-4 md:p-8"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-theme-bg border border-theme-border w-full max-w-5xl max-h-[90vh] rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 z-20 w-12 h-12 bg-theme-bg/50 backdrop-blur-md rounded-full flex items-center justify-center text-theme-text hover:bg-theme-accent hover:text-white transition-colors border border-theme-border"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex flex-col md:flex-row h-full overflow-hidden">
                                {/* Image Carousel Section */}
                                <div className="w-full md:w-3/5 relative min-h-[300px] bg-theme-border-faint group md:flex-1">
                                    <AnimatePresence mode="wait">
                                        {gallery[currentImageIndex] && (
                                            <motion.img
                                                key={gallery[currentImageIndex]}
                                                src={gallery[currentImageIndex]}
                                                alt={`${project.title} view ${currentImageIndex + 1}`}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="w-full h-full object-cover absolute inset-0 block"
                                            />
                                        )}
                                    </AnimatePresence>

                                    {/* Gradient Overlay for light/dark theme transition over image */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-theme-bg opacity-80 pointer-events-none"></div>

                                    {/* Navigation Controls */}
                                    {gallery.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors opacity-0 group-hover:opacity-100 z-10"
                                            >
                                                <ChevronLeft size={24} />
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors opacity-0 group-hover:opacity-100 z-10"
                                            >
                                                <ChevronRight size={24} />
                                            </button>

                                            {/* Dots */}
                                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                                {gallery.map((_, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                                        className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === idx ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/70'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col bg-theme-bg overflow-y-auto">
                                    <div className="mb-8">
                                        <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl text-theme-text mb-4 pr-8">
                                            {project.title}
                                        </h2>
                                        
                                        <p className="text-theme-accent font-bold uppercase tracking-[0.2em] text-xs mb-6">
                                            {project.type}
                                        </p>
                                        
                                        <p className="text-theme-muted leading-relaxed text-base font-medium mb-8 line-clamp-6">
                                            {project.description || "A comprehensive design project showcasing user-centric solutions and innovative visual identity."}
                                        </p>
                                    </div>

                                    <div className="space-y-4 mt-auto">
                                        {project.figmaLink && (
                                            <a
                                                href={project.figmaLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full bg-theme-bg text-theme-text border border-theme-border hover:border-theme-accent hover:text-theme-accent rounded-2xl p-4 flex items-center justify-center gap-3 transition-colors group"
                                            >
                                                <Figma size={24} className="group-hover:scale-110 transition-transform" />
                                                <span className="font-bold">Open in Figma</span>
                                            </a>
                                        )}

                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full bg-theme-bg text-theme-text border border-theme-border hover:border-theme-accent hover:text-theme-accent rounded-2xl p-4 flex items-center justify-center gap-3 transition-colors group"
                                            >
                                                <Github size={24} className="group-hover:scale-110 transition-transform" />
                                                <span className="font-bold">Open in GitHub</span>
                                            </a>
                                        )}

                                        {project.link && !project.figmaLink && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full bg-theme-text text-theme-bg hover:opacity-90 rounded-2xl p-4 flex items-center justify-center gap-3 transition-opacity font-bold"
                                            >
                                                <ExternalLink size={20} />
                                                <span>View Project</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
