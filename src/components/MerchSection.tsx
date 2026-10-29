"use client";

import Button from "./Button";
import Link from "next/link";
import { featuredMerch } from "@/lib/data";

export default function MerchSection() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <span className="inline-block px-4 py-2 bg-gjls-yellow border-2 border-gjls-black rounded-full font-display font-bold text-xs uppercase tracking-wider shadow-brutal-sm mb-4">
              GJLS MERCH
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gjls-black leading-tight">
              MERCH EKSKLUSIF YANG GA ADA
              <br />
              DITEMPAT LAIN
            </h2>
            <p className="font-body text-base text-gray-600 mt-2 max-w-2xl">
              Ayo support mas Hizmi biar ga nge-peli pakein sabun colek lagi dengan cara beli Merch eksklusif dari GJLS.
            </p>
          </div>
          <Link href="/merch">
            <Button variant="primary">
              CEK SELURUH KATALOG →
            </Button>
          </Link>
        </div>

        {/* Grid 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredMerch.map((item) => (
            <div
              key={item.id}
              className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl overflow-hidden flex flex-col hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all"
            >
            {/* Area Gambar Produk */}
            <div className="relative bg-gjls-cream border-b-4 border-gjls-black p-4">
            {/* Badge SOLD OUT */}
            {item.status === "soldout" && (
                <div className="absolute top-6 right-6 z-10">
                <span className="px-4 py-2 bg-gjls-black text-white font-display font-bold text-xs uppercase border-2 border-gjls-black rounded-full shadow-brutal-sm">
                    SOLD OUT
                </span>
                </div>
            )}

            {/* Main Image Full Width */}
            <div className="aspect-4/5 bg-white border-2 border-gjls-black rounded-lg overflow-hidden">
                {item.mainImage ? (
                <img 
                    src={item.mainImage} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                />
                ) : (
                <div className="w-full h-full flex items-center justify-center font-display font-bold text-gjls-black">
                    IMG
                </div>
                )}
            </div>
            </div>

              {/* Info Produk */}
              <div className="p-6 grow flex flex-col">
                <div className="mb-4">
                  <h3 className="font-display text-xl font-bold text-gjls-black mb-1">
                    {item.name}
                  </h3>
                  <p className="font-body text-sm text-gray-600">
                    {item.subtitle}
                  </p>
                </div>

                {/* Harga & CTA */}
                <div className="mt-auto">
                  <p className="font-body text-xs font-bold text-gjls-black uppercase mb-2">
                    HARGA
                  </p>
                  <p className="font-display text-lg font-bold text-gjls-black mb-4">
                    {item.price}
                  </p>

                  {item.status === "available" ? (
                    <Link href={item.ctaLink}>
                      <Button variant="primary">
                        CHECKOUT →
                      </Button>
                    </Link>
                  ) : (
                    <div className="px-6 py-3 bg-gjls-black text-white font-display font-bold text-center border-2 border-gjls-black rounded-full shadow-brutal cursor-not-allowed opacity-60">
                      SOLD OUT
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}