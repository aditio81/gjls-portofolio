"use client";

import Badge from "./Badge";
import { premiumWorks } from "@/lib/data";

export default function PremiumWorksSection() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Utama Section Premium */}
        <div className="mb-12 text-center">
          <Badge text="MAHAKARYA & KOLABORASI PREMIUM" variant="teal" icon="star" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gjls-black mt-4">
            DARI YOUTUBE KE LAYAR LEBAR & TV NASIONAL
          </h2>
          <p className="font-body text-sm text-gray-600 mt-2 max-w-2xl mx-auto">
            Bukti kompetensi GJLS dalam menangani proyek skala besar, baik sinematik maupun produksi siaran untuk brand dan stasiun TV.
          </p>
        </div>

        {/* ========== SUB-SECTION 1: FEATURE FILMS ========== */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-4 py-1.5 bg-gjls-pink text-white border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm">
              LAYAR LEBAR (FEATURE FILMS)
            </span>
            <span className="font-body text-sm text-gray-600">x Amadeus Sinemagna</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {premiumWorks.featureFilms.map((film) => (
              <div 
                key={film.id}
                className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl overflow-hidden flex flex-col hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all"
              >
                {/* Poster Sinematik (Rasio 3:4 + object-contain) */}
                <div className="aspect-3/4 bg-gjls-cream border-b-4 border-gjls-black overflow-hidden relative">
                {film.poster ? (
                    <img 
                    src={film.poster} 
                    alt={film.title}
                    className="w-full h-full object-contain p-4"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center font-display font-bold text-gjls-black text-xl">
                    POSTER BIOSKOP
                    </div>
                )}
                {/* Badge Tahun di Dalam Poster */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gjls-black text-white border-2 border-gjls-black rounded-full font-display font-bold text-xs">
                    {film.year}
                    </span>
                </div>
                </div>

                {/* Info Film */}
                <div className="p-6 grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-2xl font-bold text-gjls-black leading-tight">
                      {film.title}
                    </h3>
                  </div>
                  
                  <span className="inline-block px-3 py-1 bg-gjls-yellow text-gjls-black border-2 border-gjls-black rounded-full font-display font-bold text-[10px] shadow-brutal-sm mb-3 w-fit">
                    PARTNER: {film.partner}
                  </span>

                  <p className="font-body text-sm text-gray-600 leading-relaxed">
                    {film.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== SUB-SECTION 2: BROADCASTING & BRANDED ========== */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-4 py-1.5 bg-gjls-teal text-white border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm">
              BROADCASTING & BRANDED SHOWS
            </span>
            <span className="font-body text-sm text-gray-600">Kolaborasi dengan TV Nasional & BUMN</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {premiumWorks.brandedShows.map((show) => (
              <div 
                key={show.id}
                className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl overflow-hidden flex flex-col md:flex-row hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all"
              >
                {/* Thumbnail Landscape (Rasio 16:9) */}
                <div className="md:w-2/5 aspect-video md:aspect-auto bg-gjls-cream border-b-4 md:border-b-0 md:border-r-4 border-gjls-black overflow-hidden">
                  {show.poster ? (
                    <img 
                      src={show.poster} 
                      alt={show.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-display font-bold text-gjls-black text-sm">
                      THUMBNAIL
                    </div>
                  )}
                </div>

                {/* Info Show */}
                <div className="md:w-3/5 p-6 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-gjls-cream text-gjls-black border-2 border-gjls-black rounded-full font-display font-bold text-[10px] shadow-brutal-sm mb-3 w-fit">
                    {show.type} • {show.year}
                  </span>
                  
                  <h3 className="font-display text-xl font-bold text-gjls-black mb-2 leading-tight">
                    {show.title}
                  </h3>
                  
                  <span className="inline-block px-2 py-0.5 bg-gjls-yellow text-gjls-black border border-gjls-black rounded font-display font-bold text-[10px] mb-3 w-fit">
                    x {show.partner}
                  </span>

                  <p className="font-body text-xs text-gray-600 leading-relaxed">
                    {show.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}