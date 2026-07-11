import React from 'react';
import { Landmark, Hammer, HeartHandshake, Eye, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = translations[lang];

  const pillars = [
    {
      title: t.pillar1Title,
      desc: t.pillar1Desc,
      icon: Landmark,
      color: 'from-blue-500 to-cyan-400'
    },
    {
      title: t.pillar2Title,
      desc: t.pillar2Desc,
      icon: Hammer,
      color: 'from-amber-500 to-orange-400'
    },
    {
      title: t.pillar3Title,
      desc: t.pillar3Desc,
      icon: HeartHandshake,
      color: 'from-emerald-500 to-teal-400'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200">
      {/* Decorative backdrop elements */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#D4AF37]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-slate-200/50 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-xs">
            <Eye className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-xs font-sans font-bold text-[#0F172A] uppercase tracking-[0.2em]">
              {lang === 'vi' ? 'Về Chúng Tôi' : 'Who We Are'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-[#0F172A] tracking-tight leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            {t.aboutTitle}
          </h2>
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-lg text-[#D4AF37] font-semibold tracking-wide mt-2">
            {t.aboutSubtitle}
          </p>
        </div>

        {/* About Main Intro Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed text-left">
            <p className="font-sans">
              {t.aboutDesc1}
            </p>
            <p className="font-sans text-slate-500 text-sm sm:text-base">
              {t.aboutDesc2}
            </p>

            <div className="p-6 rounded-xl bg-white border border-slate-200 flex items-start space-x-4 shadow-xs">
              <div className="bg-[#D4AF37]/10 p-3 rounded-lg border border-[#D4AF37]/20 flex-shrink-0 mt-1">
                <Sparkles className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-1 font-sans">
                  {lang === 'vi' ? 'Tầm nhìn 2030' : 'Vision 2030'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500">
                  {lang === 'vi' 
                    ? 'Trở thành nhà đầu tư và xây dựng tổ hợp bất động sản thông minh bền vững có quy mô và danh mục dự án xuất sắc bậc nhất châu Á.' 
                    : 'To become Asia\'s premier developer of sustainable smart-cities and luxury resort masterplanned complexes.'}
                </p>
              </div>
            </div>
          </div>

          {/* Graphical/Structural Representation */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-xl relative">
              <img
                src="/src/assets/images/hero_banner_1783744318474.jpg"
                alt="Corporate Architecture"
                className="w-full h-full object-cover filter brightness-95 scale-102 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-[#0F172A]/95 backdrop-blur-md border border-slate-800 shadow-lg text-left">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-sans font-bold text-[#D4AF37] uppercase tracking-widest">
                    {lang === 'vi' ? 'QUẢN TRỊ RỦI RO ĐẠT CHUẨN' : 'STANDARD RISK GOVERNANCE'}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">ISO 9001:2015</span>
                </div>
                <div className="text-sm text-slate-200 leading-relaxed font-sans">
                  {lang === 'vi' 
                    ? '100% dòng vốn và phương pháp thi công được kiểm định độc lập bởi đơn vị tư vấn kỹ thuật hàng đầu thế giới.' 
                    : '100% of capitals and construction logs are fully audited by top-tier global verification agencies.'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars / Core Focus Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-xl bg-white border border-slate-200 hover:border-[#D4AF37]/50 shadow-sm hover:shadow-md transition-all duration-300 text-left"
              >
                <div className={`inline-flex items-center justify-center p-3.5 rounded-lg bg-[#0F172A] text-white shadow-md mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6 text-[#D4AF37]" />
                </div>

                <h3 className="text-xl font-serif font-bold text-[#0F172A] mb-3 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                  {pillar.title}
                </h3>
                
                <p className="text-sm text-slate-500 leading-relaxed font-sans">
                  {pillar.desc}
                </p>

                {/* Accent Corner Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#D4AF37] group-hover:w-full transition-all duration-300 rounded-b-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
