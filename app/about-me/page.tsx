"use client";

export default function AboutMe() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-16 flex flex-col gap-16">
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
          Hey, <span className="text-pink-500 font-semibold">Shahzil</span> here. I made this website because I was kinda bored, and also because I love <span className="text-pink-500 font-semibold">MESSI</span> — he's the best player of all time.
        </p>
        <p>
          Besides all that, I'm a <span className="text-pink-500 font-semibold">student</span> who is into <span className="text-pink-500 font-semibold">dev programming</span>. I do this for <span className="text-pink-500 font-semibold">fun</span>.
        </p>
        <blockquote className="italic opacity-80 border-l-4 border-pink-600 pl-4">
          "There are more important things in life than winning or losing a game." — <span className="text-pink-500 font-semibold">Lionel Messi</span>
        </blockquote>
      </section>
    </main>
  );
}
