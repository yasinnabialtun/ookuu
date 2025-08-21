// Header.tsx
import React, { useState, useEffect } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";

interface HeaderProps {
  // Props removed as contact now goes to footer
}

const menuItems = [
  { name: "Anasayfa", path: "/" },
  { name: "Eğitimler", path: "/#egitimler", hasDropdown: true },
  { name: "Hakkımızda", path: "/hakkimizda" },
  { name: "Blog", path: "/blog" },
  { name: "İletişim", path: "/#footer", isAnchor: true },
];

const educationItems = [
  { name: "Yaratıcı Dijital Tasarım", path: "/YaraticiDijitalTasarim" },
  { name: "Yapay Zeka Teknolojileri", path: "/YapayZekaTeknolojileri" },
  { name: "Dijital Pazarlama Stratejileri", path: "/DijitalPazarlamaStratejileri" },
  { name: "Tüm Eğitimler", path: "/shop" },
];

const Header: React.FC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [educationDropdownOpen, setEducationDropdownOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [headerTransform, setHeaderTransform] = useState(0);
  const [showCalendlyModal, setShowCalendlyModal] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setScrollY(currentScrollY);
          
          // Header'ı scroll ile birlikte hareket ettir
          // Scroll miktarına göre transform hesapla
          const maxScroll = 200; // 200px'de tamamen gizli olsun
          const transform = Math.min(currentScrollY / maxScroll, 1);
          setHeaderTransform(transform);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // İlk yüklemede scroll pozisyonunu al
    const initialScrollY = window.scrollY;
    setScrollY(initialScrollY);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calendly'nin yüklenmesini kontrol et
  useEffect(() => {
    const checkCalendly = () => {
      if (window.Calendly) {
        console.log('Calendly yüklendi');
      } else {
        setTimeout(checkCalendly, 100);
      }
    };
    
    checkCalendly();
  }, []);

      // Calendly inline widget'ını yükle
  useEffect(() => {
    if (showCalendlyModal && window.Calendly) {
      // Modal açıldığında Calendly widget'ını yeniden yükle
      setTimeout(() => {
        if (window.Calendly) {
          // Önce mevcut widget'ı temizle
          const existingWidget = document.querySelector('.calendly-inline-widget iframe');
          if (existingWidget) {
            existingWidget.remove();
          }
          
          // Dil ayarını zorla
          const url = new URL('https://calendly.com/yasinnabialtun/gelin-tanisalim');
          url.searchParams.set('hide_event_type_details', '1');
          url.searchParams.set('hide_gdpr_banner', '1');
          url.searchParams.set('locale', 'tr_TR');
          url.searchParams.set('text_color', 'ffffff');
          url.searchParams.set('primary_color', '000000');
          url.searchParams.set('utm_source', 'ookuuakademi');
          url.searchParams.set('lang', 'tr');
          
          window.Calendly.initInlineWidget({
            url: url.toString(),
            parentElement: document.querySelector('.calendly-inline-widget'),
            minWidth: '320px',
            height: '100%'
          });
        }
      }, 100);
    }
  }, [showCalendlyModal]);

  // ESC tuşu ile modal'ı kapat
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showCalendlyModal) {
        closeCalendlyModal();
      }
    };

    if (showCalendlyModal) {
      document.addEventListener('keydown', handleEscKey);
      // Body scroll'u engelle
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [showCalendlyModal]);

  const handleContactClick = () => {
    setMenuOpen(false);
    
    // Footer'a yönlendir
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const closeCalendlyModal = () => {
    setShowCalendlyModal(false);
  };

  const handleEducationMouseEnter = () => {
    setEducationDropdownOpen(true);
  };

  const handleEducationMouseLeave = () => {
    // Daha uzun gecikme ekleyelim
    setTimeout(() => {
      setEducationDropdownOpen(false);
    }, 300);
  };

  // Scroll miktarına göre opacity hesapla
  // const maxScroll = 50; // 50px'de tam şeffaf olacak
  // const opacity = Math.min(scrollY / maxScroll, 1); // Currently unused

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-[9998] transition-transform duration-100 ease-out"
      style={{
        backgroundColor: scrollY > 20 ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
        backdropFilter: scrollY > 20 ? 'blur(15px)' : 'none',
        boxShadow: scrollY > 20 ? '0 8px 32px rgba(0, 0, 0, 0.4)' : 'none',
        borderBottom: scrollY > 20 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        transform: `translateY(-${headerTransform * 100}%)`
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 py-4">
        <div className="bg-[#121212] bg-opacity-40 backdrop-blur-sm shadow-lg rounded-[33px] px-6 py-4 flex items-center font-inter">
          <div className="mr-auto flex items-center">
            <img
              src="/images/ookuulogo.png"
              alt="Ooku Akademi Logo"
              className="h-6 w-auto object-contain select-none"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex flex-1 justify-center gap-8 text-white font-semibold text-sm">
            {menuItems.map(({ name, path, hasDropdown, isAnchor }, idx) => (
              <div key={idx} className="relative">
                {hasDropdown ? (
                  <div
                    className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors relative"
                    onMouseEnter={handleEducationMouseEnter}
                    onMouseLeave={handleEducationMouseLeave}
                  >
                    {name}
                    <HiChevronDown className="text-xs" />
                    
                    {/* Dropdown Menu */}
                    {educationDropdownOpen && (
                      <>
                        {/* Invisible bridge */}
                        <div 
                          className="absolute top-full left-0 w-full h-4 bg-transparent"
                                                     onMouseEnter={() => {
                             setEducationDropdownOpen(true);
                           }}
                        />
                        <div 
                          className="absolute top-full left-0 mt-4 w-64 bg-black rounded-xl shadow-lg border border-gray-800 py-4 z-[9999]"
                          style={{
                            paddingTop: '12px',
                            paddingBottom: '12px'
                          }}
                                                     onMouseEnter={() => {
                             setEducationDropdownOpen(true);
                           }}
                           onMouseLeave={() => {
                             // Dropdown'dan çıkınca da gecikme ekleyelim
                             setTimeout(() => {
                               setEducationDropdownOpen(false);
                             }, 200);
                           }}
                        >
                          {educationItems.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              to={item.path}
                              className="block px-4 py-3 text-sm hover:bg-gray-800 transition-colors"
                              onClick={() => setEducationDropdownOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : isAnchor ? (
                  <a
                    href={path}
                    className="hover:text-gray-300 focus:outline-none focus:text-gray-300 transition-colors cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    {name}
                  </a>
                ) : (
                  <Link
                    to={path}
                    className="hover:text-gray-300 focus:outline-none focus:text-gray-300 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button Desktop */}
          <button
            className="ml-auto px-4 py-1.5 rounded-[33px] bg-[#c5ff21] text-black font-semibold hover:bg-white hover:text-black transition-colors duration-300 hidden md:block"
            type="button"
            onClick={handleContactClick}
          >
                         Bize Ulaşın
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-full hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-gray-400 ml-4"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            type="button"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

                           {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-all duration-300 ease-in-out md:hidden ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          style={{
            transform: `translateY(-${headerTransform * 100}%)`
          }}
          onClick={() => setMenuOpen(false)}
          aria-hidden={!menuOpen}
        ></div>

                           {/* Mobile Menu */}
        <nav
          className={`fixed top-[65px] left-4 right-4 z-50 bg-black rounded-[33px] shadow-lg flex flex-col gap-4 text-white font-inter text-base
            overflow-hidden transition-all duration-300 ease-in-out md:hidden
            ${menuOpen ? "max-h-[450px] p-6 opacity-100" : "max-h-0 p-0 opacity-0"}
          `}
          style={{
            transform: `translateY(-${headerTransform * 100}%)`
          }}
          aria-hidden={!menuOpen}
        >
        {menuItems.map(({ name, path, isAnchor }, idx) => (
          isAnchor ? (
            <a
              key={idx}
              href={path}
              className="block py-3 px-4 rounded hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </a>
          ) : (
            <Link
              key={idx}
              to={path}
              className="block py-3 px-4 rounded hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          )
        ))}

        {/* Contact Button Mobile */}
        <button
          onClick={handleContactClick}
          className="mt-auto bg-[#c5ff21] text-black font-semibold py-3 rounded-[33px] hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
          type="button"
        >
                     Bize Ulaşın
                 </button>
       </nav>

               {/* Calendly Modal */}
        {showCalendlyModal && (
          <div className="fixed inset-0 z-[9999] flex items-start justify-center p-0 sm:p-4 pt-0 sm:pt-20">
            {/* Blurred Background */}
            <div 
              className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-lg"
              onClick={closeCalendlyModal}
            ></div>
            
                         {/* Modal Content */}
             <div className="relative bg-black rounded-none sm:rounded-2xl shadow-2xl w-full max-w-5xl h-screen sm:h-[90vh] overflow-hidden">
                             {/* Close Button */}
               <button
                 onClick={closeCalendlyModal}
                 className="absolute top-4 right-4 z-10 bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-700 transition-colors"
                 type="button"
                 aria-label="Kapat"
               >
                 <HiX size={24} className="text-white" />
               </button>
              
                             {/* Calendly Inline Widget */}
                                                                                                                                                                                                                                                               <div 
                     className="calendly-inline-widget w-full h-full"
                     data-url="https://calendly.com/yasinnabialtun/gelin-tanisalim?hide_event_type_details=1&hide_gdpr_banner=1&locale=tr_TR&text_color=ffffff&primary_color=000000&utm_source=ookuuakademi&lang=tr"
                     style={{ minWidth: '320px', height: '100%' }}
                   ></div>
            </div>
          </div>
        )}
     </header>
   );
 };

export default Header;
