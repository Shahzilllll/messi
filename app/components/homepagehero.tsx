"use client";
import React from "react";

export default function HomePageHero() {
  const lionel = "L I O N E L".split(""); // split letters

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
      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col gap-2 sm:gap-4 items-center sm:items-start text-center sm:text-left">
        
        {/* LIONEL letters */}
        <h2
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-[400] tracking-wider leading-snug drop-shadow-2xl flex flex-wrap justify-center sm:justify-start space-x-1 sm:space-x-2 text-white"
          style={{ fontFamily: "Cinzel" }}
        >
          {lionel.map((letter, idx) => (
            <span key={idx}>{letter}</span>
          ))}
        </h2>

        {/* MESSI Image */}
        <div className="mt-2 sm:mt-4 flex justify-center sm:justify-start w-full">
          <img
            src="/images/messitxt.png"
            alt="MESSI"
            className="w-auto h-10 xs:h-12 sm:h-16 md:h-24 drop-shadow-2xl"
          />
        </div>

        {/* Tagline */}
        <p className="mt-1 sm:mt-2 text-[10px] xs:text-xs sm:text-sm md:text-base text-black font-light uppercase tracking-widest opacity-80 text-center sm:text-left">
          The Greatest Player Ever to Touch the Ball
        </p>
      </div>
    </section>
  );
}
