import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const footerPaddingY = "py-16"; // 👈 üst footer yüksekliği (burayı rahatça değiştir)

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#262b3e" }} className="text-gray-300">

      {/* ================= ÜST FOOTER ================= */}
      <div className={`max-w-5xl mx-auto px-6 ${footerPaddingY}`}>

        <div className="flex flex-col md:flex-row items-start gap-10">

          {/* SOL – LOGO */}
          <div className="shrink-0">
            <Image
              src="/logoson1.png"
              alt="Avukat Gamze Yıldırım Logo"
              width={200}
              height={200}
              className="h-[100px] w-auto"
              priority
            />
          </div>

          {/* ORTA BOŞLUK */}
          <div className="flex-1" />

          {/* SAĞ – KOLONLAR */}
          <div className="max-w-[520px]">
            <div className="flex flex-col md:flex-row gap-10">

{/* SOSYAL MEDYA */}
<div>
  <h4
    className="text-sm font-semibold mb-4 uppercase"
    style={{ color: "#c69b65" }}
  >
    Sosyal Medya
  </h4>
  <ul className="space-y-3 text-sm">

    <li className="hover:text-white transition">
      <Link
        href="https://www.linkedin.com/in/KULLANICI_ADIN"
        target="_blank"
        className="flex items-center gap-3"
      >
        <FaLinkedinIn /> LinkedIn
      </Link>
    </li>

    <li className="hover:text-white transition">
      <Link
        href="https://www.instagram.com/avukat.gamzeyildirim/"
        target="_blank"
        className="flex items-center gap-3"
      >
        <FaInstagram /> Instagram
      </Link>
    </li>

  </ul>
</div>


              {/* SAYFALAR */}
              <div>
                <h4
                  className="text-sm font-semibold mb-6 uppercase"
                  style={{ color: "#c69b65" }}
                >
                  Sayfalar
                </h4>
                <ul className="space-y-4 text-sm">
                  <li><Link href="/">Ana Sayfa</Link></li>
                  <li><Link href="/hakkimizda">Hakkımızda</Link></li>
                  <li><Link href="/makaleler">Makaleler</Link></li>
                  <li><Link href="/iletisim">İletişim</Link></li>
                </ul>
              </div>

              {/* İLETİŞİM */}
              <div>
                <h4
                  className="text-sm font-semibold mb-6 uppercase"
                  style={{ color: "#c69b65" }}
                >
                  İletişim
                </h4>
                <ul className="space-y-4 text-sm">
                  <li>
                    Maslak - Bakırköy <br/>
                    İSTANBUL
                  </li>
                  <li>Tel: +90 544 737 00 09</li>
                  <li>E-posta: gamzeyildirim@istanbul.av.tr</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>

{/* ================= ALT BAR ================= */}
<div className="border-t border-white/10 py-4">
  <div className="relative w-full text-center text-xs text-gray-300">

    {/* ORTADAKİ YAZI – DOKUNMUYORUZ */}
    © {new Date().getFullYear()} Av. Gamze Yıldırım — Tüm Hakları Saklıdır.

    {/* YASAL UYARI – SAĞ TARAF */}
    <Link
      href="/yasal-uyari"
      target="_blank"
      className="absolute top-1/2 -translate-y-1/2 font-bold text-gray-300 hover:text-white transition"
      style={{ marginLeft: "5cm" }}
    >
      Yasal Uyarı
    </Link>

  </div>
</div>

    </footer>
  );
}
