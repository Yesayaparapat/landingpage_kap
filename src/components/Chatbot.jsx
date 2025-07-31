  import React, { useState, useRef, useEffect } from 'react';
  import { MessageCircle, X, Send, Bot, User, Clock, Phone, Mail, Sparkles } from 'lucide-react';
  import { useLocation } from 'react-router-dom';

  const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
      {
        id: 1,
        text: "Halo! 👋 Selamat datang di KAP Jamaster Simanullang. Saya siap membantu Anda dengan informasi seputar layanan kami. Silakan pilih pertanyaan atau ketik pertanyaan Anda!",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showFixedIcon, setShowFixedIcon] = useState(false);
    const [conversationContext, setConversationContext] = useState(null);
    const messagesEndRef = useRef(null);
    const location = useLocation();

    // FAQ Data dengan jawaban otomatis
    const faqData = {
      // Layanan
      'layanan': 'Kami menyediakan layanan: 📋 AUDIT, 📚 PPL (Pendidikan & Pelatihan), 💼 ACCOUNTING ADVISOR, 🏢 BUSINESS MANAGEMENT CONSULT, dan 💰 TAXATION. Layanan mana yang Anda butuhkan?',
      'audit': 'Layanan Audit kami meliputi audit laporan keuangan, audit internal, dan review terbatas. Tim kami terdiri dari auditor bersertifikat dengan pengalaman bertahun-tahun. Ingin konsultasi lebih lanjut?',
      'audit laporan keuangan': 'Layanan Audit kami meliputi audit laporan keuangan, audit internal, dan review terbatas. Tim kami terdiri dari auditor bersertifikat dengan pengalaman bertahun-tahun. Ingin konsultasi lebih lanjut?',
      'audit internal': 'Layanan Audit kami meliputi audit laporan keuangan, audit internal, dan review terbatas. Tim kami terdiri dari auditor bersertifikat dengan pengalaman bertahun-tahun. Ingin konsultasi lebih lanjut?',
      'review terbatas': 'Layanan Audit kami meliputi audit laporan keuangan, audit internal, dan review terbatas. Tim kami terdiri dari auditor bersertifikat dengan pengalaman bertahun-tahun. Ingin konsultasi lebih lanjut?',
      'auditor': 'Layanan Audit kami meliputi audit laporan keuangan, audit internal, dan review terbatas. Tim kami terdiri dari auditor bersertifikat dengan pengalaman bertahun-tahun. Ingin konsultasi lebih lanjut?',
      'pajak': 'Layanan Taxation kami mencakup perencanaan pajak, konsultasi pajak, pembuatan SPT, pendampingan pemeriksaan pajak, dan optimalisasi beban pajak perusahaan. Tim kami berpengalaman menangani PPh, PPN, dan pajak daerah. Ingin konsultasi lebih lanjut?',
      'taxation': 'Layanan Taxation kami mencakup perencanaan pajak, konsultasi pajak, pembuatan SPT, pendampingan pemeriksaan pajak, dan optimalisasi beban pajak perusahaan. Tim kami berpengalaman menangani PPh, PPN, dan pajak daerah. Ingin konsultasi lebih lanjut?',
      'spt': 'Kami membantu pembuatan dan pelaporan SPT Tahunan maupun Bulanan (PPh, PPN) yang akurat dan tepat waktu. Tim kami memastikan compliance dengan regulasi terbaru. Ingin konsultasi lebih lanjut?',
      'pph': 'Layanan Taxation kami mencakup perencanaan pajak, konsultasi pajak, pembuatan SPT, pendampingan pemeriksaan pajak, dan optimalisasi beban pajak perusahaan. Tim kami berpengalaman menangani PPh, PPN, dan pajak daerah. Ingin konsultasi lebih lanjut?',
      'ppn': 'Layanan Taxation kami mencakup perencanaan pajak, konsultasi pajak, pembuatan SPT, pendampingan pemeriksaan pajak, dan optimalisasi beban pajak perusahaan. Tim kami berpengalaman menangani PPh, PPN, dan pajak daerah. Ingin konsultasi lebih lanjut?',
      'pajak penghasilan': 'Layanan Taxation kami mencakup perencanaan pajak, konsultasi pajak, pembuatan SPT, pendampingan pemeriksaan pajak, dan optimalisasi beban pajak perusahaan. Tim kami berpengalaman menangani PPh, PPN, dan pajak daerah. Ingin konsultasi lebih lanjut?',
      'pajak pertambahan nilai': 'Layanan Taxation kami mencakup perencanaan pajak, konsultasi pajak, pembuatan SPT, pendampingan pemeriksaan pajak, dan optimalisasi beban pajak perusahaan. Tim kami berpengalaman menangani PPh, PPN, dan pajak daerah. Ingin konsultasi lebih lanjut?',
      'perencanaan pajak': 'Layanan Taxation kami mencakup perencanaan pajak, konsultasi pajak, pembuatan SPT, pendampingan pemeriksaan pajak, dan optimalisasi beban pajak perusahaan. Tim kami berpengalaman menangani PPh, PPN, dan pajak daerah. Ingin konsultasi lebih lanjut?',
      'pemeriksaan pajak': 'Layanan Taxation kami mencakup perencanaan pajak, konsultasi pajak, pembuatan SPT, pendampingan pemeriksaan pajak, dan optimalisasi beban pajak perusahaan. Tim kami berpengalaman menangani PPh, PPN, dan pajak daerah. Ingin konsultasi lebih lanjut?',
      'akuntansi': 'Sebagai Accounting Advisor, kami membantu penyusunan laporan keuangan, implementasi sistem akuntansi, konsultasi standar akuntansi terbaru, dan setup chart of accounts yang sesuai bisnis Anda. Ingin konsultasi lebih lanjut?',
      'accounting': 'Sebagai Accounting Advisor, kami membantu penyusunan laporan keuangan, implementasi sistem akuntansi, konsultasi standar akuntansi terbaru, dan setup chart of accounts yang sesuai bisnis Anda. Ingin konsultasi lebih lanjut?',
      'accounting advisor': 'Sebagai Accounting Advisor, kami membantu penyusunan laporan keuangan, implementasi sistem akuntansi, konsultasi standar akuntansi terbaru, dan setup chart of accounts yang sesuai bisnis Anda. Ingin konsultasi lebih lanjut?',
      'laporan keuangan': 'Kami membantu penyusunan laporan keuangan yang akurat dan sesuai standar. Tim kami berpengalaman dalam menyusun Neraca, Laba Rugi, Arus Kas, dan Perubahan Ekuitas. Ingin konsultasi lebih lanjut?',
      'sistem akuntansi': 'Kami membantu implementasi dan optimalisasi sistem akuntansi untuk bisnis Anda, termasuk pemilihan software yang tepat dan training tim. Ingin konsultasi lebih lanjut?',
      'chart of accounts': 'Kami membantu setup chart of accounts (bagan akun) yang sesuai dengan jenis bisnis dan kebutuhan pelaporan Anda. Ingin konsultasi lebih lanjut?',
      'bagan akun': 'Kami membantu setup chart of accounts (bagan akun) yang sesuai dengan jenis bisnis dan kebutuhan pelaporan Anda. Ingin konsultasi lebih lanjut?',
      'standar akuntansi': 'Kami menyediakan konsultasi standar akuntansi terbaru (SAK, IFRS, ETAP) dan membantu implementasinya dalam bisnis Anda. Ingin konsultasi lebih lanjut?',
      'neraca': 'Kami membantu penyusunan laporan keuangan yang akurat dan sesuai standar. Tim kami berpengalaman dalam menyusun Neraca, Laba Rugi, Arus Kas, dan Perubahan Ekuitas. Ingin konsultasi lebih lanjut?',
      'laba rugi': 'Kami membantu penyusunan laporan keuangan yang akurat dan sesuai standar. Tim kami berpengalaman dalam menyusun Neraca, Laba Rugi, Arus Kas, dan Perubahan Ekuitas. Ingin konsultasi lebih lanjut?',
      'arus kas': 'Kami membantu penyusunan laporan keuangan yang akurat dan sesuai standar. Tim kami berpengalaman dalam menyusun Neraca, Laba Rugi, Arus Kas, dan Perubahan Ekuitas. Ingin konsultasi lebih lanjut?',
      'advisor': 'Sebagai Accounting Advisor, kami membantu penyusunan laporan keuangan, implementasi sistem akuntansi, konsultasi standar akuntansi terbaru, dan setup chart of accounts yang sesuai bisnis Anda. Ingin konsultasi lebih lanjut?',
      'pelatihan': 'Program PPL (Pendidikan & Pelatihan) kami meliputi pelatihan akuntansi, audit, pajak, manajemen bisnis, dan soft skills. Tersedia program in-house training dan public training dengan instruktur berpengalaman. Ingin konsultasi program pelatihan?',
      'ppl': 'Program PPL (Pendidikan & Pelatihan) kami meliputi pelatihan akuntansi, audit, pajak, manajemen bisnis, dan soft skills. Tersedia program in-house training dan public training dengan instruktur berpengalaman. Ingin konsultasi program pelatihan?',
      'pendidikan': 'Program PPL (Pendidikan & Pelatihan) kami meliputi pelatihan akuntansi, audit, pajak, manajemen bisnis, dan soft skills. Tersedia program in-house training dan public training dengan instruktur berpengalaman. Ingin konsultasi program pelatihan?',
      'training': 'Program PPL (Pendidikan & Pelatihan) kami meliputi pelatihan akuntansi, audit, pajak, manajemen bisnis, dan soft skills. Tersedia program in-house training dan public training dengan instruktur berpengalaman. Ingin konsultasi program pelatihan?',
      'in-house': 'Program PPL (Pendidikan & Pelatihan) kami meliputi pelatihan akuntansi, audit, pajak, manajemen bisnis, dan soft skills. Tersedia program in-house training dan public training dengan instruktur berpengalaman. Ingin konsultasi program pelatihan?',
      'public training': 'Program PPL (Pendidikan & Pelatihan) kami meliputi pelatihan akuntansi, audit, pajak, manajemen bisnis, dan soft skills. Tersedia program in-house training dan public training dengan instruktur berpengalaman. Ingin konsultasi program pelatihan?',
      'seminar': 'Program PPL (Pendidikan & Pelatihan) kami meliputi pelatihan akuntansi, audit, pajak, manajemen bisnis, dan soft skills. Tersedia program in-house training dan public training dengan instruktur berpengalaman. Ingin konsultasi program pelatihan?',
      'workshop': 'Program PPL (Pendidikan & Pelatihan) kami meliputi pelatihan akuntansi, audit, pajak, manajemen bisnis, dan soft skills. Tersedia program in-house training dan public training dengan instruktur berpengalaman. Ingin konsultasi program pelatihan?',
      'konsultasi': 'Business Management Consult kami membantu perencanaan strategis, analisis keuangan, optimalisasi operasional bisnis, implementasi SOP, dan pengembangan strategi pertumbuhan. Tim konsultan kami berpengalaman dalam berbagai industri. Ingin konsultasi bisnis?',
      'business management': 'Business Management Consult kami membantu perencanaan strategis, analisis keuangan, optimalisasi operasional bisnis, implementasi SOP, dan pengembangan strategi pertumbuhan. Tim konsultan kami berpengalaman dalam berbagai industri. Ingin konsultasi bisnis?',
      'manajemen': 'Business Management Consult kami membantu perencanaan strategis, analisis keuangan, optimalisasi operasional bisnis, implementasi SOP, dan pengembangan strategi pertumbuhan. Tim konsultan kami berpengalaman dalam berbagai industri. Ingin konsultasi bisnis?',
      'manajemen bisnis': 'Business Management Consult kami membantu perencanaan strategis, analisis keuangan, optimalisasi operasional bisnis, implementasi SOP, dan pengembangan strategi pertumbuhan. Tim konsultan kami berpengalaman dalam berbagai industri. Ingin konsultasi bisnis?',
      'perencanaan strategis': 'Business Management Consult kami membantu perencanaan strategis, analisis keuangan, optimalisasi operasional bisnis, implementasi SOP, dan pengembangan strategi pertumbuhan. Tim konsultan kami berpengalaman dalam berbagai industri. Ingin konsultasi bisnis?',
      'strategi bisnis': 'Business Management Consult kami membantu perencanaan strategis, analisis keuangan, optimalisasi operasional bisnis, implementasi SOP, dan pengembangan strategi pertumbuhan. Tim konsultan kami berpengalaman dalam berbagai industri. Ingin konsultasi bisnis?',
      'sop': 'Business Management Consult kami membantu perencanaan strategis, analisis keuangan, optimalisasi operasional bisnis, implementasi SOP, dan pengembangan strategi pertumbuhan. Tim konsultan kami berpengalaman dalam berbagai industri. Ingin konsultasi bisnis?',
      'operasional': 'Business Management Consult kami membantu perencanaan strategis, analisis keuangan, optimalisasi operasional bisnis, implementasi SOP, dan pengembangan strategi pertumbuhan. Tim konsultan kami berpengalaman dalam berbagai industri. Ingin konsultasi bisnis?',
      'optimalisasi': 'Business Management Consult kami membantu perencanaan strategis, analisis keuangan, optimalisasi operasional bisnis, implementasi SOP, dan pengembangan strategi pertumbuhan. Tim konsultan kami berpengalaman dalam berbagai industri. Ingin konsultasi bisnis?',

      // Kontak & Lokasi
      'kontak': 'Anda bisa menghubungi kami melalui:\n📞 Telepon: (021) 89774251 / (021) 89774253\n📧 Email: kap.jamasterjams@gmail.com\n📱 Instagram: @kap_jamastersimanullang\n📍 Alamat: Ruko Cikarang Central City Blok E No.08, Ciantra, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530',
      'alamat': 'Kantor kami berlokasi di Ruko Cikarang Central City Blok E No.08, Ciantra, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530. Mudah dijangkau dengan area parkir yang luas!',
      'lokasi': 'Kantor kami berlokasi di Ruko Cikarang Central City Blok E No.08, Ciantra, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530. Mudah dijangkau dengan area parkir yang luas!',
      'telepon': 'Nomor telepon kami:\n📞 (021) 89774251\n📞 (021) 89774253\n\nKami siap melayani Anda di jam kerja: Senin-Jumat 08.00-17.00 WIB',
      'nomor': 'Nomor telepon kami:\n📞 (021) 89774251\n📞 (021) 89774253\n\nKami siap melayani Anda di jam kerja: Senin-Jumat 08.00-17.00 WIB',
      'email': 'Email kami: kap.jamasterjams@gmail.com - Silakan kirim pertanyaan detail melalui email untuk mendapat respons yang komprehensif.',
      'instagram': 'Follow Instagram kami @kap_jamastersimanullang untuk update terbaru dan tips bisnis!',

      // Jam Operasional
      'jam': 'Jam operasional kami:\n🕐 Senin - Jumat: 08.00 - 17.00 WIB\n🚫 Sabtu - Minggu: Tutup\n\nKami siap melayani Anda di jam kerja tersebut!',
      'buka': 'Jam operasional kami:\n🕐 Senin - Jumat: 08.00 - 17.00 WIB\n🚫 Sabtu - Minggu: Tutup\n\nKami siap melayani Anda di jam kerja tersebut!',
      'tutup': 'Jam operasional kami:\n🕐 Senin - Jumat: 08.00 - 17.00 WIB\n🚫 Sabtu - Minggu: Tutup\n\nKami siap melayani Anda di jam kerja tersebut!',

      // Harga & Biaya
      'harga': 'Untuk informasi harga dan penawaran khusus, silakan hubungi kami langsung melalui email kap.jamasterjams@gmail.com atau kunjungi kantor kami untuk konsultasi gratis!',
      'biaya': 'Biaya layanan kami kompetitif dan disesuaikan dengan kebutuhan. Hubungi kami untuk mendapat penawaran terbaik dan konsultasi gratis!',
      'tarif': 'Tarif layanan kami bervariasi tergantung kompleksitas pekerjaan. Silakan hubungi kami untuk mendapat quotation yang sesuai dengan kebutuhan Anda.',

      // Tentang Perusahaan
      'profil': 'KAP Jamaster Simanullang adalah kantor akuntan publik yang berpengalaman dengan tim profesional bersertifikat. Kami berkomitmen memberikan layanan berkualitas tinggi dengan standar internasional.',
      'pengalaman': 'Tim kami memiliki pengalaman bertahun-tahun dalam bidang audit, akuntansi, dan konsultasi bisnis. Kami telah melayani berbagai klien dari berbagai industri.',
      'sertifikat': 'Tim kami terdiri dari profesional bersertifikat dengan keanggotaan di IAPI, IAI, IFAC, dan organisasi profesi lainnya.',

      // Greeting & Sapaan
      'halo': 'Halo! 👋 Senang bertemu dengan Anda! Ada yang bisa saya bantu mengenai layanan KAP Jamaster Simanullang?',
      'hai': 'Hai! 👋 Selamat datang! Saya siap membantu Anda dengan informasi tentang layanan kami.',
      'hello': 'Hello! 👋 Welcome to KAP Jamaster Simanullang! How can I assist you today?',
      'hi': 'Hi there! 😊 Selamat datang di KAP Jamaster Simanullang! Ada yang ingin Anda tanyakan?',
      'selamat': 'Selamat datang di KAP Jamaster Simanullang! 🎉 Ada yang ingin Anda ketahui tentang layanan kami?',
      'good morning': 'Good morning! ☀️ Selamat pagi! Semoga hari Anda menyenangkan. Ada yang bisa saya bantu?',
      'selamat pagi': 'Selamat pagi! ☀️ Semoga pagi Anda penuh berkah. Ada yang ingin Anda tanyakan tentang layanan kami?',
      'selamat siang': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu Anda?',
      'selamat sore': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang bisa saya bantu?',
      'selamat malam': 'Selamat malam! 🌙 Semoga malam Anda tenang. Ada yang ingin Anda ketahui tentang KAP kami?',
      'good afternoon': 'Good afternoon! 🌞 Selamat siang! Ada yang bisa saya bantu hari ini?',
      'good evening': 'Good evening! 🌆 Selamat sore! Bagaimana saya bisa membantu Anda?',
      'good night': 'Good night! 🌙 Selamat malam! Meskipun sudah malam, saya tetap siap membantu Anda.',
      'assalamualaikum': 'Wa\'alaikumsalam warahmatullahi wabarakatuh! 🤲 Selamat datang di KAP Jamaster Simanullang. Ada yang bisa saya bantu?',
      'salam': 'Wa\'alaikumsalam! 🤲 Selamat datang! Bagaimana saya bisa membantu Anda hari ini?',
      'permisi': 'Ya, silakan! 😊 Jangan ragu untuk bertanya. Ada yang ingin Anda ketahui tentang layanan kami?',
      'excuse me': 'Yes, please! 😊 Silakan bertanya. Saya siap membantu Anda.',
      'maaf': 'Tidak apa-apa! 😊 Ada yang bisa saya bantu? Silakan tanyakan apapun tentang KAP Jamaster Simanullang.',
      
      // Tambahan variasi ucapan selamat
      'pagi': 'Selamat pagi! ☀️ Semoga pagi Anda cerah. Ada yang bisa saya bantu?',
      'siang': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu?',
      'sore': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang ingin ditanyakan?',
      'malam': 'Selamat malam! 🌙 Meskipun sudah malam, saya tetap siap membantu Anda.',
      'morning': 'Good morning! ☀️ Selamat pagi! Ada yang bisa saya bantu pagi ini?',
      'afternoon': 'Good afternoon! 🌞 Selamat siang! Bagaimana saya bisa membantu Anda?',
      'evening': 'Good evening! 🌆 Selamat sore! Ada yang ingin Anda tanyakan?',
      'night': 'Good night! 🌙 Selamat malam! Saya tetap siap membantu Anda.',
      'selamat pagi semua': 'Selamat pagi! ☀️ Semoga pagi Anda penuh berkah. Ada yang ingin Anda tanyakan tentang layanan kami?',
      'selamat siang semua': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu Anda?',
      'selamat sore semua': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang bisa saya bantu?',
      'selamat malam semua': 'Selamat malam! 🌙 Semoga malam Anda tenang. Ada yang ingin Anda ketahui tentang KAP kami?',
      'pagi pagi': 'Selamat pagi! ☀️ Semoga pagi Anda cerah. Ada yang bisa saya bantu?',
      'siang siang': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu?',
      'sore sore': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang ingin ditanyakan?',
      'malam malam': 'Selamat malam! 🌙 Meskipun sudah malam, saya tetap siap membantu Anda.',
      'selamat pagi pak': 'Selamat pagi! ☀️ Semoga pagi Anda penuh berkah. Ada yang ingin Anda tanyakan tentang layanan kami?',
      'selamat siang pak': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu Anda?',
      'selamat sore pak': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang bisa saya bantu?',
      'selamat malam pak': 'Selamat malam! 🌙 Semoga malam Anda tenang. Ada yang ingin Anda ketahui tentang KAP kami?',
      'selamat pagi bu': 'Selamat pagi! ☀️ Semoga pagi Anda penuh berkah. Ada yang ingin Anda tanyakan tentang layanan kami?',
      'selamat siang bu': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu Anda?',
      'selamat sore bu': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang bisa saya bantu?',
      'selamat malam bu': 'Selamat malam! 🌙 Semoga malam Anda tenang. Ada yang ingin Anda ketahui tentang KAP kami?',
      'selamat pagi mas': 'Selamat pagi! ☀️ Semoga pagi Anda penuh berkah. Ada yang ingin Anda tanyakan tentang layanan kami?',
      'selamat siang mas': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu Anda?',
      'selamat sore mas': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang bisa saya bantu?',
      'selamat malam mas': 'Selamat malam! 🌙 Semoga malam Anda tenang. Ada yang ingin Anda ketahui tentang KAP kami?',
      'selamat pagi mbak': 'Selamat pagi! ☀️ Semoga pagi Anda penuh berkah. Ada yang ingin Anda tanyakan tentang layanan kami?',
      'selamat siang mbak': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu Anda?',
      'selamat sore mbak': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang bisa saya bantu?',
      'selamat malam mbak': 'Selamat malam! 🌙 Semoga malam Anda tenang. Ada yang ingin Anda ketahui tentang KAP kami?',
      
      // Variasi tambahan untuk ucapan selamat
      'pagi pak': 'Selamat pagi! ☀️ Semoga pagi Anda cerah. Ada yang bisa saya bantu?',
      'siang pak': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu?',
      'sore pak': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang ingin ditanyakan?',
      'malam pak': 'Selamat malam! 🌙 Meskipun sudah malam, saya tetap siap membantu Anda.',
      'pagi bu': 'Selamat pagi! ☀️ Semoga pagi Anda cerah. Ada yang bisa saya bantu?',
      'siang bu': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu?',
      'sore bu': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang ingin ditanyakan?',
      'malam bu': 'Selamat malam! 🌙 Meskipun sudah malam, saya tetap siap membantu Anda.',
      'pagi mas': 'Selamat pagi! ☀️ Semoga pagi Anda cerah. Ada yang bisa saya bantu?',
      'siang mas': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu?',
      'sore mas': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang ingin ditanyakan?',
      'malam mas': 'Selamat malam! 🌙 Meskipun sudah malam, saya tetap siap membantu Anda.',
      'pagi mbak': 'Selamat pagi! ☀️ Semoga pagi Anda cerah. Ada yang bisa saya bantu?',
      'siang mbak': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu?',
      'sore mbak': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang ingin ditanyakan?',
      'malam mbak': 'Selamat malam! 🌙 Meskipun sudah malam, saya tetap siap membantu Anda.',
      'selamat pagi kak': 'Selamat pagi! ☀️ Semoga pagi Anda penuh berkah. Ada yang ingin Anda tanyakan tentang layanan kami?',
      'selamat siang kak': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu Anda?',
      'selamat sore kak': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang bisa saya bantu?',
      'selamat malam kak': 'Selamat malam! 🌙 Semoga malam Anda tenang. Ada yang ingin Anda ketahui tentang KAP kami?',
      'pagi kak': 'Selamat pagi! ☀️ Semoga pagi Anda cerah. Ada yang bisa saya bantu?',
      'siang kak': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu?',
      'sore kak': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang ingin ditanyakan?',
      'malam kak': 'Selamat malam! 🌙 Meskipun sudah malam, saya tetap siap membantu Anda.',
      'selamat pagi om': 'Selamat pagi! ☀️ Semoga pagi Anda penuh berkah. Ada yang ingin Anda tanyakan tentang layanan kami?',
      'selamat siang om': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu Anda?',
      'selamat sore om': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang bisa saya bantu?',
      'selamat malam om': 'Selamat malam! 🌙 Semoga malam Anda tenang. Ada yang ingin Anda ketahui tentang KAP kami?',
      'pagi om': 'Selamat pagi! ☀️ Semoga pagi Anda cerah. Ada yang bisa saya bantu?',
      'siang om': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu?',
      'sore om': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang ingin ditanyakan?',
      'malam om': 'Selamat malam! 🌙 Meskipun sudah malam, saya tetap siap membantu Anda.',
      
      // Variasi dengan emoji dan bahasa
      'pagi ☀️': 'Selamat pagi! ☀️ Semoga pagi Anda cerah. Ada yang bisa saya bantu?',
      'siang ☀️': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu?',
      'sore 🌅': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang ingin ditanyakan?',
      'malam 🌙': 'Selamat malam! 🌙 Meskipun sudah malam, saya tetap siap membantu Anda.',
      'good morning ☀️': 'Good morning! ☀️ Selamat pagi! Ada yang bisa saya bantu pagi ini?',
      'good afternoon 🌞': 'Good afternoon! 🌞 Selamat siang! Bagaimana saya bisa membantu Anda?',
      'good evening 🌆': 'Good evening! 🌆 Selamat sore! Ada yang ingin Anda tanyakan?',
      'good night 🌙': 'Good night! 🌙 Selamat malam! Saya tetap siap membantu Anda.',
      'morning ☀️': 'Good morning! ☀️ Selamat pagi! Ada yang bisa saya bantu pagi ini?',
      'afternoon 🌞': 'Good afternoon! 🌞 Selamat siang! Bagaimana saya bisa membantu Anda?',
      'evening 🌆': 'Good evening! 🌆 Selamat sore! Ada yang ingin Anda tanyakan?',
      'night 🌙': 'Good night! 🌙 Selamat malam! Saya tetap siap membantu Anda.',
      
      // Variasi bahasa daerah
      'selamat pagi kang': 'Selamat pagi! ☀️ Semoga pagi Anda penuh berkah. Ada yang ingin Anda tanyakan tentang layanan kami?',
      'selamat siang kang': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu Anda?',
      'selamat sore kang': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang bisa saya bantu?',
      'selamat malam kang': 'Selamat malam! 🌙 Semoga malam Anda tenang. Ada yang ingin Anda ketahui tentang KAP kami?',
      'pagi kang': 'Selamat pagi! ☀️ Semoga pagi Anda cerah. Ada yang bisa saya bantu?',
      'siang kang': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu?',
      'sore kang': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang ingin ditanyakan?',
      'malam kang': 'Selamat malam! 🌙 Meskipun sudah malam, saya tetap siap membantu Anda.',
      'selamat pagi teh': 'Selamat pagi! ☀️ Semoga pagi Anda penuh berkah. Ada yang ingin Anda tanyakan tentang layanan kami?',
      'selamat siang teh': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu Anda?',
      'selamat sore teh': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang bisa saya bantu?',
      'selamat malam teh': 'Selamat malam! 🌙 Semoga malam Anda tenang. Ada yang ingin Anda ketahui tentang KAP kami?',
      'pagi teh': 'Selamat pagi! ☀️ Semoga pagi Anda cerah. Ada yang bisa saya bantu?',
      'siang teh': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu?',
      'sore teh': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang ingin ditanyakan?',
      'malam teh': 'Selamat malam! 🌙 Meskipun sudah malam, saya tetap siap membantu Anda.',
      
      // Variasi singkatan dan informal
      'selamat pagi!': 'Selamat pagi! ☀️ Semoga pagi Anda penuh berkah. Ada yang ingin Anda tanyakan tentang layanan kami?',
      'selamat siang!': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu Anda?',
      'selamat sore!': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang bisa saya bantu?',
      'selamat malam!': 'Selamat malam! 🌙 Semoga malam Anda tenang. Ada yang ingin Anda ketahui tentang KAP kami?',
      'pagi!': 'Selamat pagi! ☀️ Semoga pagi Anda cerah. Ada yang bisa saya bantu?',
      'siang!': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu?',
      'sore!': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang ingin ditanyakan?',
      'malam!': 'Selamat malam! 🌙 Meskipun sudah malam, saya tetap siap membantu Anda.',
      'good morning!': 'Good morning! ☀️ Selamat pagi! Ada yang bisa saya bantu pagi ini?',
      'good afternoon!': 'Good afternoon! 🌞 Selamat siang! Bagaimana saya bisa membantu Anda?',
      'good evening!': 'Good evening! 🌆 Selamat sore! Ada yang ingin Anda tanyakan?',
      'good night!': 'Good night! 🌙 Selamat malam! Saya tetap siap membantu Anda.',
      'morning!': 'Good morning! ☀️ Selamat pagi! Ada yang bisa saya bantu pagi ini?',
      'afternoon!': 'Good afternoon! 🌞 Selamat siang! Bagaimana saya bisa membantu Anda?',
      'evening!': 'Good evening! 🌆 Selamat sore! Ada yang ingin Anda tanyakan?',
      'night!': 'Good night! 🌙 Selamat malam! Saya tetap siap membantu Anda.',
      
      // Variasi dengan tanda tanya
      'selamat pagi?': 'Selamat pagi! ☀️ Semoga pagi Anda penuh berkah. Ada yang ingin Anda tanyakan tentang layanan kami?',
      'selamat siang?': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu Anda?',
      'selamat sore?': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang bisa saya bantu?',
      'selamat malam?': 'Selamat malam! 🌙 Semoga malam Anda tenang. Ada yang ingin Anda ketahui tentang KAP kami?',
      'pagi?': 'Selamat pagi! ☀️ Semoga pagi Anda cerah. Ada yang bisa saya bantu?',
      'siang?': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu?',
      'sore?': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang ingin ditanyakan?',
      'malam?': 'Selamat malam! 🌙 Meskipun sudah malam, saya tetap siap membantu Anda.',
      'good morning?': 'Good morning! ☀️ Selamat pagi! Ada yang bisa saya bantu pagi ini?',
      'good afternoon?': 'Good afternoon! 🌞 Selamat siang! Bagaimana saya bisa membantu Anda?',
      'good evening?': 'Good evening! 🌆 Selamat sore! Ada yang ingin Anda tanyakan?',
      'good night?': 'Good night! 🌙 Selamat malam! Saya tetap siap membantu Anda.',
      'morning?': 'Good morning! ☀️ Selamat pagi! Ada yang bisa saya bantu pagi ini?',
      'afternoon?': 'Good afternoon! 🌞 Selamat siang! Bagaimana saya bisa membantu Anda?',
      'evening?': 'Good evening! 🌆 Selamat sore! Ada yang ingin Anda tanyakan?',
      'night?': 'Good night! 🌙 Selamat malam! Saya tetap siap membantu Anda.',
      
      // Variasi kombinasi kata
      'selamat pagi pak bu': 'Selamat pagi! ☀️ Semoga pagi Anda penuh berkah. Ada yang ingin Anda tanyakan tentang layanan kami?',
      'selamat siang pak bu': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu Anda?',
      'selamat sore pak bu': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang bisa saya bantu?',
      'selamat malam pak bu': 'Selamat malam! 🌙 Semoga malam Anda tenang. Ada yang ingin Anda ketahui tentang KAP kami?',
      'selamat pagi mas mbak': 'Selamat pagi! ☀️ Semoga pagi Anda penuh berkah. Ada yang ingin Anda tanyakan tentang layanan kami?',
      'selamat siang mas mbak': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu Anda?',
      'selamat sore mas mbak': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang bisa saya bantu?',
      'selamat malam mas mbak': 'Selamat malam! 🌙 Semoga malam Anda tenang. Ada yang ingin Anda ketahui tentang KAP kami?',
      
      // Variasi informal dan gaul
      'pagi gan': 'Selamat pagi! ☀️ Semoga pagi Anda cerah. Ada yang bisa saya bantu?',
      'siang gan': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu?',
      'sore gan': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang ingin ditanyakan?',
      'malam gan': 'Selamat malam! 🌙 Meskipun sudah malam, saya tetap siap membantu Anda.',
      'pagi bro': 'Selamat pagi! ☀️ Semoga pagi Anda cerah. Ada yang bisa saya bantu?',
      'siang bro': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu?',
      'sore bro': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang ingin ditanyakan?',
      'malam bro': 'Selamat malam! 🌙 Meskipun sudah malam, saya tetap siap membantu Anda.',
      'pagi sis': 'Selamat pagi! ☀️ Semoga pagi Anda cerah. Ada yang bisa saya bantu?',
      'siang sis': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu?',
      'sore sis': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang ingin ditanyakan?',
      'malam sis': 'Selamat malam! 🌙 Meskipun sudah malam, saya tetap siap membantu Anda.',
      
      // Variasi dengan angka dan simbol
      'pagi2': 'Selamat pagi! ☀️ Semoga pagi Anda cerah. Ada yang bisa saya bantu?',
      'siang2': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu?',
      'sore2': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang ingin ditanyakan?',
      'malam2': 'Selamat malam! 🌙 Meskipun sudah malam, saya tetap siap membantu Anda.',
      'pagi...': 'Selamat pagi! ☀️ Semoga pagi Anda cerah. Ada yang bisa saya bantu?',
      'siang...': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu?',
      'sore...': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang ingin ditanyakan?',
      'malam...': 'Selamat malam! 🌙 Meskipun sudah malam, saya tetap siap membantu Anda.',

      // Sapaan Casual & Lainnya
      'apa kabar': 'Kabar saya baik, terima kasih! 😊 Bagaimana dengan Anda? Ada yang bisa saya bantu hari ini?',
      'how are you': 'I\'m doing great, thank you! 😊 Bagaimana dengan Anda? Ada yang ingin Anda tanyakan?',
      'gimana': 'Baik-baik saja! 😊 Gimana dengan Anda? Ada yang mau ditanyakan tentang KAP kami?',
      'pagi': 'Selamat pagi! ☀️ Semoga pagi Anda cerah. Ada yang bisa saya bantu?',
      'siang': 'Selamat siang! ☀️ Semoga hari Anda produktif. Bagaimana saya bisa membantu?',
      'sore': 'Selamat sore! 🌅 Semoga sore Anda menyenangkan. Ada yang ingin ditanyakan?',
      'malam': 'Selamat malam! 🌙 Meskipun sudah malam, saya tetap siap membantu Anda.',
      'morning': 'Good morning! ☀️ Selamat pagi! Ada yang bisa saya bantu pagi ini?',
      'afternoon': 'Good afternoon! 🌞 Selamat siang! Bagaimana saya bisa membantu Anda?',
      'evening': 'Good evening! 🌆 Selamat sore! Ada yang ingin Anda tanyakan?',
      'night': 'Good night! 🌙 Selamat malam! Saya tetap siap membantu Anda.',

      // Default responses & Terima kasih
      'terima kasih': 'Sama-sama! 😊 Senang bisa membantu. Ada hal lain yang ingin Anda tanyakan?',
      'thank you': 'You\'re welcome! 😊 Senang bisa membantu. Is there anything else I can help you with?',
      'thanks': 'You\'re welcome! 😊 Ada yang lain yang bisa saya bantu?',
      'makasih': 'Sama-sama! 😊 Senang bisa membantu. Ada pertanyaan lain?',
      'ok': 'Baik! Ada pertanyaan lain yang bisa saya bantu?',
      'oke': 'Oke! Silakan tanya jika ada hal lain yang ingin Anda ketahui.',
      'okay': 'Okay! 👍 Ada yang lain yang ingin Anda tanyakan?',
      'baik': 'Baik! 👍 Silakan lanjutkan jika ada pertanyaan lain.',
      'siap': 'Siap! 👍 Ada yang lain yang bisa saya bantu?',
      
      // Konfirmasi & Persetujuan
      'iya': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'ya': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'yes': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'yup': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'yep': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'betul': 'Betul! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'benar': 'Benar! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'setuju': 'Setuju! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'sip': 'Sip! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'oke deh': 'Oke deh! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'baik deh': 'Baik deh! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'lanjut': 'Lanjut! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'lanjutkan': 'Lanjutkan! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'terus': 'Terus! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'teruskan': 'Teruskan! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'mau': 'Mau! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'ingin': 'Ingin! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'saya tertarik': 'Bagus! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'tertarik': 'Bagus! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'saya mau': 'Bagus! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'saya ingin': 'Bagus! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'saya butuh': 'Bagus! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'saya perlu': 'Bagus! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      
      // Variasi konfirmasi dengan emoji dan tanda baca
      'iya!': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'ya!': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'yes!': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'iya...': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'ya...': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'yes...': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      
      // Konfirmasi dengan sapaan
      'iya pak': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'ya pak': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'iya bu': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'ya bu': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'iya mas': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'ya mas': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'iya mbak': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'ya mbak': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'iya kak': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'ya kak': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'iya om': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'ya om': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      
      // Konfirmasi informal
      'iya gan': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'ya gan': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'iya bro': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'ya bro': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'iya sis': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'ya sis': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      
      // Konfirmasi dengan angka dan simbol
      'iya2': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'ya2': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'yes2': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      
      // Konfirmasi dengan bahasa daerah
      'iya kang': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'ya kang': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'iya teh': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'ya teh': 'Baik! 😊 Ada yang bisa saya bantu lagi? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      
      // Penolakan & Jawaban Negatif
      'tidak': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'no': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'nggak': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'engga': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'belum': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'gak': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'ga': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'nope': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'nop': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'salah': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'salah deh': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'nggak deh': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'engga deh': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'belum deh': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'gak deh': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'ga deh': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      
      // Penolakan dengan sapaan
      'tidak pak': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'no pak': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'nggak pak': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'tidak bu': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'no bu': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'nggak bu': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'tidak mas': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'no mas': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'nggak mas': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'tidak mbak': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'no mbak': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'nggak mbak': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      
      // Penolakan dengan tanda baca
      'tidak!': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'no!': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'nggak!': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'tidak...': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'no...': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
      'nggak...': 'Tidak masalah! 😊 Ada yang lain yang bisa saya bantu? Silakan tanyakan apapun tentang layanan KAP Jamaster Simanullang.',
    };

    // Quick reply buttons
    const quickReplies = [
      { text: '📋 Layanan Kami', key: 'layanan' },
      { text: '🔍 Layanan Audit', key: 'audit' },
      { text: '💼 Accounting Advisor', key: 'accounting' },
      { text: '💰 Taxation', key: 'pajak' },
      { text: '📚 PPL Training', key: 'pelatihan' },
      { text: '🏢 Business Consult', key: 'konsultasi' },
      { text: '📍 Kontak', key: 'kontak' },
      { text: '💵 Harga', key: 'harga' },
    ];

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
      scrollToBottom();
    }, [messages]);

    // Listen for custom event to open chatbot
    useEffect(() => {
      const handleOpenChatbot = () => {
        setIsOpen(true);
      };

      window.addEventListener('openChatbot', handleOpenChatbot);
      
      return () => {
        window.removeEventListener('openChatbot', handleOpenChatbot);
      };
    }, []);

    // Check current route to show/hide fixed icon
    useEffect(() => {
      const currentPath = location.pathname;
      const currentHash = location.hash;
      
      // Detail pages (separate routes)
      const detailPages = ['/profil-kami', '/tentang-kami', '/layanan-kami', '/klien-bagian'];
      
      // Main page sections (hash navigation)
      const mainPageSections = ['#profil', '#tentang', '#layanan', '#klien', '#hubungi'];
      
      // Show fixed icon on detail pages OR main page with target sections
      const isDetailPage = detailPages.includes(currentPath);
      const isTargetSection = currentPath === '/' && mainPageSections.includes(currentHash);
      
      setShowFixedIcon(isDetailPage || isTargetSection);
    }, [location.pathname, location.hash]);

    const getBotResponse = (userMessage) => {
      const message = userMessage.toLowerCase().trim();
      
          // Check for consultation follow-up responses
      if (conversationContext === 'audit_consultation') {
        if (message.includes('ya') || message.includes('lanjut') || message.includes('iya') || 
            message.includes('yes') || message.includes('mau') || message.includes('ingin') ||
            message.includes('saya tertarik') || message.includes('tertarik')) {
          setConversationContext(null); // Reset context
          return `Bagus! 🎉 Kami siap membantu konsultasi audit Anda. Silakan hubungi tim kami melalui:\n\n📞 Telepon: (021) 89774251 / (021) 89774253\n📧 Email: kap.jamasterjams@gmail.com\n📍 Kantor: Ruko Cikarang Central City Blok E No.08\n\nAtau Anda bisa menceritakan kebutuhan audit spesifik Anda di sini, dan saya akan memberikan informasi awal yang relevan! 💼`;
        } else if (message.includes('tidak') || message.includes('no') || message.includes('nggak') || 
                    message.includes('engga') || message.includes('belum')) {
          setConversationContext(null); // Reset context
          return `Tidak masalah! 😊 Jika sewaktu-waktu Anda membutuhkan konsultasi audit, kami siap membantu. Ada pertanyaan lain tentang layanan KAP kami yang bisa saya jawab?`;
        }
      }

      // Check for accounting consultation follow-up responses
      if (conversationContext === 'accounting_consultation') {
        if (message.includes('ya') || message.includes('lanjut') || message.includes('iya') || 
            message.includes('yes') || message.includes('mau') || message.includes('ingin') ||
            message.includes('saya tertarik') || message.includes('tertarik')) {
          setConversationContext(null); // Reset context
          return `Excellent! 🎯 Tim Accounting Advisor kami siap membantu Anda. Untuk konsultasi lebih lanjut:\n\n📞 Telepon: (021) 89774251 / (021) 89774253\n📧 Email: kap.jamasterjams@gmail.com\n📍 Kantor: Ruko Cikarang Central City Blok E No.08\n\nAtau ceritakan tantangan akuntansi apa yang sedang Anda hadapi? Kami bisa memberikan solusi awal yang tepat! 📊💡`;
        } else if (message.includes('tidak') || message.includes('no') || message.includes('nggak') || 
                    message.includes('engga') || message.includes('belum')) {
          setConversationContext(null); // Reset context
          return `Baik, tidak masalah! 😊 Jika di masa depan Anda membutuhkan bantuan accounting, jangan ragu untuk menghubungi kami. Ada layanan lain yang ingin Anda ketahui?`;
        }
      }

      // Check for taxation consultation follow-up responses
      if (conversationContext === 'taxation_consultation') {
        if (message.includes('ya') || message.includes('lanjut') || message.includes('iya') || 
            message.includes('yes') || message.includes('mau') || message.includes('ingin') ||
            message.includes('saya tertarik') || message.includes('tertarik')) {
          setConversationContext(null); // Reset context
          return `Fantastic! 💰 Tim Taxation kami siap membantu optimalisasi pajak Anda. Hubungi kami untuk konsultasi:\n\n📞 Telepon: (021) 89774251 / (021) 89774253\n📧 Email: kap.jamasterjams@gmail.com\n📍 Kantor: Ruko Cikarang Central City Blok E No.08\n\nCeritakan jenis pajak atau masalah perpajakan apa yang sedang Anda hadapi? Kami akan berikan solusi terbaik! 🏛️📋`;
        } else if (message.includes('tidak') || message.includes('no') || message.includes('nggak') || 
                    message.includes('engga') || message.includes('belum')) {
          setConversationContext(null); // Reset context
          return `Oke, tidak masalah! 😊 Kapan saja Anda butuh bantuan perpajakan, kami siap membantu. Ada layanan lain yang ingin Anda tanyakan?`;
        }
      }

      // Check for PPL training consultation follow-up responses
      if (conversationContext === 'ppl_consultation') {
        if (message.includes('ya') || message.includes('lanjut') || message.includes('iya') || 
            message.includes('yes') || message.includes('mau') || message.includes('ingin') ||
            message.includes('saya tertarik') || message.includes('tertarik')) {
          setConversationContext(null); // Reset context
          return `Great! 📚 Tim PPL (Pendidikan & Pelatihan) kami siap membantu pengembangan SDM Anda. Untuk informasi program training:\n\n📞 Telepon: (021) 89774251 / (021) 89774253\n📧 Email: kap.jamasterjams@gmail.com\n📍 Kantor: Ruko Cikarang Central City Blok E No.08\n\nProgram pelatihan apa yang Anda butuhkan? In-house training atau public training? Ceritakan kebutuhan tim Anda! 🎓👥`;
        } else if (message.includes('tidak') || message.includes('no') || message.includes('nggak') || 
                    message.includes('engga') || message.includes('belum')) {
          setConversationContext(null); // Reset context
          return `Tidak apa-apa! 😊 Jika suatu saat membutuhkan program pelatihan untuk tim, jangan ragu hubungi kami. Ada pertanyaan lain?`;
        }
      }

      // Check for business management consultation follow-up responses
      if (conversationContext === 'business_consultation') {
        if (message.includes('ya') || message.includes('lanjut') || message.includes('iya') || 
            message.includes('yes') || message.includes('mau') || message.includes('ingin') ||
            message.includes('saya tertarik') || message.includes('tertarik')) {
          setConversationContext(null); // Reset context
          return `Perfect! 🏢 Tim Business Management Consultant kami siap membantu mengoptimalkan bisnis Anda. Untuk konsultasi strategis:\n\n📞 Telepon: (021) 89774251 / (021) 89774253\n📧 Email: kap.jamasterjams@gmail.com\n📍 Kantor: Ruko Cikarang Central City Blok E No.08\n\nCeritakan tantangan bisnis atau area mana yang ingin dioptimalkan? Kami akan buatkan strategi yang tepat! 📈🎯`;
        } else if (message.includes('tidak') || message.includes('no') || message.includes('nggak') || 
                    message.includes('engga') || message.includes('belum')) {
          setConversationContext(null); // Reset context
          return `Baik! 😊 Jika sewaktu-waktu memerlukan konsultasi manajemen bisnis, kami siap membantu. Ada layanan lain yang menarik bagi Anda?`;
        }
      }
      
      // Cari kata kunci yang cocok (prioritaskan yang lebih spesifik)
      const sortedKeys = Object.keys(faqData).sort((a, b) => b.length - a.length);
      for (const key of sortedKeys) {
        if (message.includes(key)) {
          const response = faqData[key];
          // Set context jika pertanyaan tentang audit
          if (key === 'audit' || key === 'audit laporan keuangan' || key === 'audit internal' || 
              key === 'review terbatas' || key === 'auditor') {
            setConversationContext('audit_consultation');
          }
          // Set context jika pertanyaan tentang accounting
          else if (key === 'akuntansi' || key === 'accounting' || key === 'accounting advisor' || 
                  key === 'laporan keuangan' || key === 'sistem akuntansi' || key === 'chart of accounts' ||
                  key === 'bagan akun' || key === 'standar akuntansi' || key === 'neraca' || 
                  key === 'laba rugi' || key === 'arus kas' || key === 'advisor') {
            setConversationContext('accounting_consultation');
          }
          // Set context jika pertanyaan tentang taxation
          else if (key === 'pajak' || key === 'taxation' || key === 'spt' || key === 'pph' || 
                  key === 'ppn' || key === 'pajak penghasilan' || key === 'pajak pertambahan nilai' ||
                  key === 'perencanaan pajak' || key === 'pemeriksaan pajak') {
            setConversationContext('taxation_consultation');
          }
          // Set context jika pertanyaan tentang PPL
          else if (key === 'pelatihan' || key === 'ppl' || key === 'pendidikan' || key === 'training' ||
                  key === 'in-house' || key === 'public training' || key === 'seminar' || key === 'workshop') {
            setConversationContext('ppl_consultation');
          }
          // Set context jika pertanyaan tentang business management
          else if (key === 'konsultasi' || key === 'business management' || key === 'manajemen' || 
                  key === 'manajemen bisnis' || key === 'perencanaan strategis' || key === 'strategi bisnis' ||
                  key === 'sop' || key === 'operasional' || key === 'optimalisasi') {
            setConversationContext('business_consultation');
          }
          return response;
        }
      }

      // Respons default jika tidak ada yang cocok
      const defaultResponses = [
        "Maaf, saya belum memahami pertanyaan Anda. 🤔 Bisa Anda coba dengan kata kunci seperti 'layanan', 'kontak', 'jam buka', atau 'harga'?",
        "Hmm, pertanyaan yang menarik! 💭 Untuk informasi lebih detail, silakan hubungi kami langsung di kap.jamasterjams@gmail.com atau gunakan quick reply di bawah.",
        "Saya masih belajar untuk memahami pertanyaan tersebut. 📚 Silakan pilih dari quick reply atau hubungi kami langsung untuk bantuan lebih lanjut!",
      ];
      
      return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    };

    const handleSendMessage = (messageText = null) => {
      const text = messageText || inputValue.trim();
      if (!text) return;

      // Add user message
      const userMessage = {
        id: Date.now(),
        text: text,
        sender: 'user',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
      setIsTyping(true);

      // Simulate typing delay
      setTimeout(() => {
        const botResponse = getBotResponse(text);
        const botMessage = {
          id: Date.now() + 1,
          text: botResponse,
          sender: 'bot',
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000 + Math.random() * 1000); // Random delay 1-2 seconds
    };

    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    };

    const formatTime = (date) => {
      return date.toLocaleTimeString('id-ID', { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
    };

    const handleQuickReply = (key) => {
      handleSendMessage(faqData[key] ? key : key);
    };

    return (
      <>
        {/* Fixed Chatbot Icon - Shows on specific pages */}
        {showFixedIcon && (
          <div className="fixed bottom-6 right-6 z-40">
            {!isOpen && (
              <div className="relative">
                <button
                  onClick={() => setIsOpen(true)}
                  className="group relative bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-75 blur-lg animate-pulse"></div>
                  
                  {/* Main icon */}
                  <div className="relative z-10">
                    <MessageCircle className="w-7 h-7" />
                  </div>

                  {/* Notification badge */}
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-bounce">
                    !
                  </div>

                  {/* Floating sparkles */}
                  <div className="absolute -top-1 -left-1 animate-spin">
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                  </div>

                  <div className="absolute -bottom-1 -right-1 animate-spin animate-reverse">
                    <Sparkles className="w-3 h-3 text-cyan-300" />
                  </div>

                  {/* Tooltip */}
                  <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl">
                    <div className="flex items-center space-x-2">
                      <Bot className="w-4 h-4" />
                      <span>Ada yang bisa kami bantu?</span>
                    </div>
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
                  </div>
                </button>

                {/* Floating text hint */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-center animate-pulse">
                  <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold shadow-md border border-blue-200">
                    💬 Chat Assistant
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Original Chat Widget Button - Shows on all pages */}
        <div className="fixed bottom-6 right-6 z-50">
          {!isOpen && !showFixedIcon && (
            <button
              onClick={() => setIsOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group animate-bounce"
            >
              <MessageCircle className="w-6 h-6" />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                !
              </div>
              {/* Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Butuh bantuan? Chat dengan kami!
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
              </div>
            </button>
          )}

          {/* Chat Window */}
          {isOpen && (
            <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 h-[500px] flex flex-col border border-gray-200 animate-in slide-in-from-bottom-4 duration-300">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">KAP Assistant</h3>
                    <p className="text-blue-100 text-xs flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      Online - Siap membantu
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white hover:bg-white/20 p-1 rounded-full transition-all duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[75%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                      <div
                        className={`px-4 py-2 rounded-2xl ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-md'
                            : 'bg-white text-gray-800 shadow-md rounded-bl-md border border-gray-200'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                      </div>
                      <div className={`flex items-center mt-1 space-x-1 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {message.sender === 'bot' ? (
                          <Bot className="w-3 h-3 text-blue-600" />
                        ) : (
                          <User className="w-3 h-3 text-gray-500" />
                        )}
                        <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 px-4 py-2 rounded-2xl rounded-bl-md shadow-md border border-gray-200">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {conversationContext === 'audit_consultation' ? (
                    <>
                      <button
                        onClick={() => handleQuickReply('ya')}
                        className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded-full border border-green-500 hover:border-green-600 transition-all duration-200 transform hover:scale-105"
                      >
                        ✅ Ya, Saya Tertarik
                      </button>
                      <button
                        onClick={() => handleQuickReply('tidak')}
                        className="bg-gray-500 hover:bg-gray-600 text-white text-xs px-3 py-1 rounded-full border border-gray-500 hover:border-gray-600 transition-all duration-200 transform hover:scale-105"
                      >
                        ❌ Tidak, Terima Kasih
                      </button>
                    </>
                  ) : conversationContext === 'accounting_consultation' ? (
                    <>
                      <button
                        onClick={() => handleQuickReply('ya')}
                        className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-full border border-blue-500 hover:border-blue-600 transition-all duration-200 transform hover:scale-105"
                      >
                        ✅ Ya, Saya Butuh Bantuan
                      </button>
                      <button
                        onClick={() => handleQuickReply('tidak')}
                        className="bg-gray-500 hover:bg-gray-600 text-white text-xs px-3 py-1 rounded-full border border-gray-500 hover:border-gray-600 transition-all duration-200 transform hover:scale-105"
                      >
                        ❌ Tidak, Terima Kasih
                      </button>
                    </>
                  ) : conversationContext === 'taxation_consultation' ? (
                    <>
                      <button
                        onClick={() => handleQuickReply('ya')}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-3 py-1 rounded-full border border-yellow-500 hover:border-yellow-600 transition-all duration-200 transform hover:scale-105"
                      >
                        ✅ Ya, Butuh Konsultasi Pajak
                      </button>
                      <button
                        onClick={() => handleQuickReply('tidak')}
                        className="bg-gray-500 hover:bg-gray-600 text-white text-xs px-3 py-1 rounded-full border border-gray-500 hover:border-gray-600 transition-all duration-200 transform hover:scale-105"
                      >
                        ❌ Tidak, Terima Kasih
                      </button>
                    </>
                  ) : conversationContext === 'ppl_consultation' ? (
                    <>
                      <button
                        onClick={() => handleQuickReply('ya')}
                        className="bg-purple-500 hover:bg-purple-600 text-white text-xs px-3 py-1 rounded-full border border-purple-500 hover:border-purple-600 transition-all duration-200 transform hover:scale-105"
                      >
                        ✅ Ya, Tertarik Training
                      </button>
                      <button
                        onClick={() => handleQuickReply('tidak')}
                        className="bg-gray-500 hover:bg-gray-600 text-white text-xs px-3 py-1 rounded-full border border-gray-500 hover:border-gray-600 transition-all duration-200 transform hover:scale-105"
                      >
                        ❌ Tidak, Terima Kasih
                      </button>
                    </>
                  ) : conversationContext === 'business_consultation' ? (
                    <>
                      <button
                        onClick={() => handleQuickReply('ya')}
                        className="bg-indigo-500 hover:bg-indigo-600 text-white text-xs px-3 py-1 rounded-full border border-indigo-500 hover:border-indigo-600 transition-all duration-200 transform hover:scale-105"
                      >
                        ✅ Ya, Perlu Konsultasi Bisnis
                      </button>
                      <button
                        onClick={() => handleQuickReply('tidak')}
                        className="bg-gray-500 hover:bg-gray-600 text-white text-xs px-3 py-1 rounded-full border border-gray-500 hover:border-gray-600 transition-all duration-200 transform hover:scale-105"
                      >
                        ❌ Tidak, Terima Kasih
                      </button>
                    </>
                  ) : (
                    quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply.key)}
                      className="bg-white hover:bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full border border-blue-200 hover:border-blue-300 transition-all duration-200 transform hover:scale-105"
                    >
                      {reply.text}
                    </button>
                    ))
                  )}
                </div>
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ketik pertanyaan Anda..."
                    className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={isTyping}
                  />
                  <button
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-400 text-white p-2 rounded-full transition-all duration-200 disabled:cursor-not-allowed transform hover:scale-105 disabled:transform-none"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Contact Links */}
                <div className="flex justify-center space-x-3 mt-3 pt-3 border-t border-gray-100">
                  <a
                    href="tel:(021)89774251"
                    className="flex items-center space-x-1 text-xs text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Telepon</span>
                  </a>
                  <a
                    href="mailto:kap.jamasterjams@gmail.com"
                    className="flex items-center space-x-1 text-xs text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="w-3 h-3" />
                    <span>Email</span>
                  </a>
                  <a
                    href="https://www.instagram.com/kap_jamastersimanullang/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-xs text-gray-600 hover:text-pink-600 transition-colors"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  };

  export default Chatbot; 