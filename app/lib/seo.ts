import type { Metadata } from "next";
import { getLanguageAlternates } from "./i18n";

export const siteConfig = {
  name: "Avukat Gamze Yıldırım",
  personName: "Gamze Yıldırım",
  url: "https://gamzeyildirim.av.tr",
  locale: "tr_TR",
  language: "tr-TR",
  description:
    "Avukat Gamze Yıldırım'ın iletişim bilgileri, mesleki faaliyet alanları ve hukuki bilgilendirme yazıları.",
  email: "avukat.gamzeyildirim@gmail.com",
  telephone: "+905447370009",
  logoImage: "/favicon.png",
  socialImage: "/opengraph-image",
  profileImage: "/hakkimizda2.jpg",
  linkedin: "https://www.linkedin.com/in/gamzeyildirimglc/",
  instagram: "https://www.instagram.com/avukat.gamzeyildirim/",
} as const;

export const socialProfiles = [siteConfig.linkedin, siteConfig.instagram] as const;

export const expertiseTopics = [
  "Yabancılar ve Vatandaşlık Hukuku",
  "Ceza Hukuku",
  "Aile ve Uluslararası Aile Hukuku",
  "İş ve İstihdam Hukuku",
  "Borçlar ve Sözleşmeler Hukuku",
  "Şirketler ve Ticaret Hukuku",
  "Bilişim ve Kişisel Veriler Hukuku",
  "Dava, İcra ve Alacak Takibi",
  "Gayrimenkul ve Taşınmaz Hukuku",
  "Yabancı Mahkeme Kararlarının Tanınması ve Tenfizi",
  "Kira Hukuku",
  "Tazminat Hukuku",
  "Arabuluculuk",
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  locale?: "tr" | "en";
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  type = "website",
  publishedTime,
  modifiedTime,
  locale = "tr",
}: PageMetadataOptions): Metadata {
  const canonicalUrl = absoluteUrl(path);
  const resolvedTitle = absoluteTitle
    ? { absolute: title }
    : title;

  const openGraph: Metadata["openGraph"] = type === "article"
    ? {
        type: "article",
        title,
        description,
        url: canonicalUrl,
        siteName: siteConfig.name,
        locale: locale === "en" ? "en_US" : siteConfig.locale,
        publishedTime,
        modifiedTime,
        authors: [siteConfig.personName],
        images: [
          {
            url: siteConfig.socialImage,
            width: 1200,
            height: 630,
            alt: `${siteConfig.name} kurumsal önizleme görseli`,
          },
        ],
      }
    : {
        type: "website",
        title,
        description,
        url: canonicalUrl,
        siteName: siteConfig.name,
        locale: locale === "en" ? "en_US" : siteConfig.locale,
        images: [
          {
            url: siteConfig.socialImage,
            width: 1200,
            height: 630,
            alt: `${siteConfig.name} kurumsal önizleme görseli`,
          },
        ],
      };

  return {
    title: resolvedTitle,
    description,
    alternates: getLanguageAlternates(path),
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.socialImage],
    },
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function createBreadcrumbJsonLd(
  items: ReadonlyArray<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createProfilePageJsonLd(locale: "tr" | "en" = "tr") {
  const isEnglish = locale === "en";
  const path = isEnglish ? "/en/about" : "/hakkimizda";

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${absoluteUrl(path)}#profile-page`,
    url: absoluteUrl(path),
    name: isEnglish
      ? "About Attorney at Law Gamze Yıldırım"
      : "Avukat Gamze Yıldırım Hakkında",
    description: isEnglish
      ? "Professional profile, legal-service approach and working principles of Attorney at Law Gamze Yıldırım in Istanbul."
      : "Avukat Gamze Yıldırım'ın mesleki profili, hukuki hizmet yaklaşımı ve çalışma ilkeleri.",
    inLanguage: isEnglish ? "en" : siteConfig.language,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    mainEntity: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.personName,
      honorificPrefix: isEnglish ? "Attorney at Law" : "Av.",
      jobTitle: isEnglish ? "Attorney at Law" : "Avukat",
      url: absoluteUrl(path),
      image: absoluteUrl(siteConfig.profileImage),
      sameAs: socialProfiles,
      worksFor: { "@id": `${siteConfig.url}/#legal-service` },
      knowsAbout: expertiseTopics,
    },
  };
}

export function createItemListJsonLd({
  name,
  path,
  items,
}: {
  name: string;
  path: string;
  items: ReadonlyArray<{ name: string; path: string; description?: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${absoluteUrl(path)}#item-list`,
    name,
    url: absoluteUrl(path),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "WebPage",
        "@id": absoluteUrl(item.path),
        url: absoluteUrl(item.path),
        name: item.name,
        ...(item.description ? { description: item.description } : {}),
      },
    })),
  };
}

export function createPracticeAreaServiceJsonLd({
  name,
  description,
  path,
  locale = "tr",
}: {
  name: string;
  description: string;
  path: string;
  locale?: "tr" | "en";
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    serviceType: name,
    description,
    url: absoluteUrl(path),
    inLanguage: locale === "en" ? "en" : siteConfig.language,
    provider: { "@id": `${siteConfig.url}/#legal-service` },
    areaServed: [
      { "@type": "City", name: locale === "en" ? "Istanbul" : "İstanbul" },
      { "@type": "Country", name: "Türkiye" },
    ],
  };
}
