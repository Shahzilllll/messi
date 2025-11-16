"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function RonaldoPraise() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);

  // Track if section is in view
  const inView = useInView(containerRef, { once: false, margin: "-100px" });

  // Auto-mute/unmute based on scroll
  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = !inView;
    setMuted(!inView);
  }, [inView]);

  // Manual toggle
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <section className="w-full min-h-screen bg-black text-white py-20 px-6 md:px-20 flex flex-col items-center">
      {/* Main Heading */}
      <h1
        className="text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.35em] text-center mb-6"
        style={{ fontFamily: "Cinzel" }}
      >
        THE PRAISES
      </h1>
      <p className="text-center text-gray-300 max-w-2xl mb-20 text-lg sm:text-xl">
        Where greatness recognizes its own.
      </p>

      {/* Cristiano Section */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="w-full flex flex-col md:flex-row items-center gap-10 mb-24"
      >
        {/* Video Container */}
        <div className="w-full md:w-1/2 relative rounded-xl shadow-2xl border-2 border-pink-500 overflow-hidden">
          <video
            ref={videoRef}
            src="/praise/ronaldo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 bg-black/70 text-pink-500 px-3 py-1 rounded-lg hover:bg-black/90 transition"
          >
            {muted ? "Unmute" : "Mute"}
          </button>
        </div>

        {/* Text */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            <span className="text-pink-500">Cristiano Ronaldo</span>
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
            Despite the rivalry that shaped a generation,{" "}
            <span className="text-pink-500 font-semibold">Cristiano</span> and{" "}
            <span className="text-pink-500 font-semibold">Messi</span> shared a
            mutual respect deeper than most realize. Their battles defined
            football’s golden era, and even in competition, Cristiano often
            acknowledged Messi’s brilliance — proving that{" "}
            <span className="text-pink-500 font-semibold">greatness</span>{" "}
            recognizes greatness.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
