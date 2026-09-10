import { playfair } from "../fonts";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({
  title: "Çalışma Alanlarımız",
  description:
    "Avukat Gamze Yıldırım'ın mesleki faaliyet gösterdiği hukuk alanları hakkında genel bilgiler.",
  path: "/calisma-alanlarimiz",
});

export default function CalismaAlanlariLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <section className="border-b border-[#dfe5e9] bg-[#f3f6f8] px-6 pb-14 pt-[150px] md:pb-18 md:pt-[175px]">
        <div className="mx-auto max-w-6xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#a97c2e]">
            <span className="h-px w-10 bg-[#c69b66]" aria-hidden="true" />
            Hukuki Hizmetler
          </p>
          <h1 className={`${playfair.className} mt-5 text-4xl font-medium italic leading-tight text-[#10263e] md:text-6xl`}>
            Çalışma Alanlarımız
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#526273] md:text-lg">
            Hukuki ihtiyaçlarınız, somut olayın koşulları ve yürürlükteki mevzuat çerçevesinde değerlendirilir; sürece uygun danışmanlık ve temsil desteği sunulur.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">{children}</div>
      </section>
    </div>
  );
}
