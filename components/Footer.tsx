
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 mb-20">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4 mb-10">
            {/* Gỡ bỏ grayscale để logo giữ nguyên màu sắc */}
            <img 
              src="https://cagboot.com/upload/CAG%20PRO%20cloud%20R.png" 
              alt="CAG Pro" 
              className="h-12 w-auto transition-transform hover:scale-105" 
            />
          </div>
          <div className="space-y-6 mb-10">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-[#0f172a]">ĐƠN VỊ CHỦ QUẢN: VI TÍNH AN PHÁT</h4>
            <p className="text-slate-500 text-base font-semibold leading-[1.8] uppercase tracking-widest">
              Số 45 D2, Phường 25, Quận Bình Thạnh, TP. Hồ Chí Minh. <br />
              Chuyên gia lắp đặt Cyber Game & Giải pháp iCafe hàng đầu Việt Nam.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a href="https://vitinhanphat.vn/" target="_blank" className="group">
              <span className="text-[10px] font-black uppercase tracking-widest text-red-600 group-hover:text-[#0f172a] transition-colors block">Vi Tính An Phát</span>
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Thi công & Lắp đặt</span>
            </a>
            <a href="https://cyberallgame.vn/" target="_blank" className="group">
              <span className="text-[10px] font-black uppercase tracking-widest text-red-600 group-hover:text-[#0f172a] transition-colors block">Cyber All Game</span>
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Thiết kế & Bàn ghế</span>
            </a>
            <a href="https://cagboot.com/" target="_blank" className="group">
              <span className="text-[10px] font-black uppercase tracking-widest text-red-600 group-hover:text-[#0f172a] transition-colors block">CAG Boot</span>
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Phần mềm & Kỹ thuật</span>
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs font-black uppercase tracking-[0.4em] text-[#0f172a] mb-10">DỊCH VỤ CỐT LÕI</h4>
          <ul className="space-y-8 text-sm font-bold uppercase tracking-widest text-slate-500">
            <li className="group">
              <a href="https://vitinhanphat.vn/lap-dat-phong-net-tron-goi/" className="group-hover:text-red-600 transition-colors block mb-1">Lắp đặt phòng net</a>
              <span className="text-[9px] text-slate-400 block tracking-normal">Tư vấn cấu hình tối ưu nhất</span>
            </li>
            <li className="group">
              <a href="https://vitinhanphat.vn/thiet-ke-phong-net-cyber-game/" className="group-hover:text-red-600 transition-colors block mb-1">Thiết kế Cyber Game</a>
              <span className="text-[9px] text-slate-400 block tracking-normal">Phong cách không gian đẳng cấp</span>
            </li>
            <li className="group">
              <a href="https://support.cagpro.cloud/" className="group-hover:text-red-600 transition-colors block mb-1">Bảo trì phần mềm</a>
              <span className="text-[9px] text-slate-400 block tracking-normal">Support 24/7 tức thì</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-xs font-black uppercase tracking-[0.4em] text-[#0f172a] mb-10">LIÊN HỆ TRỰC TIẾP</h4>
          <div className="space-y-8">
            <a href="tel:0909107789" className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-xl bg-red-600/5 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-md">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">Hotline / Zalo 24/7</p>
                <p className="text-3xl font-black text-red-600 tracking-tighter">0909.107.789</p>
              </div>
            </a>
            <a href="https://support.cagpro.cloud/" target="_blank" className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0f172a] group-hover:bg-[#0f172a] group-hover:text-white transition-all shadow-md">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">Hệ thống Support</p>
                <p className="text-lg font-bold text-slate-600">Gửi yêu cầu hỗ trợ ngay</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-14 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 italic text-center sm:text-left">
          CAG Pro - Comprehensive Solution for your iCafe. <br className="sm:hidden" /> Powered by Vi Tính An Phát.
        </p>
        <div className="flex items-center gap-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-red-600 cursor-pointer transition-colors underline decoration-slate-200">Cam kết bảo mật 100%</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-red-600 cursor-pointer transition-colors underline decoration-slate-200">Quy định sử dụng dịch vụ</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
