import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GJLS Entertainment",
  description: "PT. Hiburan Jelas Nusantara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${spaceGrotesk.variable} ${inter.variable} bg-gjls-white font-body flex flex-col min-h-screen`}>
        {/* Tambahkan flex flex-col min-h-screen di body agar footer selalu di bawah */}
        
        <Navbar />
        
        {/* grow memastikan konten mengisi ruang kosong, mendorong footer ke bawah */}
        <main className="grow">
          {children}
        </main>
        
        <Footer />
        
      </body>
    </html>
  );
}