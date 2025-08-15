import React, { useState } from "react";
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
import Preloader from "./components/Preloader";

// Yeni sayfalar
import YaraticiDijitalTasarim from './Pages/YaraticiDijitalTasarim';
import YapayZekaTeknolojileri from "./Pages/YapayZekaTeknolojileri";
import DijitalPazarlamaStratejileri from "./Pages/DijitalPazarlamaStratejileri";
import Blog from "./Pages/Blog";
import BlogPost from "./Pages/BlogPost";
import Hakkimizda from "./Pages/Hakkimizda";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleContactClick = () => {
    alert("İletişim butonuna tıklandı!");
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Preloader onLoadingComplete={handleLoadingComplete} />;
  }

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
                <div className="flex flex-col">
                  {/* Hero sayfanın en üstünde */}
                  <Hero />

                  {/* Parallax Video - Daha üstte */}
                  <div className="mt-8 md:mt-12 lg:mt-16"><ParallaxVideo /></div>
                  
                  {/* Diğer içerikler responsive margin ile */}
                  <div className="mt-0 md:mt-0 lg:mt-0"><EducationSection /></div>
                  <div className="mt-0 md:mt-0 lg:mt-0"><BentoGrid /></div>
                  <div className="mt-8 md:mt-12 lg:mt-16"><FeatureCardsSection /></div>
                  <div className="mt-6 md:mt-12 lg:mt-20"><AcademicThesis /></div>
                  <div className="mt-6 md:mt-12 lg:mt-20"><AppointmentSection /></div>
                  <div className="mt-6 md:mt-12 lg:mt-20"><FAQSection /></div>
                </div>
              }
            />
            {/* Yeni sayfalar */}
                         <Route path="/YaraticiDijitalTasarim" element={<YaraticiDijitalTasarim />} />
             <Route path="/YapayZekaTeknolojileri" element={<YapayZekaTeknolojileri />} />
             <Route path="/DijitalPazarlamaStratejileri" element={<DijitalPazarlamaStratejileri />} />
             <Route path="/blog" element={<Blog />} />
             <Route path="/blog/:slug" element={<BlogPost />} />
             <Route path="/hakkimizda" element={<Hakkimizda />} />
          </Routes>
        </main>
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
