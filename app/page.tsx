"use client";
import React from "react";
import HomePageHero from "./components/homepagehero";
import Childhoodsection from "./components/childhoodsection";
import TributeVideoSection from "./components/tribute";
import Statshome from "./components/statshome";
import LegendQuotesSection from "./components/quotes";

export default function HomePage() {
  return (
    <main >
      <HomePageHero />
      <Childhoodsection />
      <TributeVideoSection />
      <Statshome />
      <LegendQuotesSection />
    </main>
  );
}
