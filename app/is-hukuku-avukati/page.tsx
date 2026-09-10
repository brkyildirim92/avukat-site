import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "İş ve İstihdam Hukuku",
  description:
    "İş sözleşmeleri, fesih, işçilik alacakları, işe iade ve iş uyuşmazlıklarına ilişkin hukuki hizmetler.",
  path: "/is-hukuku",
});

export default function IsHukukuAvukatiPage() {
  return (
    <PracticeAreaPage
      title="İş ve İstihdam Hukuku"
      intro="İş sözleşmelerinin hazırlanması ve incelenmesi, işveren danışmanlığı, fesih, disiplin ve performans süreçleri, işçilik alacakları, işe iade ve arabuluculuğa ilişkin hukuki hizmetler sunulur."
      schemaName="İş ve İstihdam Hukuku"
      path="/is-hukuku"
      sections={[
        { title: "İş Sözleşmelerinin Hazırlanması ve İncelenmesi" },
        { title: "İşverenlere Hukuki Danışmanlık" },
        { title: "Yabancı Sermayeli Şirketlere İş Hukuku Danışmanlığı" },
        { title: "İş Sözleşmelerinin Feshi" },
        { title: "Disiplin ve Performans Süreçleri" },
        { title: "Kıdem ve İhbar Tazminatı" },
        { title: "İşçilik Alacakları" },
        { title: "İşe İade Davaları" },
        { title: "İş Uyuşmazlıkları ve Arabuluculuk" },
      ]}
    />
  );
}
