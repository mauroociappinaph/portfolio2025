import React from 'react';
import type { Project } from '../types';

interface PersonalProjectCardProps {
    project: Project;
    onProjectClick: (project: Project) => void;
}

const PersonalProjectCard: React.FC<PersonalProjectCardProps> = ({ project, onProjectClick }) => {
    return (
        <div
            onClick={() => onProjectClick(project)}
            className="group flex flex-col justify-between h-full p-6 rounded-2xl bg-white/70 dark:bg-slate-800/40 backdrop-blur-lg border border-slate-200/70 dark:border-white/10 transition-all duration-300 hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-slate-700/50 hover:shadow-2xl cursor-pointer"
        >
            <div className="flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors flex items-center gap-2">
                    <span>{project.name}</span>
                </h3>
                <p className="font-semibold text-sky-600 dark:text-sky-500 text-sm mt-1">{project.role}</p>
                <p className="mt-3 text-slate-600 dark:text-gray-300 text-sm leading-relaxed">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map(tech => (
                    <span key={tech} className="bg-sky-100/70 text-sky-800 dark:bg-sky-500/10 dark:text-sky-300 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default PersonalProjectCard;