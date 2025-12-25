
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../App';

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.features'), link: '#hệ-sinh-thái' },
    { name: t('nav.ai'), link: '#neural-ai' },
    { name: t('nav.pricing'), link: '#gói-giải-pháp' },
    { name: t('nav.register'), link: '#dang-ky-cai-dat' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img 
            src="https://cagboot.com/upload/CAG%20PRO%20cloud%20R.png" 
            alt="CAG Pro" 
            className="h-10 md:h-12 w-auto transition-transform hover:scale-105" 
          />
        </a>
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((item) => (
            <a key={item.name} href={item.link} className="text-sm font-bold text-slate-600 hover:text-red-600 transition-colors uppercase tracking-widest">
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <div className="flex bg-slate-100 rounded-lg p-1 border border-slate-200">
            <button onClick={() => setLang('vi')} className={`px-3 py-1 text-[10px] font-bold transition-all ${lang === 'vi' ? 'lang-active shadow-sm' : 'text-slate-500 hover:text-[#0f172a]'}`}>VN</button>
            <button onClick={() => setLang('en')} className={`px-3 py-1 text-[10px] font-bold transition-all ${lang === 'en' ? 'lang-active shadow-sm' : 'text-slate-500 hover:text-[#0f172a]'}`}>EN</button>
          </div>
          <a href="tel:0909107789" className="hidden xl:block text-sm font-bold text-[#0f172a] border-l border-slate-200 pl-6">0909.107.789</a>
          <a href="#dang-ky-cai-dat" className="hidden md:inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all shadow-lg shadow-red-600/20">{t('nav.register')}</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
