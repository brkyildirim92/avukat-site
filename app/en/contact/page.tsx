import { Mail, MapPin, MessageCircle, Monitor, Phone } from "lucide-react";
import { playfair } from "../../fonts";
import { createPageMetadata } from "../../lib/seo";

const contactOptions = [
  { href: "tel:+905447370009", title: "Telephone", value: "+90 544 737 00 09", action: "Call Directly", icon: Phone, external: false },
  { href: "mailto:avukat.gamzeyildirim@gmail.com", title: "Email", value: "avukat.gamzeyildirim@gmail.com", action: "Send Email", icon: Mail, external: false },
  { href: "https://wa.me/905447370009", title: "WhatsApp", value: "Send a message", action: "Open WhatsApp", icon: MessageCircle, external: true },
] as const;

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Contact Attorney at Law Gamze Yıldırım by telephone, email or WhatsApp for legal enquiries in Türkiye.",
  path: "/en/contact",
  locale: "en",
});

export default function ContactPage() {
  return (
    <div className="page-fade-in bg-white">
      <section className="border-b border-[#dfe5e9] bg-[#f3f6f8] px-6 pb-14 pt-[150px] md:pb-18 md:pt-[175px]">
        <div className="mx-auto max-w-6xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#a97c2e]"><span className="h-px w-10 bg-[#c69b66]" aria-hidden="true" />Direct Contact</p>
          <h1 className={`${playfair.className} mt-5 max-w-4xl text-4xl font-medium italic leading-tight text-[#10263e] md:text-6xl`}>Let Us Assess Your Legal Matter Together</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#526273] md:text-lg">For legal enquiries and consultation requests, you may contact us directly by telephone, email or WhatsApp.</p>
        </div>
      </section>
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:items-stretch">
          <section className="relative overflow-hidden border border-[#d6dde3] bg-[linear-gradient(135deg,#e7edf1_0%,#f7f5ef_100%)] text-[#10263e]">
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#c69b66] via-[#c69b66]/40 to-transparent" aria-hidden="true" />
            <div className="relative p-6 md:p-8">
              <div className="flex flex-col justify-between gap-3 border-b border-[#cbd5dc] pb-6 sm:flex-row sm:items-end">
                <div><p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c69b66]">Contact Channels</p><h2 className={`${playfair.className} mt-3 text-3xl font-medium italic`}>Choose the Most Convenient Channel</h2></div>
                <p className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[#667487]"><span className="h-1.5 w-1.5 rounded-full bg-[#c69b66]" aria-hidden="true" />Direct Access</p>
              </div>
              <div>{contactOptions.map(({ href, title, value, action, icon: Icon, external }) => (
                <a key={title} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="group grid gap-4 border-b border-[#cbd5dc] py-6 transition duration-300 hover:bg-white/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66] focus-visible:ring-inset sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-center sm:px-3">
                  <span className="flex h-11 w-11 items-center justify-center border border-[#c1ccd4] text-[#526273] transition group-hover:border-[#c69b66] group-hover:text-[#a97c2e]"><Icon size={19} aria-hidden="true" /></span>
                  <span><span className="block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#7b8794]">{title}</span><span className={`${playfair.className} mt-1.5 block break-all text-xl italic text-[#10263e] sm:text-2xl`}>{value}</span></span>
                  <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#526273] transition group-hover:text-[#a97c2e] sm:justify-self-end">{action} <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></span>
                </a>
              ))}</div>
            </div>
          </section>
          <aside className="border border-[#d6dde3] bg-[#f4f1eb] p-6 md:p-8">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#a97c2e]">Consultation Information</p>
            <div className="mt-7 border-t border-[#d6dde3]">
              <div className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-[#d6dde3] py-6"><span className="flex h-10 w-10 items-center justify-center border border-[#c9cfd5] text-[#a97c2e]"><MapPin size={18} aria-hidden="true" /></span><div><h2 className={`${playfair.className} text-xl font-medium italic text-[#10263e]`}>Istanbul</h2><p className="mt-2 text-sm leading-7 text-[#667487]">In-person consultations in Maslak and Bakırköy.</p></div></div>
              <div className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-[#d6dde3] py-6"><span className="flex h-10 w-10 items-center justify-center border border-[#c9cfd5] text-[#a97c2e]"><Monitor size={18} aria-hidden="true" /></span><div><h2 className={`${playfair.className} text-xl font-medium italic text-[#10263e]`}>Online Consultation</h2><p className="mt-2 text-sm leading-7 text-[#667487]">Remote preliminary legal assessment throughout Türkiye.</p></div></div>
            </div>
            <div className="mt-7 border-l border-[#c69b66] pl-4"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#10263e]">Please Note</p><p className="mt-2 text-sm leading-7 text-[#667487]">The contact form is not currently active. Please use one of the direct contact channels.</p></div>
          </aside>
        </div>
        <div className="mx-auto mt-8 max-w-6xl border-t border-[#dfe5e9] pt-6"><p className="max-w-3xl text-xs leading-6 text-[#7b8794]">An initial enquiry does not establish an attorney–client relationship. Such a relationship is formed only after the scope and terms of the legal engagement have been mutually agreed.</p></div>
      </section>
    </div>
  );
}
