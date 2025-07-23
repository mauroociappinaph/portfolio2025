

import React, { useState } from 'react';
import Section from './Section';
import ExperienceItem from './ExperienceItem';
import AnimatedItem from './AnimatedItem';
import type { Project } from '../types';
import { useLanguage } from '../LanguageContext';

const INITIAL_VISIBLE_PROJECTS = 3;

interface OtherProjectsProps {
  onProjectClick: (project: Project) => void;
}

const OtherProjects: React.FC<OtherProjectsProps> = ({ onProjectClick }) => {
  const [showAll, setShowAll] = useState(false);
  const { t } = useLanguage();
  const otherProjects = t.otherProjects;

  const projectsToShow = showAll ? otherProjects : otherProjects.slice(0, INITIAL_VISIBLE_PROJECTS);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <Section id="other-projects" title={t.sections.other_projects}>
       <div className="max-w-4xl mx-auto">
        <div className="space-y-8 relative">
          <div className="absolute left-0 top-0 h-full w-px bg-sky-900/50 -translate-x-8 md:-translate-x-12" />
          {projectsToShow.map((project, index) => (
            <AnimatedItem as="div" key={project.name} delay={index * 100} className="relative">
               <div className="absolute -left-8 md:-left-12 top-8 h-4 w-4 rounded-full bg-slate-900 border-2 border-sky-500" />
              <ExperienceItem 
                item={project} 
                onProjectClick={onProjectClick}
              />
            </AnimatedItem>
          ))}
        </div>

        {otherProjects.length > INITIAL_VISIBLE_PROJECTS && (
          <div className="mt-12 text-center">
            <button
              onClick={handleToggle}
              className="px-8 py-3 rounded-full font-semibold text-sky-700 dark:text-sky-300 bg-white/70 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 border border-slate-200/70 dark:border-white/10 transition-all duration-300 backdrop-blur-sm"
              aria-expanded={showAll}
            >
              {showAll ? t.buttons.show_less : t.buttons.show_more}
            </button>
          </div>
        )}
       </div>
    </Section>
  );
};

export default OtherProjects;