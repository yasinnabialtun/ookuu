import React, { useEffect, useRef } from 'react';

const AppointmentSection: React.FC = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Calendly script yükle
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Badge’i kaldıracak fonksiyon
    const removeBadgeDiv = () => {
      const badgeDivs = document.querySelectorAll('.calendly-badge-content');
      badgeDivs.forEach(badge => badge.remove());
    };

    // Badge'i sürekli kontrol et ve kaldır
    const interval = setInterval(removeBadgeDiv, 500);

    return () => {
      clearInterval(interval);
      if (calendlyRef.current) calendlyRef.current.innerHTML = '';
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      className="mx-auto px-4 py-16 sm:py-20 md:py-24"
      style={{ maxWidth: '1200px' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Sol kolon - Calendly */}
        <div className="flex flex-col text-left order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Randevu Oluştur
          </h2>
          <div
            ref={calendlyRef}
            className="calendly-inline-widget rounded-3xl overflow-hidden w-full"
            data-url="https://calendly.com/yasinnabialtun/gelin-tanisalim?hide_event_type_details=1&hide_gdpr_banner=1&hide_landing_page_details=1"
            role="region"
            aria-label="Calendly Appointment Scheduler"
            style={{ minWidth: '300px', height: '600px', width: '100%' }}
          ></div>
        </div>

        {/* Sağ kolon - Görsel ve metin */}
        <div className="flex flex-col items-start order-2 mt-4 md:mt-8 lg:mt-13">
          <div className="rounded-3xl flex justify-center items-center overflow-hidden mb-6 w-full h-[100px] md:h-[200px]">
            <img
              src="/images/ataberksoylu.png"
              alt="Ataberk Soylu, Tasarım Danışmanı"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-3 leading-snug">
            Ataberk Soylu ile Ücretsiz 15 Dakikalık Danışmanlık Görüşmesi
          </h3>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            İster freelancer ol, ister kurumsal bir firma.<br />
            Tasarım kariyerini yeniden kodla.<br />
            Yeteneklerini optimize et.<br />
            Yapay zeka destekli araçlarla dijital dünyada fark yarat!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
