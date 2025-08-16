import React from 'react';
import { Link } from 'react-router-dom';

const YaraticiDijitalTasarim: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="bg-[#c5ff21] text-black px-4 py-2 rounded-full text-sm font-semibold">
              UI/UX Tasarım
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Yaratıcı Dijital Tasarımla Fark Yaratın
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Kullanıcı odaklı tasarım prensipleri ve modern araçlarla, dijital dünyada kalıcı izler bırakın. 
            Gerçek projelerle öğrenin, profesyonel portföyünüzü oluşturun ve sektöre sağlam bir adım atın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/kayit" className="bg-[#c5ff21] text-black font-bold py-4 px-8 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105">
              Hemen Başla
            </Link>
            <Link to="/demo" className="border border-[#c5ff21] text-[#c5ff21] font-semibold py-4 px-8 rounded-full hover:bg-[#c5ff21] hover:text-black transition-all duration-300">
              Ücretsiz Demo
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { title: "Hafta", value: "8" },
            { title: "Saat Eğitim", value: "40+" },
            { title: "Uygulamalı Proje", value: "5" },
            { title: "Pratik Odaklı", value: "100%" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-[#c5ff21] mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.title}</div>
            </div>
          ))}
        </div>

        {/* Course Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Kurs İçeriği</h2>
            <div className="space-y-6">
              {[
                {
                  title: "UI/UX Tasarım Temelleri",
                  desc: "Kullanıcı odaklı tasarımın prensipleri, iyi ve kötü arayüz örnekleriyle.",
                },
                {
                  title: "Figma ile Prototipleme",
                  desc: "Wireframe, prototip ve kullanıcı akışlarıyla gerçekçi arayüzler tasarlayın.",
                },
                {
                  title: "Renk & Tipografi Stratejileri",
                  desc: "Marka bütünlüğü sağlayan etkili renk ve yazı kullanımı.",
                },
                {
                  title: "Responsive Tasarım Teknikleri",
                  desc: "Mobil uyumlu ve her cihazda sorunsuz çalışan tasarımlar oluşturun.",
                },
                {
                  title: "AI Destekli Tasarım Araçları",
                  desc: "Yapay zeka ile tasarım süreçlerini hızlandırın ve yaratıcı çözümler üretin.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
                  <div className="bg-[#c5ff21] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Course Details Card */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Kurs Detayları</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Süre:</span>
                <span className="font-semibold">8 Hafta</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Seviye:</span>
                <span className="font-semibold">Başlangıç - Orta</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">İçerik:</span>
                <span className="font-semibold">40+ Saat Video</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Proje:</span>
                <span className="font-semibold">5 Uygulamalı Proje</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Sertifika:</span>
                <span className="font-semibold text-[#c5ff21]">Evet</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-400">Fiyat:</span>
                <span className="font-bold text-2xl text-[#c5ff21]">₺1.999</span>
              </div>
            </div>
            <button className="w-full bg-[#c5ff21] text-black font-bold py-4 rounded-xl hover:bg-white transition-all duration-300 transform hover:scale-105">
              Kursa Kayıt Ol
            </button>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-400">14 gün koşulsuz iade garantisi</p>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Neler Öğreneceksiniz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎨",
                title: "Tasarım Düşüncesi",
                desc: "Kullanıcı odaklı düşünme ve yaratıcı problem çözme teknikleri.",
              },
              {
                icon: "🛠️",
                title: "Modern Araçlar",
                desc: "Figma, Adobe XD ve diğer profesyonel tasarım araçları.",
              },
              {
                icon: "📱",
                title: "Mobil Öncelikli Yaklaşım",
                desc: "Responsive tasarım ve mobil kullanıcı deneyimi.",
              },
              {
                icon: "🤖",
                title: "AI Entegrasyonu",
                desc: "Yapay zeka destekli araçlarla üretkenliği artırma.",
              },
              {
                icon: "📊",
                title: "Kullanıcı Analizi",
                desc: "Kullanıcı davranışlarını ölçme ve analiz etme.",
              },
              {
                icon: "🚀",
                title: "Portföy Geliştirme",
                desc: "Profesyonel sunum ve portföy oluşturma teknikleri.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                <div className="text-[#c5ff21] text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Öğrenci Yorumları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Ahmet Yılmaz",
                title: "UI/UX Tasarımcı",
                letter: "A",
                feedback: "Bu kurs sayesinde kariyerimde büyük bir sıçrama yaptım. Projeler gerçek dünyayla birebirdi.",
              },
              {
                name: "Selin Demir",
                title: "Freelance Tasarımcı",
                letter: "S",
                feedback: "AI araçları bölümü özellikle çok faydalıydı. Gerçek işlerde hemen kullanmaya başladım.",
              },
              {
                name: "Mehmet Kaya",
                title: "Product Designer",
                letter: "M",
                feedback: "Figma anlatımı çok netti. Artık fikirlerimi hızlıca prototipe dökebiliyorum.",
              },
            ].map((user, i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#c5ff21] rounded-full flex items-center justify-center text-black font-bold mr-4">
                    {user.letter}
                  </div>
                  <div>
                    <h4 className="font-semibold">{user.name}</h4>
                    <p className="text-gray-400 text-sm">{user.title}</p>
                  </div>
                </div>
                <p className="text-gray-300">"{user.feedback}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#c5ff21] to-green-400 text-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hemen Başlayın!</h2>
          <p className="text-xl mb-6 opacity-90">Dijital tasarım dünyasına adım atın ve kariyerinizi bir üst seviyeye taşıyın.</p>
          <Link to="/demo" className="bg-black text-white font-bold py-4 px-8 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 inline-block">
            Ücretsiz Demo İzle
          </Link>
        </div>

        {/* Back to Courses */}
        <div className="text-center mt-12">
          <Link to="/" className="inline-flex items-center text-[#c5ff21] hover:text-white transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Diğer Eğitimlere Dön
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YaraticiDijitalTasarim;
