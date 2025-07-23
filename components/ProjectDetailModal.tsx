

import React, { useEffect, useState, useMemo } from 'react';
import type { Project } from '../types';
import { ICONS } from '../constants';
import { useLanguage } from '../LanguageContext';

// --- Start of Generative Constellation Component ---

// Helper functions to create deterministic visuals based on project name
const simpleHash = (str: string): number => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

const mulberry32 = (a: number) => {
    return () => {
        let t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
};

interface Point {
  x: number;
  y: number;
  animationDelay: string;
}

interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  opacity: number;
}

const ConstellationVisual: React.FC<{ projectName: string }> = ({ projectName }) => {
    const WIDTH = 500;
    const HEIGHT = 224;
    const NUM_POINTS = 35;
    const CONNECT_DISTANCE = 120;

    const { points, lines } = useMemo(() => {
        const seed = simpleHash(projectName);
        const random = mulberry32(seed);
        
        const generatedPoints: Point[] = [];
        for (let i = 0; i < NUM_POINTS; i++) {
            generatedPoints.push({
                x: random() * WIDTH,
                y: random() * HEIGHT,
                animationDelay: `${random() * 5}s`
            });
        }
        
        const generatedLines: Line[] = [];
        for (let i = 0; i < generatedPoints.length; i++) {
            for (let j = i + 1; j < generatedPoints.length; j++) {
                const p1 = generatedPoints[i];
                const p2 = generatedPoints[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < CONNECT_DISTANCE) {
                    generatedLines.push({
                        x1: p1.x, y1: p1.y,
                        x2: p2.x, y2: p2.y,
                        opacity: 1 - dist / CONNECT_DISTANCE
                    });
                }
            }
        }
        
        return { points: generatedPoints, lines: generatedLines };
    }, [projectName]);

    return (
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g className="opacity-70">
                {lines.map((line, i) => (
                    <line 
                        key={i}
                        x1={line.x1} y1={line.y1}
                        x2={line.x2} y2={line.y2}
                        stroke="rgba(56, 189, 248, 0.4)" // sky-400 with alpha
                        strokeWidth="0.5"
                        style={{ opacity: line.opacity }}
                    />
                ))}
            </g>
            <g>
                {points.map((point, i) => (
                    <circle
                        key={i}
                        cx={point.x}
                        cy={point.y}
                        r="1.5"
                        fill="#38bdf8" // sky-400
                        className="animate-pulse-dot"
                        style={{ animationDelay: point.animationDelay, transformOrigin: `${point.x}px ${point.y}px` }}
                    />
                ))}
            </g>
        </svg>
    );
};

// --- End of Generative Constellation Component ---

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [isShowing, setIsShowing] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsShowing(!!project);

    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);
  
  useEffect(() => {
    if (!project) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project]);

  const handleClose = () => {
    setIsShowing(false);
    setTimeout(onClose, 300); // Animation duration
  };

  if (!project) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
      onClick={handleClose}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isShowing ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-50/95 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 text-slate-800 dark:text-white shadow-2xl transition-all duration-300 ${isShowing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <button
            onClick={handleClose}
            aria-label="Close project details"
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-200/60 hover:bg-slate-300/80 dark:bg-black/20 dark:hover:bg-black/40 text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
            {React.cloneElement(ICONS.x, { width: 20, height: 20 })}
        </button>

        <div className="w-full h-56 bg-gradient-to-br from-slate-100 via-sky-100 to-white dark:from-gray-900 dark:via-sky-900/20 dark:to-black border-b border-slate-200/70 dark:border-white/10 overflow-hidden">
            <ConstellationVisual projectName={project.name} />
        </div>

        <div className="p-8">
            <h2 id="project-title" className="text-3xl font-bold text-slate-900 dark:text-white group-hover:text-sky-400 transition-colors">
              {project.name}
            </h2>
            <p className="font-semibold text-sky-600 dark:text-sky-400 mt-1">{project.role}</p>
            <p className="text-sm text-slate-500 dark:text-gray-500 mt-1">{project.timeline}</p>
            
            <p className="mt-6 text-slate-600 dark:text-gray-300 leading-relaxed">{project.description}</p>

            <h3 className="font-bold text-slate-900 dark:text-white mt-8 mb-3">{t.modal.stack}</h3>
            <div className="flex flex-wrap gap-2">
                {project.stack.map(tech => (
                    <span key={tech} className="bg-sky-100/70 text-sky-800 dark:bg-sky-500/10 dark:text-sky-300 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full">
                    {tech}
                    </span>
                ))}
            </div>

            {project.link && (
                <div className="mt-8">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sky-700 dark:text-sky-300 bg-slate-200/70 hover:bg-slate-300/90 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-300/70 dark:border-white/10 transition-all duration-300 backdrop-blur-sm"
                    >
                        <span>{t.modal.visit}</span>
                        {React.cloneElement(ICONS.arrowUpRight, { className: 'w-4 h-4' })}
                    </a>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;