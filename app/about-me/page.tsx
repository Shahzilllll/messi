"use client";

export default function AboutMe() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-16 flex flex-col gap-24">

      {/* Hero Section */}
      <section className="text-center">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl mb-4 font-extralight"
          style={{ fontFamily: "Cinzel" }}
        >
          S H A H Z I L
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl max-w-3xl mx-auto opacity-90">
          <span className="text-pink-500 font-semibold">N  A  D  E  E  M</span>
        </p>
      </section>

      {/* Personal Story */}
      <section className="max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl space-y-6 leading-relaxed opacity-90">
        <p>
          Hey, <span className="text-pink-500 font-semibold">Shahzil</span> here. I made this website because I was kinda bored, and also because I love{" "}
          <span className="text-pink-500 font-semibold">MESSI</span> — he's the best player of all time.
        </p>

        <p>
          Besides all that, I'm a{" "}
          <span className="text-pink-500 font-semibold">student</span> who is into{" "}
          <span className="text-pink-500 font-semibold">dev programming</span>. I do this for{" "}
          <span className="text-pink-500 font-semibold">fun</span>.
        </p>

        <blockquote className="italic opacity-80 border-l-4 border-pink-600 pl-4">
          "Sometimes you have to accept you can't win all the time." —{" "}
          <span className="text-pink-500 font-semibold">Lionel Messi</span>
        </blockquote>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto w-full">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-8"
          style={{ fontFamily: "Cinzel" }}
        >
          Send me a message
        </h2>

        <form
          action="https://formspree.io/f/xblqzjan"
          method="POST"
          className="flex flex-col gap-6 bg-gray-900/40 p-8 rounded-2xl backdrop-blur-sm border border-gray-800"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              className="p-3 rounded-xl bg-black/40 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Write your message here..."
              className="p-3 rounded-xl bg-black/40 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-pink-600 hover:bg-pink-700 transition rounded-xl text-white font-semibold text-lg"
          >
            Send
          </button>
        </form>
      </section>
    </main>
  );
}
