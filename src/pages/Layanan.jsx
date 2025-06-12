import React, { useState, useEffect } from 'react';

// 1. Service Data Configuration
const servicesData = [
  {
    id: 'audit',
    title: 'AUDIT',
    color: 'bg-green-500',
    dotColor: 'bg-gray-500',
    textColor: 'text-white',
    contentColor: 'text-gray-600',
    position: { top: '70%', right: '2%' },
    items: [
      'General Audit',
      'Due Diligence',
      'Management Audit',
      'Other Attestation Services'
    ]
  },
  {
    id: 'ppl',
    title: 'PPL',
    subtitle: '(Pendidikan & Pelatihan)',
    color: 'bg-orange-500',
    dotColor: 'bg-gray-500',
    textColor: 'text-white',
    contentColor: 'text-gray-600',
    position: { top: '0%', right: '2%' },
    items: [
      'Akuntansi (Penyusunan Laporan Keuangan)',
      'Perpajakan'
    ]
  },
  {
    id: 'accounting',
    title: 'ACCOUNTING ADVISOR',
    color: 'bg-gray-600',
    dotColor: 'bg-gray-500',
    textColor: 'text-white',
    contentColor: 'text-gray-600',
    position: { top: '38.5%', right: '2%' },
    items: [
      'IFRS Convergence',
      'Accounting Advice'
    ]
  },
  {
    id: 'business',
    title: 'BUSINESS MANAGEMENT CONSULT',
    color: 'bg-red-500',
    dotColor: 'bg-gray-500',
    textColor: 'text-white',
    contentColor: 'text-gray-600',
    position: { bottom: '-22%', left: '2%' },
    items: [
      'Financial Consulting',
      'Capital Restriction',
      'Merger (Acquisition)',
      'Design Information Accounting System'
    ]
  },
  {
    id: 'taxation',
    title: 'TAXATION',
    color: 'bg-cyan-500',
    dotColor: 'bg-gray-500',
    textColor: 'text-white',
    contentColor: 'text-gray-600',
    position: { bottom: '36%', left: '2%' },
    items: [
      'Tax Advisor',
      'Examination of Tax Compliance',
      'Tax Administration',
      'Tax Planning',
      'Transfer Pricing',
      'Legal Tax'
    ]
  }
];

// 2. Background Component
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-6 left-6 w-12 h-12 bg-gray-200/30 rounded-full backdrop-blur-sm border border-gray-300/40" />
    <div className="absolute top-20 right-12 w-10 h-10 bg-gray-100/40 rounded-lg rotate-45 backdrop-blur-sm border border-gray-300/30" />
    <div className="absolute bottom-16 left-12 w-8 h-8 bg-slate-200/35 rounded-full backdrop-blur-sm border border-slate-300/45" />
    <div className="absolute bottom-20 right-20 w-16 h-16 bg-gray-50/50 rounded-lg backdrop-blur-sm border border-gray-200/35" />
    
    <div 
      className="absolute inset-0 opacity-15"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.25) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }}
    />
    
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-gray-100/15 backdrop-blur-[1px]" />
  </div>
);

// 3. Service Card Component
const ServiceCard = ({ service, isHovered, onHover, onLeave, isDesktop = true }) => {
  const cardClasses = isDesktop
    ? `absolute bg-white mt-20 rounded-xl shadow-lg border border-gray-200 p-4 cursor-pointer w-64 backdrop-blur-lg transition-all duration-300 ${
        isHovered ? 'shadow-xl z-30 transform scale-105 -translate-y-1' : 'z-10'
      }`
    : `bg-white rounded-lg shadow-md border border-gray-200 p-0 hover:shadow-lg transition-all duration-300 backdrop-blur-lg hover:scale-102 overflow-hidden`;

  const shadowStyle = isDesktop ? {
    boxShadow: isHovered 
      ? '0 20px 40px -10px rgba(0, 0, 0, 0.2), 0 0 25px rgba(0, 0, 0, 0.06)'
      : '0 8px 20px -2px rgba(0, 0, 0, 0.12), 0 0 12px rgba(0, 0, 0, 0.04)',
    ...service.position // Apply position from service data
  } : {
    boxShadow: '0 6px 20px -4px rgba(0, 0, 0, 0.12), 0 0 12px rgba(0, 0, 0, 0.04)'
  };

  return (
    <div
      className={cardClasses}
      style={shadowStyle}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className={`${isDesktop ? 'mb-3 -m-4 m' : 'mb-0'} ${service.color} p-4 ${isDesktop ? 'rounded-t-xl' : ''}`}>
        <h3 className={`font-bold ${service.textColor} ${isDesktop ? 'text-base' : 'text-sm'} mb-1 tracking-wide ${isDesktop ? '' : 'leading-tight'}`}>
          {service.title}
        </h3>
        {service.subtitle && (
          <div className={`text-xs ${service.textColor} opacity-90 font-medium`}>
            {service.subtitle}
          </div>
        )}
      </div>
      
      <div className={isDesktop ? '' : 'p-4'}>
        <ul className='space-y-2'>
          {service.items.map((item, idx) => (
            <li 
              key={idx} 
              className={`text-xs ${service.contentColor} flex items-start leading-relaxed`}
            >
              <span className={`w-1.5 h-1.5 ${service.dotColor} rounded-full mt-1.5 mr-2 flex-shrink-0 shadow-sm`} />
              <span className='font-medium'>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// 4. Desktop Service Cards Component
const DesktopServiceCards = ({ services, hoveredService, setHoveredService }) => (
  <div className='hidden lg:block relative h-[500px]'>
    {services.map((service) => (
      <ServiceCard
        key={service.id}
        service={service}
        isHovered={hoveredService === service.id}
        onHover={() => setHoveredService(service.id)}
        onLeave={() => setHoveredService(null)}
        isDesktop={true}
      />
    ))}
  </div>
);

// 5. Mobile Service Cards Component
const MobileServiceCards = ({ services }) => (
  <div className='lg:hidden max-w-3xl mx-auto px-2'>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          isHovered={false}
          onHover={() => {}}
          onLeave={() => {}}
          isDesktop={false}
        />
      ))}
    </div>
  </div>
);

// 6. Central Hub Component
const CentralHub = () => (
  <div 
    className='absolute top-1/2 left-1/2 w-16 h-16 bg-blue-800 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-30'
    style={{
      boxShadow: '0 8px 16px rgba(0,0,0,0.15), 0 0 15px rgba(59, 130, 246, 0.3)'
    }}
  >
    <div className='absolute inset-2 bg-white rounded-full flex items-center justify-center'>
      <div className='w-6 h-6 bg-red-500 rounded-full'></div>
    </div>
  </div>
);

// 7. Connection Arms Component
const ConnectionArms = ({ services, hoveredService, getColorValue }) => (
  <svg className='absolute inset-0 w-full h-full' viewBox="0 0 400 400">
    {services.map((service, index) => {
      const centerX = 200;
      const centerY = 200;
      const angle = (index * (360 / services.length)) * (Math.PI / 180);
      const radius = 140;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      const lineColor = hoveredService === service.id 
                        ? getColorValue(service.color)
                        : 'rgba(100, 116, 139, 0.6)';
      const lineStrokeWidth = hoveredService === service.id ? "4" : "2";

      return (
        <g key={service.id}>
          <line
            x1={centerX}
            y1={centerY}
            x2={x}
            y2={y}
            stroke={lineColor}
            strokeWidth={lineStrokeWidth}
            className='transition-all duration-300'
            style={{
              filter: hoveredService === service.id ? `drop-shadow(0 0 6px ${lineColor})` : 'none'
            }}
          />
          <circle
            cx={x}
            cy={y}
            r="4"
            fill={lineColor}
            className='transition-all duration-300'
          />
        </g>
      );
    })}
  </svg>
);

// 8. Service Node Circles Component
const ServiceNodeCircles = ({ services, hoveredService, setHoveredService, getColorValue }) => (
  <>
    {services.map((service, index) => {
      const angle = (index * (360 / services.length)) * (Math.PI / 180);
      const radius = 140;
      const x = 200 + radius * Math.cos(angle);
      const y = 200 + radius * Math.sin(angle);
      
      const getAbbreviation = (serviceId) => {
        const abbreviations = {
          'business': 'BMC',
          'accounting': 'ACC',
          'audit': 'AUD',
          'taxation': 'TAX',
          'ppl': 'PPL'
        };
        return abbreviations[serviceId] || serviceId.substring(0,3).toUpperCase();
      };
      
      return (
        <div
          key={service.id}
          className={`absolute w-20 h-20 ${service.color} rounded-full flex items-center justify-center text-white cursor-pointer z-20 transition-all duration-300 ${
            hoveredService === service.id ? 'transform scale-110' : ''
          }`}
          style={{
            left: `${x - 40}px`,
            top: `${y - 40}px`,
            boxShadow: hoveredService === service.id 
              ? `0 12px 28px rgba(0, 0, 0, 0.18), 0 0 20px ${getColorValue(service.color)}30`
              : '0 6px 18px rgba(0, 0, 0, 0.12), 0 0 12px rgba(0, 0, 0, 0.04)',
          }}
          onMouseEnter={() => setHoveredService(service.id)}
          onMouseLeave={() => setHoveredService(null)}
        >
          <div className='text-center'>
            <div className='font-bold text-sm leading-tight px-1'>
              {getAbbreviation(service.id)}
            </div>
          </div>
          
          {hoveredService === service.id && (
            <>
              <div className='absolute inset-0 rounded-full border-2 border-white opacity-60' />
              <div className='absolute -inset-2 rounded-full border-2 border-current opacity-30' />
            </>
          )}
        </div>
      );
    })}
  </>
);

// 9. Central Rotating Mechanism Component
const CentralRotatingMechanism = ({ services, hoveredService, setHoveredService, rotation, getColorValue }) => (
  <div className='hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
    <div className='relative w-[400px] h-[400px]'>
      
      {/* Outer Ring */}
      <div 
        className='absolute inset-0 rounded-full border-2 border-gray-300/60 shadow-inner backdrop-blur-lg'
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.4), rgba(248,250,252,0.2))',
          boxShadow: 'inset 0 3px 12px rgba(0, 0, 0, 0.06), 0 6px 24px rgba(0, 0, 0, 0.03)'
        }}
      />
      
      {/* Rotating Container */}
      <div 
        className='absolute inset-0 transition-transform duration-75 ease-linear'
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <CentralHub />
        <ConnectionArms 
          services={services} 
          hoveredService={hoveredService} 
          getColorValue={getColorValue} 
        />
        <ServiceNodeCircles 
          services={services} 
          hoveredService={hoveredService} 
          setHoveredService={setHoveredService}
          getColorValue={getColorValue}
        />
      </div>
    </div>
  </div>
);

// 10. Main Title Component
const MainTitle = () => (
  <h1 
    className='text-center text-2xl md:text-3xl font-bold text-gray-800 uppercase mb-8 lg:mb-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 px-2'
    style={{
      textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
    }}
  >
    our range of services 
  </h1>
);

// 11. Main Services Diagram Component
function ModularServicesDiagram() {
  const [hoveredService, setHoveredService] = useState(null);
  const [rotation, setRotation] = useState(0);

  // Auto rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hoveredService) {
        setRotation(prev => prev + 0.4);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [hoveredService]);

  // Helper function to get Tailwind color values for SVG
  const getColorValue = (bgClass) => {
    const colorMap = {
      'bg-green-500': '#10b981',
      'bg-orange-500': '#f97316',
      'bg-gray-600': '#4b5563',
      'bg-red-500': '#ef4444',
      'bg-cyan-500': '#06b6d4'
    };
    return colorMap[bgClass] || '#d1d5db';
  };

  return (
    <div 
      className="relative py-4 lg:py-8 overflow-hidden pt-16 lg:pt-28 px-4"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.92) 30%, rgba(241, 245, 249, 0.88) 70%, rgba(226, 232, 240, 0.85) 100%)',
        backdropFilter: 'blur(20px)',
        minHeight: '100vh'
      }}
    >
      <AnimatedBackground />

      <div className='relative w-full max-w-6xl mx-auto px-2 lg:h-[550px]'>
        <MainTitle />
        
        <DesktopServiceCards 
          services={servicesData} 
          hoveredService={hoveredService} 
          setHoveredService={setHoveredService} 
        />

        <MobileServiceCards services={servicesData} />

        <CentralRotatingMechanism 
          services={servicesData}
          hoveredService={hoveredService}
          setHoveredService={setHoveredService}
          rotation={rotation}
          getColorValue={getColorValue}
        />
      </div>
    </div>
  );
}

export default ModularServicesDiagram;