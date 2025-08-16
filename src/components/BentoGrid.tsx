import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; 
import "./BentoGrid.css";

const BentoGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); 

  function debounce<T extends (...args: unknown[]) => void>(func: T, wait: number) {
    let timeout: ReturnType<typeof setTimeout>;
    return function (this: unknown, ...args: Parameters<T>) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll<HTMLDivElement>(".bento-project-card");
    if (!cards) return;

    cards.forEach((card) => {
      const updateGradient = debounce((e: unknown) => {
        const mouseEvent = e as MouseEvent;
        const rect = card.getBoundingClientRect();
        const x = ((mouseEvent.clientX - rect.left) / rect.width) * 100;
        const y = ((mouseEvent.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mouse-x", `${x}%`);
        card.style.setProperty("--mouse-y", `${y}%`);
      }, 5);

      card.addEventListener("mousemove", updateGradient);
      card.addEventListener("mouseleave", () => {
        card.style.setProperty("--mouse-x", "50%");
        card.style.setProperty("--mouse-y", "50%");
      });
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const mouseDownHandler = (e: MouseEvent) => {
      if (window.innerWidth <= 768) {
        isDown = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
      }
    };
    const mouseLeaveHandler = () => { isDown = false; };
    const mouseUpHandler = () => { isDown = false; };
    const mouseMoveHandler = (e: MouseEvent) => {
      if (!isDown || window.innerWidth > 768) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", mouseDownHandler);
    container.addEventListener("mouseleave", mouseLeaveHandler);
    container.addEventListener("mouseup", mouseUpHandler);
    container.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      container.removeEventListener("mousedown", mouseDownHandler);
      container.removeEventListener("mouseleave", mouseLeaveHandler);
      container.removeEventListener("mouseup", mouseUpHandler);
      container.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div className="bento-project-container" ref={containerRef}>
      <div className="bento-project-grid">

        {/* Video 1 - Tıklanamaz */}
        <div className="bento-project-card bento-project-cloud">
          <video src="videos/video1.mp4" autoPlay muted loop playsInline />
          <div className="bento-project-description"></div>
        </div>

        {/* Görsel 1 - Tıklanabilir */}
        <div
          className="bento-project-card bento-project-logo"
          onClick={() => navigate("/YaraticiDijitalTasarim")}
          style={{ cursor: "pointer" }}
        >
          <img 
            src="images/image1.svg" 
            alt="Yaratici Dijital Tasarım" 
            loading="lazy"
          />
          <div className="bento-project-description"></div>
        </div>

        {/* Görsel 2 - Tıklanabilir */}
        <div
          className="bento-project-card bento-project-device"
          onClick={() => navigate("/YapayZekaTeknolojileri")}
          style={{ cursor: "pointer" }}
        >
          <img 
            src="images/image2.svg" 
            alt="Yapay Zeka Teknolojileri" 
            loading="lazy"
          />
          <div className="bento-project-description"></div>
        </div>

        {/* Video 2 - Tıklanamaz */}
        <div className="bento-project-card bento-project-inbox">
          <video src="videos/video2.mp4" autoPlay muted loop playsInline />
          <div className="bento-project-description"></div>
        </div>

        {/* Görsel 3 - Tıklanabilir */}
        <div
          className="bento-project-card bento-project-device-2"
          onClick={() => navigate("/DijitalPazarlamaStratejileri")}
          style={{ cursor: "pointer" }}
        >
          <img 
            src="images/image3.svg" 
            alt="Dijital Pazarlama Stratejileri" 
            loading="lazy"
          />
          <div className="bento-project-description"></div>
        </div>

        {/* Video 3 - Tıklanamaz */}
        <div className="bento-project-card bento-project-ai-gen">
          <video src="videos/video3.mp4" autoPlay muted loop playsInline />
          <div className="bento-project-description"></div>
        </div>

      </div>

      <div className="scroll-indicator">← Kaydırarak keşfedin →</div>
    </div>
  );
};

export default BentoGrid;
