import Link from "next/link";


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
];

export default function MakalelerPage() {
  return (
    <section className="page-fade-in">

      <div className="grid grid-cols-1 gap-10 justify-items-center">

        {articles.map((article) => (
          <article key={article.slug} className="service-card max-w-2xl w-full mx-auto">

            {/* TARİH */}
            <span className="block text-xs mb-3 service-date">
              {article.date}
            </span>

            {/* BAŞLIK */}
            <h2 className="service-title text-lg leading-snug">
              <Link href={`/makaleler/${article.slug}`}>
                {article.title}
              </Link>
            </h2>

            {/* AÇIKLAMA */}
            <p className="service-desc mt-4 text-sm leading-relaxed">
              {article.excerpt}
            </p>

            {/* DEVAMINI OKU */}
            <div className="mt-6">
              <Link
                href={`/makaleler/${article.slug}`}
                className="service-link inline-flex items-center gap-1 text-sm font-medium"
              >
                Devamını Oku <span>→</span>
              </Link>
            </div>

          </article>
        ))}

      </div>

      {/* ⬇️ AYNI KART CSS – AYNEN KOPYA */}
      <style>{`
        .service-card {
          background: #ffffff;
          border: 1px solid #e6d6bf;
          border-radius: 16px;
          padding: 32px;
          transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }

        .service-card:hover {
          background: #c69b65;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          transform: translateY(-4px);
        }

        .service-title {
          font-weight: 600;
          color: #262b3e;
          transition: color 0.3s ease;
        }

        .service-desc {
          color: #9b9b9b;
          transition: color 0.3s ease;
        }

        .service-date {
          color: #b5b5b5;
          transition: color 0.3s ease;
        }

        .service-link {
          color: #c69b65;
          transition: color 0.3s ease, gap 0.3s ease;
        }

        .service-card:hover .service-title,
        .service-card:hover .service-desc,
        .service-card:hover .service-date,
        .service-card:hover .service-link {
          color: #ffffff;
        }
      `}</style>

    </section>
  );
}
