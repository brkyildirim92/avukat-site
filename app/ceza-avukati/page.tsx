import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Ceza Hukuku",
  description:
    "Ceza soruşturmaları, ceza davaları, suç duyuruları, mali suçlar ve yabancıların ceza süreçlerinde temsiline ilişkin hukuki hizmetler.",
  path: "/ceza-hukuku",
});

export default function CezaAvukatiPage() {
  return (
    <PracticeAreaPage
      title="Ceza Hukuku"
      intro="Ceza soruşturmaları ve davaları, savcılığa suç duyurusu ve şikâyet başvuruları, dolandırıcılık ve mali suçlar ile yabancı gerçek ve tüzel kişilerin ceza süreçlerinde temsiline ilişkin hukuki hizmetler sunulur."
      schemaName="Ceza Hukuku"
      path="/ceza-hukuku"
      sections={[
        { title: "Ceza Soruşturmaları" },
        { title: "Ceza Davaları" },
        { title: "Savcılığa Suç Duyurusu ve Şikâyet Başvuruları" },
        { title: "Yabancıların Ceza Soruşturma ve Davalarında Temsili" },
        { title: "Dolandırıcılık ve Mali Suçlar" },
        { title: "Yabancı Gerçek ve Tüzel Kişilerin Suç Mağduru Olarak Temsili" },
      ]}
    />
  );
}
