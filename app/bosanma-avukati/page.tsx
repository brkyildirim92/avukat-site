// app/bosanma-avukati/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boşanma Avukatı İstanbul | Avukat Gamze Yıldırım",
  description:
    "İstanbul merkezli boşanma ve aile hukuku avukatı Gamze Yıldırım, nafaka, velayet ve boşanma süreçlerinde hukuki danışmanlık sağlar.",
};

export default function BosanmaAvukatiPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Boşanma ve Aile Hukuku Avukatı",
            url: "https://gamzeyildirim.av.tr/bosanma-avukati",
            areaServed: { "@type": "Place", name: "İstanbul" },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceLocation: {
                "@type": "VirtualLocation",
                url: "https://gamzeyildirim.av.tr/bosanma-avukati",
              },
            },
          }),
        }}
      />

      <section className="page-fade-in pt-[160px] pb-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bosanma-card">

            <div className="mb-10">
              <h1 className="bosanma-title">
                Boşanma ve Aile Hukuku Avukatı
                <span className="title-line"></span>
              </h1>

              <p className="bosanma-desc">
                Boşanma süreçleri karmaşık ve hassas olabilir. İstanbul merkezli olarak,
                nafaka, velayet, mal paylaşımı ve diğer aile hukuku konularında stratejik
                ve güvenilir danışmanlık sağlıyorum.
              </p>
            </div>

            <div className="space-y-8">

              <div className="bosanma-section">
                <h2 className="bosanma-section-title">
                  Nafaka ve Mal Paylaşımı
                </h2>

                <p className="bosanma-text">
                  Boşanma sürecinde eşler arasındaki mal ve gelir paylaşımını
                  kanunlara uygun şekilde yönetiyoruz.
                </p>
              </div>

              <div className="bosanma-section">
                <h2 className="bosanma-section-title">
                  Velayet ve Çocuk Hakları
                </h2>

                <p className="bosanma-text">
                  Çocukların üstün yararını gözeterek velayet ve bakım haklarını koruyorum.
                </p>
              </div>

              <div className="bosanma-section">
                <h2 className="bosanma-section-title">
                  Boşanma Davaları ve Arabuluculuk
                </h2>

                <p className="bosanma-text">
                  Arabuluculuk ve dava süreçlerinde tüm hukuki adımların eksiksiz
                  yürütülmesini sağlıyorum.
                </p>
              </div>

            </div>
          </div>
        </div>

        <style>{`

          .bosanma-card{
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

          .bosanma-card:hover{
            transform:translateY(-4px);
            box-shadow:0 20px 40px rgba(0,0,0,0.12);
            background:#faf7f2;
          }

          .bosanma-title{
            font-size:24px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:14px;
          }

          .bosanma-desc{
            font-size:15px;
            color:#8b8b8b;
            line-height:1.7;
          }

          .bosanma-section-title{
            font-size:18px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:6px;
          }

          .bosanma-text{
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