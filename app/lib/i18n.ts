export type SiteLocale = "tr" | "en";

const routePairs = [
  ["/", "/en"],
  ["/calisma-alanlarimiz", "/en/practice-areas"],
  ["/hakkimizda", "/en/about"],
  ["/makaleler", "/en/articles"],
  ["/iletisim", "/en/contact"],
  ["/yasal-uyari", "/en/legal-notice"],
  ["/yabancilar-ve-vatandaslik-hukuku", "/en/practice-areas/immigration-turkish-citizenship-law"],
  ["/ceza-hukuku", "/en/practice-areas/criminal-law"],
  ["/aile-hukuku", "/en/practice-areas/family-law"],
  ["/is-hukuku", "/en/practice-areas/employment-law"],
  ["/borclar-ve-sozlesmeler-hukuku", "/en/practice-areas/contracts-and-obligations"],
  ["/ticaret-hukuku", "/en/practice-areas/commercial-law"],
  ["/bilisim-hukuku", "/en/practice-areas/technology-and-data-law"],
  ["/icra-ve-iflas-hukuku", "/en/practice-areas/litigation-enforcement-debt-collection"],
  ["/gayrimenkul-hukuku", "/en/practice-areas/real-estate-law"],
  ["/yabanci-mahkeme-kararlarinin-taninmasi-ve-tenfizi", "/en/practice-areas/recognition-enforcement-of-foreign-judgments"],
  ["/kira-hukuku", "/en/practice-areas/tenancy-law"],
  ["/tazminat-hukuku", "/en/practice-areas/compensation-law"],
  ["/arabuluculuk", "/en/practice-areas/mediation"],
  [
    "/makaleler/ceza-hukukunda-tutuklama-sartlari",
    "/en/articles/conditions-for-pre-trial-detention-under-turkish-law",
  ],
  [
    "/makaleler/bosanma-davalarinda-nafaka-turleri",
    "/en/articles/types-of-maintenance-in-divorce-proceedings",
  ],
  [
    "/makaleler/isten-haksiz-fesih-durumunda-haklar",
    "/en/articles/employee-rights-following-unfair-dismissal",
  ],
  [
    "/makaleler/kira-sozlesmesi-tahliye",
    "/en/articles/eviction-under-a-tenancy-agreement",
  ],
  [
    "/makaleler/kat-mulkiyetinde-ortak-alan-uyusmazliklari",
    "/en/articles/common-area-disputes-in-condominium-property",
  ],
  [
    "/makaleler/tapu-iptali-ve-tescil-davasi",
    "/en/articles/actions-for-cancellation-and-registration-of-title",
  ],
  [
    "/makaleler/kentsel-donusum-surecinde-haklar",
    "/en/articles/rights-in-the-urban-transformation-process",
  ],
  [
    "/makaleler/ortakligin-giderilmesi-izale-i-suyu-davasi",
    "/en/articles/actions-for-dissolution-of-co-ownership",
  ],
  [
    "/makaleler/ecrimisil-haksiz-isgal-tazminati-davasi",
    "/en/articles/compensation-for-unlawful-occupation-ecrimisil",
  ],
] as const;

export const localizedRoutePairs = routePairs.map(([tr, en]) => ({ tr, en }));

const trToEn = new Map<string, string>(routePairs);
const enToTr = new Map<string, string>(routePairs.map(([tr, en]) => [en, tr]));

function normalisePath(pathname: string) {
  if (pathname === "/") return pathname;
  return pathname.replace(/\/$/, "");
}

export function getLocaleFromPathname(pathname: string): SiteLocale {
  const path = normalisePath(pathname);
  return path === "/en" || path.startsWith("/en/") ? "en" : "tr";
}

export function getLocalizedPath(pathname: string, locale: SiteLocale) {
  const path = normalisePath(pathname);

  if (locale === "en") {
    if (getLocaleFromPathname(path) === "en") return path;
    return trToEn.get(path) ?? "/en";
  }

  if (getLocaleFromPathname(path) === "tr") return path;
  return enToTr.get(path) ?? "/";
}

export function getLanguageAlternates(path: string) {
  const locale = getLocaleFromPathname(path);
  const tr = getLocalizedPath(path, "tr");
  const en = getLocalizedPath(path, "en");

  return {
    canonical: locale === "en" ? en : tr,
    languages: {
      "tr-TR": tr,
      en,
      "x-default": tr,
    },
  };
}
