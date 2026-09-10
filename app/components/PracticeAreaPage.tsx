import Link from "next/link";
import { playfair } from "../fonts";
import JsonLd from "./JsonLd";
import { createBreadcrumbJsonLd, createPracticeAreaServiceJsonLd } from "../lib/seo";

type PracticeAreaSection = {
  title: string;
  text?: string;
};

type PracticeAreaPageProps = {
  title: string;
  intro: string;
  sections: readonly PracticeAreaSection[];
  schemaName: string;
  path: string;
  locale?: "tr" | "en";
};

export default function PracticeAreaPage({
  title,
  intro,
  sections,
  schemaName,
  path,
  locale = "tr",
}: PracticeAreaPageProps) {
  const isEnglish = locale === "en";
  const homePath = isEnglish ? "/en" : "/";
  const practiceAreasPath = isEnglish ? "/en/practice-areas" : "/calisma-alanlarimiz";
  const contactPath = isEnglish ? "/en/contact" : "/iletisim";
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: isEnglish ? "Home" : "Ana Sayfa", path: homePath },
    { name: isEnglish ? "Practice Areas" : "Çalışma Alanlarımız", path: practiceAreasPath },
    { name: schemaName, path },
  ]);
  const serviceJsonLd = createPracticeAreaServiceJsonLd({
    name: schemaName,
    description: intro,
    path,
    locale,
  });

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />

      <div className="page-fade-in bg-white">
        <section className="border-b border-[#dfe5e9] bg-[#f3f6f8] px-6 pb-14 pt-[150px] md:pb-18 md:pt-[175px]">
          <div className="mx-auto max-w-6xl">
            <Link
              href={practiceAreasPath}
              className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#a97c2e] transition hover:text-[#10263e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66]"
            >
              <span className="h-px w-10 bg-[#c69b66] transition-all group-hover:w-14" aria-hidden="true" />
              {isEnglish ? "Practice Areas" : "Çalışma Alanları"}
            </Link>
            <h1 className={`${playfair.className} mt-5 max-w-4xl text-4xl font-medium italic leading-tight text-[#10263e] md:text-6xl`}>
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#526273] md:text-lg">
              {intro}
            </p>
          </div>
        </section>

        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
            <article aria-label={isEnglish ? `${title} scope of services` : `${title} hizmet kapsamı`} className="border-t border-[#d6dde3]">
              {sections.map((section) => (
                <section
                  key={section.title}
                  className="grid gap-4 border-b border-[#d6dde3] py-7 sm:grid-cols-[3rem_1fr] sm:gap-5 md:py-8"
                >
                  <span className="flex h-8 w-8 items-center justify-center border border-[#c69b66]/45 text-[#a97c2e]" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" focusable="false">
                      <path d="m5.5 12.5 4 4 9-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h2 className={`${playfair.className} text-xl font-medium italic leading-snug text-[#10263e] md:text-[1.45rem]`}>
                      {section.title}
                    </h2>
                    {section.text ? (
                      <p className="mt-4 max-w-3xl leading-8 text-[#667487]">{section.text}</p>
                    ) : null}
                  </div>
                </section>
              ))}
            </article>

            <aside className="border border-[#d6dde3] bg-[#f4f1eb] p-6 md:p-7 lg:sticky lg:top-32">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#a97c2e]">
                {isEnglish ? "Direct Contact" : "Doğrudan İletişim"}
              </p>
              <h2 className={`${playfair.className} mt-4 text-2xl font-medium italic leading-snug text-[#10263e]`}>
                {isEnglish ? "Let us assess your legal matter together." : "Hukuki durumunuzu birlikte değerlendirelim."}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#667487]">
                {isEnglish ? "Contact us directly to discuss the scope of your matter and the legal avenues that may be available under Turkish law." : "Sürecinizin kapsamı ve izlenebilecek hukuki yollar için iletişim bilgileri üzerinden doğrudan ulaşabilirsiniz."}
              </p>
              <Link
                href={contactPath}
                className="group mt-6 inline-flex w-full items-center justify-center gap-3 bg-[#10263e] px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#c69b66] hover:text-[#10263e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66] focus-visible:ring-offset-4"
              >
                {isEnglish ? "Contact Us" : "İletişime Geç"}
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
              <Link
                href={practiceAreasPath}
                className="group mt-5 inline-flex items-center gap-2 border-b border-[#c9cfd5] pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#10263e] transition hover:border-[#a97c2e] hover:text-[#a97c2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66]"
              >
                {isEnglish ? "View All Practice Areas" : "Tüm Alanları Gör"}
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}
