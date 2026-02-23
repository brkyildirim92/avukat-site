"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();

  // ✅ Ana sayfa mı?
  const isHome = pathname === "/";

  // 🎨 Hover renkleri
  const hoverColor = isHome ? "#ffffff" : "#262b3e";
  const baseColor = "#c69b65";

  return (
    <Link
      href={href}
      className={className}
      style={{
        padding: "30px 2px",
        fontSize: "18px",
        fontWeight: 400,
        fontFamily: "Poppins, sans-serif",
        color: baseColor,
        transition: "color 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = hoverColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = baseColor;
      }}
    >
      {children}
    </Link>
  );
}
