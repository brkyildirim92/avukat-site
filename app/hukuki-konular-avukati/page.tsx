import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Yabancı Mahkeme Kararlarının Tanınması ve Tenfizi",
  description:
    "Yabancı mahkeme kararlarının tanınması, tenfizi ve uluslararası özel hukuk uyuşmazlıklarına ilişkin hukuki hizmetler.",
  path: "/yabanci-mahkeme-kararlarinin-taninmasi-ve-tenfizi",
});

export default function DigerHukukiKonularPage() {
  return (
    <PracticeAreaPage
      title="Yabancı Mahkeme Kararlarının Tanınması ve Tenfizi"
      intro="Yabancı mahkeme kararlarının tanınması ve tenfizi, yabancı boşanma, alacak, tazminat, velayet ve aile hukuku kararları ile uluslararası özel hukuktan doğan uyuşmazlıklara ilişkin hukuki hizmetler sunulur."
      schemaName="Yabancı Mahkeme Kararlarının Tanınması ve Tenfizi"
      path="/yabanci-mahkeme-kararlarinin-taninmasi-ve-tenfizi"
      sections={[
        { title: "Yabancı Mahkeme Kararlarının Tanınması" },
        { title: "Yabancı Mahkeme Kararlarının Tenfizi" },
        { title: "Yabancı Boşanma Kararlarının Tanınması" },
        { title: "Yabancı Mahkemelerce Verilen Alacak ve Tazminat Kararlarının Tenfizi" },
        { title: "Yabancı Velayet ve Aile Hukuku Kararlarının Tanınması" },
        { title: "Uluslararası Özel Hukuktan Kaynaklanan Uyuşmazlıklar" },
      ]}
    />
  );
}
