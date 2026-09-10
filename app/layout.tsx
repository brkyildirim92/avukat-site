import type { Metadata } from "next";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa";
import { Poppins } from "next/font/google";
import ScrollNavbar from "./components/ScrollNavbar";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import JsonLd from "./components/JsonLd";
import DocumentLanguage from "./components/DocumentLanguage";
import { absoluteUrl, expertiseTopics, siteConfig, socialProfiles } from "./lib/seo";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} | İstanbul`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.personName, url: "/hakkimizda" }],
  creator: siteConfig.personName,
  publisher: siteConfig.name,
  category: "Hukuk",
  alternates: { canonical: "/" },
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon-32x32.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },

  openGraph: {
    title: `${siteConfig.name} | İstanbul`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.socialImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} kurumsal önizleme görseli`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | İstanbul`,
    description: siteConfig.description,
    images: [siteConfig.socialImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      alternateName: siteConfig.personName,
      inLanguage: [siteConfig.language, "en"],
      publisher: { "@id": `${siteConfig.url}/#legal-service` },
      about: { "@id": `${siteConfig.url}/#person` },
      copyrightHolder: { "@id": `${siteConfig.url}/#legal-service` },
    },
    {
      "@type": "LegalService",
      "@id": `${siteConfig.url}/#legal-service`,
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logoImage),
        width: 512,
        height: 512,
      },
      image: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.socialImage),
        width: 1200,
        height: 630,
      },
      telephone: siteConfig.telephone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "İstanbul",
        addressCountry: "TR",
      },
      areaServed: [
        { "@type": "City", name: "İstanbul" },
        { "@type": "Country", name: "Türkiye" },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.telephone,
        email: siteConfig.email,
        contactType: "legal enquiries",
        areaServed: "TR",
      },
      founder: { "@id": `${siteConfig.url}/#person` },
      employee: { "@id": `${siteConfig.url}/#person` },
      knowsAbout: expertiseTopics,
      sameAs: socialProfiles,
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.personName,
      honorificPrefix: "Av.",
      jobTitle: "Avukat / Attorney at Law",
      url: absoluteUrl("/hakkimizda"),
      image: absoluteUrl(siteConfig.profileImage),
      email: siteConfig.email,
      telephone: siteConfig.telephone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "İstanbul",
        addressCountry: "TR",
      },
      sameAs: socialProfiles,
      knowsAbout: expertiseTopics,
      worksFor: { "@id": `${siteConfig.url}/#legal-service` },
      subjectOf: [
        { "@id": `${absoluteUrl("/hakkimizda")}#profile-page` },
        { "@id": `${absoluteUrl("/en/about")}#profile-page` },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script
          id="document-language"
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.lang=(location.pathname==='/en'||location.pathname.startsWith('/en/'))?'en':'tr';",
          }}
        />
      </head>
      <body className={`${poppins.className} flex min-h-screen flex-col bg-white text-gray-800`}>
        <DocumentLanguage />
        <JsonLd data={siteJsonLd} />

        <ScrollNavbar>
          <Navbar />
        </ScrollNavbar>

        {/* 📄 Sayfa İçeriği */}
        <main className="flex-1">{children}</main>

        <Footer />

        {/* WhatsApp Sabit Buton */}
        <a
          href="https://wa.me/905447370009"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center gap-1.5 rounded-full bg-[#d4ae5a] text-sm font-semibold text-[#10263e] shadow-lg transition hover:bg-[#e1c273] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4ae5a] focus-visible:ring-offset-2 sm:h-auto sm:w-auto sm:px-4 sm:py-2.5"
        >
          <FaWhatsapp size={20} />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </body>
    </html>
  );
}
