"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutMe() {
  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-16 py-12 flex flex-col gap-16 sm:gap-20 md:gap-24">

      {/* Hero */}
      <section className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl mb-2 sm:mb-4 font-extralight" style={{ fontFamily: "Cinzel" }}>
          S H A H Z I L
        </h1>
        <p className="text-lg sm:text-xl md:text-3xl max-w-3xl mx-auto opacity-90">
          <span className="text-pink-500 font-semibold">N  A  D  E  E  M</span>
        </p>
      </section>

      {/* Personal Story */}
      <section className="max-w-4xl mx-auto text-base sm:text-lg md:text-xl space-y-4 sm:space-y-6 md:space-y-8 leading-relaxed opacity-90 px-2 sm:px-0">
        <p>
          Hey, <span className="text-pink-500 font-semibold">Shahzil</span> here. I built this website partly out of boredom, partly out of love for{" "}
          <span className="text-pink-500 font-semibold">MESSI</span> — the greatest to ever touch a football.
        </p>
        <p>
          Outside of this, I’m just a <span className="text-pink-500 font-semibold">student</span> who likes messing around with{" "}
          <span className="text-pink-500 font-semibold">development</span>. I do it for <span className="text-pink-500 font-semibold">fun</span>, nothing too serious.
        </p>
        <blockquote className="italic opacity-80 border-l-4 border-pink-600 pl-4">
          "Sometimes you have to accept you can't win all the time." — <span className="text-pink-500 font-semibold">Lionel Messi</span>
        </blockquote>
      </section>

      {/* Tools Carousel */}
      <section className="max-w-4xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-center mb-8 sm:mb-10 md:mb-12" style={{ fontFamily: "Cinzel" }}>
          Tools I Used
        </h2>

        <div
          className="overflow-hidden relative h-32 sm:h-36 md:h-40"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={carouselRef}
            className="flex gap-6 sm:gap-8 md:gap-10 items-center"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {[...tools, ...tools].map((tool, idx) => (
              <div key={idx} className="flex flex-col items-center w-20 sm:w-24 md:w-28 h-28 flex-shrink-0 group cursor-pointer">
                <img
                  src={tool.src}
                  alt={tool.name}
                  className={`w-12 sm:w-16 md:w-16 h-12 sm:h-16 md:h-16 transition-transform duration-300 ${tool.white ? "invert" : ""} group-hover:scale-110`}
                />
                <span className="mt-1 sm:mt-2 text-pink-500 text-xs sm:text-sm md:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center" style={{ fontFamily: "Cinzel" }}>
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto w-full px-2 sm:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-center mb-6 sm:mb-8 md:mb-10" style={{ fontFamily: "Cinzel" }}>
          Send me a message
        </h2>

        <form action="https://formspree.io/f/xblqzjan" method="POST" className="flex flex-col gap-4 sm:gap-6 bg-gray-900/40 p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-gray-800">
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1 text-sm sm:text-base">Your Name</label>
            <input
              type="text"
              name="name"
              className="p-2 sm:p-3 rounded-xl bg-black/40 border border-gray-700 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1 text-sm sm:text-base">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Write your message here..."
              className="p-2 sm:p-3 rounded-xl bg-black/40 border border-gray-700 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-600"
            ></textarea>
          </div>

          <button type="submit" className="px-4 sm:px-6 py-2 sm:py-3 bg-pink-600 hover:bg-pink-700 transition rounded-xl text-white font-semibold text-sm sm:text-lg">
            Send
          </button>
        </form>
      </section>

    </main>
  );
}