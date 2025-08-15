import React from 'react';
import { Link } from 'react-router-dom';

const DijitalPazarlamaStratejileri: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Dijital Pazarlama Stratejileri
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Modern pazarlama teknikleri ile markanızı dijital dünyada büyütün
          </p>
        </div>

        {/* Course Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Kurs İçeriği</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-[#c5ff21] text-xl">✓</span>
                <div>
                  <h3 className="font-semibold">Dijital Pazarlama Temelleri</h3>
                  <p className="text-gray-400">Modern pazarlama yaklaşımları ve stratejileri</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-[#c5ff21] text-xl">✓</span>
                <div>
                  <h3 className="font-semibold">Sosyal Medya Pazarlaması</h3>
                  <p className="text-gray-400">Platform bazlı içerik stratejileri</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-[#c5ff21] text-xl">✓</span>
                <div>
                  <h3 className="font-semibold">SEO ve İçerik Pazarlaması</h3>
                  <p className="text-gray-400">Arama motoru optimizasyonu ve içerik stratejileri</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-[#c5ff21] text-xl">✓</span>
                <div>
                  <h3 className="font-semibold">Google Ads ve PPC</h3>
                  <p className="text-gray-400">Dijital reklamcılık ve kampanya yönetimi</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-[#c5ff21] text-xl">✓</span>
                <div>
                  <h3 className="font-semibold">Analitik ve ROI Ölçümü</h3>
                  <p className="text-gray-400">Performans analizi ve veri odaklı kararlar</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Kurs Detayları</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Süre:</span>
                <span className="font-semibold">12 Hafta</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Seviye:</span>
                <span className="font-semibold">Başlangıç - Orta</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Video İçerik:</span>
                <span className="font-semibold">60+ Saat</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Proje:</span>
                <span className="font-semibold">10 Uygulamalı Proje</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Sertifika:</span>
                <span className="font-semibold text-[#c5ff21]">Evet</span>
              </div>
            </div>
            
            <button className="w-full mt-8 bg-[#c5ff21] text-black font-bold py-4 rounded-xl hover:bg-white transition-colors">
              Kursa Kayıt Ol
            </button>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Neler Öğreneceksiniz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="text-[#c5ff21] text-2xl mb-3">📱</div>
              <h3 className="font-semibold mb-2">Sosyal Medya</h3>
              <p className="text-gray-400">Instagram, TikTok, LinkedIn ve diğer platformlar</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="text-[#c5ff21] text-2xl mb-3">🔍</div>
              <h3 className="font-semibold mb-2">SEO Uzmanlığı</h3>
              <p className="text-gray-400">Arama motoru optimizasyonu ve organik trafik</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="text-[#c5ff21] text-2xl mb-3">📊</div>
              <h3 className="font-semibold mb-2">Google Analytics</h3>
              <p className="text-gray-400">Veri analizi ve performans ölçümü</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="text-[#c5ff21] text-2xl mb-3">💰</div>
              <h3 className="font-semibold mb-2">Google Ads</h3>
              <p className="text-gray-400">PPC kampanyaları ve reklam yönetimi</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="text-[#c5ff21] text-2xl mb-3">📧</div>
              <h3 className="font-semibold mb-2">Email Marketing</h3>
              <p className="text-gray-400">E-posta pazarlaması ve otomasyon</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="text-[#c5ff21] text-2xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">Hedef Kitle</h3>
              <p className="text-gray-400">Müşteri segmentasyonu ve persona oluşturma</p>
            </div>
          </div>
        </div>

        {/* Marketing Tools Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Öğreneceğiniz Pazarlama Araçları</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold">Google Analytics</h3>
              <p className="text-gray-400 text-sm">Web sitesi analizi</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold">Google Ads</h3>
              <p className="text-gray-400 text-sm">Dijital reklamcılık</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-semibold">Mailchimp</h3>
              <p className="text-gray-400 text-sm">E-posta pazarlaması</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold">Hootsuite</h3>
              <p className="text-gray-400 text-sm">Sosyal medya yönetimi</p>
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

        {/* Back to Courses */}
        <div className="text-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-[#c5ff21] hover:text-white transition-colors"
          >
            ← Diğer Eğitimlere Dön
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DijitalPazarlamaStratejileri;
