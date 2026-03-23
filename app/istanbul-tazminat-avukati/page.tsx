// app/tazminat-avukati/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tazminat Avukatı İstanbul | Avukat Gamze Yıldırım",
  description:
    "İstanbul merkezli tazminat avukatı Gamze Yıldırım, iş kazası, haksız işgal ve zarar tazminatı konularında hukuki danışmanlık sağlar.",
};

export default function TazminatAvukatiPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Tazminat Hukuku Avukatı",
            url: "https://gamzeyildirim.av.tr/istanbul-tazminat-avukati",
            areaServed: { "@type": "Place", name: "İstanbul" },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceLocation: {
                "@type": "VirtualLocation",
                url: "https://gamzeyildirim.av.tr/istanbul-tazminat-avukati",
              },
            },
          }),
        }}
      />

      <section className="page-fade-in pt-[160px] pb-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="tazminat-card">

            <div className="mb-10">
              <h1 className="tazminat-title">
                Tazminat Hukuku Avukatı
                <span className="title-line"></span>
              </h1>

              <p className="tazminat-desc">
                Tazminat hukuku kapsamında, zarar gören kişilerin haklarını korumak ve
                maddi/manevi tazminat taleplerini en doğru şekilde yürütmek büyük önem taşır.
                İstanbul merkezli olarak iş kazaları, haksız işgal ve diğer tazminat davalarında
                hukuki danışmanlık sağlıyorum.
              </p>
            </div>

            <div className="space-y-8">

              <div className="tazminat-section">
                <h2 className="tazminat-section-title">
                  İş Kazası Tazminatları
                </h2>

                <p className="tazminat-text">
                  İş kazası sonucu oluşan maddi ve manevi tazminat taleplerinde gerekli
                  hukuki süreçleri titizlikle yürütüyorum.
                </p>
              </div>

              <div className="tazminat-section">
                <h2 className="tazminat-section-title">
                  Haksız İşgal ve Ecrimisil
                </h2>

                <p className="tazminat-text">
                  Taşınmazın haksız işgali ve ecrimisil durumlarında, müvekkillerin
                  haklarının korunması için gerekli dava ve başvurular yapılır.
                </p>
              </div>

              <div className="tazminat-section">
                <h2 className="tazminat-section-title">
                  Zarar Tazminatı Davaları
                </h2>

                <p className="tazminat-text">
                  Sözleşmeden veya haksız fiilden doğan zararların tazmini için
                  dava ve hukuki takip süreçleri yürütülür.
                </p>
              </div>

            </div>
          </div>
        </div>

        <style>{`

          .tazminat-card{
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

          .tazminat-card:hover{
            transform:translateY(-4px);
            box-shadow:0 20px 40px rgba(0,0,0,0.12);
            background:#faf7f2;
          }

          .tazminat-title{
            font-size:24px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:14px;
          }

          .tazminat-desc{
            font-size:15px;
            color:#8b8b8b;
            line-height:1.7;
          }

          .tazminat-section-title{
            font-size:18px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:6px;
          }

          .tazminat-text{
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