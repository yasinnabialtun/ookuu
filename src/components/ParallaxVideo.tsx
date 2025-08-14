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

  // YouTube Player setup
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

  // Scroll / Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const rect = containerRef.current!.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const offset = rect.top;

          if (offset < windowHeight && offset > -rect.height) {
            const factor = window.innerWidth < 768 ? 0.01 : 0.03;
            const parallax = offset * factor;

            const videoDiv = containerRef.current!.querySelector('#youtube-player') as HTMLElement;
            if (videoDiv) {
              const scale = window.innerWidth < 768 ? 1.1 : 1.3;
              videoDiv.style.transform = `scale(${scale}) translateY(-50px) translateY(${parallax}px)`;
            }
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden w-full max-w-[1200px] mx-auto rounded-[33px]"
      style={{
        height: "calc(100vw * 9 / 16)", // responsive 16:9 oran
        maxHeight: "675px", // desktop limit
        marginTop: "-120px",
        backgroundColor: "black",
        position: "relative",
        zIndex: 1,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div
        id="youtube-player"
        className="absolute top-0 left-0 w-full h-full rounded-[33px]"
        style={{
          transform: `scale(1.1) translateY(-50px)`,
          pointerEvents: "none",
          borderRadius: 33,
        }}
      />
    </section>
  );
};

export default ParallaxVideo;
