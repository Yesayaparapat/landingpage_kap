import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import logoKap from "../assets/logo kap.png";
import Iai from "../assets/iai.png";
import Ifac from "../assets/ifac.png";
import Iapi from "../assets/iapi.png";
import Cpa from "../assets/cpa.png";
import Ikapi from "../assets/ikapi.png";

// Import gambar icon social media lokal
import EmailIcon from "../assets/email.jpeg";
import LinkedIcon from "../assets/linked.jpeg";
import WhatsappIcon from "../assets/whatsapp.jpeg";

function Footer() {
  const footerRef = useRef(null);
  const isFooterInView = useInView(footerRef, { once: true, margin: "-50px" });

  // Handler untuk email click dengan fallback
  const handleEmailClick = (e, email) => {
    e.preventDefault();
    
    try {
      // Coba buka mailto langsung
      const mailtoLink = `mailto:${email}`;
      window.location.href = mailtoLink;
      
      // Timeout untuk cek apakah mailto berhasil
      setTimeout(() => {
        // Jika masih di halaman yang sama dan tidak ada perubahan
        // kemungkinan mailto tidak bekerja, berikan fallback
        if (!document.hidden && window.location.href.indexOf('mailto:') === -1) {
          handleEmailFallback(email);
        }
      }, 500);
    } catch (error) {
      handleEmailFallback(email);
    }
  };

  // Fallback function untuk copy email
  const handleEmailFallback = (email) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        alert(`Email client tidak tersedia. Email ${email} telah disalin ke clipboard.`);
      }).catch(() => {
        // Jika clipboard API gagal, gunakan prompt sebagai fallback terakhir
        const textArea = document.createElement("textarea");
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          alert(`Email ${email} telah disalin ke clipboard.`);
        } catch (err) {
          prompt('Email client tidak tersedia. Salin email ini:', email);
        }
        document.body.removeChild(textArea);
      });
    } else {
      // Jika clipboard tidak didukung, gunakan prompt
      prompt('Email client tidak tersedia. Salin email ini:', email);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        duration: 0.2,
      },
    },
  };

  const memberIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Animasi sliding untuk logo container
  const slidingContainerVariants = {
    animate: {
      x: [0, -320, -640, -960, -1280, -1600], // Slide berdasarkan lebar logo
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15, // Durasi untuk satu cycle penuh
          ease: "linear",
        },
      },
    },
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
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
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <motion.div
              className="flex items-center mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-15 h-15  rounded-lg flex items-center justify-center mr-3"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img src={logoKap} alt="logo kap" />
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
              Memberikan layanan audit, konsultasi perpajakan, dan penyusunan
              laporan keuangan yang handal dengan menjunjung tinggi prinsip
              independensi, integritas, dan kompetensi.
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
                "Audit Laporan Keuangan",
                "Konsultasi Perpajakan",
                "Penyusunan Laporan Keuangan",
                "Review Laporan Keuangan",
                "Konsultasi Bisnis",
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
                        delay: index * 0.1,
                      },
                    },
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
                  <p className="text-gray-300 text-sm">
                    JL. Raya Cibarusah KM. 10 Ruko Cikarang Central City Blok E
                    NO. 8 Cikarang Selatan - Kab. BEKASI 17530
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => handleEmailClick(e, 'kap.jamasterjams@gmail.com')}
              >
                <motion.div
                  className="w-5 h-5 bg-green-500 rounded mr-3 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-xs">📧</span>
                </motion.div>
                <p className="text-gray-300 text-sm hover:text-blue-200 transition-colors">
                  kap.jamasterjams@gmail.com
                </p>
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
                <div className="text-gray-300 text-sm flex flex-col">
                  <span>+62 21 -8977 4253</span>
                  <span>+62 21 -8977 4251</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Media & Standards */}
        <motion.div
          className="border-t border-gray-700 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 ">
            {/* Standards & Memberships */}
            <motion.div className="flex-1 " variants={itemVariants}>
              {/* Member of Section */}
              <motion.div
                variants={itemVariants}
                className="bg-white/80 rounded-lg p-6"
              >
                <motion.h5
                  className="text-blue-800 text-2xl font-bold mb-3 "
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Member of:
                </motion.h5>
                
                {/* Sliding Container dengan overflow hidden */}
                <div className="overflow-hidden relative">
                  <motion.div
                    className="flex gap-3"
                    variants={slidingContainerVariants}
                    animate="animate"
                    style={{ width: 'fit-content' }}
                  >
                    {/* Set pertama logo */}
                    <motion.div
                      variants={memberIconVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                      className="flex-shrink-0"
                    >
                      <img
                        src={Iapi}
                        alt="IAPI"
                        className="w-90 h-20 object-contain"
                      />
                    </motion.div>

                    <motion.div
                      variants={memberIconVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                      className="flex-shrink-0"
                    >
                      <img
                        src={Iai}
                        alt="IAI"
                        className="w-40 h-20 object-contain"
                      />
                    </motion.div>

                    <motion.div
                      variants={memberIconVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                      className="flex-shrink-0"
                    >
                      <img
                        src={Ifac}
                        alt="IFAC"
                        className="w-40 h-20 object-contain"
                      />
                    </motion.div>

                    <motion.div
                      variants={memberIconVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                      className="flex-shrink-0"
                    >
                      <img
                        src={Cpa}
                        alt="ASEAN CPA"
                        className="w-40 h-20 object-contain"
                      />
                    </motion.div>

                    <motion.div
                      variants={memberIconVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                      className="flex-shrink-0"
                    >
                      <img
                        src={Ikapi}
                        alt="ISO"
                        className="w-40 h-20 object-contain"
                      />
                    </motion.div>

                    {/* Set kedua logo untuk seamless loop */}
                    <motion.div
                      variants={memberIconVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                      className="flex-shrink-0"
                    >
                      <img
                        src={Iapi}
                        alt="IAPI"
                        className="w-90 h-20 object-contain"
                      />
                    </motion.div>

                    <motion.div
                      variants={memberIconVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                      className="flex-shrink-0"
                    >
                      <img
                        src={Iai}
                        alt="IAI"
                        className="w-40 h-20 object-contain"
                      />
                    </motion.div>

                    <motion.div
                      variants={memberIconVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                      className="flex-shrink-0"
                    >
                      <img
                        src={Ifac}
                        alt="IFAC"
                        className="w-40 h-20 object-contain"
                      />
                    </motion.div>

                    <motion.div
                      variants={memberIconVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                      className="flex-shrink-0"
                    >
                      <img
                        src={Cpa}
                        alt="ASEAN CPA"
                        className="w-40 h-20 object-contain"
                      />
                    </motion.div>

                    <motion.div
                      variants={memberIconVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                      className="flex-shrink-0"
                    >
                      <img
                        src={Ikapi}
                        alt="ISO"
                        className="w-40 h-20 object-contain"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent my-8"
          variants={dividerVariants}
        />

        {/* Copyright */}
        <motion.div className="text-center" variants={itemVariants}>
          <motion.p
            className="text-gray-400 text-sm"
            whileHover={{ scale: 1.02, color: "#93C5FD" }}
            transition={{ duration: 0.2 }}
          >
            KAP Jamaster Simanullang. All rights reserved.
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
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </motion.footer>
  );
}

export default Footer;