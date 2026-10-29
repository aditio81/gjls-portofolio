"use client";

import Badge from "./Badge";
import { flexibilityPillars } from "@/lib/data";

export default function PartnershipFlexibility() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gjls-cream border-y-4 border-gjls-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <Badge text="SOLUSI MENYELURUH" variant="teal" icon="star" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gjls-black mt-4">
            FLEKSIBILITAS TANPA BATAS FORMAT
          </h2>
          <p className="font-body text-base text-gray-600 mt-2 max-w-3xl">
            Pilih pilar kolaborasi yang paling sesuai dengan target KPI bisnis Anda, atau gabungkan ketiganya untuk ledakan kampanye maksimal
          </p>
        </div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {flexibilityPillars.map((pillar) => (
            <div 
              key={pillar.id}
              className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl overflow-hidden"
            >
              {/* Header Kartu (Kuning) */}
              <div className="bg-gjls-yellow border-b-4 border-gjls-black p-4 flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold text-gjls-black">
                  {pillar.title}
                </h3>
                <div className="w-8 h-8 bg-gjls-black rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">›</span>
                </div>
              </div>

              {/* Body Kartu */}
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {pillar.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-gjls-yellow border-2 border-gjls-black rounded flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-gjls-black text-xs font-bold">✓</span>
                      </div>
                      <span className="font-body text-sm text-gjls-black">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Badge Bawah */}
                <div className="border-t-2 border-dashed border-gjls-black pt-4">
                  <span className="inline-block px-4 py-1.5 bg-gjls-cream text-gjls-black border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm">
                    {pillar.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}