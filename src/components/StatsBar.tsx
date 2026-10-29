"use client";

import { statsData } from "@/lib/data";

export default function StatsBar() {
  const duplicatedStats = [...statsData, ...statsData, ...statsData];

  return (
    <div className="w-full bg-gjls-black py-4 overflow-hidden border-y-4 border-gjls-black">
      <div 
        className="flex whitespace-nowrap"
        style={{
          animation: 'marquee 30s linear infinite',
        }}
      >
        {duplicatedStats.map((stat, index) => (
          <div key={index} className="flex items-center mx-8 font-display font-bold text-sm tracking-wider text-gjls-cream">
            <span className="text-gjls-yellow mr-3">★</span>
            {stat}
            <span className="text-gjls-yellow ml-8">★</span>
          </div>
        ))}
      </div>

      {/* Definisikan keyframes inline agar pasti ter-load */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}