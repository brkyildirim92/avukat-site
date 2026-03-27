
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gamzeyildirim.av.tr";
  const now = new Date();

  return [
    // ANA SAYFA
    { url: baseUrl, lastModified: now },

    // GENEL SAYFALAR
    { url: `${baseUrl}/calisma-alanlarimiz`, lastModified: now },
    { url: `${baseUrl}/hakkimizda`, lastModified: now },
    { url: `${baseUrl}/iletisim`, lastModified: now },
    { url: `${baseUrl}/makaleler`, lastModified: now },

    // 🔥 HİZMET SAYFALARI (EN KRİTİK)
    { url: `${baseUrl}/ceza-avukati`, lastModified: now },
    { url: `${baseUrl}/bosanma-avukati`, lastModified: now },
    { url: `${baseUrl}/is-hukuku-avukati`, lastModified: now },
    { url: `${baseUrl}/sozlesmeler-borclar-hukuku-avukati`, lastModified: now },
    { url: `${baseUrl}/ticaret-avukati`, lastModified: now },
    { url: `${baseUrl}/bilisim-avukati`, lastModified: now },
    { url: `${baseUrl}/icra-avukati`, lastModified: now },
    { url: `${baseUrl}/gayrimenkul-avukati`, lastModified: now },
    { url: `${baseUrl}/hukuki-konular-avukati`, lastModified: now },
    { url: `${baseUrl}/istanbul-kira-avukati`, lastModified: now },
    { url: `${baseUrl}/istanbul-tazminat-avukati`, lastModified: now },
    { url: `${baseUrl}/istanbul-arabuluculuk-avukati`, lastModified: now },

    // 📝 MAKALELER
    { url: `${baseUrl}/makaleler/ceza-hukukunda-tutuklama-sartlari`, lastModified: now },
    { url: `${baseUrl}/makaleler/bosanma-davalarinda-nafaka-turleri`, lastModified: now },
    { url: `${baseUrl}/makaleler/isten-haksiz-fesih-durumunda-haklar`, lastModified: now },
    { url: `${baseUrl}/makaleler/kira-sozlesmesi-tahliye`, lastModified: now },
    { url: `${baseUrl}/makaleler/kat-mulkiyetinde-ortak-alan-uyusmazliklari`, lastModified: now },
    { url: `${baseUrl}/makaleler/tapu-iptali-ve-tescil-davasi`, lastModified: now },
    { url: `${baseUrl}/makaleler/kentsel-donusum-surecinde-haklar`, lastModified: now },
    { url: `${baseUrl}/makaleler/ortakligin-giderilmesi-izale-i-suyu-davasi`, lastModified: now },
    { url: `${baseUrl}/makaleler/ecrimisil-haksiz-isgal-tazminati-davasi`, lastModified: now },
  ];
}