import React, { useState } from 'react';
import { CartItem, Product } from '../types/payment';
import { HiX, HiShoppingCart, HiTrash } from 'react-icons/hi';

interface ShoppingCartProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveItem: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onCheckout: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  items,
  isOpen,
  onClose,
  onRemoveItem,
  onUpdateQuantity,
  onCheckout
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY'
    }).format(price);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <div className="flex items-center">
              <HiShoppingCart className="text-[#c5ff21] text-2xl mr-3" />
              <h2 className="text-xl font-bold text-white">Sepetim</h2>
              {totalItems > 0 && (
                <span className="ml-2 bg-[#c5ff21] text-black px-2 py-1 rounded-full text-sm font-bold">
                  {totalItems}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <HiX size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <HiShoppingCart className="text-gray-600 text-6xl mx-auto mb-4" />
                <p className="text-gray-400 text-lg">Sepetiniz boş</p>
                <p className="text-gray-500 text-sm mt-2">
                  Eğitimlerimizi keşfetmeye başlayın
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      {/* Product Image */}
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      
                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-sm mb-1">
                          {item.product.name}
                        </h3>
                        <p className="text-gray-400 text-xs mb-2">
                          {item.product.duration}
                        </p>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                            className="w-6 h-6 bg-gray-700 text-white rounded flex items-center justify-center hover:bg-gray-600 transition-colors"
                          >
                            -
                          </button>
                          <span className="text-white font-medium min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="w-6 h-6 bg-gray-700 text-white rounded flex items-center justify-center hover:bg-gray-600 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Price and Remove */}
                      <div className="text-right">
                        <p className="text-[#c5ff21] font-bold text-sm">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-red-400 hover:text-red-300 mt-2"
                        >
                          <HiTrash size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-800 p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white font-semibold">Toplam:</span>
                <span className="text-[#c5ff21] font-bold text-xl">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              
              <button
                onClick={onCheckout}
                className="w-full bg-[#c5ff21] text-black font-bold py-4 px-6 rounded-xl hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ödemeye Geç ({totalItems} ürün)
              </button>
              
              <p className="text-gray-400 text-xs text-center mt-3">
                45 gün iade garantisi • Güvenli ödeme
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
