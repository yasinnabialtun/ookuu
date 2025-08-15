import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Yapay Zeka ile Tasarım Süreçlerini Optimize Etme",
    excerpt: "Modern tasarım dünyasında yapay zeka araçlarının nasıl kullanılacağını ve süreçleri nasıl hızlandıracağını keşfedin. AI destekli tasarım araçları ile verimliliğinizi artırın.",
    category: "Yapay Zeka",
    date: "15 Aralık 2024",
    readTime: "5 dk",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center",
    slug: "yapay-zeka-tasarim-surecleri"
  },
  {
    id: 2,
    title: "Freelancer Tasarımcılar için Dijital Pazarlama Stratejileri",
    excerpt: "Bağımsız tasarımcıların portföylerini nasıl pazarlayacağını ve müşteri bulacağını öğrenin. Sosyal medya ve dijital platformlarda markanızı nasıl güçlendireceğinizi keşfedin.",
    category: "Dijital Pazarlama",
    date: "12 Aralık 2024",
    readTime: "7 dk",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
    slug: "freelancer-dijital-pazarlama"
  },
  {
    id: 3,
    title: "UI/UX Tasarımında Kullanıcı Deneyimi İlkeleri",
    excerpt: "Kullanıcı odaklı tasarım yaklaşımları ve modern UI/UX trendleri hakkında detaylı rehber. Kullanıcı deneyimini nasıl optimize edeceğinizi öğrenin.",
    category: "Tasarım",
    date: "10 Aralık 2024",
    readTime: "8 dk",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center",
    slug: "ui-ux-kullanici-deneyimi"
  },
  {
    id: 4,
    title: "ChatGPT ile İçerik Üretimi ve SEO Optimizasyonu",
    excerpt: "Yapay zeka destekli içerik üretimi ve arama motoru optimizasyonu teknikleri. ChatGPT kullanarak kaliteli içerik nasıl oluşturacağınızı keşfedin.",
    category: "Yapay Zeka",
    date: "8 Aralık 2024",
    readTime: "6 dk",
    image: "https://images.unsplash.com/photo-1676299251950-0d7063d3b8c7?w=400&h=300&fit=crop&crop=center",
    slug: "chatgpt-icerik-uretime-seo"
  },
  {
    id: 5,
    title: "Sosyal Medya Tasarımında Renk Psikolojisi",
    excerpt: "Marka kimliğinizi güçlendirecek renk seçimleri ve psikolojik etkileri. Renklerin kullanıcı davranışları üzerindeki etkisini anlayın.",
    category: "Tasarım",
    date: "5 Aralık 2024",
    readTime: "4 dk",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=300&fit=crop&crop=center",
    slug: "sosyal-medya-renk-psikolojisi"
  },
  {
    id: 6,
    title: "E-ticaret Sitelerinde Dönüşüm Oranını Artırma",
    excerpt: "Online satışları artıracak tasarım ve kullanıcı deneyimi iyileştirmeleri. E-ticaret sitenizin performansını nasıl artıracağınızı öğrenin.",
    category: "Dijital Pazarlama",
    date: "3 Aralık 2024",
    readTime: "9 dk",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
    slug: "e-ticaret-donusum-orani"
  },
  {
    id: 7,
    title: "Midjourney ile Görsel Tasarımda Yeni Ufuklar",
    excerpt: "AI görsel üretim araçlarının tasarım süreçlerine entegrasyonu. Midjourney kullanarak etkileyici görseller nasıl oluşturacağınızı keşfedin.",
    category: "Yapay Zeka",
    date: "1 Aralık 2024",
    readTime: "5 dk",
    image: "https://images.unsplash.com/photo-1686191128892-3b1c5b5b5b5b?w=400&h=300&fit=crop&crop=center",
    slug: "midjourney-gorsel-tasarim"
  },
  {
    id: 8,
    title: "Logo Tasarımında Minimalizm ve Marka Kimliği",
    excerpt: "Etkili logo tasarımı için minimalizm prensipleri ve marka kimliği oluşturma. Sade ve güçlü logolar nasıl tasarlanır öğrenin.",
    category: "Tasarım",
    date: "28 Kasım 2024",
    readTime: "6 dk",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
    slug: "logo-tasarim-minimalizm"
  },
  {
    id: 9,
    title: "Google Ads ile Hedef Kitleye Ulaşma Stratejileri",
    excerpt: "Dijital reklamcılıkta hedef kitle belirleme ve bütçe optimizasyonu. Google Ads kampanyalarınızı nasıl optimize edeceğinizi keşfedin.",
    category: "Dijital Pazarlama",
    date: "25 Kasım 2024",
    readTime: "7 dk",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    slug: "google-ads-hedef-kitle"
  },
  {
    id: 10,
    title: "Figma'da Prototip Oluşturma ve Kullanıcı Testleri",
    excerpt: "Figma kullanarak etkili prototipler oluşturma ve kullanıcı testleri yapma. Tasarım süreçlerinizi nasıl hızlandıracağınızı öğrenin.",
    category: "Tasarım",
    date: "22 Kasım 2024",
    readTime: "8 dk",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=center",
    slug: "figma-prototip-kullanici-testleri"
  }
];

const categories = ["Tümü", "Yapay Zeka", "Tasarım", "Dijital Pazarlama"];

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filteredPosts = activeCategory === "Tümü" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tasarım, yapay zeka ve dijital pazarlama dünyasından en güncel içerikler
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#c5ff21] text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.style.background = 'linear-gradient(135deg, #374151 0%, #1f2937 100%)';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#c5ff21]/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#c5ff21] text-black px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} okuma</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-[#c5ff21] font-semibold hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  Devamını Oku 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Güncel İçeriklerden Haberdar Olun
          </h3>
          <p className="text-gray-300 mb-6">
            En son blog yazılarımızı ve eğitim içeriklerimizi kaçırmayın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 rounded-full bg-gray-800 text-white border border-gray-700 focus:border-[#c5ff21] focus:outline-none"
            />
            <button className="px-6 py-3 bg-[#c5ff21] text-black font-semibold rounded-full hover:bg-white transition-colors">
              Abone Ol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
