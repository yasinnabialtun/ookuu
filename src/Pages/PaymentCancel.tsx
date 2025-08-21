import React from 'react';
import { Link } from 'react-router-dom';
import { HiXCircle, HiArrowLeft, HiShoppingCart } from 'react-icons/hi';

const PaymentCancel: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Test Mode Banner */}
      <div className="bg-yellow-500 text-black text-center py-2 px-4 font-bold">
        🧪 TEST MODU - Bu bir simülasyondur, gerçek ödeme yapılmadı
      </div>
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Cancel Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500 rounded-full mb-6">
            <HiXCircle className="text-white text-4xl" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Ödeme İptal Edildi
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ödeme işleminiz iptal edildi. Sepetinizdeki ürünler korunmuştur.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-3">Sepetiniz Korundu</h3>
            <p className="text-gray-400 text-sm mb-4">
              Ürünleriniz sepetinizde bekliyor. İstediğiniz zaman ödeme işlemini tekrar deneyebilirsiniz.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center text-[#c5ff21] hover:text-white transition-colors"
            >
              <HiShoppingCart className="mr-2" />
              Sepetime Git
            </Link>
          </div>

          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-3">Yardıma mı ihtiyacınız var?</h3>
            <p className="text-gray-400 text-sm mb-4">
              Ödeme ile ilgili sorun yaşıyorsanız destek ekibimiz size yardımcı olmaya hazır.
            </p>
            <a
              href="mailto:destek@ookuuakademi.com"
              className="inline-flex items-center text-[#c5ff21] hover:text-white transition-colors"
            >
              Destek Al
            </a>
          </div>
        </div>

        {/* Common Issues */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Sık Karşılaşılan Sorunlar</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-[#c5ff21] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-white font-medium mb-1">Kredi Kartı Bilgileri</h4>
                <p className="text-gray-400 text-sm">
                  Kart bilgilerinizin doğru olduğundan emin olun ve yeterli bakiye olduğunu kontrol edin.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-[#c5ff21] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-white font-medium mb-1">İnternet Bağlantısı</h4>
                <p className="text-gray-400 text-sm">
                  Stabil bir internet bağlantısı olduğundan emin olun ve sayfayı yeniden yüklemeyi deneyin.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-[#c5ff21] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-white font-medium mb-1">Tarayıcı Uyumluluğu</h4>
                <p className="text-gray-400 text-sm">
                  Güncel bir tarayıcı kullandığınızdan emin olun (Chrome, Firefox, Safari, Edge).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <Link
            to="/shop"
            className="inline-block bg-[#c5ff21] text-black font-bold py-4 px-8 rounded-xl hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Tekrar Dene
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center border-2 border-[#c5ff21] text-[#c5ff21] font-bold py-3 px-6 rounded-xl hover:bg-[#c5ff21] hover:text-black transition-all duration-300"
            >
              <HiArrowLeft className="mr-2" />
              Ana Sayfa
            </Link>
            
            <a
              href="tel:+905551234567"
              className="inline-block border-2 border-gray-600 text-gray-300 font-bold py-3 px-6 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-300"
            >
              Bizi Arayın
            </a>
          </div>
        </div>

        {/* Support Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Sorun devam ediyor mu? Destek ekibimizle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a href="mailto:destek@ookuuakademi.com" className="text-[#c5ff21] hover:underline">
              destek@ookuuakademi.com
            </a>
            <span className="text-gray-600">|</span>
            <a href="tel:+905551234567" className="text-[#c5ff21] hover:underline">
              +90 555 123 45 67
            </a>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">
              Çalışma Saatleri: 09:00 - 18:00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;
