import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { dataFields } from "@/lib/site";

export const metadata: Metadata = { title: "Campos da base" };

export default function DataFieldsPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle eyebrow="Planilha" title="Campos que podem compor a entrega" text="Os campos variam conforme produto, fontes públicas disponíveis e escopo contratado." />
        <div className="fields-table">
          {dataFields.map((field) => <div className="field-chip" key={field}>{field}</div>)}
        </div>
      </div>
    </section>
  );
}
