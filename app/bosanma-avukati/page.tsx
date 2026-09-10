import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Aile ve Uluslararası Aile Hukuku",
  description:
    "Boşanma, velayet, nafaka, mal rejimi ve uluslararası aile hukuku uyuşmazlıklarına ilişkin hukuki hizmetler.",
  path: "/aile-hukuku",
});

export default function BosanmaAvukatiPage() {
  return (
    <PracticeAreaPage
      title="Aile ve Uluslararası Aile Hukuku"
      intro="Boşanma davaları, velayet, nafaka, mal rejiminin tasfiyesi, yabancıların Türkiye'deki boşanma davaları ve yabancı aile hukuku kararlarının Türkiye'de tanınmasına ilişkin hukuki hizmetler sunulur."
      schemaName="Aile ve Uluslararası Aile Hukuku"
      path="/aile-hukuku"
      sections={[
        { title: "Boşanma Davaları" },
        { title: "Yabancıların Türkiye'deki Boşanma Davaları" },
        { title: "Anlaşmalı ve Çekişmeli Boşanma" },
        { title: "Velayet" },
        { title: "Nafaka" },
        { title: "Mal Rejiminin Tasfiyesi" },
        { title: "Uluslararası Aile Hukuku Uyuşmazlıkları" },
        { title: "Yabancı Boşanma ve Aile Hukuku Kararlarının Türkiye'de Tanınması" },
      ]}
    />
  );
}
