
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
    { name: t('nav.ai'), link: '#neural-ai' },
    { name: t('nav.pricing'), link: '#gói-giải-pháp' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-10'}`}>
      <div className={`max-w-[1720px] mx-auto px-10 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl border border-slate-200/50 rounded-full shadow-2xl' : 'bg-transparent'}`}>
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <img 
              src="https://cagboot.com/upload/CAG%20PRO%20cloud%20R.png" 
              alt="CAG Pro" 
              className={`transition-all duration-500 ${isScrolled ? 'h-10' : 'h-14'}`} 
            />
          </a>

          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((item) => (
              <a key={item.name} href={item.link} className="text-[12px] font-black text-slate-500 hover:text-red-600 transition-all uppercase tracking-[0.3em]">
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center bg-slate-50/50 rounded-full p-1.5 border border-slate-100">
              <button 
                onClick={() => setLang('vi')} 
                className={`w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-black transition-all ${lang === 'vi' ? 'bg-red-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
              >
                VN
              </button>
              <button 
                onClick={() => setLang('en')} 
                className={`w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-black transition-all ${lang === 'en' ? 'bg-red-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
              >
                EN
              </button>
            </div>
            
            <a href="#dang-ky-cai-dat" className="hidden md:flex h-12 px-10 items-center justify-center bg-slate-900 hover:bg-red-600 text-white font-black text-[11px] uppercase tracking-widest rounded-full transition-all duration-300 shadow-xl shadow-slate-900/10 hover:shadow-red-600/20">
              {t('nav.register')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
