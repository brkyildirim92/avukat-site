import { Mail, MapPin, MessageCircle, Monitor, Phone } from "lucide-react";
import { playfair } from "../fonts";

const contactOptions = [
  {
    href: "tel:+905447370009",
    title: "Telefon",
    value: "+90 544 737 00 09",
    action: "Doğrudan Ara",
    icon: Phone,
    external: false,
  },
  {
    href: "mailto:avukat.gamzeyildirim@gmail.com",
    title: "E-posta",
    value: "avukat.gamzeyildirim@gmail.com",
    action: "E-posta Gönder",
    icon: Mail,
    external: false,
  },
  {
    href: "https://wa.me/905447370009",
    title: "WhatsApp",
    value: "Mesaj gönderin",
    action: "WhatsApp'tan Yaz",
    icon: MessageCircle,
    external: true,
  },
] as const;

export default function IletisimPage() {
  return (
    <div className="page-fade-in bg-white">
      <section className="border-b border-[#dfe5e9] bg-[#f3f6f8] px-6 pb-14 pt-[150px] md:pb-18 md:pt-[175px]">
        <div className="mx-auto max-w-6xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#a97c2e]">
            <span className="h-px w-10 bg-[#c69b66]" aria-hidden="true" />
            Doğrudan İletişim
          </p>
          <h1 className={`${playfair.className} mt-5 max-w-4xl text-4xl font-medium italic leading-tight text-[#10263e] md:text-6xl`}>
            Hukuki Durumunuzu Birlikte Değerlendirelim
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#526273] md:text-lg">
            Hukuki danışmanlık ve görüşme talepleriniz için telefon, e-posta veya WhatsApp üzerinden doğrudan iletişime geçebilirsiniz.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:items-stretch">
          <section className="relative overflow-hidden border border-[#d6dde3] bg-[linear-gradient(135deg,#e7edf1_0%,#f7f5ef_100%)] text-[#10263e]">
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#c69b66] via-[#c69b66]/40 to-transparent" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#4d789a]/10 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#c69b66]/10 blur-3xl" aria-hidden="true" />

            <div className="relative p-6 md:p-8">
              <div className="flex flex-col justify-between gap-3 border-b border-[#cbd5dc] pb-6 sm:flex-row sm:items-end">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c69b66]">
                    İletişim Kanalları
                  </p>
                  <h2 className={`${playfair.className} mt-3 text-3xl font-medium italic`}>
                    Size Uygun Kanalı Seçin
                  </h2>
                </div>
                <p className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[#667487]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c69b66] shadow-[0_0_10px_rgba(198,155,102,0.85)]" aria-hidden="true" />
                  Doğrudan Erişim
                </p>
              </div>

              <div>
                {contactOptions.map(({ href, title, value, action, icon: Icon, external }) => (
                  <a
                    key={title}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group grid gap-4 border-b border-[#cbd5dc] py-6 transition duration-300 hover:bg-white/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66] focus-visible:ring-inset sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-center sm:px-3"
                  >
                    <span className="flex h-11 w-11 items-center justify-center border border-[#c1ccd4] text-[#526273] transition duration-300 group-hover:border-[#c69b66] group-hover:text-[#a97c2e]">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#7b8794]">
                        {title}
                      </span>
                      <span className={`${playfair.className} mt-1.5 block break-all text-xl italic text-[#10263e] sm:text-2xl`}>
                        {value}
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#526273] transition group-hover:text-[#a97c2e] sm:justify-self-end">
                      {action}
                      <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <aside className="border border-[#d6dde3] bg-[#f4f1eb] p-6 md:p-8">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#a97c2e]">
              Görüşme Bilgileri
            </p>

            <div className="mt-7 border-t border-[#d6dde3]">
              <div className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-[#d6dde3] py-6">
                <span className="flex h-10 w-10 items-center justify-center border border-[#c9cfd5] text-[#a97c2e]">
                  <MapPin size={18} aria-hidden="true" />
                </span>
                <div>
                  <h2 className={`${playfair.className} text-xl font-medium italic text-[#10263e]`}>
                    İstanbul
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#667487]">
                    Maslak ve Bakırköy merkezli yüz yüze görüşme.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-[#d6dde3] py-6">
                <span className="flex h-10 w-10 items-center justify-center border border-[#c9cfd5] text-[#a97c2e]">
                  <Monitor size={18} aria-hidden="true" />
                </span>
                <div>
                  <h2 className={`${playfair.className} text-xl font-medium italic text-[#10263e]`}>
                    Online Danışmanlık
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#667487]">
                    Türkiye genelinde uzaktan hukuki değerlendirme.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 border-l border-[#c69b66] pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#10263e]">
                Bilgilendirme
              </p>
              <p className="mt-2 text-sm leading-7 text-[#667487]">
                İletişim formu şu anda aktif değildir. Talepleriniz için doğrudan iletişim kanallarını kullanabilirsiniz.
              </p>
            </div>
          </aside>
        </div>

        <div className="mx-auto mt-8 max-w-6xl border-t border-[#dfe5e9] pt-6">
          <p className="max-w-3xl text-xs leading-6 text-[#7b8794]">
            İlk iletişiminiz doğrudan değerlendirilir. Avukatlık hizmet ilişkisi, hukuki konunun kapsamı ve çalışma koşullarının karşılıklı olarak belirlenmesiyle kurulur.
          </p>
        </div>
      </section>
    </div>
  );
}
