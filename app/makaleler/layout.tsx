import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({
  title: "Hukuk Makaleleri",
  description:
    "Çeşitli hukuk alanlarındaki temel kavram ve süreçlere ilişkin genel bilgilendirme yazıları.",
  path: "/makaleler",
});

export default function MakalelerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-white">{children}</div>;
}
