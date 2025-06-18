import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Mengimpor framer-motion untuk efek gerakan
import Gambarkantor from "../assets/logo kap.png";
import { useNavigate } from "react-router-dom";

function Profil() {
  const [inView, setInView] = useState(false); // State untuk mengecek apakah elemen ada di dalam viewport
  const navigate = useNavigate();
  // Fungsi untuk menangani event scroll
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    let triggerPosition;

    // Check if the window width is for a large screen (e.g., >= 1024px)
    if (window.innerWidth >= 1024) {
      triggerPosition = window.innerHeight / 1.3; // Logic for large screens
    } else {
      // Optional: Define a different trigger position for smaller screens
      triggerPosition = window.innerHeight / 3; // Example for smaller screens
    }

    if (scrollPosition > triggerPosition) {
      setInView(true);
    } else {
      setInView(false);
    }
  };

  // Add the event listener when the component mounts
  window.addEventListener("scroll", handleScroll);

  // Don't forget to clean up the event listener when the component unmounts
  // window.removeEventListener('scroll', handleScroll);

  useEffect(() => {
    // Menambahkan event listener untuk scroll
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener ketika komponen tidak lagi digunakan
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Menangani navigasi untuk tombol 'Selengkapnya'
  const handleSelengkapnyaClick = () => {
    try {
      // Navigasi ke halaman '/profil-kami' menggunakan React Router
      navigate("/profil-kami"); // Pastikan route ini sudah ada di konfigurasi React Router Anda

      console.log("Navigating to profil-kami page...");
    } catch (error) {
      console.error("Error navigating:", error);
      alert("Halaman sedang dalam pengembangan");
    }
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto p-6 bg-white overflow-hidden pt-18 lg:pt-25 px-6">
      {/* Header dengan efek motion */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, x: -100 }} // Status awal untuk animasi gerakan dari kiri ke kanan
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Memicu animasi saat elemen muncul di viewport
        transition={{ duration: 0.5 }} // Durasi transisi
      >
        <h1 className="text-4xl font-bold">
          Kantor Akuntan Publik <br />
          <span className="text-blue-900 inline-block">
            Jamaster Simanullang
          </span>
        </h1>
      </motion.div>

      {/* Bagian konten utama dengan efek motion */}
      <motion.section
        className="mb-12 relative"
        initial={{ opacity: 0 }} // Status awal
        animate={{ opacity: inView ? 1 : 0 }} // Memicu animasi saat elemen muncul di viewport
        transition={{ duration: 0.6 }} // Durasi transisi
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Konten dengan efek motion */}
          <motion.div
            className="p-6 rounded-lg h-full mt-15"
            initial={{ opacity: 0, x: -100 }} // Status awal untuk animasi gerakan kiri ke kanan
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Memicu animasi saat elemen masuk ke dalam viewport
            transition={{ duration: 0.7 }} // Durasi transisi
          >
            {/* Judul dengan efek motion */}
            <motion.h2
              className="text-2xl font-bold text-blue-900 mb-4"
              initial={{ opacity: 0, x: -100 }} // Status awal untuk judul
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Memicu animasi saat elemen muncul
              transition={{ duration: 0.6, delay: 0.3 }} // Durasi transisi dengan penundaan
            >
              Profile kami
            </motion.h2>

            {/* Paragraf pertama dengan efek motion */}
            <motion.p
              className="text-gray-700 leading-relaxed mb-4"
              initial={{ opacity: 0, x: -100 }} // Status awal untuk paragraf pertama
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Memicu animasi saat elemen muncul
              transition={{ duration: 0.6, delay: 0.5 }} // Durasi transisi dengan penundaan
            >
              <strong>
                Kantor Akuntan Publik Jamaster Simanullang (KAP Jamaster
                Simanullang)
              </strong>{" "}
              berdiri sejak November 2017. Sejak awal berdiri, kami telah
              berkomitmen untuk berperan serta dalam meningkatkan kemajuan
              perekonomian nasional dengan menjalankan setiap layanan akuntansi
              dengan penuh independensi, integritas, dan kompetensi.
            </motion.p>

            {/* Paragraf kedua dengan efek motion */}
            <motion.p
              className="text-gray-700 leading-relaxed mb-6"
              initial={{ opacity: 0, x: -100 }} // Status awal untuk paragraf kedua
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Memicu animasi saat elemen muncul
              transition={{ duration: 0.6, delay: 0.7 }} // Durasi transisi dengan penundaan
            >
              Kami menyediakan berbagai layanan seperti audit laporan keuangan,
              konsultasi perpajakan, dan penyusunan laporan keuangan yang
              handal, terpercaya, serta tertib administrasi perpajakan. Semua
              layanan kami berpedoman pada Standar Akuntansi Keuangan (SAK),
              yang diakui secara luas di Indonesia.
            </motion.p>

            {/* Tombol dengan efek motion */}
            <motion.button
              className="mt-5 bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg flex items-center group cursor-pointer"
              onClick={handleSelengkapnyaClick}
              initial={{
                opacity: 0,
                x: -150, // Diperbesar jarak awal dari kiri
                scale: 0.8, // Tambahan efek scale untuk dramatis
              }}
              animate={{
                opacity: inView ? 1 : 0,
                x: inView ? 0 : -150,
                scale: inView ? 1 : 0.8,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                duration: 1.5, // Diperlama dari 0.6 menjadi 1.2 detik
                ease: [0.25, 0.46, 0.45, 0.94], // Easing yang lebih smooth dan natural
                delay: 0.3, // Tambahan delay sebelum animasi dimulai
              }}
            >
              Selengkapnya
              <motion.svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: -10, opacity: 0 }} // Animasi terpisah untuk ikon
                animate={{
                  x: inView ? 0 : -10,
                  opacity: inView ? 1 : 0,
                }}
                whileHover={{ x: 4 }}
                transition={{
                  duration: 1.2,
                  delay: 0.6, // Ikon muncul setelah button mulai slide
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </motion.button>
          </motion.div>

          {/* Gambar dengan efek motion dari kanan ke kiri */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 100 }} // Status awal untuk gerakan kanan ke kiri
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }} // Memicu animasi saat elemen muncul
            transition={{ duration: 0.6 }} // Durasi transisi
          >
            <div>
              {/* Logo KAP Jamaster Simanullang */}
              <div className="flex justify-center items-center ">
                <img
                  className="w-[400px] mt-10 hidden lg:block"
                  src={Gambarkantor}
                  alt="gambar kantor"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Profil;
