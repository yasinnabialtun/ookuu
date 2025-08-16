import React from 'react';
import { Link } from 'react-router-dom';

const DijitalPazarlamaStratejileri: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="bg-[#c5ff21] text-black px-4 py-2 rounded-full text-sm font-semibold">
              Dijital Pazarlama
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Dijital Pazarlama Stratejileri
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Modern pazarlama teknikleri ile markanızı dijital dünyada büyütün. 
            SEO, sosyal medya, Google Ads ve içerik pazarlaması ile hedef kitlenize ulaşın.
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
            <div className="text-3xl md:text-4xl font-bold text-[#c5ff21] mb-2">12</div>
            <div className="text-gray-400">Hafta</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#c5ff21] mb-2">60+</div>
            <div className="text-gray-400">Saat Video</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#c5ff21] mb-2">10</div>
            <div className="text-gray-400">Proje</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#c5ff21] mb-2">95%</div>
            <div className="text-gray-400">İstihdam</div>
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
                  <h3 className="font-semibold text-lg mb-2">Dijital Pazarlama Temelleri</h3>
                  <p className="text-gray-400">Modern pazarlama yaklaşımları, stratejileri ve dijital dönüşüm</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
                <div className="bg-[#c5ff21] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">SEO ve İçerik Pazarlaması</h3>
                  <p className="text-gray-400">Arama motoru optimizasyonu, anahtar kelime araştırması ve içerik stratejileri</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
                <div className="bg-[#c5ff21] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Sosyal Medya Pazarlaması</h3>
                  <p className="text-gray-400">Instagram, TikTok, LinkedIn ve diğer platformlarda etkili stratejiler</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
                <div className="bg-[#c5ff21] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Google Ads ve PPC</h3>
                  <p className="text-gray-400">Dijital reklamcılık, kampanya yönetimi ve bütçe optimizasyonu</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
                <div className="bg-[#c5ff21] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Analitik ve ROI Ölçümü</h3>
                  <p className="text-gray-400">Google Analytics, performans analizi ve veri odaklı kararlar</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Kurs Detayları</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Süre:</span>
                <span className="font-semibold">12 Hafta</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Seviye:</span>
                <span className="font-semibold">Başlangıç - Orta</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Video İçerik:</span>
                <span className="font-semibold">60+ Saat</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Proje:</span>
                <span className="font-semibold">10 Uygulamalı Proje</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Sertifika:</span>
                <span className="font-semibold text-[#c5ff21]">Evet</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-400">Fiyat:</span>
                <span className="font-bold text-2xl text-[#c5ff21]">₺2,999</span>
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
              <div className="text-[#c5ff21] text-3xl mb-4">📱</div>
              <h3 className="font-semibold text-lg mb-3">Sosyal Medya Uzmanlığı</h3>
              <p className="text-gray-400">Instagram, TikTok, LinkedIn ve diğer platformlarda etkili stratejiler</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="text-[#c5ff21] text-3xl mb-4">🔍</div>
              <h3 className="font-semibold text-lg mb-3">SEO Uzmanlığı</h3>
              <p className="text-gray-400">Arama motoru optimizasyonu ve organik trafik artırma teknikleri</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="text-[#c5ff21] text-3xl mb-4">📊</div>
              <h3 className="font-semibold text-lg mb-3">Analitik ve Raporlama</h3>
              <p className="text-gray-400">Google Analytics ile veri analizi ve performans ölçümü</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="text-[#c5ff21] text-3xl mb-4">💰</div>
              <h3 className="font-semibold text-lg mb-3">Google Ads Uzmanlığı</h3>
              <p className="text-gray-400">PPC kampanyaları, reklam yönetimi ve bütçe optimizasyonu</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="text-[#c5ff21] text-3xl mb-4">📧</div>
              <h3 className="font-semibold text-lg mb-3">Email Marketing</h3>
              <p className="text-gray-400">E-posta pazarlaması, otomasyon ve lead nurturing</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="text-[#c5ff21] text-3xl mb-4">🎯</div>
              <h3 className="font-semibold text-lg mb-3">Hedef Kitle Analizi</h3>
              <p className="text-gray-400">Müşteri segmentasyonu, persona oluşturma ve davranış analizi</p>
            </div>
          </div>
        </div>

        {/* Marketing Tools Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Öğreneceğiniz Pazarlama Araçları</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl text-center hover:bg-gray-800 transition-colors">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold">Google Analytics</h3>
              <p className="text-gray-400 text-sm">Web sitesi analizi</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center hover:bg-gray-800 transition-colors">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold">Google Ads</h3>
              <p className="text-gray-400 text-sm">Dijital reklamcılık</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center hover:bg-gray-800 transition-colors">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-semibold">Mailchimp</h3>
              <p className="text-gray-400 text-sm">E-posta pazarlaması</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center hover:bg-gray-800 transition-colors">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold">Hootsuite</h3>
              <p className="text-gray-400 text-sm">Sosyal medya yönetimi</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center hover:bg-gray-800 transition-colors">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="font-semibold">SEMrush</h3>
              <p className="text-gray-400 text-sm">SEO ve rakip analizi</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center hover:bg-gray-800 transition-colors">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-semibold">Google Trends</h3>
              <p className="text-gray-400 text-sm">Trend analizi</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center hover:bg-gray-800 transition-colors">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-semibold">Canva</h3>
              <p className="text-gray-400 text-sm">Görsel tasarım</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center hover:bg-gray-800 transition-colors">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold">Google Data Studio</h3>
              <p className="text-gray-400 text-sm">Veri görselleştirme</p>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Başarı Metrikleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#c5ff21] mb-2">95%</div>
              <h3 className="font-semibold mb-2">İstihdam Oranı</h3>
              <p className="text-gray-400">Kursiyerlerimizin %95'i mezuniyet sonrası iş buldu</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#c5ff21] mb-2">₺15K</div>
              <h3 className="font-semibold mb-2">Ortalama Maaş</h3>
              <p className="text-gray-400">Dijital pazarlama uzmanları ortalama maaşı</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#c5ff21] mb-2">500+</div>
              <h3 className="font-semibold mb-2">Başarılı Proje</h3>
              <p className="text-gray-400">Kursiyerlerimizin tamamladığı proje sayısı</p>
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
                  <h4 className="font-semibold">Ayşe Yılmaz</h4>
                  <p className="text-gray-400 text-sm">Dijital Pazarlama Uzmanı</p>
                </div>
              </div>
              <p className="text-gray-300">"Bu kurs sayesinde kariyerimde büyük bir sıçrama yaptım. SEO ve Google Ads eğitimi gerçekten çok faydalıydı."</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#c5ff21] rounded-full flex items-center justify-center text-black font-bold mr-4">
                  M
                </div>
                <div>
                  <h4 className="font-semibold">Mehmet Demir</h4>
                  <p className="text-gray-400 text-sm">Sosyal Medya Uzmanı</p>
                </div>
              </div>
              <p className="text-gray-300">"Sosyal medya pazarlaması bölümü çok güncel ve iş hayatında çok işime yarıyor."</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#c5ff21] rounded-full flex items-center justify-center text-black font-bold mr-4">
                  Z
                </div>
                <div>
                  <h4 className="font-semibold">Zeynep Kaya</h4>
                  <p className="text-gray-400 text-sm">Freelance Pazarlama Danışmanı</p>
                </div>
              </div>
              <p className="text-gray-300">"Analitik eğitimi sayesinde müşterilerime çok daha detaylı raporlar sunabiliyorum."</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#c5ff21] to-green-400 text-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pazarlama Uzmanı Olun!</h2>
          <p className="text-xl mb-6 opacity-90">Dijital pazarlama dünyasına adım atın ve kariyerinizi şekillendirin.</p>
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

export default DijitalPazarlamaStratejileri;
