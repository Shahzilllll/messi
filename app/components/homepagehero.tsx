"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HomePageHero() {
  const lionel = "L I O N E L".split(""); // split letters for stagger

  // Animation variants
  const letterVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  const containerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background Image */}
      <img
        src="/home/hero.jpg"
        alt="Lionel Messi"
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900/70 to-transparent" />

      {/* Text Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col gap-2 sm:gap-4 items-center sm:items-start text-center sm:text-left"
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
        {/* LIONEL letters */}
        <h2
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-[400] tracking-wider leading-snug drop-shadow-2xl flex flex-wrap justify-center sm:justify-start space-x-1 sm:space-x-2 text-white"
          style={{ fontFamily: "Cinzel" }}
        >
          {lionel.map((letter, idx) => (
            <motion.span key={idx} variants={letterVariant}>
              {letter}
            </motion.span>
          ))}
        </h2>

        {/* MESSI Image */}
        <motion.div
          className="mt-2 sm:mt-4 flex justify-center sm:justify-start w-full"
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
        >
          <img
            src="/images/messitxt.png"
            alt="MESSI"
            className="w-auto h-10 xs:h-12 sm:h-16 md:h-24 drop-shadow-2xl"
          />
        </motion.div>

        {/* Tagline in black */}
        <motion.p
          className="mt-1 sm:mt-2 text-[10px] xs:text-xs sm:text-sm md:text-base text-black font-light uppercase tracking-widest opacity-80 text-center sm:text-left"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 1.2, ease: "easeOut" }}
        >
          The Greatest Player Ever to Touch the Ball
        </motion.p>
      </motion.div>
    </section>
  );
}
