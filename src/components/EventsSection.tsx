"use client";

import Badge from "./Badge";
import Button from "./Button";
import Link from "next/link";
import { featuredEvents } from "@/lib/data";

export default function EventsSection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gjls-cream border-y-4 border-gjls-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <Badge text="AHLI EVENT DUNIA" variant="teal" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gjls-black mt-4 leading-tight">
              MARI BERKUMPUL BERSAMA GJLS
            </h2>
            <p className="font-body text-base text-gray-600 mt-2">
              Ikuti terus setiap keseruan GJLS di berbagai panggung event - event lokal hingga international
            </p>
          </div>
          <Link href="/events">
            <Button variant="primary">
              CEK SEMUA EVENT →
            </Button>
          </Link>
        </div>

        {/* Grid 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <div
              key={event.id}
              className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl overflow-hidden flex flex-col hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all"
            >
              {/* Poster Area dengan Badges */}
              <div className="relative aspect-3/4 bg-gjls-cream border-b-4 border-gjls-black overflow-hidden">
                {event.poster ? (
                  <img 
                    src={event.poster} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-display font-bold text-gjls-black">
                    POSTER
                  </div>
                )}
                
                {/* Badges di Atas Poster */}
                <div className="absolute top-3 left-3 right-3 flex justify-between gap-2">
                  {event.badges.map((badge, idx) => (
                    <span 
                      key={idx}
                      className={`
                        px-3 py-1 text-xs font-display font-bold border-2 border-gjls-black rounded-full shadow-brutal-sm
                        ${idx === 0 ? 'bg-gjls-teal text-white' : 'bg-gjls-yellow text-gjls-black'}
                      `}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info Area */}
              <div className="p-6 grow flex flex-col">
                <h3 className="font-display text-xl font-bold text-gjls-black mb-2">
                  {event.title}
                </h3>
                <p className="font-body text-sm text-gray-600 mb-6 grow">
                  {event.description}
                </p>

                {/* CTA Button */}
                <Link href={event.ctaLink} target={event.ctaLink.startsWith('http') ? '_blank' : undefined}>
                  <Button variant={event.ctaVariant}>
                    {event.ctaText} ↗
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}