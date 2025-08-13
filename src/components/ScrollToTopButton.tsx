import React, { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300); // 300px üzerindeyse göster
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Sayfanın en üstüne git"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#c5ff21] text-black shadow-lg hover:bg-white hover:text-black transition"
      type="button"
    >
      <HiArrowUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;
