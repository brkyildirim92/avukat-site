"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, getLocalizedPath } from "../lib/i18n";

export default function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const trPath = getLocalizedPath(pathname, "tr");
  const enPath = getLocalizedPath(pathname, "en");

  return (
    <div
      aria-label={locale === "en" ? "Language selection" : "Dil seçimi"}
      className={`inline-flex items-center border border-[#c9d1d8] bg-white/70 font-semibold tracking-[0.12em] shadow-[0_5px_18px_rgba(16,38,62,0.06)] backdrop-blur-xl ${mobile ? "mt-3 p-1 text-[0.68rem]" : "p-0.5 text-[0.62rem]"}`}
    >
      <Link
        href={trPath}
        lang="tr"
        hrefLang="tr-TR"
        aria-current={locale === "tr" ? "page" : undefined}
        className={`${mobile ? "px-2.5 py-1.5" : "px-2 py-1.5"} transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66] ${locale === "tr" ? "bg-[#10263e] text-white" : "text-[#667487] hover:text-[#10263e]"}`}
      >
        TR
      </Link>
      <Link
        href={enPath}
        lang="en"
        hrefLang="en"
        aria-current={locale === "en" ? "page" : undefined}
        className={`${mobile ? "px-2.5 py-1.5" : "px-2 py-1.5"} transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66] ${locale === "en" ? "bg-[#10263e] text-white" : "text-[#667487] hover:text-[#10263e]"}`}
      >
        EN
      </Link>
    </div>
  );
}
