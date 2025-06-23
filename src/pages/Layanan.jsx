import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Star, TrendingUp, Shield, Briefcase, Calculator, MousePointer2 } from 'lucide-react';

const assuranceImg = 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=400&h=250&fit=crop';
const advisoryImg = 'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=400&h=250&fit=crop';
const financeImg = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=250&fit=crop';
const advisorImg = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop';
const taxationImg = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop';

const layananUtama = [
  {
    id: 'audit',
    title: 'AUDIT',
    hash: 'audit',
    img: assuranceImg,
    desc: 'Layanan audit adalah pemeriksaan independen atas laporan keuangan atau informasi lainnya untuk memberikan opini mengenai kewajaran dan keakuratannya. Ini membantu memastikan transparansi dan keandalan informasi finansial.',
    color: 'from-blue-600 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    icon: Shield,
    features: [
      'General Audit',
      'Due Diligence',
      'Management Audit',
      'Other Attestation Services',
    ],
    badge: undefined
  },
  {
    id: 'ppl',
    title: 'PPL (Pendidikan & Pelatihan)',
    hash: 'ppl',
    img: advisoryImg,
    desc: 'Layanan pendidikan dan pelatihan dirancang untuk meningkatkan pengetahuan dan keterampilan individu atau tim dalam bidang tertentu.',
    color: 'from-emerald-600 to-teal-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    icon: TrendingUp,
    features: [
      'Akuntansi',
      'Perpajakan',
      'Audit Laporan Keuangan',
    ]
  },
  {
    id: 'accounting',
    title: 'ACCOUNTING ADVISOR',
    hash: 'accounting',
    img: advisorImg,
    desc: 'Layanan penasihat akuntansi memberikan saran dan panduan ahli terkait masalah akuntansi dan pelaporan keuangan.',
    color: 'from-orange-600 to-red-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    icon: Star,
    features: [
      'IFRS Convergence',
      'Accounting Advice',
    ]
  },
  {
    id: 'finance',
    title: 'BUSINESS MANAGEMENT CONSULT',
    hash: 'finance',
    img: financeImg,
    desc: 'Layanan konsultasi manajemen bisnis membantu perusahaan meningkatkan kinerja, efisiensi, dan pertumbuhan melalui analisis, strategi, dan implementasi solusi.',
    color: 'from-purple-600 to-indigo-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    icon: Briefcase,
    features: [
      'Financial Consulting',
      'Capital Restriction',
      'Merger (Acquisition)',
      'Design Information Accounting System',
    ]
  },
  {
    id: 'taxation',
    title: 'TAXATION',
    hash: 'taxation',
    img: taxationImg,
    desc: 'Layanan perpajakan mencakup semua aspek yang berkaitan dengan kepatuhan, perencanaan, dan penyelesaian masalah pajak.',
    color: 'from-rose-600 to-pink-500',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    icon: Calculator,
    features: [
      'Tax Advisor',
      'Examination of Tax Compliance',
      'Tax Administration',
      'Tax Planning',
      'Transfer Pricing',
      'Legal Tax',
    ]
  },
];

// Tambahkan fungsi easing smooth
const easeInOutCubic = t => t < 0.5
  ? 4 * t * t * t
  : 1 - Math.pow(-2 * t + 2, 3) / 2;

const Layanan = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [cardAnimationProgress, setCardAnimationProgress] = useState(0);
  const [showParticles, setShowParticles] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  
  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    setIsVisible(true);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Calculate animation progress based on scroll
      const maxScroll = 600;
      const progress = Math.min(currentScrollY / maxScroll, 1);
      setCardAnimationProgress(progress);
      
      // Detect if user has scrolled
      if (currentScrollY > 50 && !hasScrolled) {
        setHasScrolled(true);
        setShowParticles(false);
      } else if (currentScrollY <= 50 && hasScrolled) {
        setHasScrolled(false);
        setShowParticles(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Intersection Observer untuk reset animasi saat section masuk viewport
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setCardAnimationProgress(0);
          setShowParticles(true);
          setAnimationKey(prev => prev + 1);
        }
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);
  
  const handleNavigation = (path) => {
    window.location.assign(path);
  };

  // Calculate transform for each card based on scroll with easing - disable on mobile
  const getCardTransform = (index) => {
    if (isMobile) {
      return {
        transform: 'none',
        opacity: 1,
        filter: 'none',
        transition: 'all 0.3s ease'
      };
    }

    const progress = cardAnimationProgress;
    const ease = easeInOutCubic(progress);

    if (progress === 0) {
      const positions = [
        { x: 80, y: 40, rotate: 6 },
        { x: 40, y: 20, rotate: -4 },
        { x: 0, y: 0, rotate: 0 },
        { x: -40, y: 20, rotate: 4 },
        { x: -80, y: 40, rotate: -6 }
      ];
      const pos = positions[index] || { x: 0, y: 0, rotate: 0 };
      return {
        transform: `translate(${pos.x}px, ${pos.y}px) scale(0.9) rotate(${pos.rotate}deg)`,
        opacity: 0.9,
        filter: 'blur(0.3px)',
        transition: 'all 0.6s cubic-bezier(0.77,0,0.175,1)'
      };
    } else {
      const translateX = 80 * (1 - ease) * (index - 2) * 0.25;
      const translateY = 40 * (1 - ease) * Math.sin(index * 0.5);
      const rotation = 6 * (1 - ease) * (index % 2 === 0 ? 1 : -1);
      const scale = 0.9 + 0.1 * ease;
      const opacity = 0.9 + 0.1 * ease;
      const blur = 0.3 * (1 - ease);
      return {
        transform: `translate(${translateX}px, ${translateY}px) scale(${scale}) rotate(${rotation}deg)`,
        opacity: opacity,
        filter: `blur(${blur}px)`,
        zIndex: progress > 0.8 ? 'auto' : 10 - index,
        transition: 'all 0.6s cubic-bezier(0.77,0,0.175,1)'
      };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-x-hidden pt-20 lg:pt-0">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 md:w-60 md:h-60 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-40 blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 md:w-60 md:h-60 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-40 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full opacity-25 blur-2xl"></div>
      </div>

      <div className="relative z-10 py-6 md:py-8 lg:py-12 px-4 md:px-4 lg:px-8">
        {/* Floating Particles - disabled on mobile */}
        {showParticles && !isMobile && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  animation: `floatAnimation 5s ease-in-out infinite`,
                  animationDelay: Math.random() * 3 + 's',
                  animationDuration: (3 + Math.random() * 4) + 's'
                }}
              >
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-25"></div>
              </div>
            ))}
          </div>
        )}
        
        {/* Header Section */}
        <div className={`max-w-6xl mx-auto text-center mb-8 md:mb-12 mt-4 md:mt-8 lg:mt-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 px-2">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Layanan
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Unggulan Kami
            </span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
            Solusi profesional dan terpercaya untuk kebutuhan bisnis Anda dengan standar kualitas internasional
          </p>
          
          <div className="mt-4 md:mt-6 flex justify-center">
            <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-0.5 bg-gray-200/30 z-50">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-300 ease-out"
            style={{ width: `${cardAnimationProgress * 100}%` }}
          ></div>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto px-2 md:px-4" ref={containerRef}>
          <div className="relative transition-all duration-1000 ease-out">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6" key={animationKey}>
              {layananUtama.map((layanan, index) => {
                const IconComponent = layanan.icon;
                const cardTransform = getCardTransform(index);
                
                return (
                  <div
                    key={layanan.id}
                    ref={el => cardsRef.current[index] = el}
                    className={`group relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 md:duration-600 overflow-hidden border border-white/30 hover:border-white/50 min-w-0 ${!isMobile && hoveredCard === layanan.id ? 'scale-105 -translate-y-2 rotate-1' : ''}`}
                    onMouseEnter={() => !isMobile && setHoveredCard(layanan.id)}
                    onMouseLeave={() => !isMobile && setHoveredCard(null)}
                    style={{
                      ...cardTransform,
                      transitionDelay: `${index * 60}ms`,
                    }}
                  >
                    {/* Glowing Border Effect - disabled on mobile */}
                    {!isMobile && (
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/15 to-purple-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                    )}
                    
                    {/* Content */}
                    <div className="relative p-4 md:p-6 h-full flex flex-col items-center">
                      <div className="relative mb-4 w-full">
                        <div className={`absolute inset-0 ${layanan.bgColor} rounded-xl transform rotate-1 ${!isMobile ? 'group-hover:rotate-3' : ''} transition-transform duration-500 opacity-50`} />
                        <div className="relative">
                          <img
                            src={layanan.img}
                            alt={layanan.title}
                            className="w-full h-32 md:h-36 object-cover rounded-xl shadow-md group-hover:shadow-lg transition-all duration-500 border border-white/50"
                          />
                          {/* Icon Overlay */}
                          <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r ${layanan.color} rounded-lg shadow-md flex items-center justify-center transform ${!isMobile ? 'group-hover:scale-110' : ''} transition-transform duration-300`}>
                            <IconComponent className="w-4 h-4 text-white" />
                            {!isMobile && (
                              <div className="absolute inset-0 rounded-lg bg-white/20 animate-ping group-hover:animate-none"></div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Badge */}
                      {layanan.badge && (
                        <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
                          {layanan.badge}
                        </div>
                      )}
                      
                      {/* Title */}
                      <h3 className="text-lg md:text-lg font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300 text-center relative leading-tight">
                        {layanan.title}
                      </h3>
                      
                      {/* Features List */}
                      <ul className="mb-4 text-left w-full flex-grow">
                        {layanan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700 font-medium leading-relaxed mb-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="break-words">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Button */}
                      <button
                        onClick={() => handleNavigation(`/layanan-kami#${layanan.hash}`)}
                        className={`cursor-pointer mt-auto group/btn relative bg-gradient-to-r ${layanan.color} hover:shadow-lg text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 md:duration-500 flex items-center justify-center transform hover:scale-105 overflow-hidden text-sm w-full`}
                      >
                        {!isMobile && (
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out"></div>
                        )}
                        <span className="mr-2 relative z-10">Selengkapnya</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Additional content */}
        <div className="mt-12 md:mt-20 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Mengapa Memilih Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Profesional Bersertifikat</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Tim ahli dengan sertifikasi internasional dan pengalaman bertahun-tahun</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Hasil Terukur</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Komitmen memberikan hasil yang dapat diukur dan sesuai dengan target bisnis</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Kepercayaan Klien</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Dipercaya oleh ratusan perusahaan dari berbagai industri di Indonesia</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Layanan;