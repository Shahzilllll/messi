"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function WorldCupAchievement() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-32 bg-black text-white">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-[500] mb-6 tracking-wide drop-shadow-lg text-center [font-family:'Cinzel']"
        >
          The Pinnacle: World Cup 2022
        </h2>

        {/* Video */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] rounded-xl shadow-2xl border-2 border-pink-500 overflow-hidden">
          <video
            src="/about/wc.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted={isMuted}
            loop
            playsInline
          />
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-4 right-4 bg-black/70 text-pink-500 px-3 py-1 rounded-lg hover:bg-black/90 transition"
          >
            {isMuted ? "Unmute" : "Mute"}
          </button>
        </div>

        {/* Description */}
        <p className="text-center sm:text-lg lg:text-xl max-w-3xl leading-relaxed mt-4 text-white/90">
          After years of dedication, <span className="text-pink-400">Lionel Messi</span> finally lifted the 
          <span className="text-pink-400"> FIFA World Cup 2022</span> with Argentina, cementing his legacy as one of the 
          greatest footballers of all time. A dream realized, a nation celebrated, and a story for the ages.
        </p>
      </motion.div>
    </section>
  );
}
