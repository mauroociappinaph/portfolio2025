
import React from 'react';
import { ICONS } from '../constants';
import Section from './Section';
import type { Certification } from '../types';
import AnimatedItem from './AnimatedItem';
import { useLanguage } from '../LanguageContext';

const CertificationItem: React.FC<{ cert: Certification }> = ({ cert }) => {
    return (
        <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-sky-500 dark:text-sky-400 mt-1.5">
                {ICONS.certificate}
            </div>
            <div className="flex-1">
                <h3 className="font-bold text-slate-800 dark:text-white">{cert.name}</h3>
                <p className="text-sm font-medium text-slate-600 dark:text-gray-300">{cert.issuer}</p>
                <p className="text-xs text-slate-500 dark:text-gray-500 mt-1">{cert.date}</p>
                {cert.description && <p className="text-sm text-slate-600 dark:text-gray-400 mt-2">{cert.description}</p>}
            </div>
        </div>
    );
};

const Certifications: React.FC = () => {
    const { t } = useLanguage();
    const certifications = t.certifications;

    return (
        <Section id="certifications" title={t.sections.certifications}>
            <AnimatedItem>
              <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-white/70 dark:bg-slate-800/40 backdrop-blur-lg border border-slate-200/70 dark:border-white/10 transition-all duration-300 hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-slate-700/50">
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
                      {certifications.map((cert, index) => (
                          <AnimatedItem key={cert.name} delay={index * 100}>
                            <CertificationItem cert={cert} />
                          </AnimatedItem>
                      ))}
                  </div>
              </div>
            </AnimatedItem>
        </Section>
    );
};

export default Certifications;