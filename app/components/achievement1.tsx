"use client";
import { useRef, useEffect, useState } from "react";

// Count-up number
function CountUp({ value, active }: { value: number; active: boolean }) {
  const [count, setCount] = useState(0);
  const raf = useRef<number>();

  useEffect(() => {
    if (!active) return;

    const start = performance.now();
    const duration = 1500;

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = progress * (2 - progress);
      setCount(Math.floor(eased * value));

      if (progress < 1) raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current!);
  }, [value, active]);

  return <span>{count}</span>;
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Hardcoded stats
  const stats = [
    { label: "Goals", value: 895 },
    { label: "Assists", value: 401 },
    { label: "Matches", value: 1134 },
    { label: "Trophies", value: 46 },
    { label: "Ballon d'Ors", value: 8 },
    { label: "Champions League Titles", value: 4 },
    { label: "FIFA Club World Cups", value: 3 },
    { label: "European Golden Shoes", value: 6 },
    { label: "Hat-tricks", value: 61 },
    { label: "Minutes Played", value: 65000 },
  ];

  // Detect when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <main
      ref={ref}
      className="min-h-screen bg-black text-white py-16 px-4 md:px-12 flex flex-col items-center"
    >
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.35em] mb-12 text-center"
        style={{ fontFamily: "Cinzel" }}
      >
        S T A T S
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6 md:gap-8 max-w-6xl w-full">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center bg-white/5 border border-pink-600/30 p-4 sm:p-5 md:p-6 rounded-2xl"
          >
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-500">
              <CountUp value={item.value} active={inView} />
            </span>
            <p className="text-xs sm:text-sm md:text-base text-center opacity-80 mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
