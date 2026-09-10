import Image from "next/image";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import { playfair } from "../../fonts";
import { createBreadcrumbJsonLd, createPageMetadata, createProfilePageJsonLd } from "../../lib/seo";

const sections = [
  {
    title: "Approach to Legal Services",
    text: "Attorney at Law Gamze Yıldırım provides legal advice and representation to individual and corporate clients from Istanbul. Each matter is assessed on its particular facts, with emphasis on accurate legal analysis, transparent communication and a solution-oriented strategy tailored to the client’s needs.",
  },
  {
    title: "Preventive Advice and Matter Management",
    text: "Clients are kept informed at each material stage. In addition to dispute resolution, preventive legal advice is provided to identify and reduce potential risks before they develop. This includes support with structuring contractual relationships, legal review and the conduct of processes in compliance with the applicable Turkish legislation.",
  },
  {
    title: "Long-Term Legal Certainty",
    text: "The objective is not only to address an existing dispute, but also to support long-term legal certainty and reduce future risk through practical, sustainable and effective legal solutions developed for the client’s circumstances.",
  },
] as const;

const romanNumbers = ["I", "II", "III"] as const;

export const metadata = createPageMetadata({
  title: "About",
  description: "The professional approach, working principles and legal-service philosophy of Attorney at Law Gamze Yıldırım in Istanbul.",
  path: "/en/about",
  locale: "en",
});

export default function AboutPage() {
  const profilePageJsonLd = createProfilePageJsonLd("en");
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "About", path: "/en/about" },
  ]);

  return (
    <>
      <JsonLd data={profilePageJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <div className="min-h-screen bg-white">
      <section className="border-b border-[#dfe5e9] bg-[#f3f6f8] px-6 pb-14 pt-[150px] md:pb-18 md:pt-[175px]">
        <div className="mx-auto max-w-6xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#a97c2e]"><span className="h-px w-10 bg-[#c69b66]" aria-hidden="true" />Legal Approach</p>
          <h1 className={`${playfair.className} mt-5 text-4xl font-medium italic leading-tight text-[#10263e] md:text-6xl`}>Attorney at Law Gamze Yıldırım</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#526273] md:text-lg">Accurate analysis, transparent communication and a strategic approach to legal advice and representation based in Istanbul.</p>
        </div>
      </section>
      <section className="px-6 py-12 md:py-16">
        <div className="page-fade-in mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_25rem] lg:items-start">
          <article aria-label="About Attorney at Law Gamze Yıldırım" className="border-t border-[#d6dde3]">
            {sections.map((section, index) => (
              <section key={section.title} className="grid gap-4 border-b border-[#d6dde3] py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-6 md:py-10">
                <span className="pt-1 font-serif text-sm italic text-[#a97c2e]" aria-hidden="true">{romanNumbers[index]}</span>
                <div><h2 className={`${playfair.className} text-2xl font-medium italic leading-tight text-[#10263e] md:text-[1.8rem]`}>{section.title}</h2><p className="mt-4 leading-8 text-[#667487]">{section.text}</p></div>
              </section>
            ))}
          </article>
          <aside className="lg:sticky lg:top-32">
            <Image src="/hakkimizda2.jpg" alt="Attorney at Law Gamze Yıldırım" width={640} height={480} priority className="w-full rounded-2xl object-cover shadow-lg" />
            <div className="mt-6 border border-[#d6dde3] bg-[#f4f1eb] p-6">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#a97c2e]">Working Principles</p>
              <p className={`${playfair.className} mt-4 text-2xl font-medium italic leading-snug text-[#10263e]`}>Trust, clarity and direct communication.</p>
              <p className="mt-4 text-sm leading-7 text-[#667487]">Legal matters are assessed on their own facts, and the available legal avenues are explained in clear terms.</p>
              <Link href="/en/contact" className="group mt-6 inline-flex w-full items-center justify-center gap-3 bg-[#10263e] px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#c69b66] hover:text-[#10263e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66] focus-visible:ring-offset-4">Contact Us <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span></Link>
            </div>
          </aside>
        </div>
      </section>
      </div>
    </>
  );
}
