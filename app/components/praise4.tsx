"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function PepPraise() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);

  // Track if section is in view
  const inView = useInView(containerRef, { margin: "-50% 0px -50% 0px" });

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
      {/* Pep Section */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="w-full flex flex-col md:flex-row-reverse items-center gap-10 mb-24"
      >
        {/* Video Container */}
        <div className="w-full md:w-1/2 relative rounded-xl shadow-2xl border-2 border-pink-500 overflow-hidden">
          <video
            ref={videoRef}
            src="/praise/pep.mp4"
            autoPlay
            muted={muted}
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
            <span className="text-pink-500">Pep Guardiola</span>
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
            <span className="text-pink-500 font-semibold">Pep</span> coached Messi through Barcelona’s greatest era. 
            Their relationship is almost artistic — a maestro guiding a prodigy who evolved into the greatest ever. 
            Pep calls Messi the most complete player he’s ever seen, and that sentiment runs deep.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
