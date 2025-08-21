import { Product } from '../types/payment';

export const products: Product[] = [
  {
    id: 'yaratici-dijital-tasarim',
    name: 'Yaratıcı Dijital Tasarım',
    description: 'Geleceğin Dijital Tasarımlarını Şekillendirin: AI, AR ve Daha Fazlası',
    price: 1999,
    originalPrice: 2999,
    currency: 'TRY',
    image: '/images/image1.svg',
    category: 'Tasarım',
    duration: '10 Hafta',
    features: [
      '60+ Saat Video İçerik',
      '10 Gerçek Proje',
      'AI Entegrasyonu',
      'AR/VR Tasarım',
      'Global Sertifika',
      '7/24 Mentor Desteği',
      '45 Gün İade Garantisi'
    ],
    shopierProductId: 'yaratici-dijital-tasarim-2025'
  },
  {
    id: 'yapay-zeka-teknolojileri',
    name: 'Yapay Zeka Teknolojileri',
    description: 'AI ve Makine Öğrenmesi ile Geleceği Şekillendirin',
    price: 2499,
    originalPrice: 3499,
    currency: 'TRY',
    image: '/images/image2.svg',
    category: 'Teknoloji',
    duration: '12 Hafta',
    features: [
      '80+ Saat Video İçerik',
      '15 AI Projesi',
      'Python & TensorFlow',
      'Deep Learning',
      'NLP & Computer Vision',
      'Global Sertifika',
      '7/24 Mentor Desteği',
      '45 Gün İade Garantisi'
    ],
    shopierProductId: 'yapay-zeka-teknolojileri-2025'
  },
  {
    id: 'dijital-pazarlama-stratejileri',
    name: 'Dijital Pazarlama Stratejileri',
    description: 'Modern Pazarlama Teknikleri ile Markanızı Büyütün',
    price: 1799,
    originalPrice: 2799,
    currency: 'TRY',
    image: '/images/image3.svg',
    category: 'Pazarlama',
    duration: '8 Hafta',
    features: [
      '50+ Saat Video İçerik',
      '8 Pazarlama Projesi',
      'SEO & SEM',
      'Sosyal Medya',
      'Content Marketing',
      'Analytics & ROI',
      'Global Sertifika',
      '7/24 Mentor Desteği',
      '45 Gün İade Garantisi'
    ],
    shopierProductId: 'dijital-pazarlama-stratejileri-2025'
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
