"use client";

import Button from "./Button";
import Link from "next/link";

export default function PartnershipCTA() {
  const services = [
    "CUSTOM SHOW PRODUCTION",
    "BRAND ENDORSEMENT & SKITS",
    "KEYNOTE/MC HOSTING",
  ];

  return (
    <section className="py-16 px-6 md:px-12">
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

          {/* Konten (relative agar di atas pattern) */}
          <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Kiri: Info */}
            <div className="grow">
              <span className="inline-block px-4 py-1.5 bg-gjls-yellow border-2 border-gjls-black rounded-full font-display font-bold text-xs uppercase tracking-wider shadow-brutal-sm mb-6">
                COLLABORATE WITH US
              </span>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                TERTARIK BERKOLABORASI ATAU BIKIN EVENT BARENG GJLS?
              </h2>
              
              <p className="font-body text-sm text-gjls-cream mb-6 max-w-xl">
                Kami siap menghidupkan brand Anda lewat narasi komedi yang segar, relevan, viral di media sosial, dan berdampak nyata secara bisnis.
              </p>

              {/* Service Badges */}
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <span 
                    key={service}
                    className="px-3 py-1.5 bg-white border-2 border-gjls-black rounded-full font-display font-bold text-xs text-gjls-black shadow-brutal-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Kanan: CTA */}
            <div className="flex flex-col gap-4 items-start lg:items-end">
              <Link href="/partnership">
                <Button variant="primary">
                  Hubungi Tim Partnership (Media Kit) →
                </Button>
              </Link>
              <p className="font-body text-xs text-gjls-cream flex items-center gap-2">
                <span>⚡</span>
                Respon cepat via WhatsApp & Email dalam 1×24 jam
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}