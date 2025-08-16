import React from "react";

const EducationSection = () => {
  return (
    <section
      className="mx-auto py-8 px-6 mt-16 md:mt-20 lg:mt-24"
      style={{
        maxWidth: 1300,
        paddingLeft: "50px",
        paddingRight: "50px",
        boxSizing: "border-box",
      }}
      aria-labelledby="education-section-title"
    >
      <h2
        id="education-section-title"
        className="
          font-bold mb-6 text-left text-white tracking-wide
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] px-4 sm:px-0"
        style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.0 }}
      >
        <span>Sana Uygun Bir</span>
        <br className="hidden sm:block" />
        <span style={{ display: "block", marginTop: "0.4em", color: "#c5ff21" }}>
          Eğitim Mutlaka Var
        </span>
      </h2>

      <p
        style={{ fontFamily: "'Inter', sans-serif" }}
        className="
          text-gray-300 text-left leading-relaxed max-w-[800px]
          text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] px-4 sm:px-0"
      >
        Dijital becerilerini geliştirmek ve geleceğe hazır olmak isteyen herkes için özel olarak tasarlanmış eğitimler.
      </p>
    </section>
  );
};

export default EducationSection;
