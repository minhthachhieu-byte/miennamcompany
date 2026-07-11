import React from 'react';
import { Mail, Phone, MapPin, Building, ShieldCheck, ChevronUp } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang];

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] border-t border-slate-800 py-16 text-left relative z-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-800 pb-12">
          
          {/* Logo & Intro */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={scrollUp}>
              <div className="bg-[#D4AF37] p-2 rounded-lg shadow-sm">
                <Building className="h-5 w-5 text-[#0F172A]" />
              </div>
              <span className="text-lg font-serif tracking-widest text-white leading-none font-bold">
                {t.brandName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans max-w-sm">
              {t.footerText}
            </p>

            {/* Certifications row */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="flex items-center space-x-1 border border-slate-800 bg-[#1E293B] px-2 py-1 rounded text-[10px] font-mono text-emerald-400">
                <ShieldCheck className="h-3 w-3" />
                <span>LEED GOLD</span>
              </div>
              <div className="flex items-center space-x-1 border border-slate-800 bg-[#1E293B] px-2 py-1 rounded text-[10px] font-mono text-cyan-400">
                <ShieldCheck className="h-3 w-3" />
                <span>EDGE CERTIFIED</span>
              </div>
              <div className="flex items-center space-x-1 border border-slate-800 bg-[#1E293B] px-2 py-1 rounded text-[10px] font-mono text-slate-400">
                <ShieldCheck className="h-3 w-3" />
                <span>ISO 9001:2015</span>
              </div>
            </div>
          </div>

          {/* Office addresses */}
          <div className="md:col-span-7 grid sm:grid-cols-3 gap-6 text-xs font-sans">
            {/* HCMC */}
            <div className="space-y-2">
              <span className="text-[#D4AF37] font-bold block tracking-wider uppercase font-sans text-[10px]">
                {t.officeHCMC}
              </span>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Tòa nhà Symphony Tower, Số 12 Đại lộ Mai Chí Thọ, Đô thị mới Thủ Thiêm, TP. Thủ Đức, TP.HCM
                </p>
              </div>
            </div>

            {/* Hanoi */}
            <div className="space-y-2">
              <span className="text-slate-300 font-bold block tracking-wider uppercase font-sans text-[10px]">
                {t.officeHanoi}
              </span>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Tòa nhà Capital Place, Tầng 35, Số 29 Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Hà Nội
                </p>
              </div>
            </div>

            {/* Singapore */}
            <div className="space-y-2">
              <span className="text-slate-300 font-bold block tracking-wider uppercase font-sans text-[10px]">
                {t.officeSingapore}
              </span>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Marina Bay Financial Centre, Tower 3, #28-02, 12 Marina Boulevard, Singapore 018982
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Lower footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[11px] text-slate-500 font-sans gap-4">
          <p className="text-center md:text-left leading-relaxed max-w-4xl font-sans">
            {t.footerLicence}
          </p>

          <button
            onClick={scrollUp}
            className="flex items-center space-x-1.5 border border-slate-800 hover:border-slate-700 bg-[#1E293B] px-4 py-2 rounded-lg text-slate-300 hover:text-white transition cursor-pointer"
          >
            <span>{lang === 'vi' ? 'Trở về đầu trang' : 'Scroll to top'}</span>
            <ChevronUp className="h-4 w-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
