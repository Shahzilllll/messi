"use client";

import Image from "next/image";
import Link from "next/link";

export default function EarlyAchievements() {
  const achievements = [
    {
      title: "First UEFA Champions League",
      year: "2006",
      img: "/about/ucl.jpg",
      description: "Messi lifted his first UEFA Champions League trophy with Barcelona, marking the start of a legendary career in Europe."
    },
    {
      title: "First Copa America",
      year: "2021",
      img: "/about/Copa.jpeg",
      description: "After years of near-misses, Messi finally lifted the Copa America with Argentina, fulfilling a lifelong dream."
    }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-32 bg-black text-white">
      <h2
        className="text-4xl sm:text-5xl lg:text-6xl font-[500] mb-12 tracking-wide drop-shadow-lg text-center [font-family:'Cinzel']"
      >
        Milestones & Achievements
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-8 sm:gap-12 items-center justify-center">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="sm:w-1/2 flex flex-col items-center gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-pink-600/20"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={300}
              height={200}
              className="object-cover rounded-xl shadow-lg border-2 border-pink-500"
            />
            <h3 className="text-xl sm:text-2xl font-semibold mt-2 text-center text-pink-400">{item.title}</h3>
            <p className="text-center text-white/90 text-sm sm:text-base">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Glowing Button */}
      <div className="mt-12 flex justify-center w-full">
        <Link
          href="/achievements"
          className="
            group
            relative inline-block px-7 py-3
            rounded-xl font-semibold
            bg-gradient-to-r from-pink-600 to-pink-500
            text-white text-sm sm:text-base
            shadow-lg shadow-pink-600/20
            hover:shadow-pink-400/40
            transition-all duration-300
            hover:-translate-y-1
            overflow-hidden
          "
        >
          <span className="relative z-10">View More</span>
          <span className="
            absolute inset-0
            bg-white/30 blur-2xl opacity-0
            group-hover:opacity-20
            transition-opacity duration-500
          "></span>
        </Link>
      </div>
    </section>
  );
}
