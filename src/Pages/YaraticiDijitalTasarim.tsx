import React from "react";

const YaraticiDijitalTasarim = () => {
  return (
    <div className="min-h-screen bg-black text-[#c5ff21] font-[Inter]">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Yaratıcı Dijital Tasarım
        </h1>
        <p className="max-w-2xl text-lg md:text-xl leading-relaxed">
          Modern tasarım trendleri, tipografi teknikleri ve kullanıcı deneyimi
          odaklı çözümler ile markanızı dijital dünyada öne çıkarıyoruz.
        </p>
      </section>

      {/* HİZMET DETAY KARTLARI */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20 pb-20">
        <div className="bg-[#111] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold mb-3">UI/UX Tasarımı</h3>
          <p>
            Kullanıcı odaklı, sezgisel ve estetik arayüzler tasarlıyoruz. Her
            pikselin bir amacı var.
          </p>
        </div>
        <div className="bg-[#111] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold mb-3">Marka Kimliği</h3>
          <p>
            Logo, renk paleti ve tipografi uyumuyla güçlü bir marka algısı
            oluşturuyoruz.
          </p>
        </div>
        <div className="bg-[#111] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold mb-3">Animasyon & Etkileşim</h3>
          <p>
            Web sitenize ve uygulamanıza dinamik, ilgi çekici animasyonlar
            ekliyoruz.
          </p>
        </div>
      </section>

      {/* CTA ALANI */}
      <section className="bg-[#c5ff21] text-black text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Markanıza değer katmak için hazır mısınız?
        </h2>
        <p className="max-w-xl mx-auto mb-6">
          Profesyonel tasarım ekibimiz ile hedeflerinizi gerçeğe dönüştürün.
        </p>
        <a
          href="/iletisim"
          className="inline-block bg-black text-[#c5ff21] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#222] transition"
        >
          Hemen Teklif Al
        </a>
      </section>
    </div>
  );
};

export default YaraticiDijitalTasarim;
