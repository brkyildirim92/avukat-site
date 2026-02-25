import { poppins } from "@/app/layout";

export default function HakkimizdaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white min-h-screen">

      {/* 🔹 SAYFA BAŞLIĞI */}
      <div className="pt-[140px] pb-16">
        <div className="px-6">

          <div
            className="
              flex items-center gap-3
              justify-center md:justify-start
            "
          >
            {/* SOL ÇİZGİ */}
            <div
              className="
                h-[3px]
                w-16 sm:w-24 md:w-[260px] lg:w-[390px]
                bg-[#c69b65]
                rounded-full
              "
            />

            {/* BAŞLIK */}
            <h1
              className={`
                ${poppins.className}
                text-[18px] md:text-[20px]
                font-medium
                whitespace-nowrap
              `}
              style={{ color: "#c69b65" }}
            >
              Avukat Gamze Yıldırım
            </h1>
          </div>

        </div>
      </div>

      {/* 📄 SAYFA İÇERİĞİ */}
      <main className="max-w-7xl mx-auto px-6 pb-32">
        {children}
      </main>

    </div>
  );
}