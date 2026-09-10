import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import { articlesEn } from "../../data/articles.en";
import { playfair } from "../../fonts";
import { createBreadcrumbJsonLd, createItemListJsonLd, createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Legal Articles",
  description: "General information on selected areas and procedures under Turkish law.",
  path: "/en/articles",
  locale: "en",
});

export default function ArticlesPage() {
  const itemListJsonLd = createItemListJsonLd({
    name: "Legal Articles by Attorney at Law Gamze Yıldırım",
    path: "/en/articles",
    items: articlesEn.map((article) => ({
      name: article.title,
      path: `/en/articles/${article.slug}`,
      description: article.excerpt,
    })),
  });
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "Articles", path: "/en/articles" },
  ]);

  return (
    <>
      <JsonLd data={itemListJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <div className="page-fade-in bg-white">
      <section className="border-b border-[#dfe5e9] bg-[#f3f6f8] px-6 pb-14 pt-[150px] md:pb-18 md:pt-[175px]">
        <div className="mx-auto max-w-6xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#a97c2e]"><span className="h-px w-10 bg-[#c69b66]" aria-hidden="true" />Legal Information</p>
          <h1 className={`${playfair.className} mt-5 text-4xl font-medium italic leading-tight text-[#10263e] md:text-6xl`}>Articles</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#526273] md:text-lg">General information on selected legal concepts, procedural requirements and rights under Turkish law.</p>
        </div>
      </section>
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="border-t border-[#d6dde3]">
            {articlesEn.map((article) => (
              <Link key={article.slug} href={`/en/articles/${article.slug}`} aria-label={`Read ${article.title}`} className="group grid gap-4 border-b border-[#d6dde3] px-2 py-8 transition duration-300 hover:bg-[#fdfbf7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66] focus-visible:ring-inset md:grid-cols-[9rem_minmax(0,1fr)_auto] md:items-center md:gap-8 md:px-5 md:py-10">
                <time dateTime={article.isoDate} className="self-start pt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#a97c2e]">{article.date}</time>
                <div><h2 className={`${playfair.className} text-[1.7rem] font-medium italic leading-[1.2] text-[#10263e] transition-colors duration-300 group-hover:text-[#a97c2e] md:text-[1.9rem]`}>{article.title}</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-[#667487] md:text-base">{article.excerpt}</p></div>
                <span className="inline-flex items-center gap-3 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.12em] text-[#10263e] transition-colors duration-300 group-hover:text-[#a97c2e] md:justify-self-end">Read Article <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
          <div className="mt-12 border-t border-[#dfe5e9] pt-8 text-center">
            <p className="mx-auto max-w-2xl text-sm leading-7 text-[#667487]">These articles provide general information only and do not constitute legal advice. Each legal matter must be assessed on its own facts.</p>
            <Link href="/en/contact" className="group mt-5 inline-flex items-center gap-3 border-b border-[#c9cfd5] pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#10263e] transition hover:border-[#a97c2e] hover:text-[#a97c2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66]">Contact Details <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
