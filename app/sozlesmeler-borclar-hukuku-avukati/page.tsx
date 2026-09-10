import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Borçlar ve Sözleşmeler Hukuku",
  description:
    "Sözleşmelerin hazırlanması, incelenmesi ve sözleşmeden doğan uyuşmazlıklara ilişkin süreçler hakkında genel bilgi.",
  path: "/borclar-ve-sozlesmeler-hukuku",
});

export default function SozlesmelerHukukuAvukatiPage() {
  return (
    <PracticeAreaPage
      title="Borçlar ve Sözleşmeler Hukuku"
      intro="Sözleşmelerin hazırlanması ve incelenmesi ile sözleşmeden doğan uyuşmazlıklarda tarafların hak ve yükümlülükleri, somut ilişkinin özelliklerine göre değerlendirilir."
      schemaName="Borçlar ve Sözleşmeler Hukuku"
      path="/borclar-ve-sozlesmeler-hukuku"
      sections={[
        {
          title: "Sözleşme Hazırlama ve İnceleme",
          text: "Tüm ticari ve özel sözleşmelerin hukuka uygun şekilde hazırlanması ve incelenmesi sağlanır.",
        },
        {
          title: "Borç İlişkileri ve Uyuşmazlıklar",
          text: "Borç ilişkilerinden doğan anlaşmazlıklar, alacak-tahsil süreçleri ve borç ödemeleri hukuki olarak yönetilir.",
        },
        {
          title: "Tazminat ve Hak Talepleri",
          text: "Sözleşme ihlalleri veya borçların yerine getirilmemesi durumunda tazminat ve hak taleplerinin takibi yapılır.",
        },
      ]}
    />
  );
}
