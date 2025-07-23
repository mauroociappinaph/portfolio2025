

import React from 'react';
import AnimatedItem from './AnimatedItem';
import { useLanguage } from '../LanguageContext';

const QuoteSection: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-16 md:py-20">
            <AnimatedItem className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative p-8 md:p-10">
                    <p 
                        className="font-handwritten text-3xl md:text-4xl text-slate-800 dark:text-white text-center leading-snug"
                        dangerouslySetInnerHTML={{ __html: `“${t.quote.line1}”` }}
                    />
                    <p className="text-right mt-4 font-sans text-slate-500 dark:text-gray-400">
                        {t.quote.author}
                    </p>
                </div>
            </AnimatedItem>
        </section>
    );
};

export default QuoteSection;