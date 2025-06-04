import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';

// Helper hook for scroll-triggered animations
const useScrollAnimation = (threshold = 0.1, once = true) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, isInView, once]);

  return [ref, controls];
};

function RotatingServicesDiagram() {
  const [hoveredService, setHoveredService] = useState(null);
  const [rotation, setRotation] = useState(0);

  const services = [
    {
      id: 'audit',
      title: 'AUDIT',
      color: 'bg-green-500',
      dotColor: 'bg-white',
      textColor: 'text-white',
      position: { top: '20%', left: '-2%' },
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
      dotColor: 'bg-white',
      textColor: 'text-white',
      position: { top: '15%', right: '-4%' },
      items: [
        'Akuntansi (Penyusunan Laporan Keuangan)',
        'Perpajakan'
      ]
    },
    {
      id: 'accounting',
      title: 'ACCOUNTING ADVISOR',
      color: 'bg-gray-600',
      dotColor: 'bg-white',
      textColor: 'text-white',
      position: { top: '45%', right: '-4%' },
      items: [
        'IFRS Convergence',
        'Accounting Advice'
      ]
    },
    {
      id: 'business',
      title: 'BUSINESS MANAGEMENT CONSULT',
      color: 'bg-red-500',
      dotColor: 'bg-white',
      textColor: 'text-white',
      position: { bottom: '-4%', right: '-4%' },
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
      dotColor: 'bg-white',
      textColor: 'text-white',
      position: { bottom: '5%', left: '-2%' },
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

  // Smooth auto rotation for the central diagram (desktop only)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hoveredService) {
        setRotation(prev => prev + 0.4);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [hoveredService]);

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const sectionWrapperVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0px 20px 30px -10px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const mobileCardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0px 10px 20px -5px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  const centralMechanismParentVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut", 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const outerRingVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, type: "spring", stiffness: 100 } }
  };

  const rotatingElementVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const centerHubVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, type: "spring", stiffness: 200, delay:0.1 } }
  };
  
  const svgArmsVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.08 } }
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 0.7 } }
  };

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, type: "spring", stiffness: 150 }
    },
    hover: {
      scale: 1.25,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.6 },
    animate: {
      scale: [1, 1.4, 1],
      opacity: [0.6, 0, 0.6],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Setup scroll animations for different sections
  const [titleRef, titleControls] = useScrollAnimation(0.5);
  const [desktopSectionRef, desktopSectionControls] = useScrollAnimation(0.1);
  const [mobileSectionRef, mobileSectionControls] = useScrollAnimation(0.05);
  const [centralMechanismRef, centralMechanismControls] = useScrollAnimation(0.25);

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
    <motion.div 
      className='bg-white py-8 lg:py-16 overflow-hidden mt-20'
    >
      <div className='relative w-full max-w-7xl mx-auto px-4 lg:h-[800px]'>

        {/* Main Title */}
        <motion.h1 
          ref={titleRef}
          className='text-center text-4xl md:text-5xl font-bold text-gray-800 uppercase mb-12 lg:mb-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2  px-4'
          initial="hidden"
          animate={titleControls}
          variants={titleVariants}
        >
          our range of services 
        </motion.h1>
        
        {/* Desktop Service Cards */}
        <motion.div
          ref={desktopSectionRef}
          className='hidden lg:block relative h-[700px]'
          initial="hidden"
          animate={desktopSectionControls}
          variants={sectionWrapperVariants}
        >
          <AnimatePresence>
            {services.map((service) => (
              <motion.div
                key={service.id}
                className={`absolute ${service.color} rounded-2xl shadow-lg border-2 border-opacity-20 border-white p-6 cursor-pointer w-80 ${
                  hoveredService === service.id 
                    ? 'shadow-2xl z-30' 
                    : 'z-10'
                }`}
                style={{...service.position}}
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Card Title Section */}
                <motion.div 
                  className='mb-4'
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className={`font-bold ${service.textColor} text-lg mb-1 tracking-wide`}>
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <div className={`text-sm ${service.textColor} opacity-90 font-medium`}>{service.subtitle}</div>
                  )}
                </motion.div>
                
                {/* List of services within the card */}
                <motion.ul className='space-y-3'>
                  {service.items.map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      className={`text-sm ${service.textColor} flex items-start leading-relaxed`}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={idx}
                    >
                      <motion.span 
                        className={`w-2 h-2 ${service.dotColor} rounded-full mt-2 mr-3 flex-shrink-0 shadow-sm`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + idx * 0.05, type: "spring", stiffness: 200 }}
                      ></motion.span>
                      <span className='font-medium opacity-95'>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mobile Service Cards */}
        <motion.div 
          ref={mobileSectionRef}
          className='lg:hidden max-w-4xl mx-auto px-4'
          initial="hidden"
          animate={mobileSectionControls}
          variants={sectionWrapperVariants}
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`${service.color} rounded-xl shadow-md border border-white border-opacity-20 p-6 hover:shadow-lg transition-all duration-300`}
                variants={mobileCardVariants}
                whileHover="hover"
              >
                {/* Mobile Card Header with Icon and Title */}
                <motion.div 
                  className='mb-5 flex items-start'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {/* Service Icon */}
                  
                  {/* Service Title and Subtitle */}
                  <div className='flex-1'>
                    <h3 className={`font-bold ${service.textColor} text-lg mb-1 tracking-wide leading-tight`}>
                      {service.title}
                    </h3>
                    {service.subtitle && (
                      <div className={`text-sm ${service.textColor} opacity-90 font-medium`}>{service.subtitle}</div>
                    )}
                  </div>
                </motion.div>
                
                {/* List of services within the mobile card */}
                <motion.ul className='space-y-3'>
                  {service.items.map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      className={`text-sm ${service.textColor} flex items-start leading-relaxed`}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={idx}
                    >
                      <motion.span 
                        className={`w-2 h-2 ${service.dotColor} rounded-full mt-2 mr-3 flex-shrink-0 shadow-sm`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 + idx * 0.03, type: "spring" }}
                      ></motion.span>
                      <span className='font-medium opacity-95'>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Central Rotating Mechanism */}
        <motion.div 
          ref={centralMechanismRef}
          className='hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          initial="hidden"
          animate={centralMechanismControls}
          variants={centralMechanismParentVariants}
        >
          <div className='relative w-[600px] h-[600px]'>
            
            {/* Outer Ring */}
            <motion.div 
              className='absolute inset-0 rounded-full border-4 border-gray-200 bg-gradient-to-br from-white to-gray-50 shadow-inner'
              variants={outerRingVariants}
            ></motion.div>
            
            {/* Rotating Container */}
            <motion.div 
              className='absolute inset-0 transition-transform duration-75 ease-linear'
              style={{ transform: `rotate(${rotation}deg)` }}
              variants={rotatingElementVariants}
            >
              
              {/* Center Hub */}
              <motion.div 
                className='absolute top-1/2 left-1/2 w-24 h-24 bg-blue-800 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-30 shadow-2xl'
                variants={centerHubVariants}
              >
                <div className='absolute inset-3 bg-white rounded-full flex items-center justify-center'>
                  <motion.div 
                    className='w-10 h-10 bg-red-500 rounded-full'
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(239, 68, 68, 0.7)",
                        "0 0 0 10px rgba(239, 68, 68, 0)",
                        "0 0 0 0 rgba(239, 68, 68, 0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                </div>
              </motion.div>

              {/* Connection Arms */}
              <motion.svg 
                className='absolute inset-0 w-full h-full' 
                viewBox="0 0 600 600"
                variants={svgArmsVariants}
              >
                {services.map((service, index) => {
                  const centerX = 300;
                  const centerY = 300;
                  const angle = (index * (360 / services.length)) * (Math.PI / 180);
                  const radius = 220;
                  const x = centerX + radius * Math.cos(angle);
                  const y = centerY + radius * Math.sin(angle);
                  
                  const lineColor = hoveredService === service.id 
                                    ? getColorValue(service.color)
                                    : '#d1d5db';
                  const lineStrokeWidth = hoveredService === service.id ? "6" : "3";

                  return (
                    <g key={service.id}>
                      <motion.line
                        x1={centerX}
                        y1={centerY}
                        x2={x}
                        y2={y}
                        stroke={lineColor}
                        strokeWidth={lineStrokeWidth}
                        className='transition-all duration-300'
                        style={{
                          filter: hoveredService === service.id ? `drop-shadow(0 0 8px ${lineColor})` : 'none'
                        }}
                        variants={lineVariants}
                      />
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="6"
                        fill={lineColor}
                        className='transition-all duration-300'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, type: "spring", delay: 0.3 }}
                      />
                    </g>
                  );
                })}
              </motion.svg>

              {/* Service Node Circles */}
              {services.map((service, index) => {
                const angle = (index * (360 / services.length)) * (Math.PI / 180);
                const radius = 220;
                const x = 300 + radius * Math.cos(angle);
                const y = 300 + radius * Math.sin(angle);
                
                return (
                  <motion.div
                    key={service.id}
                    className={`absolute w-28 h-28 ${service.color} rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer z-20`}
                    style={{
                      left: `${x - 56}px`,
                      top: `${y - 56}px`,
                      filter: hoveredService === service.id 
                        ? 'drop-shadow(0 0 20px rgba(0,0,0,0.4))' 
                        : 'drop-shadow(0 4px 12px rgba(0,0,0,0.2))',
                    }}
                    variants={nodeVariants}
                    whileHover="hover"
                    whileTap="tap"
                    animate={hoveredService === service.id ? "hover" : "visible"}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div className='text-center'>
                      <div className='font-bold text-lg leading-tight px-1'>
                        {service.id === 'business' ? 'BMC' : 
                         service.id === 'accounting' ? 'ACC' : 
                         service.id === 'audit' ? 'AUD' :
                         service.id === 'taxation' ? 'TAX' :
                         service.id === 'ppl' ? 'PPL' : service.title.substring(0,3).toUpperCase()}
                      </div>
                    </div>
                    
                    {/* Animated Ring on Hover */}
                    <AnimatePresence>
                      {hoveredService === service.id && (
                        <>
                          <motion.div 
                            className='absolute inset-0 rounded-full border-3 border-white'
                            variants={pulseVariants}
                            initial="initial"
                            animate="animate"
                            exit={{ opacity: 0, scale: 1 }}
                          />
                          <motion.div 
                            className='absolute -inset-3 rounded-full border-2 border-current opacity-30'
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.15, opacity: 0.3 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

      </div>

      <style jsx>{`
        @keyframes float {
          0% { opacity: 0.4; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </motion.div>
  );
}

export default RotatingServicesDiagram;