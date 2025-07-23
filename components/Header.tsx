

import React, { useState } from 'react';
import { ICONS } from '../constants';
import { useLanguage } from '../LanguageContext';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, activeSection }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();
    const navLinks = t.navLinks;

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
             const headerOffset = 80; // height of the header
             const elementPosition = targetElement.getBoundingClientRect().top;
             const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }

        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };
    
    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center rounded-full mt-4 bg-white/60 dark:bg-gray-900/50 backdrop-blur-lg shadow-lg px-6 border border-slate-200/80 dark:border-white/10">
                    
                    {/* Mobile View */}
                    <div className="flex w-full items-center justify-between md:hidden">
                        <a href="#home" onClick={handleHomeClick} className="text-lg font-bold text-slate-900 dark:text-white">
                            Mauro Ciappina
                        </a>
                        <div className="flex items-center gap-2">
                            <button onClick={toggleLanguage} className="text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white uppercase text-sm font-medium transition-colors px-1">
                                {language === 'en' ? 'es' : 'en'}
                            </button>
                            <button onClick={toggleTheme} className="text-slate-600 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400 transition-colors">
                                {theme === 'dark' ? ICONS.sun : ICONS.moon}
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400"
                                aria-controls="mobile-menu"
                                aria-expanded={isMobileMenuOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMobileMenuOpen ? ICONS.x : ICONS.menu}
                            </button>
                        </div>
                    </div>
                    
                    {/* Desktop View */}
                    <div className="hidden w-full items-center md:flex">
                        {/* Left Part */}
                        <div className="flex-1 flex justify-start">
                             <a href="#home" onClick={handleHomeClick} className="text-lg font-bold text-slate-900 dark:text-white">
                                Mauro Ciappina
                             </a>
                        </div>

                        {/* Center Part */}
                        <nav className="flex-none flex justify-center gap-x-2 lg:gap-x-4">
                            {navLinks.map(link => (
                                <a 
                                    key={link.id} 
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${activeSection === link.id ? 'text-sky-500 dark:text-sky-400' : 'text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white'}`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        
                        {/* Right Part */}
                        <div className="flex-1 flex items-center justify-end gap-4">
                             <button onClick={toggleLanguage} className="text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white uppercase text-sm font-medium transition-colors">
                                {language === 'en' ? 'es' : 'en'}
                            </button>
                            <button onClick={toggleTheme} className="text-slate-600 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400 transition-colors">
                                {theme === 'dark' ? ICONS.sun : ICONS.moon}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Mobile menu panel */}
            {isMobileMenuOpen && (
                 <div className="md:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 bg-white/95 dark:bg-gray-900/95 mt-2 rounded-xl border border-slate-200/80 dark:border-white/10">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`block rounded-md px-3 py-2 text-base font-medium ${activeSection === link.id ? 'text-sky-500 bg-sky-50 dark:text-sky-400 dark:bg-white/10' : 'text-slate-700 hover:bg-slate-100 dark:text-gray-300 dark:hover:bg-white/5'}`}
                            aria-current={activeSection === link.id ? 'page' : undefined}
                        >
                            {link.label}
                        </a>
                    ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;