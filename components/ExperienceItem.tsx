import React from 'react';
import type { Project } from '../types';
import { ICONS } from '../constants';

interface ExperienceItemProps {
  item: Project;
  onProjectClick: (project: Project) => void;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ item, onProjectClick }) => {
  return (
    <div
      onClick={() => onProjectClick(item)}
      className="group block p-6 rounded-2xl md:grid md:grid-cols-6 gap-x-6 transition-all duration-300 bg-white/70 dark:bg-slate-800/40 backdrop-blur-lg border border-slate-200/70 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-slate-700/50 cursor-pointer"
    >
      <div className="md:col-span-2 text-sm text-slate-500 dark:text-gray-400 font-medium pt-1">
          {item.timeline}
      </div>
      <div className="md:col-span-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors flex items-center gap-2">
              <span>{item.name}</span>
          </h3>
          <p className="font-semibold text-sky-600 dark:text-sky-500 text-sm mt-1">{item.role}</p>
          <p className="mt-2 text-slate-600 dark:text-gray-300 leading-relaxed text-sm">{item.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
              {item.stack.map(tech => (
                  <span key={tech} className="bg-sky-100/70 text-sky-800 dark:bg-sky-500/10 dark:text-sky-300 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full">
                  {tech}
                  </span>
              ))}
          </div>
      </div>
    </div>
  );
};

export default ExperienceItem;