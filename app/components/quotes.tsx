"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const quotes = [
  { text: "Lionel Messi is the greatest player of all time.", author: "Arsene Wenger" },
  { text: "Amazing. Player is magic, Top", author: "Cristiano Ronaldo" },
  { text: "Anyone who doesn't think Messi is the BEST will still find EXCUSES!", author: "Andrés Iniesta" },
  { text: "The greatest footballer of my lifetime is absolutely Lionel Messi.", author: "Jürgen Klopp" },
  { text: "You Have to Be Stupid Not to Run for Messi", author: "Thierry Henry" },
  { text: "Messi is going to be the best player in the world.", author: "Ronaldinho to Kobe Bryant" },
  { text: "For me leo is the best player in the world", author: "Thierry Henry" },
  { text: "I think Messi is one of a kind", author: "Zlatan Ibrahimović" },
  { text: "Messi is the god of football. When Messi has the ball, one-on-one, you’re dead", author: "José Mourinho" },
  { text: "He is the best player I have ever seen. The best thing about him is not what he does but how simple he makes everything look.", author: "Pep Guardiola" },
];

export default function LegendQuotesSection() {
  const [index, setIndex] = useState(0);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => setIndex(prev => (prev + 1) % quotes.length);
  const prev = () => setIndex(prev => (prev - 1 + quotes.length) % quotes.length);

  useEffect(() => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => next(), 5000);
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [index]);

  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-16 bg-black/95 text-white flex flex-col items-center relative">
      <h2
        className="text-2xl sm:text-3xl md:text-5xl font-bold mb-12 sm:mb-16 text-center leading-tight"
        style={{ fontFamily: "Cinzel" }}
      >
        Praises from Legends
      </h2>

      <div className="relative w-full max-w-xl flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-0 sm:left-[-10px] md:left-[-15px] top-1/2 transform -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/50 hover:bg-black/70 z-20"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-pink-500" />
        </button>

        {/* Quote */}
        <div className="w-full px-2 sm:px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="bg-white/10 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl border border-pink-600/20 shadow-md text-center mx-auto"
            >
              <p className="text-base sm:text-lg md:text-2xl italic mb-2 sm:mb-3">
                "{quotes[index].text}"
              </p>
              <span className="text-xs sm:text-sm md:text-lg font-semibold opacity-80">
                — {quotes[index].author}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-0 sm:right-[-10px] md:right-[-15px] top-1/2 transform -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/50 hover:bg-black/70 z-20"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-pink-500" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex gap-2 mt-6 justify-center">
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-pink-500" : "bg-white/40 hover:bg-pink-400/60"
            }`}
          />
        ))}
      </div>

      {/* Explore More Button */}
      <a
        href="/the-praise"
        className="mt-8 inline-block px-8 py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-pink-500/40 transition-all duration-300 hover:-translate-y-1"
      >
        Explore More →
      </a>
    </section>
  );
}
