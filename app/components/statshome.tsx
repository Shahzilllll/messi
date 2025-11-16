"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
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
  const rafRef = useRef<number>();

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

export default function HomeStatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
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

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };

  return (
    <section
      ref={ref}
      id="home-stats"
      className="w-full py-16 md:py-32 px-4 md:px-16 bg-black text-white flex flex-col items-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
        className="text-2xl sm:text-3xl md:text-5xl font-bold mb-10 text-center"
        style={{ fontFamily: "Cinzel" }}
      >
        Career Highlights
      </motion.h2>

      {/* Stats grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 w-full max-w-3xl"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="flex flex-col items-center gap-2 p-4 md:p-6 bg-white/5 border border-pink-600/30 rounded-xl hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
          >
            <CountUpNumber
              value={stat.value}
              isInView={inView}
              className="text-4xl md:text-5xl font-bold text-pink-500"
            />
            <span className="text-base md:text-lg opacity-80">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* View More button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
        className="mt-12 flex justify-center w-full"
      >
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
      </motion.div>
    </section>
  );
}
