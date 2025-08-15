import React from 'react';
import { Link } from 'react-router-dom';

const YapayZekaTeknolojileri: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="bg-[#c5ff21] text-black px-4 py-2 rounded-full text-sm font-semibold">
              Yapay Zeka
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Yapay Zeka Teknolojileri
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Geleceğin teknolojisi yapay zeka ile tanışın. ChatGPT, Midjourney ve diğer AI araçlarını 
            profesyonel olarak kullanmayı öğrenin.
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
            <div className="text-3xl md:text-4xl font-bold text-[#c5ff21] mb-2">10</div>
            <div className="text-gray-400">Hafta</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#c5ff21] mb-2">50+</div>
            <div className="text-gray-400">Saat Video</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#c5ff21] mb-2">8</div>
            <div className="text-gray-400">Proje</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#c5ff21] mb-2">100%</div>
            <div className="text-gray-400">Güncel</div>
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
                  <h3 className="font-semibold text-lg mb-2">Yapay Zeka Temelleri</h3>
                  <p className="text-gray-400">AI teknolojilerinin temel prensipleri ve gelişim süreci</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
                <div className="bg-[#c5ff21] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">ChatGPT ve Prompt Mühendisliği</h3>
                  <p className="text-gray-400">Etkili prompt yazma teknikleri ve AI ile iletişim</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
                <div className="bg-[#c5ff21] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Görsel AI Araçları</h3>
                  <p className="text-gray-400">Midjourney, DALL-E ve görsel üretim teknolojileri</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
                <div className="bg-[#c5ff21] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">AI İş Entegrasyonu</h3>
                  <p className="text-gray-400">İş süreçlerinde AI kullanımı ve otomasyon</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
                <div className="bg-[#c5ff21] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">AI Etik ve Gelecek</h3>
                  <p className="text-gray-400">AI etiği, güvenlik ve gelecek trendleri</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Kurs Detayları</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Süre:</span>
                <span className="font-semibold">10 Hafta</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Seviye:</span>
                <span className="font-semibold">Başlangıç - İleri</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Video İçerik:</span>
                <span className="font-semibold">50+ Saat</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Proje:</span>
                <span className="font-semibold">8 Uygulamalı Proje</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Sertifika:</span>
                <span className="font-semibold text-[#c5ff21]">Evet</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-400">Fiyat:</span>
                <span className="font-bold text-2xl text-[#c5ff21]">₺2,499</span>
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
              <div className="text-[#c5ff21] text-3xl mb-4">🤖</div>
              <h3 className="font-semibold text-lg mb-3">AI Temelleri</h3>
              <p className="text-gray-400">Yapay zeka teknolojilerinin temel prensipleri ve kullanım alanları</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="text-[#c5ff21] text-3xl mb-4">💬</div>
              <h3 className="font-semibold text-lg mb-3">Prompt Mühendisliği</h3>
              <p className="text-gray-400">ChatGPT ve diğer AI araçları için etkili prompt yazma</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="text-[#c5ff21] text-3xl mb-4">🎨</div>
              <h3 className="font-semibold text-lg mb-3">Görsel AI</h3>
              <p className="text-gray-400">Midjourney, DALL-E ile görsel içerik üretimi</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="text-[#c5ff21] text-3xl mb-4">⚡</div>
              <h3 className="font-semibold text-lg mb-3">İş Otomasyonu</h3>
              <p className="text-gray-400">İş süreçlerinde AI entegrasyonu ve verimlilik artırma</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="text-[#c5ff21] text-3xl mb-4">🔒</div>
              <h3 className="font-semibold text-lg mb-3">AI Güvenliği</h3>
              <p className="text-gray-400">AI etiği, güvenlik ve veri koruma konuları</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="text-[#c5ff21] text-3xl mb-4">🚀</div>
              <h3 className="font-semibold text-lg mb-3">Gelecek Trendleri</h3>
              <p className="text-gray-400">AI teknolojilerinin geleceği ve kariyer fırsatları</p>
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
                  E
                </div>
                <div>
                  <h4 className="font-semibold">Elif Özkan</h4>
                  <p className="text-gray-400 text-sm">İçerik Üreticisi</p>
                </div>
              </div>
              <p className="text-gray-300">"ChatGPT eğitimi sayesinde içerik üretimim %300 arttı. Artık çok daha verimli çalışıyorum."</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#c5ff21] rounded-full flex items-center justify-center text-black font-bold mr-4">
                  C
                </div>
                <div>
                  <h4 className="font-semibold">Can Demir</h4>
                  <p className="text-gray-400 text-sm">Pazarlama Uzmanı</p>
                </div>
              </div>
              <p className="text-gray-300">"AI araçları ile pazarlama kampanyalarımız çok daha etkili hale geldi."</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#c5ff21] rounded-full flex items-center justify-center text-black font-bold mr-4">
                  Z
                </div>
                <div>
                  <h4 className="font-semibold">Zeynep Kaya</h4>
                  <p className="text-gray-400 text-sm">Grafik Tasarımcı</p>
                </div>
              </div>
              <p className="text-gray-300">"Midjourney eğitimi ile tasarım süreçlerim çok hızlandı. Müşterilerim çok memnun."</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#c5ff21] to-green-400 text-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Geleceğe Hazır Olun!</h2>
          <p className="text-xl mb-6 opacity-90">Yapay zeka teknolojilerini öğrenin ve kariyerinizi geleceğe taşıyın.</p>
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

export default YapayZekaTeknolojileri;
