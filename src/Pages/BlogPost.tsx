import React from 'react';
import { useParams, Link } from 'react-router-dom';

interface BlogPostData {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  author: string;
  tags: string[];
}

const blogPosts: BlogPostData[] = [
  {
    id: 1,
    title: "Yapay Zeka ile Tasarım Süreçlerini Optimize Etme",
    excerpt: "Modern tasarım dünyasında yapay zeka araçlarının nasıl kullanılacağını ve süreçleri nasıl hızlandıracağını keşfedin.",
    content: `
      <h2>Giriş</h2>
      <p>Yapay zeka teknolojileri, tasarım dünyasında devrim yaratmaya devam ediyor. Günümüzde tasarımcılar, AI destekli araçlar sayesinde daha verimli ve yaratıcı çalışmalar üretebiliyor. Bu makalede, yapay zeka araçlarının tasarım süreçlerine nasıl entegre edileceğini ve bu entegrasyonun sağlayacağı avantajları detaylı olarak inceleyeceğiz.</p>

      <h2>AI Destekli Tasarım Araçları</h2>
      <p>Yapay zeka destekli tasarım araçları, tasarımcıların iş yükünü önemli ölçüde azaltırken, yaratıcılıklarını artırmalarına olanak sağlıyor. Bu araçlar arasında:</p>
      <ul>
        <li><strong>Midjourney:</strong> Metin tabanlı görsel üretimi</li>
        <li><strong>DALL-E:</strong> OpenAI'nin görsel üretim aracı</li>
        <li><strong>Adobe Firefly:</strong> Adobe'nin AI destekli tasarım araçları</li>
        <li><strong>Figma AI:</strong> UI/UX tasarımında AI desteği</li>
      </ul>

      <h2>Tasarım Süreçlerinde AI Entegrasyonu</h2>
      <p>AI araçlarının tasarım süreçlerine entegrasyonu, geleneksel tasarım yaklaşımlarını tamamlayıcı bir rol oynar. Bu entegrasyon şu aşamalarda gerçekleşir:</p>

      <h3>1. Araştırma ve İlham Aşaması</h3>
      <p>AI araçları, tasarımcıların ilham bulmasına yardımcı olur. Örneğin, Midjourney kullanarak belirli bir stil veya konsept üzerine hızlıca görsel örnekler üretebilirsiniz.</p>

      <h3>2. Prototip Oluşturma</h3>
      <p>Figma AI gibi araçlar, tasarımcıların prototip oluşturma sürecini hızlandırır. AI, kullanıcı davranışlarını analiz ederek daha etkili tasarım önerileri sunar.</p>

      <h3>3. İterasyon ve Optimizasyon</h3>
      <p>AI destekli araçlar, tasarım iterasyonlarını hızlandırır ve kullanıcı geri bildirimlerini analiz ederek otomatik iyileştirmeler önerir.</p>

      <h2>Verimlilik Artışı</h2>
      <p>AI araçlarının kullanımı, tasarım süreçlerinde ortalama %40-60 oranında verimlilik artışı sağlar. Bu artış şu alanlarda görülür:</p>
      <ul>
        <li>Hızlı prototip oluşturma</li>
        <li>Otomatik renk paleti önerileri</li>
        <li>Tipografi optimizasyonu</li>
        <li>Responsive tasarım uyumluluğu</li>
      </ul>

      <h2>Yaratıcılık ve AI Dengesi</h2>
      <p>AI araçlarının kullanımında en önemli nokta, yaratıcılık ile teknoloji arasında doğru dengeyi kurmaktır. AI, tasarımcının yaratıcı vizyonunu desteklemeli, onun yerini almamalıdır.</p>

      <h2>Sonuç</h2>
      <p>Yapay zeka teknolojileri, tasarım dünyasında vazgeçilmez bir araç haline gelmiştir. Bu araçları doğru şekilde kullanarak, tasarımcılar hem verimliliklerini artırabilir hem de daha yaratıcı çalışmalar üretebilirler.</p>
    `,
    category: "Yapay Zeka",
    date: "15 Aralık 2024",
    readTime: "5 dk",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center",
    slug: "yapay-zeka-tasarim-surecleri",
    author: "Ookuu Akademi",
    tags: ["Yapay Zeka", "Tasarım", "AI", "Midjourney", "Figma"]
  },
  {
    id: 2,
    title: "Freelancer Tasarımcılar için Dijital Pazarlama Stratejileri",
    excerpt: "Bağımsız tasarımcıların portföylerini nasıl pazarlayacağını ve müşteri bulacağını öğrenin.",
    content: `
      <h2>Freelancer Tasarımcılar için Dijital Pazarlama Rehberi</h2>
      <p>Freelancer tasarımcılar için dijital pazarlama, iş bulma ve müşteri edinme süreçlerinde kritik öneme sahiptir. Bu kapsamlı rehberde, bağımsız tasarımcıların dijital varlıklarını nasıl güçlendireceğini ve sürdürülebilir bir iş modeli oluşturacağını öğreneceksiniz.</p>

      <h2>Kişisel Marka Oluşturma</h2>
      <p>Freelancer tasarımcılar için kişisel marka oluşturma, uzun vadeli başarının temelidir. İşte etkili bir kişisel marka oluşturmanın adımları:</p>

      <h3>1. Benzersiz Değer Önerisi</h3>
      <p>Piyasada binlerce tasarımcı varken, sizi farklı kılan nedir? Bu soruyu yanıtlayarak benzersiz değer önerinizi belirleyin.</p>

      <h3>2. Tutarlı Görsel Kimlik</h3>
      <p>Logo, renk paleti, tipografi ve genel görsel diliniz tutarlı olmalıdır. Bu tutarlılık, güven oluşturur ve hatırlanabilirliği artırır.</p>

      <h3>3. Uzmanlık Alanı Belirleme</h3>
      <p>Genel bir tasarımcı olmak yerine, belirli bir alanda uzmanlaşın. Örneğin: UI/UX tasarımı, logo tasarımı, sosyal medya tasarımı gibi.</p>

      <h2>Portföy Optimizasyonu</h2>
      <p>Güçlü bir portföy, potansiyel müşterileri etkilemenin en etkili yoludur:</p>

      <ul>
        <li><strong>Kaliteli İçerik:</strong> En iyi çalışmalarınızı sergileyin</li>
        <li><strong>Proje Hikayeleri:</strong> Her projenin arkasındaki süreci anlatın</li>
        <li><strong>Sonuçlar:</strong> Çalışmalarınızın müşteriye sağladığı faydaları gösterin</li>
        <li><strong>Güncel İçerik:</strong> Portföyünüzü düzenli olarak güncelleyin</li>
      </ul>

      <h2>Sosyal Medya Stratejileri</h2>
      <p>Sosyal medya, freelancer tasarımcılar için mükemmel bir pazarlama platformudur:</p>

      <h3>Instagram</h3>
      <p>Görsel ağırlıklı içerikler için ideal. Çalışma süreçlerinizi, sonuçları ve günlük tasarım aktivitelerinizi paylaşın.</p>

      <h3>LinkedIn</h3>
      <p>Profesyonel ağınızı genişletmek ve B2B müşteriler bulmak için mükemmel platform.</p>

      <h3>Behance/Dribbble</h3>
      <p>Tasarım topluluklarında aktif olun, geri bildirim alın ve yeni fırsatlar keşfedin.</p>

      <h2>İçerik Pazarlaması</h2>
      <p>Değerli içerik üretmek, uzmanlığınızı gösterir ve organik trafik çeker:</p>

      <ul>
        <li>Blog yazıları yazın</li>
        <li>Video içerikler oluşturun</li>
        <li>Podcast'lerde konuk olun</li>
        <li>Webinar'lar düzenleyin</li>
      </ul>

      <h2>Müşteri İlişkileri Yönetimi</h2>
      <p>Mevcut müşterilerinizle güçlü ilişkiler kurmak, tekrarlayan işler ve referanslar sağlar.</p>

      <h2>Sonuç</h2>
      <p>Freelancer tasarımcılar için dijital pazarlama, sürekli öğrenme ve adaptasyon gerektiren bir süreçtir. Bu stratejileri uygulayarak, sürdürülebilir bir freelancer kariyeri oluşturabilirsiniz.</p>
    `,
    category: "Dijital Pazarlama",
    date: "12 Aralık 2024",
    readTime: "7 dk",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=center",
    slug: "freelancer-dijital-pazarlama",
    author: "Ookuu Akademi",
    tags: ["Freelancer", "Dijital Pazarlama", "Kişisel Marka", "Portföy", "Sosyal Medya"]
  },
  {
    id: 3,
    title: "UI/UX Tasarımında Kullanıcı Deneyimi İlkeleri",
    excerpt: "Kullanıcı odaklı tasarım yaklaşımları ve modern UI/UX trendleri hakkında detaylı rehber.",
    content: `
      <h2>Kullanıcı Deneyimi Tasarımının Temelleri</h2>
      <p>UI/UX tasarımı, kullanıcıların dijital ürünlerle etkileşimini optimize etmek için kullanılan bilimsel ve yaratıcı bir süreçtir. Bu makalede, etkili kullanıcı deneyimi tasarımının temel ilkelerini ve modern uygulamalarını inceleyeceğiz.</p>

      <h2>Temel UX İlkeleri</h2>
      <p>Başarılı bir kullanıcı deneyimi tasarımı, aşağıdaki temel ilkelere dayanır:</p>

      <h3>1. Kullanıcı Odaklı Tasarım</h3>
      <p>Tasarım sürecinin merkezinde kullanıcı ihtiyaçları ve davranışları yer almalıdır. Kullanıcı araştırması, persona oluşturma ve kullanıcı testleri bu sürecin vazgeçilmez parçalarıdır.</p>

      <h3>2. Basitlik ve Netlik</h3>
      <p>Kullanıcılar karmaşık arayüzlerle karşılaştığında kafa karışıklığı yaşar. Basit, net ve anlaşılır tasarımlar her zaman daha etkilidir.</p>

      <h3>3. Tutarlılık</h3>
      <p>Tasarım elementleri, renkler, tipografi ve etkileşimler tutarlı olmalıdır. Bu tutarlılık, kullanıcı güveni oluşturur ve öğrenme eğrisini azaltır.</p>

      <h3>4. Erişilebilirlik</h3>
      <p>Tasarımlar tüm kullanıcılar için erişilebilir olmalıdır. Renk körlüğü, görme engeli veya motor beceri sorunları olan kullanıcılar da ürününüzü rahatlıkla kullanabilmelidir.</p>

      <h2>Modern UI/UX Trendleri</h2>
      <p>2024 yılında öne çıkan UI/UX tasarım trendleri:</p>

      <h3>1. Glassmorphism</h3>
      <p>Cam benzeri efektler ve bulanık arka planlar ile modern görünüm sağlar.</p>

      <h3>2. Micro-interactions</h3>
      <p>Küçük animasyonlar ve geçişler kullanıcı deneyimini zenginleştirir.</p>

      <h3>3. Dark Mode</h3>
      <p>Göz yorgunluğunu azaltan ve enerji tasarrufu sağlayan karanlık tema tercihi.</p>

      <h3>4. Voice User Interface (VUI)</h3>
      <p>Sesli komutlarla etkileşim kurma özelliği.</p>

      <h2>Kullanıcı Araştırması Yöntemleri</h2>
      <p>Etkili UX tasarımı için kullanıcı araştırması şarttır:</p>

      <ul>
        <li><strong>Anketler:</strong> Geniş kitlelerden veri toplama</li>
        <li><strong>Görüşmeler:</strong> Derinlemesine kullanıcı ihtiyaçları analizi</li>
        <li><strong>Kullanıcı Testleri:</strong> Prototiplerin gerçek kullanıcılarla test edilmesi</li>
        <li><strong>A/B Testleri:</strong> Farklı tasarım versiyonlarının karşılaştırılması</li>
      </ul>

      <h2>Prototip Oluşturma</h2>
      <p>Prototipler, tasarım fikirlerini test etmek için mükemmel araçlardır:</p>

      <h3>Wireframe</h3>
      <p>Sayfa düzeni ve içerik organizasyonu için basit çizimler.</p>

      <h3>Mockup</h3>
      <p>Görsel tasarım detaylarını içeren statik prototipler.</p>

      <h3>Interactive Prototype</h3>
      <p>Kullanıcı etkileşimlerini simüle eden interaktif prototipler.</p>

      <h2>Kullanıcı Testi Süreci</h2>
      <p>Kullanıcı testleri, tasarımın etkinliğini değerlendirmek için kritiktir:</p>

      <ol>
        <li>Test senaryoları hazırlayın</li>
        <li>Hedef kullanıcıları belirleyin</li>
        <li>Test ortamını hazırlayın</li>
        <li>Testleri gerçekleştirin</li>
        <li>Sonuçları analiz edin</li>
        <li>İyileştirmeleri uygulayın</li>
      </ol>

      <h2>Sonuç</h2>
      <p>UI/UX tasarımı, sürekli öğrenme ve iyileştirme gerektiren dinamik bir alandır. Kullanıcı odaklı yaklaşım ve modern trendleri takip ederek, kullanıcı dostu ve etkili dijital ürünler tasarlayabilirsiniz.</p>
    `,
    category: "Tasarım",
    date: "10 Aralık 2024",
    readTime: "8 dk",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop&crop=center",
    slug: "ui-ux-kullanici-deneyimi",
    author: "Ookuu Akademi",
    tags: ["UI/UX", "Kullanıcı Deneyimi", "Tasarım", "Prototip", "Kullanıcı Testi"]
  }
];

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white pt-24">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Makale Bulunamadı</h1>
          <p className="text-gray-300 mb-8">Aradığınız makale mevcut değil.</p>
          <Link 
            to="/blog" 
            className="bg-[#c5ff21] text-black font-semibold px-6 py-3 rounded-full hover:bg-white transition-colors"
          >
            Blog'a Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Anasayfa</Link></li>
            <li>/</li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li>/</li>
            <li className="text-white">{post.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-[#c5ff21] text-black px-3 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center space-x-4">
              <span>Yazar: {post.author}</span>
              <span>{post.date}</span>
              <span>{post.readTime} okuma</span>
            </div>
          </div>
          
          {/* Tags */}
          {post.tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 md:h-80 object-cover rounded-2xl"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="text-gray-300 leading-relaxed"
          />
        </article>

        {/* Related Articles */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-2xl font-bold mb-6">İlgili Makaleler</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="block bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors"
                >
                  <h4 className="text-lg font-semibold mb-2 line-clamp-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>{relatedPost.date}</span>
                    <span className="mx-2">•</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Share and Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Paylaş:</span>
              <button className="text-gray-400 hover:text-[#c5ff21] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              <button className="text-gray-400 hover:text-[#c5ff21] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </button>
              <button className="text-gray-400 hover:text-[#c5ff21] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
            <Link 
              to="/blog" 
              className="bg-[#c5ff21] text-black font-semibold px-6 py-3 rounded-full hover:bg-white transition-colors"
            >
              Tüm Yazılar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
