"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";

const images = [
  "/home/child1.jpg",
  "/home/child2.jpeg",
  "/home/child3.jpeg",
  "/home/child4.jpeg",
];

export default function ChildhoodSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      ref={ref}
      id="childhood"
      className="relative w-full py-20 md:py-36 px-4 md:px-16 flex flex-col md:flex-row items-center gap-12 bg-black text-white"
    >
      {/* --- TEXT SECTION --- */}
      <motion.div
        className="md:w-1/2 flex flex-col gap-6 text-center md:text-left"
        initial="hidden"
        animate={controls}
        variants={textVariant}
      >
        <h3
          className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-wide"
          style={{ fontFamily: "Cinzel" }}
        >
          Childhood Days
        </h3>

        <p className="text-sm sm:text-base md:text-xl leading-relaxed opacity-90">
          Lionel Messi showed his{" "}
          <span className="text-pink-600 font-semibold">talent</span> from a
          very young age. Born in{" "}
          <span className="text-pink-600 font-semibold">Rosario, Argentina</span>,
          his passion and skill were evident even as a child. His dedication and
          love for the game built the early foundation of the{" "}
          <span className="text-pink-600 font-semibold">legend</span> he would
          become.
        </p>

        <blockquote className="text-xs sm:text-sm md:text-lg italic opacity-80 border-l-4 border-pink-600 pl-4">
          "Even as a boy, he would spend hours with the ball, dreaming of{" "}
          <span className="text-pink-600 font-semibold">greatness</span>." —{" "}
          <span className="font-semibold text-pink-600">His Mother</span>
        </blockquote>

        {/* --- AESTHETIC READ MORE BUTTON --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          className="mt-4"
        >
          <Link
            href="/about"
            className="
              group
              inline-block px-7 py-3
              rounded-xl font-semibold
              bg-gradient-to-r from-pink-600 to-pink-500
              text-white text-sm sm:text-base
              shadow-lg shadow-pink-600/20
              hover:shadow-pink-400/40
              transition-all duration-300
              hover:-translate-y-1
              relative overflow-hidden
            "
          >
            <span className="relative z-10">Read More →</span>

            {/* glowing mist */}
            <span
              className="
                absolute inset-0
                bg-white/30 blur-2xl opacity-0
                group-hover:opacity-20
                transition-opacity duration-500
              "
            ></span>
          </Link>
        </motion.div>
      </motion.div>

      {/* --- IMAGES --- */}
      <div className="md:w-1/2 flex flex-wrap justify-center gap-3 md:gap-4">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            animate={controls}
            variants={imageVariant}
            className={`
              relative 
              w-32 sm:w-40 md:w-56 
              h-32 sm:h-40 md:h-56
              rounded-2xl overflow-hidden
              shadow-2xl
              transform
              ${idx % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"}
              hover:scale-105
              transition-transform duration-500
            `}
          >
            <Image
              src={src}
              alt={`Childhood ${idx + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
