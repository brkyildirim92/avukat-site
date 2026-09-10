import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tazminat Hukuku",
  description:
    "Maddi ve manevi zararlar ile sözleşme veya haksız fiilden doğan tazminat talepleri hakkında genel bilgi.",
  path: "/tazminat-hukuku",
});

export default function TazminatAvukatiPage() {
  return (
    <PracticeAreaPage
      title="Tazminat Hukuku"
      intro="Haksız fiil, sözleşmeye aykırılık ve diğer hukuki nedenlerden doğan maddi veya manevi tazminat talepleri; zararın, sorumluluğun ve somut olayın kapsamına göre değerlendirilir."
      schemaName="Tazminat Hukuku"
      path="/tazminat-hukuku"
      sections={[
        {
          title: "İş Kazası Tazminatları",
          text: "İş kazası sonucu oluşan maddi ve manevi tazminat taleplerinde gerekli hukuki süreçleri titizlikle yürütüyorum.",
        },
        {
          title: "Haksız İşgal ve Ecrimisil",
          text: "Taşınmazın haksız işgali ve ecrimisil durumlarında, müvekkillerin haklarının korunması için gerekli dava ve başvurular yapılır.",
        },
        {
          title: "Zarar Tazminatı Davaları",
          text: "Sözleşmeden veya haksız fiilden doğan zararların tazmini için dava ve hukuki takip süreçleri yürütülür.",
        },
      ]}
    />
  );
}
