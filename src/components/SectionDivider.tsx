import React from "react";

interface SectionDividerProps {
  color?: string; // Düz renk
  thickness?: string; // Çizgi kalınlığı
  margin?: string; // Üst-alt boşluk
  gradient?: boolean; // Gradient efekti
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  color = "#000",
  thickness = "2px",
  margin = "2rem 0",
  gradient = false,
}) => {
  return (
    <hr
      style={{
        border: "none",
        borderTop: gradient
          ? `linear-gradient(to right, ${color}, transparent, ${color}) ${thickness} solid`
          : `${thickness} solid ${color}`,
        margin,
        width: "100%",
      }}
    />
  );
};

export default SectionDivider;
