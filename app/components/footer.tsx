"use client";

import Link from "next/link";
import Image from "next/image";

function FooterLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="relative px-3 sm:px-3 py-2.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-gray-300 transition-all duration-300 ease-out group overflow-hidden whitespace-nowrap block min-h-[44px] sm:min-h-0 flex items-center justify-center"
    >
      {/* Cursor-following light effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full pointer-events-none bg-gradient-to-r from-pink-500/20 via-pink-500/30 to-pink-500/20"></div>

      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-pink-500/15 to-pink-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>

      {/* Text with glow */}
      <span className="relative z-10 block transition-all duration-300 group-hover:text-pink-400 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.8)] group-hover:scale-105">
        {children}
      </span>

      {/* Animated underline with gradient */}
      <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent group-hover:w-full group-hover:left-0 -translate-x-1/2 group-hover:translate-x-0 transition-all duration-500 ease-out rounded-full"></div>
    </Link>
  );
}

function SocialIcon({
  href,
  children,
  label,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative p-3 sm:p-2.5 md:p-3 rounded-full text-gray-300 transition-all duration-300 ease-out group overflow-hidden min-w-[44px] min-h-[44px] flex items-center justify-center"
      aria-label={label}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-pink-500/15 to-pink-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>

      {/* Icon with glow */}
      <span className="relative z-10 block transition-all duration-300 group-hover:text-pink-400 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.8)] group-hover:scale-110">
        {children}
      </span>
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = ["About", "Achievements", "Gallery", "The Praise", "About Me"];

  return (
    <footer className="relative mt-auto backdrop-blur-xl bg-gradient-to-b from-black/95 via-black/90 to-black/95 border-t-2 border-pink-500/30 shadow-2xl shadow-pink-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start mb-4 sm:mb-0">
            <Link href="/" className="flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3 group mb-3 sm:mb-4">
              <h1
                className="text-white font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider uppercase"
                style={{
                  letterSpacing: "0.15em",
                  fontFamily: "var(--font-montserrat), sans-serif",
                  fontWeight: 600,
                }}
              >
                LIONEL
              </h1>
              <Image
                src="/images/messitxt.png"
                alt="Greatest of all time"
                width={200}
                height={40}
                className="h-4 sm:h-5 md:h-6 w-auto transition-all duration-300 group-hover:opacity-80"
              />
            </Link>
            <p className="text-gray-300/80 text-xs sm:text-sm text-center md:text-left max-w-xs sm:max-w-sm leading-relaxed italic px-2 sm:px-0">
              made this website for the greatest player of all time —{" "}
              <span className="text-pink-400/90 font-medium not-italic">Shahzil Nadeem</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start mb-4 sm:mb-0">
            <h3 className="text-pink-400 font-semibold text-sm sm:text-base mb-3 sm:mb-4 drop-shadow-[0_0_6px_rgba(236,72,153,0.6)]">
              Quick Links
            </h3>
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-2.5 md:gap-3 justify-center md:justify-start w-full sm:w-auto">
              {footerLinks.map((link) => (
                <FooterLink key={link} href={`/${link.toLowerCase().replace(" ", "-")}`}>
                  {link}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-pink-400 font-semibold text-sm sm:text-base mb-3 sm:mb-4 drop-shadow-[0_0_6px_rgba(236,72,153,0.6)]">
              Connect
            </h3>
            <div className="flex gap-3 sm:gap-4 justify-center md:justify-start">
              {/* Instagram */}
              <SocialIcon href="https://www.instagram.com/shahzilllll/" label="Instagram">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </SocialIcon>

              {/* Twitter */}
              <SocialIcon href="https://x.com/shahzillll" label="Twitter">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </SocialIcon>

              {/* Spotify */}
              <SocialIcon href="https://open.spotify.com/user/31x6i4snpwef3vk5ctwtaajhbhtu" label="Spotify">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 168 168">
                  <path d="M84 0C37.58 0 0 37.582 0 84c0 46.418 37.58 84 84 84 46.418 0 84-37.582 84-84 0-46.418-37.582-84-84-84zm38.145 121.09c-1.46 2.21-4.493 2.91-6.707 1.452-18.382-12.072-41.48-14.786-68.946-8.633-2.607.54-5.29-1.28-5.832-3.89-.54-2.609 1.279-5.29 3.89-5.832 30.167-6.18 56.215-3.175 77.07 9.83 2.216 1.454 2.916 4.487 1.525 6.576zm9.778-18.993c-1.834 2.799-5.623 3.61-8.421 1.776-21.073-13.83-53.141-17.854-77.98-10.42-3.297.893-6.825-1.257-7.718-4.554-.893-3.296 1.257-6.825 4.554-7.718 27.538-7.446 62.025-3.153 85.304 11.762 2.799 1.835 3.61 5.623 1.776 8.154zm.111-19.302c-24.312-15.006-64.597-16.34-88.478-9.574-4.004 1.118-8.19-1.272-9.308-5.277-1.118-4.003 1.273-8.19 5.276-9.308 27.25-7.618 71.035-6.072 97.45 10.259 3.755 2.318 4.983 7.093 2.664 10.847-2.32 3.754-7.092 4.983-10.604 3.053z" />
                </svg>
              </SocialIcon>

              {/* GitHub */}
              <SocialIcon href="https://github.com/Shahzilllll" label="GitHub">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.17c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.334-1.756-1.334-1.756-1.09-.744.082-.729.082-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.76-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.526.117-3.177 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.403c1.018.004 2.044.138 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.655 1.65.243 2.874.12 3.177.77.84 1.236 1.91 1.236 3.22 0 4.61-2.804 5.622-5.476 5.921.43.372.823 1.104.823 2.225v3.293c0 .32.218.694.825.576C20.565 21.795 24 17.3 24 12c0-6.628-5.372-12-12-12z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pink-500/20 pt-4 sm:pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} MEOW. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
    </footer>
  );
}
