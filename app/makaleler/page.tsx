import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { playfair } from "../fonts";
import { createBreadcrumbJsonLd, createItemListJsonLd } from "../lib/seo";

const articles = [
  {
    title: "Ceza Hukukunda Tutuklama Şartları",
    excerpt:
      "Tutuklama, ceza yargılamasında istisnai bir koruma tedbiridir. Hangi durumlarda tutuklama kararı verilebileceği ve yasal şartları bu yazıda ele alıyoruz.",
    slug: "ceza-hukukunda-tutuklama-sartlari",
    date: "12 Ocak 2025",
  },
  {
    title: "Boşanma Davalarında Nafaka Türleri",
    excerpt:
      "Tedbir nafakası, iştirak nafakası ve yoksulluk nafakası arasındaki farklar nelerdir? Nafaka belirlenirken hangi kriterler dikkate alınır?",
    slug: "bosanma-davalarinda-nafaka-turleri",
    date: "5 Ocak 2025",
  },
  {
    title: "İşten Haksız Fesih Durumunda Haklar",
    excerpt:
      "İşveren tarafından yapılan fesih hangi durumlarda haksız sayılır? İşçinin kıdem, ihbar ve tazminat haklarını detaylıca inceliyoruz.",
    slug: "isten-haksiz-fesih-durumunda-haklar",
    date: "28 Aralık 2024",
  },
  {
    title: "Kira Sözleşmesinde Tahliye Süreci",
    excerpt:
      "Kira sözleşmesinin tahliyesi belirli yasal prosedürlere bağlıdır. Tahliye davası, ihtar ve süreler hakkında bilinmesi gerekenleri bu makalede açıklıyoruz.",
    slug: "kira-sozlesmesi-tahliye",
    date: "09 Ağustos 2024",
  },
  {
    title: "Kat Mülkiyetinde Ortak Alan Uyuşmazlıkları ve Hukuki Çözümler",
    excerpt:
      "Kat mülkiyetine tabi apartman ve sitelerde ortak alan kullanımı nedeniyle yaşanan uyuşmazlıklar, hukuki çözüm yolları ve kat maliklerinin hakları.",
    slug: "kat-mulkiyetinde-ortak-alan-uyusmazliklari",
    date: "12 Eylül 2024",
  },
  {
    title: "Tapu İptali ve Tescil Davası Nedir? Şartları ve Hukuki Süreç",
    excerpt:
      "Tapu iptali ve tescil davası hangi hallerde açılır? Muvazaa, miras ve hatalı tescil durumlarında izlenecek hukuki yollar ve dava süreci.",
    slug: "tapu-iptali-ve-tescil-davasi",
    date: "21 Eylül 2024",
  },
  {
    title: "Kentsel Dönüşüm Sürecinde Haklar Nelerdir?",
    excerpt:
      "Kentsel dönüşüm sürecinde malik ve kiracıların sahip olduğu haklar, itiraz yolları ve hukuki süreçler hakkında detaylı bilgi.",
    slug: "kentsel-donusum-surecinde-haklar",
    date: "17 Kasım 2024",
  },
  {
    title: "Ortaklığın Giderilmesi (İzale-i Şuyu) Davası Nedir?",
    excerpt:
      "Ortaklığın giderilmesi (izale-i şuyu) davası nedir, hangi durumlarda açılır ve satış süreci nasıl işler? Detaylı rehber.",
    slug: "ortakligin-giderilmesi-izale-i-suyu-davasi",
    date: "25 Ekim 2024",
  },
  {
    title: "Ecrimisil (Haksız İşgal Tazminatı) Davası Nedir?",
    excerpt:
      "Ecrimisil davası nedir, hangi durumlarda açılır, nasıl hesaplanır? Haksız işgal tazminatı hakkında detaylı rehber.",
    slug: "ecrimisil-haksiz-isgal-tazminati-davasi",
    date: "27 Aralık 2024",
  },
] as const;

const turkishMonths: Record<string, string> = {
  Ocak: "01",
  Şubat: "02",
  Mart: "03",
  Nisan: "04",
  Mayıs: "05",
  Haziran: "06",
  Temmuz: "07",
  Ağustos: "08",
  Eylül: "09",
  Ekim: "10",
  Kasım: "11",
  Aralık: "12",
};

function toIsoDate(date: string) {
  const [day, month, year] = date.split(" ");
  return `${year}-${turkishMonths[month]}-${day.padStart(2, "0")}`;
}

export default function MakalelerPage() {
  const itemListJsonLd = createItemListJsonLd({
    name: "Avukat Gamze Yıldırım Hukuk Makaleleri",
    path: "/makaleler",
    items: articles.map((article) => ({
      name: article.title,
      path: `/makaleler/${article.slug}`,
      description: article.excerpt,
    })),
  });
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Ana Sayfa", path: "/" },
    { name: "Makaleler", path: "/makaleler" },
  ]);

  return (
    <>
      <JsonLd data={itemListJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <div className="page-fade-in bg-white">
      <section className="border-b border-[#dfe5e9] bg-[#f3f6f8] px-6 pb-14 pt-[150px] md:pb-18 md:pt-[175px]">
        <div className="mx-auto max-w-6xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#a97c2e]">
            <span className="h-px w-10 bg-[#c69b66]" aria-hidden="true" />
            Hukuki Bilgi
          </p>
          <h1 className={`${playfair.className} mt-5 text-4xl font-medium italic leading-tight text-[#10263e] md:text-6xl`}>
            Makaleler
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#526273] md:text-lg">
            Güncel hukuki konular, uygulamadaki temel süreçler ve hak kaybını önlemeye yardımcı genel bilgilendirmeler.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="border-t border-[#d6dde3]">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/makaleler/${article.slug}`}
                aria-label={`${article.title} makalesini oku`}
                className="group grid gap-4 border-b border-[#d6dde3] px-2 py-8 transition duration-300 hover:bg-[#fdfbf7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66] focus-visible:ring-inset md:grid-cols-[9rem_minmax(0,1fr)_auto] md:items-center md:gap-8 md:px-5 md:py-10"
              >
                <time
                  dateTime={toIsoDate(article.date)}
                  className="self-start pt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#a97c2e]"
                >
                  {article.date}
                </time>
                <div>
                  <h2 className={`${playfair.className} text-[1.7rem] font-medium italic leading-[1.2] text-[#10263e] transition-colors duration-300 group-hover:text-[#a97c2e] md:text-[1.9rem]`}>
                    {article.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[#667487] md:text-base">{article.excerpt}</p>
                </div>
                <span className="inline-flex items-center gap-3 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.12em] text-[#10263e] transition-colors duration-300 group-hover:text-[#a97c2e] md:justify-self-end">
                  Makaleyi Oku
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 border-t border-[#dfe5e9] pt-8 text-center">
            <p className="mx-auto max-w-2xl text-sm leading-7 text-[#667487]">
              Makaleler genel bilgilendirme amacı taşır. Somut hukuki durumunuzun değerlendirilmesi için doğrudan iletişime geçebilirsiniz.
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
      </section>
      </div>
    </>
  );
}
