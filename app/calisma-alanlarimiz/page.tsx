import {
  Scale,
  Shield,
  Briefcase,
  FileText,
  Home,
  Users,
  Gavel,
  Landmark,
  ClipboardList,
} from "lucide-react";

const areas = [
  {
    title: "Ceza Hukuku",
    description:
      "Ceza hukukuna ilişkin soruşturma ve kovuşturma aşamalarında etkin müdafilik hizmeti sunulmaktadır. Gözaltı, tutuklama, adli kontrol ve duruşma süreçleri titizlikle takip edilir. Avukat Gamze Yıldırım, savunma hakkının en güçlü şekilde kullanılmasını esas alarak müvekkillerini temsil eder.",
    icon: Shield,
  },
  {
    title: "Aile Hukuku",
    description:
      "Boşanma davaları, velayet, nafaka, mal paylaşımı ve aile hukukundan doğan uyuşmazlıklarda kapsamlı hukuki destek sağlanır. Sürecin hassasiyeti gözetilerek müvekkillerin hak ve menfaatleri korunur. Avukat Gamze Yıldırım, aile hukukunda çözüm odaklı bir yaklaşım sunar.",
    icon: Users,
  },
  {
    title: "İş Hukuku",
    description:
      "İşe iade davaları, kıdem ve ihbar tazminatları ile işçi ve işveren uyuşmazlıkları profesyonel şekilde yürütülmektedir. İş ilişkilerinden doğan hak kayıplarının önlenmesi hedeflenir. Avukat Gamze Yıldırım, iş hukukunda etkin dava ve danışmanlık hizmeti verir.",
    icon: Briefcase,
  },
  {
    title: "Gayrimenkul Hukuku",
    description:
      "Tapu iptal ve tescil davaları, kira uyuşmazlıkları ve taşınmaz hukukuna ilişkin tüm süreçlerde hukuki danışmanlık sağlanır. Gayrimenkul işlemlerinde doğabilecek riskler önceden değerlendirilir. Avukat Gamze Yıldırım, taşınmaz hukukunda güvenilir çözümler sunar.",
    icon: Home,
  },
  {
    title: "İcra ve İflas Hukuku",
    description:
      "Alacak takibi, haciz işlemleri, itirazın iptali ve icra hukuku süreçleri titizlikle yürütülür. Alacakların tahsili sürecinde hukuki yollar etkin şekilde kullanılır. Avukat Gamze Yıldırım, icra ve iflas hukukunda hızlı ve sonuç odaklı hizmet sağlar.",
    icon: ClipboardList,
  },
  {
    title: "Sözleşmeler Hukuku",
    description:
      "Sözleşmelerin hazırlanması, incelenmesi ve sözleşmeden doğan uyuşmazlıklarda hukuki destek sunulmaktadır. Tarafların haklarını güvence altına alan açık ve uygulanabilir sözleşmeler hazırlanır. Avukat Gamze Yıldırım, sözleşme hukukunda titiz bir çalışma yürütür.",
    icon: FileText,
  },
  {
    title: "Ticaret Hukuku",
    description:
      "Şirket kuruluşu, ticari sözleşmeler ve ticari uyuşmazlıkların çözümüne yönelik danışmanlık hizmetleri verilmektedir. Ticari faaliyetlerin hukuka uygun şekilde yürütülmesi hedeflenir. Avukat Gamze Yıldırım, ticaret hukukunda profesyonel destek sağlar.",
    icon: Landmark,
  },
  {
    title: "İdare Hukuku",
    description:
      "İptal davaları, tam yargı davaları ve idare ile yaşanan hukuki uyuşmazlıklarda müvekkillere etkin temsil sağlanır. İdari işlemlerin hukuka uygunluğu detaylı şekilde değerlendirilir. Avukat Gamze Yıldırım, idare hukukunda hak arama sürecini titizlikle yürütür.",
    icon: Scale,
  },
  {
    title: "Miras Hukuku",
    description:
      "Miras paylaşımı, tenkis davaları ve miras hukukundan doğan ihtilaflarda kapsamlı hukuki destek sunulmaktadır. Mirasçı haklarının korunması ve uyuşmazlıkların çözümü hedeflenir. Avukat Gamze Yıldırım, miras hukukunda güvenilir danışmanlık sağlar.",
    icon: Gavel,
  },
];


export default function CalismaAlanlarimizPage() {
  return (
    <div className="page-fade-in grid grid-cols-1 gap-10">
      {areas.map(({ title, description, icon: Icon }) => (
        <div key={title} className="service-card">

          {/* 🔹 İKON + BAŞLIK */}
          <div className="flex items-center gap-4">
            <Icon className="service-icon" size={32} />
            <h3 className="service-title">{title}</h3>
          </div>

          {/* 🔹 AÇIKLAMA */}
          <p className="service-desc mt-6 text-sm leading-relaxed pl-[48px]">
            {description}
          </p>

        </div>
      ))}

      <style>{`
        .service-card {
          background: #ffffff;
          border: 1px solid #e6d6bf;
          border-radius: 16px;
          padding: 32px;
          transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }

        .service-card:hover {
          background: #c69b65;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          transform: translateY(-4px);
        }

        .service-icon {
          color: #c69b65;
          transition: color 0.3s ease, transform 0.3s ease;
          flex-shrink: 0;
        }

        .service-card:hover .service-icon {
          color: #ffffff;
          transform: scale(1.1);
        }

        .service-title {
          font-size: 18px;
          font-weight: 600;
          color: #262b3e;
          transition: color 0.3s ease;
        }

        .service-desc {
          color: #9b9b9b;
          transition: color 0.3s ease;
        }

        .service-card:hover .service-title,
        .service-card:hover .service-desc {
          color: #ffffff;
        }
      `}</style>
    </div>
  );
}

