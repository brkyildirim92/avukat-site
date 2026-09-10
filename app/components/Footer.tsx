"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "../lib/i18n";

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = getLocaleFromPathname(pathname) === "en";
  const footerLinks = isEnglish
    ? [
        { href: "/en", label: "Home" },
        { href: "/en/practice-areas", label: "Practice Areas" },
        { href: "/en/about", label: "About" },
        { href: "/en/articles", label: "Legal Insights" },
        { href: "/en/contact", label: "Contact" },
      ]
    : [
        { href: "/", label: "Ana Sayfa" },
        { href: "/calisma-alanlarimiz", label: "Çalışma Alanları" },
        { href: "/hakkimizda", label: "Hakkımızda" },
        { href: "/makaleler", label: "Hukuki Yayınlar" },
        { href: "/iletisim", label: "İletişim" },
      ];
  const contactPath = isEnglish ? "/en/contact" : "/iletisim";
  return (
    <footer className="relative overflow-hidden bg-[#0d243b] text-gray-300">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c69b66] to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#c69b66]/[0.06] blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#4d789a]/[0.08] blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-18">
        <div className="relative z-10 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_0.8fr_1.25fr] lg:gap-10">
          <section aria-label="Avukat Gamze Yıldırım">
            <Image
              src="/logoson1.png"
              alt="Avukat Gamze Yıldırım Logo"
              width={200}
              height={200}
              className="h-[104px] w-auto md:h-[118px]"
            />
            <p className="mt-6 max-w-sm font-serif text-xl italic leading-8 text-white/90">
              {isEnglish ? "Clarity, trust and direct communication in legal matters." : "Hukuki süreçlerde açıklık, güven ve doğrudan iletişim."}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-white/55">
              {isEnglish ? "Legal advice, representation and mediation services based in Istanbul." : "İstanbul merkezli hukuki danışmanlık, dava takibi ve arabuluculuk hizmetleri."}
            </p>
            <span className="mt-6 inline-flex border-l border-[#c69b66] pl-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c69b66]">
              {isEnglish ? "Istanbul · TÜRKİYE" : "İstanbul · Türkiye"}
            </span>
          </section>

          <section aria-labelledby="footer-social-title">
            <h2 id="footer-social-title" className="mb-6 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c69b66]">
              {isEnglish ? "Social Media" : "Sosyal Medya"}
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="https://www.linkedin.com/in/gamzeyildirimglc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 font-serif text-lg italic text-white/55 transition hover:text-[#c69b66] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66]"
                >
                  <span className="flex h-9 w-9 items-center justify-center border border-white/15 transition group-hover:border-[#c69b66] group-hover:text-[#c69b66]">
                    <FaLinkedinIn aria-hidden="true" />
                  </span>
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/avukat.gamzeyildirim/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 font-serif text-lg italic text-white/55 transition hover:text-[#c69b66] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66]"
                >
                  <span className="flex h-9 w-9 items-center justify-center border border-white/15 transition group-hover:border-[#c69b66] group-hover:text-[#c69b66]">
                    <FaInstagram aria-hidden="true" />
                  </span>
                  Instagram
                </Link>
              </li>
            </ul>
          </section>

          <nav className="relative z-20" aria-labelledby="footer-pages-title">
            <h2 id="footer-pages-title" className="mb-6 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c69b66]">
              {isEnglish ? "Pages" : "Sayfalar"}
            </h2>
            <ul className="space-y-3.5 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="group flex w-fit items-center gap-2 py-0.5 font-serif text-lg italic text-white/55 transition hover:text-[#c69b66] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66]"
                    href={link.href}
                  >
                    <span>{link.label}</span>
                    <span className="translate-x-[-4px] text-[#c69b66] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-contact-title">
            <h2 id="footer-contact-title" className="mb-6 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c69b66]">
              {isEnglish ? "Direct Contact" : "Doğrudan İletişim"}
            </h2>
            <div className="relative border border-white/10 bg-white/[0.035] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#c69b66] to-transparent" aria-hidden="true" />
            <address className="space-y-5 not-italic">
              <div>
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/40">{isEnglish ? "Location" : "Konum"}</span>
                <p className="mt-1.5 font-serif text-lg italic leading-7 text-white/55">Maslak – Bakırköy<br />{isEnglish ? "Istanbul" : "İstanbul"}</p>
              </div>
              <div>
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/40">{isEnglish ? "Telephone" : "Telefon"}</span>
                <a className="mt-1.5 inline-block font-serif text-lg italic text-white transition hover:text-[#c69b66] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66]" href="tel:+905447370009">
                  +90 544 737 00 09
                </a>
              </div>
              <div>
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/40">{isEnglish ? "Email" : "E-posta"}</span>
                <a className="mt-1.5 inline-block break-words font-serif text-[0.95rem] italic text-white transition hover:text-[#c69b66] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66] sm:text-base" href="mailto:avukat.gamzeyildirim@gmail.com">
                  avukat.gamzeyildirim@gmail.com
                </a>
              </div>
            </address>
            <Link
              href={contactPath}
              className="group mt-7 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:border-[#c69b66] hover:text-[#c69b66] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66]"
            >
              {isEnglish ? "Contact Details" : "İletişim Bilgileri"}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            </div>
          </section>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-black/[0.08]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-xs text-white/45 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {isEnglish ? "Attorney at Law" : "Av."} Gamze Yıldırım — {isEnglish ? "All rights reserved." : "Tüm Hakları Saklıdır."}</p>
          <Link href={isEnglish ? "/en/legal-notice" : "/yasal-uyari"} className="font-semibold text-white/60 transition hover:text-[#c69b66] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66]">
            {isEnglish ? "Legal Notice" : "Yasal Uyarı"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
