
import React from 'react';
import { useTranslation } from '../App';

const Features: React.FC = () => {
  const { lang } = useTranslation();

  const features = [
    {
      title: lang === 'vi' ? "QUẢN LÝ HỘI VIÊN" : "MEMBER MANAGEMENT",
      desc: lang === 'vi' ? "Chuyển dữ liệu từ CSM/Gcafe sang CAG dễ dàng. Bảo mật tuyệt đối, chống hack giờ, quản lý nhóm khách hàng linh hoạt." : "Easy data migration from CSM/Gcafe. Absolute security, anti-time-hack, flexible customer group management.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      title: lang === 'vi' ? "NẠP TIỀN TỰ ĐỘNG QR" : "AUTO QR PAYMENT",
      desc: lang === 'vi' ? "Tích hợp VietQR & Momo. Khách quét mã - Tiền vào tài khoản ngay lập tức. Giảm thất thoát, giải phóng nhân sự thu ngân." : "Integrated VietQR & Momo. Scan code - Money credited instantly. Minimize loss, free up cashier staff.",
      icon: "M12 4v1m6 11h2m-6 0h-2v4h2v-4zM6 6h6v6H6V6zm1.5 1.5v3h3v-3h-3zm6.5.5h6v6h-6V8zm1.5 1.5v3h3v-3h-3zM6 15h6v6H6v-6zm1.5 1.5v3h3v-3h-3z"
    },
    {
      title: lang === 'vi' ? "ORDER DỊCH VỤ 1 CHẠM" : "INSTANT SERVICE ORDER",
      desc: lang === 'vi' ? "Menu đồ ăn uống trực quan, đẹp mắt ngay tại máy trạm. Khách gọi món nhanh, bếp/bar nhận đơn tức thì, tối ưu doanh thu." : "Visual, attractive food & drink menu at workstation. Fast ordering, kitchen/bar receives orders instantly, optimizing revenue.",
      icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      title: lang === 'vi' ? "BÁO CÁO MOBILE" : "MOBILE DASHBOARD",
      desc: lang === 'vi' ? "Xem báo cáo doanh thu, tồn kho, tình trạng phòng máy theo thời gian thực trên điện thoại. Quản lý từ xa mọi lúc mọi nơi." : "View real-time revenue, inventory, and room status reports on mobile. Manage remotely anytime, anywhere.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    }
  ];

  return (
    <section id="hệ-sinh-thái" className="py-40 px-10 bg-white">
      <div className="max-w-[1720px] mx-auto">
        <div className="text-center mb-24 reveal">
          <p className="text-[10px] font-black uppercase tracking-[0.6em] text-red-600 mb-6 italic">CAG BILLING FEATURES</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0f172a] mb-6 leading-tight">
            TÍNH NĂNG <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">VƯỢT TRỘI</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-slate-200"></div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] italic">Giải pháp quản lý phòng máy 4.0</p>
            <div className="w-12 h-[1px] bg-slate-200"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className="reveal p-12 rounded-[2.5rem] border border-slate-100 bg-white hover:border-red-100 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group flex flex-col h-full">
              <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-2xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 mb-8 shadow-sm flex-shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={f.icon} />
                </svg>
              </div>
              <h3 className="text-base font-black mb-4 uppercase tracking-[0.2em] text-[#0f172a] group-hover:text-red-600 transition-colors h-12 flex items-center">{f.title}</h3>
              <p className="text-slate-500 text-xs leading-loose font-bold uppercase tracking-wide opacity-90">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
