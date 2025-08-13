// components/Footer.jsx

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 md:p-12 font-sans">
      <div className="container mx-auto max-w-[1200px] bg-neutral-900 rounded-[50px] md:rounded-[70px] p-8 md:p-12 shadow-xl">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold text-lime-400 mb-4 tracking-wide leading-tight">
            Hadi sen de ookuuya katıl!
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl">
            Yeni nesil öğrenme platformumuzla tanışın. Deneyimlemek ve topluluğumuza katılmak için abone olun.
          </p>
          <a
            href="mailto:ookuu@gmaill.com"
            className="mt-6 text-xl md:text-2xl text-lime-400 hover:text-lime-300 transition-colors duration-300 font-medium"
          >
            ookuu@gmaill.com
          </a>
        </div>

        <div className="border-t border-neutral-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center lg:justify-start space-x-4 md:space-x-8 mb-6 lg:mb-0 text-sm md:text-base">
              <a href="#" className="text-neutral-400 hover:text-lime-400 transition-colors duration-300">
                Anasayfa
              </a>
              <a href="#" className="text-neutral-400 hover:text-lime-400 transition-colors duration-300">
                Deneme
              </a>
              <a href="#" className="text-neutral-400 hover:text-lime-400 transition-colors duration-300">
                Gizlilik Sözleşmesi
              </a>
              <a href="#" className="text-neutral-400 hover:text-lime-400 transition-colors duration-300">
                İletişim
              </a>
            </nav>

            {/* Copyright and Logo */}
            <div className="flex flex-col items-center mx-auto lg:mx-0 mb-6 lg:mb-0 order-first lg:order-none">
              <div className="bg-neutral-800 p-4 rounded-xl flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl shadow-lg">
                  <img
                    src="/images/ookuulogo.png"
                    alt="Ookuu Akademi Logo"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-neutral-400">
                    2025 © Tüm Hakları Saklıdır
                  </p>
                  <p className="text-xs text-neutral-500 mt-1 max-w-[200px]">
                    ookuuu bir NeoaveX iştirakıdır.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-4 text-sm md:text-base">
              <a
                href="#"
                className="bg-neutral-800 p-3 rounded-xl hover:bg-neutral-700 transition-colors duration-300 group"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5 text-neutral-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="bg-neutral-800 p-3 rounded-xl hover:bg-neutral-700 transition-colors duration-300 group"
                aria-label="X / Twitter"
              >
                <FaTwitter className="h-5 w-5 text-neutral-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="bg-neutral-800 p-3 rounded-xl hover:bg-neutral-700 transition-colors duration-300 group"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5 text-neutral-400 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;