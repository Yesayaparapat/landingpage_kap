import React, { useEffect, useState } from 'react'
import { FaShieldAlt, FaGraduationCap, FaChartLine, FaBuilding, FaCalculator, FaBalanceScale, FaSearch, FaHandshake, FaCogs, FaFileInvoiceDollar, FaGavel, FaExchangeAlt, FaDatabase, FaLightbulb, FaClipboardCheck, FaFileAlt, FaUsers, FaChartBar, FaMoneyBillWave, FaGlobe, FaArrowRight, FaStar, FaCheckCircle } from 'react-icons/fa'
import Lukas from "../assets/lukas.png";

function LayananKami() {
  const [activeSection, setActiveSection] = useState('audit');
  const [isVisible, setIsVisible] = useState({});
  const [openAuditIndex, setOpenAuditIndex] = useState(null);
  const [openPPLIndex, setOpenPPLIndex] = useState(null);
  const [openAccountingIndex, setOpenAccountingIndex] = useState(null);
  const [openBusinessIndex, setOpenBusinessIndex] = useState(null);
  const [openTaxIndex, setOpenTaxIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['audit', 'ppl', 'accounting', 'finance', 'taxation'];
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll ke section sesuai hash jika ada di URL saat halaman dibuka
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        const sectionId = window.location.hash.replace('#', '');
        const el = document.getElementById(sectionId);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 200);
        }
      }
    };

    // Handle hash saat pertama kali load
    handleHashChange();

    // Listen untuk perubahan hash
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const layananAudit = [
    {
      icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
      title: "General Audit",
      subtitle: "Audit Umum",
      description: "Memberikan opini independen mengenai kewajaran penyajian laporan keuangan sesuai dengan Standar Akuntansi Keuangan (SAK) yang berlaku.",
      proses: "Perencanaan audit, pemahaman sistem pengendalian internal, pengujian substantif, analisis rasio keuangan, dan pelaporan hasil audit.",
      manfaat: "Meningkatkan kepercayaan investor, kreditur, dan pihak lain terhadap informasi keuangan perusahaan.",
      color: "blue",
      features: ["Audit Laporan Keuangan", "Analisis Sistem Internal", "Pelaporan Komprehensif"]
    },
    {
      icon: <FaSearch className="text-emerald-500 text-2xl" />,
      title: "Due Diligence",
      subtitle: "Investigasi Komprehensif",
      description: "Investigasi komprehensif terhadap perusahaan, aset, atau properti sebelum transaksi besar untuk mengidentifikasi potensi risiko dan peluang.",
      proses: "Pemeriksaan keuangan, legalitas, operasional, pajak, lingkungan, dan sumber daya manusia.",
      manfaat: "Memberikan gambaran lengkap untuk pengambilan keputusan yang tepat dan mitigasi risiko.",
      color: "emerald",
      features: ["Analisis Risiko", "Evaluasi Aset", "Laporan Detail"]
    },
    {
      icon: <FaChartLine className="text-purple-500 text-2xl" />,
      title: "Management Audit",
      subtitle: "Audit Manajemen",
      description: "Mengevaluasi efisiensi dan efektivitas kinerja manajemen dan operasional perusahaan dalam mencapai tujuan yang telah ditetapkan.",
      proses: "Evaluasi struktur organisasi, kebijakan dan prosedur operasional, sistem informasi manajemen, dan penggunaan sumber daya.",
      manfaat: "Mengidentifikasi area perbaikan dan memberikan rekomendasi untuk meningkatkan efisiensi dan kinerja.",
      color: "purple",
      features: ["Evaluasi Kinerja", "Analisis Proses", "Rekomendasi Strategis"]
    },
    {
      icon: <FaHandshake className="text-orange-500 text-2xl" />,
      title: "Other Attestation Services",
      subtitle: "Layanan Atestasi Lainnya",
      description: "Memberikan jaminan atau keyakinan atas asersi yang dibuat oleh pihak ketiga, selain laporan keuangan historis.",
      proses: "Atestasi kepatuhan kontrak, laporan keberlanjutan, pengendalian internal, dan laporan keuangan prospektif.",
      manfaat: "Meningkatkan kredibilitas informasi spesifik yang diperlukan oleh pihak tertentu.",
      color: "orange",
      features: ["Atestasi Kontrak", "Laporan Khusus", "Jaminan Kualitas"]
    }
  ];

  const layananPPL = [
    {
      icon: <FaGraduationCap className="text-blue-500 text-2xl" />,
      title: "Akuntansi",
      subtitle: "Penyusunan Laporan Keuangan",
      description: "Pelatihan prinsip-prinsip dasar akuntansi, siklus akuntansi, dan praktik terbaik dalam menyusun laporan keuangan.",
      materi: "Penjurnalan transaksi, posting ke buku besar, penyusunan neraca saldo, laporan laba rugi, dan laporan arus kas.",
      manfaat: "Memastikan laporan keuangan disusun dengan benar dan memberikan informasi yang relevan.",
      color: "blue",
      features: ["Pelatihan Dasar", "Praktik Langsung", "Sertifikasi"]
    },
    {
      icon: <FaCalculator className="text-emerald-500 text-2xl" />,
      title: "Perpajakan",
      subtitle: "Compliance & Planning",
      description: "Pemahaman mendalam tentang peraturan perundang-undangan perpajakan yang berlaku.",
      materi: "PPh Badan, PPh Pasal 21/23/26, PPN, akuntansi pajak, rekonsiliasi fiskal, dan pengisian SPT.",
      manfaat: "Memastikan kepatuhan pajak dan melakukan perencanaan pajak yang efektif.",
      color: "emerald",
      features: ["Workshop Pajak", "Update Regulasi", "Konsultasi Lanjutan"]
    }
  ];

  const layananAccountingAdvisor = [
    {
      icon: <FaGlobe className="text-blue-500 text-2xl" />,
      title: "IFRS Convergence",
      subtitle: "Konvergensi Standar Internasional",
      description: "Membantu perusahaan dalam proses transisi dan adaptasi dari standar akuntansi domestik ke IFRS.",
      cakupan: "Analisis dampak IFRS, pengembangan kebijakan akuntansi baru, pelatihan staf, dan revisi proses sistem.",
      manfaat: "Memastikan laporan keuangan dapat dibandingkan secara internasional dan meningkatkan transparansi.",
      color: "blue",
      features: ["Gap Analysis", "Policy Development", "Staff Training"]
    },
    {
      icon: <FaLightbulb className="text-amber-500 text-2xl" />,
      title: "Accounting Advice",
      subtitle: "Nasihat Akuntansi",
      description: "Memberikan saran ahli dan solusi praktis untuk masalah akuntansi yang kompleks atau spesifik.",
      cakupan: "Perlakuan akuntansi transaksi tidak biasa, interpretasi standar akuntansi, dan penyelesaian perbedaan pendapat.",
      manfaat: "Memastikan perlakuan akuntansi yang tepat dan mengurangi risiko salah saji.",
      color: "amber",
      features: ["Expert Consultation", "Complex Problem Solving", "Standards Interpretation"]
    }
  ];

  const layananBusinessManagement = [
    {
      icon: <FaChartBar className="text-blue-500 text-2xl" />,
      title: "Financial Consulting",
      subtitle: "Konsultasi Keuangan",
      description: "Panduan dan strategi untuk mengelola keuangan perusahaan secara efektif dan mengoptimalkan struktur modal.",
      cakupan: "Analisis keuangan, perencanaan keuangan jangka panjang, manajemen modal kerja, dan evaluasi proyek investasi.",
      manfaat: "Meningkatkan kesehatan keuangan perusahaan dan mendukung pertumbuhan bisnis yang berkelanjutan.",
      color: "blue",
      features: ["Strategic Planning", "Cash Flow Management", "Investment Analysis"]
    },
    {
      icon: <FaMoneyBillWave className="text-emerald-500 text-2xl" />,
      title: "Capital Restriction",
      subtitle: "Pembatasan Modal",
      description: "Membantu perusahaan mengidentifikasi, menganalisis, dan mengatasi batasan dalam mengakses atau mengelola modal.",
      cakupan: "Penilaian kendala internal dan eksternal, serta pengembangan strategi untuk akses pendanaan yang lebih baik.",
      manfaat: "Meningkatkan kemampuan perusahaan untuk berinvestasi dan berekspansi.",
      color: "emerald",
      features: ["Constraint Analysis", "Funding Strategy", "Capital Optimization"]
    },
    {
      icon: <FaExchangeAlt className="text-purple-500 text-2xl" />,
      title: "Merger & Acquisition",
      subtitle: "M&A Advisory",
      description: "Dukungan ahli di setiap tahap proses merger atau akuisisi perusahaan.",
      cakupan: "Identifikasi target, penilaian valuasi, due diligence, negosiasi, dan implementasi integrasi.",
      manfaat: "Memastikan transaksi berjalan lancar dan mencapai tujuan strategis dari merger/akuisisi.",
      color: "purple",
      features: ["Target Identification", "Valuation Analysis", "Integration Support"]
    },
    {
      icon: <FaDatabase className="text-orange-500 text-2xl" />,
      title: "Design Information System",
      subtitle: "Sistem Informasi Akuntansi",
      description: "Mendesain dan mengembangkan sistem informasi akuntansi yang disesuaikan dengan kebutuhan spesifik perusahaan.",
      cakupan: "Analisis kebutuhan bisnis, perancangan struktur database, implementasi sistem, dan pelatihan pengguna.",
      manfaat: "Meningkatkan efisiensi pencatatan dan pelaporan keuangan serta memperkuat pengendalian internal.",
      color: "orange",
      features: ["Custom Development", "System Integration", "User Training"]
    }
  ];

  const layananTaxation = [
    {
      icon: <FaLightbulb className="text-blue-500 text-2xl" />,
      title: "Tax Advisor",
      subtitle: "Penasihat Pajak",
      description: "Nasihat profesional berkelanjutan mengenai berbagai aspek perpajakan dan strategi pengelolaan kewajiban pajak.",
      cakupan: "Konsultasi rutin, peninjauan kontrak dari sudut pandang pajak, dan pemberian opini pajak.",
      manfaat: "Memastikan kepatuhan peraturan pajak terbaru dan mengoptimalkan beban pajak.",
      color: "blue",
      features: ["Regular Consultation", "Contract Review", "Tax Opinion"]
    },
    {
      icon: <FaClipboardCheck className="text-emerald-500 text-2xl" />,
      title: "Tax Compliance Review",
      subtitle: "Pemeriksaan Kepatuhan Pajak",
      description: "Tinjauan menyeluruh terhadap catatan dan proses perpajakan untuk memastikan kepatuhan.",
      cakupan: "Verifikasi perhitungan PPh dan PPN, peninjauan dokumen pendukung, dan rekonsiliasi data.",
      manfaat: "Mengurangi risiko temuan audit pajak dan meminimalkan potensi sanksi.",
      color: "emerald",
      features: ["Comprehensive Review", "Document Verification", "Risk Assessment"]
    },
    {
      icon: <FaFileAlt className="text-purple-500 text-2xl" />,
      title: "Tax Administration",
      subtitle: "Administrasi Pajak",
      description: "Bantuan dalam mengelola dan memenuhi kewajiban administratif perpajakan secara rutin.",
      cakupan: "Persiapan dan pengajuan SPT, pembuatan faktur pajak, pengelolaan e-faktur, dan pendaftaran NPWP.",
      manfaat: "Memastikan kepatuhan formal dan menghindari denda keterlambatan pelaporan.",
      color: "purple",
      features: ["SPT Preparation", "E-Invoice Management", "NPWP Registration"]
    },
    {
      icon: <FaChartLine className="text-orange-500 text-2xl" />,
      title: "Tax Planning",
      subtitle: "Perencanaan Pajak",
      description: "Merancang strategi legal dan etis untuk mengoptimalkan beban pajak perusahaan.",
      cakupan: "Analisis struktur bisnis, pemanfaatan insentif pajak, dan perencanaan untuk transaksi bisnis.",
      manfaat: "Meningkatkan profitabilitas dan membebaskan dana untuk investasi.",
      color: "orange",
      features: ["Strategic Planning", "Incentive Utilization", "Transaction Planning"]
    },
    {
      icon: <FaExchangeAlt className="text-rose-500 text-2xl" />,
      title: "Transfer Pricing",
      subtitle: "Harga Transfer",
      description: "Bantuan dalam menentukan harga untuk transaksi antar entitas yang memiliki hubungan istimewa.",
      cakupan: "Analisis fungsional dan risiko, pemilihan metode transfer pricing, dan penyusunan dokumentasi.",
      manfaat: "Menghindari koreksi pajak dan memastikan kepatuhan terhadap peraturan transfer pricing.",
      color: "rose",
      features: ["Functional Analysis", "Method Selection", "Documentation"]
    },
    {
      icon: <FaGavel className="text-indigo-500 text-2xl" />,
      title: "Legal Tax",
      subtitle: "Hukum Pajak",
      description: "Representasi dan bantuan hukum dalam menghadapi sengketa, keberatan, atau banding terkait perpajakan.",
      cakupan: "Penyusunan surat keberatan, pengajuan banding, dan representasi dalam proses litigasi pajak.",
      manfaat: "Melindungi hak-hak wajib pajak dan berjuang untuk hasil yang adil dalam sengketa pajak.",
      color: "indigo",
      features: ["Legal Representation", "Appeal Process", "Dispute Resolution"]
    }
  ];

  const navigationItems = [
    { id: 'audit', title: 'AUDIT', icon: <FaShieldAlt /> },
    { id: 'ppl', title: 'PELATIHAN', icon: <FaGraduationCap /> },
    { id: 'accounting', title: 'AKUNTANSI', icon: <FaCalculator /> },
    { id: 'finance', title: 'MANAJEMEN', icon: <FaChartBar /> },
    { id: 'taxation', title: 'PERPAJAKAN', icon: <FaFileInvoiceDollar /> }
  ];

  const ServiceCard = ({ service, index }) => {
    const colorClasses = {
      blue: 'from-blue-50 to-blue-100 border-blue-200 hover:shadow-blue-100',
      emerald: 'from-emerald-50 to-emerald-100 border-emerald-200 hover:shadow-emerald-100',
      purple: 'from-purple-50 to-purple-100 border-purple-200 hover:shadow-purple-100',
      orange: 'from-orange-50 to-orange-100 border-orange-200 hover:shadow-orange-100',
      amber: 'from-amber-50 to-amber-100 border-amber-200 hover:shadow-amber-100',
      rose: 'from-rose-50 to-rose-100 border-rose-200 hover:shadow-rose-100',
      indigo: 'from-indigo-50 to-indigo-100 border-indigo-200 hover:shadow-indigo-100'
    };

    return (
      <div 
        className={`group relative bg-gradient-to-br ${colorClasses[service.color]} border-2 rounded-xl p-4 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden ${service.customWidth || 'max-w-md'} w-full mx-auto`}
        style={{ animationDelay: `${index * 150}ms` }}
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 opacity-5 transform rotate-12 translate-x-4 -translate-y-4">
          {service.icon}
        </div>
        
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300">
              {service.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-gray-600 font-medium">{service.subtitle}</p>
            </div>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaArrowRight className="text-gray-400 text-sm" />
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-2 leading-relaxed text-xs">{service.description}</p>

        {/* Features */}
        {service.features && (
          <div className="mb-2">
            <h4 className="font-semibold text-gray-800 mb-1 flex items-center text-[11px]">
              <FaStar className="text-yellow-500 mr-1 text-[10px]" />
              Fitur Utama
            </h4>
            <div className="space-y-0.5">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-[10px] text-gray-600">
                  <FaCheckCircle className="text-green-500 mr-1 text-[10px]" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Details */}
        <div className="space-y-2">
          <div>
            <h4 className="font-semibold text-gray-800 mb-0.5 text-[11px]">
              {service.proses ? 'Proses' : service.cakupan ? 'Cakupan' : 'Materi'}:
            </h4>
            <p className="text-[10px] text-gray-600 leading-relaxed">
              {service.proses || service.cakupan || service.materi}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-0.5 text-[11px]">Manfaat:</h4>
            <p className="text-[10px] text-gray-600 leading-relaxed">{service.manfaat}</p>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    );
  };

  // Komponen Accordion reusable untuk semua layanan
  const AccordionLayanan = ({ data, openIndex, setOpenIndex }) => (
    <div className="space-y-4 max-w-2xl mx-auto">
      {data.map((layanan, idx) => (
        <div key={idx} className="border rounded-xl bg-white/80 shadow-sm">
          <button
            className="w-full flex items-center justify-between px-6 py-4 focus:outline-none"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white rounded-lg shadow-md">
                {layanan.icon}
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-gray-800">{layanan.title}</div>
                <div className="text-xs text-gray-500">{layanan.subtitle}</div>
              </div>
            </div>
            <span className={`transition-transform duration-200 ${openIndex === idx ? 'rotate-90' : ''}`}>▶</span>
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-6 pt-2 text-sm text-gray-700 animate-fade-in">
              <div className="mb-2">{layanan.description}</div>
              {layanan.features && (
                <div className="mb-2">
                  <div className="font-semibold flex items-center text-sm mb-1">
                    <span className="text-yellow-500 mr-2">★</span> Fitur Utama
                  </div>
                  <ul className="ml-6 list-disc text-xs">
                    {layanan.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mb-1">
                <span className="font-semibold">{layanan.proses ? 'Proses' : layanan.cakupan ? 'Cakupan' : 'Materi'}:</span> <span className="text-xs">{layanan.proses || layanan.cakupan || layanan.materi}</span>
              </div>
              <div>
                <span className="font-semibold">Manfaat:</span> <span className="text-xs">{layanan.manfaat}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative w-full min-h-[24rem] md:min-h-[20rem] flex items-center justify-center overflow-hidden">
        {/* Background image Lukas */}
        <img
          src={Lukas}
          alt="Office workspace"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ filter: 'brightness(0.7)' }}
        />
        <div className="container mx-auto px-4 relative z-20 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl font-bold mb-4 text-white drop-shadow-lg">
              Layanan Kami
            </h1>
            <p className="text-lg mb-6 text-blue-100 leading-relaxed drop-shadow">
              Solusi komprehensif dan inovatif untuk kebutuhan audit, konsultasi, dan perpajakan perusahaan Anda dengan standar internasional
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* AUDIT Section */}
        <section id="audit" className="mb-16 scroll-mt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
              <FaShieldAlt className="text-blue-600 text-lg" />
              <span className="text-blue-800 font-semibold text-sm">AUDIT SERVICES</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Layanan Audit Profesional</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Audit adalah proses sistematis dan independen untuk memeriksa laporan keuangan, catatan, dan operasi suatu entitas untuk menyatakan opini yang wajar dan akurat. Kami berkomitmen meningkatkan kredibilitas informasi keuangan bagi para pemangku kepentingan.
            </p>
          </div>
          <AccordionLayanan data={layananAudit} openIndex={openAuditIndex} setOpenIndex={setOpenAuditIndex} />
        </section>

        {/* PPL Section */}
        <section id="ppl" className="mb-16 scroll-mt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 rounded-full px-4 py-2 mb-4">
              <FaGraduationCap className="text-emerald-600 text-lg" />
              <span className="text-emerald-800 font-semibold text-sm">EDUCATION & TRAINING</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Pendidikan & Pelatihan</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Layanan pendidikan dan pelatihan dirancang untuk meningkatkan kompetensi dan pemahaman individu atau karyawan dalam bidang-bidang spesifik yang relevan dengan kebutuhan bisnis modern.
            </p>
          </div>
          <AccordionLayanan data={layananPPL} openIndex={openPPLIndex} setOpenIndex={setOpenPPLIndex} />
        </section>

        {/* ACCOUNTING ADVISOR Section */}
        <section id="accounting" className="mb-16 scroll-mt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-amber-100 rounded-full px-4 py-2 mb-4">
              <FaLightbulb className="text-amber-600 text-lg" />
              <span className="text-amber-800 font-semibold text-sm">ACCOUNTING ADVISORY</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Penasihat Akuntansi</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Layanan penasihat akuntansi memberikan keahlian dan panduan profesional dalam menghadapi tantangan dan kompleksitas terkait akuntansi dan pelaporan keuangan sesuai standar internasional.
            </p>
          </div>
          <AccordionLayanan data={layananAccountingAdvisor} openIndex={openAccountingIndex} setOpenIndex={setOpenAccountingIndex} />
        </section>

        {/* BUSINESS MANAGEMENT CONSULT Section */}
        <section id="finance" className="mb-16 scroll-mt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-4">
              <FaChartBar className="text-purple-600 text-lg" />
              <span className="text-purple-800 font-semibold text-sm">BUSINESS MANAGEMENT</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Konsultan Manajemen Bisnis</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Layanan konsultasi manajemen bisnis berfokus pada peningkatan kinerja keseluruhan suatu organisasi melalui analisis strategis, pengembangan solusi, dan implementasi yang efektif.
            </p>
          </div>
          <AccordionLayanan data={layananBusinessManagement} openIndex={openBusinessIndex} setOpenIndex={setOpenBusinessIndex} />
        </section>

        {/* TAXATION Section */}
        <section id="taxation" className="mb-16 scroll-mt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-rose-100 rounded-full px-4 py-2 mb-4">
              <FaFileInvoiceDollar className="text-rose-600 text-lg" />
              <span className="text-rose-800 font-semibold text-sm">TAXATION SERVICES</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Layanan Perpajakan</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Layanan perpajakan mencakup spektrum luas bantuan terkait kepatuhan pajak, perencanaan strategis, dan penyelesaian sengketa pajak untuk individu maupun entitas bisnis.
            </p>
          </div>
          <AccordionLayanan data={layananTaxation} openIndex={openTaxIndex} setOpenIndex={setOpenTaxIndex} />
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Proses Kerja Kami</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Metodologi yang terbukti untuk memastikan hasil yang optimal
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Konsultasi Awal",
                description: "Diskusi mendalam untuk memahami kebutuhan dan tantangan bisnis Anda"
              },
              {
                step: "02", 
                title: "Analisis & Perencanaan",
                description: "Evaluasi komprehensif dan penyusunan strategi yang tepat sasaran"
              },
              {
                step: "03",
                title: "Implementasi",
                description: "Pelaksanaan solusi dengan monitoring ketat dan komunikasi berkala"
              },
              {
                step: "04",
                title: "Evaluasi & Follow-up",
                description: "Penilaian hasil dan dukungan berkelanjutan untuk kesuksesan jangka panjang"
              }
            ].map((process, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-bold mb-4 group-hover:scale-105 transition-transform duration-300">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{process.description}</p>
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <FaArrowRight className="text-gray-300 text-lg" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default LayananKami