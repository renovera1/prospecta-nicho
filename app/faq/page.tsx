import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SectionTitle } from "@/components/SectionTitle";
import { homeFaq } from "@/lib/site";

export const metadata: Metadata = { title: "FAQ" };

export default function FAQPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle eyebrow="FAQ" title="Perguntas frequentes" />
        <FAQAccordion items={homeFaq} />
      </div>
    </section>
  );
}
