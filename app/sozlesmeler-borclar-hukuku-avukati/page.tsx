// app/sozlesmeler-hukuku-avukati/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Borçlar ve Sözleşmeler Hukuku Avukatı İstanbul | Avukat Gamze Yıldırım",
  description:
    "İstanbul merkezli borçlar ve sözleşmeler hukuku avukatı Gamze Yıldırım, sözleşme hazırlanması, incelenmesi ve uyuşmazlıkların çözümü konularında hukuki danışmanlık sağlar.",
};

export default function SozlesmelerHukukuAvukatiPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Borçlar ve Sözleşmeler Hukuku Avukatı",
            url: "https://gamzeyildirim.av.tr/sozlesmeler-borclar-hukuku-avukati",
            areaServed: { "@type": "Place", name: "İstanbul" },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceLocation: {
                "@type": "VirtualLocation",
                url: "https://gamzeyildirim.av.tr/sozlesmeler-borclar-hukuku-avukati",
              },
            },
          }),
        }}
      />

      <section className="page-fade-in pt-[160px] pb-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="borc-card">

            <div className="mb-10">
              <h1 className="borc-title">
                Borçlar ve Sözleşmeler Hukuku Avukatı
                <span className="title-line"></span>
              </h1>

              <p className="borc-desc">
                İstanbul merkezli olarak borçlar ve sözleşmeler hukuku alanında,
                sözleşmelerin hazırlanması, incelenmesi ve uyuşmazlıkların çözümünde
                stratejik ve güvenilir hukuki danışmanlık sağlıyorum.
              </p>
            </div>

            <div className="space-y-8">

              <div className="borc-section">
                <h2 className="borc-section-title">
                  Sözleşme Hazırlama ve İnceleme
                </h2>

                <p className="borc-text">
                  Tüm ticari ve özel sözleşmelerin hukuka uygun şekilde hazırlanması
                  ve incelenmesi sağlanır.
                </p>
              </div>

              <div className="borc-section">
                <h2 className="borc-section-title">
                  Borç İlişkileri ve Uyuşmazlıklar
                </h2>

                <p className="borc-text">
                  Borç ilişkilerinden doğan anlaşmazlıklar, alacak-tahsil süreçleri
                  ve borç ödemeleri hukuki olarak yönetilir.
                </p>
              </div>

              <div className="borc-section">
                <h2 className="borc-section-title">
                  Tazminat ve Hak Talepleri
                </h2>

                <p className="borc-text">
                  Sözleşme ihlalleri veya borçların yerine getirilmemesi durumunda
                  tazminat ve hak taleplerinin takibi yapılır.
                </p>
              </div>

            </div>
          </div>
        </div>

        <style>{`

          .borc-card{
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

          .borc-card:hover{
            transform:translateY(-4px);
            box-shadow:0 20px 40px rgba(0,0,0,0.12);
            background:#faf7f2;
          }

          .borc-title{
            font-size:24px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:14px;
          }

          .borc-desc{
            font-size:15px;
            color:#8b8b8b;
            line-height:1.7;
          }

          .borc-section-title{
            font-size:18px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:6px;
          }

          .borc-text{
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