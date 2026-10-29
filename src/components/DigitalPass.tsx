"use client";

import Badge from "./Badge";
import Link from "next/link";
import { digitalPass } from "@/lib/data";

export default function DigitalPass() {
  return (
    <section className="px-6 md:px-12 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="border-4 border-gjls-black shadow-brutal bg-gjls-teal rounded-xl p-8 md:p-12 relative overflow-hidden">
          
          {/* Pattern Diagonal Dekoratif */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, #FFFFFF 20px, #FFFFFF 22px)',
              }}
            />
          </div>

          {/* Konten */}
          <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start justify-between">
            
            {/* Kiri: Info */}
            <div className="grow">
              <Badge text={digitalPass.badge} variant="yellow" icon="star" />
              
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-4 mb-4">
                {digitalPass.title} - <span className="text-gjls-yellow">{digitalPass.price}</span>
              </h2>
              
              <p className="font-body text-sm text-gjls-cream max-w-2xl leading-relaxed">
                {digitalPass.description}
              </p>
            </div>

            {/* Kanan: CTA */}
            <div className="shrink-0">
              <Link href={digitalPass.ctaLink}>
                <button className="px-6 py-4 bg-gjls-pink text-white font-display font-bold text-sm border-2 border-gjls-black shadow-brutal rounded-lg hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all">
                  {digitalPass.ctaText}
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}