"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import { Poppins } from "next/font/google";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { getLocaleFromPathname } from "../lib/i18n";
import { practiceAreas } from "../data/practiceAreas";
import { practiceAreasEn } from "../data/practiceAreas.en";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Navbar({ shrink = false }: { shrink?: boolean }) {
  const [open, setOpen] = useState(false);
  const [practiceMenuOpen, setPracticeMenuOpen] = useState(false);
  const pathname = usePathname();
  const isEnglish = getLocaleFromPathname(pathname) === "en";
  const homePath = isEnglish ? "/en" : "/";
  const contactPath = isEnglish ? "/en/contact" : "/iletisim";
  const light = (pathname === "/" || pathname === "/en") && !shrink;

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setPracticeMenuOpen(false);
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const links = isEnglish
    ? [
        { href: "/en", label: "Home" },
        { href: "/en/practice-areas", label: "Practice Areas" },
        { href: "/en/about", label: "About" },
        { href: "/en/articles", label: "Legal Insights" },
        { href: "/en/contact", label: "Contact" },
      ]
    : [
        { href: "/", label: "Ana Sayfa" },
        { href: "/calisma-alanlarimiz", label: "Çalışma Alanlarımız" },
        { href: "/hakkimizda", label: "Hakkımızda" },
        { href: "/makaleler", label: "Hukuki Yayınlar" },
        { href: "/iletisim", label: "İletişim" },
      ];

  return (
    <nav
      data-shrink={shrink}
      className="
        relative mx-auto w-full max-w-[90rem] px-5 md:px-8 lg:px-8
        flex justify-between items-center
        h-[84px] md:h-[100px]
        transition-all duration-300
        data-[shrink=true]:h-[72px]
      "
    >
      {/* LOGO */}
      <Link href={homePath}>
        <Image
          data-shrink={shrink}
          src="/logoson1.png"
          alt={isEnglish ? "Attorney at Law Gamze Yıldırım home" : "Avukat Gamze Yıldırım ana sayfa"}
          width={180}
          height={180}
          priority
          className="
            h-[72px] md:h-[92px] w-auto
            transition-all duration-300
            data-[shrink=true]:h-[56px]
          "
        />
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden items-center gap-4 md:flex">
        {links.map((link, index) => {
          const isPracticeAreasLink = index === 1;

          if (!isPracticeAreasLink) {
            return (
              <NavLink
                key={link.href}
                href={link.href}
                className={poppins.className}
                light={light}
              >
                {link.label}
              </NavLink>
            );
          }

          const menuAreas = isEnglish ? practiceAreasEn : practiceAreas;

          return (
            <div
              key={link.href}
              className="relative flex h-full items-center"
              onMouseEnter={() => setPracticeMenuOpen(true)}
              onMouseLeave={() => setPracticeMenuOpen(false)}
              onFocus={() => setPracticeMenuOpen(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setPracticeMenuOpen(false);
                }
              }}
            >
              <div className="flex items-center gap-1">
                <NavLink
                  href={link.href}
                  className={poppins.className}
                  light={light}
                >
                  {link.label}
                </NavLink>
                <ChevronDown
                  aria-hidden="true"
                  size={15}
                  strokeWidth={1.8}
                  className={`pointer-events-none transition-transform duration-300 ${practiceMenuOpen ? "rotate-180" : ""} ${light ? "text-white/75" : "text-[#536273]"}`}
                />
              </div>

              <div
                aria-hidden={!practiceMenuOpen}
                className={`fixed left-1/2 z-50 w-[min(1120px,calc(100vw-64px))] -translate-x-1/2 transition-[opacity,transform,visibility] duration-300 ${practiceMenuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}
                style={{ top: shrink ? 72 : 100 }}
              >
                <div className="relative overflow-hidden border border-[#c69b65]/45 bg-[#0c2742]/[0.985] shadow-[0_28px_65px_rgba(4,20,36,0.30)] backdrop-blur-2xl">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4ae5a] to-transparent" />
                  <div className="grid grid-cols-2 gap-x-9 px-8 pb-5 pt-7 lg:grid-cols-3 lg:px-10">
                    {menuAreas.map((area) => (
                      <Link
                        key={area.link}
                        href={area.link}
                        tabIndex={practiceMenuOpen ? 0 : -1}
                        onClick={() => setPracticeMenuOpen(false)}
                        className="group/area border-b border-white/10 py-3.5 outline-none transition-colors duration-300 hover:border-[#d4ae5a]/55 focus-visible:border-[#d4ae5a]"
                      >
                        <span className={`${poppins.className} flex items-start justify-between gap-3 text-[0.88rem] font-semibold leading-snug text-white transition-colors duration-300 group-hover/area:text-[#e4c579] group-focus-visible/area:text-[#e4c579]`}>
                          {area.title}
                          <span aria-hidden="true" className="mt-px text-[#d4ae5a] transition-transform duration-300 group-hover/area:translate-x-1">→</span>
                        </span>
                        <span className={`${poppins.className} mt-1 block line-clamp-2 text-[0.72rem] leading-relaxed text-[#b5c2ce]`}>
                          {area.shortDescription}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="mx-8 flex items-center justify-between gap-6 border-t border-white/15 py-4 lg:mx-10">
                    <p className={`${poppins.className} text-xs leading-relaxed text-[#b5c2ce]`}>
                      {isEnglish
                        ? "Not sure which practice area applies? We can assess the legal route together."
                        : "Hangi çalışma alanının uygun olduğundan emin değil misiniz? Hukuki yolu birlikte değerlendirebiliriz."}
                    </p>
                    <Link
                      href={contactPath}
                      tabIndex={practiceMenuOpen ? 0 : -1}
                      onClick={() => setPracticeMenuOpen(false)}
                      className={`${poppins.className} shrink-0 bg-[#d4ae5a] px-5 py-2.5 text-xs font-semibold text-[#10263e] transition-colors duration-300 hover:bg-[#e4c579] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white`}
                    >
                      {isEnglish ? "Discuss your matter" : "Konunuzu değerlendirelim"} →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <Link
          href={contactPath}
          className={`ml-1 px-5 py-3 text-sm font-semibold shadow-[0_8px_20px_rgba(16,38,62,0.08)] transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98c3c] focus-visible:ring-offset-2 lg:px-6 ${light ? "bg-[#d4ae5a] text-[#10263e] hover:bg-[#e1c273]" : "bg-[#10263e] text-white hover:bg-[#b98c3c]"}`}
        >
          {isEnglish ? "Request a consultation" : "Görüşme talebi"} →
        </Link>
        <LanguageSwitcher />
      </div>

      {/* HAMBURGER */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={isEnglish ? "Open / Close Menu" : "Menüyü Aç / Kapat"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className="
          md:hidden rounded-md p-2
          transition-all duration-300
          hover:text-[#b98c3c]
          active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b65]
        "
        style={{ color: open ? "#10263e" : light ? "white" : "#10263e" }}
      >
        {open ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* MOBILE MENU */}
      <div
        id="mobile-navigation"
        aria-hidden={!open}
        className={`
          absolute top-full left-0 w-full md:hidden
          border-t border-[#d8e1e8]/80
          bg-[rgba(255,255,255,0.97)] backdrop-blur-[28px]
          shadow-[0_20px_40px_rgba(0,0,0,0.18)]
          transition-all duration-500 ease-out
          ${open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        {/* ALTIN ÇİZGİ */}
        <div className="h-[2px] w-16 mx-auto mt-4 bg-[#b98c3c]" />

        {/* OVAL CARD MENU ITEMS */}
        <div className="flex flex-col items-center py-8 gap-3">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              style={{ transitionDelay: `${i * 70}ms` }}
className="
  text-lg font-medium tracking-wide
  text-[#17283b]
  transition-all duration-300
  hover:text-[#c69b65]
  hover:scale-105
  relative
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  after:bg-[#c69b65]
  after:transition-all after:duration-300
  hover:after:w-full
"
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher mobile />
          <Link
            href={contactPath}
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="mt-3 bg-[#10263e] px-8 py-3.5 text-sm font-semibold text-white"
          >
            {isEnglish ? "Request a consultation" : "Görüşme talebi"} →
          </Link>
        </div>
      </div>
    </nav>
  );
}
