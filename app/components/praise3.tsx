"use client";

import React, { useRef, useState, useEffect } from "react";

export default function HenryPraise() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);

  // Check if section is in view (roughly centered)
  const isInView = () => {
    if (!containerRef.current) return false;
    const rect = containerRef.current.getBoundingClientRect();
    return rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
  };

  // Auto-mute/unmute based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;
      const visible = isInView();
      videoRef.current.muted = !visible;
      setMuted(!visible);
    };

    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Manual toggle
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen bg-black text-white py-20 px-6 md:px-20 flex flex-col items-center"
    >
      {/* Henry Section */}
      <div className="w-full flex flex-col md:flex-row items-center gap-10 mb-24">
        {/* Video Container */}
        <div className="w-full md:w-1/2 relative rounded-xl shadow-2xl border-2 border-pink-500 overflow-hidden">
          <video
            ref={videoRef}
            src="/praise/henry.mp4"
            autoPlay
            muted={muted}
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 bg-black/70 text-pink-500 px-3 py-1 rounded-lg hover:bg-black/90 transition"
          >
            {muted ? "Unmute" : "Mute"}
          </button>
        </div>

        {/* Text */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            <span className="text-pink-500">Thierry Henry</span>
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
            <span className="text-pink-500 font-semibold">Henry</span> witnessed Messi’s rise firsthand at Barcelona. 
            He’s spoken with admiration about Messi’s natural talent, humility, and ability to make the impossible look simple. 
            Their bond is built on respect between two of the game’s purest attackers.
          </p>
        </div>
      </div>
    </section>
  );
}
