import React from "react";

const AcademicThesis = () => {
  return (
    <section className="bg-black text-white px-4 py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Görsel */}
        <div className="md:order-2">
          <img
            src="/images/yapayzekamakale.webp"
            alt="Türkiye'de Yapay Zeka ve Yaratıcılık Üzerine Akademik Tez Görseli"
            className="w-full h-auto rounded-[33px] object-cover"
          />
        </div>

        {/* Metin ve buton */}
        <div className="flex flex-col text-left order-2 md:order-1 pt-8 md:pt-0 min-h-full justify-start">
          <div>
            <h2
              className="font-bold text-5xl sm:text-4xl md:text-4xl mb-8"
              style={{ letterSpacing: "0.09em", lineHeight: 1.3 }}
            >
              Türkiye'de Yapay Zeka ve Yaratıcılık Üzerine İlk Akademik Tez
            </h2>

            <p className="text-base md:text-lg leading-[1.5] text-neutral-300 mb-5">
              OokuuAkademi'nin kurucusu tarafından yazılan bu tez, Türkiye'de yapay zeka ve yaratıcılık
              alanında yayınlanan ilk akademik çalışmalardan biridir. YÖK'te yayınlanmış olup, eğitimlerimizin temel
              kaynaklarından biridir. Bu akademik çalışma, yapay zeka teknolojilerinin yaratıcı süreçlere entegrasyonunu
              inceleyerek, dijital dönüşüm çağında tasarım ve yaratıcılık alanlarında yeni yaklaşımlar sunmaktadır.
            </p>
          </div>

          <a
            href="https://tez.yok.gov.tr/UlusalTezMerkezi/TezGoster?key=LY6e5xGA7WWUpEdrBmEPLjsgYL35gf4KbYR3ngc1SbB_v6-E5sVEHB-yz5RjVYrE"
            target="_blank"
            rel="noopener noreferrer"
            className="w-max"
          >
            <button
              aria-label="Akademik tezi görüntüle"
              className="bg-[#c5ff21] text-black font-semibold text-sm px-6 py-3 rounded-[33px] hover:bg-white hover:text-black transition-colors duration-300"
              type="button"
            >
              Makaleyi Görüntüle
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AcademicThesis;
