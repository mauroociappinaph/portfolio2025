
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8">
            <div className="text-center text-slate-500 text-sm">
                <p>&copy; {currentYear} Mauro José Ciappina. {t.footer.copyright}</p>
            </div>
        </footer>
    );
};

export default Footer;