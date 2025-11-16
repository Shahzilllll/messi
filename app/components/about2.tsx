"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BarcelonaEra() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="w-full py-20 px-6 lg:px-32 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Left: Interview Video */}
        <motion.div
          className="lg:w-1/2 relative w-full h-[450px] lg:h-[550px] flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <video
            src="/about/interview.mp4"
            className="w-full h-full object-cover rounded-xl shadow-2xl border-2 border-pink-500"
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
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="lg:w-1/2 flex flex-col items-center lg:items-start gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl lg:text-6xl font-[500] tracking-wide drop-shadow-lg [font-family:'Cinzel']"
          >
            Barcelona Dream
          </h2>

          <p className="text-lg leading-relaxed text-center lg:text-left">
            At age 13, <span className="text-pink-400">Lionel Messi</span> shared his first professional interview, expressing his passion and dreams. 
            He had already <span className="text-pink-400">manifested his destiny</span>—joining <span className="text-pink-400">FC Barcelona</span> and stepping onto the path that would make him one of the greatest footballers ever.
          </p>

          <p className="text-md italic text-pink-400 text-center lg:text-left">
            "Even as a young boy, Messi’s dedication and vision were unmatched." – Coach
          </p>
        </motion.div>

      </div>
    </section>
  );
}
