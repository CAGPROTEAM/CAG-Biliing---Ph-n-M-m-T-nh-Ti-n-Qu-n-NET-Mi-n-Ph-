
import React from 'react';
import { useTranslation } from '../App';

const Mission: React.FC = () => {
  const { lang, t } = useTranslation();

  return (
    <section className="py-32 px-6 bg-[#f8fafc] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto text-center">
        <div className="reveal">
          <h2 className="heading-tech text-[clamp(3rem,8vw,10rem)] font-bold italic tracking-tighter leading-[0.85] uppercase mb-16 text-[#0f172a]">
            LEGACY <br /><span className="text-slate-300">MEETS</span> <br /><span className="red-gradient-text">FUTURE</span>
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold italic text-[#0f172a] border-l-4 border-red-600 pl-8 py-4 uppercase text-left md:text-center md:border-l-0 md:border-t-4 md:pt-8 md:pl-0 inline-block">
              "{t('mission.quote')}"
            </p>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              {t('mission.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
