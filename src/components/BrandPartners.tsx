"use client";

import Badge from "./Badge";
import { brandPartners } from "@/lib/data";

export default function BrandPartners() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gjls-cream">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-center mb-12">
          <Badge text="OUR BRAND PARTNER" variant="yellow" />
        </div>

        {/* Grid dengan Kartu Sponsor Seragam */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brandPartners.map((partner) => (
            <div 
              key={partner.id}
              className="w-full h-28 bg-cream border-2 border-gjls-cream rounded-lg p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              {partner.logo ? (
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className={`
                    object-contain 
                    ${partner.height || 'h-16'} 
                    ${partner.width || 'w-auto'}
                  `}
                />
              ) : (
                <span className="font-display font-bold text-gjls-black text-xs text-center">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}