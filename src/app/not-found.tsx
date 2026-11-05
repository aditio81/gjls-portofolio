import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gjls-cream flex items-center justify-center px-6 py-12">
      <div className="text-center border-4 border-gjls-black shadow-brutal bg-white rounded-xl p-8 md:p-12 max-w-lg w-full">
        
        {/* Angka 404 Besar */}
        <h1 className="font-display text-8xl md:text-9xl font-bold text-gjls-pink mb-2 leading-none">
          404
        </h1>
        
        {/* Judul dengan Humor Khas GJLS */}
        <h2 className="font-display text-xl md:text-2xl font-bold text-gjls-black mb-4 leading-tight">
          HALAMAN INI LEBIH GA JELAS DARI NAMANYA
        </h2>
        
        {/* Deskripsi & Solusi */}
        <p className="font-body text-sm md:text-base text-gray-600 mb-8">
          Maaf, halaman yang kamu cari tidak ada, tersesat, atau mungkin sedang manggung di kota lain. Tapi tenang, kami punya banyak konten lain yang lebih jelas.
        </p>
        
        {/* Tombol Kembali */}
        <Link href="/">
          <button className="px-6 py-3 bg-gjls-pink text-white font-display font-bold text-sm border-2 border-gjls-black shadow-brutal rounded-lg hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all">
            KEMBALI KE BERANDA →
          </button>
        </Link>
      </div>
    </main>
  );
}