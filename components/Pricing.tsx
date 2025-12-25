
import React from 'react';

const tiers = [
  {
    name: "CAG Billing (Community)",
    price: "0 VNĐ",
    description: "Bản quyền miễn phí vĩnh viễn dành cho cộng đồng iCafe Việt Nam. Tuyệt đối không chi phí ẩn.",
    features: ["Full tính năng quản lý Cloud", "Nạp tiền QR tự động 0% phí", "Báo cáo doanh thu thời gian thực", "Order dịch vụ & Menu App", "Không giới hạn số lượng máy"],
    popular: false,
    isFree: true,
    cta: "TẢI MIỄN PHÍ VĨNH VIỄN",
    subCta: "Vì cộng đồng iCafe Việt Nam",
    link: "#dang-ky-cai-dat"
  },
  {
    name: "Dịch vụ Kỹ thuật & Update",
    price: "TỪ 10.000đ",
    unit: "/máy/tháng",
    description: "Dịch vụ vận hành Bootrom và cập nhật Game tự động chuyên nghiệp.",
    features: ["Cài đặt Bootrom Cloud 10G", "Auto Update 500+ Game hot", "Hỗ trợ kỹ thuật 24/7", "Xử lý sự cố phần cứng/mềm", "Tối ưu hóa Performance máy"],
    popular: true,
    cta: "XEM CHI TIẾT GIÁ",
    subCta: "Chính sách support niêm yết",
    link: "https://cagboot.com/cam-nang-icafe/chinh-sach-suport-phan-mem-cap-nhat-game-tu-dong-cho-khach-hang-34.html"
  },
  {
    name: "Giải pháp OEM",
    price: "CUSTOM",
    description: "Thiết kế riêng cho chuỗi Cyber Game lớn và đại lý muốn xây dựng thương hiệu.",
    features: ["Brand giao diện riêng biệt", "Hệ thống quản lý tập trung", "Setup trọn gói chuyên sâu", "Chuyên gia On-site hỗ trợ", "Bảo mật dữ liệu riêng tư"],
    popular: false,
    cta: "LIÊN HỆ PARTNER",
    subCta: "Dành cho chuỗi Cyber Game",
    link: "tel:0909107789"
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="gói-giải-pháp" className="py-32 px-6 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 reveal">
          <div className="inline-block px-5 py-2 bg-red-600/5 border border-red-600/10 text-red-600 text-sm font-black uppercase tracking-widest mb-8">Minh bạch & Trách nhiệm</div>
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black uppercase tracking-tighter mb-8 leading-tight text-[#0f172a]">GÓI GIẢI PHÁP VẬN HÀNH</h2>
          <p className="text-slate-500 font-bold max-w-3xl mx-auto uppercase text-base md:text-lg tracking-[0.2em] leading-relaxed">
            CAG Billing phát hành miễn phí vì cộng đồng iCafe. <br className="hidden md:block" /> 
            Phí dịch vụ chỉ áp dụng khi quý khách cần kỹ thuật hỗ trợ chuyên sâu và update game.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 reveal">
          {tiers.map((tier, idx) => (
            <div key={idx} className={`relative p-10 md:p-12 bg-white rounded-[2rem] border border-slate-200 transition-all duration-500 hover:shadow-2xl group ${tier.popular ? 'ring-2 ring-red-600/20 bg-slate-50/30' : ''} ${tier.isFree ? 'border-green-100 bg-green-50/10' : ''}`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">PHỔ BIẾN NHẤT</div>
              )}
              {tier.isFree && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-green-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">CỘNG ĐỒNG 0Đ</div>
              )}
              
              <h3 className={`text-sm font-black uppercase tracking-[0.4em] mb-8 ${tier.isFree ? 'text-green-600' : 'text-red-600'}`}>{tier.name}</h3>
              <p className="text-slate-500 text-sm md:text-base mb-12 font-bold leading-relaxed h-14">{tier.description}</p>
              
              <div className="flex items-baseline gap-3 mb-14">
                <span className={`text-5xl font-black italic tracking-tighter text-[#0f172a] uppercase ${tier.isFree ? "text-green-600" : tier.price === "0 VNĐ" ? "red-gradient-text" : ""}`}>{tier.price}</span>
                {tier.unit && <span className="text-slate-400 text-xs font-black uppercase tracking-widest">{tier.unit}</span>}
              </div>

              <ul className="space-y-6 mb-16 h-[320px]">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-4 text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-[#0f172a] transition-colors leading-snug">
                    <div className={`w-1.5 h-1.5 mt-1.5 shrink-0 rounded-full ${tier.isFree ? 'bg-green-500' : 'bg-red-600'}`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <a 
                  href={tier.link}
                  target={tier.link.startsWith('http') ? '_blank' : '_self'}
                  className={`block w-full py-6 text-center font-black text-xs uppercase tracking-[0.3em] transition-all rounded-xl ${
                    tier.isFree 
                    ? 'bg-green-600 text-white hover:bg-[#0f172a] shadow-lg shadow-green-600/20' 
                    : tier.popular
                    ? 'bg-red-600 text-white hover:bg-[#0f172a] shadow-lg shadow-red-600/20' 
                    : 'bg-white text-[#0f172a] hover:bg-red-600 hover:text-white border border-slate-200'
                  }`}
                >
                  {tier.cta}
                </a>
                <p className={`text-center text-[10px] font-bold uppercase tracking-widest ${tier.isFree ? 'text-green-600' : 'text-slate-400'}`}>{tier.subCta}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center reveal">
          <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-slate-50 border border-slate-100 border-dashed">
             <p className="text-slate-600 text-sm font-bold uppercase tracking-[0.1em] leading-relaxed">
              * Chúng tôi cam kết CAG Billing là dự án phi lợi nhuận dành cho cộng đồng iCafe. <br />
              Dữ liệu của khách hàng là bảo mật tuyệt đối. Hỗ trợ kỹ thuật là tùy chọn không bắt buộc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
