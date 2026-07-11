import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectPortfolio from './components/ProjectPortfolio';
import InvestCalculator from './components/InvestCalculator';
import VirtualTour from './components/VirtualTour';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('vi');
  const [activeSection, setActiveSection] = useState('about');
  const [selectedProjectId, setSelectedProjectId] = useState<'thuthiem' | 'giaduc' | 'conic'>('thuthiem');

  // Simple scroll intersection tracker
  useEffect(() => {
    const sections = ['about', 'projects', 'virtual-tour', 'calculator', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // Offset for sticky navbar
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#0F172A]">
      {/* Sticky Navbar */}
      <Navbar lang={lang} setLang={setLang} activeSection={activeSection} />

      {/* Main Corporate Cover / Hero */}
      <Hero lang={lang} />

      {/* About Section */}
      <About lang={lang} />

      {/* The Projects Catalog / Portfolio */}
      <ProjectPortfolio
        lang={lang}
        selectedProjectId={selectedProjectId}
        setSelectedProjectId={setSelectedProjectId}
      />

      {/* Virtual Interactive Tour */}
      <VirtualTour lang={lang} />

      {/* Financial Calculator / Estimators */}
      <InvestCalculator
        lang={lang}
        selectedProjectId={selectedProjectId}
      />

      {/* Consultation & Meeting Booking form */}
      <ConsultationForm
        lang={lang}
        selectedProjectId={selectedProjectId}
      />

      {/* Footer information */}
      <Footer lang={lang} />
    </div>
  );
}
