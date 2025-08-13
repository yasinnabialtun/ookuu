import React from "react";

const EducationSection = () => {
  return (
    <section
      className="mx-auto py-20 px-6"
      style={{
        maxWidth: 1300,
        paddingLeft: "50px",
        paddingRight: "30px",
        boxSizing: "border-box",
      }}
      aria-labelledby="education-section-title"
    >
      <h2
        id="education-section-title"
        className="
          font-bold mb-8 text-left text-white tracking-wide
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[50px]"
        style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.0 }}
      >
        <span>Sana Uygun Bir</span>
        <br />
        <span style={{ display: "block", marginTop: "0.4em" }}>
          Eğitim Mutlaka Var
        </span>
      </h2>

      <p
        style={{ fontFamily: "'Inter', sans-serif" }}
        className="
          text-gray-300 text-left leading-relaxed max-w-[900px]
          text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]"
      >
        ookuuakademi’de içerikler; bireysel yaratıcılığını geliştirmek, dijital
        becerilerini artırmak veya işini geleceğe taşımak isteyen herkes için
        özel olarak kategorilere ayrıldı.
      </p>
    </section>
  );
};

export default EducationSection;
