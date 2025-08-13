import React, { useEffect, useRef } from 'react';

const AppointmentSection: React.FC = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Widget yüklendikten sonra badge div'ini kaldır
    const removeBadgeDiv = () => {
      const badgeDiv = document.querySelector('.calendly-badge-content');
      if (badgeDiv) badgeDiv.remove();
    };

    // Yükleme boyunca kontrol et
    const interval = setInterval(removeBadgeDiv, 500);

    return () => {
      clearInterval(interval);
      if (calendlyRef.current) calendlyRef.current.innerHTML = '';
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <section
        className="mx-auto px-4 py-16 sm:py-20 md:py-24 grid gap-8 items-start"
        style={{ maxWidth: '1200px', gridTemplateColumns: '1fr 1fr' }}
      >
        {/* Sol kolon */}
        <div className="flex flex-col text-left order-1">
          <p className="text-lg md:text-xl font-light leading-relaxed mb-6 text-gray-700 dark:text-gray-300 max-w-xl">
            Lütfen aşağıdaki takvimden size uygun zamanı seçiniz.
          </p>
          <div
            ref={calendlyRef}
            className="calendly-inline-widget rounded-3xl overflow-hidden w-full"
            data-url="https://calendly.com/yasinnabialtun/gelin-tanisalim?hide_event_type_details=1&hide_gdpr_banner=1&hide_landing_page_details=1"
            role="region"
            aria-label="Calendly Appointment Scheduler"
            style={{ minWidth: '300px', height: '350px', width: '100%' }}
          ></div>
        </div>

        {/* Sağ kolon */}
        <div className="order-2 lg:order-3 flex flex-col items-start md:items-start right-column">
          <div className="rounded-3xl flex justify-center items-center overflow-hidden mb-6 w-full h-[50px] md:h-[200px]">
            <img
              src="/images/ataberksoylu.png"
              alt="Ataberk Soylu, Tasarım Danışmanı"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AppointmentSection;
