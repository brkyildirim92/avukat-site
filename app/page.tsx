import { Playfair_Display } from "next/font/google";
import {
  Scale,
  Users,
  Briefcase,
  FileText,
  Building2,
  Laptop,
  Gavel,
  Home as HomeIcon,
  Layers,
} from "lucide-react";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// ⬇️ AYARLANABİLİR MAKALE KART DEĞİŞKENLERİ
const articleCardPadding = "32px 32px 72px 32px";
const articleCardMinHeight = "180px";
const articleCardRadius = "20px";
    

const services = [
  { title: "Ceza Hukuku", icon: Scale },
  { title: "Aile Hukuku", icon: Users },
  { title: "İş Hukuku", icon: Briefcase },
  { title: "Borçlar ve Sözleşmeler", icon: FileText },
  { title: "Ticaret Hukuku", icon: Building2 },
  { title: "Bilişim Hukuku", icon: Laptop },
  { title: "İcra ve İflas", icon: Gavel },
  { title: "Gayrimenkul Hukuku", icon: HomeIcon },
  { title: "Diğer Hukuki Konular", icon: Layers },
];


const articles = [
  {
    title: "Ceza Hukukunda Tutuklama Şartları",
    excerpt:
      "Tutuklama, ceza yargılamasında istisnai bir koruma tedbiridir.Kişi özgürlüğünü doğrudan etkilediği için ancak kanunda açıkça belirtilen şartların birlikte gerçekleşmesi halinde uygulanabilir.",
    slug: "ceza-hukukunda-tutuklama-sartlari",
  },
  {
    title: "Boşanma Davalarında Nafaka Hesaplaması ",
    excerpt:
      "Boşanma sürecinde nafaka hesaplaması, tarafların ekonomik durumları ve yaşam standartları dikkate alınarak yapılır. Nafaka türleri ve hesaplama kriterlerini bu yazıda ele alıyoruz.",
    slug: "bosanma-davalarinda-nafaka-turleri",
  },
  {
    title: "İşten Haksız Fesih Durumunda Haklarınız",
    excerpt:
      "İşveren tarafından yapılan haksız fesihlerde işçinin kıdem, ihbar ve tazminat hakları bulunmaktadır. Hangi durumların haksız fesih sayıldığını detaylandırıyoruz.",
    slug: "isten-haksiz-fesih-durumunda-haklar",
  },
  {
    title: "Kira Sözleşmesinde Tahliye Süreci",
    excerpt:
      "Kira sözleşmesinin tahliyesi belirli yasal prosedürlere bağlıdır. Tahliye davası, ihtar ve süreler hakkında bilinmesi gerekenleri bu makalede açıklıyoruz.",
    slug: "kira-sozlesmesi-tahliye",
  },
  {
    title: "Kat Mülkiyetinde Ortak Alan Uyuşmazlıkları ve Hukuki Çözümler",
    excerpt:
      "Kat mülkiyetine tabi apartman ve sitelerde ortak alan kullanımı nedeniyle yaşanan uyuşmazlıklar, hukuki çözüm yolları ve kat maliklerinin hakları.",
    slug: "kat-mulkiyetinde-ortak-alan-uyusmazliklari",
  },
  {
    title: "Tapu İptali ve Tescil Davası Nedir? Şartları ve Hukuki Süreç",
    excerpt:
      "Tapu iptali ve tescil davası hangi hallerde açılır? Muvazaa, miras ve hatalı tescil durumlarında izlenecek hukuki yollar ve dava süreci.",
    slug: "tapu-iptali-ve-tescil-davasi",
  },
    {
    title: "Kentsel Dönüşüm Sürecinde Haklar Nelerdir?",
    excerpt:
      "Kentsel dönüşüm sürecinde malik ve kiracıların sahip olduğu haklar, itiraz yolları ve hukuki süreçler hakkında detaylı bilgi.",
    slug: "kentsel-donusum-surecinde-haklar",
  },
    {
    title: "Ortaklığın Giderilmesi (İzale-i Şuyu) Davası Nedir?",
    excerpt:
      "Ortaklığın giderilmesi (izale-i şuyu) davası nedir, hangi durumlarda açılır ve satış süreci nasıl işler? Detaylı rehber.",
    slug: "ortakligin-giderilmesi-izale-i-suyu-davasi",
  },
    {
    title: "Ecrimisil (Haksız İşgal Tazminatı) Davası Nedir?",
    excerpt:
      "Ecrimisil davası nedir, hangi durumlarda açılır, nasıl hesaplanır? Haksız işgal tazminatı hakkında detaylı rehber.",
    slug: "ecrimisil-haksiz-isgal-tazminati-davasi",
  },
];

export const metadata = {
  title: "Avukat Gamze Yıldırım",
  description:
    "İstanbul merkezli avukatlık hizmetleri. Ceza hukuku, boşanma davaları ve iş hukuku alanlarında danışmanlık.",
};


export default function Home() {
  const heroHeight = "120vh";
  const spaceAfterHero = "80px";
  const spaceAfterTitle = "80px";

  return (
    <>
{/* HERO */}
<section className="relative w-full h-screen flex items-center overflow-hidden">

  {/* Arka Plan */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: "url('/hukuk7.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  {/* Blur + Dark Overlay */}
  <div className="absolute inset-0 backdrop-blur-[2px] bg-black/40" />    {/* Ana Foto Blur Ayarı */}

  {/* İçerik */}
  <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
    <h1
      className={`text-4xl md:text-5xl font-semibold leading-tight ${playfair.className}`}
      style={{
        color: "#c69b65",
        background: "linear-gradient(45deg, #8c6b2f, #b08d57, #6f5323)",
        WebkitBackgroundClip: "text",
      }}
    >
      Avukat Gamze Yıldırım
    </h1>

    <p
      className={`mt-12 text-lg ${playfair.className}`}
      style={{
        color: "#c69b65",
        background: "linear-gradient(45deg, #8c6b2f, #b08d57, #6f5323)",
        WebkitBackgroundClip: "text",
        
        maxWidth: "720px",
        lineHeight: "2.2",
        margin: "0 auto",
      }}
    >
      Bireysel olarak çalışan bir avukat olarak, İstanbul merkezli ve Online
      hukuki danışmanlık hizmeti sunuyorum.
    </p>
  </div>

</section>

      <div style={{ height: spaceAfterHero }} />

      {/* HİZMETLER */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className={`text-3xl md:text-4xl font-semibold text-center text-gray-900 ${playfair.className}`}
            style={{
              marginBottom: spaceAfterTitle,
              scrollMarginTop: "130px",
            }}
          >
            Hukuki Danışmanlık ve Arabuluculuk
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map(({ title, icon: Icon }) => (
              <div key={title} className="service-card">
                <Icon className="service-icon" size={34} />
                <h3 className="service-title">{title}</h3>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .service-card {
            background: #ffffff;
            border: 1px solid #e6d6bf;
            border-radius: 16px;
            padding: 40px;
            text-align: center;
            cursor: pointer;
            transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
          }
          .service-card:hover {
            background: #c69b65;
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            transform: translateY(-4px);
          }
          .service-icon {
            margin: 0 auto 16px;
            color: #c69b65;
            transition: color 0.3s ease, transform 0.3s ease;
          }
          .service-card:hover .service-icon {
            color: #ffffff;
            transform: scale(1.1);
          }
          .service-title {
            font-size: 18px;
            font-weight: 500;
            color: #1f2937;
            transition: color 0.3s ease;
          }
          .service-card:hover .service-title {
            color: #ffffff;
          }
        `}</style>
      </section>

      {/* 🔒 MAKALELER İÇİN GÜVENLİ BOŞLUK – ÜST ÜSTE BİNMESİN */}
      <div style={{ height: "100px" }} />

{/* 📝 MAKALELER */}
<section className="bg-gray-50 py-24">
  <div className="max-w-5xl mx-auto px-6">
    <h2
      className={`text-3xl md:text-4xl font-semibold text-center ${playfair.className}`}
      style={{ color: "#1f2937" }}
    >
      Makaleler
    </h2>

<div className="mt-10">
  <div className="grid md:grid-cols-3 gap-8 auto-rows-fr">
    {articles.map((article) => (
<div
  key={article.slug}
  className="article-card bg-white border border-gray-200 relative"
  style={{
    padding: articleCardPadding,
    minHeight: articleCardMinHeight,
    borderRadius: articleCardRadius,
  }}
>
  {/* İÇERİK – MUTLAKA flex-grow */}
  <div className="flex-grow">
    <h3 className="font-semibold mb-4 text-gray-900">
      {article.title}
    </h3>

    <p
      className="text-sm mb-6"
      style={{
        color: "#374151",
        display: "-webkit-box",
        WebkitLineClamp: 4,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}
    >
      {article.excerpt}
    </p>
  </div>

  {/* ALT – SOL ALT SABİT */}
  <div className="mt-auto">
    <Link
      href={`/makaleler/${article.slug}`}
      className="absolute bottom-10 left-6 text-sm font-medium inline-flex items-center gap-1"
      style={{ color: "#c69b65" }}
    >
      Daha Fazlası İçin →
    </Link>
  </div>
</div>

    ))}
  </div>
</div>

    <style>{`
      .article-card {
        transition: 
          background 0.3s ease,
          box-shadow 0.3s ease,
          transform 0.3s ease;
      }

      .article-card:hover {
        background: #c69b65;
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        transform: translateY(-4px);
      }

      .article-card:hover h3,
      .article-card:hover p,
      .article-card:hover a {
        color: #ffffff !important;
      }
    `}</style>
  </div>
</section>

    </>
  );
}
