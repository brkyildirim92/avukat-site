import type { NextConfig } from "next";

const legacyPracticeAreaRedirects = [
  ["/ceza-avukati", "/ceza-hukuku"],
  ["/bosanma-avukati", "/aile-hukuku"],
  ["/is-hukuku-avukati", "/is-hukuku"],
  ["/sozlesmeler-borclar-hukuku-avukati", "/borclar-ve-sozlesmeler-hukuku"],
  ["/ticaret-avukati", "/ticaret-hukuku"],
  ["/bilisim-avukati", "/bilisim-hukuku"],
  ["/icra-avukati", "/icra-ve-iflas-hukuku"],
  ["/gayrimenkul-avukati", "/gayrimenkul-hukuku"],
  ["/hukuki-konular-avukati", "/yabanci-mahkeme-kararlarinin-taninmasi-ve-tenfizi"],
  ["/diger-hukuki-konular", "/yabanci-mahkeme-kararlarinin-taninmasi-ve-tenfizi"],
  ["/en/practice-areas/other-legal-matters", "/en/practice-areas/recognition-enforcement-of-foreign-judgments"],
  ["/en/practice-areas/enforcement-and-insolvency-law", "/en/practice-areas/litigation-enforcement-debt-collection"],
  ["/istanbul-kira-avukati", "/kira-hukuku"],
  ["/istanbul-tazminat-avukati", "/tazminat-hukuku"],
  ["/istanbul-arabuluculuk-avukati", "/arabuluculuk"],
] as const;

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  async redirects() {
    return legacyPracticeAreaRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
