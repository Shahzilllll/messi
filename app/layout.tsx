import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./scrolltotop";
 // make this file as we discussed

// Fonts
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

// Metadata
export const metadata: Metadata = {
  title: "Lionel Messi: The Art of Football",
  description: "Explore the life, achievements, and legacy of Lionel Messi",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${cinzel.variable} antialiased bg-black text-white`}
      >
        {/* Scroll to top on refresh/navigation */}
        <ScrollToTop />

        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="grow pt-20 sm:pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
