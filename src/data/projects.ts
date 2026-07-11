import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'thuthiem',
    name: 'Thủ Thiêm Sky Symphony',
    nameEn: 'Thu Thiem Sky Symphony',
    tagline: 'Chung cư cao tầng quy mô quốc tế tại Trái Tim Đô Thị Mới',
    taglineEn: 'International-Scale High-Rise Condo at the Heart of the New Metropolis',
    location: 'Bán đảo Thủ Thiêm, TP. Thủ Đức, TP. Hồ Chí Minh',
    locationEn: 'Thu Thiem Peninsula, Thu Duc City, Ho Chi Minh City',
    locationFull: 'Lô 3-15 Đô thị mới Thủ Thiêm, Phường An Khánh, TP. Thủ Đức, TP.HCM',
    locationFullEn: 'Plot 3-15 Thu Thiem New Urban Area, An Khanh Ward, Thu Duc City, HCMC',
    type: 'Căn hộ cao cấp, Penthouse & Sky Villa',
    typeEn: 'Luxury Apartments, Penthouses & Sky Villas',
    scale: '3 Tòa tháp cao 45 tầng, 1.200 Căn hộ hạng sang',
    scaleEn: '3 Towers of 45 floors, 1,200 Luxury residences',
    constructionArea: '22,400 m²',
    investmentCap: '350 Triệu USD (USD 350M)',
    progress: 'Đang hoàn thiện nội thất (Bàn giao Q4/2026)',
    progressEn: 'Interior finishing stage (Delivery Q4/2026)',
    description: 'Tọa lạc tại vị trí độc tôn ven sông Sài Gòn, Thủ Thiêm Sky Symphony là biểu tượng của kiến trúc đương đại quốc tế. Dự án kết hợp công nghệ tòa tháp thông minh hàng đầu thế giới với các giải pháp xanh đạt chứng chỉ LEED Gold quốc tế, mang lại chuẩn mực sống thượng lưu chưa từng có.',
    descriptionEn: 'Located at the prime waterfront of the Saigon River, Thu Thiem Sky Symphony stands as an icon of international contemporary architecture. Combining smart tower technologies with LEED Gold green initiatives, it offers an unprecedented standard of high-end living.',
    image: '/src/assets/images/thuthiem_condo_1783744330691.jpg',
    highlights: [
      {
        title: 'Tầm Nhìn Triệu Đô',
        description: 'Mặt tiền ôm trọn dòng sông Sài Gòn lịch sử và toàn cảnh trung tâm Quận 1 phồn hoa.'
      },
      {
        title: 'Bể Bơi Vô Cực Trên Cao',
        description: 'Hồ bơi tràn bờ dài 50m chuẩn Olympic nằm tại tầng 45 mang đến trải nghiệm chạm vào chân trời.'
      },
      {
        title: 'An Ninh AI & Thang Máy Riêng',
        description: 'Tích hợp nhận diện khuôn mặt sinh trắc học và thang máy riêng đưa thẳng lên căn hộ.'
      },
      {
        title: 'Chứng Chỉ LEED Gold',
        description: 'Hệ thống kính Low-E 3 lớp, lọc không khí tươi cấp độ bệnh viện và tối ưu hóa năng lượng.'
      }
    ],
    highlightsEn: [
      {
        title: 'Million Dollar View',
        description: 'Prime waterfront view capturing the Saigon River and the sparkling skyline of District 1.'
      },
      {
        title: 'High-Altitude Infinity Pool',
        description: 'An Olympic-size 50-meter heated pool on the 45th floor, merging with the beautiful skyline.'
      },
      {
        title: 'AI Security & Private Lifts',
        description: 'Biometric facial recognition and private elevators routing directly into your penthouse foyer.'
      },
      {
        title: 'LEED Gold Certified',
        description: 'Triple-glazed Low-E glass facades, hospital-grade air filtration, and carbon footprint reduction.'
      }
    ],
    amenities: [
      { icon: 'Waves', text: 'Hồ bơi chân mây 50m', textEn: '50m Sky Infinity Pool' },
      { icon: 'ShieldCheck', text: 'Hệ thống an ninh AI 3 lớp', textEn: 'Triple-Layer AI Security' },
      { icon: 'Wind', text: 'Lọc khí tươi trung tâm', textEn: 'Central Fresh Air Filter' },
      { icon: 'ShoppingBag', text: 'Trung tâm mua sắm xa xỉ', textEn: 'High-End Retail Galleria' },
      { icon: 'GlassWater', text: 'Hầm rượu vang & Cigar Lounge', textEn: 'Private Wine & Cigar Lounge' },
      { icon: 'Sparkles', text: 'Dịch vụ quản gia Hoàng Gia', textEn: 'Royal Concierge Service' }
    ],
    floorplans: [
      {
        id: 'tt-exec',
        name: 'Executive Residence',
        bedrooms: 2,
        bathrooms: 2,
        area: 112,
        priceEstimate: 12.5,
        direction: 'Tây Nam (Sông Sài Gòn & Quận 1)',
        features: ['Phòng khách trần cao 3.4m', 'Thiết bị bếp GAGGENAU Đức', 'Ban công rộng 8m'],
        svgLayout: 'M10 10 H90 V90 H10 Z M40 10 V90 M10 50 H90'
      },
      {
        id: 'tt-grand',
        name: 'Grand Signature Suite',
        bedrooms: 3,
        bathrooms: 3.5,
        area: 165,
        priceEstimate: 19.8,
        direction: 'Đông Bắc (Sông Sài Gòn & Cầu Thủ Thiêm)',
        features: ['Bể jacuzzi riêng tại ban công', 'Phòng master suite có tủ đồ walk-in kép', 'Lối đi dịch vụ riêng'],
        svgLayout: 'M5 5 H95 V95 H5 Z M35 5 V95 M5 45 H95 M65 45 V95'
      },
      {
        id: 'tt-penthouse',
        name: 'The Crown Jewel Penthouse',
        bedrooms: 4,
        bathrooms: 5,
        area: 340,
        priceEstimate: 48.0,
        direction: '3 mặt thoáng (Sông Sài Gòn, Quận 1 & Quận Bình Thạnh)',
        features: ['Bể bơi tràn bờ riêng biệt', 'Phòng chiếu phim gia đình tiêu chuẩn Dolby Atmos', 'Thang máy kính riêng biệt'],
        svgLayout: 'M5 5 H95 V95 H5 Z M20 5 V95 M80 5 V95 M5 50 H95 M20 30 H80'
      }
    ]
  },
  {
    id: 'giaduc',
    name: 'Gia Đức Lake Retreat & Villa',
    nameEn: 'Gia Duc Lake Retreat & Villa',
    tagline: 'Khu nghỉ dưỡng sinh thái & Nhà ở biệt thự đẳng cấp Hoàng Gia',
    taglineEn: 'Luxury Eco-Resort & Royal Lakeside Residences',
    location: 'Hồ Gia Đức, Phường Dầu Giây, Thành phố Đồng Nai',
    locationEn: 'Gia Duc Lake, Dau Giay Ward, Dong Nai City',
    locationFull: 'Hồ Gia Đức, Trục ĐT769, Phường Dầu Giây, TP. Long Khánh / Thống Nhất, Tỉnh Đồng Nai',
    locationFullEn: 'Gia Duc Lake, Route ĐT769, Dau Giay Ward, Dong Nai Province',
    type: 'Biệt thự đơn lập, Biệt thự song lập ven hồ & Boutique Resort',
    typeEn: 'Single Villas, Duplex Lakeside Villas & Boutique Resort',
    scale: '150 Hecta, 350 Biệt thự sinh thái xa xỉ, Khách sạn 6 sao',
    scaleEn: '150 Hectares, 350 Ultra-luxurious eco-villas, 6-Star Resort',
    constructionArea: '150,000 m² (Mật độ xây dựng 15%)',
    investmentCap: '450 Triệu USD (USD 450M)',
    progress: 'Hoàn thành Giai đoạn 1 (Đã khai thác khu Clubhouse & 80 biệt thự)',
    progressEn: 'Phase 1 Complete (Clubhouse & 80 lakefront villas operating)',
    description: 'Tận dụng tuyệt tác thiên nhiên hoang sơ xung quanh hồ Gia Đức mát mẻ, Gia Đức Lake Retreat là tổ hợp nghỉ dưỡng và dinh thự sinh thái quy mô bậc nhất miền Nam. Với mật độ xây dựng kỷ lục chỉ 15%, dự án bảo tồn trọn vẹn thảm xanh tự nhiên kết hợp cùng hạ tầng wellness 6 sao toàn cầu.',
    descriptionEn: 'Embracing the pristine natural beauty of Gia Duc Lake, this sanctuary stands as the premier eco-resort and residence development in South Vietnam. With a record-low construction footprint of just 15%, the project fully preserves natural ecosystems alongside a global 6-star wellness infrastructure.',
    image: '/src/assets/images/giaduc_lake_resort_1783744344591.jpg',
    highlights: [
      {
        title: 'Hồ Nước Tự Nhiên Khổng Lồ',
        description: 'Tâm điểm hồ Gia Đức rộng hơn 40ha luôn điều hòa nhiệt độ lý tưởng mát mẻ quanh năm.'
      },
      {
        title: 'Tổ Hợp Trị Liệu Wellness',
        description: 'Hệ thống khoáng nóng Onsen Nhật Bản, tắm khoáng lạnh Thụy Sĩ và trung tâm detox y khoa cao cấp.'
      },
      {
        title: 'Bến Du Thuyền Gia Đình',
        description: 'Mỗi căn biệt thự đơn lập sở hữu bến du thuyền và bãi đáp ca-nô riêng dẫn ra lòng hồ.'
      },
      {
        title: 'Sân Golf 18 Hố Quốc Tế',
        description: 'Sân golf địa hình ven hồ độc đáo được thiết kế bởi huyền thoại Greg Norman.'
      }
    ],
    highlightsEn: [
      {
        title: 'Colossal Natural Lake',
        description: 'Gia Duc lake of over 40 hectares keeps the microclimate naturally cooled at 22-26°C year-round.'
      },
      {
        title: 'Integrated Wellness Hub',
        description: 'Natural volcanic Onsen hot springs, Swiss cryo-therapy, and private medical detox facilities.'
      },
      {
        title: 'Private Yacht Berth',
        description: 'Every single lakefront estate is equipped with a private canoe deck and wooden boat slip.'
      },
      {
        title: '18-Hole Championship Golf Course',
        description: 'An elite undulating golf range designed by legendary master architect Greg Norman.'
      }
    ],
    amenities: [
      { icon: 'Palmtree', text: 'Công viên rừng thông tự nhiên', textEn: 'Natural Pine Forest Park' },
      { icon: 'Anchor', text: 'Bến du thuyền quốc tế', textEn: 'Private Yacht Marina' },
      { icon: 'Heart', text: 'Trung tâm y tế & Spa quốc tế', textEn: 'International Medical Wellness Spa' },
      { icon: 'Apple', text: 'Trang trại hữu cơ Farm-to-Table', textEn: 'Farm-to-Table Organic Orchard' },
      { icon: 'Flame', text: 'Suối nước nóng Onsen tự nhiên', textEn: 'Natural Thermal Hot Springs' },
      { icon: 'Compass', text: 'Đường dạo bộ ven hồ 12km', textEn: '12km Lakeside Trekking Path' }
    ],
    floorplans: [
      {
        id: 'gd-lakeview',
        name: 'The Lakefront Sanctuary Villa',
        bedrooms: 4,
        bathrooms: 5,
        area: 380,
        priceEstimate: 28.5,
        direction: 'Đông Nam (Hướng trực diện Hồ Gia Đức)',
        features: ['Sân vườn sinh thái 150m²', 'Bể bơi tràn bờ nước muối hữu cơ', 'Sân đón khách đỗ xe Rolls-Royce'],
        svgLayout: 'M5 5 H95 V95 H5 Z M5 35 H95 M5 70 H95 M50 35 V70'
      },
      {
        id: 'gd-forest',
        name: 'Forest Hillside Retreat Villa',
        bedrooms: 3,
        bathrooms: 4,
        area: 310,
        priceEstimate: 21.2,
        direction: 'Tây Nam (Dựa lưng đồi thông sinh thái)',
        features: ['Phòng thiền & Yoga bằng gỗ tuyết tùng', 'Ban công vọng cảnh 270 độ', 'Lò sưởi củi sồi tự nhiên'],
        svgLayout: 'M5 5 H95 V95 H5 Z M45 5 V95 M45 50 H95'
      }
    ]
  },
  {
    id: 'conic',
    name: 'Conic CyberTowers',
    nameEn: 'Conic CyberTowers',
    tagline: 'Block chung cư siêu hiện đại dẫn đầu tương lai Smart-Living',
    taglineEn: 'Ultra-Modern Smart-Living Block Preempting the Future',
    location: 'Khu đô thị Conic, Nam Sài Gòn, TP. Hồ Chí Minh',
    locationEn: 'Conic Urban Area, South Saigon, Ho Chi Minh City',
    locationFull: 'Đại lộ Nguyễn Văn Linh, Khu dân cư Conic, Nam Sài Gòn, Bình Chánh, TP.HCM',
    locationFullEn: 'Nguyen Van Linh Boulevard, Conic Residential Area, South Saigon, HCMC',
    type: 'Căn hộ High-Tech, Loft Duplex & Co-working Penthouse',
    typeEn: 'High-Tech Smart Apartments, Loft Duplexes & Co-working Penthouses',
    scale: '1 Block đặc chủng cao 32 tầng, 540 Căn hộ Modular điều khiển giọng nói',
    scaleEn: '1 specialized tower of 32 stories, 540 modular units',
    constructionArea: '12,800 m²',
    investmentCap: '180 Triệu USD (USD 180M)',
    progress: 'Đã cất nóc (Đang lắp kính và hệ thống pin năng lượng mặt trời mặt đứng)',
    progressEn: 'Topped out (Facade glazing & vertical solar installation in progress)',
    description: 'Conic CyberTowers là tuyên ngôn của phong cách kiến trúc vị lai Brutalist kết hợp Cyberpunk. Công nghệ tường kính quang điện thu năng lượng mặt trời, robot giao hàng nội khu, căn hộ có tường di động modular tùy chỉnh diện tích theo ý muốn mang đến cuộc sống siêu hiện đại cho thế hệ chuyên gia quốc tế.',
    descriptionEn: 'Conic CyberTowers represents a stunning leap into futuristic architecture. Featuring continuous photovoltaic active solar walls, localized delivery drones, and custom mechanical sliding walls allowing modular layout transformations, this block is tailored for global tech-elites.',
    image: '/src/assets/images/conic_modern_block_1783744355387.jpg',
    highlights: [
      {
        title: 'Tự Chủ Năng Lượng Xanh',
        description: 'Tích hợp 8.000m² pin mặt trời bao phủ mặt ngoài tòa tháp, cung cấp 40% lượng điện năng sinh hoạt.'
      },
      {
        title: 'Không Gian Sống Modular',
        description: 'Hệ thống tường di động tự động cho phép biến đổi căn hộ 1 phòng ngủ thành phòng làm việc trong 30 giây.'
      },
      {
        title: 'Quản Lý Vận Hành Bằng AI',
        description: 'Hệ thống AI xử lý rác thải tự động, nhận diện khuôn mặt bảo mật 3D và robot tiếp tân phục vụ tận phòng.'
      },
      {
        title: 'Sân Bay Drone Giao Hàng',
        description: 'Mái tòa nhà thiết kế khu vực đỗ và tiếp nhận bưu phẩm bằng thiết bị bay drone giao hàng tự động.'
      }
    ],
    highlightsEn: [
      {
        title: 'Solar facade Energy Self-Sufficiency',
        description: '8,000 sqm of integrated vertical solar wall cladding, supplying up to 40% of standard block electrical load.'
      },
      {
        title: 'Mechanical Modular Living',
        description: 'Motorized wall systems that convert a 1-bedroom suite into a high-tech studio workspace in 30 seconds.'
      },
      {
        title: 'AI Smart Building Management',
        description: 'Unified AI engine handling automated waste sorters, 3D facial mesh lockups, and autonomous room-service robots.'
      },
      {
        title: 'Drone Cargo Skyport',
        description: 'Fully zoned and automated UAV landing platforms on the rooftop for secure instant drone package arrivals.'
      }
    ],
    amenities: [
      { icon: 'Cpu', text: 'Nhà thông minh điều khiển giọng nói', textEn: 'Full Voice-Controlled Home Automation' },
      { icon: 'Bot', text: 'Robot phục vụ room-service 24/7', textEn: '24/7 Autonomous Delivery Robots' },
      { icon: 'Sun', text: 'Tường kính điện mặt trời', textEn: 'Active Photovoltaic Solar Walls' },
      { icon: 'Plane', text: 'Bãi đáp drone bưu phẩm riêng', textEn: 'Rooftop Drone Cargo Skyport' },
      { icon: 'Wifi', text: 'Mạng riêng cáp quang 10Gbps', textEn: 'Ultra-High-Speed 10Gbps Fiber Wifi' },
      { icon: 'Layers', text: 'Co-working Pods thông minh', textEn: 'Smart Soundproof Co-working Pods' }
    ],
    floorplans: [
      {
        id: 'co-cyber',
        name: 'The Cyber Studio',
        bedrooms: 1,
        bathrooms: 1,
        area: 58,
        priceEstimate: 4.2,
        direction: 'Đông Bắc (Ngắm sông Chợ Đệm & Trung tâm Q1)',
        features: ['Hệ vách ngăn trượt robot thông minh', 'Nội thất âm tường điều khiển điện', 'Gương soi AR phân tích sức khỏe'],
        svgLayout: 'M15 15 H85 V85 H15 Z M15 45 H85'
      },
      {
        id: 'co-loft',
        name: 'The Modular Duplex Loft',
        bedrooms: 2,
        bathrooms: 2,
        area: 92,
        priceEstimate: 7.5,
        direction: 'Đông Nam (Mặt tiền Nguyễn Văn Linh)',
        features: ['Trần thông tầng cao 5.8m', 'Hệ rạp chiếu phim 4K âm tường', 'Khu vườn thủy canh ban công tự động'],
        svgLayout: 'M10 10 H90 V90 H10 Z M10 40 H90 M50 10 V40'
      }
    ]
  }
];
