import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Legal Notice",
  description: "Terms of use and legal notice for the website of Attorney at Law Gamze Yıldırım.",
  path: "/en/legal-notice",
  locale: "en",
});

export default function LegalNoticePage() {
  return (
    <div className="min-h-screen bg-[#262b3e] text-gray-200">
      <div className="mx-auto max-w-3xl px-6 py-24 pt-[150px] md:pt-[175px]">
        <h1 className="mb-12 text-center text-3xl font-semibold text-white">Legal Notice</h1>
        <div className="space-y-6 text-sm leading-relaxed">
          <p>Law No. 1136 on the Legal Profession and the professional rules applicable in Türkiye restrict advertising by attorneys. This website is not intended to advertise the law practice. Its purpose is to provide general information to existing or prospective clients and other legal professionals. By accessing this website, visitors acknowledge the following terms.</p>
          <h2 className="font-semibold text-white">Access and Use</h2>
          <p>The website gamzeyildirim.av.tr has been prepared with regard to Law No. 1136, the secondary legislation issued under that Law and the Professional Rules published by the Union of Turkish Bar Associations.</p>
          <p>All information, documents and design elements on this website are provided solely for general information and are not intended as advertising.</p>
          <p>Nothing on this website constitutes legal advice from Attorney at Law Gamze Yıldırım. Legal rules and their application may change, and every legal matter must be assessed on its own facts.</p>
          <p>All information, documents, designs and associated intellectual-property rights on gamzeyildirim.av.tr belong to Attorney at Law Gamze Yıldırım and may not be copied, reproduced or used without prior written permission.</p>
          <p>Although the website may be updated periodically, no representation or warranty is made that the information is complete, accurate or current at any particular time. No liability is accepted for action taken or not taken in reliance upon the contents of the website.</p>
          <p>Visitors should not act on information that appears similar to their own circumstances without first obtaining advice from a qualified attorney. No claim may be made for loss allegedly arising from the information or documents published on the website.</p>
          <p>The information and documents are published for personal and non-commercial use only. The website may not be used for advertising or business-development purposes.</p>
          <p>Publication of information on this website, or a visitor’s access to it, does not create an attorney–client relationship with Attorney at Law Gamze Yıldırım.</p>
          <p>Contact by telephone, email, messaging service or any similar means does not by itself create an attorney–client relationship. Such a relationship is formed only after the scope and terms of the engagement have been agreed in writing.</p>
          <p>Links to external resources are provided solely for convenience. They do not constitute endorsement or approval of the linked person, organisation or content. No warranty is given as to the accuracy, currency or completeness of content published on third-party websites.</p>
        </div>
      </div>
    </div>
  );
}
