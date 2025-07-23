

import React from 'react';
import { ICONS } from '../constants';
import Section from './Section';
import AnimatedItem from './AnimatedItem';
import { useLanguage } from '../LanguageContext';

const EducationLanguages: React.FC = () => {
    const { t } = useLanguage();

    return (
        <Section id="education" title={t.sections.education_languages}>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                {/* Education Card */}
                <AnimatedItem>
                    <div className="p-8 rounded-2xl bg-white/70 dark:bg-slate-800/40 backdrop-blur-lg border border-slate-200/70 dark:border-white/10 h-full transition-all duration-300 hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-slate-700/50">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-sky-500 dark:text-sky-400">{React.cloneElement(ICONS.graduationCap, {width: 28, height: 28})}</div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.education.title}</h3>
                        </div>
                        <div className="space-y-6">
                            {t.education.items.map((item, index) => (
                                <div key={index}>
                                    <h4 className="font-bold text-slate-800 dark:text-white">{item.degree}</h4>
                                    <p className="text-slate-600 dark:text-gray-300 text-sm">{item.institution}</p>
                                    <p className="text-xs text-slate-500 dark:text-gray-500 mt-1">{item.timeline}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedItem>

                {/* Languages Card */}
                <AnimatedItem delay={100}>
                    <div className="p-8 rounded-2xl bg-white/70 dark:bg-slate-800/40 backdrop-blur-lg border border-slate-200/70 dark:border-white/10 h-full transition-all duration-300 hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-slate-700/50">
                        <div className="flex items-center gap-4 mb-6">
                             <div className="text-sky-500 dark:text-sky-400">{React.cloneElement(ICONS.globe, {width: 28, height: 28})}</div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.languages.title}</h3>
                        </div>
                        <div className="space-y-6">
                            {t.languages.items.map((lang, index) => (
                                <div key={index}>
                                    <h4 className="font-bold text-slate-800 dark:text-white">{lang.name}</h4>
                                    <p className="text-slate-600 dark:text-gray-300 text-sm">{lang.level}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedItem>
            </div>
        </Section>
    );
};

export default EducationLanguages;