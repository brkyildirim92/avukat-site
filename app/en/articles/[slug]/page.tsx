import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { articlesEn, getArticleEn } from "../../../data/articles.en";
import { playfair } from "../../../fonts";
import JsonLd from "../../../components/JsonLd";
import { absoluteUrl, createBreadcrumbJsonLd, createPageMetadata, siteConfig } from "../../../lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articlesEn.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleEn(slug);
  if (!article) return { title: "Article Not Found" };
  return createPageMetadata({ title: article.title, description: article.excerpt, path: `/en/articles/${article.slug}`, type: "article", publishedTime: `${article.isoDate}T00:00:00+03:00`, locale: "en" });
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleEn(slug);
  if (!article) notFound();
  const currentIndex = articlesEn.findIndex((item) => item.slug === article.slug);
  const relatedArticle = articlesEn[(currentIndex + 1) % articlesEn.length];
  const articlePath = `/en/articles/${article.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.excerpt, inLanguage: "en",
    author: { "@type": "Person", "@id": `${siteConfig.url}/#person`, name: siteConfig.personName, honorificPrefix: "Attorney at Law", jobTitle: "Attorney at Law", url: absoluteUrl("/en/about") },
    publisher: { "@type": "Organization", "@id": `${siteConfig.url}/#legal-service`, name: siteConfig.name, url: siteConfig.url, logo: { "@type": "ImageObject", url: absoluteUrl(siteConfig.logoImage), width: 512, height: 512 } },
    datePublished: `${article.isoDate}T00:00:00+03:00`, mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(articlePath) },
  };
  const breadcrumbJsonLd = createBreadcrumbJsonLd([{ name: "Home", path: "/en" }, { name: "Articles", path: "/en/articles" }, { name: article.title, path: articlePath }]);

  return (
    <>
      <JsonLd data={articleJsonLd} /><JsonLd data={breadcrumbJsonLd} />
      <div className="page-fade-in bg-white">
        <section className="border-b border-[#dfe5e9] bg-[#f3f6f8] px-6 pb-14 pt-[150px] md:pb-18 md:pt-[175px]">
          <div className="mx-auto max-w-6xl">
            <Link href="/en/articles" className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#a97c2e] transition hover:text-[#10263e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66]"><span className="h-px w-10 bg-[#c69b66] transition-all group-hover:w-14" aria-hidden="true" />Articles</Link>
            <time dateTime={article.isoDate} className="mt-6 block text-xs font-semibold uppercase tracking-[0.12em] text-[#667487]">{article.date}</time>
            <h1 className={`${playfair.className} mt-4 max-w-5xl text-4xl font-medium italic leading-tight text-[#10263e] md:text-5xl`}>{article.title}</h1>
            <p className="mt-5 text-sm text-[#667487]">By <Link href="/en/about" rel="author" className="font-medium text-[#10263e] underline decoration-[#c69b66] underline-offset-4 transition hover:text-[#a97c2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66]">Attorney at Law Gamze Yıldırım</Link></p>
          </div>
        </section>
        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
            <article aria-label={article.title} className="max-w-3xl">
              <div className="space-y-6 border-t border-[#d6dde3] pt-8">
                {article.content.trim().split("\n\n").map((paragraph, index) => {
                  const text = paragraph.trim();
                  const heading = text.endsWith(":") && text.length < 120;
                  return heading ? <h2 key={index} className={`${playfair.className} pt-5 text-2xl font-medium italic leading-tight text-[#10263e] md:text-[1.8rem]`}>{text.slice(0, -1)}</h2> : <p key={index} className={`whitespace-pre-line leading-8 text-[#526273] ${index === 0 ? "text-lg" : "text-base"}`}>{text}</p>;
                })}
              </div>
              <div className="mt-12 border-y border-[#d6dde3] bg-[#f4f1eb] px-6 py-7"><p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#a97c2e]">Next Article</p><Link href={`/en/articles/${relatedArticle.slug}`} className="group mt-3 inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66]"><span className={`${playfair.className} text-xl font-medium italic text-[#10263e] transition group-hover:text-[#a97c2e]`}>{relatedArticle.title}</span><span className="text-[#a97c2e] transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></Link></div>
            </article>
            <aside className="border border-[#d6dde3] bg-[#f4f1eb] p-6 md:p-7 lg:sticky lg:top-32">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#a97c2e]">Author</p>
              <h2 className={`${playfair.className} mt-4 text-2xl font-medium italic leading-snug text-[#10263e]`}><Link href="/en/about" rel="author" className="transition hover:text-[#a97c2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66]">Attorney at Law Gamze Yıldırım</Link></h2>
              <p className="mt-4 text-sm leading-7 text-[#667487]">Legal advice and representation in criminal, family, employment and other areas of Turkish law.</p>
              <p className="mt-4 text-xs leading-6 text-[#7b8794]">This article is for general information only and does not constitute legal advice. Each matter must be assessed on its own facts.</p>
              <Link href="/en/contact" className="group mt-6 inline-flex w-full items-center justify-center gap-3 bg-[#10263e] px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#c69b66] hover:text-[#10263e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66] focus-visible:ring-offset-4">Contact Us <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span></Link>
              <Link href="/en/articles" className="group mt-5 inline-flex items-center gap-2 border-b border-[#c9cfd5] pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#10263e] transition hover:border-[#a97c2e] hover:text-[#a97c2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66]">All Articles <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span></Link>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}
