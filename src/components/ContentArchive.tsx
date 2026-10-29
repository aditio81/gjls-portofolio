"use client";

import Badge from "./Badge";
import { shortFilms, musicSingles, legacyIPs } from "@/lib/data";

export default function ContentArchive() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-center mb-12">
          <Badge text="ARSIP YANG LAIN" variant="yellow" icon="star" />
        </div>

        {/* ========== FILM PENDEK ========== */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-4 py-1.5 bg-gjls-pink text-white border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm">
              FILM PENDEK
            </span>
            <span className="font-body text-sm text-gray-600">Indie Cinema & Short Drama Archive</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shortFilms.map((film) => (
              <div 
                key={film.id}
                className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl overflow-hidden flex flex-col hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all"
              >
                {/* Meta Info */}
                <div className="flex justify-between items-center px-4 pt-4 pb-2">
                  <span className="font-body text-xs font-bold text-gjls-black bg-gjls-cream border-2 border-gjls-black rounded-full px-3 py-0.5">
                    {film.year}
                  </span>
                  <span className="font-body text-xs font-bold text-gjls-pink flex items-center gap-1">
                    ⏱ {film.duration}
                  </span>
                </div>

                {/* Thumbnail */}
                <div className="aspect-video bg-gjls-cream border-y-2 border-gjls-black overflow-hidden">
                  {film.thumbnail ? (
                    <img 
                      src={film.thumbnail} 
                      alt={film.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-display font-bold text-gjls-black">
                      POSTER
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-4 grow flex flex-col">
                  <h3 className="font-display text-lg font-bold text-gjls-black mb-2">
                    {film.title}
                  </h3>
                  <p className="font-body text-xs text-gray-600 leading-relaxed">
                    {film.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== SINGLE MUSIK ========== */}
        <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-4 py-1.5 bg-gjls-pink text-white border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm">
            SINGLE MUSIK
            </span>
            <span className="font-body text-sm text-gray-600">Single GJLS Bernyanyi</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {musicSingles.map((single) => (
            <div 
                key={single.id}
                className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl overflow-hidden flex flex-col hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all"
            >
                {/* Meta Info */}
                <div className="flex justify-between items-center px-4 pt-4 pb-2">
                <span className="font-body text-xs font-bold text-gjls-black bg-gjls-cream border-2 border-gjls-black rounded-full px-3 py-0.5">
                    {single.year}
                </span>
                <span className="font-body text-xs font-bold text-gjls-pink flex items-center gap-1">
                    ⏱ {single.duration}
                </span>
                </div>

                {/* YouTube Embed Player */}
                <div className="aspect-video bg-gjls-cream border-y-2 border-gjls-black overflow-hidden">
                {single.videoId ? (
                    <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${single.videoId}?rel=0&modestbranding=1`}
                    title={single.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center font-display font-bold text-gjls-black">
                    COVER
                    </div>
                )}
                </div>

                {/* Info */}
                <div className="p-4 grow flex flex-col">
                <h3 className="font-display text-lg font-bold text-gjls-black mb-2">
                    {single.title}
                </h3>
                <p className="font-body text-xs text-gray-600 leading-relaxed">
                    {single.description}
                </p>
                </div>
            </div>
            ))}
        </div>
        </div>

        {/* ========== IP BERSEJARAH ========== */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-4 py-1.5 bg-gjls-pink text-white border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm">
              IP BERSEJARAH
            </span>
          </div>

          <div className="border-t-2 border-gjls-black pt-6">
            <div className="flex flex-wrap gap-4">
              {legacyIPs.map((ip, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="font-display text-sm font-bold text-gjls-black uppercase tracking-wider">
                    {ip}
                  </span>
                  {idx < legacyIPs.length - 1 && (
                    <span className="text-gjls-pink text-lg">★</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}