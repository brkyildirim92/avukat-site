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

          <div className="flex items-center gap-2">
            {/* SOL ÇİZGİ – AYARLANABİLİR */}
            <div
              style={{
                width: "340px",        // 🔧 BURADAN KISALT / UZAT
                height: "3px",
                backgroundColor: "#c69b65",
              }}
            />

            {/* BAŞLIK */}
            <h1
              className={`${poppins.className} text-[20px] font-medium whitespace-nowrap`}
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

