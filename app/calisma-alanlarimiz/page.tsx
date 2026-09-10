import Link from "next/link";
import JsonLd from "../components/JsonLd";
import PracticeAreaCard from "../components/PracticeAreaCard";
import { practiceAreas } from "../data/practiceAreas";
import { createBreadcrumbJsonLd, createItemListJsonLd } from "../lib/seo";

const orderedPracticeAreaLinks = [
  "/yabancilar-ve-vatandaslik-hukuku",
  "/gayrimenkul-hukuku",
  "/yabanci-mahkeme-kararlarinin-taninmasi-ve-tenfizi",
  "/ticaret-hukuku",
  "/icra-ve-iflas-hukuku",
  "/is-hukuku",
  "/aile-hukuku",
  "/ceza-hukuku",
  "/borclar-ve-sozlesmeler-hukuku",
  "/kira-hukuku",
  "/bilisim-hukuku",
  "/tazminat-hukuku",
  "/arabuluculuk",
] as const;

const orderedPracticeAreas = orderedPracticeAreaLinks.map((link) => {
  const area = practiceAreas.find((item) => item.link === link);
  if (!area) throw new Error(`Çalışma alanı bulunamadı: ${link}`);
  return area;
});

export default function CalismaAlanlarimizPage() {
  const itemListJsonLd = createItemListJsonLd({
    name: "Avukat Gamze Yıldırım Çalışma Alanları",
    path: "/calisma-alanlarimiz",
    items: orderedPracticeAreas.map((area) => ({
      name: area.title,
      path: area.link,
      description: area.shortDescription,
    })),
  });
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Ana Sayfa", path: "/" },
    { name: "Çalışma Alanlarımız", path: "/calisma-alanlarimiz" },
  ]);

  return (
    <>
      <JsonLd data={itemListJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <div className="page-fade-in">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {orderedPracticeAreas.map((area) => (
          <PracticeAreaCard key={area.title} area={area} headingLevel="h2" compact />
        ))}
      </div>

      <div className="mt-12 border-t border-[#dfe5e9] pt-8 text-center">
        <p className="mx-auto max-w-2xl text-sm leading-7 text-[#667487]">
          Hukuki konunuzun hangi çalışma alanına girdiğinden emin değilseniz, ön değerlendirme için iletişim bilgileri üzerinden doğrudan ulaşabilirsiniz.
        </p>
        <Link
          href="/iletisim"
          className="group mt-5 inline-flex items-center gap-3 border-b border-[#c9cfd5] pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#10263e] transition hover:border-[#a97c2e] hover:text-[#a97c2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66]"
        >
          İletişim Bilgileri
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
        </Link>
      </div>
      </div>
    </>
  );
}
