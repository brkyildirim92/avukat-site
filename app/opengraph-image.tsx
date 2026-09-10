import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Avukat Gamze Yıldırım — İstanbul";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const logoData = await readFile(
  join(process.cwd(), "public", "logoson1.png"),
  "base64",
);
const logoSrc = `data:image/png;base64,${logoData}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#10263e",
          color: "#d0a66d",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(208, 166, 109, 0.28)",
            bottom: 40,
            display: "flex",
            left: 40,
            position: "absolute",
            right: 40,
            top: 40,
          }}
        />
        {/* Satori supports data-URL image sources at render time. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={330} height={330} alt="" />
        <div
          style={{
            alignItems: "center",
            display: "flex",
            fontFamily: "serif",
            fontSize: 23,
            letterSpacing: "0.13em",
            marginTop: 22,
            textTransform: "uppercase",
          }}
        >
          İstanbul · Türkiye
        </div>
      </div>
    ),
    size,
  );
}
