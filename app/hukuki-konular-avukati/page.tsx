// app/diger-hukuki-konular/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diğer Hukuki Konular | Avukat Gamze Yıldırım",
  description:
    "Avukat Gamze Yıldırım, İstanbul merkezli olarak farklı hukuk alanlarında ortaya çıkan çeşitli hukuki uyuşmazlıklarda danışmanlık ve dava takibi hizmeti sunmaktadır.",
};

export default function DigerHukukiKonularPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Hukuki Danışmanlık Hizmetleri",
            url: "https://gamzeyildirim.av.tr/hukuki-konular-avukati",
            areaServed: { "@type": "Place", name: "İstanbul" },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceLocation: {
                "@type": "VirtualLocation",
                url: "https://gamzeyildirim.av.tr/hukuki-konular-avukati",
              },
            },
          }),
        }}
      />

      <section className="page-fade-in pt-[160px] pb-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="hukuki-card">

            <div className="mb-10">
              <h1 className="hukuki-title">
                Diğer Hukuki Konular
                <span className="title-line"></span>
              </h1>

              <p className="hukuki-desc">
                Hukuki uyuşmazlıklar farklı alanlarda ortaya çıkabilir. İstanbul merkezli
                olarak, çeşitli hukuk alanlarında müvekkillerin haklarını korumaya
                yönelik hukuki danışmanlık ve dava takibi hizmeti sunuyorum.
              </p>
            </div>

            <div className="space-y-8">

              <div className="hukuki-section">
                <h2 className="hukuki-section-title">
                  Hukuki Danışmanlık
                </h2>

                <p className="hukuki-text">
                  Farklı hukuk alanlarında ortaya çıkan hukuki sorunlarda doğru
                  stratejilerin belirlenmesi ve sürecin hukuka uygun şekilde
                  yürütülmesi için danışmanlık sağlanır.
                </p>
              </div>

              <div className="hukuki-section">
                <h2 className="hukuki-section-title">
                  Dava ve Uyuşmazlık Takibi
                </h2>

                <p className="hukuki-text">
                  Hukuki ihtilafların çözümü için gerekli dava süreçleri başlatılır
                  ve müvekkillerin hakları titizlikle takip edilir.
                </p>
              </div>

              <div className="hukuki-section">
                <h2 className="hukuki-section-title">
                  Hukuki Süreç Yönetimi
                </h2>

                <p className="hukuki-text">
                  Her hukuki sürecin kendine özgü dinamikleri bulunmaktadır.
                  Sürecin doğru şekilde planlanması ve yönetilmesi için
                  profesyonel hukuki destek sunulmaktadır.
                </p>
              </div>

            </div>
          </div>
        </div>

        <style>{`

          .hukuki-card{
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

          .hukuki-card:hover{
            transform:translateY(-4px);
            box-shadow:0 20px 40px rgba(0,0,0,0.12);
            background:#faf7f2;
          }

          .hukuki-title{
            font-size:24px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:14px;
          }

          .hukuki-desc{
            font-size:15px;
            color:#8b8b8b;
            line-height:1.7;
          }

          .hukuki-section-title{
            font-size:18px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:6px;
          }

          .hukuki-text{
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