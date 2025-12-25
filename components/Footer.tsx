
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-32 px-10 border-t border-slate-200 bg-slate-50">
      <div className="max-w-[1720px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-10 mb-24">
        
        {/* BRAND COLUMN */}
        <div className="md:col-span-12 lg:col-span-4">
          <div className="flex items-center gap-4 mb-12">
            <img 
              src="https://cagboot.com/upload/CAG%20PRO%20cloud%20R.png" 
              alt="CAG Pro" 
              className="h-16 w-auto transition-transform hover:scale-105" 
            />
          </div>
          <div className="space-y-8 mb-12">
            <h4 className="text-lg font-black uppercase tracking-[0.4em] text-red-600">NHÀ TÀI TRỢ CHÍNH: VI TÍNH AN PHÁT</h4>
            <div className="space-y-6">
              <p className="text-slate-600 text-base font-bold uppercase tracking-widest leading-relaxed">
                Số 36/44/11 Nguyễn Gia Trí, Phường Thạnh Mỹ Tây, TP. Hồ Chí Minh.
              </p>
              <p className="text-[#0f172a] text-2xl font-black italic leading-tight tracking-tight max-w-2xl">
                "Chúng tôi làm cho cuộc sống tốt đẹp hơn với những việc chúng tôi yêu thích. Bạn sẵn sàng gia nhập CAG Pro hôm nay chưa ?"
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <a href="https://vitinhanphat.vn/" target="_blank" className="group">
              <span className="text-xs font-black uppercase tracking-widest text-red-600 group-hover:text-[#0f172a] transition-colors block mb-1">Vi Tính An Phát</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter group-hover:text-slate-800">Thi công & Lắp đặt</span>
            </a>
            <a href="https://cyberallgame.vn/" target="_blank" className="group">
              <span className="text-xs font-black uppercase tracking-widest text-red-600 group-hover:text-[#0f172a] transition-colors block mb-1">Cyber All Game</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter group-hover:text-slate-800">Thiết kế & Bàn ghế</span>
            </a>
            <a href="https://cagboot.com/" target="_blank" className="group">
              <span className="text-xs font-black uppercase tracking-widest text-red-600 group-hover:text-[#0f172a] transition-colors block mb-1">CAG Boot</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter group-hover:text-slate-800">Phần mềm & Kỹ thuật</span>
            </a>
          </div>
        </div>

        {/* CORE SERVICES COLUMN */}
        <div className="md:col-span-4 lg:col-span-2">
          <h4 className="text-sm font-black uppercase tracking-[0.5em] text-[#0f172a] mb-12">DỊCH VỤ CỐT LÕI</h4>
          <ul className="space-y-10 text-base font-bold uppercase tracking-widest text-slate-600">
            <li className="group">
              <a href="https://cyberallgame.vn/tin-tuc/khoi-nghiep-cung-cyber-all-game-voi-mo-hinh-kinh-doanh-esport-day-tiem-nang.html" className="group-hover:text-red-600 transition-colors block mb-2">Lắp đặt phòng net</a>
              <span className="text-xs text-slate-500 block tracking-normal normal-case font-medium">Tư vấn cấu hình tối ưu nhất</span>
            </li>
            <li className="group">
              <a href="https://cyberallgame.vn/" className="group-hover:text-red-600 transition-colors block mb-2">Thiết kế Cyber Game</a>
              <span className="text-xs text-slate-500 block tracking-normal normal-case font-medium">Phong cách không gian đẳng cấp</span>
            </li>
            <li className="group">
              <a href="https://vitinhanphat.com.vn/nang-cap-tu-sua-phong-game-de-giu-chan-khach-hang-tang-su-chuyen-doi-p33442765.html" className="group-hover:text-red-600 transition-colors block mb-2">Nâng cấp phòng game</a>
              <span className="text-xs text-slate-500 block tracking-normal normal-case font-medium">Tối ưu hiệu năng & Trải nghiệm</span>
            </li>
            <li className="group">
              <a href="https://cagboot.com/cam-nang-icafe/loi-ich-tu-bao-tri-ve-sinh-may-tinh-phong-games-thuong-xuyen-58.html" className="group-hover:text-red-600 transition-colors block mb-2">Bảo trì, vệ sinh phòng game</a>
              <span className="text-xs text-slate-500 block tracking-normal normal-case font-medium">Tăng tuổi thọ linh kiện</span>
            </li>
            <li className="group">
              <a href="https://support.cagpro.cloud/" className="group-hover:text-red-600 transition-colors block mb-2">Bảo trì phần mềm</a>
              <span className="text-xs text-slate-500 block tracking-normal normal-case font-medium">Support 24/7 tức thì</span>
            </li>
          </ul>
        </div>

        {/* UTILITIES & RESOURCES COLUMN (NEW) */}
        <div className="md:col-span-4 lg:col-span-3">
          <h4 className="text-sm font-black uppercase tracking-[0.5em] text-[#0f172a] mb-12">TIỆN ÍCH & TÀI NGUYÊN</h4>
          <ul className="space-y-8">
            <li className="group">
              <a 
                href="/calculator.html" 
                title="Công cụ tính toán chi phí đầu tư, doanh thu và điểm hòa vốn cho phòng game"
                className="block"
              >
                <span className="text-base font-bold uppercase tracking-widest text-slate-600 group-hover:text-red-600 transition-colors flex items-center gap-2">
                  Bảng Tính Lợi Nhuận
                  <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                </span>
                <span className="text-[11px] text-slate-400 mt-1.5 block font-medium leading-normal hover:text-slate-600 transition-colors">
                  Dự toán dòng tiền & Điểm hòa vốn chi tiết
                </span>
              </a>
            </li>
            <li className="group">
              <a 
                href="/donate-policy.html" 
                title="Cam kết minh bạch tài chính và trách nhiệm xã hội của CAG Pro"
                className="block"
              >
                <span className="text-base font-bold uppercase tracking-widest text-slate-600 group-hover:text-red-600 transition-colors flex items-center gap-2">
                  Chính Sách Donate
                  <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                </span>
                <span className="text-[11px] text-slate-400 mt-1.5 block font-medium leading-normal hover:text-slate-600 transition-colors">
                  Minh bạch hoạt động & Báo cáo tài chính
                </span>
              </a>
            </li>
            <li className="group">
              <a 
                href="/terms-privacy.html" 
                title="Điều khoản sử dụng phần mềm và chính sách bảo mật dữ liệu người dùng"
                className="block"
              >
                <span className="text-base font-bold uppercase tracking-widest text-slate-600 group-hover:text-red-600 transition-colors flex items-center gap-2">
                  Điều Khoản & Bảo Mật
                  <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                </span>
                <span className="text-[11px] text-slate-400 mt-1.5 block font-medium leading-normal hover:text-slate-600 transition-colors">
                  Tuân thủ Nghị định 13 & Quyền riêng tư
                </span>
              </a>
            </li>
            <li className="group">
              <a 
                href="/update-guide.html" 
                target="_blank"
                title="Hướng dẫn kỹ thuật cài đặt tính năng cập nhật game tự động"
                className="block"
              >
                <span className="text-base font-bold uppercase tracking-widest text-slate-600 group-hover:text-red-600 transition-colors flex items-center gap-2">
                  Hướng Dẫn Update
                  <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </span>
                <span className="text-[11px] text-slate-400 mt-1.5 block font-medium leading-normal hover:text-slate-600 transition-colors">
                  Tài liệu kỹ thuật Auto Game 24/7
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT COLUMN */}
        <div className="md:col-span-4 lg:col-span-3">
          <h4 className="text-sm font-black uppercase tracking-[0.5em] text-[#0f172a] mb-12">LIÊN HỆ TRỰC TIẾP</h4>
          <div className="space-y-10">
            <a href="tel:0909107789" className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/5 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-xl flex-shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 italic">Hotline / Zalo 24/7</p>
                <p className="text-2xl font-black text-red-600 tracking-tighter">0909.107.789</p>
              </div>
            </a>
            <a href="https://support.cagpro.cloud/" target="_blank" className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center text-[#0f172a] group-hover:bg-[#0f172a] group-hover:text-white transition-all shadow-xl flex-shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 italic">Hệ thống Support</p>
                <p className="text-lg font-bold text-slate-600 uppercase">Gửi Yêu Cầu</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1720px] mx-auto pt-16 border-t border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-10">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 italic text-center lg:text-left leading-loose">
          CAG Pro - Comprehensive Ecosystem for modern iCafe. <br className="hidden lg:block" /> Developed & Sponsored by Vi Tính An Phát.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-red-600 cursor-pointer transition-colors">
            © 2025 CAG PRO CLOUD
          </span>
          <a href="/terms-privacy.html" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-red-600 cursor-pointer transition-colors underline decoration-slate-300 decoration-2 underline-offset-4">
            Security Compliance
          </a>
          <a href="/terms-privacy.html" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-red-600 cursor-pointer transition-colors underline decoration-slate-300 decoration-2 underline-offset-4">
            Service Agreement
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
