
import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from '../App';

const ImageGallery: React.FC = () => {
  const { lang, t } = useTranslation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const images = [
    {
      url: "https://cagboot.com/upload/combo-CAG.jpg",
      title: lang === 'vi' ? "Mua combo ngay tại máy trạm" : "Buy combo at workstation",
      tag: "HARDWARE"
    },
    {
      url: "https://cagboot.com/upload/CAGPRO_Biliing_Free.jpg",
      title: lang === 'vi' ? "Quản lý trực quan phòng máy" : "Visual machine management",
      tag: "CLOUD"
    },
    {
      url: "https://cagboot.com/upload/CAGBILLING-FREE.png",
      title: lang === 'vi' ? "Phần mềm CAG Billing miễn phí" : "Free CAG Billing Software",
      tag: "BILLING"
    },
    {
      url: "https://cagboot.com/upload/huong-dan-chuyen-hoi-vein-cag-pro.png",
      title: lang === 'vi' ? "Tools Chuyển Hội Viên Qua CAG" : "CAG Member Transfer Tools",
      tag: "MIGRATION"
    },
    {
      url: "https://cagboot.com/upload/phan-mem-xuat-hoa-don-phong-net-mien-phi.png",
      title: lang === 'vi' ? "Phần mềm xuất hóa đơn miễn phí" : "Free Invoice Software",
      tag: "FINANCE"
    }
  ];

  // Auto-play engine
  useEffect(() => {
    let interval: number;
    const startAutoPlay = () => {
      interval = window.setInterval(() => {
        if (!isHovering && scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
          if (scrollLeft + clientWidth >= scrollWidth - 50) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scroll('right');
          }
        }
      }, 5000);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) startAutoPlay();
        else clearInterval(interval);
      },
      { threshold: 0.1 }
    );

    if (scrollContainerRef.current) observer.observe(scrollContainerRef.current);
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [isHovering, lang]);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth > 1200 ? clientWidth / 2 : clientWidth * 0.85;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="thu-vien" className="py-40 px-10 bg-[#fcfdfe] overflow-hidden">
      <div className="max-w-[1720px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 reveal">
          <div className="max-w-4xl">
            <p className="text-[12px] font-black uppercase tracking-[0.8em] text-red-600 mb-10 italic">Interactive Portfolio</p>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-[#0f172a] mb-10 leading-[0.85]">
              TRẢI NGHIỆM <br /> <span className="text-slate-200">TRỰC QUAN</span>
            </h2>
            <p className="text-slate-400 text-base font-bold uppercase tracking-[0.4em] leading-loose max-w-3xl">
              {t('gallery.desc')}
            </p>
          </div>
          
          <div className="flex gap-8 mt-16 lg:mt-0">
            <button 
              onClick={() => scroll('left')}
              className="group w-20 h-20 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-slate-300 hover:text-red-600 hover:border-red-600 hover:shadow-2xl transition-all duration-500"
            >
              <svg className="w-10 h-10 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="group w-20 h-20 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-slate-300 hover:text-red-600 hover:border-red-600 hover:shadow-2xl transition-all duration-500"
            >
              <svg className="w-10 h-10 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="flex gap-14 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-32 -mx-10 px-10"
        >
          {images.map((img, i) => (
            <div 
              key={i} 
              className="flex-none w-[90vw] md:w-[850px] snap-start reveal"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="group relative bg-white rounded-[5rem] border-2 border-slate-100/60 overflow-hidden shadow-sm hover:shadow-[0_60px_120px_-30px_rgba(0,0,0,0.12)] transition-all duration-1000">
                <div className="aspect-[16/9] w-full bg-slate-50 relative overflow-hidden flex items-center justify-center p-12">
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="max-w-full max-h-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-12 right-12 z-20">
                    <span className="px-8 py-3 bg-white/70 backdrop-blur-2xl text-slate-900 text-[11px] font-black tracking-[0.4em] rounded-full shadow-2xl border border-white/50">
                      {img.tag}
                    </span>
                  </div>
                </div>
                
                <div className="p-16 pt-12 relative bg-white">
                  <div className="absolute top-0 left-16 w-32 h-2 bg-red-600 -translate-y-1/2 rounded-full transform origin-left transition-all duration-1000 group-hover:w-64 group-hover:bg-slate-900"></div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#0f172a] mb-8 leading-tight group-hover:text-red-600 transition-colors duration-700">
                    {img.title}
                  </h3>
                  <div className="flex items-center gap-6 text-slate-300 text-[12px] font-black uppercase tracking-[0.3em]">
                    <span className="w-16 h-[2px] bg-slate-100 group-hover:w-24 transition-all duration-700 group-hover:bg-red-200"></span>
                    <span>Explore Interface Details</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center mt-12 reveal">
          <div className="relative h-3 w-96 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-600 via-red-500 to-slate-900 rounded-full transition-all duration-700 ease-out shadow-[0_0_25px_rgba(225,29,72,0.5)]"
              style={{ width: `${Math.max(12, scrollProgress)}%` }}
            ></div>
          </div>
          <div className="mt-12 flex items-center gap-6">
            <div className={`w-3 h-3 rounded-full bg-red-600 ${!isHovering ? 'animate-ping' : 'opacity-20'}`}></div>
            <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.8em] italic">
              {!isHovering ? 'Neural Auto-Switch Pulse' : 'Interaction Detected - System Paused'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
