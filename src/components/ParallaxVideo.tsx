import React, { useEffect, useRef } from "react";

const VIDEO_ID = "gkeUzkVyXwM";
const START_TIME = 205; // 03:05
const END_TIME = 325; // 03:25

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const ParallaxVideo: React.FC = () => {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          loop: 1,
          playlist: VIDEO_ID,
          mute: 1,
          start: START_TIME,
          end: END_TIME,
          rel: 0,
          showinfo: 0,
        },
        events: {
          onReady: (event: any) => event.target.playVideo(),
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              const checkTime = () => {
                if (!playerRef.current) return;
                const currentTime = playerRef.current.getCurrentTime();
                if (currentTime >= END_TIME) {
                  playerRef.current.seekTo(START_TIME);
                }
                requestAnimationFrame(checkTime);
              };
              checkTime();
            }
          },
        },
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const rect = containerRef.current!.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const offset = rect.top;

          if (offset < windowHeight && offset > -rect.height) {
            const parallax = offset * 0.03; // çok hafif sabit parallax
            containerRef.current!.style.transform = `translateY(${parallax}px)`;
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sabit yukarı taşıma değerleri (tüm cihazlar için aynı)
  const marginTop = "-120px";
  const translateY = "-50px";

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden mx-auto max-w-[1200px] rounded-[33px]"
      style={{
        height: "calc(100vw * 9 / 16)", // 16:9 oran
        maxHeight: "562.5px",
        marginTop,
        backgroundColor: "black",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
        width: "100%",
        transition: "transform 0.1s ease-out",
      }}
    >
      <div
        id="youtube-player"
        className="absolute top-0 left-0 w-full h-full rounded-[33px]"
        style={{
          transform: `scale(1.1) translateY(${translateY})`,
          pointerEvents: "none",
          borderRadius: 33,
        }}
      />
    </section>
  );
};

export default ParallaxVideo;
