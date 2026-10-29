"use client";

export default function QuoteSection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gjls-cream border-y-4 border-gjls-black">
      <div className="max-w-7xl mx-auto">
        <div className="border-4 border-gjls-black shadow-brutal bg-white rounded-xl p-8 md:p-12 relative">
          
          {/* Badge Kiri Atas */}
          <span className="inline-block px-4 py-1.5 bg-gjls-yellow border-2 border-gjls-black rounded-full font-display font-bold text-xs uppercase tracking-wider shadow-brutal-sm mb-6">
            ★ QUOTE SINGKAT UNTUK HARI-HARIMU ★
          </span>

          {/* Ikon Quote Kanan Atas */}
          <div className="absolute top-6 right-6 w-10 h-10 bg-gjls-pink border-2 border-gjls-black rounded-lg flex items-center justify-center text-white font-display font-bold shadow-brutal-sm">
            "
          </div>

          {/* Teks Quote */}
          <blockquote className="font-display text-2xl md:text-4xl font-bold text-gjls-black leading-tight mb-6">
            "BAKSO YANG KUAT TIDAK DILAHIRKAN DARI OMBAK YANG TENANG."
          </blockquote>

          {/* Garis Putus-putus */}
          <div className="border-t-2 border-dashed border-gjls-black my-6" />

          {/* Author & Tahun */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="font-body text-sm font-bold text-gjls-black uppercase tracking-wider">
              — AHLI TABLE MANNER DUNIA
            </p>
            <span className="px-4 py-1.5 bg-gjls-teal text-white border-2 border-gjls-black rounded-full font-display font-bold text-xs shadow-brutal-sm">
              TAHUN 2024
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}