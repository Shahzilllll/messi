import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./scrolltotop";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

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

// Metadata (SEO + Favicon)
export const metadata: Metadata = {
  title: "Lionel Messi: The Art of Football",
  description:
    "Dive into the life, brilliance, and enduring legacy of Lionel Messi — the greatest footballer to grace the game.",
  keywords: [
    "Lionel Messi",
    "Messi",
    "GOAT",
    "Football Legend",
    "Barça",
    "Argentina",
    "Messi Stats",
    "Messi Achievements",
  ],
  authors: [{ name: "Shahzil" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Lionel Messi: The Art of Football",
    description:
      "Explore Messi’s journey, achievements, and the artistry that defines the greatest footballer ever.",
    url: "https://your-domain.com",
    siteName: "Messi: The Art of Football",
    images: [
      {
        url: "/messi-og.png",
        width: 1200,
        height: 630,
        alt: "Messi celebrating a goal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lionel Messi: The Art of Football",
    description: "A deep dive into the genius of Lionel Messi.",
    images: ["/messi-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${cinzel.variable} antialiased bg-black text-white`}
      >
        <ScrollToTop />

        <div className="min-h-screen flex flex-col">
          <Analytics />
          <SpeedInsights/>
          <Navbar />
          <main className="grow pt-20 sm:pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
