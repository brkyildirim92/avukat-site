import Link from "next/link";
import PracticeAreaCard from "../components/PracticeAreaCard";
import { practiceAreasEn } from "../data/practiceAreas.en";
import { articlesEn } from "../data/articles.en";
import { adamina, playfair } from "../fonts";
import { createPageMetadata } from "../lib/seo";

const principles = [
  { title: "Direct Communication", text: "Your legal matter is assessed and handled directly by your attorney." },
  { title: "Transparent Process", text: "The available avenues, procedural stages and next steps are explained clearly and regularly." },
  { title: "Professional Confidentiality", text: "Communications and documents are protected in accordance with professional rules and duties." },
  { title: "Strategic Approach", text: "Each matter is assessed on its own facts and an appropriate legal strategy is developed." },
] as const;

const processSteps = [
  { title: "Initial Consultation", label: "Preliminary assessment", text: "The nature of the legal issue and your principal requirements are identified." },
  { title: "File Review", label: "Legal analysis", text: "The available documents, applicable Turkish law and potential legal avenues are reviewed." },
  { title: "Strategy", label: "Road map", text: "The proposed course of action, scope of work and next procedural steps are clarified." },
  { title: "Matter Management", label: "Ongoing follow-up", text: "Procedural steps and material developments are monitored with regular communication." },
] as const;

const romanNumbers = ["I", "II", "III", "IV"] as const;

const featuredPracticeAreas = [
  { link: "/en/practice-areas/immigration-turkish-citizenship-law", title: "Turkish Citizenship & Immigration" },
  { link: "/en/practice-areas/real-estate-law", title: "Real Estate & Property" },
  { link: "/en/practice-areas/commercial-law", title: "Corporate & Commercial" },
  { link: "/en/practice-areas/litigation-enforcement-debt-collection", title: "Litigation & Debt Collection" },
  { link: "/en/practice-areas/recognition-enforcement-of-foreign-judgments", title: "Recognition & Enforcement" },
  { link: "/en/practice-areas/employment-law", title: "Employment Law" },
].map(({ link, title }) => {
  const area = practiceAreasEn.find((item) => item.link === link);
  if (!area) throw new Error(`Featured practice area not found: ${link}`);
  return { ...area, title };
});

export const metadata = createPageMetadata({
  title: "Attorney at Law Gamze Yıldırım | Istanbul, Türkiye",
  description: "Legal advice, representation and mediation services in Istanbul, Türkiye, with direct communication and a strategic approach to each matter.",
  path: "/en",
  absoluteTitle: true,
  locale: "en",
});

export default function EnglishHomePage() {
  return (
    <>
      <section className="relative min-h-[820px] overflow-hidden bg-[#0d2742] pt-[84px] md:min-h-[820px] md:pt-[100px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hukuk7.jpg')" }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,25,45,0.97)_0%,rgba(7,31,54,0.88)_42%,rgba(9,37,63,0.5)_75%,rgba(8,31,53,0.3)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-6xl items-center px-6 py-14 md:min-h-[650px] md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4ae5a] md:text-sm">
              Istanbul · TÜRKİYE — Legal Advice and Representation
            </p>
            <h1 className={`${playfair.className} mt-6 max-w-3xl text-[clamp(2.2rem,4.6vw,3.8rem)] font-normal italic leading-[1.06] text-white`}>
              Direct and Strategic Support for Your Legal Matters
            </h1>
            <p className={`${adamina.className} mt-7 max-w-2xl text-base leading-8 text-white/85 md:text-lg md:leading-9`}>
              Attorney at Law Gamze Yıldırım provides legal advice, representation and mediation services from Istanbul, Türkiye.
            </p>
            <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <a href="https://wa.me/905447370009" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center bg-[#d4ae5a] px-8 py-4 font-semibold text-[#10263e] transition hover:bg-[#e1c273] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto">
                Contact via WhatsApp →
              </a>
              <Link href="/en/contact" className="border-b border-[#d4ae5a] pb-1 text-sm font-semibold text-[#e2bd68] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Contact details →
              </Link>
            </div>
            <p className={`${adamina.className} mt-5 max-w-xl text-sm leading-7 text-white/65`}>
              An initial enquiry does not in itself establish an attorney–client relationship. Such a relationship is formed only after the scope and terms of engagement have been agreed.
            </p>
          </div>
        </div>
        <div className="relative z-10 border-t border-white/15 bg-[#071f36]/75">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-5 gap-y-4 px-6 py-5 text-xs text-white/80 md:grid-cols-4 md:text-sm">
            <p><span className="font-semibold text-[#d4ae5a]">Direct</span> attorney contact</p>
            <p><span className="font-semibold text-[#d4ae5a]">Istanbul</span>-based practice</p>
            <p><span className="font-semibold text-[#d4ae5a]">Online</span> legal consultations</p>
            <p><span className="font-semibold text-[#d4ae5a]">Professional</span> confidentiality</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f6f8] px-6 py-14 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a97c2e]">Legal services based in Istanbul</p>
          <h2 className={`${playfair.className} mx-auto mt-4 max-w-4xl text-3xl italic leading-tight text-[#10263e] md:text-5xl`}>
            Every legal matter is assessed carefully on its own facts and under the applicable Turkish law.
          </h2>
        </div>
      </section>

      <section className="bg-white px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className={`${playfair.className} text-4xl italic text-[#10263e] md:text-5xl`}>Legal Services</h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#526273]">Advice and representation aimed at protecting rights, managing disputes and reducing legal risk.</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {featuredPracticeAreas.map((area) => <PracticeAreaCard key={area.title} area={area} locale="en" compact />)}
          </div>
          <div className="mt-6 flex justify-center">
            <Link href="/en/practice-areas" className="group inline-flex items-center gap-3 border-b border-[#c9cfd5] pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#10263e] transition hover:border-[#a97c2e] hover:text-[#a97c2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4ae5a]">
              View All Practice Areas <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#10263e] px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4ae5a]">Working Principles</p>
          <h2 className={`${playfair.className} mt-3 max-w-3xl text-4xl italic md:text-5xl`}>Trust and clarity in legal matters</h2>
          <div className="mt-14 grid gap-px bg-white/15 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <article key={principle.title} className="bg-[#10263e] p-7 md:p-8">
                <p className={`${playfair.className} text-base font-medium italic tracking-[0.08em] text-[#d4ae5a]`}>{romanNumbers[index]} —</p>
                <h3 className={`${playfair.className} mt-6 text-[1.55rem] font-medium italic leading-tight text-white`}>{principle.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28" style={{ background: "radial-gradient(circle at 75% 20%, rgba(77,156,197,.11), transparent 30%), radial-gradient(circle at 45% 90%, rgba(212,174,90,.1), transparent 34%), linear-gradient(135deg,#f6f8fa 0%,#edf2f5 100%)" }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.5fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a97c2e]">Process</p>
              <h2 className={`${playfair.className} mt-3 text-4xl italic text-[#10263e] md:text-5xl`}>How does a legal matter progress?</h2>
            </div>
            <div className="border-t border-[#ced8e0]">
              {processSteps.map((step, index) => (
                <details key={step.title} className="group border-b border-[#ced8e0] transition-colors duration-300 hover:bg-white/35">
                  <summary className="grid cursor-pointer list-none items-center gap-3 px-3 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4ae5a] sm:grid-cols-[48px_1fr_auto_42px] sm:gap-5 [&::-webkit-details-marker]:hidden">
                    <span className={`${playfair.className} text-sm font-medium italic tracking-[0.08em] text-[#a97c2e]`}>{romanNumbers[index]}</span>
                    <h3 className={`${playfair.className} text-2xl font-medium italic leading-tight text-[#10263e] transition group-hover:text-[#a97c2e] group-open:text-[#a97c2e]`}>{step.title}</h3>
                    <span className="hidden text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#7b8794] sm:block">{step.label}</span>
                    <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#cbd6df] text-[#10263e] transition group-hover:border-[#c99b46] group-open:rotate-45" aria-hidden="true"><span className="absolute h-px w-3.5 bg-current" /><span className="absolute h-3.5 w-px bg-current" /></span>
                  </summary>
                  <p className="max-w-2xl px-3 pb-6 pl-[4.75rem] text-sm leading-7 text-[#526273]">{step.text}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a97c2e]">LEGAL INSIGHTS</p>
          <h2 className={`${playfair.className} mt-3 text-4xl italic text-[#10263e] md:text-5xl`}>Current legal information</h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6">
            {articlesEn.slice(0, 3).map((article) => (
              <Link key={article.slug} href={`/en/articles/${article.slug}`} className="group flex min-h-60 flex-col border border-[#d6dde3] bg-white p-6 transition duration-300 hover:border-[#173a5e] hover:bg-[#fdfbf7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4ae5a] md:p-7">
                <h3 className={`${playfair.className} text-[1.65rem] font-medium italic leading-[1.15] text-[#10263e]`}>{article.title}</h3>
                <p className="mt-4 leading-7 text-[#667487]">{article.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-3 pt-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#10263e] transition-colors duration-300 group-hover:text-[#d4ae5a]">Read Article <span className="transition-transform duration-300 group-hover:translate-x-1">→</span></span>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Link href="/en/articles" className="group inline-flex items-center gap-3 border-b border-[#c9cfd5] pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#10263e] transition hover:border-[#a97c2e] hover:text-[#a97c2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4ae5a]">View All Articles <span className="transition-transform duration-300 group-hover:translate-x-1">→</span></Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-[#c69b66]/25 bg-[#f4f1eb] px-6 py-16 md:py-20">
        <div className="relative mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#c69b66]"><span className="h-px w-10 bg-[#c69b66]" aria-hidden="true" />Contact</p>
            <h2 className={`${playfair.className} mt-3 text-3xl italic text-[#10263e] md:text-5xl`}>Let us assess your legal matter together.</h2>
          </div>
          <Link href="/en/contact" className="inline-flex shrink-0 items-center justify-center bg-[#10263e] px-8 py-4 font-semibold text-white shadow-[0_14px_30px_rgba(13,36,59,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#c69b66] hover:text-[#10263e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66] focus-visible:ring-offset-4">Contact Us →</Link>
        </div>
      </section>
    </>
  );
}
