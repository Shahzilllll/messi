"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { VolumeX, Volume2 } from "lucide-react";

export default function TributeVideoSection() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const inView = useInView(ref, { once: true, margin: "-150px" });
  const controls = useAnimation();
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  const fadeZoom: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      id="tribute-video"
      className="w-full py-20 md:py-28 px-4 md:px-16 bg-black text-white flex flex-col items-center"
    >
      {/* Title */}
      <motion.h2
        initial="hidden"
        animate={controls}
        variants={fadeZoom}
        className="text-2xl sm:text-3xl md:text-5xl font-bold mb-12 tracking-wide text-center"
        style={{ fontFamily: 'Cinzel' }}
      >
        The Making of a Legend
      </motion.h2>

      {/* Video Wrapper */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeZoom}
        className="
          relative w-full max-w-4xl
          rounded-2xl overflow-hidden
          aspect-video
          shadow-[0_0_40px_-10px_rgba(255,0,128,0.5)]
          hover:brightness-105 transition-all duration-300
        "
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
          {muted ? (
            <VolumeX className="w-6 h-6 text-pink-500" />
          ) : (
            <Volume2 className="w-6 h-6 text-pink-500" />
          )}
        </button>
      </motion.div>

      {/* Caption */}
      <motion.p
        initial="hidden"
        animate={controls}
        variants={fadeZoom}
        className="mt-8 text-sm sm:text-base md:text-lg opacity-80 text-center max-w-2xl leading-relaxed"
      >
        A journey carved through passion, discipline, and moments that shaped the
        very soul of football.
      </motion.p>
    </section>
  );
}
