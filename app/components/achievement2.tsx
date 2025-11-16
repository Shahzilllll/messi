"use client";
import { useState } from "react";

// Team Awards Data
interface AwardGroup {
  club: string;
  titles: number;
  awards: {
    name: string;
    count?: number;
    years?: string[];
  }[];
}

const teamAwards: AwardGroup[] = [
  {
    club: "FC Barcelona",
    titles: 35,
    awards: [
      { name: "La Liga", count: 10, years: ["2005","2006","2009","2010","2011","2013","2015","2016","2018","2019"] },
      { name: "Copa del Rey", count: 7, years: ["2009","2012","2015","2016","2017","2018","2021"] },
      { name: "Supercopa de España", count: 8, years: ["2005","2006","2009","2010","2011","2013","2016","2018"] },
      { name: "UEFA Champions League", count: 4, years: ["2006","2009","2011","2015"] },
      { name: "UEFA Super Cup", count: 3, years: ["2009","2011","2015"] },
      { name: "FIFA Club World Cup", count: 3, years: ["2009","2011","2015"] },
    ],
  },
  {
    club: "Paris Saint-Germain",
    titles: 3,
    awards: [
      { name: "Ligue 1", count: 2, years: ["2022","2023"] },
      { name: "Trophée des Champions", count: 1, years: ["2022"] },
    ],
  },
  {
    club: "Inter Miami",
    titles: 2,
    awards: [
      { name: "Leagues Cup", count: 1, years: ["2023"] },
      { name: "Supporters' Shield", count: 1, years: ["2023"] },
    ],
  },
  {
    club: "Argentina National Team",
    titles: 6,
    awards: [
      { name: "FIFA World Cup", years: ["2022"] },
      { name: "Copa América", years: ["2021","2024"] },
      { name: "Finalissima", years: ["2022"] },
      { name: "FIFA U-20 World Cup", years: ["2005"] },
    ],
  },
];

// Individual Awards Data
interface IndividualAward {
  category: string;
  awards: { name: string; count?: number; years?: string[]; note?: string }[];
}

const individualAwards: IndividualAward[] = [
  {
    category: "Ballon d'Or & FIFA Awards",
    awards: [
      { name: "Ballon d'Or", count: 8, years: ["2009","2010","2011","2012","2015","2019","2021","2023"], note: "(record)" },
      { name: "FIFA World Player of the Year / The Best FIFA Men's Player", count: 8, years: ["2009","2010","2011","2012","2015","2019","2021","2023"] },
    ],
  },
  {
    category: "Trophies for Goal Scoring",
    awards: [
      { name: "European Golden Shoe", count: 6, years: ["2010","2012","2013","2017","2018","2019"], note: "(record)" },
      { name: "Champions League Top Scorer", count: 6, years: ["2008","2009","2010","2011","2012","2019"] },
      { name: "La Liga Pichichi Trophy", count: 8, years: ["2009","2010","2012","2013","2017","2018","2019","2020"] },
    ],
  },
  {
    category: "Major Tournament & League Awards",
    awards: [
      { name: "World Cup Golden Ball", count: 2, years: ["2014","2022"] },
      { name: "Copa América MVP", count: 2, years: ["2015","2021"] },
      { name: "La Liga MVP", count: 9, years: ["2009","2010","2011","2012","2013","2014","2017","2018","2019"] },
    ],
  },
  {
    category: "Other Notable Awards",
    awards: [
      { name: "Laureus World Sports Award for Sportsman of the Year", count: 2, years: ["2012","2020"] },
      { name: "Golden Boy", count: 1, years: ["2005"] },
      { name: "Bravo Award", count: 1, years: ["2007"] },
      { name: "FIFA FIFPro", count: 1, years: ["2020"] },
      { name: "Olympic Gold Medal", count: 1, years: ["2008"], note: "(2008)" },
    ],
  },
];

export default function AchievementsPage() {
  const [openSection, setOpenSection] = useState<"team" | "individual" | null>(null);
  const [expandedAward, setExpandedAward] = useState<string | null>(null);

  const handleToggle = (key: string) => setExpandedAward(expandedAward === key ? null : key);

  return (
    <section className="w-full py-20 px-4 md:px-12 bg-black text-white flex flex-col items-center">
      {/* Toggle Buttons */}
      <div className="flex flex-wrap gap-4 mb-16">
        <button
          onClick={() => setOpenSection(openSection === "team" ? null : "team")}
          className={`px-8 py-3 font-semibold rounded-full text-white transition-all duration-300 shadow-lg ${
            openSection === "team"
              ? "bg-gradient-to-r from-pink-500 to-pink-600 shadow-pink-500/50 scale-105"
              : "bg-pink-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 hover:scale-105"
          }`}
        >
          Team Awards
        </button>
        <button
          onClick={() => setOpenSection(openSection === "individual" ? null : "individual")}
          className={`px-8 py-3 font-semibold rounded-full text-white transition-all duration-300 shadow-lg ${
            openSection === "individual"
              ? "bg-gradient-to-r from-pink-500 to-pink-600 shadow-pink-500/50 scale-105"
              : "bg-pink-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 hover:scale-105"
          }`}
        >
          Individual Awards
        </button>
      </div>

      {/* Team Awards */}
      {openSection === "team" && (
        <div className="w-full max-w-6xl flex flex-col gap-8">
          {teamAwards.map((club, idx) => (
            <div key={idx} className="bg-white/5 border border-pink-600/30 rounded-3xl p-6 shadow-md hover:shadow-pink-500/50 transition-shadow duration-500">
              <h3 className="text-2xl md:text-3xl font-bold text-pink-500 mb-4">{club.club} ({club.titles} titles)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {club.awards.map((award, i) => {
                  const key = `${club.club}-${award.name}`;
                  const isOpen = expandedAward === key;
                  return (
                    <div
                      key={i}
                      className={`bg-white/10 rounded-2xl p-4 flex flex-col gap-2 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-white/20 ${
                        isOpen ? "bg-pink-900/30 shadow-pink-500/40" : ""
                      }`}
                      onClick={() => award.years ? handleToggle(key) : undefined}
                    >
                      <p className="font-semibold text-pink-400 text-lg">{award.name}</p>
                      {award.count && <p className="text-sm opacity-80">{award.count} times</p>}
                      {award.years && isOpen && (
                        <div className="text-sm opacity-70 mt-2 pl-2 border-l border-pink-500">
                          Years: {award.years.join(", ")}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Individual Awards */}
      {openSection === "individual" && (
        <div className="w-full max-w-6xl flex flex-col gap-8">
          {individualAwards.map((group, idx) => (
            <div key={idx} className="bg-white/5 border border-pink-600/30 rounded-3xl p-6 shadow-md hover:shadow-pink-500/50 transition-shadow duration-500">
              <h3 className="text-2xl md:text-3xl font-bold text-pink-500 mb-4">{group.category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {group.awards.map((award, i) => {
                  const key = `${group.category}-${award.name}`;
                  const isOpen = expandedAward === key;
                  return (
                    <div
                      key={i}
                      className={`bg-white/10 rounded-2xl p-4 flex flex-col gap-2 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-white/20 ${
                        isOpen ? "bg-pink-900/30 shadow-pink-500/40" : ""
                      }`}
                      onClick={() => award.years ? handleToggle(key) : undefined}
                    >
                      <p className="font-semibold text-pink-400 text-lg">{award.name}</p>
                      {award.count && <p className="text-sm opacity-80">{award.count} times</p>}
                      {award.note && <p className="text-sm opacity-70">{award.note}</p>}
                      {award.years && isOpen && (
                        <div className="text-sm opacity-70 mt-2 pl-2 border-l border-pink-500">
                          Years: {award.years.join(", ")}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
