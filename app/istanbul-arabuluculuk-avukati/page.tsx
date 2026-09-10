import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Arabuluculuk",
  description:
    "İş, ticaret ve arabuluculuğa elverişli diğer uyuşmazlıklarda arabuluculuk süreci hakkında genel bilgi.",
  path: "/arabuluculuk",
});

export default function ArabuluculukPage() {
  return (
    <PracticeAreaPage
      title="Arabuluculuk"
      intro="Arabuluculuk, tarafların uyuşmazlığı dava öncesinde veya dava sırasında müzakere yoluyla çözmelerine imkân tanıyan alternatif bir uyuşmazlık çözüm yöntemidir."
      schemaName="Arabuluculuk"
      path="/arabuluculuk"
      sections={[
        {
          title: "İş Hukuku Arabuluculuğu",
          text: "İşçi ve işveren arasında ortaya çıkan uyuşmazlıkların çözümünde zorunlu arabuluculuk süreci profesyonel şekilde yürütülür.",
        },
        {
          title: "Ticari Uyuşmazlıklarda Arabuluculuk",
          text: "Şirketler ve ticari taraflar arasında ortaya çıkan uyuşmazlıkların hızlı ve etkin şekilde çözülmesi için arabuluculuk süreci uygulanır.",
        },
        {
          title: "Uyuşmazlık Çözüm Süreci",
          text: "Tarafların anlaşmaya varmasını kolaylaştıran arabuluculuk görüşmeleri ile mahkeme sürecine gerek kalmadan çözüm sağlanması hedeflenir.",
        },
      ]}
    />
  );
}
