// app/ceza-avukati/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ceza Avukatı İstanbul | Avukat Gamze Yıldırım",
  description:
    "İstanbul merkezli ceza avukatı Gamze Yıldırım, soruşturma ve kovuşturma süreçlerinde savunma hizmeti sunar. Gözaltı, tutuklama ve ceza davalarında hukuki danışmanlık sağlar.",
};

export default function CezaAvukatiPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Ceza Hukuku Avukatı",
            url: "https://gamzeyildirim.av.tr/ceza-avukati",
            areaServed: { "@type": "Place", name: "İstanbul" },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceLocation: {
                "@type": "VirtualLocation",
                url: "https://gamzeyildirim.av.tr/ceza-avukati",
              },
            },
          }),
        }}
      />

      <section className="page-fade-in pt-[160px] pb-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="ceza-card">

            <div className="mb-10">
              <h1 className="ceza-title">
                Ceza Avukatı
                <span className="title-line"></span>
              </h1>

              <p className="ceza-desc">
                Ceza hukuku alanında soruşturma ve kovuşturma aşamalarında etkin
                savunma büyük önem taşır. İstanbul merkezli olarak gözaltı,
                tutuklama ve ceza davalarında hukuki danışmanlık ve savunma
                hizmeti sunuyorum.
              </p>
            </div>

            <div className="space-y-8">

              <div className="ceza-section">
                <h2 className="ceza-section-title">
                  Soruşturma Aşaması
                </h2>

                <p className="ceza-text">
                  Savcılık tarafından yürütülen soruşturma süreçlerinde ifade
                  alma, gözaltı işlemleri ve diğer hukuki adımlar titizlikle
                  takip edilir.
                </p>
              </div>

              <div className="ceza-section">
                <h2 className="ceza-section-title">
                  Ceza Davaları
                </h2>

                <p className="ceza-text">
                  Ağır ceza ve asliye ceza mahkemelerinde görülen davalarda
                  müvekkillerin savunma hakları etkin şekilde temsil edilir.
                </p>
              </div>

              <div className="ceza-section">
                <h2 className="ceza-section-title">
                  Gözaltı ve Tutuklama Süreçleri
                </h2>

                <p className="ceza-text">
                  Gözaltı ve tutuklama tedbirleri sırasında hukuki hakların
                  korunması için gerekli başvurular ve savunma işlemleri
                  yürütülür.
                </p>
              </div>

            </div>
          </div>
        </div>

        <style>{`

          .ceza-card{
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

          .ceza-card:hover{
            transform:translateY(-4px);
            box-shadow:0 20px 40px rgba(0,0,0,0.12);
            background:#faf7f2;
          }

          .ceza-title{
            font-size:24px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:14px;
          }

          .ceza-desc{
            font-size:15px;
            color:#8b8b8b;
            line-height:1.7;
          }

          .ceza-section-title{
            font-size:18px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:6px;
          }

          .ceza-text{
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