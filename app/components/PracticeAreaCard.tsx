import Image from "next/image";
import Link from "next/link";
import type { ElementType } from "react";
import { playfair } from "../fonts";

type PracticeArea = {
  readonly title: string;
  readonly shortDescription: string;
  readonly link: string;
  readonly image: string;
  readonly imageAlt: string;
};

type PracticeAreaCardProps = {
  area: PracticeArea;
  headingLevel?: "h2" | "h3";
  locale?: "tr" | "en";
  compact?: boolean;
};

export default function PracticeAreaCard({
  area,
  headingLevel = "h3",
  locale = "tr",
  compact = false,
}: PracticeAreaCardProps) {
  const Heading = headingLevel as ElementType;

  return (
    <Link
      href={area.link}
      className="group flex h-full flex-col overflow-hidden border border-[#d6dde3] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#173a5e] hover:bg-[#fdfbf7] hover:shadow-[0_18px_45px_rgba(16,38,62,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69b66] focus-visible:ring-offset-4"
    >
      <div className={`relative overflow-hidden bg-[#e9edf0] ${compact ? "aspect-[2/1]" : "aspect-[16/9]"}`}>
        <Image
          src={area.image}
          alt={area.imageAlt}
          fill
          sizes="(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
        />
        <span
          className="absolute inset-0 bg-gradient-to-t from-[#10263e]/20 via-transparent to-white/5 transition duration-500 group-hover:from-[#10263e]/10"
          aria-hidden="true"
        />
      </div>

      <div className={`flex flex-1 flex-col ${compact ? "p-5" : "p-6 md:p-7"}`}>
        <Heading className={`${playfair.className} font-medium italic leading-[1.15] text-[#10263e] ${compact ? "text-[1.4rem] md:text-2xl" : "text-[1.65rem]"}`}>
          {area.title}
        </Heading>
        <p className={`text-[#667487] ${compact ? "mt-3 text-sm leading-6" : "mt-4 leading-7"}`}>{area.shortDescription}</p>
        <span className={`mt-auto inline-flex items-center gap-3 font-semibold uppercase tracking-[0.12em] text-[#10263e] transition-colors duration-300 group-hover:text-[#a97c2e] ${compact ? "pt-4 text-[0.68rem]" : "pt-6 text-xs"}`}>
          {locale === "en" ? "View Practice Area" : "Alanı İncele"}
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
