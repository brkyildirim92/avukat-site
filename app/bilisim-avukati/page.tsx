// app/bilisim-hukuku-avukati/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bilişim Hukuku Avukatı İstanbul | Avukat Gamze Yıldırım",
  description:
    "İstanbul merkezli bilişim hukuku avukatı Gamze Yıldırım, internet hukuku, veri ihlalleri, dijital suçlar ve online içerik uyuşmazlıklarında hukuki danışmanlık sağlar.",
};

export default function BilisimHukukuAvukatiPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Bilişim Hukuku Avukatı",
            url: "https://gamzeyildirim.av.tr/bilisim-avukati",
            areaServed: { "@type": "Place", name: "İstanbul" },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceLocation: {
                "@type": "VirtualLocation",
                url: "https://gamzeyildirim.av.tr/bilisim-avukati",
              },
            },
          }),
        }}
      />

      <section className="page-fade-in pt-[160px] pb-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bilisim-card">

            <div className="mb-10">
              <h1 className="bilisim-title">
                Bilişim Hukuku Avukatı
                <span className="title-line"></span>
              </h1>

              <p className="bilisim-desc">
                İstanbul merkezli olarak bilişim hukuku alanında, internet ortamında
                ortaya çıkan hukuki uyuşmazlıklar, veri ihlalleri ve dijital içerik
                kaynaklı sorunlarda stratejik ve güvenilir hukuki danışmanlık sağlıyorum.
              </p>
            </div>

            <div className="space-y-8">

              <div className="bilisim-section">
                <h2 className="bilisim-section-title">
                  İnternet ve Sosyal Medya Uyuşmazlıkları
                </h2>

                <p className="bilisim-text">
                  Sosyal medya içerikleri, internet yayınları ve dijital platformlarda
                  oluşan hukuki uyuşmazlıklarda gerekli hukuki süreçler yürütülür.
                </p>
              </div>

              <div className="bilisim-section">
                <h2 className="bilisim-section-title">
                  Kişisel Verilerin Korunması
                </h2>

                <p className="bilisim-text">
                  Kişisel verilerin hukuka aykırı kullanımı ve veri ihlalleri
                  durumlarında KVKK kapsamında hukuki danışmanlık ve süreç yönetimi sağlanır.
                </p>
              </div>

              <div className="bilisim-section">
                <h2 className="bilisim-section-title">
                  Dijital İçerik ve Hak İhlalleri
                </h2>

                <p className="bilisim-text">
                  İnternet ortamında oluşan içerik kaldırma talepleri, erişim engeli
                  başvuruları ve dijital hak ihlallerine ilişkin hukuki destek verilir.
                </p>
              </div>

            </div>
          </div>
        </div>

        <style>{`

          .bilisim-card{
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

          .bilisim-card:hover{
            transform:translateY(-4px);
            box-shadow:0 20px 40px rgba(0,0,0,0.12);
            background:#faf7f2;
          }

          .bilisim-title{
            font-size:24px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:14px;
          }

          .bilisim-desc{
            font-size:15px;
            color:#8b8b8b;
            line-height:1.7;
          }

          .bilisim-section-title{
            font-size:18px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:6px;
          }

          .bilisim-text{
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