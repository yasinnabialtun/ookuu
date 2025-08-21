import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { HiCheckCircle, HiDownload, HiMail, HiHome } from 'react-icons/hi';

const PaymentSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    // URL'den ödeme bilgilerini al
    const transactionId = searchParams.get('transaction_id');
    const amount = searchParams.get('amount');
    const currency = searchParams.get('currency');

    if (transactionId) {
      setOrderDetails({
        transactionId,
        amount,
        currency,
        date: new Date().toLocaleDateString('tr-TR'),
        time: new Date().toLocaleTimeString('tr-TR')
      });
    }

    // Local storage'dan sepeti temizle
    localStorage.removeItem('ookuu-cart');
    
    setIsLoading(false);
  }, [searchParams]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c5ff21] mx-auto mb-4"></div>
          <p className="text-gray-400">Ödeme bilgileri yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Test Mode Banner */}
      <div className="bg-yellow-500 text-black text-center py-2 px-4 font-bold">
        🧪 TEST MODU - Bu bir simülasyondur, gerçek ödeme yapılmadı
      </div>
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">
            <HiCheckCircle className="text-white text-4xl" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Ödemeniz Başarıyla Tamamlandı!
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Eğitimlerinize hemen erişebilirsiniz. Hoş geldiniz e-postanızı kontrol edin.
          </p>
        </div>

        {/* Order Details */}
        {orderDetails && (
          <div className="bg-gray-900 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Sipariş Detayları</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 text-sm">İşlem Numarası</p>
                <p className="text-white font-mono text-lg">{orderDetails.transactionId}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Tutar</p>
                <p className="text-[#c5ff21] font-bold text-2xl">
                  {new Intl.NumberFormat('tr-TR', {
                    style: 'currency',
                    currency: orderDetails.currency || 'TRY'
                  }).format(Number(orderDetails.amount))}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Tarih</p>
                <p className="text-white">{orderDetails.date}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Saat</p>
                <p className="text-white">{orderDetails.time}</p>
              </div>
            </div>
          </div>
        )}

        {/* Next Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-900 rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#c5ff21] rounded-full mb-4">
              <HiMail className="text-black text-xl" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">E-posta Kontrolü</h3>
            <p className="text-gray-400 text-sm">
              Giriş bilgileriniz e-posta adresinize gönderildi
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#c5ff21] rounded-full mb-4">
              <HiDownload className="text-black text-xl" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Hemen Başlayın</h3>
            <p className="text-gray-400 text-sm">
              Eğitimlerinize anında erişim sağlayabilirsiniz
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#c5ff21] rounded-full mb-4">
              <HiHome className="text-black text-xl" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Ana Sayfa</h3>
            <p className="text-gray-400 text-sm">
              Diğer eğitimlerimizi keşfetmeye devam edin
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <Link
            to="/dashboard"
            className="inline-block bg-[#c5ff21] text-black font-bold py-4 px-8 rounded-xl hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Eğitimlerime Git
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-block border-2 border-[#c5ff21] text-[#c5ff21] font-bold py-3 px-6 rounded-xl hover:bg-[#c5ff21] hover:text-black transition-all duration-300"
            >
              Ana Sayfa
            </Link>
            
            <Link
              to="/shop"
              className="inline-block border-2 border-gray-600 text-gray-300 font-bold py-3 px-6 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-300"
            >
              Diğer Eğitimler
            </Link>
          </div>
        </div>

        {/* Support Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Sorularınız mı var? 7/24 destek ekibimiz size yardımcı olmaya hazır.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a href="mailto:destek@ookuuakademi.com" className="text-[#c5ff21] hover:underline">
              destek@ookuuakademi.com
            </a>
            <span className="text-gray-600">|</span>
            <a href="tel:+905551234567" className="text-[#c5ff21] hover:underline">
              +90 555 123 45 67
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
