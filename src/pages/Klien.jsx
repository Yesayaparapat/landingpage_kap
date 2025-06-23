import React, { useState, useEffect, useRef } from 'react';
import {
  Shirt, Ship, Heart, Users, GraduationCap, Shield, Utensils, Printer, MapPin,
  Handshake, ShoppingCart, Car, Factory, Wheat, Building2, HardHat, Fuel, Beef,
  Radio, Package, UserCheck, Truck, Recycle, Home, Landmark, ChevronDown, ChevronUp, ArrowLeft
} from 'lucide-react';

function KlienIntegrated() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedSector, setSelectedSector] = useState(null);

  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px 0px -50px 0px'
    };

    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setHeaderVisible(entry.isIntersecting);
      });
    }, observerOptions);

    const itemObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.dataset.index);
        if (entry.isIntersecting) {
          setVisibleItems(prev => new Set([...prev, index]));
        } else {
          setVisibleItems(prev => {
            const newSet = new Set(prev);
            newSet.delete(index);
            return newSet;
          });
        }
      });
    }, observerOptions);

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.index = index;
        itemObserver.observe(ref);
      }
    });

    return () => {
      headerObserver.disconnect();
      itemObserver.disconnect();
    };
  }, [showAll, selectedSector]);

  const handleShowAll = () => {
    setIsAnimating(true);
    setShowAll(!showAll);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleSectorClick = (sectorName) => {
    setSelectedSector(sectorName);
  };

  const handleBackClick = () => {
    setSelectedSector(null);
  };

  const clients = [
    { name: 'Tekstil', icon: Shirt }, 
    { name: 'Perkapalan', icon: Ship },
    { name: 'Rumah Sakit/Klinik', icon: Heart }, 
    { name: 'Yayasan', icon: Users },
    { name: 'Universitas', icon: GraduationCap }, 
    { name: 'Asuransi', icon: Shield },
    { name: 'Hotel dan Restoran', icon: Utensils }, 
    { name: 'Percetakan', icon: Printer },
    { name: 'Tur dan Travel', icon: MapPin }, 
    { name: 'Koperasi', icon: Handshake },
    { name: 'Retail', icon: ShoppingCart }, 
    { name: 'Dealer', icon: Car },
    { name: 'Manufaktur', icon: Factory }, 
    { name: 'Pertanian', icon: Wheat },
    { name: 'Kerjasama Operasi', icon: Building2 }, 
    { name: 'Konstruksi', icon: HardHat },
    { name: 'Migas', icon: Fuel }, 
    { name: 'Peternakan', icon: Beef },
    { name: 'Telekomunikasi', icon: Radio }, 
    { name: 'Pergudangan', icon: Package },
    { name: 'Jasa Tenaga Kerja Indonesia', icon: UserCheck }, 
    { name: 'Transportasi', icon: Truck },
    { name: 'Pengolahan Limbah', icon: Recycle }, 
    { name: 'Properti/Perumahan', icon: Home },
    { name: 'Perbankan', icon: Landmark }
  ];

  const clientData = {
    "Tekstil": [
      "PT Sinar Gaya Busana",
      "PT Seyang Activewear",
      "PT Tros Garment",
      "PT Buma Apparel Industry",
      "PT Doosan Cipta Busana Jaya",
      "PT Doosan Sinar Sukabumi",
      "PT HJS Indo Invest",
      "PT Hwan Indonesia",
      "PT Samjin Brothread Indonesia",
      "PT SH Garment",
      "PT Jung Hyun",
      "PT Yoon Young Shell Button",
      "PT Greentex Indonesia Utama II",
      "PT Uwu Jump Indonesia",
      "PT Dae Young Textile",
      "PT Samheung Indonesia",
      "PT Cahaya Sunny Indonesia",
      "PT Sejin Global Indonesia",
      "PT Doosan Dunia Busana",
      "PT Doosan Jaya Sukabumi",
      "PT Kuralon Indah Sejahtera",
      "PT Tri Pupajaya",
      "PT Yuni Internasional"
    ],
    "Manufaktur": [
      "PT Daux Cosmetic",
      "PT Dong Jin Indonesia",
      "PT SN Unggul",
      "PT Doosan Sinar Sukabumi",
      "PT Sung Shin Best Indonesia",
      "PT Chukyo Spring Indonesia",
      "PT HJS Indo Invest",
      "PT Celxpert Energy Indonesia",
      "PT Seah Precision",
      "PT Hwan Indonesia",
      "PT Assems Indonesia",
      "PT Samjin Brothread Indonesia",
      "PT Yong Shin Indonesia",
      "PT Kurnia Tirta Sembada",
      "PT SH Garment",
      "PT Shell Works",
      "PT Slickbar Indonesia",
      "PT Jung Hyun",
      "PT Yoon Young Shell Button",
      "PT Nutech Industries Indonesia",
      "PT Surya Mulia Gemelanggeng",
      "PT Greentex Indonesia Utama II",
      "PT Daewon Eco Industries",
      "PT Daiichi Kinzoku Indonesia",
      "PT Galic Artabahari",
      "PT Seongjin Engineering Indonesia",
      "Dexter Timber Perkasa Indonesia",
      "PT Oro Plastindo",
      "PT Valvindo Megah",
      "PT Taiki Seiki Indonesia",
      "PT Crystal Mandiri",
      "PT Konvertindo Mitra Lestari",
      "PT Takahashi Spring Indonesia",
      "PT Dongsuh",
      "PT Orienta Warna Sempurna"
    ],
    "Telekomunikasi": [
      "PT KJ Tech Indonesia",
      "PT Mitranova",
      "PT Integricor Prima Nusantara",
      "PT Menara Inti Kreasi Indonesia"
    ],
    "Konstruksi": [
      "PT Bayu Surya Bakti Konstruksi",
      "PT YND Planning Indonesia",
      "PT Samcon",
      "PT Indochacon Utama",
      "PT Cemara Hijau Pratama",
      "PT Hyundai Inti Development",
      "PT East Java Development",
      "PT Epiterma Mas Indonesia",
      "PT Epiterma Mas Konstruksi",
      "PT Ruas Utama Jaya",
      "PT Artelindo Wiratama"
    ],
    "Hotel dan Restoran": [
      "PT Pan Pacific Jakarta",
      "PT Bighot Restaurant Indonesia"
    ],
    "Retail": [
      "PT Youme Indonesia",
      "PT Myvenus Network Indonesia"
    ],
    "Asuransi": [
      "PT Berdikari Insurance Indonesia"
    ],
    "Koperasi": [
      "Koperasi Konsumen Tri Sakti"
    ],
    "Perbankan": [
      "PT ING Internasional"
    ],
    "Pengolahan Limbah": [
      "PT Jasa Alam Sejahtera",
      "PT OSCT Indonesia",
      "PT Greentex Indonesia Utama II",
      "PT Anugerah Hijau Abadi"
    ],
    "Jasa Tenaga Kerja Indonesia": [
      "PT MTWO Setia Mandiri",
      "PT Third Base"
    ],
    "Migas": [
      "PT Shell Works",
      "PT OSCT Indonesia",
      "PT Baratama Putra Perkasa",
      "PT Bumi Laksana Sejati"
    ],
    "Perkapalan": [
      "PT OSCT Indonesia",
      "PT East Java Development"
    ],
    "Pergudangan": [
      "PT Nutech Storage Indonesia",
      "PT Mitra Sukses Jayatama",
      "PT East Java Development"
    ],
    "Pertanian": [
      "PT Cemara Hijau Pratama",
      "PT Kelawit Hutani Indonesia",
      "PT Binadaya Bentala",
      "PT Riau Abadi Lestari",
      "PT Rimba Mandau Lestari",
      "PT Asia Tani Persada",
      "PT Wanakerta Ekalestari"
    ],
    "Properti/Perumahan": [
      "PT Hyundai Inti Development",
      "PT Buana Megatama Jaya",
      "PT Wira Indah Persada",
      "PT Megariamas Sentosa"
    ],
    "Dealer": [
      "PT Sugihara Hyundai Automotive"
    ],
    "Perdagangan": [
      "PT Citra Cemerlang Sejahtera",
      "PT Manggala Cipta Persada",
      "PT Jaya Makmur Kemilau",
      "PT Sanwa Trading Indonesia",
      "PT Darma Abadi Mandiri",
      "PT Prakasa Jaya Sentosa"
    ],
    "Transportasi": [
      "PT Ciptatrans Abadi"
    ],
    "Yayasan": [
      "Yayasan Duranno Indonesia"
    ],
    "Tur dan Travel": [
      "PT Vizitrip Global Tour"
    ]
  };

  const displayedClients = isMobile && !showAll ? clients.slice(0, 8) : clients;

  if (selectedSector) {
    const selectedClient = clients.find(client => client.name === selectedSector);
    const IconComponent = selectedClient ? selectedClient.icon : Factory;
    const companies = clientData[selectedSector] || [];

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={handleBackClick}
              className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-all duration-300 mb-8 group bg-white px-4 py-3 rounded-xl shadow-sm hover:shadow-md border border-blue-100 hover:border-blue-200"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">Kembali ke Daftar Sektor</span>
            </button>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{selectedSector}</h1>
                  <div className="flex items-center space-x-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {companies.length} perusahaan
                    </span>
                    <span className="text-gray-500">Klien terdaftar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200 group animate-fade-in"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2 group-hover:bg-blue-600 transition-colors"></div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-gray-900 font-medium text-sm leading-relaxed group-hover:text-blue-900 transition-colors">
                      {company}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {companies.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Belum Ada Data</h3>
                <p className="text-gray-500">Belum ada perusahaan terdaftar untuk sektor ini</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 relative overflow-hidden pt-27 lg:pt-25 px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1200 ease-out ${
            isMobile ? 'opacity-100 translate-y-0' : (isVisible && headerVisible) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-16'
          }`}
        >
          <div className="max-w-2xl mx-auto">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 transition-all duration-1000 ease-out ${
              isMobile ? 'opacity-100 scale-100' : (isVisible && headerVisible) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              KLIEN BISNIS KAMI
            </h1>
            <div className="flex justify-center">
              <div className={`h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1500 ease-out ${
                (isVisible && headerVisible) ? 'w-24 opacity-100' : 'w-0 opacity-0'
              }`}></div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div 
            ref={gridRef} 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 max-w-none mx-auto"
          >
            {displayedClients.map((client, index) => {
              const IconComponent = client.icon;
              const isItemVisible = visibleItems.has(index);
              const isAdditionalItem = isMobile && index >= 8;
              const companyCount = clientData[client.name]?.length || 0;

              return (
                <button
                  key={index}
                  ref={el => itemRefs.current[index] = el}
                  onClick={() => handleSectorClick(client.name)}
                  className={`group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-200 cursor-pointer transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out p-6 text-left ${
                    (isVisible && isItemVisible) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'
                  } ${
                    isAdditionalItem ? 'transition-all duration-500 ease-in-out' : ''
                  }`}
                  style={{
                    transitionDelay: (isVisible && isItemVisible) ? `${(index % 10) * 100}ms` : '0ms',
                    transitionDuration: '800ms',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    minHeight: '140px'
                  }}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-indigo-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out shadow-sm group-hover:shadow-lg">
                        <IconComponent className="w-7 h-7 text-blue-600 group-hover:text-white transition-all duration-500 ease-out" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                          {companyCount}
                        </div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors">
                          perusahaan
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-end">
                      <h3 className="text-gray-900 font-semibold text-base group-hover:text-blue-900 transition-all duration-300 ease-out leading-tight mb-2">
                        {client.name}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                        <span>Lihat detail</span>
                        <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {isMobile && (
            <div className="flex justify-center mt-10">
              <button
                onClick={handleShowAll}
                disabled={isAnimating}
                className={`flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium ${
                  isAnimating ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <span>{showAll ? 'Tampilkan Sedikit' : 'Lihat Semua Sektor'}</span>
                {showAll ? (
                  <ChevronUp className={`w-5 h-5 transition-transform duration-300 ${isAnimating ? 'rotate-180' : ''}`} />
                ) : (
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isAnimating ? 'rotate-180' : ''}`} />
                )}
              </button>
            </div>
          )}
        </div>

        {/* Decorative elements */}
        <div className={`absolute top-1/4 left-8 pointer-events-none transition-all duration-1200 ease-out ${
          (isVisible && headerVisible) ? 'opacity-5 translate-x-0 scale-100' : 'opacity-0 -translate-x-16 scale-75'
        }`}>
          <div className="text-6xl font-extralight text-gray-300 select-none">innovation</div>
        </div>
        <div className={`absolute top-1/3 right-8 pointer-events-none transition-all duration-1400 ease-out ${
          (isVisible && headerVisible) ? 'opacity-5 translate-x-0 scale-100' : 'opacity-0 translate-x-16 scale-75'
        }`} style={{ transitionDelay: '200ms' }}>
          <div className="text-5xl font-extralight text-gray-300 select-none">partnership</div>
        </div>
        <div className={`absolute bottom-1/4 left-16 pointer-events-none transition-all duration-1600 ease-out ${
          (isVisible && headerVisible) ? 'opacity-5 translate-x-0 scale-100' : 'opacity-0 -translate-x-16 scale-75'
        }`} style={{ transitionDelay: '400ms' }}>
          <div className="text-4xl font-extralight text-gray-300 select-none">excellence</div>
        </div>
      </div>
    </div>
  );
}

export default KlienIntegrated;