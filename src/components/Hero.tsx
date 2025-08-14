import React, { useState, useEffect } from "react";
import Header from "./Header";

declare global {
  interface Calendly {
    initBadgeWidget(options: {
      url: string;
      text: string;
      color: string;
      textColor: string;
      branding: boolean;
    }): void;
    initPopupWidget(options: { url: string }): void;
    closePopupWidget(): void;
  }
  interface Window {
    Calendly: Calendly;
  }
}

const Hero: React.FC = () => {
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  useEffect(() => {
    if (calendlyOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [calendlyOpen]);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/yasinnabialtun/gelin-tanisalim?hide_event_type_details=1&hide_gdpr_banner=1",
          text: "Randevu Oluştur",
          color: "#000000",
          textColor: "#ffffff",
          branding: true,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const openCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/yasinnabialtun/gelin-tanisalim?hide_event_type_details=1&hide_gdpr_banner=1",
      });
      setCalendlyOpen(true);
    }
  };

  // Popup kapanışını 20 dakika sonra otomatik yapıyor
  useEffect(() => {
    if (calendlyOpen) {
      const timeout = setTimeout(() => {
        setCalendlyOpen(false);
        document.body.style.overflow = "";
        if (window.Calendly) {
          window.Calendly.closePopupWidget();
        }
      }, 20 * 60 * 1000);

      return () => clearTimeout(timeout);
    }
  }, [calendlyOpen]);

  return (
    <section
      className={`relative w-full h-screen overflow-hidden text-white flex flex-col ${
        calendlyOpen ? "backdrop-blur-sm" : ""
      }`}
    >
      {/* Video arka plan */}
      <video
        src="/videos/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Siyah yarı saydam overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 -z-0" />

      {/* Header bileşeni */}
      <Header onContactClick={openCalendlyPopup} />

      {/* Hero içerik */}
      <div className="flex-1 flex items-center justify-center text-center px-4 relative z-10 ">
        <div className="max-w-7xl">
          <h1 className="font-light text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[55px] leading-tight mb-4">
            Bireyler ve Firmalar İçin <br />
            Dijital Çağa Uyumlu Eğitimler​
          </h1>
          <p className="font-light text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] max-w-xl mx-auto mb-8 leading-relaxed">
            Yapay zeka, UI/UX ve kreatif tasarım dünyasına dair pratik bilgiler,
            gerçek örnekler ve senin dilinden anlatımlar.
          </p>
          <button
            type="button"
            className="bg-[#c5ff21] text-black font-semibold px-8 py-3 rounded-[33px] transition-colors duration-300 hover:bg-white hover:text-black"
            onClick={openCalendlyPopup}
          >
            Bize Ulaşın
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
