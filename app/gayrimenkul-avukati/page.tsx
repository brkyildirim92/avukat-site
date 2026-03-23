// app/gayrimenkul-avukati/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gayrimenkul Avukatı İstanbul | Avukat Gamze Yıldırım",
  description:
    "İstanbul merkezli gayrimenkul avukatı Gamze Yıldırım, tapu iptali ve tescil davaları, kira uyuşmazlıkları ve taşınmaz hukukuna ilişkin konularda hukuki danışmanlık sağlar.",
};

export default function GayrimenkulAvukatiPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Gayrimenkul Hukuku Avukatı",
            url: "https://gamzeyildirim.av.tr/gayrimenkul-avukati",
            areaServed: { "@type": "Place", name: "İstanbul" },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceLocation: {
                "@type": "VirtualLocation",
                url: "https://gamzeyildirim.av.tr/gayrimenkul-avukati",
              },
            },
          }),
        }}
      />

      <section className="page-fade-in pt-[160px] pb-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="gayrimenkul-card">

            <div className="mb-10">
              <h1 className="gayrimenkul-title">
                Gayrimenkul Avukatı
                <span className="title-line"></span>
              </h1>

              <p className="gayrimenkul-desc">
                İstanbul merkezli olarak gayrimenkul hukuku alanında, tapu işlemleri,
                kira uyuşmazlıkları ve taşınmazlardan doğan hukuki ihtilaflarda
                stratejik ve güvenilir hukuki danışmanlık sağlıyorum.
              </p>
            </div>

            <div className="space-y-8">

              <div className="gayrimenkul-section">
                <h2 className="gayrimenkul-section-title">
                  Tapu İptali ve Tescil Davaları
                </h2>

                <p className="gayrimenkul-text">
                  Tapu kayıtlarının iptali ve doğru şekilde tescil edilmesi için
                  gerekli hukuki süreçler yürütülür.
                </p>
              </div>

              <div className="gayrimenkul-section">
                <h2 className="gayrimenkul-section-title">
                  Kira Uyuşmazlıkları
                </h2>

                <p className="gayrimenkul-text">
                  Kiracı ve mal sahibi arasında ortaya çıkan kira sözleşmesi
                  uyuşmazlıkları, tahliye davaları ve kira alacakları profesyonel
                  şekilde takip edilir.
                </p>
              </div>

              <div className="gayrimenkul-section">
                <h2 className="gayrimenkul-section-title">
                  Taşınmaz Hukuku Danışmanlığı
                </h2>

                <p className="gayrimenkul-text">
                  Gayrimenkul alım-satım işlemleri, sözleşmeler ve taşınmaz
                  yatırımlarına ilişkin hukuki riskler değerlendirilir ve danışmanlık
                  sağlanır.
                </p>
              </div>

            </div>
          </div>
        </div>

        <style>{`

          .gayrimenkul-card{
            max-width:760px;
            margin:0 auto;
            background:#ffffff;
            border:2px solid #e6d6bf;
            border-radius:20px;
            padding:42px;
            transition:
              transform .3s ease,
              box-shadow .3s ease,
              background .3s ease;
          }

          .gayrimenkul-card:hover{
            transform:translateY(-4px);
            box-shadow:0 20px 40px rgba(0,0,0,0.12);
            background:#faf7f2;
          }

          .gayrimenkul-title{
            font-size:24px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:14px;
          }

          .gayrimenkul-desc{
            font-size:15px;
            color:#8b8b8b;
            line-height:1.7;
          }

          .gayrimenkul-section-title{
            font-size:18px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:6px;
          }

          .gayrimenkul-text{
            font-size:14px;
            color:#6b7280;
            line-height:1.7;
          }

          .title-line{
            display:block;
            width:270px;
            height:2px;
            background:#c69b65;
            margin-top:10px;
          }

        `}</style>

      </section>
    </>
  );
}