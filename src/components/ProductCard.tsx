import React from 'react';
import { Product } from '../types/payment';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  showBuyButton?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart, 
  showBuyButton = true 
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: product.currency
    }).format(price);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-800">
      {/* Ürün Görseli */}
      <div className="relative mb-6">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-xl"
        />
        {discountPercentage > 0 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            %{discountPercentage} İndirim
          </div>
        )}
      </div>

      {/* Ürün Bilgileri */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-300 text-sm mb-3">{product.description}</p>
        
        {/* Süre */}
        {product.duration && (
          <div className="flex items-center text-gray-400 text-sm mb-3">
            <span className="mr-2">⏱️</span>
            <span>{product.duration}</span>
          </div>
        )}

        {/* Özellikler */}
        {product.features && product.features.length > 0 && (
          <div className="mb-4">
            <ul className="space-y-1">
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="text-gray-300 text-sm flex items-center">
                  <span className="text-[#c5ff21] mr-2">✓</span>
                  {feature}
                </li>
              ))}
              {product.features.length > 3 && (
                <li className="text-gray-400 text-sm">
                  +{product.features.length - 3} özellik daha
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Fiyat */}
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-[#c5ff21]">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>

      {/* Butonlar */}
      <div className="space-y-3">
        {showBuyButton && onAddToCart && (
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-[#c5ff21] text-black font-bold py-3 px-6 rounded-xl hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Sepete Ekle
          </button>
        )}
        
        <Link
          to={`/kurs/${product.id}`}
          className="block w-full text-center border-2 border-[#c5ff21] text-[#c5ff21] font-bold py-3 px-6 rounded-xl hover:bg-[#c5ff21] hover:text-black transition-all duration-300"
        >
          Detayları Gör
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
