import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Bileşen importları
import Header from "./components/Header";
import Hero from "./components/Hero";
import ParallaxVideo from "./components/ParallaxVideo";
import FeatureCardsSection from "./components/FeatureCardsSection";
import EducationSection from "./components/EducationSection";
import BentoGrid from "./components/BentoGrid";
import AcademicThesis from "./components/AcademicThesis";
import AppointmentSection from "./components/AppointmentSection";
import FAQSection from "./components/FAQSection";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";

// Yeni sayfalar
// Sayfalar
import YaraticiDijitalTasarim from './Pages/YaraticiDijitalTasarim';
import YapayZekaTeknolojileri from "./Pages/YapayZekaTeknolojileri";
import DijitalPazarlamaStratejileri from "./Pages/DijitalPazarlamaStratejileri";


const App: React.FC = () => {
  const handleContactClick = () => {
    alert("İletişim butonuna tıklandı!");
  };

  return (
    <Router>
      <div className="font-inter">
        <Header onContactClick={handleContactClick} />
        <main>
          <Routes>
            {/* Ana sayfa */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <ParallaxVideo />
                       <BentoGrid />
                  <FeatureCardsSection />
                  <EducationSection />
             
                  <AcademicThesis />
                  <AppointmentSection />
                  <FAQSection />
                </>
              }
            />
            {/* Yeni sayfalar */}
            <Route path="/YaraticiDijitalTasarim" element={<YaraticiDijitalTasarim />} />
            <Route path="/YapayZekaTeknolojileri" element={<YapayZekaTeknolojileri />} />
            <Route path="/DijitalPazarlamaStratejileri" element={<DijitalPazarlamaStratejileri />} />
          </Routes>
        </main>
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
