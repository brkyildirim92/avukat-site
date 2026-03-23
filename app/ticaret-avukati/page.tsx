// app/ticaret-hukuku-avukati/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ticaret Hukuku Avukatı İstanbul | Avukat Gamze Yıldırım",
  description:
    "İstanbul merkezli ticaret hukuku avukatı Gamze Yıldırım, şirket kuruluşu, ticari sözleşmeler ve ticari uyuşmazlıkların çözümünde hukuki danışmanlık sağlar.",
};

export default function TicaretHukukuAvukatiPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Ticaret Hukuku Avukatı",
            url: "https://gamzeyildirim.av.tr/ticaret-avukati",
            areaServed: { "@type": "Place", name: "İstanbul" },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceLocation: {
                "@type": "VirtualLocation",
                url: "https://gamzeyildirim.av.tr/ticaret-avukati",
              },
            },
          }),
        }}
      />

      <section className="page-fade-in pt-[160px] pb-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="ticaret-card">

            <div className="mb-10">
              <h1 className="ticaret-title">
                Ticaret Hukuku Avukatı
                <span className="title-line"></span>
              </h1>

              <p className="ticaret-desc">
                İstanbul merkezli olarak ticaret hukuku alanında, şirket kuruluşu,
                ticari sözleşmeler ve ticari uyuşmazlıkların çözümünde stratejik
                ve güvenilir hukuki danışmanlık sağlıyorum.
              </p>
            </div>

            <div className="space-y-8">

              <div className="ticaret-section">
                <h2 className="ticaret-section-title">
                  Şirket Kuruluşu ve Yönetimi
                </h2>

                <p className="ticaret-text">
                  Yeni şirketlerin hukuki prosedürleri, kuruluş işlemleri ve
                  yönetim süreçleri eksiksiz şekilde yürütülür.
                </p>
              </div>

              <div className="ticaret-section">
                <h2 className="ticaret-section-title">
                  Ticari Sözleşmeler
                </h2>

                <p className="ticaret-text">
                  Ticari ilişkilerde sözleşme hazırlama, inceleme ve revize
                  işlemleri hukuka uygun şekilde yapılır.
                </p>
              </div>

              <div className="ticaret-section">
                <h2 className="ticaret-section-title">
                  Ticari Uyuşmazlıkların Çözümü
                </h2>

                <p className="ticaret-text">
                  İş ve ticari anlaşmazlıklarda dava, tahkim ve arabuluculuk
                  süreçleri etkin şekilde yürütülür.
                </p>
              </div>

            </div>
          </div>
        </div>

        <style>{`

          .ticaret-card{
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

          .ticaret-card:hover{
            transform:translateY(-4px);
            box-shadow:0 20px 40px rgba(0,0,0,0.12);
            background:#faf7f2;
          }

          .ticaret-title{
            font-size:24px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:14px;
          }

          .ticaret-desc{
            font-size:15px;
            color:#8b8b8b;
            line-height:1.7;
          }

          .ticaret-section-title{
            font-size:18px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:6px;
          }

          .ticaret-text{
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