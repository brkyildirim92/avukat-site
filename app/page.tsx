import Link from "next/link";
import PracticeAreaCard from "./components/PracticeAreaCard";
import { practiceAreas } from "./data/practiceAreas";
import { adamina, playfair } from "./fonts";
import { createPageMetadata } from "./lib/seo";

const principles = [
  {
    title: "Doğrudan İletişim",
    text: "Hukuki süreciniz doğrudan avukatınız tarafından değerlendirilir ve yürütülür.",
  },
  {
    title: "Şeffaf Süreç",
    text: "Süreç, olası yollar ve atılacak adımlar hakkında anlaşılır ve düzenli bilgi sunulur.",
  },
  {
    title: "Mesleki Gizlilik",
    text: "Görüşmeleriniz ve belgeleriniz meslek kuralları çerçevesinde titizlikle korunur.",
  },
  {
    title: "Stratejik Yaklaşım",
    text: "Her hukuki mesele kendi koşulları içinde incelenir ve ihtiyaca uygun yol haritası oluşturulur.",
  },
];

const processSteps = [
  { title: "İlk Görüşme", label: "Ön değerlendirme", text: "Hukuki mesele ve temel ihtiyaçlarınız değerlendirilir." },
  { title: "Dosya İncelemesi", label: "Hukuki analiz", text: "Belgeler ve hukuki seçenekler ayrıntılı şekilde incelenir." },
  { title: "Strateji", label: "Yol haritası", text: "İzlenecek yol, kapsam ve sonraki adımlar açıkça belirlenir." },
  { title: "Süreç Yönetimi", label: "Düzenli takip", text: "Hukuki işlem ve gelişmeler düzenli iletişimle takip edilir." },
];

const romanNumbers = ["I", "II", "III", "IV"] as const;

const articles = [
  {
    title: "Ceza Hukukunda Tutuklama Şartları",
    excerpt: "Tutuklama tedbirinin yasal şartları ve itiraz sürecinde dikkate alınan temel hususlar.",
    slug: "ceza-hukukunda-tutuklama-sartlari",
  },
  {
    title: "Boşanma Davalarında Nafaka Türleri",
    excerpt: "Tedbir, iştirak ve yoksulluk nafakası arasındaki farklar ve değerlendirme ölçütleri.",
    slug: "bosanma-davalarinda-nafaka-turleri",
  },
  {
    title: "İşten Haksız Fesih Durumunda Haklar",
    excerpt: "Haksız fesih halinde işçinin kıdem, ihbar ve diğer yasal haklarına genel bakış.",
    slug: "isten-haksiz-fesih-durumunda-haklar",
  },
];

const featuredPracticeAreaLinks = [
  "/yabancilar-ve-vatandaslik-hukuku",
  "/gayrimenkul-hukuku",
  "/ticaret-hukuku",
  "/icra-ve-iflas-hukuku",
  "/yabanci-mahkeme-kararlarinin-taninmasi-ve-tenfizi",
  "/is-hukuku",
] as const;

const featuredPracticeAreas = featuredPracticeAreaLinks.map((link) => {
  const area = practiceAreas.find((item) => item.link === link);
  if (!area) throw new Error(`Featured practice area not found: ${link}`);
  return area;
});

export const metadata = createPageMetadata({
  title: "Avukat Gamze Yıldırım | İstanbul",
  description:
    "Avukat Gamze Yıldırım'ın iletişim bilgileri, mesleki faaliyet alanları ve hukuki bilgilendirme yazıları.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <section className="relative min-h-[820px] overflow-hidden bg-[#0d2742] pt-[84px] md:min-h-[820px] md:pt-[100px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hukuk7.jpg')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,25,45,0.97)_0%,rgba(7,31,54,0.88)_42%,rgba(9,37,63,0.5)_75%,rgba(8,31,53,0.3)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-6xl items-center px-6 py-14 md:min-h-[650px] md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4ae5a] md:text-sm">
              İstanbul · Türkiye — Hukuki Danışmanlık ve Dava Takibi
            </p>
            <h1 className={`${playfair.className} mt-6 max-w-3xl text-[clamp(2.2rem,4.6vw,3.8rem)] font-normal italic leading-[1.06] text-white`}>
              Hukuki Süreçleriniz İçin Doğrudan Ve Stratejik Destek
            </h1>
            <p className={`${adamina.className} mt-7 max-w-2xl text-base leading-8 text-white/85 md:text-lg md:leading-9`}>
              Avukat Gamze Yıldırım, İstanbul merkezli olarak hukuki danışmanlık,
              dava takibi ve arabuluculuk hizmetleri sunmaktadır.
            </p>

            <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <a
                href="https://wa.me/905447370009"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center bg-[#d4ae5a] px-8 py-4 font-semibold text-[#10263e] transition hover:bg-[#e1c273] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
              >
                WhatsApp ile iletişime geç →
              </a>
              <Link
                href="/iletisim"
                className="border-b border-[#d4ae5a] pb-1 text-sm font-semibold text-[#e2bd68] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                İletişim bilgileri →
              </Link>
            </div>

            <p className={`${adamina.className} mt-5 max-w-xl text-sm leading-7 text-white/65`}>
              İlk iletişiminiz doğrudan değerlendirilir; hukuki hizmet ilişkisi kapsam ve koşulların karşılıklı belirlenmesiyle kurulur.
            </p>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/15 bg-[#071f36]/75">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-5 gap-y-4 px-6 py-5 text-xs text-white/80 md:grid-cols-4 md:text-sm">
            <p><span className="font-semibold text-[#d4ae5a]">Doğrudan</span> avukat iletişimi</p>
            <p><span className="font-semibold text-[#d4ae5a]">İstanbul</span> merkezli hizmet</p>
            <p><span className="font-semibold text-[#d4ae5a]">Online</span> hukuki danışmanlık</p>
            <p><span className="font-semibold text-[#d4ae5a]">Mesleki</span> gizlilik ilkesi</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f6f8] px-6 py-14 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a97c2e]">İstanbul merkezli hukuki hizmet</p>
          <h2 className={`${playfair.className} mx-auto mt-4 max-w-4xl text-3xl italic leading-tight text-[#10263e] md:text-5xl`}>
            Her hukuki mesele, kendine özgü koşulları içinde dikkatle değerlendirilir.
          </h2>
        </div>
      </section>

      <section id="calisma-alanlari" className="bg-white px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className={`${playfair.className} text-4xl italic text-[#10263e] md:text-5xl`}>Hukuki hizmetler</h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#526273]">
              Uyuşmazlıkların önlenmesi, hakların korunması ve hukuki süreçlerin doğru yönetilmesi için danışmanlık ve temsil hizmetleri.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {featuredPracticeAreas.map((area) => (
              <PracticeAreaCard key={area.title} area={area} compact />
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              href="/calisma-alanlarimiz"
              className="group inline-flex items-center gap-3 border-b border-[#c9cfd5] pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#10263e] transition hover:border-[#a97c2e] hover:text-[#a97c2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4ae5a]"
            >
              Tüm Çalışma Alanlarını Gör
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#10263e] px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4ae5a]">Çalışma İlkeleri</p>
          <h2 className={`${playfair.className} mt-3 max-w-3xl text-4xl italic md:text-5xl`}>Hukuki süreçte güven ve açıklık</h2>

          <div className="mt-14 grid gap-px bg-white/15 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <article key={principle.title} className="bg-[#10263e] p-7 md:p-8">
                <p className={`${playfair.className} text-base font-medium italic tracking-[0.08em] text-[#d4ae5a]`}>
                  {romanNumbers[index]} —
                </p>
                <h3 className={`${playfair.className} mt-6 text-[1.55rem] font-medium italic leading-tight text-white`}>
                  {principle.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-6 py-20 md:py-28"
        style={{
          background:
            "radial-gradient(circle at 75% 20%, rgba(77, 156, 197, 0.11), transparent 30%), radial-gradient(circle at 45% 90%, rgba(212, 174, 90, 0.1), transparent 34%), linear-gradient(135deg, #f6f8fa 0%, #edf2f5 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.5fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a97c2e]">Süreç</p>
              <h2 className={`${playfair.className} mt-3 text-4xl italic text-[#10263e] md:text-5xl`}>Bir hukuki mesele nasıl ilerler?</h2>
            </div>
            <div className="relative">
              <svg
                className="pointer-events-none absolute bottom-0 left-0 top-0 h-full w-10 overflow-visible"
                viewBox="0 0 40 440"
                preserveAspectRatio="none"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  <linearGradient id="process-flow-gradient" x1="0" y1="0" x2="0" y2="440" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#b7a47e" />
                    <stop offset="50%" stopColor="#92999d" />
                    <stop offset="100%" stopColor="#b7a47e" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 0 C44 42 -4 78 20 110 S44 188 20 220 S-4 298 20 330 S38 408 20 440"
                  fill="none"
                  stroke="#aeb7bd"
                  strokeWidth="2"
                  opacity="0.62"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  className="process-flow-glow"
                  d="M20 0 C44 42 -4 78 20 110 S44 188 20 220 S-4 298 20 330 S38 408 20 440"
                  fill="none"
                  stroke="url(#process-flow-gradient)"
                  strokeWidth="5"
                  opacity="0.08"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  className="process-flow-line"
                  d="M20 0 C44 42 -4 78 20 110 S44 188 20 220 S-4 298 20 330 S38 408 20 440"
                  fill="none"
                  stroke="url(#process-flow-gradient)"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
                <g className="process-flow-droplets">
                  <circle className="process-flow-droplet" r="2.8" fill="#b39b70">
                    <animateMotion
                      dur="6.6s"
                      repeatCount="indefinite"
                      calcMode="linear"
                      path="M20 0 C44 42 -4 78 20 110 S44 188 20 220 S-4 298 20 330 S38 408 20 440"
                    />
                  </circle>
                  <circle className="process-flow-droplet" r="2.3" fill="#8f999f" opacity="0.9">
                    <animateMotion
                      begin="-2.2s"
                      dur="6.6s"
                      repeatCount="indefinite"
                      calcMode="linear"
                      path="M20 0 C44 42 -4 78 20 110 S44 188 20 220 S-4 298 20 330 S38 408 20 440"
                    />
                  </circle>
                  <circle className="process-flow-droplet" r="2" fill="#c1ae88" opacity="0.8">
                    <animateMotion
                      begin="-4.4s"
                      dur="6.6s"
                      repeatCount="indefinite"
                      calcMode="linear"
                      path="M20 0 C44 42 -4 78 20 110 S44 188 20 220 S-4 298 20 330 S38 408 20 440"
                    />
                  </circle>
                </g>
              </svg>
              {processSteps.map((step, index) => (
                <details
                  key={step.title}
                  className="group relative border-b border-[#ced8e0] pl-14 transition-colors duration-300 first:border-t hover:bg-white/35"
                >
                  <span
                    className="process-flow-node absolute left-[11px] top-[29px] z-10 flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#c99b46] bg-[#f2f6f8] shadow-[0_0_0_4px_#f2f6f8] transition group-open:bg-[#c99b46]"
                    style={{ animationDelay: `${index * 0.45}s` }}
                    aria-hidden="true"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c99b46] transition group-open:bg-white" />
                  </span>
                  <summary className="grid cursor-pointer list-none items-center gap-3 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4ae5a] sm:grid-cols-[48px_1fr_auto_42px] sm:gap-5 [&::-webkit-details-marker]:hidden">
                    <span className={`${playfair.className} text-sm font-medium italic tracking-[0.08em] text-[#a97c2e]`}>
                      {romanNumbers[index]}
                    </span>
                    <h3 className={`${playfair.className} text-2xl font-medium italic leading-tight text-[#10263e] transition group-hover:text-[#a97c2e] group-open:text-[#a97c2e]`}>
                      {step.title}
                    </h3>
                    <span className="hidden text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#7b8794] sm:block">
                      {step.label}
                    </span>
                    <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#cbd6df] text-[#10263e] transition duration-300 group-hover:border-[#c99b46] group-open:rotate-45 group-open:border-[#c99b46]" aria-hidden="true">
                      <span className="absolute h-px w-3.5 bg-current" />
                      <span className="absolute h-3.5 w-px bg-current" />
                    </span>
                  </summary>
                  <div className="grid gap-2 pb-6 sm:grid-cols-[48px_1fr] sm:gap-5">
                    <span className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[#a97c2e] sm:hidden">{step.label}</span>
                    <span className="hidden sm:block" aria-hidden="true" />
                    <p className="max-w-xl text-sm leading-7 text-[#526273]">{step.text}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a97c2e]">HUKUKİ YAYINLAR</p>
            <h2 className={`${playfair.className} mt-3 text-4xl italic text-[#10263e] md:text-5xl`}>Güncel hukuki bilgiler</h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/makaleler/${article.slug}`}
                className="group flex min-h-60 flex-col border border-[#d6dde3] bg-white p-6 transition duration-300 hover:border-[#173a5e] hover:bg-[#fdfbf7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4ae5a] md:p-7"
              >
                <h3 className={`${playfair.className} text-[1.65rem] font-medium italic leading-[1.15] text-[#10263e]`}>
                  {article.title}
                </h3>
                <p className="mt-4 leading-7 text-[#667487]">{article.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-3 pt-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#10263e] transition-colors duration-300 group-hover:text-[#d4ae5a]">
                  Makaleyi Oku <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              href="/makaleler"
              className="group inline-flex items-center gap-3 border-b border-[#c9cfd5] pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#10263e] transition hover:border-[#a97c2e] hover:text-[#a97c2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4ae5a]"
            >
              Tüm Makaleleri Gör
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-[#c69b66]/25 bg-[#f4f1eb] px-6 py-16 md:py-20">
        <div className="pointer-events-none absolute -left-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#c69b66]/[0.08] blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#0d243b]/[0.05] blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#c69b66]">
              <span className="h-px w-10 bg-[#c69b66]" aria-hidden="true" />
              İletişim
            </p>
            <h2 className={`${playfair.className} mt-3 text-3xl italic text-[#10263e] md:text-5xl`}>Hukuki durumunuzu birlikte değerlendirelim.</h2>
          </div>
          <Link
            href="/iletisim"
            className="inline-flex shrink-0 items-center justify-center bg-[#10263e] px-8 py-4 font-semibold text-white shadow-[0_14px_30px_rgba(13,36,59,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#c69b66] hover:text-[#10263e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66] focus-visible:ring-offset-4"
          >
            İletişime geç →
          </Link>
        </div>
      </section>
    </>
  );
}
