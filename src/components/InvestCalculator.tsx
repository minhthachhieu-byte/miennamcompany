import React, { useState, useEffect } from 'react';
import { Calculator, Coins, TrendingUp, Percent, Info } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { projects } from '../data/projects';

interface InvestCalculatorProps {
  lang: Language;
  selectedProjectId: 'thuthiem' | 'giaduc' | 'conic';
}

export default function InvestCalculator({ lang, selectedProjectId }: InvestCalculatorProps) {
  const t = translations[lang];
  const activeProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  // Tab state
  const [activeTab, setActiveTab] = useState<'mortgage' | 'yield'>('mortgage');

  // Calculator inputs
  const [propertyValue, setPropertyValue] = useState<number>(0);
  const [downpaymentPercent, setDownpaymentPercent] = useState<number>(30); // 30% default
  const [interestRate, setInterestRate] = useState<number>(7.5); // 7.5% default annual interest
  const [loanTermYears, setLoanTermYears] = useState<number>(20); // 20 years default

  // Yield inputs
  const [monthlyRent, setMonthlyRent] = useState<number>(0);
  const [appreciationPercent, setAppreciationPercent] = useState<number>(8.5); // 8.5% default annual appreciation
  const [occupancyRate, setOccupancyRate] = useState<number>(85); // 85% occupancy rate

  // Set default prices based on active project
  useEffect(() => {
    // Determine baseline pricing
    let basePriceVnd = 12500000000; // 12.5 Billion
    let baseRentVnd = 35000000; // 35 Million
    
    if (selectedProjectId === 'thuthiem') {
      basePriceVnd = 12500000000;
      baseRentVnd = 40000000;
    } else if (selectedProjectId === 'giaduc') {
      basePriceVnd = 28500000000; // 28.5 Billion
      baseRentVnd = 80000000; // 80 Million
    } else if (selectedProjectId === 'conic') {
      basePriceVnd = 4200000000; // 4.2 Billion
      baseRentVnd = 15000000; // 15 Million
    }

    setPropertyValue(basePriceVnd);
    setMonthlyRent(baseRentVnd);
  }, [selectedProjectId]);

  // Mortgage derived calculations
  const downpaymentAmount = (propertyValue * downpaymentPercent) / 100;
  const loanAmount = propertyValue - downpaymentAmount;
  const totalMonths = loanTermYears * 12;
  const monthlyRate = interestRate / 100 / 12;

  // Equal monthly principal repayment
  const monthlyPrincipal = loanAmount / totalMonths;
  // First month interest
  const firstMonthInterest = loanAmount * monthlyRate;
  // First month payment
  const firstMonthPayment = monthlyPrincipal + firstMonthInterest;

  // Total interest estimation over the whole term (diminishing balance)
  // Approximate total interest = (loanAmount * interestRate / 100 / 2) * (1 + 1/totalMonths) approx
  // Let's calculate exactly using formula for diminishing balance or flat estimation for simplicity and speed:
  // Formula for diminishing balance interest is: SUM for i=0 to n-1 of (loanAmount - i*monthlyPrincipal) * monthlyRate
  // Which simplifies to: loanAmount * monthlyRate * (totalMonths + 1) / 2
  const totalInterestPayable = loanAmount * monthlyRate * (totalMonths + 1) / 2;

  // Investment yield derived calculations
  const annualRentalIncome = monthlyRent * 12 * (occupancyRate / 100);
  const rentalYieldRatio = (annualRentalIncome / propertyValue) * 100;
  
  // Property value appreciation compound after 5 years
  const futureValue5Years = propertyValue * Math.pow(1 + appreciationPercent / 100, 5);
  const totalAppreciationValue = futureValue5Years - propertyValue;
  const annualCompoundAppreciationValue = totalAppreciationValue / 5;

  const totalRoiPercent = rentalYieldRatio + appreciationPercent;

  // Currency Formatter
  const formatVND = (num: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(num);
  };

  return (
    <section id="calculator" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-b border-slate-200">
      <div className="absolute top-1/3 right-5 w-80 h-80 bg-[#D4AF37]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-xs">
            <Calculator className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-xs font-sans font-bold text-[#0F172A] uppercase tracking-[0.2em]">
              {lang === 'vi' ? 'HOẠCH ĐỊNH BẤT ĐỘNG SẢN' : 'REAL ESTATE ECONOMICS'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-[#0F172A] tracking-tight leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            {t.calcTitle}
          </h2>
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-slate-500">
            {t.calcSubtitle}
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-100 p-1.5 rounded-xl border border-slate-200 flex space-x-1.5 shadow-xs">
            <button
              onClick={() => setActiveTab('mortgage')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'mortgage'
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0F172A]'
              }`}
            >
              <Coins className="h-4 w-4" />
              <span>{t.calcTabMortgage}</span>
            </button>
            <button
              onClick={() => setActiveTab('yield')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'yield'
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0F172A]'
              }`}
            >
              <TrendingUp className="h-4 w-4" />
              <span>{t.calcTabYield}</span>
            </button>
          </div>
        </div>

        {/* Calculator Sheet Box */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs">
          {activeTab === 'mortgage' ? (
            /* Tab 1: Mortgage Slider Panel */
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Sliders */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* 1. Property Value */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <label className="text-slate-600 font-sans font-semibold">{t.labelProjectPrice}</label>
                    <span className="text-[#D4AF37] font-bold font-mono text-sm">{formatVND(propertyValue)}</span>
                  </div>
                  <input
                    type="range"
                    min={2000000000}
                    max={60000000000}
                    step={500000000}
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>2 tỷ</span>
                    <span>60 tỷ</span>
                  </div>
                </div>

                {/* 2. Downpayment Percentage */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <label className="text-slate-600 font-sans font-semibold">{t.labelDownpayment}</label>
                    <span className="text-slate-700 font-mono font-medium">
                      {downpaymentPercent}% ({formatVND(downpaymentAmount)})
                    </span>
                  </div>
                  <input
                    type="range"
                    min={15}
                    max={80}
                    step={5}
                    value={downpaymentPercent}
                    onChange={(e) => setDownpaymentPercent(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>15% ({lang === 'vi' ? 'Tối thiểu' : 'Minimum'})</span>
                    <span>80%</span>
                  </div>
                </div>

                {/* 3. Interest Rate */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <label className="text-slate-600 font-sans font-semibold">{t.labelInterest}</label>
                    <span className="text-[#D4AF37] font-bold font-mono text-sm">{interestRate}% / {lang === 'vi' ? 'năm' : 'year'}</span>
                  </div>
                  <input
                    type="range"
                    min={4.5}
                    max={14.0}
                    step={0.1}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>4.5%</span>
                    <span>14.0%</span>
                  </div>
                </div>

                {/* 4. Loan Term */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <label className="text-slate-600 font-sans font-semibold">{t.labelTerm}</label>
                    <span className="text-slate-700 font-mono font-bold text-sm">{loanTermYears} {lang === 'vi' ? 'Năm' : 'Years'}</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={30}
                    step={1}
                    value={loanTermYears}
                    onChange={(e) => setLoanTermYears(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>5 {lang === 'vi' ? 'Năm' : 'Years'}</span>
                    <span>30 {lang === 'vi' ? 'Năm' : 'Years'}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Calculations Outputs */}
              <div className="lg:col-span-5 bg-[#0F172A] text-white rounded-xl p-6 flex flex-col justify-between h-full space-y-6 text-left shadow-xs">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono font-bold text-[#D4AF37] tracking-wider uppercase block">
                    {lang === 'vi' ? 'ƯỚC TÍNH NGHĨA VỤ TRẢ NỢ' : 'ESTIMATED REPAYMENT SCHEDULE'}
                  </span>

                  {/* Primary result */}
                  <div className="border-b border-slate-800 pb-5">
                    <span className="text-xs text-slate-400 block mb-1 font-medium">{t.calcMonthlyPayment}</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">
                      {formatVND(firstMonthPayment)}
                    </span>
                  </div>

                  {/* Breakdown details */}
                  <div className="space-y-3.5 text-xs font-sans">
                    <div className="flex justify-between">
                      <span className="text-slate-400">{t.labelLoanAmount}:</span>
                      <span className="font-mono text-slate-200 font-semibold">{formatVND(loanAmount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{t.calcPrincipalMonthly}:</span>
                      <span className="font-mono text-slate-200">{formatVND(monthlyPrincipal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{t.calcInterestFirstMonth}:</span>
                      <span className="font-mono text-slate-200">{formatVND(firstMonthInterest)}</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-800 pt-3 text-[#D4AF37] font-bold text-sm">
                      <span>{t.calcTotalInterest}:</span>
                      <span className="font-mono">{formatVND(totalInterestPayable)}</span>
                    </div>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 flex items-start space-x-2.5">
                  <Info className="h-4.5 w-4.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-[11px] text-slate-400 leading-relaxed font-sans">
                    {lang === 'vi'
                      ? 'Lưu ý: Bảng tính sử dụng hình thức dư nợ giảm dần, số tiền lãi thực tế sẽ giảm đều qua các kỳ hạn trả góp tiếp theo.'
                      : 'Calculation model utilizes a diminishing balance schedule, so your interest obligation declines continuously with every passing installment.'}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            /* Tab 2: Yield & Capital Gain Panel */
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Sliders */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* 1. Monthly Rent */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <label className="text-slate-600 font-sans font-semibold">{t.labelRentalYield}</label>
                    <span className="text-[#D4AF37] font-bold font-mono text-sm">{formatVND(monthlyRent)} / {lang === 'vi' ? 'tháng' : 'month'}</span>
                  </div>
                  <input
                    type="range"
                    min={8000000}
                    max={150000000}
                    step={1000000}
                    value={monthlyRent}
                    onChange={(e) => setMonthlyRent(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>8 triệu</span>
                    <span>150 triệu</span>
                  </div>
                </div>

                {/* 2. Appreciation Percentage */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <label className="text-slate-600 font-sans font-semibold">{t.labelAppreciation}</label>
                    <span className="text-slate-700 font-mono font-bold text-sm">{appreciationPercent}% / {lang === 'vi' ? 'năm' : 'year'}</span>
                  </div>
                  <input
                    type="range"
                    min={3.0}
                    max={20.0}
                    step={0.5}
                    value={appreciationPercent}
                    onChange={(e) => setAppreciationPercent(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>3%</span>
                    <span>20%</span>
                  </div>
                </div>

                {/* 3. Occupancy Rate */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <label className="text-slate-600 font-sans font-semibold">{t.labelOccupancy}</label>
                    <span className="text-slate-700 font-mono font-bold text-sm">{occupancyRate}%</span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={100}
                    step={5}
                    value={occupancyRate}
                    onChange={(e) => setOccupancyRate(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Right Column: yield Outputs */}
              <div className="lg:col-span-5 bg-[#0F172A] text-white rounded-xl p-6 flex flex-col justify-between h-full space-y-6 text-left shadow-xs">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono font-bold text-[#D4AF37] tracking-wider uppercase block">
                    {lang === 'vi' ? 'ƯỚC TÍNH TỶ SUẤT ROI CHUNG' : 'ESTIMATED ROI RETURN'}
                  </span>

                  {/* Primary result */}
                  <div className="border-b border-slate-800 pb-5">
                    <span className="text-xs text-slate-400 block mb-1 font-medium">{t.calcTotalRoi}</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">
                      ~ {totalRoiPercent.toFixed(1)}% / {lang === 'vi' ? 'năm' : 'year'}
                    </span>
                  </div>

                  {/* Breakdown details */}
                  <div className="space-y-3.5 text-xs font-sans">
                    <div className="flex justify-between">
                      <span className="text-slate-400">{t.calcYieldResult}:</span>
                      <span className="font-mono text-[#D4AF37] font-bold">{rentalYieldRatio.toFixed(1)}% / {lang === 'vi' ? 'năm' : 'year'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{lang === 'vi' ? 'Thu nhập thuê dòng/năm:' : 'Net rental income/year:'}</span>
                      <span className="font-mono text-slate-200">{formatVND(annualRentalIncome)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{t.calcAppreciationResult}:</span>
                      <span className="font-mono text-slate-200 font-semibold">{formatVND(totalAppreciationValue)}</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-800 pt-3 text-slate-400 text-sm">
                      <span>{lang === 'vi' ? 'Trị giá tài sản sau 5 năm:' : 'Asset value after 5 years:'}</span>
                      <span className="font-mono text-white font-bold">{formatVND(futureValue5Years)}</span>
                    </div>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 flex items-start space-x-2.5">
                  <Info className="h-4.5 w-4.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-[11px] text-slate-400 leading-relaxed font-sans">
                    {lang === 'vi'
                      ? 'Lưu ý: Bảng tính giả định tài sản tăng giá trị đều theo mô hình lãi kép hàng năm và duy trì tỉ lệ lấp đầy cố định.'
                      : 'Yield forecast compound appreciation values dynamically over 5-year periods assuming stable macro occupancy parameters.'}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
