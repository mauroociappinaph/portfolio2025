
import React from 'react';
import { ACHIEVEMENT_ICONS } from '../constants';
import Section from './Section';
import AnimatedItem from './AnimatedItem';
import { useLanguage } from '../LanguageContext';

const Achievements: React.FC = () => {
  const { t } = useLanguage();
  
  const achievements = t.achievements.map((item, index) => ({
    ...item,
    icon: ACHIEVEMENT_ICONS[index].icon,
  }));

  return (
    <Section id="achievements" title={t.sections.achievements}>
        <div className="max-w-4xl mx-auto space-y-4">
            {achievements.map((achievement, index) => (
                <AnimatedItem key={index} delay={index * 100}>
                    <div className="flex items-start space-x-6 p-6 rounded-2xl bg-white/70 dark:bg-slate-800/40 backdrop-blur-lg border border-slate-200/70 dark:border-white/10 transition-all duration-300 hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-slate-700/50">
                        <div className="flex-shrink-0 text-sky-500 dark:text-sky-400 p-2 mt-1 rounded-full bg-sky-100/70 dark:bg-sky-500/10">
                            {achievement.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white">{achievement.title}</h3>
                            <p className="mt-1 text-slate-600 dark:text-gray-400 text-sm">{achievement.description}</p>
                        </div>
                    </div>
                </AnimatedItem>
            ))}
        </div>
    </Section>
  );
};

export default Achievements;