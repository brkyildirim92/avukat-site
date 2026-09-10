import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Dava, İcra ve Alacak Takibi",
  description:
    "Hukuk ve ticaret davaları, alacak tahsili, icra takipleri ve mahkeme kararlarının icrasına ilişkin hukuki hizmetler.",
  path: "/icra-ve-iflas-hukuku",
});

export default function IcraIflasAvukatiPage() {
  return (
    <PracticeAreaPage
      title="Dava, İcra ve Alacak Takibi"
      intro="Hukuk ve ticaret davaları, Türkiye'de alacak tahsili, icra takipleri ve itirazlar, mahkeme kararlarının icrası, ihtiyati tedbir ve haciz ile yabancı kişilerin Türk mahkemelerinde temsiline ilişkin hukuki hizmetler sunulur."
      schemaName="Dava, İcra ve Alacak Takibi"
      path="/icra-ve-iflas-hukuku"
      sections={[
        { title: "Hukuk Davaları" },
        { title: "Ticari Davalar" },
        { title: "Türkiye'de Alacak Tahsili" },
        { title: "İcra Takipleri" },
        { title: "İcra Takiplerine İtiraz ve İtirazın İptali Davaları" },
        { title: "Mahkeme Kararlarının İcrası" },
        { title: "İhtiyati Tedbir ve İhtiyati Haciz" },
        { title: "Yabancı Gerçek ve Tüzel Kişilerin Türk Mahkemeleri Önünde Temsili" },
      ]}
    />
  );
}
