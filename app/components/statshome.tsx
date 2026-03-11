"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

/* ---------------- Count Up Component ---------------- */
function CountUpNumber({
  value,
  isInView,
  duration = 1500,
  className,
}: {
  value: number;
  isInView: boolean;
  duration?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = progress * (2 - progress); // easeOutQuad
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, isInView, duration]);

  return <span className={className}>{count}</span>;
}

/* ---------------- In View Hook ---------------- */
function useInViewSimple(
  ref: React.RefObject<HTMLElement | null>,
  margin = 0
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: `${margin}px` }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, margin]);

  return inView;
}

/* ---------------- Main Section ---------------- */
export default function HomeStatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInViewSimple(sectionRef, -100);
  const [stats, setStats] = useState<
    { label: string; value: number }[]
  >([]);

  useEffect(() => {
    fetch("/stats.json")
      .then((res) => res.json())
      .then((data) => {
        setStats(
          data.filter((s: any) =>
            ["Matches", "Goals", "Assists"].includes(s.label)
          )
        );
      });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home-stats"
      className="w-full py-20 md:py-32 px-4 md:px-16 bg-black text-white flex flex-col items-center"
    >
      {/* Section Label */}
      <h3
        className={`text-sm sm:text-base tracking-[0.35em] text-pink-500 mb-4 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ fontFamily: "Cinzel" }}
      >
        
      </h3>

      {/* Title */}
      <h2
        className={`text-2xl sm:text-3xl md:text-5xl font-bold mb-12 text-center transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        style={{ fontFamily: "Cinzel" }}
      >
        Career Highlights
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 w-full max-w-3xl">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-pink-600/30 rounded-xl hover:scale-105 transition-transform duration-300"
          >
            <CountUpNumber
              value={stat.value}
              isInView={inView}
              className="text-4xl md:text-5xl font-bold text-pink-500"
            />
            <span className="text-base md:text-lg opacity-80">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14">
        <Link
          href="/achievements"
          className="
            group relative inline-block px-8 py-3
            rounded-xl font-semibold
            bg-gradient-to-r from-pink-600 to-pink-500
            text-white
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
          " />
        </Link>
      </div>
    </section>
  );
}
