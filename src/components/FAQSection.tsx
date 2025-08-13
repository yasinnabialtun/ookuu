import React, { useState, useRef, useEffect } from "react";

const faqData = [
  // aynı faqData
  {
    question: "Okuu Akademi nedir?",
    answer:
      "Okuu Akademi, bireylerin ve firmaların dijital becerilerini artırmayı hedefleyen bir eğitim platformudur.",
  },
  {
    question: "Eğitimler nasıl sunuluyor?",
    answer: "Online videolar ve canlı oturumlar ile pratik eğitimler sunulmaktadır.",
  },
  {
    question: "Kayıt olmak için ne yapmalıyım?",
    answer: "Ana sayfadaki 'Bize Ulaşın' butonundan veya iletişim bölümünden kayıt olabilirsiniz.",
  },
  {
    question: "Eğitimler hangi konuları kapsıyor?",
    answer:
      "Yapay zeka, UI/UX, kreatif tasarım, dijital pazarlama gibi pek çok alanda eğitimler sunulmaktadır.",
  },
  {
    question: "Eğitimlere katılım için ön koşul var mı?",
    answer: "Hayır, eğitimlere katılım için özel bir ön koşul gerekmemektedir.",
  },
  {
    question: "Canlı oturumlara nasıl katılabilirim?",
    answer:
      "Canlı oturumlar için kayıt olduktan sonra size gönderilen bağlantı üzerinden katılım sağlayabilirsiniz.",
  },
  {
    question: "Eğitim materyallerine ne kadar süre erişebilirim?",
    answer:
      "Eğitim materyallerine satın alma tarihinden itibaren süresiz erişim hakkınız bulunmaktadır.",
  },
  {
    question: "Sertifika veriliyor mu?",
    answer: "Başarıyla tamamlanan eğitimler için dijital sertifika verilmektedir.",
  },
  {
    question: "Fiyatlandırma nasıl yapılıyor?",
    answer:
      "Eğitimler tekil olarak veya paket halinde satın alınabilir, fiyat bilgisi sitede detaylıdır.",
  },
  {
    question: "Teknik destek alabiliyor muyum?",
    answer:
      "Evet, eğitim sürecinde teknik destek ekibimiz size yardımcı olmaktadır.",
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section
      className="max-w-[1200px] mx-auto px-6 py-20 bg-black font-inter"
      style={{ fontFamily: "'Inter', sans-serif" }}
      aria-label="Sıkça Sorulan Sorular"
    >
      <h2 className="text-6xl font-semibold mb-12 text-center text-white">
        Sıkça Sorulan Sorular
      </h2>
      <div className="space-y-6">
        {faqData.map((item, i) => {
          const isActive = activeIndex === i;
          const contentHeight = contentRefs.current[i]?.scrollHeight ?? 0;

          return (
            <div
              key={i}
              className="rounded-lg p-6 cursor-pointer shadow-lg border border-[#c5ff21]"
              onClick={() => setActiveIndex(isActive ? null : i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveIndex(isActive ? null : i);
                }
              }}
              aria-expanded={isActive}
              aria-controls={`faq-answer-${i}`}
              aria-labelledby={`faq-question-${i}`}
              style={{
                backgroundImage: `
                  linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(18,18,18,0.95) 40%, rgba(50,60,20,0.7) 70%, rgba(197,255,33,0.15) 100%),
                  radial-gradient(circle at top left, rgba(197,255,33,0.25), transparent 70%),
                  radial-gradient(circle at bottom right, rgba(197,255,33,0.2), transparent 70%)
                `,
              }}
            >
              <h3
                id={`faq-question-${i}`}
                className="text-xl font-semibold flex justify-between items-center text-white"
              >
                {item.question}
                <span
                  className="ml-4 font-bold text-2xl select-none"
                  style={{ color: "#c5ff21" }}
                >
                  {isActive ? "−" : "+"}
                </span>
              </h3>
              <div
                id={`faq-answer-${i}`}
                aria-hidden={!isActive}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: isActive ? contentHeight + 16 : 0,
                  opacity: isActive ? 1 : 0,
                }}
                ref={(el) => (contentRefs.current[i] = el)}
              >
                <p className="mt-4 text-white leading-relaxed">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
