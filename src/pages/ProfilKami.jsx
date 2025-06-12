import React, { useRef, useEffect, useState } from "react";
import Lukas from "../assets/lukas.png";
import { motion, useInView } from "framer-motion";

const ProfilKami = () => {
  // Create refs for each section to track scroll position
  const headerRef = useRef(null);
  const introRef = useRef(null);
  const companyInfoRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const footerRef = useRef(null);

  // State to track which sections are in view
  const [inViewSections, setInViewSections] = useState({
    header: false,
    intro: false,
    companyInfo: false,
    vision: false,
    mission: false,
    values: false,
    footer: false,
  });

  // Intersection Observer to track sections in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionName = entry.target.getAttribute("data-section");
          if (entry.isIntersecting && sectionName) {
            setInViewSections((prev) => ({
              ...prev,
              [sectionName]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "-100px" }
    );

    const sections = [
      { ref: headerRef, name: "header" },
      { ref: introRef, name: "intro" },
      { ref: companyInfoRef, name: "companyInfo" },
      { ref: visionRef, name: "vision" },
      { ref: missionRef, name: "mission" },
      { ref: valuesRef, name: "values" },
      { ref: footerRef, name: "footer" },
    ];

    sections.forEach(({ ref, name }) => {
      if (ref.current) {
        ref.current.setAttribute("data-section", name);
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const values = [
    {
      color: "blue",
      letter: "I",
      title: "Independensi",
      desc: "Menjaga objektivitas dalam setiap layanan profesional",
    },
    {
      color: "green",
      letter: "I",
      title: "Integritas",
      desc: "Berkomitmen pada kejujuran dan transparansi",
    },
    {
      color: "purple",
      letter: "K",
      title: "Kompetensi",
      desc: "Memberikan layanan dengan keahlian profesional tinggi",
    },
  ];

  // PERBAIKAN: Services data yang sudah dirapikan
  const services = [
    {
      icon: "📊",
      title: "Audit",
      desc: [
        "General audit",
        "Due Diligence",
        "Management Audit",
        "Research Paper", // PERBAIKAN: typo "Reasearch" -> "Research"
        "Other Attestation Services",
      ],
    },
    {
      icon: "💼",
      title: "Business Management Consulting",
      desc: [
        "Financial Consulting",
        "Capital Restriction",
        "Merger and Acquisition",
        "Accounting System Design and Implementation",
        "Feasibility Study",
        "Reorganization and Corporate restructuring",
        "Development of advance application (Software)", // PERBAIKAN: typo "aplication" -> "application"
      ],
    },
    {
      icon: "📈",
      title: "Taxation",
      desc: [
        "Tax Advisor",
        "Examination of Tax Compliance",
        "Tax Administration",
        "Tax Planning",
        "Transfer Pricing",
        "Legal Tax",
      ],
    },
    {
      icon: "🎓",
      title: "Pendidikan dan Pelatihan (PPL)",
      desc: [
        "Akuntansi/Financial Report (Penyusunan Laporan Keuangan)",
        "Perpajakan/Taxation (PPH, PPH 21, PPH 23, PPH (4)2, dan PPH SPT Tahunan Badan)", // PERBAIKAN: spasi setelah koma dan tutup kurung
        "Audit Laporan Keuangan",
      ],
    },
    {
      icon: "📋",
      title: "Accounting Advisory", // PERBAIKAN: pisahkan title dan subtitle
      subtitle: "Navigating the Changing Landscape of Financial Reporting",
      desc: [
        "IFRS Convergence",
        "Managing Accounting changes",
        "Accounting advice and support relating to event and transactions",
        "Training in financial reporting", // PERBAIKAN: typo "Traning" -> "Training"
      ],
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Full Width Image */}
      <div className="w-full mb-8 relative h-64 md:h-96">
        <img
          src={Lukas}
          alt="Office workspace"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white">
            Profile Kami
          </h1>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-12 transition-all duration-800 ${
            inViewSections.header
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16"
          }`}
        >
          <h1 className="text-4xl font-bold ml-7">
            Kantor Akuntan Publik <br />
            <span className="text-4xl font-bold text-blue-900 mb-4 hover:scale-105 transition-transform duration-300">
              Jamaster Simanullang
            </span>
          </h1>
        </div>

        {/* Tentang Kami dan Layanan Section */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tentang Kami - Kiri */}
            <div
              ref={introRef}
              className={`transition-all duration-800 ${
                inViewSections.intro
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="p-6 rounded-lg  transition-all duration-300">
                <p
                  className={`text-gray-700 leading-relaxed mb-4 transition-opacity duration-800 delay-400 ${
                    inViewSections.intro ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <strong>Kantor Akuntan Publik Jamaster Simanullang</strong> (KAP Jamaster
                  Simanullang) berdiri sejak November 2017. Sejak awal berdiri,
                  kami telah berkomitmen untuk berperan serta dalam meningkatkan
                  kemajuan perekonomian nasional dengan menjalankan setiap
                  layanan akuntansi dengan penuh independensi, integritas, dan
                  kompetensi.
                </p>
                <p
                  className={`text-gray-700 leading-relaxed transition-opacity duration-800 delay-600 ${
                    inViewSections.intro ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Kami menyediakan berbagai layanan seperti audit laporan
                  keuangan, konsultasi perpajakan, dan penyusunan laporan
                  keuangan yang handal, terpercaya, serta tertib administrasi
                  perpajakan. Semua layanan kami berpedoman pada <strong>Standar
                  Akuntansi Keuangan (SAK)</strong>, yang diakui secara luas di
                  Indonesia.
                </p>

                <h2 className="text-3xl font-bold text-green-800 mb-6 mt-10">Visi</h2>
                <p className="text-gray-700 leading-relaxed">
                  Menjadi kantor akuntan yang profesional, handal, terpercaya,
                  dan berwatak sosial, berlandaskan kepada Tuhan Yang Maha Esa,
                  serta mendukung tercapainya kemajuan klien dengan tetap
                  memegang prinsip independensi.
                </p>
                <h2 className="text-3xl font-bold text-orange-800 mb-6 mt-10">
                  Misi
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Memberikan jasa profesional berkualitas dan berstandar tinggi
                  dengan menjunjung tinggi integritas, independensi, dan
                  kompetisi demi mencapai tujuan bisnis klien secara efektif dan
                  efisien.
                </p>

                {/* PERBAIKAN: Pindahkan Informasi Perusahaan ke section terpisah */}
                <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-12">
                  Informasi Perusahaan
                </h2>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="font-semibold text-blue-800">
                      Nama Badan:
                    </span>
                    <span className="text-gray-700">
                     <strong> Kantor Akuntan Publik Jamaster Simanullang</strong>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-blue-800">
                      Izin Menteri:
                    </span>
                    <span className="text-gray-700"><strong>KEP 1147/KM.1/2017</strong></span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-blue-800">NPWP:</span>
                    <span className="text-gray-700"><strong>59.963.311.2-413.001</strong></span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-blue-800">Alamat:</span>
                    <span className="text-gray-700">
                      JL. Raya Cibarusah KM. 10
                      <br />
                      Ruko Cikarang Central City Blok E NO. 8<br />
                      Cikarang Selatan - Kab. BEKASI 17530
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-blue-800">
                      Telepon:
                    </span>
                    <span className="text-gray-700">
                      <strong>021 - 8977 4253 / 021 - 8977 4251</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Layanan Kami - Kanan */}
            <div
              className={`transition-all duration-800 ${
                inViewSections.intro
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <div className="p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Layanan Kami
                </h2>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all duration-300 ${
                        inViewSections.intro
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${400 + index * 200}ms` }}
                    >
                      <div className="flex items-start space-x-4 mb-3">
                        <div className="text-2xl flex-shrink-0">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-1">
                            {service.title}
                          </h4>
                          {/* PERBAIKAN: Tampilkan subtitle jika ada */}
                          {service.subtitle && (
                            <p className="text-xs text-gray-500 italic mb-2">
                              {service.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* PERBAIKAN: Tampilkan desc sebagai list yang rapi */}
                      <div className="ml-10">
                        <ul className="space-y-1">
                          {service.desc.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="text-sm text-gray-600 flex items-start"
                            >
                              <span className="text-blue-500 mr-2 flex-shrink-0 text-xs">
                                •
                              </span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfilKami;
