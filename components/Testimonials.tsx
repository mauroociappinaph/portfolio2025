
import React from 'react';
import { ICONS } from '../constants';
import Section from './Section';
import AnimatedItem from './AnimatedItem';
import { useLanguage } from '../LanguageContext';

const Testimonials: React.FC = () => {
    const { t } = useLanguage();
    const testimonials = t.testimonials;

    return (
        <Section id="testimonials" title={t.sections.testimonials}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <AnimatedItem key={index} delay={index * 100}>
                            <div className="h-full flex flex-col p-8 rounded-2xl bg-white/70 dark:bg-slate-800/40 backdrop-blur-lg border border-slate-200/70 dark:border-white/10 transition-all duration-300 hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-slate-700/50">
                                <div className="flex-shrink-0 text-sky-500 dark:text-sky-400 mb-4">
                                    {ICONS.quote}
                                </div>
                                <blockquote className="flex-grow text-slate-700 dark:text-gray-300 italic">
                                    "{testimonial.quote}"
                                </blockquote>
                                <footer className="mt-6">
                                    <p className="font-bold text-slate-900 dark:text-white">{testimonial.author}</p>
                                    <p className="text-sm text-slate-500 dark:text-gray-500">{testimonial.title}</p>
                                </footer>
                            </div>
                        </AnimatedItem>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Testimonials;