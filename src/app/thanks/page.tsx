import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6 py-12 bg-gjls-cream">
      <div className="max-w-lg w-full border-4 border-gjls-black shadow-brutal bg-white rounded-xl p-8 md:p-12 text-center">
        
        {/* Ikon Sukses */}
        <div className="w-20 h-20 bg-gjls-teal border-4 border-gjls-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-brutal-sm">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        {/* Judul & Deskripsi */}
        <h1 className="font-display text-3xl md:text-4xl font-bold text-gjls-black mb-4">
          PESAN TERKIRIM!
        </h1>
        <p className="font-body text-gray-600 mb-8">
          Terima kasih! Data kamu sudah kami terima. Tim GJLS akan segera menghubungimu. Sambil menunggu, yuk intip koleksi merch terbaru kami!
        </p>

        {/* Tombol Aksi Ganda */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="w-full sm:w-auto px-6 py-3 bg-gjls-pink text-white font-display font-bold text-sm border-2 border-gjls-black shadow-brutal rounded-lg hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all">
              KEMBALI KE BERANDA
            </button>
          </Link>
          <Link href="/merch">
            <button className="w-full sm:w-auto px-6 py-3 bg-gjls-yellow text-gjls-black font-display font-bold text-sm border-2 border-gjls-black shadow-brutal rounded-lg hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all">
              CEK MERCH →
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}