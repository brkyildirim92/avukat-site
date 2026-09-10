import Image from "next/image";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { playfair } from "../fonts";
import { createBreadcrumbJsonLd, createProfilePageJsonLd } from "../lib/seo";

const aboutSections = [
  {
    title: "Hukuki Hizmet Anlayışı",
    text: "Avukat Gamze Yıldırım, İstanbul merkezli olarak bireysel ve kurumsal müvekkillerine hukuki danışmanlık ve dava takibi hizmeti sunmaktadır. Hukuki süreçlerde doğru analiz, şeffaf iletişim ve çözüm odaklı yaklaşım esas alınmakta; her dosya, somut olayın özellikleri dikkate alınarak titizlikle değerlendirilmekte ve müvekkillerin ihtiyaçlarına uygun stratejiler geliştirilmektedir.",
  },
  {
    title: "Önleyici Hukuk ve Süreç Yönetimi",
    text: "Sürecin her aşamasında müvekkiller düzenli olarak bilgilendirilmekte, hukuki riskler öngörülerek etkin ve planlı bir süreç yönetimi sağlanmaktadır. Uyuşmazlıkların çözümüne yönelik faaliyetlerin yanı sıra, önleyici hukuk anlayışı çerçevesinde, potansiyel hukuki risklerin henüz ortaya çıkmadan tespit edilmesi ve bu risklerin en aza indirilmesine yönelik danışmanlık hizmetleri sunulmaktadır. Bu kapsamda, sözleşmesel ilişkilerin yapılandırılması, hukuki denetim ve süreçlerin mevzuata uygun şekilde yürütülmesi hususlarında müvekkillere destek sağlanmaktadır.",
  },
  {
    title: "Uzun Vadeli Hukuki Güven",
    text: "Bireysel ve kurumsal müvekkillerin faaliyet alanlarına ve ihtiyaçlarına özel olarak geliştirilen hukuki çözümler ile yalnızca mevcut uyuşmazlıkların çözümü değil, aynı zamanda uzun vadeli hukuki güvenliğin sağlanması ve olası risklerin önlenmesi hedeflenmektedir. Bu doğrultuda, güvenilir, sürdürülebilir ve etkin bir hukuki hizmet anlayışı benimsenmektedir.",
  },
] as const;

const romanNumbers = ["I", "II", "III"] as const;

export default function HakkimizdaPage() {
  const profilePageJsonLd = createProfilePageJsonLd();
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Ana Sayfa", path: "/" },
    { name: "Hakkımızda", path: "/hakkimizda" },
  ]);

  return (
    <>
      <JsonLd data={profilePageJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <div className="page-fade-in">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_25rem] lg:items-start">
        <article aria-label="Avukat Gamze Yıldırım hakkında" className="border-t border-[#d6dde3]">
          {aboutSections.map((section, index) => (
            <section
              key={section.title}
              className="grid gap-4 border-b border-[#d6dde3] py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-6 md:py-10"
            >
              <span className="pt-1 font-serif text-sm italic text-[#a97c2e]" aria-hidden="true">
                {romanNumbers[index]}
              </span>
              <div>
                <h2 className={`${playfair.className} text-2xl font-medium italic leading-tight text-[#10263e] md:text-[1.8rem]`}>
                  {section.title}
                </h2>
                <p className="mt-4 leading-8 text-[#667487]">{section.text}</p>
              </div>
            </section>
          ))}
        </article>

        <aside className="lg:sticky lg:top-32">
          <Image
            src="/hakkimizda2.jpg"
            alt="Avukat Gamze Yıldırım"
            width={640}
            height={480}
            priority
            className="w-full rounded-2xl object-cover shadow-lg"
          />

          <div className="mt-6 border border-[#d6dde3] bg-[#f4f1eb] p-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#a97c2e]">
              Çalışma İlkeleri
            </p>
            <p className={`${playfair.className} mt-4 text-2xl font-medium italic leading-snug text-[#10263e]`}>
              Güven, açıklık ve doğrudan iletişim.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#667487]">
              Hukuki meseleler somut koşulları içinde değerlendirilir; süreç ve izlenebilecek yollar anlaşılır biçimde paylaşılır.
            </p>
            <Link
              href="/iletisim"
              className="group mt-6 inline-flex w-full items-center justify-center gap-3 bg-[#10263e] px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#c69b66] hover:text-[#10263e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66] focus-visible:ring-offset-4"
            >
              İletişime Geç
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </aside>
      </div>
      </div>
    </>
  );
}
