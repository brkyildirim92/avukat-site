import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PracticeAreaPage from "../../../components/PracticeAreaPage";
import { getPracticeAreaEn, practiceAreasEn } from "../../../data/practiceAreas.en";
import { createPageMetadata } from "../../../lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return practiceAreasEn.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeAreaEn(slug);
  if (!area) return { title: "Practice Area Not Found" };
  return createPageMetadata({
    title: area.title,
    description: area.description,
    path: area.link,
    locale: "en",
  });
}

export default async function EnglishPracticeAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getPracticeAreaEn(slug);
  if (!area) notFound();

  return (
    <PracticeAreaPage
      title={area.title}
      intro={area.description}
      sections={area.sections}
      schemaName={area.title}
      path={area.link}
      locale="en"
    />
  );
}
