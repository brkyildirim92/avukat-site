// app/icra-ve-iflas-avukati/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İcra ve İflas Hukuku Avukatı İstanbul | Avukat Gamze Yıldırım",
  description:
    "İstanbul merkezli icra ve iflas hukuku avukatı Gamze Yıldırım, alacak tahsili, haciz işlemleri ve icra takipleri konusunda hukuki danışmanlık sağlar.",
};

export default function IcraIflasAvukatiPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "İcra ve İflas Hukuku Avukatı",
            url: "https://gamzeyildirim.av.tr/icra-avukati",
            areaServed: { "@type": "Place", name: "İstanbul" },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceLocation: {
                "@type": "VirtualLocation",
                url: "https://gamzeyildirim.av.tr/icra-avukati",
              },
            },
          }),
        }}
      />

      <section className="page-fade-in pt-[160px] pb-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="icra-card">

            <div className="mb-10">
              <h1 className="icra-title">
                İcra ve İflas Hukuku Avukatı
                <span className="title-line"></span>
              </h1>

              <p className="icra-desc">
                İstanbul merkezli olarak icra ve iflas hukuku alanında, alacakların
                tahsili, icra takipleri ve haciz işlemleri konusunda stratejik ve
                güvenilir hukuki danışmanlık sağlıyorum.
              </p>
            </div>

            <div className="space-y-8">

              <div className="icra-section">
                <h2 className="icra-section-title">
                  Alacak Tahsili ve İcra Takipleri
                </h2>

                <p className="icra-text">
                  Ödenmeyen alacakların tahsili için icra takipleri başlatılır ve
                  sürecin hukuka uygun şekilde yürütülmesi sağlanır.
                </p>
              </div>

              <div className="icra-section">
                <h2 className="icra-section-title">
                  Haciz İşlemleri ve İtiraz Süreçleri
                </h2>

                <p className="icra-text">
                  Haciz işlemleri, borçlu itirazları ve icra hukukuna ilişkin
                  uyuşmazlıklar profesyonel şekilde takip edilir.
                </p>
              </div>

              <div className="icra-section">
                <h2 className="icra-section-title">
                  İflas ve Konkordato Süreçleri
                </h2>

                <p className="icra-text">
                  İflas ve konkordato süreçlerinde şirket ve alacaklı haklarının
                  korunması amacıyla hukuki danışmanlık sağlanır.
                </p>
              </div>

            </div>
          </div>
        </div>

        <style>{`

          .icra-card{
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

          .icra-card:hover{
            transform:translateY(-4px);
            box-shadow:0 20px 40px rgba(0,0,0,0.12);
            background:#faf7f2;
          }

          .icra-title{
            font-size:24px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:14px;
          }

          .icra-desc{
            font-size:15px;
            color:#8b8b8b;
            line-height:1.7;
          }

          .icra-section-title{
            font-size:18px;
            font-weight:600;
            color:#c69b65;
            margin-bottom:6px;
          }

          .icra-text{
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