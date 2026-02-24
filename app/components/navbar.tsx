"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import { Poppins } from "next/font/google";
import { Menu, X } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Navbar({ shrink = false }: { shrink?: boolean }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/calisma-alanlarimiz", label: "Çalışma Alanlarımız" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/makaleler", label: "Makaleler" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <nav
      data-shrink={shrink}
      className="
        relative w-full px-4 md:px-16 lg:px-24
        flex justify-between items-center
        h-[90px] md:h-[110px]
        transition-all duration-300
        data-[shrink=true]:h-[72px]
      "
    >
      {/* LOGO */}
      <Link href="/">
        <Image
          src="/logoson1.png"
          alt="Logo"
          width={180}
          height={180}
          priority
          className="
            h-[70px] md:h-[86px] w-auto
            transition-all duration-300
            data-[shrink=true]:h-[56px]
          "
        />
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            className={poppins.className}
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* HAMBURGER */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menüyü Aç / Kapat"
        className="
          md:hidden text-[#c69b65]
          transition-all duration-300
          hover:text-[#8c6b2f]
          active:scale-90
        "
      >
        {open ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* MOBILE MENU */}
      <div
        className={`
          absolute top-full left-0 w-full md:hidden
          bg-[rgba(38,43,62,0.55)]
          border-t border-[#c69b65]/40
          shadow-[0_20px_40px_rgba(0,0,0,0.18)]
          transition-all duration-500 ease-out
          ${open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
style={{
  backdropFilter: open
    ? "blur(28px) brightness(1.15)"
    : "blur(10px)",
  WebkitBackdropFilter: open
    ? "blur(28px) brightness(1.15)"
    : "blur(10px)",
}}
      >
        {/* ALTIN ÇİZGİ */}
        <div className="h-[3px] w-16 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#8c6b2f] via-[#c69b65] to-[#8c6b2f]" />

        {/* OVAL CARD MENU ITEMS */}
        <div className="flex flex-col items-center py-10 gap-4">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 70}ms` }}
className="
  text-lg font-medium tracking-wide
  text-white/90
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
        </div>
      </div>
    </nav>
  );
}