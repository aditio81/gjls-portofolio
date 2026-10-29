"use client";

import Badge from "./Badge";
import { regularShows } from "@/lib/data";

export default function FormatInventory() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gjls-cream border-y-4 border-gjls-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gjls-black mb-2">
            FORMAT INVENTORY UNTUK TIAP KEBUTUHAN BRAND
          </h2>
          <p className="font-body text-sm text-gray-600 max-w-3xl mx-auto">
            Setiap program kami memiliki diferensiasi segmen penonton, gaya interaksi, dan titik lekat komersial yang unik. Dari sesi santai dapur, panggung talkshow komikal berbalut satire, hingga pesta rakyat outdoor berenergi liar.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Badge text="TAYANGAN RUTIN" variant="yellow" icon="star" />
        </div>

        {/* Grid 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regularShows.map((show) => (
            <div 
              key={show.id}
              className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl p-6 flex flex-col hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all"
            >
              {/* Day Badge */}
              <span className={`inline-block px-3 py-1 ${show.dayColor} text-gjls-black border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm mb-4 w-fit`}>
                {show.day}
              </span>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold text-gjls-black mb-2">
                {show.title}
              </h3>

              {/* Short Description */}
              <p className="font-body text-sm font-bold text-gjls-pink mb-3">
                {show.description}
              </p>

              {/* Detail */}
              <p className="font-body text-xs text-gray-600 leading-relaxed mb-4 grow">
                {show.detail}
              </p>

              {/* Target Persona */}
              <div className="mb-4">
                <p className="font-body text-[10px] font-bold text-gjls-black uppercase tracking-wider mb-1">
                  TARGET PERSONA:
                </p>
                <p className="font-body text-xs text-gray-600">
                  {show.targetPersona}
                </p>
              </div>

              {/* Divider */}
              <div className="border-t-2 border-dashed border-gjls-black my-3" />

              {/* Slot Integrasi */}
              <div>
                <p className="font-body text-[10px] font-bold text-gjls-black uppercase tracking-wider mb-2">
                  SLOT INTEGRASI
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {show.slots.map((slot, idx) => (
                    <span 
                      key={idx}
                      className={`px-2 py-1 border-2 border-gjls-black rounded-full font-display font-bold text-[10px] shadow-brutal-sm ${
                        idx === 0 ? 'bg-gjls-pink text-white' : 
                        idx === 1 ? 'bg-gjls-teal text-white' : 
                        'bg-gjls-yellow text-gjls-black'
                      }`}
                    >
                      {slot}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}