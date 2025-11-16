"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MessiFamily() {
  return (
    <section className="w-full py-20 px-6 lg:px-32 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Left: Picture */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/about/fam.jpg" // Messi with his wife and children
            alt="Messi with his family"
            width={400}
            height={400}
            className="object-cover rounded-xl shadow-2xl border-2 border-pink-500"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl lg:text-6xl font-[500] mb-6 tracking-wide drop-shadow-lg [font-family:'Cinzel']"
          >
            Family & Love
          </h2>
          <p className="text-lg leading-relaxed">
            Beyond the pitch, <span className="text-pink-400">Lionel Messi</span> shares his life with his beloved wife 
            <span className="text-pink-400"> Antonela</span> and their children. Their support, love, and encouragement have 
            been a cornerstone in Messi’s journey, reminding us that even the greatest legends cherish the joy and stability 
            of family life.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
