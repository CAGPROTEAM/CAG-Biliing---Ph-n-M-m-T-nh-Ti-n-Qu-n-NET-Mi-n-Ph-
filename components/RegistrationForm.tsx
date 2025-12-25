
import React, { useState } from 'react';
import { sendToTelegram, RegistrationData } from '../services/telegramService';
import { useTranslation } from '../App';

const RegistrationForm: React.FC = () => {
  const { lang, t } = useTranslation();
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: '',
    phone: '',
    pcCount: '',
    area: '',
    currentSoftware: '',
    issues: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const success = await sendToTelegram(formData);
    if (success) {
      setStatus('success');
      setFormData({ fullName: '', phone: '', pcCount: '', area: '', currentSoftware: '', issues: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const labels = {
    fullName: lang === 'vi' ? 'Họ tên chủ sở hữu' : 'Full Name',
    phone: lang === 'vi' ? 'Số điện thoại' : 'Phone Number',
    pcCount: lang === 'vi' ? 'Số lượng máy' : 'PC Count',
    area: lang === 'vi' ? 'Khu vực' : 'Location',
    currentSoftware: lang === 'vi' ? 'Phần mềm đang dùng' : 'Current Software',
    issues: lang === 'vi' ? 'Ghi chú thêm' : 'Notes',
    phName: lang === 'vi' ? 'HỌ VÀ TÊN' : 'YOUR FULL NAME',
    phSoftware: lang === 'vi' ? 'Ví dụ: Thương hiệu riêng, cài mới...' : 'e.g. Private Brand, New Setup...',
    phIssues: lang === 'vi' ? 'YÊU CẦU ĐẶC BIỆT...' : 'SPECIAL REQUIREMENTS...'
  };

  return (
    <section id="dang-ky-cai-dat" className="py-32 px-6 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="heading-tech text-4xl md:text-6xl font-bold uppercase mb-6 tracking-tight text-[#0f172a]">
            {t('reg.title')}
          </h2>
          <p className="text-slate-500 font-bold text-lg uppercase tracking-widest max-w-2xl mx-auto">
            {t('reg.desc')}
          </p>
        </div>

        <div className="glass-card p-8 md:p-16 rounded-[2.5rem] border border-slate-200 shadow-xl reveal bg-white">
          {status === 'success' ? (
            <div className="text-center py-10 animate-fade-in">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 uppercase text-[#0f172a]">{lang === 'vi' ? 'GỬI THÀNH CÔNG!' : 'SUCCESSFULLY SENT!'}</h3>
              <p className="text-slate-500 font-medium">{lang === 'vi' ? 'Chúng tôi sẽ liên hệ bạn sớm nhất.' : 'We will contact you as soon as possible.'}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { label: labels.fullName, key: 'fullName', type: 'text', ph: labels.phName },
                  { label: labels.phone, key: 'phone', type: 'tel', ph: '09XX XXX XXX' },
                  { label: labels.pcCount, key: 'pcCount', type: 'number', ph: 'VÍ DỤ: 50' },
                  { label: labels.area, key: 'area', type: 'text', ph: 'TỈNH / THÀNH' }
                ].map((f) => (
                  <div key={f.key} className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-2">{f.label} *</label>
                    <input 
                      required
                      type={f.type}
                      placeholder={f.ph}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm font-bold outline-none focus:border-red-600 transition-all text-[#0f172a] placeholder:text-slate-300"
                      value={(formData as any)[f.key]}
                      onChange={e => setFormData({...formData, [f.key]: e.target.value})}
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-2">{labels.currentSoftware}</label>
                <input 
                  type="text"
                  placeholder={labels.phSoftware}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm font-bold outline-none focus:border-red-600 transition-all text-[#0f172a] placeholder:text-slate-300"
                  value={formData.currentSoftware}
                  onChange={e => setFormData({...formData, currentSoftware: e.target.value})}
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-2">{labels.issues}</label>
                <textarea 
                  rows={3}
                  placeholder={labels.phIssues}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm font-bold outline-none focus:border-red-600 transition-all resize-none text-[#0f172a] placeholder:text-slate-300"
                  value={formData.issues}
                  onChange={e => setFormData({...formData, issues: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-6 bg-red-600 hover:bg-[#0f172a] text-white font-bold uppercase text-xs tracking-[0.3em] rounded-xl transition-all shadow-lg shadow-red-600/20 flex items-center justify-center gap-3"
              >
                {status === 'loading' ? (lang === 'vi' ? 'ĐANG XỬ LÝ...' : 'PROCESSING...') : t('reg.btn')}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
