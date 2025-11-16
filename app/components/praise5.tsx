"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function WengerPraise() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);

  const inView = useInView(containerRef, { once: false, margin: "-100px" });

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = !inView;
    setMuted(!inView);
  }, [inView]);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <section className="w-full min-h-screen bg-black text-white py-20 px-6 md:px-20 flex flex-col items-center">
      {/* Wenger Section */}
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
            src="/praise/arsene.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
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
            <span className="text-pink-500">Arsène Wenger</span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
            <span className="text-pink-500 font-semibold">Wenger</span> approaches football like a philosopher, 
            and when he praises Messi, it’s with poetic admiration. He’s often called Messi a 
            <span className="text-pink-500 font-semibold"> ‘divine talent’</span> and a player who changed 
            how the world views football.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
