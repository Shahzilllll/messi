"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

// Count-up number component
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
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress * (2 - progress); // easeOutQuad
      setCount(Math.floor(eased * value));

      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current!);
  }, [value, isInView, duration]);

  return <span className={className}>{count}</span>;
}

// Simple inView hook
function useInViewSimple(ref: React.RefObject<HTMLElement | null>, margin = 0) {
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

export default function HomeStatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInViewSimple(ref, -100);
  const [stats, setStats] = useState<{ label: string; value: number }[]>([]);

  // Fetch stats
  useEffect(() => {
    fetch("/stats.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((s: any) =>
          ["Matches", "Goals", "Assists"].includes(s.label)
        );
        setStats(filtered);
      });
  }, []);

  return (
    <section
      ref={ref}
      id="home-stats"
      className="w-full py-16 md:py-32 px-4 md:px-16 bg-black text-white flex flex-col items-center"
    >
      {/* Title */}
      <h2
        className="text-2xl sm:text-3xl md:text-5xl font-bold mb-10 text-center opacity-0 translate-y-10 transition-all duration-800"
        style={{ fontFamily: "Cinzel" }}
      >
        Career Highlights
      </h2>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 w-full max-w-3xl">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-2 p-4 md:p-6 bg-white/5 border border-pink-600/30 rounded-xl hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
          >
            <CountUpNumber
              value={stat.value}
              isInView={inView}
              className="text-4xl md:text-5xl font-bold text-pink-500"
            />
            <span className="text-base md:text-lg opacity-80">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* View More button */}
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
          {/* Glowing mist */}
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
