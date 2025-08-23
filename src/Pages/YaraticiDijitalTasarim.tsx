import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// TypeScript declaration for spline-viewer custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        url: string;
      }, HTMLElement>;
    }
  }
}

// Reusable Hero Section
const HeroSection: React.FC = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  useEffect(() => {
    // Load Spline script
    const loadSplineScript = () => {
      if (document.querySelector('script[src*="spline-viewer.js"]')) {
        setIsSplineLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.10.51/build/spline-viewer.js';
      script.onload = () => {
        console.log('Spline viewer script loaded');
        setIsSplineLoaded(true);
      };
      script.onerror = () => {
        console.error('Failed to load Spline viewer script');
      };
      document.head.appendChild(script);
    };

    loadSplineScript();
  }, []);

  return (
    <section className="mb-20 py-20 bg-black relative h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <spline-viewer 
          url="https://prod.spline.design/BROrBzFkddRLt0sf/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block',
            transform: 'translateX(20%)',
            overflow: 'hidden'
          }}
          className="lg:translate-x-[20%] translate-x-[10%]"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-start pt-20">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight text-white">
              Geleceğin Dijital Tasarımlarını Şekillendirin
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              2025 trendleriyle kullanıcı merkezli tasarımda ustalaşın. AI entegrasyonu, AR/VR arayüzleri, erişilebilirlik ve gamification ile kariyerinizi zirveye taşıyın. Gerçek projelerle pratik yapın, global sertifika alın!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link to="/kayit" className="bg-[#c5ff21] text-black font-bold py-4 px-10 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                Hemen Kayıt Olun
              </Link>
              <Link to="/demo" className="border-2 border-[#c5ff21] text-[#c5ff21] font-bold py-4 px-10 rounded-full hover:bg-[#c5ff21] hover:text-black transition-all duration-300 shadow-lg text-center">
                Ücretsiz Demo İzleyin
              </Link>
            </div>
          </div>
          
          {/* Right Column - Empty for balance */}
          <div className="relative overflow-visible h-[900px] w-full">
            {/* Cover box to hide "Built with Spline" text on desktop */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-black z-20 pointer-events-none"></div>
            {/* CTRL/C/V/Z text */}
            <div className="absolute inset-0 flex items-center justify-end pr-0 z-30 transform -translate-y-10 translate-x-24">
              <span className="text-[#c5ff21] text-sm font-semibold text-right">
                CTRL/C/V/Z tuşlarına basın
              </span>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden flex flex-col justify-start pt-2 h-screen">
          {/* Text Content */}
          <div className="text-center bg-black bg-opacity-60 backdrop-blur-sm rounded-2xl p-8 mx-0 mt-10 w-full">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-white">
              Geleceğin Dijital Tasarımlarını Şekillendirin
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              2025 trendleriyle kullanıcı merkezli tasarımda ustalaşın. AI entegrasyonu, AR/VR arayüzleri, erişilebilirlik ve gamification ile kariyerinizi zirveye taşıyın. Gerçek projelerle pratik yapın, global sertifika alın!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kayit" className="bg-[#c5ff21] text-black font-bold py-4 px-10 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                Hemen Kayıt Olun
              </Link>
              <Link to="/demo" className="border-2 border-[#c5ff21] text-[#c5ff21] font-bold py-4 px-10 rounded-full hover:bg-[#c5ff21] hover:text-black transition-all duration-300 shadow-lg text-center">
                Ücretsiz Demo İzleyin
              </Link>
            </div>
            <div className="mt-4">
              <span className="text-[#c5ff21] text-sm font-medium">
                CTRL/C/V/Z tuşlarına basın
              </span>
            </div>
          </div>
          
          {/* Cover box to hide "Built with Spline" text on mobile */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-black z-20 pointer-events-none lg:hidden"></div>
        </div>
      </div>
    </section>
  );
};

// Reusable Stat Card with Animation
interface StatProps {
  title: string;
  value: string;
}
const StatCard: React.FC<StatProps> = ({ title, value }) => (
  <div className="bg-gray-900 p-6 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all duration-300">
    <div className="text-5xl font-extrabold text-[#c5ff21] mb-3">{value}</div>
    <div className="text-gray-200 font-medium">{title}</div>
  </div>
);

// Reusable Content Item
interface ContentItemProps {
  index: number;
  title: string;
  desc: string;
}
const ContentItem: React.FC<ContentItemProps> = ({ index, title, desc }) => (
  <div className="flex items-start space-x-5 p-5 bg-gray-900 rounded-xl shadow-md hover:bg-gray-800 transition-all duration-300">
    <div className="bg-[#c5ff21] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
      {index + 1}
    </div>
    <div>
      <h3 className="font-bold text-xl mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{desc}</p>
    </div>
  </div>
);

// Reusable Learn Card
interface LearnCardProps {
  icon: string;
  title: string;
  desc: string;
}
const LearnCard: React.FC<LearnCardProps> = ({ icon, title, desc }) => (
  <article className="bg-gray-900 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
    <div className="text-[#c5ff21] text-4xl mb-5">{icon}</div>
    <h3 className="font-bold text-xl mb-4 text-white">{title}</h3>
    <p className="text-gray-300">{desc}</p>
  </article>
);

// Reusable Testimonial Card
interface TestimonialProps {
  name: string;
  title: string;
  letter: string;
  feedback: string;
}
const TestimonialCard: React.FC<TestimonialProps> = ({ name, title, letter, feedback }) => (
  <article className="bg-gray-900 p-8 rounded-xl shadow-md">
    <div className="flex items-center mb-5">
      <div className="w-14 h-14 bg-[#c5ff21] rounded-full flex items-center justify-center text-black font-bold text-xl mr-4">
        {letter}
      </div>
      <div>
        <h4 className="font-bold text-lg">{name}</h4>
        <p className="text-gray-300 text-md">{title}</p>
      </div>
    </div>
    <p className="text-gray-200 italic">"{feedback}"</p>
  </article>
);

// Reusable FAQ Item
interface FAQProps {
  question: string;
  answer: string;
}
const FAQItem: React.FC<FAQProps & { isOpen: boolean; toggle: () => void }> = ({ question, answer, isOpen, toggle }) => (
  <div className="border-b border-gray-700">
    <button
      onClick={toggle}
      className="flex justify-between w-full py-5 text-left font-bold text-xl hover:text-[#c5ff21] transition-colors text-white"
    >
      <span>{question}</span>
      <span className="text-3xl">{isOpen ? '-' : '+'}</span>
    </button>
    {isOpen && <p className="pb-5 text-gray-300">{answer}</p>}
  </div>
);

// New: Why This Course Section
const WhyThisCourse: React.FC = () => (
  <section className="mb-20">
    <h2 className="text-4xl font-extrabold mb-10 text-center text-white">Neden Bu Kursu Seçmelisiniz?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { icon: "🚀", title: "2025 Trendlerine Odaklı", desc: "AI, AR/VR, gamification ve erişilebilirlik gibi en güncel teknolojilerle donatılmış içerik." },
        { icon: "🛡️", title: "Pratik ve Uygulamalı", desc: "Gerçek dünya projeleriyle becerilerinizi hemen uygulayın, portföyünüzü güçlendirin." },
        { icon: "🌍", title: "Global Sertifika", desc: "Uluslararası geçerli sertifika ile kariyer fırsatlarınızı artırın." },
      ].map((item, i) => (
        <LearnCard key={i} {...item} />
      ))}
    </div>
  </section>
);

// New: Instructor Section
const InstructorSection: React.FC = () => (
  <section className="mb-20 bg-gray-900 py-12 rounded-2xl shadow-xl">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-extrabold mb-8 text-white">Eğitmeniniz: Dr. Elif Kaya</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 bg-gray-700 rounded-full flex-shrink-0"></div> {/* Placeholder for image */}
        <div className="text-left">
          <p className="text-gray-200 mb-4">
            15+ yıl UI/UX deneyimiyle, Google ve Meta'da çalışmış, AI tabanlı tasarım araçları uzmanı. Yüzlerce öğrenciyi sektörde başarıya ulaştırdı.
          </p>
          <p className="text-gray-300 italic">"Tasarım, teknolojiyle birleştiğinde sihir olur. Size bu sihri öğreteceğim!"</p>
        </div>
      </div>
    </div>
  </section>
);

const YaraticiDijitalTasarim: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { title: "Hafta Süre", value: "10" },
            { title: "Saat İçerik", value: "60+" },
            { title: "Proje", value: "10" },
            { title: "Başarı", value: "98%" },
          ].map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </section>

        {/* Why This Course */}
        <WhyThisCourse />

        {/* Course Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <section>
            <h2 className="text-4xl font-extrabold mb-10 text-white">Kurs Müfredatı</h2>
            <div className="space-y-6">
              {[
                { title: "UI/UX Temelleri ve 2025 Trendleri", desc: "Kullanıcı merkezli tasarım prensipleri, güncel trendler: AI, AR/VR tanıtımı." },
                { title: "Figma ile İleri Prototipleme", desc: "Wireframe'den interaktif prototiplere, AI entegrasyonuyla hızlandırılmış tasarım." },
                { title: "Renk, Tipografi ve Görsel Tasarım", desc: "Estetik ve erişilebilir tasarımlar için renk teorisi, kinetic tipografi." },
                { title: "Responsive ve Mobil-First Stratejiler", desc: "Cihazlar arası kusursuz arayüzler, 3D elementler entegrasyonu." },
                { title: "AI Destekli Tasarım ve Otomasyon", desc: "Figma AI gibi araçlarla süreç optimizasyonu, etik AI kullanımı." },
                { title: "AR/VR Arayüz Tasarımı", desc: "Immersive deneyimler için VR/AR tasarım teknikleri." },
                { title: "Gamification ve Kullanıcı Etkileşimi", desc: "Kullanıcı davranışlarını artıran gamification stratejileri." },
                { title: "Erişilebilirlik ve Inclusivity", desc: "Engelsiz tasarım, hyper-personalization ile kullanıcı odaklı yaklaşımlar." },
                { title: "Kullanıcı Testleri ve İterasyon", desc: "Gerçek geri bildirimlerle iyileştirme, A/B testleri." },
                { title: "Portföy ve Kariyer Gelişimi", desc: "Profesyonel portföy oluşturma, sektör ipuçları." },
              ].map((item, i) => (
                <ContentItem key={i} index={i} {...item} />
              ))}
            </div>
          </section>
          {/* Course Details */}
          <aside className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-10 shadow-2xl">
            <h3 className="text-3xl font-extrabold mb-8 text-white">Kurs Detayları</h3>
            <dl className="space-y-5 mb-10">
              <div className="flex justify-between">
                <dt className="text-gray-300 font-medium">Süre:</dt>
                <dd className="font-bold text-white">10 Hafta (Esnek)</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-300 font-medium">Seviye:</dt>
                <dd className="font-bold text-white">Başlangıç - İleri</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-300 font-medium">İçerik:</dt>
                <dd className="font-bold text-white">60+ Saat Video + Kaynaklar</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-300 font-medium">Projeler:</dt>
                <dd className="font-bold text-white">10 Gerçek Proje</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-300 font-medium">Sertifika:</dt>
                <dd className="font-bold text-[#c5ff21]">Global Geçerli</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-300 font-medium">Fiyat:</dt>
                <dd className="font-extrabold text-3xl text-[#c5ff21]">₺1.999 <span className="text-lg line-through text-gray-500">₺2.999</span></dd>
              </div>
            </dl>
            <button className="w-full bg-[#c5ff21] text-black font-bold py-5 rounded-xl hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg">
              Kayıt Olun - İndirimi Kaçırmayın!
            </button>
            <p className="mt-5 text-center text-gray-300 text-sm">45 Gün İade Garantisi + 7/24 Mentor Desteği</p>
          </aside>
        </div>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-white">Kazanacağınız Beceriler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🎨", title: "Yaratıcı Düşünce", desc: "Yenilikçi çözümlerle problem çözme." },
              { icon: "🛠️", title: "Profesyonel Araçlar", desc: "Figma, Adobe XD, AI entegrasyonları." },
              { icon: "📱", title: "Responsive Tasarım", desc: "Mobil-first ve cihaz uyumlu arayüzler." },
              { icon: "🤖", title: "AI Optimizasyonu", desc: "Yapay zeka ile verimli tasarım süreçleri." },
              { icon: "🕹️", title: "Gamification", desc: "Kullanıcı etkileşimini artıran stratejiler." },
              { icon: "🌐", title: "AR/VR Tasarım", desc: "Immersive deneyimler için ileri teknikler." },
              { icon: "🔍", title: "Erişilebilirlik", desc: "Inclusivity odaklı kullanıcı araştırmaları." },
              { icon: "📈", title: "Kariyer Gelişimi", desc: "Portföy ve freelance fırsatları." },
            ].map((item, i) => (
              <LearnCard key={i} {...item} />
            ))}
          </div>
        </section>

        {/* Instructor Section */}
        <InstructorSection />

        {/* Testimonials Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-white">Mezun Görüşleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Ahmet Yılmaz", title: "Senior Designer", letter: "A", feedback: "AI modülü sayesinde işimde devrim yarattım. Teşekkürler!" },
              { name: "Selin Demir", title: "Freelancer", letter: "S", feedback: "AR/VR dersleri inanılmaz! Portföyümle global işler aldım." },
              { name: "Mehmet Kaya", title: "Product Lead", letter: "M", feedback: "Erişilebilirlik odakı kariyerimi değiştirdi. Harika mentorluk." },
              { name: "Ayşe Öztürk", title: "UX Researcher", letter: "A", feedback: "Başlangıçtan pro'ya geçiş mükemmeldi. Tavsiye ederim!" },
              { name: "Emre Can", title: "UI Consultant", letter: "E", feedback: "Gamification stratejileriyle müşterilerimi etkiledim." },
            ].map((user, i) => (
              <TestimonialCard key={i} {...user} />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-white">Sıkça Sorulan Sorular</h2>
          <div className="bg-gray-900 rounded-2xl p-8 shadow-xl">
            {[
              { question: "Ön koşul var mı?", answer: "Hayır, temel bilgisayar bilgisi yeterli. Başlangıçtan ileri seviyeye uygundur." },
              { question: "İçeriklere erişim nasıl?", answer: "Ömür boyu erişim, 60+ saat video, kaynaklar ve projeler dahil." },
              { question: "Sertifika geçerli mi?", answer: "Evet, uluslararası tanınır ve LinkedIn'e eklenebilir." },
              { question: "Mentor desteği var mı?", answer: "7/24 Discord ve e-posta desteği, haftalık Q&A seansları." },
              { question: "İade politikası nedir?", answer: "45 gün koşulsuz iade garantisi." },
              { question: "2025 trendleri kapsanıyor mu?", answer: "Evet, AI, AR/VR, gamification ve etik tasarım odaklanıyor." },
            ].map((faq, i) => (
              <FAQItem key={i} {...faq} isOpen={openFAQ === i} toggle={() => toggleFAQ(i)} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#c5ff21] to-lime-500 text-black rounded-2xl p-12 text-center shadow-2xl mb-12">
          <h2 className="text-4xl font-extrabold mb-6">2025'te Tasarım Kariyerinizi Dönüştürün!</h2>
          <p className="text-xl mb-8">En modern içerikle sektörde öne çıkın. Sınırlı yer, hemen harekete geçin!</p>
          <Link to="/kayit" className="bg-black text-white font-bold py-5 px-12 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 inline-block shadow-lg">
            Kayıt Olun
          </Link>
        </section>

        {/* Back Link */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center text-[#c5ff21] hover:text-white transition-colors text-lg">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Diğer Kurslara Dön
          </Link>
        </div>
      </div>
    </main>
  );
};

export default YaraticiDijitalTasarim;