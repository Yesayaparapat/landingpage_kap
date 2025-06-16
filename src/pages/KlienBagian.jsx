import React, { useState } from 'react';
import {
  Shirt, Ship, Heart, Users, GraduationCap, Shield, Utensils, Printer, MapPin,
  Handshake, ShoppingCart, Car, Factory, Wheat, Building2, HardHat, Fuel, Beef,
  Radio, Package, UserCheck, Truck, Recycle, Home, Landmark, ArrowLeft
} from 'lucide-react';

function KlienBagian() {
  const [selectedSector, setSelectedSector] = useState(null);
  
  const sectorIcons = {
    "Tekstil": Shirt,
    "Manufaktur": Factory,
    "Telekomunikasi": Radio,
    "Konstruksi": HardHat,
    "Hotel dan Restoran": Utensils,
    "Retail": ShoppingCart,
    "Asuransi": Shield,
    "Koperasi": Handshake,
    "Perbankan": Landmark,
    "Pengolahan Limbah": Recycle,
    "Jasa Tenaga Kerja Indonesia": UserCheck,
    "Migas": Fuel,
    "Perkapalan": Ship,
    "Pergudangan": Package,
    "Pertanian": Wheat,
    "Properti/Perumahan": Home,
    "Dealer": Car,
    "Perdagangan": Building2,
    "Transportasi": Truck,
    "Yayasan": Users,
    "Tur dan Travel": MapPin
  };

  const clientData = {
    "Tekstil": [
      "PT Sinar Gaya Busana",
      "PT Seyang Activewear",
      "PT Tros Garment",
      "PT Buma Apparel Industry",
      "PT Doosan Cipta Busana Jaya",
      "PT Doosan Sinar Sukabumi",
      "PT HJS Indo Invest",
      "PT Hwan Indonesia",
      "PT Samjin Brothread Indonesia",
      "PT SH Garment",
      "PT Jung Hyun",
      "PT Yoon Young Shell Button",
      "PT Greentex Indonesia Utama II",
      "PT Uwu Jump Indonesia",
      "PT Dae Young Textile",
      "PT Samheung Indonesia",
      "PT Cahaya Sunny Indonesia",
      "PT Sejin Global Indonesia",
      "PT Doosan Dunia Busana",
      "PT Doosan Jaya Sukabumi",
      "PT Kuralon Indah Sejahtera",
      "PT Tri Pupajaya",
      "PT Yuni Internasional"
    ],
    "Manufaktur": [
      "PT Daux Cosmetic",
      "PT Dong Jin Indonesia",
      "PT SN Unggul",
      "PT Doosan Sinar Sukabumi",
      "PT Sung Shin Best Indonesia",
      "PT Chukyo Spring Indonesia",
      "PT HJS Indo Invest",
      "PT Celxpert Energy Indonesia",
      "PT Seah Precision",
      "PT Hwan Indonesia",
      "PT Assems Indonesia",
      "PT Samjin Brothread Indonesia",
      "PT Yong Shin Indonesia",
      "PT Kurnia Tirta Sembada",
      "PT SH Garment",
      "PT Shell Works",
      "PT Slickbar Indonesia",
      "PT Jung Hyun",
      "PT Yoon Young Shell Button",
      "PT Nutech Industries Indonesia",
      "PT Surya Mulia Gemelanggeng",
      "PT Greentex Indonesia Utama II",
      "PT Daewon Eco Industries",
      "PT Daiichi Kinzoku Indonesia",
      "PT Galic Artabahari",
      "PT Seongjin Engineering Indonesia",
      "Dexter Timber Perkasa Indonesia",
      "PT Oro Plastindo",
      "PT Valvindo Megah",
      "PT Taiki Seiki Indonesia",
      "PT Crystal Mandiri",
      "PT Konvertindo Mitra Lestari",
      "PT Takahashi Spring Indonesia",
      "PT Dongsuh",
      "PT Orienta Warna Sempurna"
    ],
    "Telekomunikasi": [
      "PT KJ Tech Indonesia",
      "PT Mitranova",
      "PT Integricor Prima Nusantara",
      "PT Menara Inti Kreasi Indonesia"
    ],
    "Konstruksi": [
      "PT Bayu Surya Bakti Konstruksi",
      "PT YND Planning Indonesia",
      "PT Samcon",
      "PT Indochacon Utama",
      "PT Cemara Hijau Pratama",
      "PT Hyundai Inti Development",
      "PT East Java Development",
      "PT Epiterma Mas Indonesia",
      "PT Epiterma Mas Konstruksi",
      "PT Ruas Utama Jaya",
      "PT Artelindo Wiratama"
    ],
    "Hotel dan Restoran": [
      "PT Pan Pacific Jakarta",
      "PT Bighot Restaurant Indonesia"
    ],
    "Retail": [
      "PT Youme Indonesia",
      "PT Myvenus Network Indonesia"
    ],
    "Asuransi": [
      "PT Berdikari Insurance Indonesia"
    ],
    "Koperasi": [
      "Koperasi Konsumen Tri Sakti"
    ],
    "Perbankan": [
      "PT ING Internasional"
    ],
    "Pengolahan Limbah": [
      "PT Jasa Alam Sejahtera",
      "PT OSCT Indonesia",
      "PT Greentex Indonesia Utama II",
      "PT Anugerah Hijau Abadi"
    ],
    "Jasa Tenaga Kerja Indonesia": [
      "PT MTWO Setia Mandiri",
      "PT Third Base"
    ],
    "Migas": [
      "PT Shell Works",
      "PT OSCT Indonesia",
      "PT Baratama Putra Perkasa",
      "PT Bumi Laksana Sejati"
    ],
    "Perkapalan": [
      "PT OSCT Indonesia",
      "PT East Java Development"
    ],
    "Pergudangan": [
      "PT Nutech Storage Indonesia",
      "PT Mitra Sukses Jayatama",
      "PT East Java Development"
    ],
    "Pertanian": [
      "PT Cemara Hijau Pratama",
      "PT Kelawit Hutani Indonesia",
      "PT Binadaya Bentala",
      "PT Riau Abadi Lestari",
      "PT Rimba Mandau Lestari",
      "PT Asia Tani Persada",
      "PT Wanakerta Ekalestari"
    ],
    "Properti/Perumahan": [
      "PT Hyundai Inti Development",
      "PT Buana Megatama Jaya",
      "PT Wira Indah Persada",
      "PT Megariamas Sentosa"
    ],
    "Dealer": [
      "PT Sugihara Hyundai Automotive"
    ],
    "Perdagangan": [
      "PT Citra Cemerlang Sejahtera",
      "PT Manggala Cipta Persada",
      "PT Jaya Makmur Kemilau",
      "PT Sanwa Trading Indonesia",
      "PT Darma Abadi Mandiri",
      "PT Prakasa Jaya Sentosa"
    ],
    "Transportasi": [
      "PT Ciptatrans Abadi"
    ],
    "Yayasan": [
      "Yayasan Duranno Indonesia"
    ],
    "Tur dan Travel": [
      "PT Vizitrip Global Tour"
    ]
  };

  const handleSectorClick = (sector) => {
    setSelectedSector(sector);
  };

  const handleBackClick = () => {
    setSelectedSector(null);
  };

  // Jika sektor dipilih, tampilkan detail sektor
  if (selectedSector) {
    const IconComponent = sectorIcons[selectedSector] || Factory;
    const companies = clientData[selectedSector] || [];

    return (
      <div className="max-w-6xl mx-auto p-6 bg-white min-h-screen">
        <div className="mb-6">
          <button
            onClick={handleBackClick}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Kembali ke Daftar Sektor</span>
          </button>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{selectedSector}</h1>
              <p className="text-gray-600">Total: {companies.length} perusahaan</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-4 hover:bg-blue-50 hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-blue-300"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-800 font-medium text-sm leading-relaxed">
                  {company}
                </span>
              </div>
            </div>
          ))}
        </div>

        {companies.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">Belum ada data perusahaan untuk sektor ini</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Daftar Klien Berdasarkan Sektor</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Object.entries(clientData).map(([sector, companies]) => {
          const IconComponent = sectorIcons[sector] || Factory;
          return (
            <button
              key={sector}
              onClick={() => handleSectorClick(sector)}
              className="group flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-2xl hover:scale-[1.03] hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-100 border border-gray-100 hover:border-blue-300 cursor-pointer transform hover:-translate-y-3 transition-all duration-500 ease-out text-left"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-indigo-600 group-hover:scale-125 group-hover:rotate-[15deg] transition-all duration-500 ease-out shadow-sm group-hover:shadow-lg">
                <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-all duration-500 ease-out group-hover:scale-110" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-gray-700 font-medium text-sm group-hover:text-blue-800 group-hover:font-semibold transition-all duration-300 ease-out leading-tight group-hover:translate-x-1 block">
                  {sector}
                </span>
                <span className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors">
                  {companies.length} perusahaan
                </span>
              </div>
            </button>
          );
        })}
      </div>
      
      <div className="mt-8 text-center">
        <div className="bg-blue-100 rounded-lg p-4 inline-block">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Ringkasan</h3>
          <p className="text-blue-700">
            Total Klien: <span className="font-bold">{Object.values(clientData).flat().length}</span> perusahaan
          </p>
          <p className="text-blue-700">
            Tersebar di <span className="font-bold">{Object.keys(clientData).length}</span> sektor industri
          </p>
          <p className="text-sm text-blue-600 mt-2">
            Klik pada sektor untuk melihat daftar klien
          </p>
        </div>
      </div>
    </div>
  );
}

export default KlienBagian;