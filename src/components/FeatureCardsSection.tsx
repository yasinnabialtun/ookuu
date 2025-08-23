import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const features = [
  { icon: 'fas fa-rocket', title: 'Anında Erişim', desc: 'Kayıt olur olmaz içeriklere sınırsız erişim kazanın.' },
  { icon: 'fas fa-network-wired', title: 'Geniş Öğrenci Ağı', desc: 'Toplulukla birlikte öğrenerek gelişin ve paylaşın.' },
  { icon: 'fas fa-certificate', title: 'Başarı Sertifikası', desc: 'Bitirdiğiniz her eğitim için resmi bir sertifika alın.' },
  { icon: 'fas fa-handshake', title: 'İade Garantisi', desc: '14 gün içinde koşulsuz para iadesi hakkınızı kullanın.' }
];

const FeaturedCardSection: React.FC = () => {
  return (
    <section
      className="bg-black max-w-[1230px] mx-auto text-[#d1d1d1] font-inter relative overflow-x-hidden px-4 py-[clamp(60px,10vw,100px)]"
      aria-labelledby="features-heading"
    >
      <h2 id="features-heading" className="sr-only">Platform Özellikleri</h2>
      <ul className="card-container" aria-label="Platform özellikleri listesi">
        {features.map(({ icon, title, desc }, idx) => (
          <li key={idx} className="feature-card relative max-w-[300px] mx-auto" aria-label={`${title} Kartı`}>
                         <article className="bg-black rounded-2xl py-8 text-center shadow-lg border-2 border-[#c5ff21] h-[240px] flex flex-col justify-center items-center text-[#d1d1d1] relative overflow-hidden group hover:scale-110 transition-all duration-500 ease-out">
               <i className={`${icon} text-[#c5ff21] text-6xl mb-6 icon-breathe`} />
               <h3 className="text-xl font-extrabold text-[#f5f5f5] mb-4 tracking-wide px-2">{title}</h3>
               <p className="text-sm text-[#b5b5b5] max-w-[95%] leading-relaxed px-3">{desc}</p>
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

         @keyframes breathe {
           0%, 100% { transform: scale(1); }
           50% { transform: scale(1.05); }
         }
         
                   .icon-breathe {
            animation: breathe 3s ease-in-out infinite;
          }
          


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
