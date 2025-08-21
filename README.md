# Ookuu Akademi - Dijital Dönüşüm Platformu

Modern React ve TypeScript ile geliştirilmiş, dijital dönüşüm odaklı eğitim platformu.

## 🚀 Özellikler

- **Modern Teknoloji Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Performans Optimizasyonu**: Lazy loading, code splitting, optimizasyonlar
- **SEO Dostu**: Meta tags, semantic HTML, performans optimizasyonları
- **Preloader**: Kullanıcı deneyimini artıran yükleme ekranı
- **Calendly Entegrasyonu**: Randevu sistemi entegrasyonu
- **Shopier Ödeme Sistemi**: Güvenli e-ticaret entegrasyonu
- **YouTube API**: Parallax video efektleri
- **Modern UI/UX**: Gradient'lar, animasyonlar, hover efektleri

## 🛠️ Teknoloji Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: React Icons, FontAwesome
- **Linting**: ESLint
- **Code Quality**: TypeScript strict mode

## 📦 Kurulum

### Gereksinimler
- Node.js >= 16.0.0
- npm >= 8.0.0

### Adımlar

1. **Repository'yi klonlayın**
```bash
git clone <repository-url>
cd ookuuakademi
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Environment değişkenlerini ayarlayın**
```bash
cp env.example .env
```
`.env` dosyasını düzenleyerek Shopier API anahtarlarınızı ekleyin:
```
REACT_APP_SHOPIER_API_KEY=your_shopier_api_key_here
REACT_APP_SHOPIER_SECRET_KEY=your_shopier_secret_key_here
```

4. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
```

5. **Tarayıcıda açın**
```
http://localhost:5173
```

## 📜 Kullanılabilir Scriptler

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Build analizi
npm run build:analyze

# Preview production build
npm run preview

# Linting
npm run lint

# Type checking
npm run type-check

# Performance test (Lighthouse)
npm run performance
```

## 🏗️ Proje Yapısı

```
ookuuakademi/
├── public/                 # Statik dosyalar
│   ├── images/            # Görseller
│   └── videos/            # Videolar
├── src/
│   ├── components/        # React bileşenleri
│   │   ├── Header.tsx     # Navigasyon
│   │   ├── Hero.tsx       # Ana sayfa hero
│   │   ├── Preloader.tsx  # Yükleme ekranı
│   │   ├── ProductCard.tsx # Ürün kartı
│   │   ├── ShoppingCart.tsx # Alışveriş sepeti
│   │   ├── CheckoutForm.tsx # Ödeme formu
│   │   └── ...
│   ├── Pages/             # Sayfa bileşenleri
│   │   ├── Shop.tsx       # E-ticaret sayfası
│   │   ├── PaymentSuccess.tsx # Ödeme başarılı
│   │   ├── PaymentCancel.tsx # Ödeme iptal
│   │   └── ...
│   ├── services/          # Servisler
│   │   └── shopierService.ts # Shopier ödeme servisi
│   ├── types/             # TypeScript tipleri
│   │   └── payment.ts     # Ödeme tipleri
│   ├── data/              # Veri dosyaları
│   │   └── products.ts    # Ürün verileri
│   ├── assets/            # Proje varlıkları
│   ├── App.tsx            # Ana uygulama
│   └── main.tsx           # Giriş noktası
├── package.json           # Bağımlılıklar
├── vite.config.ts         # Vite konfigürasyonu
├── tailwind.config.js     # Tailwind konfigürasyonu
├── env.example            # Environment örneği
└── tsconfig.json          # TypeScript konfigürasyonu
```

## 🎨 Tasarım Sistemi

### Renkler
- **Ana Renkler**: Siyah (#000000), Beyaz (#FFFFFF)
- **Gradient'lar**: Mavi-Mor geçişleri
- **Accent**: Mavi tonları

### Tipografi
- **Font**: Inter (Google Fonts)
- **Ağırlıklar**: 400, 500, 600, 700, 800

### Bileşenler
- **Header**: Sabit navigasyon
- **Hero**: Tam ekran video arka plan
- **Preloader**: Yükleme animasyonu
- **Cards**: Hover efektli kartlar
- **Buttons**: Gradient butonlar

## 🔧 Konfigürasyon

### Vite Optimizasyonları
- Code splitting
- Manual chunks
- Dependency optimization
- Build optimizations

### Tailwind CSS
- Custom font family (Inter)
- Responsive breakpoints
- Custom utilities

### ESLint
- TypeScript support
- React Hooks rules
- React Refresh support
- Custom rules

### Shopier Ödeme Sistemi
- API entegrasyonu
- Güvenli ödeme işlemleri
- Callback URL'leri
- Test ve production ortamları

## 📱 Responsive Tasarım

- **Mobile First**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large Desktop**: 1280px+

## 🚀 Performance Optimizasyonları

- **Lazy Loading**: Görseller ve bileşenler
- **Code Splitting**: Route-based splitting
- **Image Optimization**: WebP format, responsive images
- **CSS Optimization**: Critical CSS, minification
- **JavaScript Optimization**: Tree shaking, minification

## 🔍 SEO Optimizasyonları

- Semantic HTML
- Meta tags
- Open Graph
- Structured data
- Performance optimization

## 🧪 Test ve Kalite

- **TypeScript**: Strict mode
- **ESLint**: Code quality
- **Build**: Production ready
- **Performance**: Lighthouse scores

## 📄 Lisans

Bu proje özel kullanım için geliştirilmiştir.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 💳 Ödeme Sistemi

### Shopier Entegrasyonu
- **Güvenli Ödeme**: SSL şifreleme ile güvenli ödeme
- **Çoklu Ödeme Yöntemi**: Kredi kartı, banka kartı, havale
- **Otomatik Onay**: Anında ödeme onayı
- **İade Sistemi**: 45 gün koşulsuz iade garantisi

### Özellikler
- Sepet yönetimi
- Ürün filtreleme ve arama
- Ödeme formu validasyonu
- Başarılı/başarısız ödeme sayfaları
- Local storage ile sepet koruma

### Test Modu
API anahtarlarınız yoksa sistem otomatik olarak test modunda çalışır:
- Gerçek ödeme yapılmaz
- Simüle edilmiş ödeme işlemleri
- %90 başarı oranı ile test
- Tüm özellikler test edilebilir

### Gerçek Ödeme İçin
1. Shopier hesabı oluşturun
2. API anahtarlarınızı alın
3. `.env` dosyasına anahtarları ekleyin
4. Test ödemesi yapın

## 📞 İletişim

- **Website**: [Ookuu Akademi](https://ookuuakademi.com)
- **Email**: info@ookuuakademi.com
- **Destek**: destek@ookuuakademi.com

---

**Ookuu Akademi** - Dijital Dönüşümün Öncüsü 🚀
