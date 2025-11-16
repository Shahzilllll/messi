"use client"; // must be first for hooks

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import ThemeToggle from "@/app/components/theme";


function NavLink({ href, children }: { href: string; children: string }) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const linkRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!linkRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 50, y: 50 });
  };

  return (
    <Link
      href={href}
      className="relative px-3 xl:px-5 py-2 xl:py-2.5 rounded-full text-xs xl:text-sm font-semibold text-gray-300 transition-all duration-300 ease-out group overflow-hidden whitespace-nowrap block"
    >
      <div
        ref={linkRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="absolute inset-0 z-20"
      />
      {/* Cursor-following light effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle 80px at ${mousePosition.x}% ${mousePosition.y}%, rgba(236, 72, 153, 0.3), transparent 70%)`,
        }}
      />

      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-pink-500/15 to-pink-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>

      {/* Text with glow */}
      <span className="relative z-10 block transition-all duration-300 group-hover:text-pink-400 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.8)] group-hover:scale-105">
        {children}
      </span>

      {/* Animated underline with gradient */}
      <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent group-hover:w-full group-hover:left-0 -translate-x-1/2 group-hover:translate-x-0 transition-all duration-500 ease-out rounded-full"></div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-full"></div>
    </Link>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Added "About Me" link
  const links = ["About", "Achievements", "Gallery", "The Praise", "About Me"];

  return (
    <nav
      className={`fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 w-[98%] sm:w-[95%] max-w-6xl z-50 backdrop-blur-xl bg-gradient-to-b from-black/95 via-black/90 to-black/95 border-2 border-pink-500/30 shadow-2xl shadow-pink-500/10 transition-all duration-500 ${
        menuOpen ? "rounded-3xl" : "rounded-full"
      }`}
    >
      <div className="px-3 sm:px-6 md:px-8 lg:px-10">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 flex items-center gap-3 sm:gap-4 group"
          >
            <Image
              src="/images/messi-logo.png"
              alt="Messi Logo"
              width={120}
              height={40}
              className="h-5 sm:h-6 w-auto transition-all duration-300 group-hover:opacity-80"
            />
            <Image
              src="/images/messitxt.png"
              alt="Greatest of all time"
              width={200}
              height={40}
              className="h-5 sm:h-6 w-auto transition-all duration-300 group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-2 xl:space-x-3 items-center font-poppins">
            {links.map((link) => (
              <NavLink
                key={link}
                href={`/${link.toLowerCase().replace(" ", "-")}`}
              >
                {link}
              </NavLink>
            ))}
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none p-2 sm:p-2.5 rounded-full transition-all duration-500 group relative overflow-hidden active:scale-95"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-pink-500/10 rounded-full scale-0 group-hover:scale-100 group-active:scale-100 transition-transform duration-500"></div>
              <svg
                className={`h-5 w-5 sm:h-6 sm:w-6 text-gray-300 group-hover:text-pink-400 transition-all duration-500 relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.8)] ${
                  menuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-1.5 sm:space-y-2 pb-3 sm:pb-4 border-t border-pink-500/20 pt-2 px-1">
            {links.map((link, index) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(" ", "-")}`}
                className="block px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-gray-300 transition-all duration-500 group relative overflow-hidden active:scale-95"
                onClick={() => setMenuOpen(false)}
                style={{
                  animationDelay: menuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-pink-500/15 to-pink-500/10 rounded-xl scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span className="relative z-10 block text-sm sm:text-base group-hover:text-pink-400 group-active:text-pink-400 group-hover:translate-x-2 group-active:translate-x-2 transition-all duration-500 group-hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.6)]">
                  {link}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

