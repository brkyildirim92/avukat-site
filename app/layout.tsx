import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { Poppins } from "next/font/google";
import NavLink from "./components/NavLink";
import ScrollNavbar from "./components/ScrollNavbar";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";


export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gamzeyildirim.av.tr"),

  title: {
    default: "İstanbul Avukat | Online Hukuki Danışmanlık",
    template: "%s | Avukat Gamze Yıldırım",
  },

  description:
    "İstanbul merkezli freelance avukat. Online ve yüz yüze hukuki danışmanlık.",

  openGraph: {
    title: "Avukat Gamze Yıldırım",
    description:
      "Ceza hukuku, boşanma davaları ve iş hukuku alanlarında hukuki danışmanlık.",
    url: "https://gamzeyildirim.av.tr",
    siteName: "Avukat Gamze Yıldırım",
    locale: "tr_TR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      {/* 🔑 SADECE BURASI DÜZENLENDİ */}
      <body className="bg-white text-gray-800">

        {/* SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "İstanbul Freelance Avukat",
              url: "https://gamzeyildirim.av.tr",
              areaServed: { "@type": "Place", name: "İstanbul" },
              availableChannel: {
                "@type": "ServiceChannel",
                serviceLocation: {
                  "@type": "VirtualLocation",
                  url: "https://gamzeyildirim.av.tr",
                },
              },
              sameAs: ["https://wa.me/905000000000"],
            }),
          }}
        />

<ScrollNavbar>
  <Navbar />
</ScrollNavbar>

        {/* 📄 SAYFA İÇERİĞİ */}
        <main>
          {children}
        </main>

        <Footer />

        {/* WhatsApp Sabit Buton */}
        <a
          href="https://wa.me/905000000000"
          className="fixed bottom-0 right-0 z-50 flex items-center gap-2 transition hover:bg-green-600"
          style={{
            backgroundColor: "#262b3e",
            color: "white",
            padding: "12px 68px",
            fontWeight: 500,
          }}
        >
          <FaWhatsapp size={22} />
          <span>WhatsApp</span>
        </a>

      </body>
    </html>
  );
}
