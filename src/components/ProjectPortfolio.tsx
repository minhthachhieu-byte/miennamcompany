import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { Project, Language, Floorplan } from '../types';
import { projects } from '../data/projects';
import { translations } from '../data/translations';

interface ProjectPortfolioProps {
  lang: Language;
  selectedProjectId: 'thuthiem' | 'giaduc' | 'conic';
  setSelectedProjectId: (id: 'thuthiem' | 'giaduc' | 'conic') => void;
}

// Resolver for Lucide icons stored as strings in our project database
const renderAmenityIcon = (iconName: string) => {
  const IconComponent = (LucideIcons as any)[iconName];
  if (IconComponent) {
    return <IconComponent className="h-5 w-5 text-[#A81C1C]" />;
  }
  return <LucideIcons.Sparkles className="h-5 w-5 text-[#A81C1C]" />;
};

export default function ProjectPortfolio({ lang, selectedProjectId, setSelectedProjectId }: ProjectPortfolioProps) {
  const t = translations[lang];
  const activeProject = projects.find((p) => p.id === selectedProjectId) || projects[0];
  const [selectedFloorplanId, setSelectedFloorplanId] = useState<string>(activeProject.floorplans[0]?.id || '');

  // Keep floorplan updated if project changes
  const handleProjectChange = (id: 'thuthiem' | 'giaduc' | 'conic') => {
    setSelectedProjectId(id);
    const targetProj = projects.find((p) => p.id === id);
    if (targetProj && targetProj.floorplans.length > 0) {
      setSelectedFloorplanId(targetProj.floorplans[0].id);
    }
  };

  const activeFloorplan = activeProject.floorplans.find((f) => f.id === selectedFloorplanId) || activeProject.floorplans[0];

  return (
    <section id="projects" className="py-24 bg-[#F8FAFC] border-t border-b border-slate-200 relative">
      <div className="absolute inset-0 bg-slate-50/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-xs">
            <LucideIcons.Compass className="h-4 w-4 text-[#A81C1C]" />
            <span className="text-xs font-sans font-bold text-[#0F172A] uppercase tracking-[0.2em]">
              {lang === 'vi' ? 'SIÊU DỰ ÁN QUỐC TẾ' : 'GLOBAL BLUE CHIPS'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-[#0F172A] tracking-tight leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            {t.portfolioTitle}
          </h2>
          <div className="h-1 w-20 bg-[#A81C1C] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            {t.portfolioSubtitle}
          </p>
        </div>

        {/* Project Selector Tab Bar */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          {projects.map((proj) => (
            <button
              key={proj.id}
              onClick={() => handleProjectChange(proj.id)}
              className={`flex items-center justify-between p-4 md:px-6 md:py-4 rounded-xl text-left border transition-all duration-300 cursor-pointer w-full md:w-80 ${
                selectedProjectId === proj.id
                  ? 'bg-white border-[#A81C1C] shadow-md shadow-slate-200/50'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex flex-col text-left">
                <span className={`text-base font-bold transition-colors ${
                  selectedProjectId === proj.id ? 'text-[#A81C1C]' : 'text-[#0F172A]'
                }`}>
                  {lang === 'vi' ? proj.name : proj.nameEn}
                </span>
                <span className="text-[10px] font-mono text-slate-500 tracking-wider uppercase mt-1">
                  {proj.id === 'thuthiem' ? (lang === 'vi' ? 'Chung Cư Hạng A' : 'Premium Condo') : 
                   proj.id === 'giaduc' ? (lang === 'vi' ? 'Nghỉ Dưỡng Sinh Thái' : 'Eco-Resort & Villas') : 
                   (lang === 'vi' ? 'Siêu Hiện Đại AI' : 'AI Future Block')}
                </span>
              </div>
              <LucideIcons.ArrowRight className={`h-4 w-4 transition-transform ${
                selectedProjectId === proj.id ? 'text-[#A81C1C] translate-x-1' : 'text-slate-400'
              }`} />
            </button>
          ))}
        </div>

        {/* Main active project board */}
        <div className="grid lg:grid-cols-12 gap-12 items-start bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-md mb-16">
          
          {/* Left: Project Large Image & Specs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 relative group shadow-sm">
              <img
                src={activeProject.image}
                alt={lang === 'vi' ? activeProject.name : activeProject.nameEn}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-[#0F172A]/90 backdrop-blur-md px-4 py-3 rounded-lg border border-slate-700">
                <span className="text-xs font-mono text-slate-300">{t.progress}</span>
                <span className="text-xs font-sans font-bold text-[#A81C1C]">
                  {lang === 'vi' ? activeProject.progress : activeProject.progressEn}
                </span>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="bg-slate-50 rounded-xl border border-slate-150 p-6 space-y-4">
              <h4 className="text-xs font-sans font-bold tracking-widest text-[#0F172A] uppercase flex items-center space-x-2 border-b border-slate-200 pb-3">
                <LucideIcons.Activity className="h-4 w-4 text-[#A81C1C]" />
                <span>{t.quickSpecs}</span>
              </h4>

              <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm text-left">
                <div>
                  <span className="block text-slate-500 text-xs font-sans mb-0.5">{t.location}</span>
                  <span className="font-semibold text-[#0F172A] block">
                    {lang === 'vi' ? activeProject.location : activeProject.locationEn}
                  </span>
                </div>
                <div>
                  <span className="block text-slate-500 text-xs font-sans mb-0.5">{t.scale}</span>
                  <span className="font-semibold text-[#0F172A] block">
                    {lang === 'vi' ? activeProject.scale : activeProject.scaleEn}
                  </span>
                </div>
                <div>
                  <span className="block text-slate-500 text-xs font-sans mb-0.5">{t.investment}</span>
                  <span className="font-mono text-[#A81C1C] font-bold block">{activeProject.investmentCap}</span>
                </div>
                <div>
                  <span className="block text-slate-500 text-xs font-sans mb-0.5">
                    {lang === 'vi' ? 'Tổng diện tích sàn' : 'Gross construction floor'}
                  </span>
                  <span className="font-semibold text-[#0F172A] block">{activeProject.constructionArea}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Descriptions, highlights & amenities */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#0F172A] tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                {lang === 'vi' ? activeProject.name : activeProject.nameEn}
              </h3>
              <p className="text-[#A81C1C] font-semibold tracking-wide mt-1 text-sm sm:text-base">
                {lang === 'vi' ? activeProject.tagline : activeProject.taglineEn}
              </p>
              <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-sans">
                {lang === 'vi' ? activeProject.description : activeProject.descriptionEn}
              </p>
            </div>

            {/* Dimensional highlights */}
            <div className="space-y-4">
              <h4 className="text-xs font-sans font-bold tracking-widest text-[#0F172A] uppercase flex items-center space-x-2 border-b border-slate-200 pb-3">
                <LucideIcons.Sparkle className="h-4 w-4 text-[#A81C1C]" />
                <span>{t.features}</span>
              </h4>

              <div className="grid sm:grid-cols-2 gap-4">
                {(lang === 'vi' ? activeProject.highlights : activeProject.highlightsEn).map((hl, index) => (
                  <div key={index} className="p-4 rounded-xl bg-slate-50 border border-slate-150 hover:border-[#A81C1C]/35 hover:bg-slate-100/50 transition duration-200">
                    <span className="block text-sm font-bold text-[#0F172A] mb-1">{hl.title}</span>
                    <span className="block text-xs text-slate-500 leading-relaxed font-sans">{hl.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Amenities */}
            <div className="space-y-4">
              <h4 className="text-xs font-sans font-bold tracking-widest text-[#0F172A] uppercase flex items-center space-x-2 border-b border-slate-200 pb-3">
                <LucideIcons.CheckCircle className="h-4 w-4 text-[#A81C1C]" />
                <span>{t.amenities}</span>
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {activeProject.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-slate-50 px-3.5 py-2.5 rounded-lg border border-slate-200">
                    {renderAmenityIcon(amenity.icon)}
                    <span className="text-xs text-slate-700 font-sans tracking-wide">
                      {lang === 'vi' ? amenity.text : amenity.textEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floorplan Viewer Sub-board */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-sm text-left">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-200 pb-6 gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0F172A] flex items-center space-x-2" style={{ fontFamily: 'Georgia, serif' }}>
                <LucideIcons.Layers className="h-5.5 w-5.5 text-[#A81C1C]" />
                <span>{t.floorplans}</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {t.selectFloorplan}
              </p>
            </div>

            {/* Small Floorplan Selector Buttons */}
            <div className="flex flex-wrap gap-2">
              {activeProject.floorplans.map((fp) => (
                <button
                  key={fp.id}
                  onClick={() => setSelectedFloorplanId(fp.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition duration-200 cursor-pointer ${
                    selectedFloorplanId === fp.id
                      ? 'bg-[#0F172A] text-white shadow-xs'
                      : 'bg-slate-50 text-slate-600 border border-slate-200 hover:text-[#0F172A] hover:bg-slate-100'
                  }`}
                >
                  {fp.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left: Layout Technical Details */}
            <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
              <div>
                <span className="text-xs font-sans font-bold text-[#A81C1C] tracking-wider uppercase block">
                  {lang === 'vi' ? 'Thông Số Mặt Bằng Căn Hộ' : 'Unit Specifications'}
                </span>
                <h4 className="text-2xl font-serif font-bold text-[#0F172A] mt-1" style={{ fontFamily: 'Georgia, serif' }}>
                  {activeFloorplan.name}
                </h4>
              </div>

              {/* Stat Grid */}
              <div className="grid grid-cols-2 gap-4 bg-slate-50 border border-slate-200 p-4 rounded-xl">
                <div>
                  <span className="text-slate-500 text-[11px] font-sans block">{t.area}</span>
                  <span className="text-lg font-bold text-[#0F172A] font-mono">{activeFloorplan.area} m²</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[11px] font-sans block">{t.bedrooms} / {t.bathrooms}</span>
                  <span className="text-lg font-bold text-[#0F172A] font-sans">{activeFloorplan.bedrooms} BD / {activeFloorplan.bathrooms} BA</span>
                </div>
                <div className="col-span-2 pt-2 border-t border-slate-200">
                  <span className="text-slate-500 text-[11px] font-sans block">{t.direction}</span>
                  <span className="text-xs font-semibold text-slate-700 block">{activeFloorplan.direction}</span>
                </div>
              </div>

              {/* Price Tag */}
              <div className="p-4 bg-[#A81C1C]/5 border border-[#A81C1C]/15 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-sans text-slate-500 block uppercase tracking-wider">{t.priceEstimate}</span>
                  <span className="text-xl font-extrabold text-[#A81C1C] font-mono">
                    {lang === 'vi' 
                      ? `~ ${activeFloorplan.priceEstimate} ${t.billionVnd}` 
                      : `~ $${(activeFloorplan.priceEstimate * 0.04).toFixed(1)} ${t.millionUsd}`}
                  </span>
                </div>
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                      // Find input message or select fields and preset
                      setTimeout(() => {
                        const selectEl = document.getElementById('form-project') as HTMLSelectElement;
                        if (selectEl) selectEl.value = selectedProjectId;
                        const msgEl = document.getElementById('form-message') as HTMLTextAreaElement;
                        if (msgEl) msgEl.value = lang === 'vi' 
                          ? `Tôi quan tâm đến căn hộ mẫu [${activeFloorplan.name}] tại dự án [${activeProject.name}].`
                          : `I am highly interested in the [${activeFloorplan.name}] layout at [${activeProject.nameEn}].`;
                      }, 500);
                    }
                  }}
                  className="bg-[#0F172A] hover:bg-slate-800 text-white px-5 py-2.5 rounded-md text-xs font-bold transition cursor-pointer"
                >
                  {lang === 'vi' ? 'Yêu Cầu Báo Giá' : 'Request Quotation'}
                </button>
              </div>

              {/* Design Traits */}
              <div className="space-y-2">
                <span className="text-[11px] font-sans text-slate-400 block uppercase tracking-wider">{t.unitFeatures}</span>
                <ul className="space-y-1.5">
                  {activeFloorplan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-xs text-slate-600 font-sans">
                      <LucideIcons.ChevronRight className="h-3.5 w-3.5 text-[#A81C1C] flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Immersive Interactive Blueprint mockup using pure SVGs */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-xl bg-[#0F172A] border border-slate-800 p-6 flex flex-col justify-between shadow-inner relative overflow-hidden group">
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-3">
                  <span>{t.interactivePreview}</span>
                  <span className="text-[#A81C1C] font-bold">{activeFloorplan.id.toUpperCase()} / {activeFloorplan.area}sqm</span>
                </div>

                {/* Simulated interactive blueprint lines */}
                <div className="flex-grow flex items-center justify-center py-6 relative">
                  {/* Blueprint Grid Lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
                  
                  {/* Floorplan Vector Shape */}
                  <div className="relative w-full max-w-sm aspect-square border-2 border-dashed border-[#A81C1C]/20 rounded-xl p-4 flex items-center justify-center bg-slate-950/40">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-red-400/80 stroke-current stroke-[0.8] fill-none stroke-linecap-round stroke-linejoin-round drop-shadow-[0_0_15px_rgba(168,28,28,0.15)] animate-fade-in">
                      {/* Outer boundary */}
                      <path d="M10 10 H90 V90 H10 Z" className="stroke-[#A81C1C]/30" />
                      
                      {/* Dynamic rooms based on selected floorplan svgLayout instructions */}
                      {activeFloorplan.svgLayout.split(' ').map((cmd, idx) => {
                        if (cmd.startsWith('M') || cmd.startsWith('H') || cmd.startsWith('V') || cmd.startsWith('Z')) {
                          return null;
                        }
                        return null;
                      })}
                      {/* Render custom rooms and subdivisions */}
                      {selectedFloorplanId.includes('exec') && (
                        <>
                          <rect x="15" y="15" width="35" height="35" className="stroke-[#A81C1C]" />
                          <rect x="50" y="15" width="35" height="35" className="stroke-[#A81C1C]/60" />
                          <rect x="15" y="50" width="70" height="35" className="stroke-[#A81C1C]/40" />
                          <text x="32" y="32" className="fill-[#A81C1C] font-mono text-[5px] stroke-none font-bold">MASTER BD</text>
                          <text x="68" y="32" className="fill-[#A81C1C]/60 font-mono text-[5px] stroke-none">BATHROOM</text>
                          <text x="50" y="68" className="fill-[#A81C1C]/80 font-mono text-[5px] stroke-none font-bold">LIVING & DINING ROOM</text>
                          <circle cx="50" cy="50" r="1.5" className="fill-[#A81C1C] stroke-none" />
                        </>
                      )}
                      {selectedFloorplanId.includes('grand') && (
                        <>
                          <rect x="15" y="15" width="30" height="30" className="stroke-[#A81C1C]" />
                          <rect x="45" y="15" width="40" height="30" className="stroke-[#A81C1C]/60" />
                          <rect x="15" y="45" width="35" height="40" className="stroke-[#A81C1C]/40" />
                          <rect x="50" y="45" width="35" height="40" className="stroke-[#A81C1C]/80" />
                          <text x="30" y="30" className="fill-[#A81C1C] font-mono text-[5px] stroke-none font-bold">MASTER BD</text>
                          <text x="65" y="30" className="fill-[#A81C1C]/60 font-mono text-[5px] stroke-none font-bold">LIVING ROOM</text>
                          <text x="32" y="65" className="fill-[#A81C1C]/40 font-mono text-[5px] stroke-none">GUEST BD</text>
                          <text x="68" y="65" className="fill-[#A81C1C]/80 font-mono text-[5px] stroke-none">BALCONY JACUZZI</text>
                          <circle cx="45" cy="45" r="1.5" className="fill-red-500 stroke-none" />
                        </>
                      )}
                      {selectedFloorplanId.includes('penthouse') && (
                        <>
                          <rect x="12" y="12" width="76" height="76" className="stroke-[#A81C1C]/30" />
                          <rect x="15" y="15" width="35" height="35" className="stroke-[#A81C1C]" />
                          <rect x="50" y="15" width="35" height="35" className="stroke-[#A81C1C]/80" />
                          <rect x="15" y="50" width="35" height="35" className="stroke-[#A81C1C]/60" />
                          <rect x="50" y="50" width="35" height="35" className="stroke-[#A81C1C]/50" />
                          {/* Central courtyard */}
                          <circle cx="50" cy="50" r="8" className="stroke-[#A81C1C]" />
                          <text x="32" y="32" className="fill-[#A81C1C] font-mono text-[4px] stroke-none font-bold">SUITE 1</text>
                          <text x="68" y="32" className="fill-[#A81C1C]/80 font-mono text-[4px] stroke-none font-bold">SUITE 2</text>
                          <text x="32" y="68" className="fill-[#A81C1C]/60 font-mono text-[4px] stroke-none font-bold">FAMILY CINE</text>
                          <text x="68" y="68" className="fill-[#A81C1C]/50 font-mono text-[4px] stroke-none font-bold">DINING AREA</text>
                          <text x="50" y="52" className="fill-red-500 font-mono text-[3px] stroke-none font-bold text-center" textAnchor="middle">PRIVATE POOL</text>
                        </>
                      )}
                      {selectedFloorplanId.includes('lakeview') && (
                        <>
                          <polygon points="15,15 85,15 85,85 15,85" className="stroke-[#A81C1C]" />
                          <line x1="15" y1="50" x2="85" y2="50" className="stroke-[#A81C1C]/50" />
                          <line x1="50" y1="15" x2="50" y2="85" className="stroke-[#A81C1C]/50" />
                          <text x="32" y="32" className="fill-[#A81C1C] font-mono text-[5px] stroke-none font-bold">LAKESIDE SUITE</text>
                          <text x="68" y="32" className="fill-[#A81C1C]/80 font-mono text-[5px] stroke-none font-bold">TERRACE POOL</text>
                          <text x="32" y="68" className="fill-[#A81C1C]/40 font-mono text-[5px] stroke-none">KITCHEN</text>
                          <text x="68" y="68" className="fill-[#A81C1C]/60 font-mono text-[5px] stroke-none">DOUBLE GARAGE</text>
                        </>
                      )}
                      {selectedFloorplanId.includes('forest') && (
                        <>
                          <rect x="20" y="20" width="60" height="60" className="stroke-[#A81C1C]" />
                          <line x1="20" y1="45" x2="80" y2="45" className="stroke-[#A81C1C]/60" />
                          <text x="50" y="32" className="fill-[#A81C1C] font-mono text-[5px] stroke-none font-bold text-center" textAnchor="middle">YOGA & MEDITATION</text>
                          <text x="50" y="65" className="fill-[#A81C1C]/60 font-mono text-[5px] stroke-none text-center" textAnchor="middle">FOREST LIVING ROOM</text>
                        </>
                      )}
                      {selectedFloorplanId.includes('cyber') && (
                        <>
                          <rect x="15" y="15" width="70" height="70" className="stroke-[#A81C1C]" />
                          <line x1="15" y1="55" x2="85" y2="55" className="stroke-[#A81C1C]/80" />
                          {/* Sliding modular wall indicators */}
                          <line x1="45" y1="15" x2="45" y2="55" className="stroke-cyan-400 stroke-[1.2]" />
                          <text x="30" y="35" className="fill-[#A81C1C] font-mono text-[5px] stroke-none font-bold">CYBER SUITE</text>
                          <text x="65" y="35" className="fill-cyan-400 font-mono text-[4.5px] stroke-none">ROBOTIC WALLS</text>
                          <text x="50" y="72" className="fill-[#A81C1C]/60 font-mono text-[5px] stroke-none text-center" textAnchor="middle">AUTOMATED OFFICE</text>
                        </>
                      )}
                      {selectedFloorplanId.includes('loft') && (
                        <>
                          <rect x="15" y="15" width="70" height="70" className="stroke-[#A81C1C]" />
                          {/* Mezzanine level line */}
                          <polygon points="15,15 85,15 85,50 15,50" className="stroke-cyan-500 fill-cyan-500/5" />
                          <text x="50" y="32" className="fill-cyan-400 font-mono text-[5px] stroke-none font-bold text-center" textAnchor="middle">MEZZANINE LOFT (LEVEL 2)</text>
                          <text x="50" y="68" className="fill-[#A81C1C] font-mono text-[5px] stroke-none text-center" textAnchor="middle">DOUBLE HIGH GLASS ROOM (LEVEL 1)</text>
                        </>
                      )}
                    </svg>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex justify-center items-center space-x-6 text-[10px] font-mono border-t border-slate-800 pt-3">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-1 bg-[#A81C1C] rounded-sm" />
                    <span className="text-slate-400">{lang === 'vi' ? 'Kết cấu tường' : 'Wall Structure'}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-1 bg-cyan-400 rounded-sm" />
                    <span className="text-slate-400">{lang === 'vi' ? 'Hệ thống Smart/AI' : 'AI/Smart Systems'}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
                    <span className="text-[#A81C1C] font-bold">Interactive Nodes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
