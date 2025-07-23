

import React from 'react';
import Section from './Section';
import { ICONS } from '../constants';
import AnimatedItem from './AnimatedItem';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="contact" title={t.sections.contact}>
      <AnimatedItem className="max-w-2xl mx-auto text-center">
        <div className="p-8 rounded-2xl bg-white/70 dark:bg-slate-800/40 backdrop-blur-lg border border-slate-200/70 dark:border-white/10 transition-all duration-300 hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-slate-700/50">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t.contact.title}</h3>
          <p className="text-slate-600 dark:text-gray-300 mb-8 max-w-lg mx-auto">
            {t.contact.subtitle}
          </p>
          <a
            href="mailto:ciappinamaurooj@gmail.com"
            className="group inline-block rounded-full bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200/70 dark:border-white/10 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-sky-500/20"
          >
            <div className="px-8 py-4">
              <span className="font-semibold text-lg text-sky-600 dark:text-sky-300 group-hover:text-sky-500 dark:group-hover:text-sky-200 transition-colors">ciappinamaurooj@gmail.com</span>
            </div>
          </a>
          <div className="flex justify-center items-center gap-8 mt-10">
            <a href="https://github.com/mauroociappinaph" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-600 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400 transition-colors">{React.cloneElement(ICONS.github, {width: 28, height: 28})}</a>
            <a href="https://www.linkedin.com/in/maurojoseciappina/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-600 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400 transition-colors">{React.cloneElement(ICONS.linkedin, {width: 28, height: 28})}</a>
          </div>
        </div>
      </AnimatedItem>
    </Section>
  );
};

export default Contact;