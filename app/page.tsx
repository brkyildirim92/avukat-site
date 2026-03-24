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
  HousePlus,
  Layers,
  FileBadge,
  Handshake,
} from "lucide-react";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

// ⬇️ AYARLANABİLİR MAKALE KART DEĞİŞKENLERİ
const articleCardPadding = "32px 32px 72px 32px";
const articleCardMinHeight = "180px";
const articleCardRadius = "20px";
    

const services = [
  { title: "Ceza Hukuku", icon: Scale, link: "/ceza-avukati"},
  { title: "Aile Hukuku", icon: Users, link:"/bosanma-avukati"},
  { title: "İş Hukuku", icon: Briefcase,link: "/is-hukuku-avukati"},
  { title: "Borçlar ve Sözleşmeler", icon: FileText,link: "/sozlesmeler-borclar-hukuku-avukati"},
  { title: "Ticaret Hukuku", icon: Building2, link:"/ticaret-avukati" },
  { title: "Bilişim Hukuku", icon: Laptop,link:"/bilisim-avukati"},
  { title: "İcra ve İflas", icon: Gavel,link:"/icra-avukati"},
  { title: "Gayrimenkul Hukuku", icon: HomeIcon,link:"/gayrimenkul-avukati"},
  { title: "Diğer Hukuki Konular", icon: Layers,link:"/hukuki-konular-avukati" },
  { title: "Kira Hukuku", icon: HousePlus,link:"/istanbul-kira-avukati" },
  { title: "Tazminat Hukuku", icon: FileBadge,link:"/istanbul-tazminat-avukati" },
  { title: "Arabuluculuk", icon: Handshake,link:"istanbul-arabuluculuk-avukati" },
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
<section className="relative w-full h-screen flex items-center overflow-hidden pt-[220px] md:pt-0">

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
  <div className="absolute inset-0 backdrop-blur-[2px] bg-black/40" />

  {/* İçerik */}
  <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

    {/* 🔥 H1 (ANA SEO BAŞLIK) */}
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

    {/* 🔥 ALT METİN (SEO + GÜVEN) */}
    <p
        className={`mt-14 text-lg ${playfair.className}`}
        style={{
            color: "#c69b65",
            background: "linear-gradient(45deg, #8c6b2f, #b08d57, #6f5323)",
            WebkitBackgroundClip: "text",
            maxWidth: "720px",
            lineHeight: "2.2",
            marginLeft: "auto",
            marginRight: "auto",
        }}
      >
        Gamze Yıldırım Avukatlık Bürosu, İstanbul merkezli, Türk hukuk bürosudur.
        Büromuz, müvekkillerine kaliteli hukuki hizmet sunmayı taahhüt etmektedir. 
        Türk hukukuna ilişkin bilgi birikimini, stratejik ve çözüm odaklı bir yaklaşımla birleştirerek, 
        müvekkillerimizin değişen ihtiyaçlarına uygun hukuki çözümler geliştirmektedir.
    </p>

    {/* 🔥 CTA BUTON (DÖNÜŞÜM ARTTIRIR) */}
    <div className="mt-10 flex justify-center gap-4 flex-wrap">
      <a
        href="/iletisim"
        className="px-8 py-3 rounded-full text-white font-medium transition"
        style={{
          background: "#c69b65",
        }}
      >
        İletişime Geç
      </a>

      <a
        href="https://wa.me/905447370009"
        target="_blank"
        rel="nooper noreferrer"
        className="px-8 py-3 rounded-full border border-[#c69b65] text-[#c69b65] font-medium transition"
      >
        WhatsApp
      </a>
    </div>

  </div>
</section>

      <div style={{ height: spaceAfterHero }} />


{/* HİZMETLER */}
{/* HİZMETLER */}
<section className="bg-white">
  <div className="max-w-4xl mx-auto px-4">
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
      {services.map(({ title, icon: Icon, link }) => {
        // Kartın hangi sayfaya gideceğini belirle
        let href = "#"; // default link
        if (title === "Ceza Hukuku") href = "/ceza-avukati";
        else if (title === "Aile Hukuku") href = "/bosanma-avukati";
        else if (title === "İş Hukuku") href = "/is-hukuku-avukati";
        else if (title === "Borçlar ve Sözleşmeler") href = "/sozlesmeler-borclar-hukuku-avukati";
        else if (title === "Ticaret Hukuku") href = "/ticaret-avukati";
        else if (title === "Bilişim Hukuku") href = "/bilisim-avukati";
        else if (title === "İcra ve İflas") href = "/icra-avukati";
        else if (title === "Gayrimenkul Hukuku") href = "/gayrimenkul-avukati";
        else if (title === "Diğer Hukuki Konular") href = "/hukuki-konular-avukati";
        else if (title === "Kira Hukuku") href = "/istanbul-kira-avukati";
        else if (title === "Tazminat Hukuku") href = "/istanbul-tazminat-avukati";
        else if (title === "Arabuluculuk") href = "/istanbul-arabuluculuk-avukati";

        return (
          <Link key={title} href={href}>
            <div className="service-card cursor-pointer">
              <Icon className="service-icon" size={34} />
              <h3 className="service-title">{title}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  </div>

  <style>{`
    .service-card {
      background: #ffffff;
      border: 1px solid #e6d6bf;
      border-radius: 16px;
      padding: 40px;
      text-align: center;
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

      {/* 🛡️ TRUST SECTION – MINIMAL ELITE */}
<section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6">

    <div className="border-y border-[#e8d8c3] py-16">

      <h3
        className={`${playfair.className} text-2xl md:text-3xl font-medium text-center mb-14`}
        style={{ color: "#1f2937" }}
      >
        Güven ve Şeffaflık İlkesi
      </h3>

      <div className="grid md:grid-cols-3 gap-12 text-center">

        <div>
          <div className="w-10 h-[2px] bg-[#c69b65] mx-auto mb-6" />
          <h4 className="text-lg font-medium mb-4 text-[#1f2937]">
            Birebir Süreç Yönetimi
          </h4>
          <p className="text-sm leading-7 text-gray-600">
            Tüm hukuki süreçler doğrudan tarafımızdan yürütülür. 
            Müvekkil ile düzenli ve şeffaf iletişim esastır.
          </p>
        </div>

        <div>
          <div className="w-10 h-[2px] bg-[#c69b65] mx-auto mb-6" />
          <h4 className="text-lg font-medium mb-4 text-[#1f2937]">
            Mesleki Gizlilik
          </h4>
          <p className="text-sm leading-7 text-gray-600">
            Tüm görüşmeler ve belgeler, avukatlık meslek ilkeleri 
            çerçevesinde titizlikle korunur.
          </p>
        </div>

        <div>
          <div className="w-10 h-[2px] bg-[#c69b65] mx-auto mb-6" />
          <h4 className="text-lg font-medium mb-4 text-[#1f2937]">
            İstanbul Merkezli Hizmet
          </h4>
          <p className="text-sm leading-7 text-gray-600">
            İstanbul merkezli aktif dava takibi ve Türkiye genelinde 
            online hukuki danışmanlık sağlanmaktadır.
          </p>
        </div>

      </div>

    </div>
  </div>
</section>

      {/* 🚀 İLETİŞİME YÖNLENDİRME BLOĞU */}
<section className="bg-white py-6">
  <div className="max-w-5xl mx-auto px-6">

    <div className="cta-box text-center">
      <h3 className={`text-2xl md:text-3xl font-semibold mb-6 ${playfair.className}`}>
        Hukuki Sürecinizi Profesyonel Şekilde Yönetelim
      </h3>

      <p className="text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
        Hukuki bir sorunla karşı karşıyaysanız, süreci doğru ve stratejik şekilde
        yönetmek büyük önem taşır. İlk değerlendirme için bizimle iletişime geçebilirsiniz.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/iletisim"
          className="cta-primary"
        >
          Hemen İletişime Geç
        </Link>

        <a
          href="https://wa.me/905447370009"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-secondary"
        >
          WhatsApp ile Yazın
        </a>
      </div>
    </div>

  </div>

  <style>{`
    .cta-box {
      background: linear-gradient(135deg, #ffffff, #f8f5ef);
      border: 1px solid #e6d6bf;
      border-radius: 28px;
      padding: 60px 40px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .cta-box:hover {
      transform: translateY(-4px);
      box-shadow: 0 30px 60px rgba(0,0,0,0.12);
    }

    .cta-primary {
      background: #c69b65;
      color: #ffffff;
      padding: 14px 32px;
      border-radius: 999px;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .cta-primary:hover {
      background: #b08d57;
      transform: translateY(-2px);
    }

    .cta-secondary {
      border: 1px solid #c69b65;
      color: #c69b65;
      padding: 14px 32px;
      border-radius: 999px;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .cta-secondary:hover {
      background: #c69b65;
      color: #ffffff;
      transform: translateY(-2px);
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
