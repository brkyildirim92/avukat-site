import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "İletişim",
  description:
    "Avukat Gamze Yıldırım'a telefon, e-posta veya WhatsApp üzerinden ulaşabileceğiniz iletişim bilgileri.",
  path: "/iletisim",
});

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return children;
}
