import React, { useState } from 'react';
import { Globe, Building, Menu, X, Phone } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  activeSection: string;
}

export default function Navbar({ lang, setLang, activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const menuItems = [
    { id: 'about', label: t.navAbout },
    { id: 'projects', label: t.navProjects },
    { id: 'calculator', label: t.navCalculator },
    { id: 'virtual-tour', label: t.navVirtualTour },
    { id: 'contact', label: t.navContact },
  ];

  const handleScroll = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with professional corporate style */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-[#0F172A] flex items-center justify-center rounded-lg shadow-sm">
              <div className="w-4 h-4 border-2 border-[#A81C1C] rotate-45"></div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-lg font-sans font-extrabold tracking-tight text-[#0F172A] leading-none">
                {t.brandName}
              </span>
              <span className="text-[9px] font-sans font-bold tracking-[0.18em] text-[#A81C1C] mt-1 uppercase">
                {lang === 'vi' ? 'INVESTMENT & CONSTRUCTION' : 'INVESTMENT & CONSTRUCTION'}
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? 'text-[#0F172A] border-b-2 border-[#A81C1C] pb-1'
                      : 'text-slate-600 hover:text-[#0F172A] hover:border-b-2 hover:border-slate-300 pb-1'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4 border-l border-slate-200 pl-6">
              {/* Language Toggle */}
              <button
                onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 text-xs font-semibold transition duration-200 cursor-pointer"
                id="lang-toggle-desktop"
              >
                <Globe className="h-3.5 w-3.5 text-[#A81C1C]" />
                <span className="font-mono font-bold">{lang.toUpperCase()}</span>
              </button>

              {/* Consultation Button */}
              <button
                onClick={() => handleScroll('contact')}
                className="px-6 py-2.5 bg-[#0F172A] text-white text-sm font-semibold rounded-md shadow-md shadow-slate-200 hover:bg-slate-800 transition duration-200 cursor-pointer flex items-center space-x-2"
              >
                <Phone className="h-4 w-4 text-[#A81C1C]" />
                <span>{t.navContact}</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded-md border border-slate-200 bg-slate-50 text-slate-700 text-xs font-mono font-bold cursor-pointer"
              id="lang-toggle-mobile"
            >
              <Globe className="h-3.5 w-3.5 text-[#A81C1C]" />
              <span>{lang.toUpperCase()}</span>
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-[#0F172A] p-2 rounded-lg hover:bg-slate-100 cursor-pointer"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold ${
                activeSection === item.id
                  ? 'bg-slate-50 text-[#0F172A] border-l-4 border-[#A81C1C]'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-100 px-4">
            <button
              onClick={() => handleScroll('contact')}
              className="flex items-center justify-center space-x-2 w-full bg-[#0F172A] text-white py-3 rounded-lg text-base font-semibold shadow-md"
            >
              <Phone className="h-4 w-4 text-[#A81C1C]" />
              <span>{t.navContact}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
