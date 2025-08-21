import React, { useState } from 'react';
import { CartItem, PaymentRequest } from '../types/payment';
import { HiLockClosed, HiShieldCheck } from 'react-icons/hi';

interface CheckoutFormProps {
  items: CartItem[];
  onBack: () => void;
  onPayment: (paymentRequest: PaymentRequest) => void;
  isLoading?: boolean;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  items,
  onBack,
  onPayment,
  isLoading = false
}) => {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    agreeToTerms: false,
    agreeToMarketing: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalPrice = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY'
    }).format(price);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Ad soyad gereklidir';
    }

    if (!formData.customerEmail.trim()) {
      newErrors.customerEmail = 'E-posta adresi gereklidir';
    } else if (!/\S+@\S+\.\S+/.test(formData.customerEmail)) {
      newErrors.customerEmail = 'Geçerli bir e-posta adresi giriniz';
    }

    if (!formData.customerPhone.trim()) {
      newErrors.customerPhone = 'Telefon numarası gereklidir';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'Kullanım şartlarını kabul etmelisiniz';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const paymentRequest: PaymentRequest = {
      amount: totalPrice,
      currency: 'TRY',
      description: `${totalItems} eğitim kursu satın alma`,
      customerEmail: formData.customerEmail,
      customerName: formData.customerName,
      customerPhone: formData.customerPhone,
      products: items.map(item => item.product),
      callbackUrl: `${window.location.origin}/payment/callback`,
      successUrl: `${window.location.origin}/payment/success`,
      cancelUrl: `${window.location.origin}/payment/cancel`
    };

    onPayment(paymentRequest);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Test Mode Notice */}
      <div className="bg-yellow-500 text-black text-center py-3 px-4 rounded-lg mb-6 font-bold">
        🧪 TEST MODU - Bu bir simülasyondur, gerçek ödeme yapılmaz
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-gray-900 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Ödeme Bilgileri</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Ad Soyad */}
            <div>
              <label className="block text-white font-medium mb-2">
                Ad Soyad *
              </label>
              <input
                type="text"
                value={formData.customerName}
                onChange={(e) => handleInputChange('customerName', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.customerName ? 'border-red-500' : 'border-gray-700'
                } bg-gray-800 text-white focus:outline-none focus:border-[#c5ff21]`}
                placeholder="Adınız ve soyadınız"
              />
              {errors.customerName && (
                <p className="text-red-400 text-sm mt-1">{errors.customerName}</p>
              )}
            </div>

            {/* E-posta */}
            <div>
              <label className="block text-white font-medium mb-2">
                E-posta Adresi *
              </label>
              <input
                type="email"
                value={formData.customerEmail}
                onChange={(e) => handleInputChange('customerEmail', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.customerEmail ? 'border-red-500' : 'border-gray-700'
                } bg-gray-800 text-white focus:outline-none focus:border-[#c5ff21]`}
                placeholder="ornek@email.com"
              />
              {errors.customerEmail && (
                <p className="text-red-400 text-sm mt-1">{errors.customerEmail}</p>
              )}
            </div>

            {/* Telefon */}
            <div>
              <label className="block text-white font-medium mb-2">
                Telefon Numarası *
              </label>
              <input
                type="tel"
                value={formData.customerPhone}
                onChange={(e) => handleInputChange('customerPhone', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.customerPhone ? 'border-red-500' : 'border-gray-700'
                } bg-gray-800 text-white focus:outline-none focus:border-[#c5ff21]`}
                placeholder="0555 123 45 67"
              />
              {errors.customerPhone && (
                <p className="text-red-400 text-sm mt-1">{errors.customerPhone}</p>
              )}
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                  className="mt-1 w-4 h-4 text-[#c5ff21] bg-gray-800 border-gray-700 rounded focus:ring-[#c5ff21]"
                />
                <span className="text-gray-300 text-sm">
                  <a href="/terms" className="text-[#c5ff21] hover:underline">Kullanım şartlarını</a> ve{' '}
                  <a href="/privacy" className="text-[#c5ff21] hover:underline">gizlilik politikasını</a> kabul ediyorum *
                </span>
              </label>
              {errors.agreeToTerms && (
                <p className="text-red-400 text-sm">{errors.agreeToTerms}</p>
              )}

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={formData.agreeToMarketing}
                  onChange={(e) => handleInputChange('agreeToMarketing', e.target.checked)}
                  className="mt-1 w-4 h-4 text-[#c5ff21] bg-gray-800 border-gray-700 rounded focus:ring-[#c5ff21]"
                />
                <span className="text-gray-300 text-sm">
                  Eğitim güncellemeleri ve özel teklifler için e-posta almak istiyorum
                </span>
              </label>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onBack}
                className="flex-1 px-6 py-3 border-2 border-gray-700 text-gray-300 rounded-lg hover:border-gray-600 hover:text-white transition-colors"
              >
                Geri Dön
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-[#c5ff21] text-black font-bold py-3 px-6 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'İşleniyor...' : 'Ödemeye Geç'}
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-900 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-6">Sipariş Özeti</h3>
          
          {/* Items */}
          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.product.id} className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-white text-sm">{item.product.name}</h4>
                  <p className="text-gray-400 text-xs">{item.product.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#c5ff21] font-bold">{formatPrice(item.product.price)}</p>
                  <p className="text-gray-400 text-xs">x{item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-300">Toplam ({totalItems} ürün):</span>
              <span className="text-[#c5ff21] font-bold text-2xl">
                {formatPrice(totalPrice)}
              </span>
            </div>
          </div>

          {/* Security Info */}
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <HiShieldCheck className="text-[#c5ff21] text-xl" />
              <span className="text-white font-medium">Güvenli Ödeme</span>
            </div>
            <p className="text-gray-400 text-sm">
              Shopier ile güvenli ödeme yapın. Kredi kartı bilgileriniz şifrelenir ve saklanmaz.
            </p>
          </div>

          {/* Guarantee */}
          <div className="mt-4 p-4 bg-gray-800 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <HiLockClosed className="text-[#c5ff21] text-xl" />
              <span className="text-white font-medium">45 Gün İade Garantisi</span>
            </div>
            <p className="text-gray-400 text-sm">
              Memnun kalmazsanız 45 gün içinde koşulsuz iade garantisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
