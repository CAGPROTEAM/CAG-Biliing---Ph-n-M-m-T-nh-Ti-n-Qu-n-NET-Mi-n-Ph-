
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-300 py-24 px-6 relative overflow-hidden">
        {/* Subtle pattern or glow for "đẳng cấp" feel */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20 mb-20 relative z-10">
            {/* Column 1: Brand Info (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
                <div className="flex items-center gap-3">
                     <img 
                        src="https://cagboot.com/upload/CAG%20PRO%20cloud%20R.png" 
                        alt="CAG Pro" 
                        className="h-14" 
                    />
                </div>
                <p className="text-sm leading-7 text-slate-400 font-medium">
                    Hệ sinh thái công nghệ phòng máy toàn diện. Tiên phong giải pháp Bootrom Cloud 10G & Billing miễn phí vĩnh viễn, được vận hành và bảo trợ bởi Vi Tính An Phát.
                </p>
                
                <div className="space-y-4 pt-6 border-t border-white/5">
                    <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Đơn vị chủ quản</p>
                         <h5 className="text-white font-bold text-sm tracking-wide">AN PHAT COMPUTER DIGITAL TECHNOLOGY CO.,LTD</h5>
                    </div>
                     <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Trụ sở chính</p>
                         <p className="text-slate-400 text-sm">36/44/11 Nguyễn Gia Trí, Phường Thạnh Mỹ Tây, Thành phố Hồ Chí Minh, Việt Nam</p>
                    </div>
                    <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Thông tin pháp lý</p>
                         <p className="text-slate-400 text-sm">Mst: 0318820036 - Xuất bản phần mềm (Ngành nghề chính)</p>
                    </div>
                </div>
            </div>

            {/* Column 2: Solutions (2 cols) */}
            <div className="lg:col-span-2">
                <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Giải Pháp</h4>
                <ul className="space-y-5 text-sm font-medium text-slate-400">
                    <li><a href="#he-sinh-thai" className="hover:text-red-500 transition-colors block">Bootrom Cloud 10G</a></li>
                    <li><a href="#dang-ky-cai-dat" className="hover:text-red-500 transition-colors block">Billing Miễn Phí</a></li>
                    <li><a href="https://vitinhanphat.vn/" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors block">Thi Công Phòng Net</a></li>
                    <li><a href="https://cyberallgame.vn/" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors block">Thiết Kế Cyber Game</a></li>
                    <li><a href="#oem-branding" className="hover:text-red-500 transition-colors block">OEM Branding</a></li>
                </ul>
            </div>

            {/* Column 3: Resources (3 cols) */}
            <div className="lg:col-span-3">
                <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Tài Nguyên</h4>
                <ul className="space-y-5 text-sm font-medium text-slate-400">
                    <li>
                        <a href="/calculator.html" className="group flex items-center gap-2 hover:text-white transition-colors">
                            <span>Bảng Tính Doanh Thu</span>
                            <span className="text-[9px] bg-red-600 text-white px-1.5 rounded py-0.5">HOT</span>
                        </a>
                    </li>
                    <li><a href="/update-guide.html" target="_blank" className="hover:text-red-500 transition-colors block">Hướng Dẫn Update Game</a></li>
                    <li><a href="/terms-privacy.html" className="hover:text-red-500 transition-colors block">Điều Khoản & Bảo Mật</a></li>
                    <li><a href="/donate-policy.html" className="hover:text-red-500 transition-colors block">Chính Sách Minh Bạch (Donate)</a></li>
                    <li><a href="https://support.cagpro.cloud/" target="_blank" className="hover:text-red-500 transition-colors block">Trung Tâm Hỗ Trợ (Support)</a></li>
                </ul>
            </div>

             {/* Column 4: Contact (3 cols) */}
            <div className="lg:col-span-3">
                <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Liên Hệ</h4>
                 <div className="space-y-6">
                    <a href="tel:0909107789" className="group block p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/5 hover:border-red-600/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/20">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/30">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Hotline Kỹ Thuật</p>
                                <p className="text-xl font-black text-white tracking-tight group-hover:text-red-500 transition-colors">0909.107.789</p>
                            </div>
                        </div>
                    </a>
                    
                    <div className="flex gap-4">
                         <a href="https://zalo.me/0909107789" target="_blank" className="flex-1 py-3 px-4 rounded-xl bg-white/5 border border-white/5 hover:bg-blue-600 hover:border-blue-600 text-xs font-bold uppercase tracking-wider text-center transition-all">
                            Chat Zalo
                         </a>
                         <a href="https://www.facebook.com/cagboot.cyberallgame.vn/" target="_blank" className="flex-1 py-3 px-4 rounded-xl bg-white/5 border border-white/5 hover:bg-[#1877F2] hover:border-[#1877F2] text-xs font-bold uppercase tracking-wider text-center transition-all">
                            Facebook
                         </a>
                    </div>
                 </div>
            </div>
        </div>

        <div className="max-w-[1600px] mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[11px] text-slate-500 font-medium">
                © 2026 <span className="text-slate-300 font-bold">CAG PRO CLOUD</span>. Developed by <a href="https://vitinhanphat.vn" target="_blank" rel="noreferrer" className="text-red-500 font-bold hover:text-red-400 transition-colors">Vi Tính An Phát</a>.
            </p>
            <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                <a href="/terms-privacy.html" className="hover:text-white transition-colors">Privacy</a>
                <a href="/terms-privacy.html" className="hover:text-white transition-colors">Terms</a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
