// app/arabuluculuk/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arabuluculuk Hizmeti İstanbul | Avukat Gamze Yıldırım",
  description:
    "İstanbul merkezli arabuluculuk hizmeti ile taraflar arasındaki uyuşmazlıkların hızlı ve etkin şekilde çözülmesi için hukuki danışmanlık sağlanmaktadır.",
};

export default function ArabuluculukPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Arabuluculuk Hizmeti",
            url: "https://gamzeyildirim.av.tr/istanbul-arabuluculuk-avukati",
            areaServed: { "@type": "Place", name: "İstanbul" },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceLocation: {
                "@type": "VirtualLocation",
                url: "https://gamzeyildirim.av.tr/istanbul-arabuluculuk-avukati",
              },
            },
          }),
        }}
      />

      <section className="page-fade-in pt-[160px] pb-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="arabuluculuk-card">

            <div className="mb-10">
              <h1 className="arabuluculuk-title">
                Arabuluculuk Hizmeti
                <span className="title-line"></span>
              </h1>

              <p className="arabuluculuk-desc">
                Arabuluculuk, taraflar arasındaki uyuşmazlıkların mahkeme sürecine
                gitmeden çözülmesini sağlayan alternatif bir çözüm yoludur.
                İstanbul merkezli olarak, tarafların hak ve menfaatlerini gözeten
                hızlı ve etkin arabuluculuk süreçleri yürütülmektedir.
              </p>
            </div>

            <div className="space-y-8">

              <div className="arabuluculuk-section">
                <h2 className="arabuluculuk-section-title">
                  İş Hukuku Arabuluculuğu
                </h2>

                <p className="arabuluculuk-text">
                  İşçi ve işveren arasında ortaya çıkan uyuşmazlıkların
                  çözümünde zorunlu arabuluculuk süreci profesyonel şekilde
                  yürütülür.
                </p>
              </div>

              <div className="arabuluculuk-section">
                <h2 className="arabuluculuk-section-title">
                  Ticari Uyuşmazlıklarda Arabuluculuk
                </h2>

                <p className="arabuluculuk-text">
                  Şirketler ve ticari taraflar arasında ortaya çıkan
                  uyuşmazlıkların hızlı ve etkin şekilde çözülmesi için
                  arabuluculuk süreci uygulanır.
                </p>
              </div>

              <div className="arabuluculuk-section">
                <h2 className="arabuluculuk-section-title">
                  Uyuşmazlık Çözüm Süreci
                </h2>

                <p className="arabuluculuk-text">
                  Tarafların anlaşmaya varmasını kolaylaştıran arabuluculuk
                  görüşmeleri ile mahkeme sürecine gerek kalmadan çözüm
                  sağlanması hedeflenir.
                </p>
              </div>

            </div>
          </div>
        </div>

        <style>{`

          .arabuluculuk-card{
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

          .arabuluculuk-card:hover{
            transform:translateY(-4px);
            box-shadow:0 20px 40px rgba(0,0,0,0.12);
            background:#faf7f2;
          }

          .arabuluculuk-title{
            font-size:24px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:14px;
          }

          .arabuluculuk-desc{
            font-size:15px;
            color:#8b8b8b;
            line-height:1.7;
          }

          .arabuluculuk-section-title{
            font-size:18px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:6px;
          }

          .arabuluculuk-text{
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