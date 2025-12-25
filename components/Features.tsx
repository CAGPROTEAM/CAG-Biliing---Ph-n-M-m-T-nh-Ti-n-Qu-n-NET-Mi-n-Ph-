
import React from 'react';
import { useTranslation } from '../App';

const Features: React.FC = () => {
  const { lang } = useTranslation();

  const features = [
    {
      title: lang === 'vi' ? "BOOTROM CLOUD 10G" : "BOOTROM CLOUD 10G",
      desc: lang === 'vi' ? "Công nghệ không ổ cứng băng thông siêu rộng 10Gbps, đảm bảo máy trạm khởi động và load game trong tích tắc." : "Diskless technology with 10Gbps bandwidth, ensuring workstations start and load games instantly.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: lang === 'vi' ? "AUTO UPDATE GAME" : "AUTO UPDATE GAME",
      desc: lang === 'vi' ? "Kho game khổng lồ tự động cập nhật 24/7. Tối ưu dung lượng và đường truyền cho mọi quy mô phòng máy." : "Massive game library updated automatically 24/7. Optimize storage and connection for all iCafe sizes.",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    },
    {
      title: lang === 'vi' ? "BILLING MIỄN PHÍ" : "FREE BILLING",
      desc: lang === 'vi' ? "Phần mềm tính tiền bản quyền 0đ. Tích hợp thanh toán QR, báo cáo doanh thu qua điện thoại mọi lúc mọi nơi." : "0 VND licensing billing software. Integrated QR payment, revenue reporting via phone anytime, anywhere.",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2"
    },
    {
      title: lang === 'vi' ? "OEM BRANDING" : "OEM BRANDING",
      desc: lang === 'vi' ? "Cho phép chủ đầu tư sử dụng logo và bộ nhận diện thương hiệu riêng trên toàn hệ thống phần mềm." : "Allow investors to use their own logo and brand identity throughout the software system.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16"
    }
  ];

  return (
    <section id="hệ-sinh-thái" className="py-40 px-10 bg-white">
      <div className="max-w-[1720px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className="reveal p-16 rounded-[3rem] border-2 border-slate-50 hover:border-red-100 hover:bg-slate-50/50 hover:shadow-2xl transition-all duration-1000 group">
              <div className="w-20 h-20 flex items-center justify-center bg-slate-50 rounded-3xl text-slate-400 group-hover:bg-red-600 group-hover:text-white transition-all duration-700 mb-12 shadow-sm">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={f.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-black mb-6 uppercase tracking-[0.4em] text-[#0f172a] group-hover:text-red-600 transition-colors">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-bold uppercase tracking-wider opacity-80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
