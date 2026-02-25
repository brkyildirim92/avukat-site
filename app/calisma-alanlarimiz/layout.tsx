import { poppins } from "@/app/layout";

export default function CalismaAlanlariLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white min-h-screen">

      {/* 🔹 SAYFA BAŞLIĞI */}
      <div className="pt-[140px] pb-16">
        <div className="px-6">

          <div className="flex items-center gap-2">     {/* çizgi ile olan boşluğu arttır yada azalt */}

            {/* SOL ÇİZGİ – NET */}
            <div
              style={{
                width: "390px",        // 🔧 BURADAN KISALT / UZAT
                height: "3px",
                backgroundColor: "#c69b65",
              }}
            />

            {/* BAŞLIK */}
            <h1
              className={`${poppins.className} text-[20px] font-medium whitespace-nowrap`}
              style={{ color: "#c69b65" }}
            >
               Çalışma Alanlarımız
            </h1>

          </div>

        </div>
      </div>

      {/* 📄 SAYFA İÇERİĞİ */}
      <main className="max-w-3xl mx-auto px-6 pb-32">
        {children}
      </main>

    </div>
  );
}



