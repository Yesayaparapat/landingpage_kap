import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';


function HubungiKami() {
  const [isHoursExpanded, setIsHoursExpanded] = useState(false);

  const scheduleData = [
    { day: 'Kamis', hours: '08.00-17.00' },
    { day: 'Jumat', hours: '08.00-17.00' },
    { day: 'Sabtu', hours: 'Tutup' },
    { day: 'Minggu', hours: 'Tutup' },
    { day: 'Senin', hours: '08.00-17.00' },
    { day: 'Selasa', hours: '08.00-17.00' },
    { day: 'Rabu', hours: '08.00-17.00' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-29 lg:pt-25 px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Kami siap melayani Anda dengan sepenuh hati. Kunjungi kantor kami atau hubungi melalui kontak di bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <div className="w-full space-y-6 lg:space-y-8">
            {/* Address Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">Alamat Kantor</h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    Ruko Cikarang Central City Blok E No.08<br />
                    Ciantra, Cikarang Sel., Kabupaten Bekasi<br />
                    Jawa Barat 17530
                  </p>
                  <p className="text-xs lg:text-sm text-blue-600 mt-2 font-medium break-words">
                    Kode Plus: M459+F9 Ciantra, Kabupaten Bekasi, Jawa Barat
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">Telepon</h3>
                  <div className="flex flex-col space-y-1">
                    <a 
                      href="tel:(021)89774251" 
                      className="text-green-600 text-base lg:text-lg font-semibold hover:text-green-700 transition-colors"
                    >
                      (021) 89774251
                    </a>
                    <a 
                      href="tel:+622189774253" 
                      className="text-green-600 text-base lg:text-lg font-semibold hover:text-green-700 transition-colors"
                    >
                      (021) 89774253
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">Jam Buka</h3>
                  
                  {/* Current Status */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      Buka Sekarang
                    </span>
                  </div>

                  {/* Collapsible Schedule */}
                  <button
                    onClick={() => setIsHoursExpanded(!isHoursExpanded)}
                    className="flex items-center justify-between w-full text-left bg-gray-50 hover:bg-gray-100 rounded-lg p-3 transition-colors"
                  >
                    <span className="font-medium text-gray-700 text-sm lg:text-base">Lihat Jadwal Lengkap</span>
                    {isHoursExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>

                  {isHoursExpanded && (
                    <div className="mt-4 space-y-2">
                      {scheduleData.map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-50">
                          <span className="font-medium text-gray-700 text-sm lg:text-base">{item.day}</span>
                          <span className={`font-semibold text-sm lg:text-base ${
                            item.hours === 'Tutup' ? 'text-red-600' : 'text-green-600'
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
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 lg:p-8 text-white">
              <div className="text-center">
                <Calendar className="w-10 lg:w-12 h-10 lg:h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-lg lg:text-xl font-bold mb-2">Ingin Berkunjung?</h3>
                <p className="text-blue-100 mb-4 text-sm lg:text-base">
                  Kunjungi kantor kami untuk pelayanan terbaik dan konsultasi langsung dengan tim ahli kami.
                </p>
                <button 
                  onClick={() => {
                    const address = "Ruko Cikarang Central City Blok E No.08, Ciantra, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530";
                    const encodedAddress = encodeURIComponent(address);
                    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
                  }}
                  className="bg-white text-blue-600 px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
                >
                  Dapatkan Petunjuk Arah
                </button>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="w-full lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 lg:p-6 text-white">
                <h3 className="text-lg lg:text-xl font-bold flex items-center">
                  <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                  Lokasi Kantor
                </h3>
                <p className="text-blue-100 mt-1 text-sm lg:text-base">Ruko Cikarang Central City</p>
              </div>
              
              <div className="relative">
                <div 
                  className="relative cursor-pointer group"
                  onClick={() => {
                    const address = "Ruko Cikarang Central City Blok E No.08, Ciantra, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530";
                    const encodedAddress = encodeURIComponent(address);
                    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5234567890123!2d107.1234567!3d-6.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1b2c3d4e5f60%3A0x1234567890abcdef!2sRuko%20Cikarang%20Central%20City!5e0!3m2!1sen!2sid!4v1234567890123"
                    width="100%"
                    height="300"
                    className="lg:h-96 w-full transition-all duration-300 group-hover:brightness-110"
                    style={{ border: 0, pointerEvents: 'none' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  
                  {/* Overlay untuk click interaction */}
                  <div className="absolute inset-0 bg-transparent hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600 text-white px-3 lg:px-4 py-2 rounded-full font-semibold shadow-lg text-sm lg:text-base">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Dapatkan Petunjuk Arah
                    </div>
                  </div>
                </div>
                
                {/* Overlay informasi */}
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <p className="text-sm text-gray-700 font-medium">
                      📍 Cikarang Central City, Bekasi
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Klik peta untuk membuka petunjuk arah di Google Maps
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 lg:p-6 bg-gray-50">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Mudah Dijangkau</p>
                    <p className="text-xs text-gray-500">Akses dari berbagai arah</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-700">Parkir Luas</p>
                    <p className="text-xs text-gray-500">Area parkir tersedia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 lg:mt-16">
          <div className="w-full max-w-7xl mx-auto px-4 py-6 bg-white rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <a
                href="tel:(021)89774251"
                className="group bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center h-full min-h-[120px] transform transition-transform duration-300 hover:scale-105 hover:bg-green-100"
              >
                <div className="bg-green-100 p-2 rounded-xl mb-2 group-hover:bg-green-200 transition-all duration-300">
                  <FaPhone className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-0.5">Telepon</div>
                  <div className="font-bold text-base text-gray-800">(021) 89774251<br/>(021) 89774251</div>
                </div>
              </a>
              <a
                href="mailto:kap.jamasterjams@gmail.com"
                className="group bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center h-full min-h-[120px] transform transition-transform duration-300 hover:scale-105 hover:bg-red-100"
              >
                <div className="bg-red-100 p-2 rounded-xl mb-2 group-hover:bg-red-200 transition-all duration-300">
                  <FaEnvelope className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-0.5">Email</div>
                  <div className="font-bold text-base text-gray-800">kap.jamasterjams@gmail.com</div>
                </div>
              </a>
              <a
                href="https://www.instagram.com/kap_jamastersimanullang/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center h-full min-h-[120px] transform transition-transform duration-300 hover:scale-105 hover:bg-pink-100"
              >
                <div className="bg-pink-100 p-2 rounded-xl mb-2 group-hover:bg-pink-200 transition-all duration-300">
                  <FaInstagram className="w-8 h-8 text-pink-600" />
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-0.5">Instagram</div>
                  <div className="font-bold text-base text-gray-800">@kap_jamastersimanullang</div>
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