"use client";
import { useRef, useEffect, useState } from "react";
import { VolumeX, Volume2 } from "lucide-react";

// Simple inView hook
function useInViewSimple(ref: React.RefObject<HTMLElement | null>, margin = 0) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: `${margin}px` }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, margin]);

  return inView;
}

export default function TributeVideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInViewSimple(ref, -150);
  const [muted, setMuted] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) setVisible(true);
  }, [inView]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <section
      ref={ref}
      id="tribute-video"
      className="w-full py-20 md:py-28 px-4 md:px-16 bg-black text-white flex flex-col items-center"
    >
      {/* Title */}
      <h2
        className={`text-2xl sm:text-3xl md:text-5xl font-bold mb-12 tracking-wide text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        style={{ fontFamily: "Cinzel" }}
      >
        The Making of a Legend
      </h2>

      {/* Video Wrapper */}
      <div
        className={`relative w-full max-w-4xl rounded-2xl overflow-hidden aspect-video shadow-[0_0_40px_-10px_rgba(255,0,128,0.5)] transition-all duration-1000 ${
          visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-12"
        } hover:brightness-105`}
      >
        <div className="absolute inset-0 bg-black/15 pointer-events-none"></div>

        <video
          ref={videoRef}
          src="/home/tribute.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="
            absolute bottom-4 right-4
            w-12 h-12 
            flex items-center justify-center 
            bg-black/50 backdrop-blur-md
            rounded-full border border-white/20 
            shadow-[0_0_15px_rgba(255,0,128,0.4)]
            hover:scale-110 hover:bg-black/60
            transition-all duration-300
          "
        >
          {muted ? <VolumeX className="w-6 h-6 text-pink-500" /> : <Volume2 className="w-6 h-6 text-pink-500" />}
        </button>
      </div>

      {/* Caption */}
      <p
        className={`mt-8 text-sm sm:text-base md:text-lg opacity-80 text-center max-w-2xl leading-relaxed transition-all duration-1000 ${
          visible ? "opacity-80 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        A journey carved through passion, discipline, and moments that shaped the very soul of football.
      </p>
    </section>
  );
}
