"use client";

import Badge from "./Badge";
import { merchHero, merchCollections } from "@/lib/data";
import Link from "next/link";

export default function MerchCatalog() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* ========== HERO ========== */}
        <div className="mb-12">
          <Badge text={merchHero.badge} variant="teal" icon="star" />
          
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gjls-black mt-6 leading-tight">
            {merchHero.title}
            <br />
            <span className="text-gjls-black">{merchHero.titleHighlight}</span>
          </h1>
          
          <p className="font-body text-base text-gray-600 mt-4 max-w-3xl">
            {merchHero.description}
          </p>
        </div>

        {/* ========== KOLEKSI ========== */}
        {merchCollections.map((collection) => (
          <div key={collection.id} className="mb-16">
            
            {/* Badge Koleksi */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gjls-pink text-white border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm">
                {collection.badge}
              </span>
            </div>

            {/* Grid Produk */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${
              collection.products.length === 2 ? 'md:grid-cols-2' : ''
            }`}>
              {collection.products.map((product) => (
                <div 
                  key={product.id}
                  className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl overflow-hidden flex flex-col hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all"
                >
                  {/* Gambar Produk */}
                  <div className="relative aspect-square bg-gjls-cream border-b-4 border-gjls-black overflow-hidden">
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-display font-bold text-gjls-black">
                        PRODUK
                      </div>
                    )}

                    {/* Badge SOLD OUT */}
                    {product.status === "soldout" && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="px-4 py-2 bg-gjls-black text-white border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm">
                          SOLD OUT
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info Produk */}
                  <div className="p-5 grow flex flex-col">
                    <h3 className="font-display text-lg font-bold text-gjls-black mb-1">
                      {product.name}
                    </h3>
                    <p className="font-body text-xs text-gray-600 mb-4">
                      {product.subtitle}
                    </p>

                    {/* Harga & CTA */}
                    <div className="mt-auto flex items-center justify-between gap-3">
                      <div>
                        <p className="font-body text-[10px] font-bold text-gjls-black uppercase tracking-wider">
                          HARGA
                        </p>
                        <p className="font-display text-base font-bold text-gjls-black">
                          {product.price}
                        </p>
                      </div>

                      {product.status === "available" ? (
                        <Link href={product.link} target="_blank">
                          <button className="px-4 py-2 bg-gjls-pink text-white font-display font-bold text-xs border-2 border-gjls-black shadow-brutal rounded-lg hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all">
                            CHECKOUT ↗
                          </button>
                        </Link>
                      ) : (
                        <button 
                          disabled
                          className="px-4 py-2 bg-gjls-black text-white font-display font-bold text-xs border-2 border-gjls-black shadow-brutal rounded-lg opacity-60 cursor-not-allowed"
                        >
                          SOLD OUT
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}