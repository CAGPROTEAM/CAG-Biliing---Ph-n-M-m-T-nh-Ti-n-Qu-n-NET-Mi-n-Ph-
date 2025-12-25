
import React, { useState, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Features from './components/Features';
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
    'nav.features': 'Tính Năng',
    'nav.ai': 'Trí Tuệ Nhân Tạo',
    'nav.pricing': 'Gói Giải Pháp',
    'nav.register': 'Đăng Ký',
    'hero.badge': 'Hệ sinh thái iCafe 4.0',
    'hero.title.top': 'Kỷ Nguyên Mới',
    'hero.title.bottom': 'PHẦN MỀM CAG PRO',
    'hero.desc': 'Giải pháp quản trị toàn diện dành cho Cyber Game hiện đại từ Vi Tính An Phát.',
    'hero.cta.start': 'BẮT ĐẦU NGAY',
    'hero.cta.call': 'GỌI TƯ VẤN',
    'mission.title': 'DI SẢN & TẦM NHÌN',
    'mission.quote': 'Công nghệ là đòn bẩy, Uy tín là nền móng.',
    'mission.desc': 'CAG Pro không chỉ là phần mềm, đó là lời cam kết từ Cyber All Game dành cho cộng đồng iCafe Việt Nam.',
    'mission.oem.title': 'DỊCH VỤ OEM RIÊNG BIỆT',
    'mission.oem.desc': 'Xây dựng đế chế Cyber Game riêng với thương hiệu của chính bạn.',
    'mission.oem.cta': 'HỢP TÁC OEM',
    'reg.title': 'ĐĂNG KÝ CÀI ĐẶT',
    'reg.desc': 'Bản quyền CAG Billing MIỄN PHÍ vĩnh viễn và hỗ trợ kỹ thuật chuyên nghiệp.',
    'reg.btn': 'HOÀN TẤT ĐĂNG KÝ',
    'mobile.call': 'GỌI NGAY',
    'mobile.reg': 'ĐĂNG KÝ 0Đ'
  },
  en: {
    'nav.features': 'Features',
    'nav.ai': 'Neural AI',
    'nav.pricing': 'Solutions',
    'nav.register': 'Register',
    'hero.badge': 'iCafe 4.0 Ecosystem',
    'hero.title.top': 'The Next Gen',
    'hero.title.bottom': 'CAG PRO SOFTWARE',
    'hero.desc': 'Comprehensive management solutions for modern Cyber Games by An Phat Computer.',
    'hero.cta.start': 'GET STARTED',
    'hero.cta.call': 'CONSULT NOW',
    'mission.title': 'LEGACY & VISION',
    'mission.quote': 'Technology is the lever, Trust is the foundation.',
    'mission.desc': 'CAG Pro is more than software, it is a commitment from Cyber All Game to the iCafe community.',
    'mission.oem.title': 'PRIVATE OEM SERVICE',
    'mission.oem.desc': 'Build your own Cyber Game empire with your own unique branding.',
    'mission.oem.cta': 'OEM PARTNERSHIP',
    'reg.title': 'REGISTRATION',
    'reg.desc': 'Get CAG Billing FREE forever with professional technical support.',
    'reg.btn': 'SUBMIT REGISTRATION',
    'mobile.call': 'CALL NOW',
    'mobile.reg': 'FREE SETUP'
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

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className="min-h-screen relative bg-[#f8fafc] text-[#0f172a]">
        <Navbar />
        <main>
          <Hero />
          <Mission />
          <Features />
          <AIShowcase />
          <RegistrationForm />
          <Pricing />
        </main>
        <Footer />
        <div className="lg:hidden fixed bottom-6 left-4 right-4 z-[100]">
          <div className="bg-white/90 backdrop-blur-2xl border border-slate-200 rounded-2xl p-2 flex gap-2 shadow-2xl">
            <a href="tel:0909107789" className="flex-1 bg-slate-100 text-[#0f172a] h-14 rounded-xl flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider border border-slate-200">
              {t('mobile.call')}
            </a>
            <a href="#dang-ky-cai-dat" className="flex-[1.5] bg-red-600 text-white h-14 rounded-xl flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/20">
              {t('mobile.reg')}
            </a>
          </div>
        </div>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
