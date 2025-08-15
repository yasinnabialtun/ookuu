import React from 'react';
import { Link } from 'react-router-dom';

const YaraticiDijitalTasarim: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="bg-[#c5ff21] text-black px-4 py-2 rounded-full text-sm font-semibold">
              UI/UX Tasarım
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Yaratıcı Dijital Tasarım
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Modern tasarım araçları ve yaratıcı tekniklerle dijital dünyada fark yaratın. 
            Kullanıcı deneyimi odaklı tasarım yaklaşımları ile profesyonel projeler geliştirin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#c5ff21] text-black font-bold py-4 px-8 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105">
              Hemen Başla
            </button>
            <button className="border border-[#c5ff21] text-[#c5ff21] font-semibold py-4 px-8 rounded-full hover:bg-[#c5ff21] hover:text-black transition-all duration-300">
              Ücretsiz Demo
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#c5ff21] mb-2">8</div>
            <div className="text-gray-400">Hafta</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#c5ff21] mb-2">40+</div>
            <div className="text-gray-400">Saat Video</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#c5ff21] mb-2">5</div>
            <div className="text-gray-400">Proje</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#c5ff21] mb-2">100%</div>
            <div className="text-gray-400">Pratik</div>
          </div>
        </div>

        {/* Course Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Kurs İçeriği</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
                <div className="bg-[#c5ff21] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">UI/UX Tasarım Prensipleri</h3>
                  <p className="text-gray-400">Kullanıcı deneyimi odaklı tasarım yaklaşımları ve temel prensipler</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
                <div className="bg-[#c5ff21] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Figma ile Prototip Oluşturma</h3>
                  <p className="text-gray-400">Modern tasarım araçları ile etkili prototipler ve wireframe'ler</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
                <div className="bg-[#c5ff21] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Renk Teorisi ve Tipografi</h3>
                  <p className="text-gray-400">Görsel hiyerarşi, marka kimliği ve renk psikolojisi</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
                <div className="bg-[#c5ff21] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Responsive Tasarım</h3>
                  <p className="text-gray-400">Tüm cihazlarda mükemmel görünüm ve kullanıcı deneyimi</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
                <div className="bg-[#c5ff21] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">AI Destekli Tasarım Araçları</h3>
                  <p className="text-gray-400">Yapay zeka ile tasarım süreçlerini hızlandırma ve optimizasyon</p>
                </div>
              </div>
            </div>
          </div>

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
                <span className="text-gray-400">Video İçerik:</span>
                <span className="font-semibold">40+ Saat</span>
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
                <span className="font-bold text-2xl text-[#c5ff21]">₺1,999</span>
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
            <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="text-[#c5ff21] text-3xl mb-4">🎨</div>
              <h3 className="font-semibold text-lg mb-3">Tasarım Düşüncesi</h3>
              <p className="text-gray-400">Kullanıcı odaklı tasarım yaklaşımları ve problem çözme teknikleri</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="text-[#c5ff21] text-3xl mb-4">🛠️</div>
              <h3 className="font-semibold text-lg mb-3">Modern Araçlar</h3>
              <p className="text-gray-400">Figma, Adobe XD ve diğer profesyonel tasarım araçları</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="text-[#c5ff21] text-3xl mb-4">📱</div>
              <h3 className="font-semibold text-lg mb-3">Mobil Öncelikli</h3>
              <p className="text-gray-400">Responsive tasarım ve mobil kullanıcı deneyimi</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="text-[#c5ff21] text-3xl mb-4">🤖</div>
              <h3 className="font-semibold text-lg mb-3">AI Entegrasyonu</h3>
              <p className="text-gray-400">Yapay zeka destekli tasarım araçları ve otomasyon</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="text-[#c5ff21] text-3xl mb-4">📊</div>
              <h3 className="font-semibold text-lg mb-3">Analitik Düşünce</h3>
              <p className="text-gray-400">Kullanıcı davranışları ve performans analizi</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="text-[#c5ff21] text-3xl mb-4">🚀</div>
              <h3 className="font-semibold text-lg mb-3">Portföy Geliştirme</h3>
              <p className="text-gray-400">Profesyonel portföy oluşturma ve sunum teknikleri</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Öğrenci Yorumları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#c5ff21] rounded-full flex items-center justify-center text-black font-bold mr-4">
                  A
                </div>
                <div>
                  <h4 className="font-semibold">Ahmet Yılmaz</h4>
                  <p className="text-gray-400 text-sm">UI/UX Tasarımcı</p>
                </div>
              </div>
              <p className="text-gray-300">"Bu kurs sayesinde kariyerimde büyük bir sıçrama yaptım. Pratik projeler gerçekten çok faydalıydı."</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#c5ff21] rounded-full flex items-center justify-center text-black font-bold mr-4">
                  S
                </div>
                <div>
                  <h4 className="font-semibold">Selin Demir</h4>
                  <p className="text-gray-400 text-sm">Freelance Tasarımcı</p>
                </div>
              </div>
              <p className="text-gray-300">"AI araçları bölümü gerçekten güncel ve iş hayatında çok işime yarıyor."</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#c5ff21] rounded-full flex items-center justify-center text-black font-bold mr-4">
                  M
                </div>
                <div>
                  <h4 className="font-semibold">Mehmet Kaya</h4>
                  <p className="text-gray-400 text-sm">Product Designer</p>
                </div>
              </div>
              <p className="text-gray-300">"Figma eğitimi çok detaylıydı. Artık çok daha hızlı prototip oluşturabiliyorum."</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#c5ff21] to-green-400 text-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hemen Başlayın!</h2>
          <p className="text-xl mb-6 opacity-90">Dijital tasarım dünyasına adım atın ve kariyerinizi şekillendirin.</p>
          <button className="bg-black text-white font-bold py-4 px-8 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            Ücretsiz Demo İzle
          </button>
        </div>

        {/* Back to Courses */}
        <div className="text-center mt-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-[#c5ff21] hover:text-white transition-colors"
          >
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
