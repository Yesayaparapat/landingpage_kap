import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom'; // Import untuk navigasi
import Pakjams from "../assets/gambar pakjams.jpg";
import Rotua from "../assets/rotua.jpg";

function Tentang() {
  const navigate = useNavigate(); // Hook untuk navigasi
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [showModal, setShowModal] = useState(false); // State untuk modal jika diperlukan
  const sectionRef = useRef(null);
  const descriptionRef = useRef(null);

  const profiles = [
    {
      name: "Jamaster Simanullang, SE., Ak., M.Ak., CPA., ASEAN CPA",
      position: "Managing Partner",
      image: Pakjams,
    },
    {
      name: "Rotua Manullang, SE., MM",
      position: "AUDIT MANAGER",
      image: Rotua,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const descriptionObserver = new IntersectionObserver(
      ([entry]) => {
        setDescriptionVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (descriptionRef.current) {
      descriptionObserver.observe(descriptionRef.current);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (descriptionRef.current) {
        descriptionObserver.unobserve(descriptionRef.current);
      }
    };
  }, []);

  // PERBAIKAN: Fungsi untuk handle klik tombol Selengkapnya
  const handleSelengkapnya = () => {
    try {
      // PILIHAN 1: Navigasi dengan React Router (pastikan route '/tentang-kami' sudah ada)
      navigate('/tentang-kami');
      
      // PILIHAN 2: Jika tidak menggunakan React Router, uncomment baris di bawah:
      // window.location.href = '/tentang-kami';
      
      // PILIHAN 3: Buka di tab baru, uncomment baris di bawah:
      // window.open('/tentang-kami', '_blank');
      
      // PILIHAN 4: Tampilkan modal dengan informasi lengkap, uncomment baris di bawah:
      // setShowModal(true);
      
      // PILIHAN 5: Scroll ke section detail jika ada di halaman yang sama, uncomment baris di bawah:
      // const detailSection = document.getElementById('detail-section');
      // if (detailSection) {
      //   detailSection.scrollIntoView({ behavior: 'smooth' });
      // }
      
      console.log("Navigating to tentang-kami page...");
    } catch (error) {
      console.error("Error navigating:", error);
      // Fallback jika navigate gagal
      alert("Halaman sedang dalam pengembangan");
    }
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setShowModal(false);
  };

  const dropcapStyle = {
    float: "left",
    fontSize: "60px",
    lineHeight: "0.8",
    fontWeight: "bold",
    marginRight: "8px",
  };

  // Menghitung transformasi berdasarkan scroll
  const getCardTransform = (index, totalCards) => {
    const scrollProgress = Math.min(Math.max((scrollY - 800) / 600, 0), 1);

    const initialX = 0;
    const initialY = index * -8;
    const initialZIndex = totalCards - index;
    const initialScale = 1;

    const finalX = (index - (totalCards - 1) / 2) * 280;
    const finalY = 0;
    const finalZIndex = 1;
    const finalScale = 1;

    const currentX = initialX + (finalX - initialX) * scrollProgress;
    const currentY = initialY + (finalY - initialY) * scrollProgress;
    const currentZIndex = Math.round(
      initialZIndex + (finalZIndex - initialZIndex) * scrollProgress
    );
    const currentScale =
      initialScale + (finalScale - initialScale) * scrollProgress;

    return {
      transform: `translate(${currentX}px, ${currentY}px) scale(${currentScale})`,
      zIndex: currentZIndex,
      opacity: 1,
      width: "280px",
      height: "440px",
    };
  };

  // Menghitung transformasi untuk description section
  const getDescriptionTransform = () => {
    const scrollProgress = Math.min(Math.max((scrollY - 600) / 400, 0), 1);
    const translateX = (1 - scrollProgress) * 200;
    const opacity = scrollProgress;

    return {
      transform: `translateX(${translateX}px)`,
      opacity: opacity,
      transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    };
  };

  return (
    <>
      <div
        className="h-screen overflow-hidden lg:pt-15 pt-20"
        style={{ backgroundColor: "#3c4c5c" }}
      >
        {/* Main Content */}
        <section className="h-full flex flex-col px-6 py-8">
          <div className="max-w-7xl mx-auto h-full flex flex-col">
            {/* Title Section */}
            <div className="text-center py-4">
              <h1 className="text-4xl font-bold text-white mb-4">Tentang Kami</h1>
              <div className="w-36 h-1 bg-indigo-600 mx-auto"></div>
            </div>

            {/* Main Flex Container */}
            <div className="flex-1 flex flex-col lg:flex-row gap-8 items-center min-h-0">
              {/* Left Side - Profiles Stack Container */}
              <div className="lg:w-3/5 w-full h-full lg:flex items-center justify-center hidden">
                <div
                  ref={sectionRef}
                  className="relative w-full max-w-4xl h-full flex justify-center items-center overflow-hidden"
                >
                  <div className="relative w-full h-full">
                    {profiles.map((profile, index) => {
                      const cardStyle = getCardTransform(index, profiles.length);
                      return (
                        <div
                          key={index}
                          className="absolute bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                          style={{
                            ...cardStyle,
                            transition:
                              "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                            transformOrigin: "center center",
                            width: "240px",
                            minHeight: "380px",
                          }}
                        >
                          <div className="aspect-[4/5] bg-gray-100">
                            <img
                              src={profile.image}
                              alt={profile.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4 text-center">
                            <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
                              {profile.name}
                            </h3>
                            <p className="text-gray-600 text-base font-medium">
                              {profile.position}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Side - Description Section */}
              <div className="lg:w-2/5 w-full h-full flex items-center">
                <div
                  ref={descriptionRef}
                  className="rounded-lg p-6 w-full h-4/5 flex flex-col justify-between"
                  style={getDescriptionTransform()}
                >
                  <div>
                    <h2
                      className="text-white/90 leading-relaxed text-justify mb-4 text-base"
                      style={{
                        ...getDescriptionTransform(),
                        transitionDelay: "0.1s",
                      }}
                    >
                      <span style={dropcapStyle}>B</span> erdiri sejak November
                      2017, selama itu juga kami telah banyak menyelesaikan
                      berbagai permasalahan terkait{" "}
                      <span className="font-bold">
                        akutansi, perpajakan, auditing
                      </span>{" "}
                      dan <span className="font-bold">konsultan manajemen</span>{" "}
                      di berbagai core business Klien.
                    </h2>
                    <p
                      className="text-white/90 leading-relaxed text-justify mb-4 text-base"
                      style={{
                        ...getDescriptionTransform(),
                        transitionDelay: "0.2s",
                      }}
                    >
                      Lembaga kami diisi oleh para profesional dibidangnya yang
                      mampu memberikan nilai tambah dmei terwujudnya efektifitas,
                      efisiensi dan ekonomis bagi operasional bisnis klien yang
                      lebih baik.
                    </p>
                    <p
                      className="text-white/90 leading-relaxed text-justify mb-6 text-base"
                      style={{
                        ...getDescriptionTransform(),
                        transitionDelay: "0.3s",
                      }}
                    >
                      Kami adalah jawaban terhadap berbagai permasalahan bisnis
                      anda dan kami adalah pihak yang tepat serta siap
                      bekerjasama.
                    </p>
                  </div>
                  <div
                    className="flex justify-start"
                    style={{
                      ...getDescriptionTransform(),
                      transitionDelay: "0.4s",
                    }}
                  >
                    <button
                      onClick={handleSelengkapnya}
                      className="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 text-base flex items-center cursor-pointer"
                    >
                      Selengkapnya
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    
    </>
  );
}

export default Tentang;