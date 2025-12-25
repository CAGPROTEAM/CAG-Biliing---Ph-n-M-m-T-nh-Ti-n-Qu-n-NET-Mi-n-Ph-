
import React from 'react';
import { useTranslation } from '../App';

const Pricing: React.FC = () => {
  const { lang } = useTranslation();

  const tiers = [
    {
      name: lang === 'vi' ? "PHẦN MỀM BILLING" : "BILLING SOFTWARE",
      price: "0",
      currency: "VNĐ",
      badge: lang === 'vi' ? "MIỄN PHÍ VĨNH VIỄN" : "FREE FOREVER",
      features: [
        lang === 'vi' ? "Bản quyền sử dụng 0đ" : "0đ Licensing fee",
        lang === 'vi' ? "Nạp tiền QR tự động 100%" : "100% Auto QR Recharge",
        lang === 'vi' ? "Quản lý doanh thu Mobile" : "Mobile Revenue Dashboard",
        lang === 'vi' ? "Tối ưu hóa máy trạm" : "Workstation Optimization"
      ],
      cta: lang === 'vi' ? "DÙNG NGAY" : "START NOW",
      highlight: false
    },
    {
      name: "CAG UPDATES GAMES",
      price: "10K",
      currency: lang === 'vi' ? "/PC/CHU KỲ" : "/PC/CYCLE",
      badge: lang === 'vi' ? "PHỔ BIẾN NHẤT" : "MOST POPULAR",
      features: [
        lang === 'vi' ? "Auto Update Game 24/7" : "24/7 Auto Game Update",
        lang === 'vi' ? "Hỗ trợ kỹ thuật chuyên sâu" : "Expert Tech Support",
        lang === 'vi' ? "Bảo trì hệ thống định kỳ" : "Periodic Maintenance",
        lang === 'vi' ? "Xử lý lỗi tức thì 24/7" : "Instant 24/7 Fixes"
      ],
      cta: lang === 'vi' ? "LIÊN HỆ ĐĂNG KÝ" : "SUBSCRIBE NOW",
      highlight: true
    },
    {
      name: lang === 'vi' ? "THƯƠNG HIỆU OEM" : "OEM BRANDING",
      price: "CUSTOM",
      currency: "",
      badge: lang === 'vi' ? "GIẢI PHÁP CHUỖI" : "CHAIN SOLUTION",
      features: [
        lang === 'vi' ? "Logo & Giao diện riêng" : "Private Logo & UI",
        lang === 'vi' ? "Thiết kế 3D chuẩn Esports" : "Esports 3D Design",
        lang === 'vi' ? "Hợp đồng cam kết VIP" : "VIP Commitment Contract",
        lang === 'vi' ? "Vận hành chuỗi tập trung" : "Centralized Chain Mgmt"
      ],
      cta: lang === 'vi' ? "TƯ VẤN VIP" : "VIP CONSULTING",
      highlight: false
    }
  ];

  return (
    <section id="gói-giải-pháp" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-slate-50 rounded-full blur-[120px] -z-10 opacity-40"></div>
      
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-[10px] font-black uppercase tracking-[0.6em] text-red-600 mb-6 italic">Investment Packages</p>
          <h2 className="heading-tech text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0f172a] mb-6 leading-tight">
            {lang === 'vi' ? 'GIẢI PHÁP ' : 'SOLUTIONS '} 
            <span className="red-gradient-text">
              {lang === 'vi' ? 'BOOTROM & CẬP NHẬT GAME TỰ ĐỘNG' : 'BOOTROM & AUTO GAME UPDATE'}
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-slate-200"></div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] italic">Đồng hành cùng sự thịnh vượng của iCafe</p>
            <div className="w-12 h-[1px] bg-slate-200"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`reveal relative flex flex-col p-8 rounded-[2rem] transition-all duration-700 ${
                tier.highlight 
                ? 'bg-[#0f172a] text-white shadow-[0_30px_60px_-15px_rgba(15,23,42,0.3)] scale-105 z-10' 
                : 'bg-white text-[#0f172a] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-red-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)]'
              }`}
            >
              {/* Badge */}
              <div className="mb-6">
                <span className={`inline-block px-4 py-1.5 rounded-full text-[8px] font-black tracking-[0.2em] uppercase ${
                  tier.highlight ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {tier.badge}
                </span>
              </div>

              <h3 className="text-xl font-black uppercase tracking-tight mb-3 leading-tight">{tier.name}</h3>
              
              <div className="flex items-baseline gap-1.5 mb-8">
                <span className={`text-5xl font-black italic tracking-tighter ${tier.highlight ? 'text-white' : 'text-[#0f172a]'}`}>
                  {tier.price}
                </span>
                <span className={`text-[9px] font-bold uppercase tracking-widest ${tier.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                  {tier.currency}
                </span>
              </div>

              {/* Core Features List */}
              <div className="flex-grow space-y-4 mb-10 border-t pt-8 border-slate-200/20">
                {tier.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`mt-1 w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      tier.highlight ? 'bg-red-600/20 text-red-500' : 'bg-slate-100 text-red-600'
                    }`}>
                      <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider leading-relaxed ${tier.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <a 
                href={idx === 1 ? "https://cagboot.com/cam-nang-icafe/chinh-sach-suport-phan-mem-cap-nhat-game-tu-dong-cho-khach-hang-34.html" : "#dang-ky-cai-dat"}
                className={`block w-full py-4 text-center text-[10px] font-black uppercase tracking-[0.3em] rounded-full transition-all duration-500 ${
                  tier.highlight 
                  ? 'bg-red-600 text-white hover:bg-white hover:text-[#0f172a] shadow-lg shadow-red-600/20' 
                  : 'bg-slate-900 text-white hover:bg-red-600 shadow-md shadow-slate-900/10'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal space-y-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.5em] italic">
            * Hotline liên hệ: 0909.107.789
          </p>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] italic">
            * {lang === 'vi' ? '1 Chu Kỳ Thanh Toán CAG Pro Là 30 Ngày / 1 Năm Là 360 Ngày' : '1 Payment Cycle of CAG Pro is 30 Days / 1 Year is 360 Days'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
