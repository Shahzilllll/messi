"use client"
import RonaldoPraise from "../components/praise1";
import ZlatanPraise from "../components/praise2";
import HenryPraise from "../components/praise3"; 
import PepPraise from "../components/praise4";
import WengerPraise from "../components/praise5";
import MourinhoPraise from "../components/praise6";
import KloppPraise from "../components/praise7";
import MbappePraise from "../components/praise8"; 
import BoatengPraise from "../components/praise9";
import RioFerdinandPraise from "../components/praise10";


export default function Praise() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Prevent horizontal overflow */}
      <div className="w-full max-w-full">
        <RonaldoPraise/>
        <ZlatanPraise/>
        <HenryPraise/>
        <PepPraise/>
        <WengerPraise/>
        <MourinhoPraise/>
        <KloppPraise/>
        <MbappePraise/>
        <BoatengPraise/>
        <RioFerdinandPraise/>
      </div>
    </main>
  );
}