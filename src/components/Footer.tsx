// components/Footer.jsx

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white p-8 md:p-12 font-sans">
      <div className="container mx-auto max-w-[1200px] bg-neutral-900 rounded-[50px] md:rounded-[70px] p-8 md:p-12 shadow-xl">
        {/* Ana İçerik */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold text-lime-400 mb-4 tracking-wide leading-tight">
            Hadi sen de ookuuya katıl!
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mb-6 leading-relaxed">
            Dijital dönüşümün öncüsü olmak için Ookuu Akademi ile tanışın.
          </p>
          
          {/* İletişim Bilgileri */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
            <a
              href="mailto:info@ookuuakademi.com"
              className="text-xl md:text-2xl text-lime-400 hover:text-lime-300 transition-colors duration-300 font-medium flex items-center gap-2"
            >
              <span className="text-sm">📧</span>
              info@ookuuakademi.com
            </a>
          </div>

          {/* Sosyal Medya */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/ookuuakademi"
              className="bg-neutral-800 p-3 rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300 group"
              aria-label="Facebook"
            >
              <FaFacebook className="h-5 w-5 text-neutral-400 group-hover:text-black" />
            </a>
            <a
              href="https://instagram.com/ookuuakademi"
              className="bg-neutral-800 p-3 rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300 group"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5 text-neutral-400 group-hover:text-black" />
            </a>
            <a
              href="https://linkedin.com/company/ookuuakademi"
              className="bg-neutral-800 p-3 rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5 text-neutral-400 group-hover:text-black" />
            </a>
            <a
              href="https://youtube.com/@ookuuakademi"
              className="bg-neutral-800 p-3 rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300 group"
              aria-label="YouTube"
            >
              <FaYoutube className="h-5 w-5 text-neutral-400 group-hover:text-black" />
            </a>
          </div>
        </div>

        {/* Eğitimler ve Hizmetler */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Eğitimler */}
          <div>
            <h3 className="text-xl font-bold text-lime-400 mb-4">Eğitimler</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <Link to="/YaraticiDijitalTasarim" className="hover:text-lime-400 transition-colors">
                  Yaratıcı Dijital Tasarım
                </Link>
              </li>
              <li>
                <Link to="/YapayZekaTeknolojileri" className="hover:text-lime-400 transition-colors">
                  Yapay Zeka Teknolojileri
                </Link>
              </li>
              <li>
                <Link to="/DijitalPazarlamaStratejileri" className="hover:text-lime-400 transition-colors">
                  Dijital Pazarlama
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">
                  Web Geliştirme
                </a>
              </li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-xl font-bold text-lime-400 mb-4">Hizmetler</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">
                  Kurumsal Eğitimler
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">
                  Danışmanlık
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">
                  Sertifika Programları
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">
                  Online Eğitimler
                </a>
              </li>
            </ul>
          </div>

          {/* Şirket */}
          <div>
            <h3 className="text-xl font-bold text-lime-400 mb-4">Şirket</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <Link to="/hakkimizda" className="hover:text-lime-400 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-lime-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">
                  Kariyer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-xl font-bold text-lime-400 mb-4">İletişim</h3>
            <div className="space-y-3 text-neutral-300">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-lime-400" />
                <span>İstanbul, Türkiye</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-lime-400" />
                <a href="tel:+902121234567" className="hover:text-lime-400 transition-colors">
                  +90 (212) 123 45 67
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-lime-400" />
                <a href="mailto:info@ookuuakademi.com" className="hover:text-lime-400 transition-colors">
                  info@ookuuakademi.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-lime-400" />
                <span>Pzt-Cmt: 09:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="border-t border-neutral-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-6">
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 text-sm md:text-base order-2 lg:order-1">
              <Link to="/" className="text-neutral-400 hover:text-lime-400 transition-colors duration-300">
                Anasayfa
              </Link>
              <Link to="/hakkimizda" className="text-neutral-400 hover:text-lime-400 transition-colors duration-300">
                Hakkımızda
              </Link>
              <Link to="/blog" className="text-neutral-400 hover:text-lime-400 transition-colors duration-300">
                Blog
              </Link>
              <a href="#" className="text-neutral-400 hover:text-lime-400 transition-colors duration-300">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-neutral-400 hover:text-lime-400 transition-colors duration-300">
                Kullanım Şartları
              </a>
            </nav>

            {/* Copyright and Logo */}
            <div className="flex flex-col items-center mx-auto lg:mx-0 order-1 lg:order-2">
              <div className="bg-neutral-800 p-4 rounded-xl flex items-center space-x-4 hover:bg-neutral-700 transition-colors duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl shadow-lg bg-neutral-700">
                  <img
                    src="/images/ookuulogo.png"
                    alt="Ookuu Akademi Logo"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-neutral-400">
                    2025 © Ookuu Akademi
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    NeoaveX Teknoloji A.Ş.
                  </p>
                </div>
              </div>
            </div>

            {/* Bülten Aboneliği */}
            <div className="flex flex-col items-center lg:items-end gap-3 order-3">
              <p className="text-sm text-neutral-400">Bültenimize abone olun</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="E-posta"
                  className="px-3 py-2 bg-neutral-800 rounded-lg text-white text-sm border border-neutral-700 focus:border-lime-400 focus:outline-none w-32 md:w-40"
                />
                <button className="px-4 py-2 bg-lime-400 text-black font-semibold rounded-lg hover:bg-white transition-colors text-sm">
                  Abone Ol
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ek Bilgiler */}
        <div className="mt-8 pt-6 border-t border-neutral-700">
          <div className="text-center text-xs text-neutral-500">
            <p>
              MEB Onaylı Eğitim Kurumu | ISO 9001:2015 Kalite Yönetim Sistemi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;