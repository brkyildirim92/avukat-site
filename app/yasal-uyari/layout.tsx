import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({
  title: "Yasal Uyarı",
  description:
    "Avukat Gamze Yıldırım internet sitesine ilişkin genel kullanım koşulları ve yasal bilgilendirme.",
  path: "/yasal-uyari",
});

export default function YasalUyariLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#262b3e] text-gray-200 min-h-screen">
      {children}
    </div>
  );
}
