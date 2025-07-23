
import React from 'react';
import Section from './Section';
import ExperienceItem from './ExperienceItem';
import AnimatedItem from './AnimatedItem';
import type { Project } from '../types';
import { useLanguage } from '../LanguageContext';

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const { t } = useLanguage();
  const professionalExperience = t.professionalExperience;

  return (
    <Section id="experience" title={t.sections.experience}>
      <div className="max-w-4xl mx-auto space-y-8 relative">
        <div className="absolute left-0 top-0 h-full w-px bg-sky-900/50 -translate-x-8 md:-translate-x-12" />
        {professionalExperience.map((project, index) => (
          <AnimatedItem as="div" key={project.name} delay={index * 100} className="relative">
             <div className="absolute -left-8 md:-left-12 top-8 h-4 w-4 rounded-full bg-slate-900 border-2 border-sky-500" />
            <ExperienceItem item={project} onProjectClick={onProjectClick} />
          </AnimatedItem>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
