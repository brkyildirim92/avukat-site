
export default function sitemap() {
  const baseUrl = "https://gamzeyildirim.av.tr";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/makaleler`, lastModified: new Date() },
    { url: `${baseUrl}/iletisim`, lastModified: new Date() },

    // Makaleler
    { url: `${baseUrl}/makaleler/ceza-hukukunda-tutuklama-sartlari`, lastModified: new Date() },
    { url: `${baseUrl}/makaleler/bosanma-davalarinda-nafaka-turleri`, lastModified: new Date() },
    { url: `${baseUrl}/makaleler/isten-haksiz-fesih-durumunda-haklar`, lastModified: new Date() },
    { url: `${baseUrl}/makaleler/kira-sozlesmesi-tahliye`, lastModified: new Date() },
    { url: `${baseUrl}/makaleler/kat-mulkiyetinde-ortak-alan-uyusmazliklari`, lastModified: new Date() },
    { url: `${baseUrl}/makaleler/tapu-iptali-ve-tescil-davasi`, lastModified: new Date() },
    { url: `${baseUrl}/makaleler/kentsel-donusum-surecinde-haklar`, lastModified: new Date() },
    { url: `${baseUrl}/makaleler/ortakligin-giderilmesi-izale-i-suyu-davasi`, lastModified: new Date() },
    { url: `${baseUrl}/makaleler/ecrimisil-haksiz-isgal-tazminati-davasi`, lastModified: new Date() },
  ];
}