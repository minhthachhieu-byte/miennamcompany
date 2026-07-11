import React from 'react';
import { ArrowRight, ChevronRight, Award, Shield, Globe, Compass } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const statItems = [
    { value: '10+', label: t.statYears, icon: Award },
    { value: '3+', label: t.statProjects, icon: Compass },
    { value: lang === 'vi' ? '1 Tỷ USD+' : '$1B USD+', label: t.statCapital, icon: Shield },
    { value: '35+', label: t.statPartners, icon: Globe },
  ];

  return (
    <section className="relative min-h-screen bg-[#0F172A] pt-20 flex flex-col justify-between overflow-hidden">
      {/* Background Graphic and Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_banner_1783744318474.jpg"
          alt="BĐS Miền Nam Office Tower"
          className="w-full h-full object-cover opacity-25 scale-105 filter brightness-75 animate-pulse-slow"
          referrerPolicy="no-referrer"
        />
        {/* Abstract Architectural Background Pattern overlay from Design HTML */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#0F172A]/90 to-transparent" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundImageSize: '40px 40px' }}></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#D4AF37]/10 to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-center pt-16 pb-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Column: Heading, Subtitle, CTA buttons */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-full">
              <span className="flex h-2 w-2 rounded-full bg-[#D4AF37] animate-ping" />
              <span className="text-xs font-sans font-bold text-[#D4AF37] uppercase tracking-[0.25em]">
                {lang === 'vi' ? 'KHÁT VỌNG QUỐC TẾ' : 'INTERNATIONAL VISION'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.15]" style={{ fontFamily: 'Georgia, serif' }}>
              {t.heroTitle.split('&').map((part, index) => (
                <span key={index} className="block">
                  {index > 0 && <span className="text-[#D4AF37] italic font-light">&amp; </span>}
                  {part}
                </span>
              ))}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => handleScroll('projects')}
                className="flex items-center justify-center space-x-2 bg-[#D4AF37] hover:bg-[#bfa032] text-[#0F172A] px-8 py-4 rounded-md text-base font-bold shadow-lg shadow-[#D4AF37]/10 hover:shadow-[#D4AF37]/25 transition-all duration-300 cursor-pointer"
              >
                <span>{t.heroExplore}</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </button>

              <button
                onClick={() => handleScroll('contact')}
                className="flex items-center justify-center space-x-2 border border-slate-700 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-md text-base font-semibold transition duration-300 cursor-pointer"
              >
                <span>{t.heroContact}</span>
                <ChevronRight className="h-4.5 w-4.5 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Decorative Premium Floating Element */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative p-8 rounded-2xl bg-[#0F172A]/90 border border-slate-800/80 backdrop-blur-lg shadow-2xl">
              <div className="absolute -top-4 -right-4 bg-[#D4AF37] text-[#0F172A] font-mono text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                {lang === 'vi' ? 'HẠNG A QUỐC TẾ' : 'INTERNATIONAL GRADE A'}
              </div>

              <h3 className="text-lg font-bold text-white mb-4 tracking-wide font-sans">
                {lang === 'vi' ? 'Bản Lĩnh Người Tiên Phong' : 'Pioneering Standard'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                {lang === 'vi' 
                  ? 'BĐS Miền Nam sở hữu 100% các quỹ đất đắc địa trải khắp các trung tâm kinh tế trọng điểm miền Nam Việt Nam. Tất cả dự án đều được thi công bởi các nhà thầu đẳng cấp thế giới.'
                  : 'Mien Nam Land secures highly coveted, prime land footprints across Southern Vietnam\'s key economic hubs, all developed with exemplary engineering.'}
              </p>

              <div className="space-y-4">
                {[
                  { text: lang === 'vi' ? '100% Pháp lý minh bạch và rõ ràng' : '100% Pristine legal clearance', progress: '100%' },
                  { text: lang === 'vi' ? 'Bảo chứng tài chính bởi các định chế lớn' : 'Fully capitalized by premier institutions', progress: '100%' },
                  { text: lang === 'vi' ? 'Tổng thầu thi công chuẩn mực quốc tế' : 'Elite global-grade construction general contractor', progress: '100%' }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-slate-300">{item.text}</span>
                      <span className="text-[#D4AF37] font-bold">{item.progress}</span>
                    </div>
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#D4AF37] to-amber-300 rounded-full" style={{ width: item.progress }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Statistic Badges */}
      <div className="relative z-10 w-full bg-[#0F172A]/85 border-t border-slate-800/60 py-8 lg:py-12 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-800/50">
            {statItems.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex flex-col items-center justify-center text-center p-4 first:pt-0 md:first:pt-4">
                  <div className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white/5 border border-white/10 mb-3.5">
                    <Icon className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-400 font-semibold tracking-wide mt-1.5">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
