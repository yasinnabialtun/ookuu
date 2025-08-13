// Header.tsx
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

interface HeaderProps {
  onContactClick: () => void;
}

const menuItems = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Hakkımızda", path: "/#hakkimizda" }, // sayfa içi scroll
  { name: "Eğitimler", path: "/#egitimler" },
];

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactClick = () => {
    setMenuOpen(false);
    onContactClick();
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-[1200px] w-[calc(100%-32px)] bg-[#121212] bg-opacity-40 backdrop-blur-sm shadow-lg rounded-[33px] px-6 py-4 flex items-center font-inter">
      <div className="mr-auto flex items-center">
        <img
          src="/images/ookuulogo.png"
          alt="Ooku Akademi Logo"
          className="h-6 w-auto object-contain select-none"
        />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex flex-1 justify-center gap-8 text-white font-semibold text-sm">
        {menuItems.map(({ name, path }, idx) => (
          <Link
            key={idx}
            to={path}
            className="hover:text-gray-300 focus:outline-none focus:text-gray-300 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {name}
          </Link>
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

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      ></div>

      {/* Mobile Menu */}
      <nav
        className={`fixed top-[65px] left-4 right-4 z-50 bg-black rounded-[33px] shadow-lg flex flex-col gap-6 text-white font-inter text-lg
          overflow-hidden transition-[max-height,padding] duration-300 ease-in-out md:hidden
          ${menuOpen ? "max-h-[320px] p-6" : "max-h-0 p-0"}
        `}
        aria-hidden={!menuOpen}
      >
        {menuItems.map(({ name, path }, idx) => (
          <Link
            key={idx}
            to={path}
            className="block py-3 px-4 rounded hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={() => setMenuOpen(false)}
          >
            {name}
          </Link>
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
    </header>
  );
};

export default Header;
