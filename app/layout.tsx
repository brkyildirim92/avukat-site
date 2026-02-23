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
  metadataBase: new URL("https://siteadi.com"),

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
    url: "https://siteadi.com",
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
      <body className="bg-white text-gray-800 relative pt-[10px]">

        {/* SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "İstanbul Freelance Avukat",
              url: "https://siteadi.com",
              areaServed: { "@type": "Place", name: "İstanbul" },
              availableChannel: {
                "@type": "ServiceChannel",
                serviceLocation: {
                  "@type": "VirtualLocation",
                  url: "https://siteadi.com",
                },
              },
              sameAs: ["https://wa.me/905000000000"],
            }),
          }}
        />

        {/* 🔒 SABİT NAVBAR (SCROLL İLE MATLAŞIR) */}
        <ScrollNavbar>
          <nav className="h-[110px] w-full px-4 md:px-16 lg:px-24 flex justify-between items-center">

{/* Sol: LOGO */}
<div className="flex items-center max-w-[240px]">
  <Link href="/">
    <Image
      src="/logoson1.png"
      alt="Avukat Gamze Yıldırım Logo"
      width={220}
      height={220}
      priority
      className="h-[86px] w-auto object-contain cursor-pointer"
    />
  </Link>
</div>


            {/* Sağ: Menü */}
            <div className="flex items-center gap-8">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/calisma-alanlarimiz", label: "Çalışma Alanlarımız" },
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/makaleler", label: "Makaleler" },
                { href: "/iletisim", label: "İletişim" },
              ].map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  className={poppins.className}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

          </nav>
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
