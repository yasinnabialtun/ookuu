import React, { useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const features = [
  { icon: 'fas fa-bolt', title: 'Anında Erişim', desc: 'Kayıt olur olmaz içeriklere sınırsız erişim kazanın.' },
  { icon: 'fas fa-users', title: 'Geniş Öğrenci Ağı', desc: 'Toplulukla birlikte öğrenerek gelişin ve paylaşın.' },
  { icon: 'fas fa-graduation-cap', title: 'Başarı Sertifikası', desc: 'Bitirdiğiniz her eğitim için resmi bir sertifika alın.' },
  { icon: 'fas fa-shield-alt', title: 'İade Garantisi', desc: '14 gün içinde koşulsuz para iadesi hakkınızı kullanın.' }
];

const isTouchDevice = (): boolean =>
  typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0);

const FeaturedCardSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll<HTMLDivElement>('.feature-card');
    const maxTilt = 15;

    cards.forEach((card) => {
      const inner = card.querySelector<HTMLDivElement>('.card-inner');
      const light = card.querySelector<HTMLDivElement>('.mouse-light');
      if (!inner || !light) return;

      if (!isTouchDevice()) {
        const onMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          inner.style.transform = `rotateX(${((y - rect.height / 2) / (rect.height / 2)) * maxTilt}deg) rotateY(${((x - rect.width / 2) / (rect.width / 2)) * -maxTilt}deg)`;
          light.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(197,255,33,0.18) 0%, transparent 60%)`;
        };
        const onMouseEnter = () => { light.style.opacity = '1'; };
        const onMouseLeave = () => {
          inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
          light.style.opacity = '0';
        };
        card.addEventListener('mousemove', onMouseMove);
        card.addEventListener('mouseenter', onMouseEnter);
        card.addEventListener('mouseleave', onMouseLeave);
      } else {
        const onTouchMove = (e: TouchEvent) => {
          const touch = e.touches[0];
          const rect = card.getBoundingClientRect();
          light.style.background = `radial-gradient(circle at ${touch.clientX - rect.left}px ${touch.clientY - rect.top}px, rgba(197,255,33,0.12) 0%, transparent 60%)`;
          light.style.opacity = '1';
        };
        card.addEventListener('touchmove', onTouchMove, { passive: true });
        card.addEventListener('touchend', () => { light.style.opacity = '0'; });
      }
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-black max-w-[1230px] mx-auto text-[#d1d1d1] font-inter relative overflow-x-hidden px-4 py-32 md:py-36 lg:py-40"
      aria-labelledby="features-heading"
    >
      <h2 id="features-heading" className="sr-only">Platform Özellikleri</h2>
      <ul className="card-container" aria-label="Platform özellikleri listesi">
        {features.map(({ icon, title, desc }, idx) => (
          <li key={idx} className="feature-card perspective-[1200px] relative max-w-[300px] mx-auto scroll-snap-start flex-shrink-0" aria-label={`${title} Kartı`}>
            <article className="card-inner bg-black rounded-2xl pt-[clamp(30px,4vw,40px)] pb-[clamp(10px,1.5vw,18px)] text-center shadow-black/25 shadow-lg border-2 border-[#c5ff21] h-[240px] flex flex-col justify-start items-center text-[#d1d1d1] cursor-default select-none relative overflow-visible will-change-transform transition-transform duration-300 ease-in-out" style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}>
              <div className="mouse-light absolute inset-0 rounded-2xl opacity-0 pointer-events-none transition-opacity duration-300" style={{ background: 'radial-gradient(circle at center, rgba(197,255,33,0.15) 0%, transparent 60%)', zIndex: 0 }} />
              <i className={`${icon} text-[#c5ff21] relative z-10 select-none icon-pulse`} style={{ position: 'absolute', top: '-20px', fontSize: 'clamp(3rem, 6vw, 4rem)', transform: 'translateZ(50px)', transition: 'transform 0.3s ease' }} />
              <h3 className="text-[clamp(1rem,2vw,1.2rem)] font-extrabold text-[#f5f5f5] mt-6 mb-[clamp(6px,1vw,10px)] tracking-wide relative z-10 select-none" style={{ transform: 'translateZ(20px)' }}>{title}</h3>
              <p className="text-[clamp(0.85rem,1.4vw,0.95rem)] text-[#b5b5b5] max-w-[95%] relative z-10 select-none leading-relaxed" style={{ transform: 'translateZ(15px)' }}>{desc}</p>
            </article>
          </li>
        ))}
      </ul>

      <style>{`
        ul.card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: clamp(16px, 2.5vw, 24px);
          justify-content: center;
        }
        @keyframes iconPulse {
          0%,100% { transform: translateZ(50px) translateY(0) scale(1); }
          50% { transform: translateZ(50px) translateY(0) scale(1.08); }
        }
        .icon-pulse { animation: iconPulse 3s ease-in-out infinite; }
        .feature-card:hover .card-inner { box-shadow: 0 12px 24px rgba(197, 255, 33, 0.18); border-color: transparent; }
        .feature-card:hover .mouse-light { opacity: 1 !important; }
        .feature-card:hover i { transform: translateZ(50px) translateY(-8px) scale(1.15); }

        @media (max-width: 768px) {
          ul.card-container {
            display: flex !important;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            gap: 12px !important;
            padding: 12px 0 12px 10px !important;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
          }
          ul.card-container::-webkit-scrollbar { display: none; }
          .feature-card { flex-shrink: 0; scroll-snap-align: start; max-width: 300px !important; min-width: 280px; margin: 8px 0; }
        }
      `}</style>
    </section>
  );
};

export default FeaturedCardSection;
