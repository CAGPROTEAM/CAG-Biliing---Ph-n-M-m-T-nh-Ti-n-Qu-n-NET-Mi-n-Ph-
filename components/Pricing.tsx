
import React from 'react';
import { useTranslation } from '../App';

const Pricing: React.FC = () => {
  const { lang } = useTranslation();

  const tiers = [
    {
      name: lang === 'vi' ? "CAG BILLING" : "CAG BILLING",
      price: "0",
      currency: "VNĐ",
      desc: lang === 'vi' ? "Bản quyền miễn phí trọn đời." : "Lifetime free licensing.",
      features: [
        lang === 'vi' ? "Quản lý tính tiền chuyên nghiệp" : "Professional billing management",
        lang === 'vi' ? "Nạp tiền QR tự động 100%" : "100% Automatic QR Recharge",
        lang === 'vi' ? "Báo cáo doanh thu Mobile" : "Mobile Revenue Reports"
      ],
      cta: lang === 'vi' ? "DÙNG NGAY 0đ" : "START FOR 0đ",
      highlight: false
    },
    {
      name: lang === 'vi' ? "DỊCH VỤ SUPPORT" : "TECH SUPPORT",
      price: "10K",
      currency: "/PC/THÁNG",
      desc: lang === 'vi' ? "Hỗ trợ kỹ thuật & Update Game." : "Tech Support & Game Updates.",
      features: [
        lang === 'vi' ? "Auto Update Game 24/7" : "24/7 Auto Game Updates",
        lang === 'vi' ? "Hỗ trợ kỹ thuật từ xa & trực tiếp" : "Remote & On-site support",
        lang === 'vi' ? "Bảo trì hệ thống định kỳ" : "Periodic system maintenance"
      ],
      cta: lang === 'vi' ? "LIÊN HỆ ĐĂNG KÝ" : "SUBSCRIBE NOW",
      highlight: true
    },
    {
      name: lang === 'vi' ? "TRỌN GÓI CYBER" : "FULL CYBER",
      price: "CUSTOM",
      currency: "",
      desc: lang === 'vi' ? "Thi công & Lắp đặt trọn gói." : "Full Installation & Setup.",
      features: [
        lang === 'vi' ? "Tư vấn thiết kế 3D chuyên sâu" : "Deep 3D Design Consulting",
        lang === 'vi' ? "Cung cấp bàn ghế Cyber Game" : "Cyber Gaming Furniture Supply",
        lang === 'vi' ? "Lắp đặt phần cứng & Phần mềm" : "Hardware & Software Setup"
      ],
      cta: lang === 'vi' ? "TƯ VẤN THI CÔNG" : "GET CONSULTING",
      highlight: false
    }
  ];

  return (
    <section id="gói-giải-pháp" className="py-32 px-6 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24 reveal">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-red-600 mb-6 italic">Investment</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0f172a] mb-6">GIẢI PHÁP ĐẦU TƯ</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <div key={idx} className={`reveal relative p-10 rounded-[2.5rem] border transition-all duration-700 ${tier.highlight ? 'bg-slate-900 text-white border-slate-900 shadow-2xl scale-105 z-10' : 'bg-white text-[#0f172a] border-slate-100 shadow-sm hover:shadow-xl'}`}>
              <h3 className={`text-[11px] font-black uppercase tracking-[0.3em] mb-10 ${tier.highlight ? 'text-red-500' : 'text-slate-400'}`}>{tier.name}</h3>
              
              <div className="mb-10">
                <span className="text-5xl font-black italic tracking-tighter">{tier.price}</span>
                <span className={`text-[10px] font-bold ml-2 uppercase tracking-widest ${tier.highlight ? 'text-slate-500' : 'text-slate-400'}`}>{tier.currency}</span>
              </div>

              <p className={`text-xs font-bold uppercase tracking-widest mb-12 ${tier.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{tier.desc}</p>

              <ul className="space-y-6 mb-16 border-t pt-10 border-slate-200/10">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.15em]">
                    <div className={`w-1 h-1 rounded-full ${tier.highlight ? 'bg-red-500' : 'bg-slate-300'}`}></div>
                    {f}
                  </li>
                ))}
              </ul>

              <a 
                href={idx === 1 ? "https://cagboot.com/cam-nang-icafe/chinh-sach-suport-phan-mem-cap-nhat-game-tu-dong-cho-khach-hang-34.html" : "#dang-ky-cai-dat"}
                className={`block w-full py-5 text-center text-[10px] font-black uppercase tracking-[0.3em] rounded-full transition-all duration-300 ${tier.highlight ? 'bg-red-600 hover:bg-white hover:text-[#0f172a]' : 'bg-slate-50 hover:bg-red-600 hover:text-white border border-slate-100'}`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
