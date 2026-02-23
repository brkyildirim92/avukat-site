export default function sitemap() {
  const baseUrl = "https://siteadi.com";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/makaleler`, lastModified: new Date() },
    { url: `${baseUrl}/iletisim`, lastModified: new Date() },
  ];
}
