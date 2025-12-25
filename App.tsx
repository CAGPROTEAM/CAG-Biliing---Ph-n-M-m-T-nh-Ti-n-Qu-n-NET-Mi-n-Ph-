
import React, { useState, createContext, useContext, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Features from './components/Features';
import ImageGallery from './components/ImageGallery';
import AIShowcase from './components/AIShowcase';
import RegistrationForm from './components/RegistrationForm';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

// Localization Context
type Language = 'vi' | 'en';
interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  vi: {
    'nav.features': 'Giải Pháp',
    'nav.ai': 'Hỗ Trợ AI',
    'nav.pricing': 'Bảng Giá',
    'nav.register': 'Liên Hệ Ngay',
    'hero.badge': 'Tiên Phong Bootrom Cloud 10G',
    'hero.title.top': 'Kiến Tạo',
    'hero.title.bottom': 'CHUẨN MỰC iCAFE',
    'hero.desc': 'Giải pháp Bootrom Cloud 10G & Billing miễn phí vĩnh viễn từ Vi Tính An Phát. Tối ưu hiệu suất, tiết kiệm chi phí, vận hành thông minh.',
    'hero.cta.start': 'SỬ DỤNG MIỄN PHÍ',
    'hero.cta.call': '0909.107.789',
    'mission.title': 'CHIẾN LƯỢC PHÁT TRIỂN',
    'mission.quote': 'Công nghệ dẫn lối - Dịch vụ tận tâm.',
    'mission.desc': 'CAG Pro không chỉ là phần mềm, chúng tôi cung cấp một hệ sinh thái toàn diện giúp chủ phòng máy giải quyết triệt để bài toán doanh thu và quản lý kỹ thuật 24/7.',
    'mission.oem.title': 'GIẢI PHÁP OEM BRANDING',
    'mission.oem.desc': 'Cá nhân hóa giao diện và thương hiệu riêng của bạn trên nền tảng công nghệ CAG Pro đẳng cấp.',
    'mission.oem.cta': 'HỢP TÁC THƯƠNG HIỆU',
    'gallery.title': 'HỆ SINH THÁI CAG',
    'gallery.desc': 'Trực quan hóa các module tính năng vượt trội: Từ Billing, Cloud đến hệ thống quản lý tập trung.',
    'reg.title': 'ĐĂNG KÝ CÀI ĐẶT',
    'reg.desc': 'Gia nhập cộng đồng iCafe hiện đại với sự hỗ trợ từ đội ngũ chuyên gia Vi Tính An Phát.',
    'reg.btn': 'XÁC NHẬN ĐĂNG KÝ',
    'mobile.call': 'GỌI NGAY',
    'mobile.reg': 'ĐĂNG KÝ'
  },
  en: {
    'nav.features': 'Solutions',
    'nav.ai': 'AI Support',
    'nav.pricing': 'Pricing',
    'nav.register': 'Contact Now',
    'hero.badge': 'Pioneer in 10G Cloud Bootrom',
    'hero.title.top': 'Engineering',
    'hero.title.bottom': 'iCAFE STANDARDS',
    'hero.desc': 'Ultimate 10G Cloud Bootrom & Free Billing solution by An Phat. Optimize performance, save costs, operate smartly.',
    'hero.cta.start': 'GET FREE LICENSE',
    'hero.cta.call': '0909.107.789',
    'mission.title': 'STRATEGIC GROWTH',
    'mission.quote': 'Technology leads - Service endures.',
    'mission.desc': 'CAG Pro is more than software; we provide a comprehensive ecosystem to help iCafe owners solve revenue and 24/7 technical management problems.',
    'mission.oem.title': 'OEM BRANDING SOLUTION',
    'mission.oem.desc': 'Personalize your own interface and brand on the high-end CAG Pro technology platform.',
    'mission.oem.cta': 'BRAND PARTNERSHIP',
    'gallery.title': 'CAG ECOSYSTEM',
    'gallery.desc': 'Visualize superior feature modules: From Billing, Cloud to centralized management systems.',
    'reg.title': 'INSTALLATION REGISTRY',
    'reg.desc': 'Join the modern iCafe community with support from An Phat expert team.',
    'reg.btn': 'CONFIRM REGISTRY',
    'mobile.call': 'CALL',
    'mobile.reg': 'REGISTER'
  }
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useTranslation must be used within LanguageProvider');
  return context;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('vi');
  const t = (key: string) => translations[lang][key] || key;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className="min-h-screen bg-white text-[#0f172a] selection:bg-red-100 selection:text-red-900">
        <Navbar />
        <main>
          <Hero />
          <Mission />
          <Features />
          <ImageGallery />
          <AIShowcase />
          <RegistrationForm />
          <Pricing />
        </main>
        <Footer />
        
        <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] z-[100]">
          <div className="bg-slate-900/90 backdrop-blur-xl rounded-2xl p-2 flex gap-2 shadow-2xl border border-white/10">
            <a href="tel:0909107789" className="flex-1 h-12 rounded-xl flex items-center justify-center font-bold text-[10px] uppercase tracking-widest text-white border border-white/10">
              {t('mobile.call')}
            </a>
            <a href="#dang-ky-cai-dat" className="flex-[1.5] h-12 bg-red-600 rounded-xl flex items-center justify-center font-bold text-[10px] uppercase tracking-widest text-white shadow-lg shadow-red-600/20">
              {t('mobile.reg')}
            </a>
          </div>
        </div>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
