// app/is-hukuku-avukati/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İş Hukuku Avukatı İstanbul | Avukat Gamze Yıldırım",
  description:
    "İstanbul merkezli iş hukuku avukatı Gamze Yıldırım, işe iade davaları, kıdem ve ihbar tazminatları, işçi ve işveren uyuşmazlıkları konusunda hukuki danışmanlık sağlar.",
};

export default function IsHukukuAvukatiPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "İş Hukuku Avukatı",
            url: "https://gamzeyildirim.av.tr/is-hukuku-avukati",
            areaServed: { "@type": "Place", name: "İstanbul" },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceLocation: {
                "@type": "VirtualLocation",
                url: "https://gamzeyildirim.av.tr/is-hukuku-avukati",
              },
            },
          }),
        }}
      />

      <section className="page-fade-in pt-[160px] pb-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="is-card">

            <div className="mb-10">
              <h1 className="is-title">
                İş Hukuku Avukatı
                <span className="title-line"></span>
              </h1>

              <p className="is-desc">
                İşçi ve işveren haklarını korumak için İstanbul merkezli olarak,
                işe iade davaları, kıdem ve ihbar tazminatları ve işçi-işveren
                uyuşmazlıklarında hukuki danışmanlık sağlıyorum.
              </p>
            </div>

            <div className="space-y-8">

              <div className="is-section">
                <h2 className="is-section-title">
                  İşe İade Davaları
                </h2>

                <p className="is-text">
                  Haksız işten çıkarılma durumlarında işe iade davalarının
                  yürütülmesi ve tüm hukuki süreçlerin eksiksiz takibi sağlanır.
                </p>
              </div>

              <div className="is-section">
                <h2 className="is-section-title">
                  Kıdem ve İhbar Tazminatları
                </h2>

                <p className="is-text">
                  İşten ayrılma veya işten çıkarılma durumunda hak kayıplarını
                  önlemek için kıdem ve ihbar tazminatları hesaplanır ve süreç yönetilir.
                </p>
              </div>

              <div className="is-section">
                <h2 className="is-section-title">
                  İşçi ve İşveren Uyuşmazlıkları
                </h2>

                <p className="is-text">
                  İş ilişkilerinden doğan ihtilaflarda stratejik hukuki danışmanlık
                  ve dava süreçleri yürütülür.
                </p>
              </div>

            </div>
          </div>
        </div>

        <style>{`

          .is-card{
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

          .is-card:hover{
            transform:translateY(-4px);
            box-shadow:0 20px 40px rgba(0,0,0,0.12);
            background:#faf7f2;
          }

          .is-title{
            font-size:24px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:14px;
          }

          .is-desc{
            font-size:15px;
            color:#8b8b8b;
            line-height:1.7;
          }

          .is-section-title{
            font-size:18px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:6px;
          }

          .is-text{
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