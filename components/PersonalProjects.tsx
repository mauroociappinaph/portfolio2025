
import React from 'react';
import Section from './Section';
import PersonalProjectCard from './PersonalProjectCard';
import AnimatedItem from './AnimatedItem';
import type { Project } from '../types';
import { useLanguage } from '../LanguageContext';

interface PersonalProjectsProps {
  onProjectClick: (project: Project) => void;
}

const PersonalProjects: React.FC<PersonalProjectsProps> = ({ onProjectClick }) => {
  const { t } = useLanguage();
  const personalAcademicProjects = t.personalAcademicProjects;

  return (
    <Section id="personal-projects" title={t.sections.personal_projects}>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {personalAcademicProjects.map((project, index) => (
          <AnimatedItem key={project.name} delay={index * 100}>
            <PersonalProjectCard project={project} onProjectClick={onProjectClick} />
          </AnimatedItem>
        ))}
      </div>
    </Section>
  );
};

export default PersonalProjects;
