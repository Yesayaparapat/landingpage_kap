import React, { useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Beranda from "./pages/Beranda";
import Profil from "./pages/Profil";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import "./App.css";
import Layanan from "./pages/Layanan";
import Tentang from "./pages/Tentang";
import Footer from "./components/Footer";
import ProfilKami from "./pages/ProfilKami";
import Tentangkami from "./pages/Tentangkami";
import Legal from "./pages/Legal";
import Klien from "./pages/Klien";
import Hubungi from "./pages/Hubungi";
import KlienBagian from "./pages/KlienBagian";
import LayananKami from "./pages/LayananKami";
import { LanguageProvider } from "./context/LanguageContext";

// Komponen untuk halaman utama (single page)
function HomePage() {
  const location = useLocation();

  // Membuat ref untuk setiap section
  const berandaRef = useRef(null);
  const profilRef = useRef(null);
  const tentangRef = useRef(null);
  const layananRef = useRef(null);
  const legalRef = useRef(null);
  const klienRef = useRef(null);
  const hubungiRef = useRef(null);

  // Fungsi untuk scroll ke section tertentu
  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Object yang menghubungkan nama section dengan ref dan fungsi scroll
  const scrollFunctions = {
    beranda: () => scrollToSection(berandaRef),
    profil: () => scrollToSection(profilRef),
    tentang: () => scrollToSection(tentangRef),
    layanan: () => scrollToSection(layananRef),
    legal: () => scrollToSection(legalRef),
    klien: () => scrollToSection(klienRef),
    hubungi: () => scrollToSection(hubungiRef),
  };

  // Handle hash navigation
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && scrollFunctions[hash]) {
      // Delay sedikit untuk memastikan komponen sudah ter-render
      setTimeout(() => {
        scrollFunctions[hash]();
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      <Navbar scrollFunctions={scrollFunctions} />

      {/* Semua section dalam satu halaman */}
      <div ref={berandaRef} id="beranda">
        <Beranda />
      </div>

      <div ref={profilRef} id="profil">
        <Profil />
      </div>

      <div ref={tentangRef} id="tentang">
        <Tentang />
      </div>

      <div ref={layananRef} id="layanan">
        <Layanan />
      </div>

      <div ref={legalRef} id="legal">
        <Legal />
      </div>

      <div ref={klienRef} id="klien">
        <Klien />
      </div>

      <div ref={hubungiRef} id="hubungi">
        <Hubungi />
      </div>

      {/* Footer di bagian paling bawah */}
      <Footer />

      {/* Chatbot untuk halaman utama */}
      <Chatbot />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Router>
          <Routes>
          {/* Route untuk halaman utama */}
          <Route path="/" element={<HomePage />} />

          {/* Route untuk halaman detail profil */}
          <Route
            path="/profil-kami"
            element={
              <>
                <Navbar />
                <ProfilKami />
                <Footer />
                <Chatbot />
              </>
            }
          />

          {/* Route untuk halaman tentang kami */}
          <Route
            path="/tentang-kami"
            element={
              <>
                <Navbar />
                <Tentangkami />
                <Footer />
                <Chatbot />
              </>
            }
          />
          
          {/* Route untuk halaman klien bagian */}
          <Route
            path="/klien-bagian"
            element={
              <>
                <Navbar />
                <KlienBagian />
                <Footer />
                <Chatbot />
              </>
            }
          />

          {/* Route untuk halaman layanan kami */}
          <Route
            path="/layanan-kami"
            element={
              <>
                <Navbar />
                <LayananKami />
                <Footer />
                <Chatbot />
              </>
            }
          />

          {/* Route testing - hapus setelah berhasil */}
          <Route
            path="/test"
            element={
              <div style={{ padding: "20px" }}>
                <h1>Test Route Berhasil!</h1>
                <p>Jika Anda melihat halaman ini, routing sudah berfungsi.</p>
              </div>
            }
          />
          </Routes>
        </Router>
      </LanguageProvider>
    </div>
  );
}

export default App;