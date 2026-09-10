import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Şirketler ve Ticaret Hukuku",
  description:
    "Şirket kuruluşu, ticari sözleşmeler, hisse devirleri, şirket ve ortaklık uyuşmazlıklarına ilişkin hukuki hizmetler.",
  path: "/ticaret-hukuku",
});

export default function TicaretHukukuAvukatiPage() {
  return (
    <PracticeAreaPage
      title="Şirketler ve Ticaret Hukuku"
      intro="Türkiye'de şirket kuruluşu, yabancı sermayeli şirketlere danışmanlık, ticari sözleşmeler, hisse devirleri, şirket ve ortaklık uyuşmazlıkları ile uluslararası ticari ilişkilere ilişkin hukuki hizmetler sunulur."
      schemaName="Şirketler ve Ticaret Hukuku"
      path="/ticaret-hukuku"
      sections={[
        { title: "Türkiye'de Şirket Kuruluşu" },
        { title: "Yabancı Sermayeli Şirketlere Hukuki Danışmanlık" },
        { title: "Şirketler Hukuku Danışmanlığı" },
        { title: "Ticari Sözleşmelerin Hazırlanması ve İncelenmesi" },
        { title: "Şirket Hisse Devirleri" },
        { title: "Şirket ve Ortaklık Uyuşmazlıkları" },
        { title: "Ticari Uyuşmazlıklar" },
        { title: "Uluslararası Ticari İlişkilere İlişkin Hukuki Danışmanlık" },
      ]}
    />
  );
}
