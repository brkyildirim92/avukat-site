"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
  className,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  const pathname = usePathname();

  const isRootLink = href === "/" || href === "/en";
  const isActive = isRootLink ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`${className ?? ""} relative px-1 py-3 text-[0.95rem] tracking-[-0.01em] outline-none transition-[color,transform] duration-300 after:absolute after:bottom-1 after:left-1/2 after:h-px after:-translate-x-1/2 after:bg-[#c69b66] after:transition-[width,opacity] after:duration-300 hover:-translate-y-px focus-visible:text-[#a97c2e] focus-visible:after:w-full focus-visible:after:opacity-100 ${light ? "text-white/90 hover:text-[#e6c87f]" : "text-[#17283b] hover:text-[#9b702a]"} ${isActive ? "font-semibold after:w-full after:opacity-100" : "font-medium after:w-0 after:opacity-0 hover:after:w-full hover:after:opacity-100"}`}
    >
      {children}
    </Link>
  );
}
