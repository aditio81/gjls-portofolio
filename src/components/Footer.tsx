"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gjls-cream border-t-4 border-gjls-black py-12 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Kolom 1: Brand Info & Socials */}
        <div className="col-span-1 md:col-span-1">
          {/* Logo GJLS */}
          <img 
            src="/images/gjls-logo.png" 
            alt="GJLS Entertainment Logo"
            className="h-12 w-auto mb-4"
          />
          
          <h3 className="font-display font-bold text-xl text-gjls-black mb-1">
            GJLS ENTERTAINMENT
          </h3>
          <p className="font-body text-sm text-gjls-black mb-1">
            PT. Hiburan Jelas Nusantara
          </p>
          <p className="font-body text-sm text-gray-600 mb-6">
            Jakarta, Indonesia
          </p>

          {/* Social Media Links */}
          <div className="space-y-2">
            <p className="font-body text-xs font-bold text-gjls-black uppercase tracking-wider">
              TEMUKAN KAMI DI:
            </p>
            <a 
              href="https://www.instagram.com/gjlsentertainment" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block font-body text-sm text-gjls-black border-b-2 border-transparent hover:border-gjls-pink hover:text-gjls-pink transition-all w-fit"
            >
              ↗ Instagram
            </a>
            <a 
              href="https://www.youtube.com/@gjlsentertainment6055" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block font-body text-sm text-gjls-black border-b-2 border-transparent hover:border-gjls-pink hover:text-gjls-pink transition-all w-fit"
            >
              ↗ YouTube
            </a>
            <a 
              href="https://www.tiktok.com/@gjlsentertainment" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block font-body text-sm text-gjls-black border-b-2 border-transparent hover:border-gjls-pink hover:text-gjls-pink transition-all w-fit"
            >
              ↗ TikTok
            </a>
          </div>
        </div>

        {/* Kolom 2: Menu Utama */}
        <div className="col-span-1">
          <h4 className="font-display font-bold text-gjls-black mb-4">MENU</h4>
          <ul className="space-y-2 font-body text-sm text-gjls-black">
            <li><Link href="/about" className="hover:text-gjls-pink transition-colors">About Us</Link></li>
            <li><Link href="/events" className="hover:text-gjls-pink transition-colors">Events</Link></li>
            <li><Link href="/content" className="hover:text-gjls-pink transition-colors">Content</Link></li>
            <li><Link href="/merch" className="hover:text-gjls-pink transition-colors">Merch</Link></li>
          </ul>
        </div>

        {/* Kolom 3: Eksklusif & Legal */}
        <div className="col-span-1">
          <h4 className="font-display font-bold text-gjls-black mb-4">EKSKLUSIF & LEGAL</h4>
          <ul className="space-y-2 font-body text-sm text-gjls-black">
            <li><Link href="/digital" className="hover:text-gjls-pink transition-colors">Digital Pass</Link></li>
            <li><Link href="/partnership" className="hover:text-gjls-pink transition-colors">Partnership</Link></li>
            <li><Link href="/privacy" className="hover:text-gjls-pink transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-gjls-pink transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Kolom 4: Newsletter */}
        <div className="col-span-1">
          <h4 className="font-display font-bold text-gjls-black mb-4">INFO EVENT & MERCH</h4>
          <p className="font-body text-sm text-gray-600 mb-4">Langganan kabar jadwal manggung dan rilis merch sebelum ludes!</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email kamu..." 
              className="w-full px-3 py-2 border-2 border-gjls-black bg-white font-body text-sm focus:outline-none focus:border-gjls-pink transition-colors"
            />
            <button className="px-4 py-2 bg-gjls-pink text-white font-display font-bold text-sm border-2 border-gjls-black shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all shrink-0">
              KIRIM
            </button>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t-2 border-gjls-black text-center font-body text-xs text-gray-600">
        &copy; 2026 PT Hiburan Jelas Nusantara (GJLS Entertainment). All jokes reserved.
      </div>
    </footer>
  );
}