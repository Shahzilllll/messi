"use client"

import React from "react";
import Stats from "@/app/components/achievement1";
import AwardsSection from "@/app/components/achievement2";





export default function Achievements() {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="w-full max-w-full">
        <Stats/>
        <AwardsSection/>
      </div>
    </main>
  );
}
