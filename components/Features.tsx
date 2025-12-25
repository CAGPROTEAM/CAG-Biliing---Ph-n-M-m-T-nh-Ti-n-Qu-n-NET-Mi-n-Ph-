
import React from 'react';
import { useTranslation } from '../App';

const Features: React.FC = () => {
  const { lang } = useTranslation();

  const features = [
    {
      title: lang === 'vi' ? "BOOTROM CLOUD 10G" : "10G CLOUD BOOTROM",
      desc: lang === 'vi' ? "Tối ưu hóa tốc độ đọc ghi đĩa cứng, vận hành mượt mà trên hạ tầng 10G." : "Optimize disk read/write speeds, running smoothly on 10G infrastructure.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: lang === 'vi' ? "AUTO UPDATE" : "AUTO GAME UPDATER",
      desc: lang === 'vi' ? "Tự động cập nhật 500+ Game hot nhất, không cần nhân sự vận hành." : "Automatically update 500+ top trending games without manual operation.",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    },
    {
      title: lang === 'vi' ? "CAG BILLING" : "CAG BILLING SYSTEM",
      desc: lang === 'vi' ? "Hệ thống tính tiền Cloud hiện đại, nạp tiền QR tự động và quản lý từ xa." : "Modern cloud billing system, automated QR payments, and remote management.",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2"
    },
    {
      title: lang === 'vi' ? "DỊCH VỤ OEM" : "OEM BRANDING",
      desc: lang === 'vi' ? "Cá nhân hóa giao diện và thương hiệu chuyên biệt cho từng phòng máy." : "Personalize interface and branding specifically for each cyber game.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16"
    }
  ];

  return (
    <section id="hệ-sinh-thái" className="py-32 px-6 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="reveal glass-card p-10 rounded-3xl flex flex-col items-start group bg-white border-slate-200">
              <div className="w-14 h-14 bg-red-600/5 rounded-2xl flex items-center justify-center text-red-600 mb-8 transition-all group-hover:bg-red-600 group-hover:text-white shadow-sm">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={f.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-[#0f172a]">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
