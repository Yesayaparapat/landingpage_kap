import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { FaEnvelope, FaInstagram } from 'react-icons/fa';

function HubungiKami() {
  const [isHoursExpanded, setIsHoursExpanded] = useState(false);

  const scheduleData = [
    { day: 'Senin', hours: '08.00-17.00' },
    { day: 'Selasa', hours: '08.00-17.00' },
    { day: 'Rabu', hours: '08.00-17.00' },
    { day: 'Kamis', hours: '08.00-17.00' },
    { day: 'Jumat', hours: '08.00-17.00' },
    { day: 'Sabtu', hours: 'Tutup' },
    { day: 'Minggu', hours: 'Tutup' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Hubungi Kami
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami siap melayani Anda dengan sepenuh hati. Kunjungi kantor kami atau hubungi melalui kontak di bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl flex-shrink-0 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Alamat Kantor</h3>
                  <p className="text-gray-600 leading-relaxed text-base mb-3">
                    Ruko Cikarang Central City Blok E No.08<br />
                    Ciantra, Cikarang Sel., Kabupaten Bekasi<br />
                    Jawa Barat 17530
                  </p>
                  <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
                    <p className="text-sm text-blue-700 font-medium">
                      📍 Kode Plus: M459+F9 Ciantra, Kabupaten Bekasi, Jawa Barat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl flex-shrink-0 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Jam Buka</h3>
                  
                  {/* Current Status */}
                  <div className="mb-6">
                    <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse shadow-lg"></div>
                      Buka Sekarang
                    </div>
                  </div>

                  {/* Collapsible Schedule */}
                  <button
                    onClick={() => setIsHoursExpanded(!isHoursExpanded)}
                    className="flex items-center justify-between w-full text-left bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-xl p-4 transition-all duration-300 border border-gray-200 hover:border-gray-300"
                  >
                    <span className="font-semibold text-gray-700">Lihat Jadwal Lengkap</span>
                    <div className="bg-white p-1 rounded-full shadow-sm">
                      {isHoursExpanded ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                  </button>

                  {isHoursExpanded && (
                    <div className="mt-4 space-y-3 animate-in slide-in-from-top-2 duration-300">
                      {scheduleData.map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100">
                          <span className="font-semibold text-gray-700">{item.day}</span>
                          <span className={`font-bold px-3 py-1 rounded-full text-sm ${
                            item.hours === 'Tutup' 
                              ? 'text-red-600 bg-red-50 border border-red-200' 
                              : 'text-green-600 bg-green-50 border border-green-200'
                          }`}>
                            {item.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl w-fit mx-auto mb-6">
                  <Calendar className="w-12 h-12 mx-auto text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Ingin Berkunjung?</h3>
                <p className="text-blue-100 mb-6 text-base leading-relaxed">
                  Kunjungi kantor kami untuk pelayanan terbaik dan konsultasi langsung dengan tim ahli kami.
                </p>
                <button 
                  onClick={() => {
                    const address = "Ruko Cikarang Central City Blok E No.08, Ciantra, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530";
                    const encodedAddress = encodeURIComponent(address);
                    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
                  }}
                  className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base"
                >
                  🗺️ Dapatkan Petunjuk Arah
                </button>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 p-6 text-white">
                <h3 className="text-xl font-bold flex items-center mb-2">
                  <div className="bg-white/20 p-2 rounded-full mr-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  Lokasi Kantor
                </h3>
                <p className="text-blue-100 text-base">📍 Ruko Cikarang Central City</p>
              </div>
              
              <div className="relative">
                <div 
                  className="relative cursor-pointer group overflow-hidden"
                  onClick={() => {
                    const address = "Ruko Cikarang Central City Blok E No.08, Ciantra, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530";
                    const encodedAddress = encodeURIComponent(address);
                    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5234567890123!2d107.1234567!3d-6.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1b2c3d4e5f60%3A0x1234567890abcdef!2sRuko%20Cikarang%20Central%20City!5e0!3m2!1sen!2sid!4v1234567890123"
                    width="100%"
                    height="400"
                    className="w-full transition-all duration-500 group-hover:brightness-110 group-hover:contrast-110"
                    style={{ border: 0, pointerEvents: 'none' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  
                  {/* Hover Overlay dengan efek yang lebih menarik */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-500"></div>
                  
                  {/* Click indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <MapPin className="w-8 h-8 text-blue-600 animate-bounce" />
                    </div>
                  </div>
                </div>
                
                {/* Overlay informasi dengan desain yang lebih menarik */}
                <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800">
                          Cikarang Central City, Bekasi
                        </p>
                        <p className="text-xs text-gray-600">
                          Klik peta untuk membuka di Google Maps
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl mb-1">🚗</div>
                    <p className="text-sm font-semibold text-gray-700">Mudah Dijangkau</p>
                    <p className="text-xs text-gray-500">Akses dari berbagai arah</p>
                  </div>
                  <div className="text-center p-3 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl mb-1">🅿️</div>
                    <p className="text-sm font-semibold text-gray-700">Parkir Luas</p>
                    <p className="text-xs text-gray-500">Area parkir tersedia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA dengan desain yang lebih menarik */}
        <div className="mt-16">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Hubungi Kami Sekarang</h3>
              <p className="text-gray-600">Pilih cara yang paling nyaman untuk Anda</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:kap.jamasterjams@gmail.com"
                className="group bg-gradient-to-br from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[140px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-red-200"
              >
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-2xl mb-4 group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300 shadow-lg">
                  <FaEnvelope className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-sm text-red-600 font-medium mb-1">Email</div>
                  <div className="font-bold text-lg text-gray-800">kap.jamasterjams@gmail.com</div>
                  <div className="text-xs text-gray-500 mt-1">Kirim email untuk pertanyaan detail</div>
                </div>
              </a>
              
              <a
                href="https://www.instagram.com/kap_jamastersimanullang/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[140px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-pink-200"
              >
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-4 rounded-2xl mb-4 group-hover:from-pink-600 group-hover:to-pink-700 transition-all duration-300 shadow-lg">
                  <FaInstagram className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-sm text-pink-600 font-medium mb-1">Instagram</div>
                  <div className="font-bold text-lg text-gray-800">@kap_jamastersimanullang</div>
                  <div className="text-xs text-gray-500 mt-1">Follow untuk update terbaru</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HubungiKami;