"use client";

import Link from "next/link";

interface VODCardProps {
  title: string;
  poster: string;
  price: string;
  duration: string;
  link: string;
}

export default function DigitalVODCard({ title, poster, price, duration, link }: VODCardProps) {
  return (
    <div className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl overflow-hidden flex flex-col hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all">
      {/* Poster */}
      <div className="aspect-3/4 bg-gjls-cream border-b-4 border-gjls-black overflow-hidden">
        {poster ? (
          <img 
            src={poster} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-display font-bold text-gjls-black">
            POSTER
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5 grow flex flex-col">
        <h3 className="font-display text-lg font-bold text-gjls-black mb-3">
          {title}
        </h3>

        {/* Harga & Durasi */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="font-body text-[10px] font-bold text-gjls-black uppercase tracking-wider">
              Harga
            </p>
            <p className="font-display text-base font-bold text-gjls-black">
              {price}
            </p>
          </div>
          <span className="px-3 py-1.5 bg-gjls-yellow text-gjls-black border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm flex items-center gap-1">
            ⏱ {duration}
          </span>
        </div>

        {/* Tombol Beli */}
        <Link href={link} target="_blank">
          <button className="w-full px-4 py-3 bg-gjls-pink text-white font-display font-bold text-sm border-2 border-gjls-black shadow-brutal rounded-lg hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all">
            BELI
          </button>
        </Link>
      </div>
    </div>
  );
}