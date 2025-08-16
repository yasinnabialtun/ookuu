import React, { useEffect, useRef } from 'react';

const AppointmentSection: React.FC = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const removeBadgeDiv = () => {
      const badgeDivs = document.querySelectorAll('.calendly-badge-content');
      badgeDivs.forEach(badge => badge.remove());
    };

    const interval = setInterval(removeBadgeDiv, 500);

    return () => {
      clearInterval(interval);
      const currentRef = calendlyRef.current;
      if (currentRef) currentRef.innerHTML = '';
      try {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      } catch (error) {
        console.warn('Calendly script cleanup error:', error);
      }
    };
  }, [calendlyRef.current]);

  return (
    <section
      className="mx-auto px-4 py-16 sm:py-20 md:py-24"
      style={{ maxWidth: '1200px' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Sol kolon - Calendly */}
        <div className="flex flex-col text-left order-1">
          <div
            ref={calendlyRef}
            className="calendly-inline-widget rounded-3xl overflow-hidden w-full"
            data-url="https://calendly.com/yasinnabialtun/gelin-tanisalim?hide_event_type_details=1&hide_gdpr_banner=1&hide_landing_page_details=1&locale=tr"
            role="region"
            aria-label="Calendly Appointment Scheduler"
            style={{ minWidth: '300px', height: '600px', width: '100%' }}
          ></div>
        </div>

        {/* Sağ kolon - Görsel ve metin */}
        <div className="flex flex-col items-start order-2 h-full justify-between">
          <div>
            <div className="rounded-3xl flex justify-center items-center overflow-hidden mb-6 w-full h-[200px] md:h-[250px] bg-gray-800">
              <img
                src="/images/ataberksoylu.png?v=1"
                alt="Ataberk Soylu, Tasarım Danışmanı"
                className="w-full h-full object-cover"
                loading="eager"
                onLoad={() => {/* Image loaded successfully */}}
                onError={(e) => {
                  console.error('Ataberk Soylu görseli yüklenemedi:', e);
                  const target = e.target as HTMLImageElement;
                  const parent = target.parentElement;
                  if (parent) {
                    target.style.display = 'none';
                    parent.style.background = 'linear-gradient(135deg, #374151 0%, #1f2937 100%)';
                    parent.innerHTML = `
                      <div class="flex items-center justify-center h-full">
                        <div class="text-center">
                          <div class="text-4xl mb-2">👨‍💼</div>
                          <div class="text-white font-semibold">Ataberk Soylu</div>
                          <div class="text-gray-400 text-sm">Tasarım Danışmanı</div>
                        </div>
                      </div>
                    `;
                  }
                }}
              />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4 leading-snug px-2">
              Ataberk Soylu ile Ücretsiz 15 Dakikalık Danışmanlık Görüşmesi
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 px-2">
              Tasarım yolculuğunda bir adım öne geçmek ister misin? Bu ücretsiz 15 dakikalık danışmanlık görüşmesinde; sana özel dijital strateji oluşturarak mevcut durumunu analiz ediyor, iş süreçlerine uygun yapay zeka destekli araçlarla verimliliğini artırıyor, markanı öne çıkaracak yaratıcı çözümler geliştiriyor, ölçülebilir sonuçlar sağlayan stratejiler sunuyor ve kullanıcı odaklı modern tasarım yaklaşımlarıyla fark yaratmanı sağlıyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
