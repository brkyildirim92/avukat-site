"use client";

import { cloneElement, isValidElement, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ScrollNavbar({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/en";
  const transparent = isHomePage && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ${transparent ? "border-white/15 bg-[#061f36]/20 backdrop-blur-md" : "border-[#d8e1e8]/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.90),rgba(248,251,253,0.84))] shadow-[0_10px_34px_rgba(16,38,62,0.09)] backdrop-blur-[26px] backdrop-saturate-[1.15]"}`}
    >
      <div>
        {isValidElement<{ shrink?: boolean }>(children)
          ? cloneElement(children, { shrink: scrolled })
          : children}
      </div>
    </header>
  );
}
