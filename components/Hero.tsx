
import React from 'react';
import { useTranslation } from '../App';

const Hero: React.FC = () => {
  const { lang, t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 bg-white overflow-hidden">
      {/* Background Abstract */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-slate-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-red-50/50 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 -z-10"></div>

      <div className="max-w-[1600px] w-full mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Content - High Conversion Focus */}
        <div className="lg:col-span-6 text-center lg:text-left pt-10 lg:pt-0">
          <div className="reveal inline-flex items-center gap-3 px-4 py-2 rounded-full border border-red-100 bg-red-50/50 mb-8 animate-fade-in">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600">
              {lang === 'vi' ? 'SỐ 1 VỀ CÔNG NGHỆ PHÒNG MÁY' : '#1 IN ICAFE TECHNOLOGY'}
            </span>
          </div>
          
          <h1 className="reveal heading-tech text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-[#0f172a]">
            CAG BILLING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500 italic">
              {lang === 'vi' ? 'MIỄN PHÍ 100%' : '100% FREE'}
            </span>
          </h1>

          <p className="reveal text-lg text-slate-600 font-bold leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
            {lang === 'vi' 
              ? 'Phần mềm quản lý phòng NET miễn phí chuyên nghiệp. Tích hợp thanh toán tự động, Gọi món mua combo siêu nhanh, giảm tải cho thu ngân.... Đăng ký dùng ngay hôm nay.'
              : 'Professional free NET room management software. Integrated automatic payment, super fast combo ordering, reducing cashier workload.... Register today.'}
          </p>

          {/* New High Conversion CTA Buttons */}
          <div className="reveal flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            {/* Primary Action: Register Install */}
            <a 
              href="#dang-ky-cai-dat"
              className="group relative w-full sm:w-auto h-16 px-8 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-black uppercase text-[11px] tracking-[0.2em] rounded-full transition-all duration-300 shadow-[0_20px_40px_-15px_rgba(220,38,38,0.5)] hover:shadow-[0_25px_50px_-10px_rgba(220,38,38,0.6)] transform hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                {lang === 'vi' ? 'ĐĂNG KÝ CÀI ĐẶT' : 'REGISTER INSTALL'}
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>

            {/* Secondary Action: Download Free */}
            <a 
              href="https://download.cagpro.cloud/download/download.php"
              target="_blank"
              rel="noopener noreferrer" 
              className="group relative w-full sm:w-auto h-16 px-8 flex items-center justify-center bg-[#0f172a] hover:bg-slate-800 text-white font-black uppercase text-[11px] tracking-[0.2em] rounded-full transition-all duration-300 shadow-xl shadow-slate-900/20 transform hover:-translate-y-1 border border-slate-700"
            >
               <span className="flex items-center gap-3">
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                {lang === 'vi' ? 'TẢI PHẦN MỀM FREE' : 'DOWNLOAD FREE'}
              </span>
            </a>
          </div>
          
          <div className="reveal mt-8 flex items-center justify-center lg:justify-start gap-6 text-slate-500">
             <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                <span className="text-[10px] font-bold uppercase tracking-wider">Setup 0đ</span>
             </div>
             <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                <span className="text-[10px] font-bold uppercase tracking-wider">Auto Update</span>
             </div>
             <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                <span className="text-[10px] font-bold uppercase tracking-wider">Support 24/7</span>
             </div>
          </div>
        </div>

        {/* Right Content - Visual Impact */}
        <div className="lg:col-span-6 relative reveal delay-200">
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 border-4 border-white transform lg:rotate-[-2deg] hover:rotate-0 transition-all duration-700">
             <img 
              src="https://cagboot.com/upload/CAGBILLING-FREE.png" 
              alt="CAG Billing Interface" 
              className="w-full h-auto object-cover scale-105" 
            />
            
            {/* Float Badge - RGB LED Style & Compact */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow hidden sm:block">
              <div className="p-[2px] rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 shadow-[0_0_25px_rgba(168,85,247,0.6)]">
                <div className="bg-white/95 backdrop-blur-xl py-2 px-6 rounded-full flex flex-col items-center">
                  <p className="text-[8px] font-black uppercase text-slate-500 tracking-widest">LICENSE FEE</p>
                  <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600 tracking-tighter leading-tight my-0.5">0 VNĐ</p>
                  <p className="text-[8px] font-bold text-[#0f172a] uppercase tracking-wider">LIFETIME ACCESS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements behind image */}
          <div className="absolute -top-10 -right-10 w-full h-full border-2 border-slate-100 rounded-[3.5rem] -z-10 lg:rotate-[2deg]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
