import React, { useState, useEffect, useRef } from 'react';
import {
  Shirt, Ship, Heart, Users, GraduationCap, Shield, Utensils, Printer, MapPin,
  Handshake, ShoppingCart, Car, Factory, Wheat, Building2, HardHat, Fuel, Beef,
  Radio, Package, UserCheck, Truck, Recycle, Home, Landmark
} from 'lucide-react';

function Klien() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);

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
  }, []);

  

  const clients = [
    { name: 'Tekstil', icon: Shirt }, { name: 'Perkapalan', icon: Ship },
    { name: 'Rumah Sakit/Klinik', icon: Heart }, { name: 'Yayasan', icon: Users },
    { name: 'Universitas', icon: GraduationCap }, { name: 'Asuransi', icon: Shield },
    { name: 'Hotel dan Restoran', icon: Utensils }, { name: 'Percetakan', icon: Printer },
    { name: 'Tur dan Travel', icon: MapPin }, { name: 'Koperasi', icon: Handshake },
    { name: 'Retail', icon: ShoppingCart }, { name: 'Dealer', icon: Car },
    { name: 'Manufaktur', icon: Factory }, { name: 'Pertanian', icon: Wheat },
    { name: 'Kerjasama Operasi', icon: Building2 }, { name: 'Konstruksi', icon: HardHat },
    { name: 'Migas', icon: Fuel }, { name: 'Peternakan', icon: Beef },
    { name: 'Telekomunikasi', icon: Radio }, { name: 'Pergudangan', icon: Package },
    { name: 'Jasa Tenaga Kerja Indonesia', icon: UserCheck }, { name: 'Transportasi', icon: Truck },
    { name: 'Pengolahan Limbah', icon: Recycle }, { name: 'Properti/Perumahan', icon: Home },
    { name: 'Perbankan', icon: Landmark }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1200 ease-out ${
            (isVisible && headerVisible) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-16'
          }`}
        >
          <h1 className={`text-4xl font-bold text-gray-800 mb-4 transition-all duration-1000 ease-out ${
            (isVisible && headerVisible) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            KLIEN BISNIS KAMI
          </h1>
          <div className="flex justify-center">
            <div className={`h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1500 ease-out ${
              (isVisible && headerVisible) ? 'w-24 opacity-100' : 'w-0 opacity-0'
            }`}></div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <span className="text-9xl font-bold text-gray-400 transform -rotate-12">
              BUSINESS
            </span>
          </div>

          <div ref={gridRef} className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {clients.map((client, index) => {
              const IconComponent = client.icon;
              const isItemVisible = visibleItems.has(index);

              return (
                <div
                  key={index}
                  ref={el => itemRefs.current[index] = el}
                  className={`group flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-2xl hover:scale-[1.03] hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-100 border border-gray-100 hover:border-blue-300 cursor-pointer transform hover:-translate-y-3 ${
                    (isVisible && isItemVisible) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'
                  }`}
                  style={{
                    transitionDelay: (isVisible && isItemVisible) ? `${(index % 8) * 100}ms` : '0ms',
                    transitionDuration: '800ms',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-indigo-600 group-hover:scale-125 group-hover:rotate-[15deg] transition-all duration-500 ease-out shadow-sm group-hover:shadow-lg">
                    <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-all duration-500 ease-out group-hover:scale-110" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm group-hover:text-blue-800 group-hover:font-semibold transition-all duration-300 ease-out leading-tight group-hover:translate-x-1">
                    {client.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Motion elements */}
        <div className={`absolute top-1/4 left-10 pointer-events-none transition-all duration-1200 ease-out ${
          (isVisible && headerVisible) ? 'opacity-10 translate-x-0 scale-100' : 'opacity-0 -translate-x-16 scale-75'
        }`}>
          <span className="text-4xl font-light text-gray-300 animate-pulse">future</span>
        </div>
        <div className={`absolute top-1/3 right-10 pointer-events-none transition-all duration-1400 ease-out ${
          (isVisible && headerVisible) ? 'opacity-10 translate-x-0 scale-100' : 'opacity-0 translate-x-16 scale-75'
        }`} style={{ transitionDelay: '200ms' }}>
          <span className="text-3xl font-light text-gray-300 animate-pulse" style={{ animationDelay: '1s' }}>solution</span>
        </div>
        <div className={`absolute bottom-1/4 left-20 pointer-events-none transition-all duration-1600 ease-out ${
          (isVisible && headerVisible) ? 'opacity-10 translate-x-0 scale-100' : 'opacity-0 -translate-x-16 scale-75'
        }`} style={{ transitionDelay: '400ms' }}>
          <span className="text-3xl font-light text-gray-300 animate-pulse" style={{ animationDelay: '2s' }}>innovation</span>
        </div>

     
      </div>
    </div>
  );
}

export default Klien;
