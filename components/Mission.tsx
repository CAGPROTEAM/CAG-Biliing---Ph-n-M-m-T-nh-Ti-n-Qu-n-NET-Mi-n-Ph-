
import React, { useState } from 'react';
import { sendOEMToTelegram } from '../services/telegramService';
import type { OEMRegistrationData } from '../services/telegramService';
import { useTranslation } from '../App';

const Mission: React.FC = () => {
  const { lang, t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<OEMRegistrationData>({
    brandName: '',
    contactName: '',
    phone: '',
    scale: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleOEMSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const success = await sendOEMToTelegram(formData);
    if (success) {
      setStatus('success');
      setTimeout(() => { setIsModalOpen(false); setStatus('idle'); setFormData({ brandName: '', contactName: '', phone: '', scale: '', message: '' }); }, 3000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-40 px-6 bg-[#f8fafc] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="reveal">
            <h2 className="heading-tech text-[clamp(3rem,8vw,10rem)] font-bold italic tracking-tighter leading-[0.85] uppercase mb-16 text-[#0f172a]">LEGACY <br /><span className="text-slate-200">MEETS</span> <br /><span className="red-gradient-text">FUTURE</span></h2>
            <div className="space-y-8 max-w-2xl">
              <p className="text-2xl md:text-3xl font-bold italic text-[#0f172a] border-l-4 border-red-600 pl-8 py-4 uppercase">"{t('mission.quote')}"</p>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">{t('mission.desc')}</p>
            </div>
          </div>
          <div className="reveal">
            <div className="glass-card p-12 md:p-16 rounded-[3rem] relative bg-white">
              <h3 className="text-3xl font-bold uppercase tracking-tight text-[#0f172a] mb-8">{t('mission.oem.title')}</h3>
              <p className="text-slate-500 text-lg mb-12 font-medium leading-relaxed">{t('mission.oem.desc')}</p>
              <button onClick={() => setIsModalOpen(true)} className="w-full py-6 bg-red-600 text-white font-bold uppercase text-xs tracking-[0.4em] rounded-full shadow-xl shadow-red-600/20">{t('mission.oem.cta')}</button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative w-full max-w-4xl bg-white p-8 md:p-16 rounded-[2.5rem] shadow-2xl">
            <form onSubmit={handleOEMSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <input required placeholder="THƯƠNG HIỆU" className="w-full bg-slate-50 border-b-2 p-4 text-lg font-bold" value={formData.brandName} onChange={e => setFormData({...formData, brandName: e.target.value})} />
                <input required placeholder="LIÊN HỆ" className="w-full bg-slate-50 border-b-2 p-4 text-lg font-bold" value={formData.contactName} onChange={e => setFormData({...formData, contactName: e.target.value})} />
              </div>
              <button type="submit" disabled={status === 'loading'} className="w-full py-6 bg-red-600 text-white font-bold uppercase tracking-widest rounded-xl">
                {status === 'loading' ? 'PROCESSING...' : 'CONFIRM PARTNERSHIP'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Mission;
