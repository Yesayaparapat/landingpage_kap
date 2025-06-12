import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import LogoKap from "../assets/logo kap.png";

const Navbar = ({ textColor = 'gray', bgColor = 'bg-white md:bg-transparent', scrollFunctions }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Effect untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const halfPage = windowHeight / 2;
      
      // Jika scroll lebih dari setengah halaman, navbar menjadi fixed dengan bg putih
      setIsScrolled(scrollPosition > halfPage);
    };

    // Tambahkan event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function untuk menghapus event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Handle navigasi - mendukung scroll dan routing
  const handleNavigation = (sectionName) => {
    // Jika ada scrollFunctions dan kita di halaman utama, gunakan scroll
    if (scrollFunctions && scrollFunctions[sectionName] && location.pathname === '/') {
      scrollFunctions[sectionName]();
      setIsMenuOpen(false);
      return;
    }

    // Jika tidak ada scrollFunctions atau bukan di halaman utama, navigate ke route yang sesuai
    switch (sectionName) {
      case 'beranda':
        navigate('/');
        break;
      case 'profil':
        if (location.pathname === '/') {
          // Jika di halaman utama, scroll ke section
          if (scrollFunctions && scrollFunctions[sectionName]) {
            scrollFunctions[sectionName]();
          }
        } else {
          // Jika di halaman lain, kembali ke halaman utama dengan hash
          navigate('/#profil');
        }
        break;
      case 'tentang':
        if (location.pathname === '/') {
          // Jika di halaman utama, scroll ke section
          if (scrollFunctions && scrollFunctions[sectionName]) {
            scrollFunctions[sectionName]();
          }
        } else {
          // Jika di halaman lain, kembali ke halaman utama dengan hash
          navigate('/#tentang');
        }
        break;
      case 'layanan':
        if (location.pathname === '/') {
          if (scrollFunctions && scrollFunctions[sectionName]) {
            scrollFunctions[sectionName]();
          }
        } else {
          navigate('/#layanan');
        }
        break;
      case 'legal':
        if (location.pathname === '/') {
          if (scrollFunctions && scrollFunctions[sectionName]) {
            scrollFunctions[sectionName]();
          }
        } else {
          navigate('/#legal');
        }
        break;
      case 'klien':
        if (location.pathname === '/') {
          if (scrollFunctions && scrollFunctions[sectionName]) {
            scrollFunctions[sectionName]();
          }
        } else {
          navigate('/#klien');
        }
        break;
      case 'hubungi':
        if (location.pathname === '/') {
          if (scrollFunctions && scrollFunctions[sectionName]) {
            scrollFunctions[sectionName]();
          }
        } else {
          navigate('/#hubungi');
        }
        break;
      default:
        break;
    }
    
    setIsMenuOpen(false);
  };

  const menuItems = [   
    { name: 'PROFIL', section: 'profil' },
    { 
      name: 'TENTANG KAMI', 
      section: 'tentang',
    },
    { name: 'LAYANAN', section: 'layanan' },
    { name: 'LEGALITAS', section: 'legal' },
    { name: 'KLIEN', section: 'klien' },
    { name: 'HUBUNGI KAMI', section: 'hubungi' }
  ];

  // Dynamic classes berdasarkan scroll position
  const navbarBg = isScrolled ? 'bg-white shadow-lg' : 'bg-transparent';
  const textColorClass = isScrolled ? 'text-gray-800' : 'text-white';
  const logoTextColor = isScrolled ? 'text-gray-800' : 'text-white';
  const brandTextColor = isScrolled ? 'text-blue-700' : 'text-blue-700';

  return (
    <>
      {/* Desktop: Navbar yang selalu ada - akan hilang saat scroll */}
      <nav className={`hidden lg:block absolute top-0 z-50 w-full transition-all duration-300 ${!isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'} bg-transparent`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div 
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => handleNavigation('beranda')}
              >
                {/* Logo Container */}
                <div className="w-20 h-20 flex items-center justify-center">
                  <img src={LogoKap} className="w-20 h-20 object-contain" alt="Logo KAP Jamaster Simanullang" />
                </div>
                
                {/* Text Container */}
                <div className="flex flex-col">
                  <div className="text-sm font-bold leading-tight uppercase tracking-wide transition-colors duration-300 text-white">
                    KANTOR AKUNTAN PUBLIK
                  </div>
                  <div className="text-lg font-bold leading-tight transition-colors duration-300 text-blue-700">
                    JAMASTER SIMANULLANG
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.dropdown ? (
                    <button
                      className="flex items-center px-3 py-2 text-sm text-white hover:text-blue-400 hover:bg-gray-50 hover:bg-opacity-10 rounded-md transition-all duration-300"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 transform transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <button
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                      className="flex items-center px-3 py-2 text-sm text-white hover:text-blue-400 hover:bg-gray-50 hover:bg-opacity-10 rounded-md transition-all duration-300"
                      onClick={() => handleNavigation(item.section)}
                    >
                      {item.name}
                    </button>
                  )}
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                      <div className="py-1">
                        {item.dropdown.map((subItem, subIndex) => (
                          <button
                            key={subIndex}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                            onClick={() => handleNavigation(subItem.section)}
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop: Fixed Navbar yang muncul saat scroll */}
      <nav className={`hidden lg:block fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'} ${navbarBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div 
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => handleNavigation('beranda')}
              >
                {/* Logo Container */}
                <div className="w-20 h-20 flex items-center justify-center">
                  <img src={LogoKap} className="w-20 h-20 object-contain" alt="Logo KAP Jamaster Simanullang" />
                </div>
                
                {/* Text Container */}
                <div className="flex flex-col">
                  <div className={`text-sm font-bold leading-tight uppercase tracking-wide transition-colors duration-300 ${logoTextColor}`}>
                    KANTOR AKUNTAN PUBLIK
                  </div>
                  <div className={`text-lg font-bold leading-tight transition-colors duration-300 ${brandTextColor}`}>
                    JAMASTER SIMANULLANG
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.dropdown ? (
                    <button
                      className={`flex items-center px-3 py-2 text-sm hover:text-blue-400 rounded-md transition-all duration-300 ${textColorClass} ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-gray-50 hover:bg-opacity-10'}`}
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 transform transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <button
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                      className={`flex items-center px-3 py-2 text-sm hover:text-blue-400 rounded-md transition-all duration-300 ${textColorClass} ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-gray-50 hover:bg-opacity-10'}`}
                      onClick={() => handleNavigation(item.section)}
                    >
                      {item.name}
                    </button>
                  )}
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                      <div className="py-1">
                        {item.dropdown.map((subItem, subIndex) => (
                          <button
                            key={subIndex}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                            onClick={() => handleNavigation(subItem.section)}
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile: Navbar biasa yang selalu fixed */}
      <nav className="lg:hidden fixed top-0 z-50 w-full bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Mobile */}
            <div className="flex-shrink-0 flex items-center">
              <div 
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => handleNavigation('beranda')}
              >
                {/* Logo Container */}
                <div className="w-20 h-20 flex items-center justify-center">
                  <img src={LogoKap} className="w-20 h-20 object-contain" alt="Logo KAP Jamaster Simanullang" />
                </div>
                
                {/* Text Container */}
                <div className="flex flex-col">
                  <div className="text-sm font-bold leading-tight uppercase tracking-wide text-gray-800">
                    KANTOR AKUNTAN PUBLIK
                  </div>
                  <div className="text-lg font-bold leading-tight text-blue-700">
                    JAMASTER SIMANULLANG
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-800 hover:text-blue-400 hover:bg-gray-100 transition-all duration-300"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white border-t`}>
          <div className="px-4 py-3 space-y-2">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <button
                    className="flex items-center justify-between w-full px-3 py-2 text-left text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <button
                    className="flex items-center justify-between w-full px-3 py-2 text-left text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                    onClick={() => handleNavigation(item.section)}
                  >
                    {item.name}
                  </button>
                )}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="pl-4 py-2 space-y-1">
                    {item.dropdown.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                        onClick={() => handleNavigation(subItem.section)}
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;