
import React, { forwardRef } from 'react';
import { ICONS } from '../constants';
import { useLanguage } from '../LanguageContext';

const Hero = forwardRef<HTMLElement, {}>((props, ref) => {
    const { t } = useLanguage();
    
    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    const name = "Mauro José Ciappina";

    return (
        <section ref={ref} id="home" className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
            <div className="relative z-20 text-slate-900 dark:text-white px-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase">
                    {name.split("").map((char, index) => (
                        <span 
                            key={index} 
                            className="inline-block animate-fade-in-char"
                            style={{ animationDelay: `${index * 0.03}s`, opacity: 0 }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </h1>
                <p className="mt-4 text-xl md:text-2xl font-light text-sky-600 dark:text-sky-300/90 tracking-wider">
                    {t.hero.subtitle}
                </p>
                <div className="mt-8 flex justify-center gap-6">
                    <a href="https://github.com/mauroociappinaph" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400 transition-colors" aria-label="GitHub">
                        {ICONS.github}
                    </a>
                    <a href="https://www.linkedin.com/in/maurojoseciappina/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400 transition-colors" aria-label="LinkedIn">
                        {ICONS.linkedin}
                    </a>
                </div>
            </div>
            
            <a 
                href="#about" 
                aria-label="Scroll down" 
                className="absolute bottom-10 z-20 text-slate-800 dark:text-white animate-scroll-down cursor-pointer"
                onClick={handleScrollClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14" /><path d="m19 12-7 7-7-7" />
                </svg>
            </a>
        </section>
    );
});

export default Hero;