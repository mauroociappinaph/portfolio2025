

import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import QuoteSection from './components/QuoteSection';
import Projects from './components/Projects';
import PersonalProjects from './components/PersonalProjects';
import OtherProjects from './components/OtherProjects';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Certifications from './components/Certifications';
import EducationLanguages from './components/EducationLanguages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeDScene from './components/ThreeDScene';
import ProjectDetailModal from './components/ProjectDetailModal';
import type { Project } from './types';
import { useLanguage } from './LanguageContext';

type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useLanguage();

  const sections = t.navLinks.map(link => link.id);
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isHeroInView, setIsHeroInView] = useState(true);
  
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleOpenProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const contentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px', threshold: 0 }
    );

    const heroObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                setIsHeroInView(entry.isIntersecting);
            });
        },
        { rootMargin: '-100px 0px 0px 0px', threshold: 0 }
    );

    sectionRefs.current = sections.map(id => document.getElementById(id));
    sectionRefs.current.forEach((section) => {
      if (section) contentObserver.observe(section);
    });

    if (heroRef.current) {
        heroObserver.observe(heroRef.current);
    }

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) contentObserver.unobserve(section);
      });
      if(heroRef.current) {
        heroObserver.unobserve(heroRef.current);
      }
    };
  }, [sections]);

  return (
    <div className="font-sans text-slate-800 dark:text-slate-300 transition-colors duration-300 relative">
      <div className="fixed inset-0 z-0">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-sky-100 via-blue-50 to-white dark:from-black dark:via-sky-900/20 dark:to-black animate-gradient-bg"
            style={{ backgroundSize: '200% 200%' }}
          />
          <div className={`transition-opacity duration-700 ease-in-out ${isHeroInView ? 'opacity-100' : 'opacity-0'}`}>
            <ThreeDScene theme={theme} />
          </div>
      </div>

      <div className="fixed top-0 left-0 right-0 h-10 bg-gradient-to-b from-slate-100/50 dark:from-black/50 to-transparent pointer-events-none z-40" />
      <div className="fixed bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-slate-100/50 dark:from-black/50 to-transparent pointer-events-none z-40" />

      <div className="relative z-10">
        <Header 
          theme={theme} 
          toggleTheme={toggleTheme} 
          activeSection={activeSection}
        />
        <main>
          <Hero ref={heroRef} />
          <BentoGrid />
          <QuoteSection />
          <Projects onProjectClick={handleOpenProjectModal} />
          <PersonalProjects onProjectClick={handleOpenProjectModal} />
          <OtherProjects onProjectClick={handleOpenProjectModal} />
          <Achievements />
          <Testimonials />
          <Certifications />
          <EducationLanguages />
          <Contact />
        </main>
        <Footer />
      </div>
      <ProjectDetailModal project={selectedProject} onClose={handleCloseProjectModal} />
    </div>
  );
};

export default App;