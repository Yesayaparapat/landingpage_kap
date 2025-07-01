import React, { createContext, useContext, useState, useEffect } from 'react';

// Membuat Language Context
const LanguageContext = createContext();

// Translations untuk bahasa Indonesia dan Inggris
export const translations = {
  id: {
    // Navbar
    navbar: {
      profil: 'PROFIL',
      tentangKami: 'TENTANG KAMI',
      layanan: 'LAYANAN', 
      legalitas: 'LEGALITAS',
      klien: 'KLIEN',
      hubungiKami: 'HUBUNGI KAMI'
    },
    // Beranda
    beranda: {
      title: 'KANTOR AKUNTAN PUBLIK',
      subtitle: 'JAMASTER SIMANULLANG',
      badge: 'Kantor Akuntan Publik',
      heroTitle: 'JAMASTER SIMANULLANG',
      tagline: 'Integrity • Independent • Competent',
      description: 'Solusi Terpercaya untuk Kebutuhan Akuntansi dan Audit Perusahaan Anda',
      cta: 'Hubungi Kami Sekarang',
      trustUs: 'Percayakan pada Kami',
      experience: 'Pengalaman Bertahun-tahun',
      professional: 'Tim Profesional',
      certified: 'Bersertifikat Resmi'
    },
    // Profil
    profil: {
      title: 'PROFIL KAMI',
      mainTitle: 'Kantor Akuntan Publik',
      subtitle: 'Jamaster Simanullang',
      sectionTitle: 'Profile kami',
      description1: 'Kantor Akuntan Publik Jamaster Simanullang (KAP Jamaster Simanullang) berdiri sejak November 2017. Sejak awal berdiri, kami telah berkomitmen untuk berperan serta dalam meningkatkan kemajuan perekonomian nasional dengan menjalankan setiap layanan akuntansi dengan penuh independensi, integritas, dan kompetensi.',
      description2: 'Kami menyediakan berbagai layanan seperti audit laporan keuangan, konsultasi perpajakan, dan penyusunan laporan keuangan yang handal, terpercaya, serta tertib administrasi perpajakan. Semua layanan kami berpedoman pada Standar Akuntansi Keuangan (SAK), yang diakui secara luas di Indonesia.',
      readMore: 'Selengkapnya',
      vision: 'VISI',
      mission: 'MISI',
      values: 'NILAI-NILAI'
    },
    // Tentang
    tentang: {
      title: 'TENTANG KAMI',
      subtitle: 'Dipercaya oleh berbagai perusahaan di Indonesia',
      description1: 'Berdiri sejak November 2017, selama itu juga kami telah banyak menyelesaikan berbagai permasalahan terkait akutansi, perpajakan, auditing dan konsultan manajemen di berbagai core business Klien.',
      description2: 'Lembaga kami diisi oleh para profesional dibidangnya yang mampu memberikan nilai tambah dmei terwujudnya efektifitas, efisiensi dan ekonomis bagi operasional bisnis klien yang lebih baik.',
      description3: 'Kami adalah jawaban terhadap berbagai permasalahan bisnis anda dan kami adalah pihak yang tepat serta siap bekerjasama.',
      accountingBold: 'akutansi, perpajakan, auditing',
      consultantBold: 'konsultan manajemen',
      readMore: 'Selengkapnya',
      managingPartner: 'Managing Partner',
      auditManager: 'AUDIT MANAGER',
      ourStory: 'Cerita Kami',
      whyChooseUs: 'Mengapa Memilih Kami'
    },
    // Layanan
    layanan: {
      title: 'LAYANAN KAMI',
      subtitle: 'Layanan profesional untuk kebutuhan bisnis Anda',
      description: 'Solusi profesional dan terpercaya untuk kebutuhan bisnis Anda dengan standar kualitas internasional',
      mainTitle: 'Layanan Unggulan Kami',
      auditTitle: 'AUDIT',
      auditDesc: 'Layanan audit adalah pemeriksaan independen atas laporan keuangan atau informasi lainnya untuk memberikan opini mengenai kewajaran dan keakuratannya. Ini membantu memastikan transparansi dan keandalan informasi finansial.',
      pplTitle: 'PPL (Pendidikan & Pelatihan)',
      pplDesc: 'Layanan pendidikan dan pelatihan dirancang untuk meningkatkan pengetahuan dan keterampilan individu atau tim dalam bidang tertentu.',
      accountingTitle: 'ACCOUNTING ADVISOR',
      accountingDesc: 'Layanan penasihat akuntansi memberikan saran dan panduan ahli terkait masalah akuntansi dan pelaporan keuangan.',
      financeTitle: 'BUSINESS MANAGEMENT CONSULT',
      financeDesc: 'Layanan konsultasi manajemen bisnis membantu perusahaan meningkatkan kinerja, efisiensi, dan pertumbuhan melalui analisis, strategi, dan implementasi solusi.',
      taxationTitle: 'TAXATION',
      taxationDesc: 'Layanan perpajakan mencakup semua aspek yang berkaitan dengan kepatuhan, perencanaan, dan penyelesaian masalah pajak.',
      whyChooseUs: 'Mengapa Memilih Kami?',
      professionalCertified: 'Profesional Bersertifikat',
      professionalCertifiedDesc: 'Tim ahli dengan sertifikasi internasional dan pengalaman bertahun-tahun',
      measurableResults: 'Hasil Terukur',
      measurableResultsDesc: 'Komitmen memberikan hasil yang dapat diukur dan sesuai dengan target bisnis',
      clientTrust: 'Kepercayaan Klien',
      clientTrustDesc: 'Dipercaya oleh ratusan perusahaan dari berbagai industri di Indonesia',
      readMore: 'Selengkapnya',
      getQuote: 'Minta Penawaran'
    },
    // Legal
    legal: {
      title: 'LEGALITAS',
      subtitle: 'Informasi Legal',
      description: 'Informasi legal dan sertifikasi resmi Kantor Akuntan Publik Jamaster Simanullang',
      companyDetailsTitle: 'Detail Perusahaan',
      companyName: 'Nama Badan',
      companyNameValue: 'Kantor Akuntan Publik Jamaster Simanullang',
      ministerPermit: 'Izin Menteri',
      ministerPermitValue: 'KEP 1147/KM.1/2017',
      npwp: 'NPWP',
      npwpValue: '59.963.311.2-413.001 / 3275112601740003',
      address: 'Alamat',
      addressValue: 'JL. Raya Cibarusah KM. 10\nRuko Cikarang Central City Blok E NO. 8\nCikarang Selatan - Kab. BEKASI 17530',
      contact: 'Kontak',
      contactValue: '021 - 8977 4253\n021 - 8977 4251',
      ourDifferenceTitle: 'Our Difference',
      effectiveCollaboration: 'KOLABORASI YANG LEBIH EFEKTIF',
      effectiveCollaborationDesc: 'Struktur budaya global dan regional memungkinkan kita untuk memberikan keterampilan lebih pada organisasi anda. Pendekatan serta kedisiplinan dalam memberikan pelayanan kepada klien.',
      comprehensiveSolution: 'MEMBERIKAN SOLUSI SECARA MENYELURUH',
      comprehensiveSolutionDesc: 'Kami membantu anda dalam melihat implikasi pada setiap pengambilan keputusan. Sehingga memperoleh kepercayaan dari stakeholder dengan penuh keyakinan.',
      understandNeeds: 'MEMAHAMI KEBUTUHAN ANDA',
      understandNeedsDesc: 'Kami memberikan input dalam memahami tentang peluang dan tantangan yang akan dihadapi dalam bisnis anda.'
    },
    // Klien
    klien: {
      title: 'KLIEN BISNIS KAMI',
      subtitle: 'Dipercaya oleh Berbagai Sektor Industri',
      description: 'Kami bangga telah melayani berbagai perusahaan dari berbagai sektor industri dengan kepuasan tinggi.',
      sectors: 'SEKTOR INDUSTRI',
      manufacturing: 'Manufaktur',
      trading: 'Perdagangan',
      services: 'Jasa',
      construction: 'Konstruksi',
      mining: 'Pertambangan',
      agriculture: 'Pertanian',
      testimonial: 'APA KATA KLIEN KAMI',
      clientCount: 'Klien Aktif',
      projectCount: 'Proyek Selesai',
      satisfactionRate: 'Tingkat Kepuasan',
      backToList: 'Kembali ke Daftar Sektor',
      registeredClients: 'Klien terdaftar',
      companies: 'perusahaan',
      seeAll: 'Lihat Semua Sektor',
      showLess: 'Tampilkan Sedikit',
      seeDetail: 'Lihat detail',
      noData: 'Belum Ada Data',
      noDataDesc: 'Belum ada perusahaan terdaftar untuk sektor ini',
      readMore: 'Selengkapnya',
      // Sector names
      sectors: {
        'Tekstil': 'Tekstil',
        'Perkapalan': 'Perkapalan',
        'Rumah Sakit/Klinik': 'Rumah Sakit/Klinik',
        'Yayasan': 'Yayasan',
        'Universitas': 'Universitas',
        'Asuransi': 'Asuransi',
        'Hotel dan Restoran': 'Hotel dan Restoran',
        'Percetakan': 'Percetakan',
        'Tur dan Travel': 'Tur dan Travel',
        'Koperasi': 'Koperasi',
        'Retail': 'Retail',
        'Dealer': 'Dealer',
        'Manufaktur': 'Manufaktur',
        'Pertanian': 'Pertanian',
        'Kerjasama Operasi': 'Kerjasama Operasi',
        'Konstruksi': 'Konstruksi',
        'Migas': 'Migas',
        'Peternakan': 'Peternakan',
        'Telekomunikasi': 'Telekomunikasi',
        'Pergudangan': 'Pergudangan',
        'Jasa Tenaga Kerja Indonesia': 'Jasa Tenaga Kerja Indonesia',
        'Transportasi': 'Transportasi',
        'Pengolahan Limbah': 'Pengolahan Limbah',
        'Properti/Perumahan': 'Properti/Perumahan',
        'Perbankan': 'Perbankan'
      }
    },
    // Hubungi
    hubungi: {
      title: 'Hubungi Kami',
      description: 'Kami siap melayani Anda dengan sepenuh hati. Kunjungi kantor kami atau hubungi melalui kontak di bawah ini.',
      officeAddress: 'Alamat Kantor',
      addressValue: 'Ruko Cikarang Central City Blok E No.08\nCiantra, Cikarang Sel., Kabupaten Bekasi\nJawa Barat 17530',
      plusCode: '📍 Kode Plus: M459+F9 Ciantra, Kabupaten Bekasi, Jawa Barat',
      businessHours: 'Jam Buka',
      openNow: 'Buka Sekarang',
      seeFullSchedule: 'Lihat Jadwal Lengkap',
      monday: 'Senin',
      tuesday: 'Selasa',
      wednesday: 'Rabu',
      thursday: 'Kamis',
      friday: 'Jumat',
      saturday: 'Sabtu',
      sunday: 'Minggu',
      closed: 'Tutup',
      wantToVisit: 'Ingin Berkunjung?',
      visitDescription: 'Kunjungi kantor kami untuk pelayanan terbaik dan konsultasi langsung dengan tim ahli kami.',
      getDirections: '🗺️ Dapatkan Petunjuk Arah',
      officeLocation: 'Lokasi Kantor',
      locationSubtitle: '📍 Ruko Cikarang Central City',
      easyAccess: 'Mudah Dijangkau',
      easyAccessDesc: 'Akses dari berbagai arah',
      wideParking: 'Parkir Luas',
      wideParkingDesc: 'Area parkir tersedia',
      contactNow: 'Hubungi Kami Sekarang',
      contactNowDesc: 'Pilih cara yang paling nyaman untuk Anda',
      emailLabel: 'Email',
      emailDesc: 'Kirim email untuk pertanyaan detail',
      instagramLabel: 'Instagram',
      instagramDesc: 'Follow untuk update terbaru',
      clickMapText: 'Klik peta untuk membuka di Google Maps',
      phone: 'Telepon',
      email: 'Email',
      contactForm: 'Form Kontak',
      sendMessage: 'Kirim Pesan'
    },
    // Footer
    footer: {
      companyName: 'KAP Jamaster Simanullang',
      companySubtitle: 'Kantor Akuntan Publik',
      description: 'Memberikan layanan audit, konsultasi perpajakan, dan penyusunan laporan keuangan yang handal dengan menjunjung tinggi prinsip independensi, integritas, dan kompetensi.',
      establishedSince: 'Berdiri sejak November 2017',
      ourServices: 'Layanan Kami',
      contactUs: 'Hubungi Kami',
      memberOf: 'Member of:',
      about: 'Tentang',
      services: 'Layanan',
      contact: 'Kontak',
      followUs: 'Ikuti Kami',
      allRightsReserved: 'Hak Cipta Dilindungi'
    }
  },
  en: {
    // Navbar
    navbar: {
      profil: 'PROFILE',
      tentangKami: 'ABOUT US',
      layanan: 'SERVICES',
      legalitas: 'LEGALITY',
      klien: 'CLIENTS',
      hubungiKami: 'CONTACT US'
    },
    // Beranda
    beranda: {
      title: 'PUBLIC ACCOUNTING FIRM',
      subtitle: 'JAMASTER SIMANULLANG',
      badge: 'Public Accounting Firm',
      heroTitle: 'JAMASTER SIMANULLANG',
      tagline: 'Integrity • Independent • Competent',
      description: 'Trusted Solutions for Your Company\'s Accounting and Audit Needs',
      cta: 'Contact Us Now',
      trustUs: 'Trust Us',
      experience: 'Years of Experience',
      professional: 'Professional Team',
      certified: 'Officially Certified'
    },
    // Profil
    profil: {
      title: 'OUR PROFILE',
      mainTitle: 'Public Accounting Firm',
      subtitle: 'Jamaster Simanullang',
      sectionTitle: 'Our profile',
      description1: 'Public Accounting Firm Jamaster Simanullang (KAP Jamaster Simanullang) was established in November 2017. Since its inception, we have been committed to contributing to national economic progress by carrying out every accounting service with full independence, integrity, and competence.',
      description2: 'We provide various services such as financial statement audits, tax consulting, and preparation of reliable, trustworthy financial reports with proper tax administration. All our services are based on Financial Accounting Standards (SAK), which are widely recognized in Indonesia.',
      readMore: 'Read More',
      vision: 'VISION',
      mission: 'MISSION',
      values: 'VALUES'
    },
    // Tentang
    tentang: {
      title: 'ABOUT US',
      subtitle: 'Trusted by various companies in Indonesia',
      description1: 'Established since November 2017, during that time we have solved various problems related to accounting, taxation, auditing and management consulting in various core business of Clients.',
      description2: 'Our institution is filled by professionals in their fields who are able to provide added value for the realization of effectiveness, efficiency and economics for better client business operations.',
      description3: 'We are the answer to your various business problems and we are the right party and ready to cooperate.',
      accountingBold: 'accounting, taxation, auditing',
      consultantBold: 'management consulting',
      readMore: 'Read More',
      managingPartner: 'Managing Partner',
      auditManager: 'AUDIT MANAGER',
      ourStory: 'Our Story',
      whyChooseUs: 'Why Choose Us'
    },
    // Layanan
    layanan: {
      title: 'OUR SERVICES',
      subtitle: 'Professional services for your business needs',
      description: 'Professional and trusted solutions for your business needs with international quality standards',
      mainTitle: 'Our Outstanding Services',
      auditTitle: 'AUDIT',
      auditDesc: 'Audit services are independent examinations of financial statements or other information to provide opinions on their fairness and accuracy. This helps ensure transparency and reliability of financial information.',
      pplTitle: 'Education & Training',
      pplDesc: 'Education and training services designed to enhance knowledge and skills of individuals or teams in specific fields.',
      accountingTitle: 'ACCOUNTING ADVISOR',
      accountingDesc: 'Accounting advisory services provide expert advice and guidance on accounting and financial reporting issues.',
      financeTitle: 'BUSINESS MANAGEMENT CONSULT',
      financeDesc: 'Business management consulting services help companies improve performance, efficiency, and growth through analysis, strategy, and solution implementation.',
      taxationTitle: 'TAXATION',
      taxationDesc: 'Taxation services cover all aspects related to tax compliance, planning, and resolution of tax issues.',
      whyChooseUs: 'Why Choose Us?',
      professionalCertified: 'Certified Professionals',
      professionalCertifiedDesc: 'Expert team with international certifications and years of experience',
      measurableResults: 'Measurable Results',
      measurableResultsDesc: 'Commitment to delivering measurable results aligned with business targets',
      clientTrust: 'Client Trust',
      clientTrustDesc: 'Trusted by hundreds of companies from various industries in Indonesia',
      readMore: 'Read More',
      getQuote: 'Get Quote'
    },
    // Legal
    legal: {
      title: 'LEGALITY',
      subtitle: 'Legal Information',
      description: 'Legal information and official certification of KAP Jamaster Simanullang',
      companyDetailsTitle: 'Company Details',
      companyName: 'Company Name',
      companyNameValue: 'Public Accounting Firm Jamaster Simanullang',
      ministerPermit: 'Minister Permit',
      ministerPermitValue: 'KEP 1147/KM.1/2017',
      npwp: 'Tax Number',
      npwpValue: '59.963.311.2-413.001 / 3275112601740003',
      address: 'Address',
      addressValue: 'JL. Raya Cibarusah KM. 10\nRuko Cikarang Central City Block E NO. 8\nSouth Cikarang - BEKASI Regency 17530',
      contact: 'Contact',
      contactValue: '021 - 8977 4253\n021 - 8977 4251',
      ourDifferenceTitle: 'Our Difference',
      effectiveCollaboration: 'MORE EFFECTIVE COLLABORATION',
      effectiveCollaborationDesc: 'Global and regional cultural structures enable us to provide more skills to your organization. Approach and discipline in providing services to clients.',
      comprehensiveSolution: 'PROVIDING COMPREHENSIVE SOLUTIONS',
      comprehensiveSolutionDesc: 'We help you see the implications of every decision making. So as to gain the trust of stakeholders with full confidence.',
      understandNeeds: 'UNDERSTANDING YOUR NEEDS',
      understandNeedsDesc: 'We provide input in understanding the opportunities and challenges that will be faced in your business.'
    },
    // Klien
    klien: {
      title: 'OUR BUSINESS CLIENTS',
      subtitle: 'Trusted by Various Industry Sectors',
      description: 'We are proud to have served various companies from various industry sectors with high satisfaction.',
      sectors: 'INDUSTRY SECTORS',
      manufacturing: 'Manufacturing',
      trading: 'Trading',
      services: 'Services',
      construction: 'Construction',
      mining: 'Mining',
      agriculture: 'Agriculture',
      testimonial: 'CLIENT TESTIMONIALS',
      clientCount: 'Active Clients',
      projectCount: 'Completed Projects',
      satisfactionRate: 'Satisfaction Rate',
      backToList: 'Back to Sector List',
      registeredClients: 'Registered clients',
      companies: 'companies',
      seeAll: 'See All Sectors',
      showLess: 'Show Less',
      seeDetail: 'See details',
      noData: 'No Data Available',
      noDataDesc: 'No companies registered for this sector yet',
      readMore: 'Read More',
      // Sector names
      sectors: {
        'Tekstil': 'Textile',
        'Perkapalan': 'Shipping',
        'Rumah Sakit/Klinik': 'Hospital/Clinic',
        'Yayasan': 'Foundation',
        'Universitas': 'University',
        'Asuransi': 'Insurance',
        'Hotel dan Restoran': 'Hotel and Restaurant',
        'Percetakan': 'Printing',
        'Tur dan Travel': 'Tour and Travel',
        'Koperasi': 'Cooperative',
        'Retail': 'Retail',
        'Dealer': 'Dealer',
        'Manufaktur': 'Manufacturing',
        'Pertanian': 'Agriculture',
        'Kerjasama Operasi': 'Operational Cooperation',
        'Konstruksi': 'Construction',
        'Migas': 'Oil and Gas',
        'Peternakan': 'Livestock',
        'Telekomunikasi': 'Telecommunications',
        'Pergudangan': 'Warehousing',
        'Jasa Tenaga Kerja Indonesia': 'Indonesian Workforce Services',
        'Transportasi': 'Transportation',
        'Pengolahan Limbah': 'Waste Management',
        'Properti/Perumahan': 'Property/Housing',
        'Perbankan': 'Banking'
      }
    },
    // Hubungi
    hubungi: {
      title: 'Contact Us',
      description: 'We are ready to serve you wholeheartedly. Visit our office or contact us through the contacts below.',
      officeAddress: 'Office Address',
      addressValue: 'Ruko Cikarang Central City Block E No.08\nCiantra, Cikarang Sel., Bekasi Regency\nWest Java 17530',
      plusCode: '📍 Plus Code: M459+F9 Ciantra, Bekasi Regency, West Java',
      businessHours: 'Business Hours',
      openNow: 'Open Now',
      seeFullSchedule: 'See Full Schedule',
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      closed: 'Closed',
      wantToVisit: 'Want to Visit?',
      visitDescription: 'Visit our office for the best service and direct consultation with our expert team.',
      getDirections: '🗺️ Get Directions',
      officeLocation: 'Office Location',
      locationSubtitle: '📍 Ruko Cikarang Central City',
      easyAccess: 'Easy Access',
      easyAccessDesc: 'Access from various directions',
      wideParking: 'Wide Parking',
      wideParkingDesc: 'Parking area available',
      contactNow: 'Contact Us Now',
      contactNowDesc: 'Choose the most convenient way for you',
      emailLabel: 'Email',
      emailDesc: 'Send email for detailed inquiries',
      instagramLabel: 'Instagram',
      instagramDesc: 'Follow for latest updates',
      clickMapText: 'Click map to open in Google Maps',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      contactForm: 'Contact Form',
      sendMessage: 'Send Message'
    },
    // Footer
    footer: {
      companyName: 'KAP Jamaster Simanullang',
      companySubtitle: 'Public Accounting Firm',
      description: 'Providing reliable audit services, tax consulting, and financial statement preparation while upholding the principles of independence, integrity, and competency.',
      establishedSince: 'Established since November 2017',
      ourServices: 'Our Services',
      contactUs: 'Contact Us',
      memberOf: 'Member of:',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      followUs: 'Follow Us',
      allRightsReserved: 'All Rights Reserved'
    }
  }
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('id'); // Default bahasa Indonesia

  // Load bahasa dari localStorage saat pertama kali
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'id' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Simpan bahasa ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Function untuk toggle bahasa
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'id' ? 'en' : 'id');
  };

  // Function untuk mendapatkan text berdasarkan key
  const getText = (key) => {
    const keys = key.split('.');
    let result = translations[language];
    
    for (const k of keys) {
      result = result?.[k];
    }
    
    return result || key;
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    getText,
    translations: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook untuk menggunakan Language Context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext; 