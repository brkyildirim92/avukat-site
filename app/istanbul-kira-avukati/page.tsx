// app/kira-avukati/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kira Avukatı İstanbul | Avukat Gamze Yıldırım",
  description:
    "İstanbul merkezli kira avukatı Gamze Yıldırım, kiracı tahliye davaları, kira artış davaları ve kira sözleşmesi uyuşmazlıklarında hukuki danışmanlık sağlar.",
};

export default function KiraAvukatiPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Kira Hukuku Avukatı",
            url: "https://gamzeyildirim.av.tr/istanbul-kira-avukati",
            areaServed: { "@type": "Place", name: "İstanbul" },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceLocation: {
                "@type": "VirtualLocation",
                url: "https://gamzeyildirim.av.tr/istanbul-kira-avukati",
              },
            },
          }),
        }}
      />

      <section className="page-fade-in pt-[160px] pb-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="kira-card">

            <div className="mb-10">
             <h1 className="kira-title">
                Kira Hukuku Avukatı
                <span className="title-line"></span>
             </h1>

              <p className="kira-desc">
                Kira hukuku alanında kiracı ve mal sahibi arasında ortaya çıkan
                uyuşmazlıkların doğru şekilde yönetilmesi büyük önem taşır.
                İstanbul merkezli olarak kira sözleşmeleri, tahliye davaları ve
                kira artış uyuşmazlıklarında hukuki danışmanlık sağlıyorum.
              </p>
            </div>

            <div className="space-y-8">

              <div className="kira-section">
                <h2 className="kira-section-title">
                  Kiracı Tahliye Davaları
                </h2>

                <p className="kira-text">
                  Kiracının tahliyesi gereken durumlarda tahliye davaları ve
                  gerekli hukuki süreçler titizlikle yürütülür.
                </p>
              </div>

              <div className="kira-section">
                <h2 className="kira-section-title">
                  Kira Artış Davaları
                </h2>

                <p className="kira-text">
                  Kira bedelinin güncel piyasa koşullarına göre belirlenmesi için
                  kira tespit ve kira artış davaları açılabilir.
                </p>
              </div>

              <div className="kira-section">
                <h2 className="kira-section-title">
                  Kira Sözleşmesi Uyuşmazlıkları
                </h2>

                <p className="kira-text">
                  Kira sözleşmesinden doğan uyuşmazlıklar, kira alacakları ve
                  sözleşme ihlalleri hukuki süreçler kapsamında takip edilir.
                </p>
              </div>

            </div>
          </div>
        </div>

        <style>{`

          .kira-card{
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

          .kira-card:hover{
            transform:translateY(-4px);
            box-shadow:0 20px 40px rgba(0,0,0,0.12);
            background:#faf7f2;
          }

          .kira-title{
           font-size:24px;
           font-weight:600;
           color:#c69b65;
           margin-bottom:14px;
           }

          .kira-desc{
            font-size:15px;
            color:#8b8b8b;
            line-height:1.7;
          }

          .kira-section-title{
            font-size:18px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:6px;
          }

          .kira-text{
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