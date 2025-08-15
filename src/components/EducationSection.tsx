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
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[50px]"
        style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.0 }}
      >
        <span>Sana Uygun Bir</span>
        <br />
        <span style={{ display: "block", marginTop: "0.4em", color: "#c5ff21" }}>
          Eğitim Mutlaka Var
        </span>
      </h2>

      <p
        style={{ fontFamily: "'Inter', sans-serif" }}
        className="
          text-gray-300 text-left leading-relaxed max-w-[800px]
          text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]"
      >
        Dijital becerilerini geliştirmek ve geleceğe hazır olmak isteyen herkes için özel olarak tasarlanmış eğitimler.
      </p>
    </section>
  );
};

export default EducationSection;
