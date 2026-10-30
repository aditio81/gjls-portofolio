import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-gjls-cream bg-dot-pattern flex items-center justify-center px-6">
      <div className="text-center border-4 border-gjls-black shadow-brutal bg-white rounded-xl p-8 md:p-12 max-w-lg">
        <div className="w-20 h-20 bg-gjls-teal border-2 border-gjls-black rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl text-white">✓</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-gjls-black mb-4">
          PESAN TERKIRIM!
        </h1>
        <p className="font-body text-gray-600 mb-8">
          Terima kasih sudah tertarik berkolaborasi dengan GJLS. Tim Partnership kami akan merespon dalam 1-2 hari kerja.
        </p>
        <Link href="/">
          <button className="px-6 py-3 bg-gjls-pink text-white font-display font-bold text-sm border-2 border-gjls-black shadow-brutal rounded-lg hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all">
            KEMBALI KE BERANDA →
          </button>
        </Link>
      </div>
    </main>
  );
}