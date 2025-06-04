import React from 'react'
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';

function Profil() {
  // Create refs for each section to track scroll position
  const headerRef = useRef(null);
  const introRef = useRef(null);
  const historyRef = useRef(null);
  const visionRef = useRef(null);
  const valuesRef = useRef(null);
  const footerRef = useRef(null);

  // Track which sections are in view
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isIntroInView = useInView(introRef, { once: true, margin: "-100px" });
  const isHistoryInView = useInView(historyRef, { once: true, margin: "-100px" });
  const isVisionInView = useInView(visionRef, { once: true, margin: "-100px" });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const isFooterInView = useInView(footerRef, { once: true, margin: "-100px" });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardHover = {
    hover: {
      scale: 1.02,
      y: -5,
      boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white overflow-hidden">
      {/* Header */}
      <motion.div 
        ref={headerRef}
        className="text-center mb-12"
        initial="hidden"
        animate={isHeaderInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <motion.h1 
          className="text-4xl font-bold text-blue-900 mb-4"
          variants={scaleIn}
        >
          Kantor Akuntan Publik Jamaster Simanullang
        </motion.h1>
        <motion.div 
          className="w-24 h-1 bg-blue-600 mx-auto"
          initial={{ width: 0, opacity: 0 }}
          animate={isHeaderInView ? { width: 96, opacity: 1 } : { width: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      {/* Pendahuluan dan Sejarah Section - Side by Side */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Pendahuluan */}
          <motion.div
            ref={introRef}
            initial="hidden"
            animate={isIntroInView ? "visible" : "hidden"}
            variants={fadeInLeft}
            whileHover="hover"
          >
            <motion.h2 
              className="text-2xl font-semibold text-gray-800 mb-6 border-l-4 border-blue-600 pl-4"
              variants={fadeInLeft}
            >
              Pendahuluan
            </motion.h2>
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg h-full"
              variants={{
                ...cardHover,
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    delay: 0.2
                  }
                },
                hidden: {
                  opacity: 0,
                  scale: 0.95
                }
              }}
              whileHover="hover"
            >
              <motion.p 
                className="text-gray-700 leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                animate={isIntroInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Kantor Akuntan Publik Jamaster Simanullang (KAP Jamaster Simanullang) berdiri sejak November 2017. 
                Sejak awal berdiri, kami telah berkomitmen untuk berperan serta dalam meningkatkan kemajuan 
                perekonomian nasional dengan menjalankan setiap layanan akuntansi dengan penuh independensi, 
                integritas, dan kompetensi.
              </motion.p>
              <motion.p 
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isIntroInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Kami menyediakan berbagai layanan seperti audit laporan keuangan, konsultasi perpajakan, 
                dan penyusunan laporan keuangan yang handal, terpercaya, serta tertib administrasi perpajakan. 
                Semua layanan kami berpedoman pada Standar Akuntansi Keuangan (SAK), yang diakui secara luas di Indonesia.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Sejarah Perusahaan */}
          <motion.div
            ref={historyRef}
            initial="hidden"
            animate={isHistoryInView ? "visible" : "hidden"}
            variants={fadeInRight}
            whileHover="hover"
          >
            <motion.h2 
              className="text-2xl font-semibold text-gray-800 mb-6 border-l-4 border-blue-600 pl-4"
              variants={fadeInRight}
            >
              Sejarah Perusahaan
            </motion.h2>
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg h-full"
              variants={{
                ...cardHover,
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    delay: 0.2
                  }
                },
                hidden: {
                  opacity: 0,
                  scale: 0.95
                }
              }}
              whileHover="hover"
            >
              <motion.p 
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isHistoryInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                KAP Jamaster Simanullang didirikan oleh Jamaster Simanullang, seorang akuntan publik berlisensi 
                yang memiliki visi untuk membantu entitas di Indonesia dalam memastikan laporan keuangan mereka 
                dapat diyakini dan memenuhi standar yang diterima umum. Seiring berjalannya waktu, kantor kami 
                berkembang dengan layanan yang terus meningkat sesuai dengan kebutuhan dunia bisnis yang semakin kompleks.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Visi dan Misi Section */}
      <motion.section 
        ref={visionRef}
        className="mb-12"
        initial="hidden"
        animate={isVisionInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-2xl font-semibold text-gray-800 mb-6 border-l-4 border-blue-600 pl-4"
          variants={fadeInUp}
        >
          Visi dan Misi
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Visi */}
          <motion.div 
            className="p-6 rounded-lg"
            variants={fadeInLeft}
            whileHover="hover"
          >
            <motion.h3 
              className="text-xl font-semibold mb-4 flex items-center bg-gradient-to-br from-blue-600 to-blue-800 text-white p-2 rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.span 
                className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                V
              </motion.span>
              Visi
            </motion.h3>
            <motion.p 
              className="leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.3 }
                }
              }}
            >
              Menjadi kantor akuntan yang profesional, handal, terpercaya, dan berwatak sosial, 
              berlandaskan kepada Tuhan Yang Maha Esa, serta mendukung tercapainya kemajuan klien 
              dengan tetap memegang prinsip independensi.
            </motion.p>
          </motion.div>

          {/* Misi */}
          <motion.div 
            className="p-6 rounded-lg"
            variants={fadeInRight}
            whileHover="hover"
          >
            <motion.h3 
              className="text-xl font-semibold mb-4 flex items-center bg-gradient-to-br from-green-600 to-green-800 text-white p-2 rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.span 
                className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                M
              </motion.span>
              Misi
            </motion.h3>
            <motion.p 
              className="leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.3 }
                }
              }}
            >
              Memberikan jasa profesional berkualitas dan berstandar tinggi dengan menjunjung tinggi 
              integritas, independensi, dan kompetisi demi mencapai tujuan bisnis klien secara 
              efektif dan efisien.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Values */}
      <motion.section 
        ref={valuesRef}
        className="mb-12"
        initial="hidden"
        animate={isValuesInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-2xl font-semibold text-gray-800 mb-6 border-l-4 border-blue-600 pl-4"
          variants={fadeInUp}
        >
          Nilai-Nilai Utama
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {[
            { color: 'blue', letter: 'I', title: 'Independensi', desc: 'Menjaga objektivitas dalam setiap layanan profesional' },
            { color: 'green', letter: 'I', title: 'Integritas', desc: 'Berkomitmen pada kejujuran dan transparansi' },
            { color: 'purple', letter: 'K', title: 'Kompetensi', desc: 'Memberikan layanan dengan keahlian profesional tinggi' }
          ].map((value, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-colors"
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 80,
                  scale: 0.8
                },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className={`w-16 h-16 bg-${value.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <span className={`text-${value.color}-600 font-bold text-xl`}>{value.letter}</span>
              </motion.div>
              <motion.h3 
                className="font-semibold text-gray-800 mb-2"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.2 }
                  }
                }}
              >
                {value.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 text-sm"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.3 }
                  }
                }}
              >
                {value.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Contact Info Footer */}
      <motion.div 
        ref={footerRef}
        className="text-center pt-8 border-t border-gray-200"
        initial="hidden"
        animate={isFooterInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <motion.p 
          className="text-gray-600"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
        >
          <span className="font-semibold">Berdiri sejak:</span> November 2017
        </motion.p>
        <motion.p 
          className="text-gray-600 mt-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, delay: 0.2 }
            }
          }}
        >
          <span className="font-semibold">Standar:</span> Standar Akuntansi Keuangan (SAK)
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Profil