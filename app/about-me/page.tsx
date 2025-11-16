"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function AboutMe() {
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    await fetch("https://formsubmit.co/ajax/uplayer773@gmail.com", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then(() => {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch(() => alert("Oops! Something went wrong."));
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-16 flex flex-col gap-16">
      {/* Hero Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textVariant}
        className="text-center"
      >
        <h1
          className="text-5xl sm:text-6xl md:text-7xl mb-4 font-extralight"
          style={{ fontFamily: "Cinzel" }}
        >
          S H A H Z I L 
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl max-w-3xl mx-auto opacity-90">
          <span className="text-pink-500 font-semibold">N  A  D  E  E  M</span>
        </p>
      </motion.section>

      {/* Personal Story */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariant}
        className="max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl space-y-6 leading-relaxed opacity-90"
      >
        <p>
          Hey, <span className="text-pink-500 font-semibold">Shahzil</span> here. I made this website because I was kinda bored, and also because I love <span className="text-pink-500 font-semibold">MESSI</span> — he's the best player of all time.
        </p>
        <p>
          Besides all that, I'm actually a <span className="text-pink-500 font-semibold">student</span> who is into <span className="text-pink-500 font-semibold">dev programming</span>. I do this for <span className="text-pink-500 font-semibold">fun</span>. If you liked this website, leave a <span className="text-pink-500 font-semibold">message</span> for me — I will appreciate it.
        </p>
        <blockquote className="italic opacity-80 border-l-4 border-pink-600 pl-4">
          "There are more important things in life than winning or losing a game." — <span className="text-pink-500 font-semibold">Lionel Messi</span>
        </blockquote>
      </motion.section>

      {/* Leave a Message Form */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariant}
        className="max-w-2xl mx-auto mt-12 bg-gray-900 p-10 rounded-3xl shadow-2xl relative"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-500 tracking-wide">
          Leave a Message
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-4 rounded-2xl bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email (optional)"
            className="p-4 rounded-2xl bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="p-4 rounded-2xl bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            rows={6}
          />
          <button
            type="submit"
            className="bg-pink-500 text-white font-semibold py-4 rounded-2xl hover:bg-pink-600 transition-all duration-300"
          >
            Send
          </button>
        </form>

        {/* Message Sent Popup */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-6 right-6 bg-green-500 text-white px-5 py-3 rounded-2xl shadow-lg"
          >
            Message Sent!
          </motion.div>
        )}
      </motion.section>
    </main>
  );
}
