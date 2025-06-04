import React from 'react'
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';

function Footer() {
  const footerRef = useRef(null);
  const isFooterInView = useInView(footerRef, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        duration: 0.2
      }
    }
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer 
      ref={footerRef}
      className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden"
      initial="hidden"
      animate={isFooterInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div 
            className="md:col-span-2"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mr-3"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-bold text-lg">J</span>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold">KAP Jamaster Simanullang</h3>
                <p className="text-blue-200 text-sm">Kantor Akuntan Publik</p>
              </div>
            </motion.div>
            <motion.p 
              className="text-gray-300 leading-relaxed mb-4"
              variants={itemVariants}
            >
              Memberikan layanan audit, konsultasi perpajakan, dan penyusunan laporan keuangan 
              yang handal dengan menjunjung tinggi prinsip independensi, integritas, dan kompetensi.
            </motion.p>
            <motion.div 
              className="flex items-center text-blue-200"
              variants={itemVariants}
            >
              <motion.span 
                className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Berdiri sejak November 2017
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="text-lg font-semibold mb-4 text-blue-200"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Layanan Kami
            </motion.h4>
            <motion.ul className="space-y-2">
              {[
                'Audit Laporan Keuangan',
                'Konsultasi Perpajakan',
                'Penyusunan Laporan Keuangan',
                'Review Laporan Keuangan',
                'Konsultasi Bisnis'
              ].map((service, index) => (
                <motion.li 
                  key={index}
                  className="text-gray-300 hover:text-blue-200 transition-colors cursor-pointer"
                  whileHover={{ x: 10, color: "#93C5FD" }}
                  transition={{ duration: 0.2 }}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.1
                      }
                    }
                  }}
                >
                  • {service}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="text-lg font-semibold mb-4 text-blue-200"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Hubungi Kami
            </motion.h4>
            <motion.div className="space-y-3">
              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-5 h-5 bg-blue-500 rounded mr-3 mt-1 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-xs">📍</span>
                </motion.div>
                <div>
                  <p className="text-gray-300 text-sm">Jakarta, Indonesia</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-5 h-5 bg-green-500 rounded mr-3 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-xs">📧</span>
                </motion.div>
                <p className="text-gray-300 text-sm">info@kapjamaster.com</p>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-5 h-5 bg-yellow-500 rounded mr-3 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-xs">📞</span>
                </motion.div>
                <p className="text-gray-300 text-sm">+62 21 1234 5678</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Media & Standards */}
        <motion.div 
          className="border-t border-gray-700 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Standards */}
            <motion.div 
              className="mb-4 md:mb-0"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-2 rounded-full border border-blue-500/30"
                whileHover={{ scale: 1.05, borderColor: "#60A5FA" }}
                transition={{ duration: 0.3 }}
              >
                <motion.span 
                  className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  ✓
                </motion.span>
                <span className="text-blue-200 text-sm font-medium">
                  Berstandar SAK (Standar Akuntansi Keuangan)
                </span>
              </motion.div>
            </motion.div>

            {/* Social Media */}
            <motion.div 
              className="flex space-x-4"
              variants={containerVariants}
            >
              {[
                { name: 'LinkedIn', color: 'bg-blue-600', icon: 'in' },
                { name: 'Email', color: 'bg-red-500', icon: '@' },
                { name: 'WhatsApp', color: 'bg-green-500', icon: 'W' },
                { name: 'Website', color: 'bg-purple-600', icon: '🌐' }
              ].map((social, index) => (
                <motion.div
                  key={index}
                  className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center cursor-pointer`}
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-white text-xs font-bold">{social.icon}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent my-8"
          variants={dividerVariants}
        />

        {/* Copyright */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <motion.p 
            className="text-gray-400 text-sm"
            whileHover={{ scale: 1.02, color: "#93C5FD" }}
            transition={{ duration: 0.2 }}
          >
            © 2024 KAP Jamaster Simanullang. All rights reserved. 
            <motion.span 
              className="mx-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              |
            </motion.span>
            Made with ❤️ for professional accounting services
          </motion.p>
        </motion.div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </motion.footer>
  )
}

export default Footer