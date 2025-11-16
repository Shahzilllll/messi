"use client";

import Image from "next/image";

export default function EarlyLifeAndDribble() {
  return (
    <div className="w-full bg-black text-white">

      {/* ===== Section 1: Early Life ===== */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left: Text */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start gap-6">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-[500] mb-4 tracking-wide drop-shadow-lg [font-family:'Cinzel'] text-center lg:text-left"
            >
              Early Life
            </h2>

            <p className="text-base sm:text-lg lg:text-lg leading-relaxed text-center lg:text-left">
              <span className="text-pink-400">Lionel Messi</span> was born on <span className="text-pink-400">June 24, 1987</span> in <span className="text-pink-400">Rosario, Argentina</span>. 
              From a very young age, he loved <span className="text-pink-400">football</span> and showed incredible <span className="text-pink-400">talent</span>. 
              His focus, passion, and natural ability were already clear to everyone around him.
            </p>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2 flex justify-center w-full">
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-square rounded-xl overflow-hidden shadow-2xl border-2 border-pink-500 hover:scale-105 transition-transform duration-300">
              <Image
                src="/about/child1.jpg"
                alt="Messi at 4 years old"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ===== Section 2: Early Skills - Dribbling ===== */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-32">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">

          {/* Dribbling Video */}
          <div className="w-full flex flex-col items-center gap-4">
            <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl border-2 border-pink-500 hover:scale-105 transition-transform duration-300">
              <video
                src="/about/child-dribble.mp4"
                className="w-full h-auto object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            </div>
            <p className="text-sm sm:text-base italic mt-2 text-pink-400 text-center">
              Messi dribbling at age 7-8, showing early signs of his extraordinary ball control and agility.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
