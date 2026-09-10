import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Kira Hukuku",
  description:
    "Kira sözleşmeleri, tahliye, kira bedelinin tespiti ve kira ilişkisinden doğan uyuşmazlıklar hakkında genel bilgi.",
  path: "/kira-hukuku",
});

export default function KiraAvukatiPage() {
  return (
    <PracticeAreaPage
      title="Kira Hukuku"
      intro="Kira sözleşmeleri, tahliye, kira bedelinin tespiti ve kiracı ile kiraya veren arasındaki uyuşmazlıklarda uygulanabilecek dava ve takip yolları somut duruma göre değerlendirilir."
      schemaName="Kira Hukuku"
      path="/kira-hukuku"
      sections={[
        {
          title: "Kiracı Tahliye Davaları",
          text: "Kiracının tahliyesi gereken durumlarda tahliye davaları ve gerekli hukuki süreçler titizlikle yürütülür.",
        },
        {
          title: "Kira Artış Davaları",
          text: "Kira bedelinin güncel piyasa koşullarına göre belirlenmesi için kira tespit ve kira artış davaları açılabilir.",
        },
        {
          title: "Kira Sözleşmesi Uyuşmazlıkları",
          text: "Kira sözleşmesinden doğan uyuşmazlıklar, kira alacakları ve sözleşme ihlalleri hukuki süreçler kapsamında takip edilir.",
        },
      ]}
    />
  );
}
