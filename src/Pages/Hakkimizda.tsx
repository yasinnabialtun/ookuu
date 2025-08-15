import React from 'react';
import { Link } from 'react-router-dom';

const Hakkimizda: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hakkımızda
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dijital dünyada yaratıcılığı ve teknolojiyi birleştirerek geleceğin profesyonellerini yetiştiriyoruz
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-900 rounded-2xl p-8">
            <div className="text-[#c5ff21] text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold mb-4">Misyonumuz</h2>
            <p className="text-gray-300 leading-relaxed">
              Bireylerin dijital becerilerini geliştirerek, yaratıcılıklarını teknoloji ile birleştirmelerini sağlamak. 
              Her öğrencinin kendi potansiyelini keşfetmesine ve dijital dünyada başarılı olmasına yardımcı olmak.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8">
            <div className="text-[#c5ff21] text-4xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold mb-4">Vizyonumuz</h2>
            <p className="text-gray-300 leading-relaxed">
              Türkiye'nin önde gelen dijital eğitim platformu olarak, yapay zeka ve yaratıcı teknolojiler alanında 
              global standartlarda eğitim veren, yenilikçi ve sürdürülebilir bir ekosistem oluşturmak.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hikayemiz</h2>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              2023 yılında kurulan ookuuakademi, dijital dönüşümün hızlandığı bir dönemde 
              eğitim ve teknoloji alanında fark yaratmak amacıyla yola çıktı. Kurucumuz Ataberk Soylu'nun 
              akademik araştırmaları ve endüstri deneyimi, platformumuzun temelini oluşturdu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-gray-900 p-6 rounded-xl">
              <div className="text-5xl font-bold text-[#c5ff21] mb-3">2023</div>
              <h3 className="font-semibold mb-2">Kuruluş</h3>
              <p className="text-gray-400 text-sm">ookuuakademi'nin temelleri atıldı ve ilk eğitimler başladı</p>
            </div>
            <div className="text-center bg-gray-900 p-6 rounded-xl">
              <div className="text-5xl font-bold text-[#c5ff21] mb-3">1000+</div>
              <h3 className="font-semibold mb-2">Öğrenci</h3>
              <p className="text-gray-400 text-sm">Başarıyla mezun olan öğrenci sayısı ve büyüyen topluluk</p>
            </div>
            <div className="text-center bg-gray-900 p-6 rounded-xl">
              <div className="text-5xl font-bold text-[#c5ff21] mb-3">50+</div>
              <h3 className="font-semibold mb-2">Eğitim</h3>
              <p className="text-gray-400 text-sm">Toplam eğitim içeriği ve sürekli güncellenen programlar</p>
            </div>
            <div className="text-center bg-gray-900 p-6 rounded-xl">
              <div className="text-5xl font-bold text-[#c5ff21] mb-3">95%</div>
              <h3 className="font-semibold mb-2">Memnuniyet</h3>
              <p className="text-gray-400 text-sm">Öğrenci memnuniyet oranı ve başarı hikayeleri</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <div className="text-[#c5ff21] text-3xl mb-3">💡</div>
              <h3 className="font-semibold mb-2">İnovasyon</h3>
              <p className="text-gray-400 text-sm">Sürekli öğrenme ve yenilikçi yaklaşımlar</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <div className="text-[#c5ff21] text-3xl mb-3">🤝</div>
              <h3 className="font-semibold mb-2">Topluluk</h3>
              <p className="text-gray-400 text-sm">Güçlü öğrenci ve mentor ağı</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <div className="text-[#c5ff21] text-3xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">Kalite</h3>
              <p className="text-gray-400 text-sm">En yüksek standartlarda eğitim</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <div className="text-[#c5ff21] text-3xl mb-3">🌱</div>
              <h3 className="font-semibold mb-2">Sürdürülebilirlik</h3>
              <p className="text-gray-400 text-sm">Uzun vadeli başarı odaklı yaklaşım</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Ekibimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-2xl overflow-hidden">
              <div className="h-48 bg-gray-800 relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center" 
                  alt="Ataberk Soylu"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.style.background = 'linear-gradient(135deg, #374151 0%, #1f2937 100%)';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#c5ff21]/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ataberk Soylu</h3>
                <p className="text-[#c5ff21] mb-3">Kurucu & CEO</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Dijital tasarım ve yapay zeka alanında 10+ yıl deneyim. 
                  Türkiye'de yapay zeka ve yaratıcılık üzerine ilk akademik tezin yazarı.
                  Endüstri deneyimi ve akademik araştırmaları ile eğitim programlarımızın temelini oluşturuyor.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl overflow-hidden">
              <div className="h-48 bg-gray-800 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c5ff21]/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Uzman Eğitmenler</h3>
                <p className="text-[#c5ff21] mb-3">Eğitim Ekibi</p>
                <p className="text-gray-400 text-sm">
                  Alanında uzman eğitmenlerimiz ile güncel teknolojileri 
                  ve endüstri deneyimini öğrencilerimizle paylaşıyoruz.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl overflow-hidden">
              <div className="h-48 bg-gray-800 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c5ff21]/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Teknoloji Ekibi</h3>
                <p className="text-[#c5ff21] mb-3">Platform Geliştirme</p>
                <p className="text-gray-400 text-sm">
                  Modern teknolojiler kullanarak en iyi öğrenme deneyimini 
                  sunmak için sürekli platformumuzu geliştiriyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Dijital Geleceğin Bir Parçası Olun
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            ookuuakademi ile birlikte yaratıcılığınızı keşfedin, 
            teknolojiyi öğrenin ve dijital dünyada fark yaratın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="px-6 py-3 bg-[#c5ff21] text-black font-semibold rounded-full hover:bg-white transition-colors"
            >
              Eğitimleri Keşfet
            </Link>
            <Link 
              to="/#iletisim" 
              className="px-6 py-3 border border-[#c5ff21] text-[#c5ff21] font-semibold rounded-full hover:bg-[#c5ff21] hover:text-black transition-colors"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hakkimizda;
