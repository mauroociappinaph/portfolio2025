
import React from 'react';
import Section from './Section';
import { HARD_SKILLS, ICONS } from '../constants';
import AnimatedItem from './AnimatedItem';
import { useLanguage } from '../LanguageContext';

const BentoCard: React.FC<{ children: React.ReactNode; className?: string; as?: React.ElementType; [x: string]: any; }> = ({ children, className, as: Component = 'div', ...props }) => (
    <Component className={`block relative rounded-3xl p-6 md:p-8 bg-white/70 dark:bg-slate-800/40 backdrop-blur-lg border border-slate-200/70 dark:border-white/10 transition-all duration-300 hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-slate-700/50 overflow-hidden ${className}`} {...props}>
        {children}
    </Component>
);

const BentoGrid = () => {
    const { t } = useLanguage();

    return (
        <Section id="about" title={t.sections.about}>
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* About me */}
                    <AnimatedItem className="md:col-span-2" delay={0}>
                        <BentoCard className="h-full">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.bento.hello}</h3>
                            <p 
                                className="text-slate-600 dark:text-gray-300 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: t.bento.bio }}
                            />
                        </BentoCard>
                    </AnimatedItem>

                    {/* LinkedIn */}
                    <AnimatedItem delay={100}>
                        <BentoCard
                            as="a"
                            href="https://www.linkedin.com/in/maurojoseciappina/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group h-full"
                        >
                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <div className="text-sky-500 dark:text-sky-400 mb-2">{React.cloneElement(ICONS.linkedin, {width: 32, height: 32})}</div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.bento.linkedin_title}</h3>
                                    <p className="text-slate-600 dark:text-gray-300 mt-1">{t.bento.linkedin_subtitle}</p>
                                </div>
                                <div className="self-end text-slate-400 dark:text-gray-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                    {React.cloneElement(ICONS.arrowUpRight, { className: "w-6 h-6" })}
                                </div>
                            </div>
                        </BentoCard>
                    </AnimatedItem>

                    {/* Hard Skills */}
                    <AnimatedItem className="md:col-span-3" delay={200}>
                        <BentoCard>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t.bento.toolkit}</h3>
                            <div className="flex flex-wrap gap-2">
                                 {HARD_SKILLS.map(skill => (
                                    <div key={skill.name} className="bg-sky-100/70 text-sky-800 dark:bg-sky-500/10 dark:text-sky-300 backdrop-blur-sm px-3 py-1 rounded-full font-medium text-sm">
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </BentoCard>
                    </AnimatedItem>
                </div>
            </div>
        </Section>
    )
}

export default BentoGrid;