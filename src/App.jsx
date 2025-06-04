import { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Beranda from './pages/Beranda';
import Profil from './pages/Profil';
import Navbar from './components/Navbar'; // Pastikan path ini sesuai dengan struktur folder Anda
import './App.css';
import Layanan from './pages/Layanan';
import Tentang from './pages/Tentang';

function App() {
  // Membuat ref untuk setiap section
  const berandaRef = useRef(null);
  const profilRef = useRef(null);
  const tentangRef = useRef(null);
  const layananRef = useRef(null);
  const rekananRef = useRef(null);
  const klienRef = useRef(null);
  const beritaRef = useRef(null);
  const hubungiRef = useRef(null);

  // Fungsi untuk scroll ke section tertentu
  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Object yang menghubungkan nama section dengan ref dan fungsi scroll
  const scrollFunctions = {
    beranda: () => scrollToSection(berandaRef),
    profil: () => scrollToSection(profilRef),
    tentang: () => scrollToSection(tentangRef),
    layanan: () => scrollToSection(layananRef),
    rekanan: () => scrollToSection(rekananRef),
    klien: () => scrollToSection(klienRef),
    berita: () => scrollToSection(beritaRef),
    hubungi: () => scrollToSection(hubungiRef),
  };

  return (
    <div className="App">
      {/* Pass fungsi scroll ke Navbar */}
      <Router>
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

        <div ref={rekananRef} id="rekanan">
          {/* Konten Rekanan */}
        </div>

        <div ref={klienRef} id="klien">
          {/* Konten Klien */}
        </div>

        <div ref={beritaRef} id="berita">
          {/* Konten Berita */}
        </div>

        <div ref={hubungiRef} id="hubungi">
          {/* Konten Hubungi */}
        </div>
      </Router>
    </div>
  );
}

export default App;
