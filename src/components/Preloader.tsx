import React, { useState, useEffect } from 'react';
import ookuulogo from '../assets/ookuulogo.png';

interface PreloaderProps {
  onLoadingComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Sistemler başlatılıyor...",
    "İçerikler yükleniyor...",
    "Son hazırlıklar yapılıyor...",
    "Tamamlandı!"
  ];

  useEffect(() => {
    // Progress simulation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 800);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 80);

    // Text rotation
    const textInterval = setInterval(() => {
      setCurrentText((prev) => {
        if (prev >= loadingTexts.length - 1) {
          clearInterval(textInterval);
          return loadingTexts.length - 1;
        }
        return prev + 1;
      });
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="text-center max-w-md mx-auto px-6">
        
        {/* Logo Animation */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <img 
              src={ookuulogo} 
              alt="Ookuu Akademi" 
              className="w-full h-full object-contain animate-pulse"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#c5ff21] opacity-20 rounded-full blur-xl animate-ping"></div>
          </div>
          
          {/* Rotating rings */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32">
            <div className="absolute inset-0 border-2 border-[#c5ff21] border-opacity-30 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-2 border-[#c5ff21] border-opacity-20 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
            <div className="absolute inset-4 border-2 border-[#c5ff21] border-opacity-10 rounded-full animate-spin" style={{ animationDuration: '4s' }}></div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-2 animate-fade-in">
          Ookuu Akademi
        </h1>
        <p className="text-[#c5ff21] text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Dijital Dönüşümün Öncüsü
        </p>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#c5ff21] to-green-400 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
            </div>
          </div>
          <div className="mt-2 text-white text-sm font-medium">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Loading Text */}
        <div className="h-8 flex items-center justify-center">
          <div className="text-[#c5ff21] text-sm font-medium animate-fade-in">
            {loadingTexts[currentText]}
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-2 h-2 bg-[#c5ff21] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-[#c5ff21] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-[#c5ff21] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-[#c5ff21] rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-[#c5ff21] rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-[#c5ff21] rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-10 w-3 h-3 bg-[#c5ff21] rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Preloader;

