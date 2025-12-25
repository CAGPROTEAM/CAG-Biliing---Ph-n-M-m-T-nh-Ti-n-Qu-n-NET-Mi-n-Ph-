
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../App';

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.features'), link: '#hệ-sinh-thái' },
    { name: lang === 'vi' ? 'Album' : 'Gallery', link: '#thu-vien' },
    { name: t('nav.ai'), link: 'https://support.cagpro.cloud/' },
    { name: t('nav.pricing'), link: '#gói-giải-pháp' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-3' : 'py-8'}`}>
      <div className={`max-w-[1720px] mx-auto px-6 md:px-10 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl border border-slate-200/50 rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]' : 'bg-transparent'}`}>
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center">
            <img 
              src="https://cagboot.com/upload/CAG%20PRO%20cloud%20R.png" 
              alt="CAG Pro" 
              className={`transition-all duration-500 ${isScrolled ? 'h-8' : 'h-12'}`} 
            />
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.link} 
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-[11px] font-black text-slate-700 hover:text-red-600 transition-all uppercase tracking-[0.25em]"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center bg-slate-50 rounded-full p-1 border border-slate-200">
              <button 
                onClick={() => setLang('vi')} 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-[9px] font-black transition-all ${lang === 'vi' ? 'bg-[#0f172a] text-white shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
              >
                VN
              </button>
              <button 
                onClick={() => setLang('en')} 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-[9px] font-black transition-all ${lang === 'en' ? 'bg-[#0f172a] text-white shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
              >
                EN
              </button>
            </div>
            
            <a href="#dang-ky-cai-dat" className="relative group flex h-10 md:h-12 px-6 md:px-8 items-center justify-center bg-red-600 hover:bg-[#0f172a] text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-xl shadow-red-600/30 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                 {t('nav.register')}
                 <svg className="w-3 h-3 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
