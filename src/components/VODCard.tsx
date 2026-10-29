"use client";

import React from 'react';
import Button from './Button';

interface VODCardProps {
  title: string;
  duration: string;
  price: string;
  badge?: string; // Opsional (misal: "POPULAR" atau "SOLD OUT")
}

export default function VODCard({ title, duration, price, badge }: VODCardProps) {
  return (
    <div className="bg-white border-2 border-gjls-black shadow-brutal p-4 flex flex-col gap-3 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all">
      
      {/* Placeholder Thumbnail */}
      <div className="w-full h-40 bg-gjls-teal border-2 border-gjls-black flex items-center justify-center relative">
        <span className="text-white font-display font-bold">THUMBNAIL</span>
        {badge && (
          <span className="absolute top-2 right-2 bg-gjls-yellow text-gjls-black text-xs font-bold px-2 py-1 border border-gjls-black">
            {badge}
          </span>
        )}
      </div>

      {/* Konten Teks */}
      <div className="flex flex-col gap-1 grow">
        <h3 className="font-display font-bold text-lg text-gjls-black leading-tight">
          {title}
        </h3>
        <div className="flex justify-between items-center text-sm font-body text-gray-600">
          <span>⏱ {duration}</span>
          <span className="font-bold text-gjls-black">{price}</span>
        </div>
      </div>

      {/* Action Button */}
      <Button variant="primary" onClick={() => alert(`Membeli: ${title}`)}>
        BELI TIKET
      </Button>
    </div>
  );
}