
import React from 'react';
import { useTranslation } from '../App';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-48 pb-32 px-10 bg-white overflow-hidden">
      <div className="max-w-[1720px] w-full mx-auto text-center relative z-10">
        <div className="reveal inline-flex items-center gap-6 px-10 py-4 rounded-full border border-slate-100 bg-slate-50/50 mb-20">
          <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-ping"></span>
          <span className="text-[11px] font-black uppercase tracking-[0.6em] text-slate-500">{t('hero.badge')}</span>
        </div>
        
        <h1 className="reveal heading-tech text-[clamp(4rem,12vw,14rem)] font-black tracking-tighter leading-[0.75] mb-20 text-[#0f172a]">
          <span className="opacity-10 block uppercase">{t('hero.title.top')}</span>
          <span className="block italic red-gradient-text">{t('hero.title.bottom')}</span>
        </h1>

        <p className="reveal max-w-4xl mx-auto text-base md:text-xl text-slate-400 mb-24 font-bold uppercase tracking-[0.4em] leading-relaxed">
          {t('hero.desc')}
        </p>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-8 mb-40">
          <a href="#dang-ky-cai-dat" className="w-full sm:w-auto px-16 py-8 bg-red-600 text-white font-black uppercase text-[13px] tracking-[0.5em] rounded-full hover:bg-slate-900 transition-all duration-700 shadow-[0_30px_80px_-20px_rgba(225,29,72,0.4)] hover:-translate-y-2">
            {t('hero.cta.start')}
          </a>
          <a href="tel:0909107789" className="w-full sm:w-auto px-16 py-8 border-2 border-slate-100 text-slate-500 font-black uppercase text-[13px] tracking-[0.5em] rounded-full hover:bg-slate-50 transition-all hover:-translate-y-2">
            {t('hero.cta.call')}
          </a>
        </div>

        <div className="reveal relative w-full max-w-[1600px] mx-auto">
          <div className="absolute -inset-60 bg-red-600/10 blur-[200px] rounded-full opacity-40 -z-10 animate-pulse"></div>
          <div className="p-6 bg-white border border-slate-100/50 rounded-[5rem] shadow-[0_80px_160px_-40px_rgba(0,0,0,0.15)]">
            <img 
              src="https://cagboot.com/upload/pro_slider_1.jpg" 
              alt="CAG Pro Interface" 
              className="w-full h-auto rounded-[4.2rem]" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
