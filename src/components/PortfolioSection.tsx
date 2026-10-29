"use client";

import Badge from "./Badge";
import Button from "./Button";
import Link from "next/link";
import { panggungEvents, communityEvents, collaborations, panggungTeamPhoto } from "@/lib/data";

export default function PortfolioSection() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl
       mx-auto">
        
        {/* Header Utama */}
        <div className="mb-12">
          <Badge text="PORTOFOLIO PANGGUNG" variant="teal" icon="star" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gjls-black mt-4">
            TUAN RUMAH YANG SERING DIUNDANG
          </h2>
          <p className="font-body text-base text-gray-600 mt-2 max-w-3xl">
            Setiap IP di bawah kami jalankan sendiri dari konsep sampai lampu padam. mau lihat kami jadi tamu? Ada di bawah
          </p>
        </div>

        {/* Hero Photo - Foto Tim di Panggung */}
        <div className="border-4 border-gjls-black shadow-brutal rounded-xl overflow-hidden mb-12 h-87.5 bg-gjls-cream">
        {panggungTeamPhoto ? (
            <img 
            src={panggungTeamPhoto} 
            alt="Tim GJLS di Panggung"
            className="w-full h-full object-cover"
            />
        ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center font-display font-bold text-gjls-black text-2xl">
            FOTO TIM GJLS DI PANGGUNG
            </div>
        )}
        </div>

        {/* ========== KATEGORI 1: PANGGUNG ========== */}
        <div className="mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gjls-pink text-white border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm">
              PANGGUNG
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {panggungEvents.map((event) => (
              <div 
                key={event.id}
                className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl overflow-hidden flex flex-col hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all"
              >
                {/* Poster */}
                <div className="aspect-3/4 bg-gjls-cream border-b-4 border-gjls-black overflow-hidden">
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
                </div>

                {/* Info */}
                <div className="p-6 grow flex flex-col">
                  <h3 className="font-display text-xl font-bold text-gjls-black mb-2">
                    {event.title}
                  </h3>
                  <p className="font-body text-sm text-gray-600 mb-4 grow">
                    {event.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {event.badges.map((badge, idx) => (
                      <span 
                        key={idx}
                        className={`px-3 py-1 border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm ${
                          idx === 0 ? 'bg-gjls-teal text-white' : 'bg-gjls-yellow text-gjls-black'
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== KATEGORI 2: RUTIN & KOMUNITAS ========== */}
        <div className="mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gjls-teal text-white border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm">
              RUTIN & KOMUNITAS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityEvents.map((event) => (
              <div 
                key={event.id}
                className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl overflow-hidden flex flex-col hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all"
              >
                {/* Poster */}
                <div className="aspect-3/4 bg-gjls-cream border-b-4 border-gjls-black overflow-hidden">
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
                </div>

                {/* Info */}
                <div className="p-6 grow flex flex-col">
                  <h3 className="font-display text-xl font-bold text-gjls-black mb-2">
                    {event.title}
                  </h3>
                  <p className="font-body text-sm text-gray-600 mb-4 grow">
                    {event.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {event.badges.map((badge, idx) => (
                      <span 
                        key={idx}
                        className={`px-3 py-1 border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm ${
                          idx === 0 ? 'bg-gjls-teal text-white' : 'bg-gjls-yellow text-gjls-black'
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== KATEGORI 3: TAMU SPESIAL ========== */}
        <div>
          <div className="mb-6">
            <Badge text="TAMU SPESIAL & KOLABORASI" variant="teal" icon="star" />
            <h3 className="font-display text-3xl md:text-4xl font-bold text-gjls-black mt-4">
              KAMI DI PANGGUNG ORANG LAIN
            </h3>
          </div>

          <div className="bg-white border-4 border-gjls-black shadow-brutal rounded-xl overflow-hidden">
            {collaborations.map((collab, index) => (
              <div 
                key={collab.id}
                className={`flex flex-col md:flex-row items-start md:items-center justify-between p-6 gap-4 ${
                  index !== collaborations.length - 1 ? 'border-b-2 border-gjls-black' : ''
                }`}
              >
                {/* Left: Info */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-10 h-10 bg-gjls-yellow border-2 border-gjls-black rounded-full flex items-center justify-center shrink-0">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-gjls-black">{collab.title}</h4>
                    <p className="font-body text-sm text-gray-600">{collab.description}</p>
                  </div>
                </div>

                {/* Right: Buttons */}
                <div className="flex gap-3">
                  <Link href={collab.subscribeLink}>
                    <Button variant="outline">LANGGANAN</Button>
                  </Link>
                  <Link href={collab.infoLink} target="_blank">
                    <Button variant="primary">CEK INFO ACARA ↗</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}