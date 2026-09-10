import type { MetadataRoute } from "next";
import { articlesEn } from "./data/articles.en";
import { absoluteUrl } from "./lib/seo";
import { localizedRoutePairs } from "./lib/i18n";

const lastModifiedByEnglishPath = new Map(
  articlesEn.map((article) => [`/en/articles/${article.slug}`, article.isoDate]),
);

export default function sitemap(): MetadataRoute.Sitemap {
  return localizedRoutePairs.flatMap(({ tr, en }) => {
    const lastModified = lastModifiedByEnglishPath.get(en);
    const alternates = {
      languages: {
        "tr-TR": absoluteUrl(tr),
        en: absoluteUrl(en),
        "x-default": absoluteUrl(tr),
      },
    };

    return [
      { url: absoluteUrl(tr), lastModified, alternates },
      { url: absoluteUrl(en), lastModified, alternates },
    ];
  });
}
