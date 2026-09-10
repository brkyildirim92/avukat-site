import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Bilişim Hukuku",
  description:
    "Bilişim sistemleri, internet yayınları, kişisel veriler ve dijital içeriklerden doğan hukuki konular hakkında genel bilgi.",
  path: "/bilisim-hukuku",
});

export default function BilisimHukukuAvukatiPage() {
  return (
    <PracticeAreaPage
      title="Bilişim Hukuku"
      intro="Bilişim sistemleri, internet yayınları, kişisel veriler ve dijital içeriklerden doğan hukuki konular; ihlalin niteliği ve uygulanabilir mevzuat çerçevesinde değerlendirilir."
      schemaName="Bilişim Hukuku"
      path="/bilisim-hukuku"
      sections={[
        {
          title: "İnternet ve Sosyal Medya Uyuşmazlıkları",
          text: "Sosyal medya içerikleri, internet yayınları ve dijital platformlarda oluşan hukuki uyuşmazlıklarda gerekli hukuki süreçler yürütülür.",
        },
        {
          title: "Kişisel Verilerin Korunması",
          text: "Kişisel verilerin hukuka aykırı kullanımı ve veri ihlalleri durumlarında KVKK kapsamında hukuki danışmanlık ve süreç yönetimi sağlanır.",
        },
        {
          title: "Dijital İçerik ve Hak İhlalleri",
          text: "İnternet ortamında oluşan içerik kaldırma talepleri, erişim engeli başvuruları ve dijital hak ihlallerine ilişkin hukuki destek verilir.",
        },
      ]}
    />
  );
}
