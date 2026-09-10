import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import PracticeAreaCard from "../../components/PracticeAreaCard";
import { practiceAreasEn } from "../../data/practiceAreas.en";
import { playfair } from "../../fonts";
import { createBreadcrumbJsonLd, createItemListJsonLd, createPageMetadata } from "../../lib/seo";

const orderedPracticeAreaLinks = [
  "/en/practice-areas/immigration-turkish-citizenship-law",
  "/en/practice-areas/real-estate-law",
  "/en/practice-areas/recognition-enforcement-of-foreign-judgments",
  "/en/practice-areas/commercial-law",
  "/en/practice-areas/litigation-enforcement-debt-collection",
  "/en/practice-areas/employment-law",
  "/en/practice-areas/family-law",
  "/en/practice-areas/criminal-law",
  "/en/practice-areas/contracts-and-obligations",
  "/en/practice-areas/tenancy-law",
  "/en/practice-areas/technology-and-data-law",
  "/en/practice-areas/compensation-law",
  "/en/practice-areas/mediation",
] as const;

const orderedPracticeAreas = orderedPracticeAreaLinks.map((link) => {
  const area = practiceAreasEn.find((item) => item.link === link);
  if (!area) throw new Error(`Practice area not found: ${link}`);
  return area;
});

export const metadata = createPageMetadata({
  title: "Practice Areas",
  description: "An overview of the legal services provided by Attorney at Law Gamze Yıldırım in Istanbul under Turkish law.",
  path: "/en/practice-areas",
  locale: "en",
});

export default function PracticeAreasPage() {
  const itemListJsonLd = createItemListJsonLd({
    name: "Attorney at Law Gamze Yıldırım Practice Areas",
    path: "/en/practice-areas",
    items: orderedPracticeAreas.map((area) => ({
      name: area.title,
      path: area.link,
      description: area.shortDescription,
    })),
  });
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "Practice Areas", path: "/en/practice-areas" },
  ]);

  return (
    <>
      <JsonLd data={itemListJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <div className="min-h-screen bg-white">
      <section className="border-b border-[#dfe5e9] bg-[#f3f6f8] px-6 pb-14 pt-[150px] md:pb-18 md:pt-[175px]">
        <div className="mx-auto max-w-6xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#a97c2e]"><span className="h-px w-10 bg-[#c69b66]" aria-hidden="true" />Legal Services</p>
          <h1 className={`${playfair.className} mt-5 text-4xl font-medium italic leading-tight text-[#10263e] md:text-6xl`}>Practice Areas</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#526273] md:text-lg">Legal needs are assessed in light of the facts and the applicable Turkish legislation, with advice and representation tailored to the matter.</p>
        </div>
      </section>
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {orderedPracticeAreas.map((area) => <PracticeAreaCard key={area.title} area={area} headingLevel="h2" locale="en" compact />)}
          </div>
          <div className="mt-12 border-t border-[#dfe5e9] pt-8 text-center">
            <p className="mx-auto max-w-2xl text-sm leading-7 text-[#667487]">If you are unsure which area your matter falls within, you may contact us for a preliminary assessment.</p>
            <Link href="/en/contact" className="group mt-5 inline-flex items-center gap-3 border-b border-[#c9cfd5] pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#10263e] transition hover:border-[#a97c2e] hover:text-[#a97c2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66]">Contact Details <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
