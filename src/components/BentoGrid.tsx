import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./BentoGrid.css";
import { Product, CartItem } from "../types/payment";
import { products } from "../data/products";

const BentoGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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

  // Local storage'dan sepet verilerini yükle
  useEffect(() => {
    const savedCart = localStorage.getItem('ookuu-cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Sepet verileri yüklenemedi:', error);
      }
    }
  }, []);

  // Sepete ürün ekleme fonksiyonu
  const addToCart = (product: Product) => {
    const updatedCart = cartItems.find(item => item.product.id === product.id)
      ? cartItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...cartItems, { product, quantity: 1 }];
    
    setCartItems(updatedCart);
    localStorage.setItem('ookuu-cart', JSON.stringify(updatedCart));
    
    // Kullanıcıya bildirim göster
    alert(`${product.name} sepete eklendi!`);
  };

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
          className="bento-project-card bento-project-logo relative"
          style={{ cursor: "pointer" }}
        >
          <img 
            src="images/image1.svg" 
            alt="Yaratici Dijital Tasarım" 
            loading="lazy"
            onClick={() => navigate("/YaraticiDijitalTasarim")}
          />
          <div className="bento-project-description"></div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              const product = products.find(p => p.id === 'yaratici-dijital-tasarim');
              if (product) addToCart(product);
            }}
            className="absolute bottom-4 right-4 bg-[#c5ff21] text-black px-3 py-1 rounded-lg text-sm font-bold hover:bg-white transition-colors"
          >
            Sepete Ekle
          </button>
        </div>

        {/* Görsel 2 - Tıklanabilir */}
        <div
          className="bento-project-card bento-project-device relative"
          style={{ cursor: "pointer" }}
        >
          <img 
            src="images/image2.svg" 
            alt="Yapay Zeka Teknolojileri" 
            loading="lazy"
            onClick={() => navigate("/YapayZekaTeknolojileri")}
          />
          <div className="bento-project-description"></div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              const product = products.find(p => p.id === 'yapay-zeka-teknolojileri');
              if (product) addToCart(product);
            }}
            className="absolute bottom-4 right-4 bg-[#c5ff21] text-black px-3 py-1 rounded-lg text-sm font-bold hover:bg-white transition-colors"
          >
            Sepete Ekle
          </button>
        </div>

        {/* Video 2 - Tıklanamaz */}
        <div className="bento-project-card bento-project-inbox">
          <video src="videos/video2.mp4" autoPlay muted loop playsInline />
          <div className="bento-project-description"></div>
        </div>

        {/* Görsel 3 - Tıklanabilir */}
        <div
          className="bento-project-card bento-project-device-2 relative"
          style={{ cursor: "pointer" }}
        >
          <img 
            src="images/image3.svg" 
            alt="Dijital Pazarlama Stratejileri" 
            loading="lazy"
            onClick={() => navigate("/DijitalPazarlamaStratejileri")}
          />
          <div className="bento-project-description"></div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              const product = products.find(p => p.id === 'dijital-pazarlama-stratejileri');
              if (product) addToCart(product);
            }}
            className="absolute bottom-4 right-4 bg-[#c5ff21] text-black px-3 py-1 rounded-lg text-sm font-bold hover:bg-white transition-colors"
          >
            Sepete Ekle
          </button>
        </div>

        {/* Video 3 - Tıklanamaz */}
        <div className="bento-project-card bento-project-ai-gen">
          <video src="videos/video3.mp4" autoPlay muted loop playsInline />
          <div className="bento-project-description"></div>
        </div>

      </div>

      <div className="scroll-indicator text-sm sm:text-base">← Kaydırarak keşfedin →</div>
    </div>
  );
};

export default BentoGrid;
