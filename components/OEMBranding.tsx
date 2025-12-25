
import React, { useState } from 'react';
import { sendOEMToTelegram } from '../services/telegramService';
import type { OEMRegistrationData } from '../services/telegramService';
import { useTranslation } from '../App';

const OEMBranding: React.FC = () => {
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
    <section className="py-32 px-6 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
             <div className="reveal">
                <div className="glass-card p-12 md:p-16 rounded-[3rem] relative bg-slate-50 border border-slate-100 shadow-xl text-center hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.1)] transition-all duration-500">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-100 text-red-600 z-10">
                         <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#0f172a] mb-6 mt-8">{t('mission.oem.title')}</h3>
                    <p className="text-slate-600 text-lg mb-10 font-medium leading-relaxed max-w-2xl mx-auto">{t('mission.oem.desc')}</p>
                    <button onClick={() => setIsModalOpen(true)} className="px-12 py-5 bg-red-600 hover:bg-[#0f172a] text-white font-bold uppercase text-xs tracking-[0.3em] rounded-full shadow-xl shadow-red-600/20 transition-all duration-300 transform hover:-translate-y-1">
                      {t('mission.oem.cta')}
                    </button>
                </div>
            </div>
        </div>
      
       {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative w-full max-w-3xl bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-h-[90vh] overflow-y-auto animate-fade-in">
            <div className="flex justify-between items-center mb-8">
               <h3 className="text-2xl font-black uppercase tracking-tight text-[#0f172a]">HỢP TÁC OEM BRANDING</h3>
               <button onClick={() => setIsModalOpen(false)} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-red-600 hover:text-white transition-colors">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
               </button>
            </div>
            
            <form onSubmit={handleOEMSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Họ tên liên hệ</label>
                   <input required placeholder="NHẬP HỌ TÊN..." className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:border-red-600 focus:bg-white outline-none transition-all" value={formData.contactName} onChange={e => setFormData({...formData, contactName: e.target.value})} />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Số điện thoại</label>
                   <input required type="tel" placeholder="NHẬP SỐ ĐIỆN THOẠI..." className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:border-red-600 focus:bg-white outline-none transition-all" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Tên thương hiệu muốn OEM</label>
                   <input required placeholder="VÍ DỤ: Cyber X..." className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:border-red-600 focus:bg-white outline-none transition-all" value={formData.brandName} onChange={e => setFormData({...formData, brandName: e.target.value})} />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">SL phòng máy đang có</label>
                   <input required placeholder="VÍ DỤ: 5 Chi nhánh..." className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:border-red-600 focus:bg-white outline-none transition-all" value={formData.scale} onChange={e => setFormData({...formData, scale: e.target.value})} />
                </div>
              </div>
              
              <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Các yêu cầu khác</label>
                   <textarea rows={3} placeholder="Ghi chú thêm về yêu cầu kỹ thuật hoặc thiết kế..." className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:border-red-600 focus:bg-white outline-none transition-all resize-none" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
              </div>

              <button type="submit" disabled={status === 'loading'} className="w-full py-5 bg-[#0f172a] hover:bg-red-600 text-white font-black uppercase tracking-[0.2em] rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    ĐANG GỬI...
                  </>
                ) : (status === 'success' ? 'ĐÃ GỬI THÀNH CÔNG' : 'GỬI YÊU CẦU HỢP TÁC')}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default OEMBranding;
