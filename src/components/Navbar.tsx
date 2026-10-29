"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "ABOUT US", href: "/about" },
  { label: "EVENTS", href: "/events" },
  { label: "CONTENT", href: "/content" },
  { label: "MERCH", href: "/merch" },
  { label: "DIGITAL", href: "/digital" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gjls-cream border-b-4 border-gjls-black">
      <div className="max-w-350 mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img 
            src="/images/gjls-logo.png" 
            alt="GJLS Entertainment"
            className="h-10 w-auto"
          />
          <div className="hidden md:flex flex-col">
            <span className="font-display font-bold text-gjls-black text-sm md:text-base leading-tight">
              GJLS ENTERTAINMENT
            </span>
            <span className="font-display font-bold text-gjls-pink text-[10px] md:text-xs leading-tight">
              PT. HIBURAN JELAS NUSANTARA
            </span>
          </div>
        </Link>

        {/* Pill Navigation - Desktop Only */}
        <div className="hidden md:flex items-center border-2 border-gjls-black rounded-full px-2 py-1.5 bg-white shadow-brutal-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  px-4 py-2 font-display font-bold text-xs rounded-full transition-all
                  ${isActive 
                    ? 'bg-gjls-teal text-white shadow-brutal-sm' 
                    : 'text-gjls-black hover:bg-gjls-cream'}
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Tombol Partnership - Desktop Only */}
        <Link href="/partnership" className="hidden md:block">
          <button className="px-5 py-3 bg-gjls-pink text-white font-display font-bold text-xs border-2 border-gjls-black shadow-brutal rounded-lg hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all">
            PARTNERSHIP →
          </button>
        </Link>

        {/* Hamburger Menu - Mobile Only */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 border-2 border-gjls-black rounded-lg flex flex-col items-center justify-center gap-1 bg-white shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
        >
          <span className={`w-5 h-0.5 bg-gjls-black transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-gjls-black transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-gjls-black transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-4 border-gjls-black bg-gjls-cream px-6 py-4 space-y-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  block px-4 py-3 font-display font-bold text-sm rounded-lg border-2 border-gjls-black transition-all
                  ${isActive 
                    ? 'bg-gjls-teal text-white shadow-brutal-sm' 
                    : 'bg-white text-gjls-black hover:bg-gjls-yellow'}
                `}
              >
                {item.label}
              </Link>
            );
          })}
          
          {/* Tombol Partnership di Mobile */}
          <Link href="/partnership" onClick={() => setMobileMenuOpen(false)}>
            <button className="w-full px-4 py-3 bg-gjls-pink text-white font-display font-bold text-sm border-2 border-gjls-black shadow-brutal rounded-lg mt-4">
              PARTNERSHIP →
            </button>
          </Link>
        </div>
      )}

    </nav>
  );
}