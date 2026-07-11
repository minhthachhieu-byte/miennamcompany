import React, { useState } from 'react';
import { Eye, Info, Sparkles, Home, Bed, Compass, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { projects } from '../data/projects';

interface VirtualTourProps {
  lang: Language;
}

interface Hotspot {
  x: number; // percent from left
  y: number; // percent from top
  titleVi: string;
  titleEn: string;
  descVi: string;
  descEn: string;
}

export default function VirtualTour({ lang }: VirtualTourProps) {
  const t = translations[lang];
  const [selectedTourProj, setSelectedTourProj] = useState<'thuthiem' | 'giaduc' | 'conic'>('thuthiem');
  const [activeRoom, setActiveRoom] = useState<'living' | 'bedroom' | 'balcony'>('living');
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  // Custom visual descriptions and mock CDN images for rooms to guarantee incredible variety
  const roomData = {
    thuthiem: {
      living: {
        titleVi: 'Phòng Khách Hoàng Gia - Thủ Thiêm Sky Symphony',
        titleEn: 'Royal Living Room - Thu Thiem Sky Symphony',
        img: 'https://picsum.photos/seed/thuthiem-living/800/500',
        descVi: 'Không gian mở rộng rãi với trần cao 3.4m, lát đá cẩm thạch trắng Carrara nhập khẩu từ Ý và hệ vách kính Low-E tràn viền ngắm trọn dòng sông Sài Gòn.',
        descEn: 'Expansive open-plan living with 3.4m high ceilings, imported Italian Carrara white marble flooring, and floor-to-ceiling Low-E glass framing Saigon River.',
        hotspots: [
          { x: 30, y: 40, titleVi: 'Đá Cẩm Thạch Ý', titleEn: 'Italian Marble', descVi: 'Đá cẩm thạch tự nhiên Carrara nguyên tấm chống trầy xước và luôn dịu mát.', descEn: 'Natural Carrara slab marble, highly durable and naturally cool.' },
          { x: 75, y: 35, titleVi: 'Kính Low-E 3 Lớp', titleEn: 'Triple Low-E Glass', descVi: 'Vách kính cách âm 99%, cản tia cực tím UV và duy trì nhiệt độ ổn định.', descEn: '99% acoustic soundproofing, blocks UV radiation while maintaining climate.' },
          { x: 50, y: 15, titleVi: 'Lọc Khí Y Tế Trung Tâm', titleEn: 'Medical Air Purifier', descVi: 'Hệ thống gió tươi tươi lọc bụi mịn PM2.5 cấp trực tiếp vào từng mét vuông.', descEn: 'Central HVAC supplying hospital-grade fresh air, filter out PM2.5.' }
        ]
      },
      bedroom: {
        titleVi: 'Phòng Ngủ Master Đẳng Cấp - Thủ Thiêm Sky Symphony',
        titleEn: 'Master Suite - Thu Thiem Sky Symphony',
        img: 'https://picsum.photos/seed/thuthiem-bed/800/500',
        descVi: 'Nơi trú ẩn bình yên thượng lưu với phòng tắm kính vách ngăn thông minh điện tử, tủ đồ walk-in kép rộng lớn và giường ngủ điều khiển tư thế tiện lợi.',
        descEn: 'An elite tranquil sanctuary featuring a smart privacy glass bathroom, colossal double walk-in wardrobes, and motorized posture-adjustable bed structures.',
        hotspots: [
          { x: 55, y: 50, titleVi: 'Vách Kính Thông Minh', titleEn: 'Smart Privacy Glass', descVi: 'Vách kính đổi màu từ trong suốt sang mờ đục bằng một nút bấm.', descEn: 'Switchable polymer liquid-crystal glass toggles transparent/opaque.' },
          { x: 20, y: 30, titleVi: 'Hệ Ánh Sáng Sinh Học', titleEn: 'Circadian Lighting', descVi: 'Hệ thống đèn tự động đổi nhiệt độ màu theo nhịp sinh học giấc ngủ.', descEn: 'LED systems matching natural biological sleep patterns.' }
        ]
      },
      balcony: {
        titleVi: 'Sky Balcony Ngắm Sông Sài Gòn - Thủ Thiêm Sky Symphony',
        titleEn: 'Saigon River Sky Balcony - Thu Thiem Sky Symphony',
        img: 'https://picsum.photos/seed/thuthiem-balc/800/500',
        descVi: 'Ban công rộng 8m tích hợp kính cường lực tràn không chân vịt, mang lại tầm nhìn vô cực khoáng đạt 270 độ trực diện Quận 1.',
        descEn: 'Spacious 8-meter sky balcony featuring seamless frameless glass balustrades, rendering absolute 270-degree panoramas of District 1.',
        hotspots: [
          { x: 40, y: 70, titleVi: 'Vườn Thủy Canh Thông Minh', titleEn: 'Smart Hydroponics', descVi: 'Khu vườn tự tưới tiêu nước bón dinh dưỡng hoàn toàn tự động bằng cảm biến.', descEn: 'Automated self-watering organic herb garden monitored via app.' },
          { x: 80, y: 50, titleVi: 'Kính Tràn Không Chân Vịt', titleEn: 'Seamless Glass Baluster', descVi: 'Kính chịu lực cường độ cao chống gió bão giật cấp 15 an toàn tuyệt đối.', descEn: 'High-tensile tempered glass safety approved for super-high altitudes.' }
        ]
      }
    },
    giaduc: {
      living: {
        titleVi: 'Dinh Thự Phòng Khách Hồ Gia Đức',
        titleEn: 'Lakeside Mansion Living - Gia Duc Lake Retreat',
        img: 'https://picsum.photos/seed/giaduc-living/800/500',
        descVi: 'Phong cách Đông Dương giao thoa cổ điển kết hợp trần gỗ sồi tự nhiên, lò sưởi hơi nước trang trí sang trọng và tầm nhìn mở rộng thẳng ra mặt hồ.',
        descEn: 'Indochine classic crossover featuring natural solid oak wood timber ceilings, elegant steam mist fireplace, and extensive lakeside views.',
        hotspots: [
          { x: 50, y: 25, titleVi: 'Trần Gỗ Sồi Nga', titleEn: 'Russian Oak Timber', descVi: 'Gỗ sồi sấy nhập khẩu nguyên khối hương thơm dễ chịu thanh lọc cơ thể.', descEn: 'Solid premium oak timber emitting subtle relaxing woodland scents.' },
          { x: 30, y: 65, titleVi: 'Lò Sưởi Hơi Nước', titleEn: 'Steam Mist Fireplace', descVi: 'Lò sưởi hơi nước LED tạo không gian ấm cúng nhưng tuyệt đối mát mẻ an toàn.', descEn: 'Safe cool-to-touch steam mist fireplace reflecting glowing amber.' }
        ]
      },
      bedroom: {
        titleVi: 'Phòng Thiền Tĩnh Tâm Hồ Gia Đức',
        titleEn: 'Zen Meditation Bedroom - Gia Duc Lake Retreat',
        img: 'https://picsum.photos/seed/giaduc-bed/800/500',
        descVi: 'Thiết kế tối giản tối đa hóa ánh sáng tự nhiên với sàn gỗ tuyết tùng xông tinh dầu, mở thẳng ra hiên trà và thảm rừng thông sinh thái.',
        descEn: 'Minimalist architecture maximizing natural morning light, featuring red cedar aromatic flooring opening onto an outdoor tea deck.',
        hotspots: [
          { x: 65, y: 40, titleVi: 'Sàn Gỗ Tuyết Tùng', titleEn: 'Cedarwood Flooring', descVi: 'Lát gỗ tuyết tùng đỏ tỏa tinh dầu tự nhiên kháng khuẩn xua đuổi côn trùng.', descEn: 'Aromatic red cedarwood natural timber sanitizes air and repels insects.' }
        ]
      },
      balcony: {
        titleVi: 'Hiên Vọng Cảnh Ven Hồ - Gia Đức Lake Retreat',
        titleEn: 'Lakeside Viewing Deck - Gia Duc Lake Retreat',
        img: 'https://picsum.photos/seed/giaduc-balc/800/500',
        descVi: 'Bên ngoài biệt thự là hồ nước muối khoáng nóng vô cực kéo dài ra sát lòng hồ Gia Đức tự nhiên thơ mộng hữu tình.',
        descEn: 'The villa perimeter is hugged by a biological heated saltwater infinity pool running flush to the shoreline of the natural lake.',
        hotspots: [
          { x: 50, y: 60, titleVi: 'Bể Bơi Khoáng Nóng', titleEn: 'Thermal Mineral Pool', descVi: 'Khoáng nóng muối Epsom sưởi ấm tự nhiên từ mạch nước ngầm tinh khiết.', descEn: 'Saltwater pool utilizing pure hot geothermal aquifer waters.' }
        ]
      }
    },
    conic: {
      living: {
        titleVi: 'Phòng Khách Vị Lai Modular - Conic CyberTowers',
        titleEn: 'Futuristic Modular Living - Conic CyberTowers',
        img: 'https://picsum.photos/seed/conic-living/800/500',
        descVi: 'Thiết kế vị lai với những mảng kim loại sáng loáng kết hợp vách ngăn trượt robot tự động chuyển trạng thái phòng họp, phòng khách chỉ trong 1 chạm.',
        descEn: 'Cybernetic design with sleek aluminum panels and robotic motorized partitions transforming living space into workspace instantly.',
        hotspots: [
          { x: 45, y: 35, titleVi: 'Vách Di Động Robot', titleEn: 'Motorized Sliding Wall', descVi: 'Hệ vách trượt âm trần chịu lực tự động gấp xếp phân chia diện tích.', descEn: 'Smart ceiling-hung sliding walls reorganize room square-footage.' },
          { x: 80, y: 70, titleVi: 'Sàn Nhựa Polyme Tự Phục Hồi', titleEn: 'Self-Healing Polymer Floor', descVi: 'Sàn polyme cao cấp tự động vá các vết xước nhỏ dưới tác dụng nhiệt.', descEn: 'High-tech composite floor healing microscopic scuffs using room heat.' }
        ]
      },
      bedroom: {
        titleVi: 'Phòng Ngủ Cyber Smart Pod - Conic CyberTowers',
        titleEn: 'Smart Sleeping Pod - Conic CyberTowers',
        img: 'https://picsum.photos/seed/conic-bed/800/500',
        descVi: 'Thiết kế giống cabin chuyên cơ cao cấp, trang bị hệ rèm điện tử cách âm tuyệt đối và gương soi AR phân tích chỉ số sức khỏe hàng sáng.',
        descEn: 'Engineered as a first-class aircraft cabin pod, equipped with acoustic motorized drapes and an AR smart mirror analyzing health index.',
        hotspots: [
          { x: 30, y: 30, titleVi: 'Gương Thông Minh AR', titleEn: 'Smart AR Mirror', descVi: 'Màn hình ẩn sau kính phân tích cân nặng, nhịp tim và hiển thị tin tức.', descEn: 'Hidden display in glass tracks body metrics and provides schedules.' }
        ]
      },
      balcony: {
        titleVi: 'Ban Công Năng Lượng Xanh - Conic CyberTowers',
        titleEn: 'Active Solar Balcony - Conic CyberTowers',
        img: 'https://picsum.photos/seed/conic-balc/800/500',
        descVi: 'Sở hữu tầm nhìn thành phố tuyệt đẹp, bao bọc bởi lan can thu năng lượng mặt trời kết nối trực tiếp hệ thống pin dự phòng gia đình.',
        descEn: 'Panoramic urban vistas surrounded by active solar balcony cladding linked directly to household battery grids.',
        hotspots: [
          { x: 50, y: 70, titleVi: 'Kính Quang Điện Thu Năng Lượng', titleEn: 'Photovoltaic Baluster', descVi: 'Tấm kính hấp thụ quang năng chuyển hóa thành điện sinh hoạt thân thiện.', descEn: 'PV glass panels capturing sunlight to drive local LED illuminations.' }
        ]
      }
    }
  };

  const activeTour = roomData[selectedTourProj][activeRoom];

  return (
    <section id="virtual-tour" className="py-24 bg-white border-t border-b border-slate-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50/10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-full shadow-xs">
            <Eye className="h-4 w-4 text-[#A81C1C]" />
            <span className="text-xs font-sans font-bold text-[#0F172A] uppercase tracking-[0.2em]">
              {lang === 'vi' ? 'KHÔNG GIAN VỊ LAI 3D' : '3D IMMERSIVE CONCEPTS'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-[#0F172A] tracking-tight leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            {t.tourTitle}
          </h2>
          <div className="h-1 w-20 bg-[#A81C1C] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-slate-500">
            {t.tourSubtitle}
          </p>
        </div>

        {/* Project Selector Mini Tab */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {projects.map((proj) => (
            <button
              key={proj.id}
              onClick={() => {
                setSelectedTourProj(proj.id as any);
                setActiveHotspot(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition duration-200 cursor-pointer ${
                selectedTourProj === proj.id
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:text-[#0F172A] hover:bg-slate-100'
              }`}
            >
              {lang === 'vi' ? proj.name : proj.nameEn}
            </button>
          ))}
        </div>

        {/* Room Toggle and Main Board */}
        <div className="bg-slate-50/50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Immersive Viewport */}
            <div className="lg:col-span-8 space-y-4">
              <div className="aspect-[16/10] rounded-xl border border-slate-200 bg-[#0F172A] relative overflow-hidden shadow-inner group">
                <img
                  src={activeTour.img}
                  alt={lang === 'vi' ? activeTour.titleVi : activeTour.titleEn}
                  className="w-full h-full object-cover opacity-85 select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#0F172A]/10" />

                {/* Hotspot buttons flashing on rendering screen */}
                {activeTour.hotspots.map((hs, idx) => (
                  <div
                    key={idx}
                    className="absolute"
                    style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                  >
                    <button
                      onClick={() => setActiveHotspot(activeHotspot === idx ? null : idx)}
                      className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 shadow-lg cursor-pointer ${
                        activeHotspot === idx
                          ? 'bg-[#A81C1C] text-white scale-110 ring-4 ring-[#A81C1C]/35'
                          : 'bg-[#0F172A]/90 border border-[#A81C1C] text-[#A81C1C] hover:scale-105 animate-pulse'
                      }`}
                      title={lang === 'vi' ? hs.titleVi : hs.titleEn}
                    >
                      <Sparkles className="h-4 w-4" />
                    </button>

                    {/* Desktop Hover Tooltip / Floating Card */}
                    {activeHotspot === idx && (
                      <div className="absolute left-10 top-0 z-20 w-64 bg-[#0F172A] border border-slate-700 p-4 rounded-xl shadow-2xl text-left animate-fade-in text-xs text-white">
                        <h5 className="font-bold text-[#A81C1C] mb-1">
                          {lang === 'vi' ? hs.titleVi : hs.titleEn}
                        </h5>
                        <p className="text-slate-300 font-sans leading-relaxed">
                          {lang === 'vi' ? hs.descVi : hs.descEn}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Guide note */}
              <div className="flex items-center space-x-2 text-xs text-slate-500 justify-center">
                <Info className="h-4 w-4 text-[#A81C1C]/80" />
                <span>{t.tourInteractGuide}</span>
              </div>
            </div>

            {/* Right: Controller Section */}
            <div className="lg:col-span-4 text-left space-y-6">
              <div>
                <span className="text-xs font-sans font-bold text-slate-400 uppercase tracking-widest block">
                  {lang === 'vi' ? 'BẢN MÔ PHỎNG NỘI THẤT 360' : 'CONCEPT SPECIFICATION'}
                </span>
                <h3 className="text-lg font-serif font-bold text-[#0F172A] mt-1" style={{ fontFamily: 'Georgia, serif' }}>
                  {lang === 'vi' ? activeTour.titleVi : activeTour.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed font-sans">
                  {lang === 'vi' ? activeTour.descVi : activeTour.descEn}
                </p>
              </div>

              {/* Room Toggles */}
              <div className="space-y-2 border-t border-slate-200 pt-4">
                {[
                  { id: 'living', label: t.tourLivingRoom, icon: Home },
                  { id: 'bedroom', label: t.tourBedroom, icon: Bed },
                  { id: 'balcony', label: t.tourBalcony, icon: Compass }
                ].map((room) => {
                  const Icon = room.icon;
                  return (
                    <button
                      key={room.id}
                      onClick={() => {
                        setActiveRoom(room.id as any);
                        setActiveHotspot(null);
                      }}
                      className={`flex items-center space-x-3 w-full p-3.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                        activeRoom === room.id
                          ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-xs'
                          : 'bg-white text-slate-600 border-slate-200 hover:text-[#0F172A] hover:bg-slate-50'
                      }`}
                    >
                      <Icon className="h-4.5 w-4.5" />
                      <span>{room.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Selected hotspot card sidebar (mobile fallback & convenient reading) */}
              {activeHotspot !== null && (
                <div className="p-4 bg-[#A81C1C]/5 border border-[#A81C1C]/15 rounded-xl animate-fade-in">
                  <span className="text-[10px] font-sans font-bold text-[#A81C1C] block uppercase tracking-wider mb-1">
                    {lang === 'vi' ? 'ĐIỂM NÓNG HOẠT ĐỘNG' : 'SELECTED HIGHLIGHT'}
                  </span>
                  <h4 className="text-sm font-bold text-[#0F172A]">
                    {lang === 'vi' ? activeTour.hotspots[activeHotspot].titleVi : activeTour.hotspots[activeHotspot].titleEn}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-sans">
                    {lang === 'vi' ? activeTour.hotspots[activeHotspot].descVi : activeTour.hotspots[activeHotspot].descEn}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
