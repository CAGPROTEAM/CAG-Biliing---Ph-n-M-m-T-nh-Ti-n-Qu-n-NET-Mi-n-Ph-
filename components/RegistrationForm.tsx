
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
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const success = await sendToTelegram(formData);
    if (success) {
      setStatus('success');
      // Redirect to thank-you.html on success
      window.location.href = '/thank-you.html';
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
    phName: lang === 'vi' ? 'NGUYỄN VĂN A' : 'YOUR FULL NAME',
    phSoftware: lang === 'vi' ? 'Ví dụ: Gcafe, CSM...' : 'e.g. Gcafe, CSM...',
    phIssues: lang === 'vi' ? 'Cần cài đặt gấp trong tuần này...' : 'Need installation this week...'
  };

  const inputClasses = (fieldName: string) => `
    w-full bg-white/[0.03] border rounded-2xl px-6 py-5 text-sm font-bold text-white 
    placeholder:text-slate-600 outline-none transition-all duration-300
    ${focusedField === fieldName 
      ? 'border-red-500/50 bg-white/[0.08] ring-4 ring-red-500/10 shadow-[0_0_20px_-5px_rgba(239,68,68,0.3)]' 
      : 'border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
    }
  `;

  return (
    <section id="dang-ky-cai-dat" className="py-32 px-6 bg-slate-50 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
       <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-[#0f172a] rounded-[3rem] p-10 md:p-20 shadow-[0_40px_100px_-20px_rgba(15,23,42,0.4)] overflow-hidden reveal border border-white/5 relative">
          
          {/* Decorative gradients inside card */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-12 gap-16 relative z-10">
            {/* Header Form */}
            <div className="lg:col-span-4 text-white">
              <p className="text-red-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6 animate-pulse">Join the Community</p>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8 leading-none bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400">
                {t('reg.title')}
              </h2>
              <p className="text-slate-400 font-medium text-lg mb-10 leading-relaxed">
                {lang === 'vi' 
                 ? 'Để lại thông tin, đội ngũ kỹ thuật CAG sẽ liên hệ tư vấn giải pháp tối ưu nhất cho phòng máy của bạn.' 
                 : 'Leave your info, CAG technical team will contact you to consult the most optimal solution for your iCafe.'}
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-slate-300 group">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover:border-green-500/50 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_currentColor]"></span>
                  </div>
                  <span className="group-hover:text-white transition-colors">Support 24/7</span>
                </div>
                <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-slate-300 group">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_currentColor]"></span>
                  </div>
                  <span className="group-hover:text-white transition-colors">Free Setup</span>
                </div>
                <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-slate-300 group">
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/50 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_currentColor]"></span>
                  </div>
                  <span className="group-hover:text-white transition-colors">Auto Update</span>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <label className={`text-[10px] font-black uppercase tracking-wider pl-4 transition-colors duration-300 ${focusedField === 'fullName' ? 'text-red-500' : 'text-slate-500 group-hover:text-slate-300'}`}>{labels.fullName}</label>
                    <input 
                      required 
                      type="text" 
                      placeholder={labels.phName} 
                      className={inputClasses('fullName')}
                      value={(formData as any).fullName} 
                      onChange={e => setFormData({...formData, fullName: e.target.value})}
                      onFocus={() => setFocusedField('fullName')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className={`text-[10px] font-black uppercase tracking-wider pl-4 transition-colors duration-300 ${focusedField === 'phone' ? 'text-red-500' : 'text-slate-500 group-hover:text-slate-300'}`}>{labels.phone}</label>
                    <input 
                      required 
                      type="tel" 
                      placeholder="09XX XXX XXX" 
                      className={inputClasses('phone')}
                      value={(formData as any).phone} 
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <label className={`text-[10px] font-black uppercase tracking-wider pl-4 transition-colors duration-300 ${focusedField === 'pcCount' ? 'text-red-500' : 'text-slate-500 group-hover:text-slate-300'}`}>{labels.pcCount}</label>
                    <input 
                      type="number" 
                      placeholder="PC QTY" 
                      className={inputClasses('pcCount')}
                      value={(formData as any).pcCount} 
                      onChange={e => setFormData({...formData, pcCount: e.target.value})}
                      onFocus={() => setFocusedField('pcCount')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className={`text-[10px] font-black uppercase tracking-wider pl-4 transition-colors duration-300 ${focusedField === 'area' ? 'text-red-500' : 'text-slate-500 group-hover:text-slate-300'}`}>{labels.area}</label>
                    <input 
                      type="text" 
                      placeholder="LOCATION" 
                      className={inputClasses('area')}
                      value={(formData as any).area} 
                      onChange={e => setFormData({...formData, area: e.target.value})}
                      onFocus={() => setFocusedField('area')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label className={`text-[10px] font-black uppercase tracking-wider pl-4 transition-colors duration-300 ${focusedField === 'issues' ? 'text-red-500' : 'text-slate-500 group-hover:text-slate-300'}`}>{labels.issues}</label>
                  <textarea 
                    rows={2} 
                    placeholder={labels.phIssues} 
                    className={`${inputClasses('issues')} resize-none`}
                    value={formData.issues} 
                    onChange={e => setFormData({...formData, issues: e.target.value})}
                    onFocus={() => setFocusedField('issues')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'} 
                  className="group relative w-full py-5 bg-gradient-to-br from-red-600 to-red-700 hover:from-white hover:to-white hover:text-[#0f172a] text-white font-black uppercase text-xs tracking-[0.3em] rounded-2xl transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(220,38,38,0.5)] hover:shadow-[0_20px_40px_-5px_rgba(255,255,255,0.3)] flex items-center justify-center gap-3 mt-8 overflow-hidden transform hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {status === 'loading' ? 'PROCESSING...' : t('reg.btn')}
                    {status !== 'loading' && (
                       <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    )}
                  </span>
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
