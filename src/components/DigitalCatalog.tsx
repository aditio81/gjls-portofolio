"use client";

import Badge from "./Badge";
import DigitalVODCard from "./DigitalVODCard";
import { digitalHero, vodCatalog } from "@/lib/data";
import Link from "next/link";

export default function DigitalCatalog() {
  // Split VOD jadi 2 grup (3 item per grup)
  const firstGroup = vodCatalog.slice(0, 3);
  const secondGroup = vodCatalog.slice(3, 6);

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xluto">
        
        {/* Hero */}
        <div className="text-center mb-12">
          <Badge text={digitalHero.badge} variant="teal" icon="star" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gjls-black mt-6">
            {digitalHero.title}
          </h1>
          <p className="font-body text-base text-gray-600 mt-4 max-w-2xl mx-auto">
            {digitalHero.description}
          </p>
          <div className="mt-6">
            <Link href={digitalHero.ctaLink}>
              <button className="px-6 py-3 bg-gjls-pink text-white font-display font-bold text-sm border-2 border-gjls-black shadow-brutal rounded-lg hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all">
                {digitalHero.ctaText}
              </button>
            </Link>
          </div>
        </div>

        {/* VOD Group 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {firstGroup.map((vod) => (
            <DigitalVODCard key={vod.id} {...vod} />
          ))}
        </div>

        {/* Digital Pass Banner */}
        <div className="my-12">
          {/* Akan di-render oleh komponen DigitalPass di page.tsx */}
        </div>

        {/* VOD Group 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondGroup.map((vod) => (
            <DigitalVODCard key={vod.id} {...vod} />
          ))}
        </div>

      </div>
    </section>
  );
}