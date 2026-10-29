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
  metadataBase: new URL('https://gjls-portfolio.vercel.app'),
  title: "GJLS Entertainment — Official Hub for Orang Baek",
  description: "Website resmi GJLS Entertainment. Event, Merch, Content, Digital Pass, dan Partnership. PT. Hiburan Jelas Nusantara.",
  keywords: ["GJLS", "GJLS Entertainment", "Komedi Indonesia", "Rigen", "Rispo", "Hifdzi", "Podcast", "Merch", "Event", "Partnership"],
  authors: [{ name: "Aditio" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "GJLS Entertainment — Official Hub for Orang Baek",
    description: "Website resmi GJLS Entertainment. Event, Merch, Content, Digital Pass, dan Partnership.",
    url: "https://gjls-portfolio.vercel.app/",
    siteName: "GJLS Entertainment",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GJLS Entertainment Website",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} bg-gjls-white font-body flex flex-col min-h-screen`}>
        <Navbar />
        
        <main className="grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}