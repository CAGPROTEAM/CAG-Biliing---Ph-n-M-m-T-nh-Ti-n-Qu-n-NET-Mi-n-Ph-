
import React from 'react';
import { useTranslation } from '../App';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-12 px-6 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(225,29,72,0.05),transparent_70%)] pointer-events-none"></div>
      <div className="max-w-7xl w-full mx-auto text-center relative z-10">
        <div className="reveal inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-red-500/10 bg-red-500/5 mb-10">
          <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-600">{t('hero.badge')}</span>
        </div>
        <h1 className="reveal heading-tech text-[clamp(2.5rem,7vw,7.5rem)] font-extrabold tracking-tighter leading-[0.9] mb-12 text-[#0f172a]">
          <span className="opacity-20 block">{t('hero.title.top')}</span>
          <span className="red-gradient-text block italic uppercase">{t('hero.title.bottom')}</span>
        </h1>
        <p className="reveal max-w-2xl mx-auto text-lg md:text-xl text-slate-500 mb-16 font-medium leading-relaxed">{t('hero.desc')}</p>
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <a href="#dang-ky-cai-dat" className="w-full sm:w-auto px-10 py-5 bg-red-600 text-white font-bold uppercase text-xs tracking-widest rounded-full hover:bg-red-700 transition-all shadow-xl shadow-red-600/20">{t('hero.cta.start')}</a>
          <a href="tel:0909107789" className="w-full sm:w-auto px-10 py-5 border border-slate-200 text-[#0f172a] font-bold uppercase text-xs tracking-widest rounded-full hover:bg-slate-50 transition-all">{t('hero.cta.call')}</a>
        </div>
        <div className="reveal relative w-full max-w-5xl mx-auto group">
          <div className="absolute -inset-10 bg-red-600/5 blur-[100px] rounded-full opacity-30 -z-10 transition-all group-hover:opacity-50"></div>
          <div className="glass-card p-1.5 rounded-3xl border border-slate-200 shadow-2xl bg-white">
            <img src="https://cagboot.com/upload/pro_slider_1.jpg" alt="CAG Pro" className="w-full h-auto rounded-[1.4rem] shadow-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
