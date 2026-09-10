import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Gayrimenkul ve Taşınmaz Hukuku",
  description:
    "Taşınmaz edinimi, tapu işlemleri, hukuki inceleme, kira ve gayrimenkul uyuşmazlıklarına ilişkin hukuki hizmetler.",
  path: "/gayrimenkul-hukuku",
});

export default function GayrimenkulAvukatiPage() {
  return (
    <PracticeAreaPage
      title="Gayrimenkul ve Taşınmaz Hukuku"
      intro="Yabancıların Türkiye'de taşınmaz edinimi, alım ve satım işlemleri, tapu kayıtları, hukuki inceleme, gayrimenkul ve kira sözleşmeleri, tahliye ve taşınmaz uyuşmazlıklarına ilişkin hukuki hizmetler sunulur."
      schemaName="Gayrimenkul ve Taşınmaz Hukuku"
      path="/gayrimenkul-hukuku"
      sections={[
        { title: "Yabancıların Türkiye'de Taşınmaz Edinimi" },
        { title: "Taşınmaz Alım ve Satım İşlemleri" },
        { title: "Tapu İşlemleri" },
        { title: "Vekâletname ile Tapu İşlemleri" },
        { title: "Tapu Kayıtlarının Güncellenmesi" },
        { title: "Tapu Şerh ve Kısıtlamalarının Kaldırılması" },
        { title: "Taşınmaz Alımı Öncesi Hukuki İnceleme" },
        { title: "Satış ve Ödeme Belgelerinin Hukuki Kontrolü" },
        { title: "Gayrimenkul Sözleşmeleri" },
        { title: "Kira Sözleşmeleri" },
        { title: "Kiracı – Kiraya Veren Uyuşmazlıkları" },
        { title: "Tahliye Davaları ve Tahliye Takipleri" },
        { title: "Kira Alacaklarının Tahsili" },
        { title: "Gayrimenkul Uyuşmazlıkları" },
      ]}
    />
  );
}
