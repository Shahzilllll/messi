"use client"
import React from "react";
import EarlyLifeAndDribble from "@/app/components/earlylife";
import BarcelonaEra from "@/app/components/about2";
import EarlyAchievements from "@/app/components/about3";
import WorldCupAchievement from "@/app/components/about4";
import MessiFamily from "@/app/components/about5";

export default function About() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Prevent horizontal overflow */}
      <div className="w-full max-w-full">
        <EarlyLifeAndDribble />
        <BarcelonaEra />
        <EarlyAchievements />
        <WorldCupAchievement />
        <MessiFamily />
      </div>
    </main>
  );
}
