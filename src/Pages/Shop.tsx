import React, { useState, useEffect } from 'react';
import { Product, CartItem } from '../types/payment';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import ShoppingCart from '../components/ShoppingCart';
import CheckoutForm from '../components/CheckoutForm';
import shopierService from '../services/shopierService';
import { HiShoppingCart, HiX, HiFilter } from 'react-icons/hi';

type ViewMode = 'products' | 'cart' | 'checkout';

const Shop: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('products');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Local storage'dan sepet verilerini yükle
  useEffect(() => {
    const savedCart = localStorage.getItem('ookuu-cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Sepet verileri yüklenemedi:', error);
      }
    }
  }, []);

  // Sepet verilerini local storage'a kaydet
  useEffect(() => {
    localStorage.setItem('ookuu-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { product, quantity: 1 }];
      }
    });
    
    // Sepeti aç
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('ookuu-cart');
  };

  const handleCheckout = async (paymentRequest: any) => {
    setIsLoading(true);
    
    try {
      const response = await shopierService.createPayment(paymentRequest);
      
      if (response.success && response.paymentUrl) {
        // Ödeme sayfasına yönlendir
        window.location.href = response.paymentUrl;
      } else {
        alert(response.error || 'Ödeme başlatılamadı');
      }
    } catch (error) {
      console.error('Ödeme hatası:', error);
      alert('Ödeme işlemi sırasında bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Filtreleme
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Test Mode Banner */}
      <div className="bg-yellow-500 text-black text-center py-2 px-4 font-bold">
        🧪 TEST MODU - Gerçek ödeme yapılmaz, sadece simülasyon
      </div>
      
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <h1 className="text-2xl font-bold text-[#c5ff21]">Ooku Akademi</h1>
              
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Eğitim ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#c5ff21]"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#c5ff21]"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'Tüm Kategoriler' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-[#c5ff21] text-black px-6 py-2 rounded-lg font-bold hover:bg-white transition-colors"
            >
              <HiShoppingCart className="inline mr-2" />
              Sepet
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {viewMode === 'products' && (
          <>
            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">Aradığınız kriterlere uygun eğitim bulunamadı.</p>
              </div>
            )}
          </>
        )}

        {viewMode === 'checkout' && (
          <CheckoutForm
            items={cartItems}
            onBack={() => setViewMode('products')}
            onPayment={handleCheckout}
            isLoading={isLoading}
          />
        )}
      </div>

      {/* Shopping Cart */}
      <ShoppingCart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onCheckout={() => {
          setIsCartOpen(false);
          setViewMode('checkout');
        }}
      />
    </div>
  );
};

export default Shop;
