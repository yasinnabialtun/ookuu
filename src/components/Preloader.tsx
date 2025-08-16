import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onLoadingComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0); // 0: fade in, 1: breathing, 2: fade out

  useEffect(() => {
    // Logo yükleme kontrolü
    const img = new Image();
    img.onload = () => setLogoLoaded(true);
    img.src = '/images/ookuulogo.png';

    // Animasyon fazları
    const phase1 = setTimeout(() => {
      setAnimationPhase(1); // Breathing animasyonu başla
    }, 800); // Logo yüklendikten sonra

    const phase2 = setTimeout(() => {
      setAnimationPhase(2); // Fade out başla
    }, 3000); // 3 saniye breathing

    const phase3 = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500);
    }, 3500); // Fade out tamamlandıktan sonra

    return () => {
      clearTimeout(phase1);
      clearTimeout(phase2);
      clearTimeout(phase3);
    };
  }, [onLoadingComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-center">
        {/* Logo with breathing animation */}
        <div className={`w-32 h-32 mx-auto relative flex items-center justify-center transition-all duration-1000 ${
          animationPhase === 0 ? 'scale-75 opacity-0' : 
          animationPhase === 1 ? 'scale-100 opacity-100' : 
          'scale-110 opacity-0'
        }`}>
          <img 
            src="/images/ookuulogo.png" 
            alt="Ookuu Akademi" 
            className={`w-full h-full object-contain transition-all duration-1000 ${
              animationPhase === 1 ? 'animate-breathing' : ''
            }`}
            style={{ opacity: logoLoaded ? 1 : 0 }}
          />
        </div>
      </div>

      {/* Custom CSS for breathing animation */}
      <style>{`
        @keyframes breathing {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .animate-breathing {
          animation: breathing 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Preloader;

