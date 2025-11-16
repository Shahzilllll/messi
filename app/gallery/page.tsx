"use client";
import { useState } from "react";
import Image from "next/image";

const sections = ["club", "country", "awards", "fun"];

export default function GallerySection() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const loadImages = (section: string) => {
    const images: string[] = [];
    for (let i = 1; i <= 30; i++) images.push(`/gallery/${section}/${i}.jpg`);
    return images;
  };

  const images = activeSection ? loadImages(activeSection) : [];

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : 0
    );
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : 0
    );

  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-12 bg-black text-white flex flex-col items-center relative">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse">
        Explore Messi's Legendary Moments
      </h2>

      {/* Pre-Click Preview */}
      {!activeSection && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 mb-8 w-full max-w-5xl">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden relative cursor-pointer">
              <Image
                src={`/gallery/club/${i}.jpg`}
                alt="preview"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 text-white font-bold text-xs sm:text-sm md:text-base transition-opacity duration-300">
                Click a section
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Section Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-12">
        {sections.map((sec) => (
          <button
            key={sec}
            onClick={() =>
              setActiveSection(activeSection === sec ? null : sec)
            }
            className={`relative px-6 sm:px-8 py-2 sm:py-3 font-bold text-sm sm:text-lg rounded-full overflow-hidden transition-all duration-300 ${
              activeSection === sec
                ? "bg-gradient-to-r from-pink-500 to-purple-500 shadow-[0_0_25px_rgba(255,0,255,0.6)]"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
            {activeSection === sec && (
              <span className="absolute inset-0 rounded-full bg-pink-500/30 blur-xl -z-10"></span>
            )}
          </button>
        ))}
      </div>

      {/* Gallery */}
      {activeSection && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 w-full max-w-6xl">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={src}
                alt={`${activeSection} image ${idx + 1}`}
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-white font-semibold text-xs sm:text-sm md:text-base">
                {activeSection.charAt(0).toUpperCase() +
                  activeSection.slice(1)}{" "}
                #{idx + 1}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white text-4xl md:text-5xl font-bold z-50 hover:scale-110 transition-transform duration-300"
          >
            &times;
          </button>
          <button
            onClick={prevImage}
            className="absolute left-5 md:left-10 text-white text-4xl md:text-5xl font-bold z-50 hover:scale-110 transition-transform duration-300"
          >
            &#8249;
          </button>
          <div className="max-h-[90vh] max-w-[90vw] relative">
            <Image
              src={images[lightboxIndex]}
              alt="lightbox image"
              width={1000}
              height={1000}
              className="object-contain rounded-2xl"
            />
          </div>
          <button
            onClick={nextImage}
            className="absolute right-5 md:right-10 text-white text-4xl md:text-5xl font-bold z-50 hover:scale-110 transition-transform duration-300"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}
