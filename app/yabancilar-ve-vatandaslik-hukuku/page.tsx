import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import { createPageMetadata } from "../lib/seo";

const path = "/yabancilar-ve-vatandaslik-hukuku";

export const metadata: Metadata = createPageMetadata({
  title: "Yabancılar ve Vatandaşlık Hukuku",
  description:
    "Türk vatandaşlığı, ikamet ve çalışma izinleri, sınır dışı etme, idari gözetim ve yabancılar hukukundan doğan idari davalara ilişkin hukuki hizmetler.",
  path,
});

export default function YabancilarVeVatandaslikHukukuPage() {
  return (
    <PracticeAreaPage
      title="Yabancılar ve Vatandaşlık Hukuku"
      intro="Türk vatandaşlığının kazanılması, yatırım yoluyla vatandaşlık, ikamet ve çalışma izinleri, sınır dışı etme, idari gözetim, tahdit kodları ve yabancılar hukukundan doğan idari davalara ilişkin hukuki hizmetler sunulur."
      schemaName="Yabancılar ve Vatandaşlık Hukuku"
      path={path}
      sections={[
        { title: "Türk Vatandaşlığının Kazanılması" },
        { title: "Yatırım Yoluyla Türk Vatandaşlığı" },
        { title: "Taşınmaz Yatırımı Yoluyla Vatandaşlık" },
        { title: "İkamet İzni Başvuruları" },
        { title: "İkamet İzni Ret ve İptal İşlemleri" },
        { title: "Çalışma İzinleri" },
        { title: "Sınır Dışı Etme Kararları" },
        { title: "İdari Gözetim Kararları" },
        { title: "Geri Gönderme Merkezlerine İlişkin Hukuki Süreçler" },
        { title: "Tahdit Kodları ve Türkiye'ye Giriş Yasakları" },
        { title: "Yabancılar Hukukundan Kaynaklanan İdari Davalar" },
      ]}
    />
  );
}
