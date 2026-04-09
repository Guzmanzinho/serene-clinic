import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoUrl from '../assets/serene_clinic-logo.png';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.team'), href: '#team' },
    { name: t('nav.treatments'), href: '#treatments' },
    { name: t('nav.faq'), href: '#faq' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary-surface shadow-[0_8px_30px_rgb(2,132,199,0.06)] py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center h-12 md:h-16">
            <img src={logoUrl} alt="Serene Clinic Logo" className="h-full w-auto block object-contain scale-150 md:scale-[2] origin-left" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-primary-text hover:text-primary-accent font-heading font-semibold transition-colors">
                {link.name}
              </a>
            ))}
            
            <div className="relative group">
              <button className="flex items-center space-x-1 text-primary-text hover:text-primary-accent transition-colors font-heading font-semibold uppercase">
                <Globe className="w-4 h-4" />
                <span>{i18n.language}</span>
              </button>
              <div className="absolute right-0 mt-2 w-24 bg-primary-surface rounded-2xl shadow-[0_8px_30px_rgb(2,132,199,0.08)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all overflow-hidden border border-gray-50">
                <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-sage/30 hover:text-primary-accent transition-colors">EN</button>
                <button onClick={() => changeLanguage('pt')} className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-sage/30 hover:text-primary-accent transition-colors">PT</button>
                <button onClick={() => changeLanguage('es')} className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-sage/30 hover:text-primary-accent transition-colors">ES</button>
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary-text hover:text-primary-accent">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-primary-surface shadow-[0_8px_30px_rgb(2,132,199,0.06)] absolute w-full left-0 top-full overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-heading font-semibold text-primary-text hover:text-primary-accent hover:bg-primary-sage/20 rounded-2xl transition-colors">
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-4 px-3 py-4 border-t border-gray-100 mt-4 rounded-xl">
                {['en', 'pt', 'es'].map((lng) => (
                  <button key={lng} onClick={() => changeLanguage(lng)} className={`font-heading font-bold uppercase py-2 px-4 rounded-xl transition-colors ${i18n.language === lng ? 'bg-primary-accent text-white shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}>
                    {lng}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
