import React, { useState, useEffect } from 'react';
import { Mail, Phone, User, Calendar, Check, Send, AlertTriangle, MessageSquare, Trash2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { projects } from '../data/projects';

interface ConsultationFormProps {
  lang: Language;
  selectedProjectId: 'thuthiem' | 'giaduc' | 'conic';
}

interface LeadRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  project: string;
  budget: string;
  message: string;
  date: string;
}

export default function ConsultationForm({ lang, selectedProjectId }: ConsultationFormProps) {
  const t = translations[lang];

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [project, setProject] = useState<string>(selectedProjectId);
  const [budget, setBudget] = useState('5-15');
  const [message, setMessage] = useState('');
  
  // Submission flags
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // History states
  const [history, setHistory] = useState<LeadRequest[]>([]);

  // Synchronize project with active selector
  useEffect(() => {
    setProject(selectedProjectId);
  }, [selectedProjectId]);

  // Read local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('bds_consult_history');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    // Simple verification
    if (!name.trim()) {
      setErrorMessage(lang === 'vi' ? 'Quý khách vui lòng nhập đầy đủ Họ và tên.' : 'Please enter your full name.');
      return;
    }
    if (!phone.trim()) {
      setErrorMessage(lang === 'vi' ? 'Quý khách vui lòng cung cấp Số điện thoại.' : 'Please enter your phone number.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage(lang === 'vi' ? 'Địa chỉ Email không hợp lệ.' : 'Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate safe API submission
    setTimeout(() => {
      const selectedProjectData = projects.find((p) => p.id === project) || projects[0];
      const projectDisplayName = lang === 'vi' ? selectedProjectData.name : selectedProjectData.nameEn;
      
      const newLead: LeadRequest = {
        id: 'lead_' + Date.now(),
        name,
        email,
        phone,
        project: projectDisplayName,
        budget: budget === 'under5' ? t.formBudget1 : 
                budget === '5-15' ? t.formBudget2 : 
                budget === '15-30' ? t.formBudget3 : t.formBudget4,
        message,
        date: new Date().toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      const updatedHistory = [newLead, ...history];
      setHistory(updatedHistory);
      localStorage.setItem('bds_consult_history', JSON.stringify(updatedHistory));

      // Clear fields
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      
      setIsSubmitting(false);
      setIsSuccess(true);

      // Hide success flag after 6 seconds
      setTimeout(() => setIsSuccess(false), 6000);
    }, 1200);
  };

  const deleteHistoryItem = (id: string) => {
    const updated = history.filter((h) => h.id !== id);
    setHistory(updated);
    localStorage.setItem('bds_consult_history', JSON.stringify(updated));
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-200 relative">
      <div className="absolute inset-0 bg-slate-50/10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form and Validation Warnings */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm text-left space-y-6">
            <div>
              <span className="text-xs font-sans font-bold text-[#A81C1C] tracking-wider uppercase flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{lang === 'vi' ? 'ĐĂNG KÝ HẸN GẶP CHUYÊN GIA' : 'CONSULTATION BOOKING'}</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0F172A] mt-1" style={{ fontFamily: 'Georgia, serif' }}>
                {t.contactTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
                {t.contactSubtitle}
              </p>
            </div>

            {errorMessage && (
              <div className="p-4 bg-red-500/5 border border-red-200 text-red-600 rounded-xl flex items-center space-x-3 text-xs sm:text-sm">
                <AlertTriangle className="h-5 w-5 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {isSuccess && (
              <div className="p-4 bg-emerald-500/5 border border-emerald-200 text-emerald-600 rounded-xl flex items-center space-x-3 text-xs sm:text-sm">
                <Check className="h-5 w-5 flex-shrink-0 bg-emerald-500/10 p-1 rounded-full" />
                <span>{t.formSuccess}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-sans font-semibold text-slate-600">{t.formFullName} <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#A81C1C] focus:ring-1 focus:ring-[#A81C1C]/30 rounded-lg text-xs sm:text-sm text-[#0F172A] placeholder-slate-400 transition"
                      placeholder={lang === 'vi' ? 'Ví dụ: Nguyễn Văn A' : 'e.g. John Doe'}
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="text-xs font-sans font-semibold text-slate-600">{t.formPhone} <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#A81C1C] focus:ring-1 focus:ring-[#A81C1C]/30 rounded-lg text-xs sm:text-sm text-[#0F172A] placeholder-slate-400 transition"
                      placeholder={lang === 'vi' ? 'Ví dụ: 09012345xx' : 'e.g. +84 901234xxx'}
                    />
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <label className="text-xs font-sans font-semibold text-slate-600">{t.formEmail} <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                     className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#A81C1C] focus:ring-1 focus:ring-[#A81C1C]/30 rounded-lg text-xs sm:text-sm text-[#0F172A] placeholder-slate-400 transition"
                     placeholder="example@gmail.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Project selector */}
                <div className="space-y-1">
                  <label className="text-xs font-sans font-semibold text-slate-600">{t.formProject}</label>
                  <select
                    id="form-project"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#A81C1C] focus:ring-1 focus:ring-[#A81C1C]/30 rounded-lg text-xs sm:text-sm text-[#0F172A] transition"
                  >
                    {projects.map((p) => (
                      <option key={p.id} value={p.id}>
                        {lang === 'vi' ? p.name : p.nameEn}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Target Budget */}
                <div className="space-y-1">
                  <label className="text-xs font-sans font-semibold text-slate-600">{t.formBudget}</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#A81C1C] focus:ring-1 focus:ring-[#A81C1C]/30 rounded-lg text-xs sm:text-sm text-[#0F172A] transition"
                  >
                    <option value="under5">{t.formBudget1}</option>
                    <option value="5-15">{t.formBudget2}</option>
                    <option value="15-30">{t.formBudget3}</option>
                    <option value="above30">{t.formBudget4}</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-sans font-semibold text-slate-600">{t.formMessage}</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <textarea
                    id="form-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#A81C1C] focus:ring-1 focus:ring-[#A81C1C]/30 rounded-lg text-xs sm:text-sm text-[#0F172A] placeholder-slate-400 transition"
                    placeholder={lang === 'vi' ? 'Quý khách vui lòng cung cấp khung giờ rảnh và yêu cầu riêng biệt.' : 'Leave details about your ideal meeting slot or property layout specs.'}
                  />
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 bg-[#0F172A] hover:bg-slate-800 disabled:bg-slate-100 disabled:text-slate-400 text-white py-3.5 sm:py-4 rounded-md text-sm font-bold tracking-wide shadow-xs transition-all duration-300 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin rounded-full h-4.5 w-4.5 border-2 border-white border-t-transparent" />
                    <span>{t.formSubmitting}</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>{t.formSubmit}</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Information, Corporate Addresses & Submitted lead history panel */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-6 rounded-2xl bg-[#0F172A] text-white space-y-4 shadow-sm">
              <span className="text-[10px] font-mono font-bold text-[#A81C1C] uppercase tracking-widest block border-b border-slate-800 pb-3">
                {lang === 'vi' ? 'QUAN HỆ KHÁCH HÀNG' : 'INVESTOR RELATIONS'}
              </span>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3">
                  <User className="h-5 w-5 text-[#A81C1C] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-white">{lang === 'vi' ? 'Dịch Vụ Khách Hàng Đặc Quyền' : 'Bespoke Client Concierge'}</h5>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans mt-0.5">
                      {lang === 'vi' 
                        ? 'Chuyên viên tư vấn cao cấp của chúng tôi được đào tạo theo tiêu chuẩn ngân hàng Thụy Sĩ, cam kết bảo mật tuyệt đối dữ liệu khách hàng.' 
                        : 'Our certified private consultants are trained to global wealth-management standards, ensuring absolute privacy compliance.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-[#A81C1C] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-white">{lang === 'vi' ? 'Hotline Tổng Đài Quốc Tế' : 'Direct International Hotline'}</h5>
                    <p className="text-xs text-[#A81C1C] font-mono font-bold mt-0.5">1800 68xx / (+84) 28 3930 xxxx</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-[#A81C1C] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-white">{lang === 'vi' ? 'Hộp Thư Điện Tử' : 'Corporate Enquiries'}</h5>
                    <p className="text-xs text-slate-300 font-mono mt-0.5">invest@miennamland.com.vn</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submitted consultation History Panel */}
            {history.length > 0 && (
              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
                <span className="text-[10px] font-sans font-bold text-[#A81C1C] uppercase tracking-widest block border-b border-slate-100 pb-3">
                  {t.formHistory}
                </span>

                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {history.map((item) => (
                    <div key={item.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200 relative group text-xs space-y-1.5 text-left">
                      <button
                        onClick={() => deleteHistoryItem(item.id)}
                        className="absolute right-2 top-2 p-1.5 text-slate-400 hover:text-red-500 rounded hover:bg-slate-100 cursor-pointer transition"
                        title={lang === 'vi' ? 'Xóa lịch sử' : 'Remove record'}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>

                      <div className="flex justify-between font-mono text-[9px] text-slate-400">
                        <span>{item.date}</span>
                      </div>

                      <div className="pr-6 font-sans">
                        <span className="block font-bold text-[#0F172A]">{item.name}</span>
                        <span className="block text-slate-500 mt-0.5">{lang === 'vi' ? 'Dự án:' : 'Project:'} <strong className="text-[#A81C1C]">{item.project}</strong></span>
                        <span className="block text-slate-500">{lang === 'vi' ? 'Ngân sách:' : 'Budget:'} <strong className="text-slate-700">{item.budget}</strong></span>
                        {item.message && (
                          <p className="text-slate-500 mt-1 border-t border-slate-200 pt-1 leading-relaxed italic">
                            "{item.message}"
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
