import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Full STI Panel Antalya | Complete Sexual Health Screening Turkey",
  description: "Comprehensive full STI panel testing in Antalya. Tests for all major STIs including HIV, HPV, chlamydia, gonorrhea, syphilis, herpes, hepatitis B/C.",
  alternates: { canonical: `${siteConfig.url}/full-sti-panel` },
  openGraph: { title: "Full STI Panel Antalya | Complete Sexual Health Screening Turkey", description: "Comprehensive full STI panel in Antalya. All major infections in one visit.", url: `${siteConfig.url}/full-sti-panel`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

const panelItems = [
  { test: "HIV 1 & 2 (4th Gen Ag/Ab)", type: "Blood" },
  { test: "Syphilis (VDRL + TPPA)", type: "Blood" },
  { test: "Hepatitis B (HBsAg)", type: "Blood" },
  { test: "Hepatitis C (Anti-HCV)", type: "Blood" },
  { test: "Chlamydia trachomatis (PCR)", type: "Swab/Urine" },
  { test: "Neisseria gonorrhoeae (PCR)", type: "Swab/Urine" },
  { test: "Herpes Simplex 1 & 2 (IgG/IgM)", type: "Blood" },
  { test: "HPV High-Risk DNA Panel", type: "Swab" },
  { test: "Trichomonas vaginalis (PCR)", type: "Swab/Urine" },
  { test: "Mycoplasma genitalium (PCR)", type: "Swab/Urine" },
];

const faqs = [
  { q: "What does a full STI panel include?", a: "Our full STI panel includes HIV, syphilis, hepatitis B and C, chlamydia, gonorrhea, herpes (HSV-1/2), HPV, trichomonas, and mycoplasma genitalium — all major sexually transmitted infections." },
  { q: "How long does the full panel take?", a: "Sample collection takes approximately 20-30 minutes. Most results are available within 24-48 hours, with some same-day results available." },
  { q: "Is it worth getting a full STI panel?", a: "Yes, especially if you have had multiple partners, unprotected sex, or have not been tested recently. Many STIs are asymptomatic and only detectable through testing." },
  { q: "How much does a full STI panel cost in Antalya?", a: "Contact us via WhatsApp for current pricing. Full panels in Turkey are significantly more affordable than comparable panels in the UK or USA." },
];

export default function FullSTIPanelPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Full STI Panel", url: `${siteConfig.url}/full-sti-panel` }])} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <main>
        <Breadcrumb items={[
          { name: "Home", href: "/" },
          { name: "Full STI Panel", href: "/full-sti-panel" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Full STI Panel in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8">Complete sexual health screening. All major STIs tested in one visit. Private, confidential, same-day results.</p>
            <a href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`} target="_blank" rel="noopener noreferrer" className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">💬 Book via WhatsApp</a>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">What Is Included in Our Full STI Panel?</h2>
            <p className="text-gray-600 mb-8">Our comprehensive STI panel covers all the major sexually transmitted infections in a single visit. Sample collection is quick and professional, and results are delivered securely.</p>
            <div className="overflow-hidden rounded-xl border border-gray-200 mb-8">
              <table className="w-full text-sm">
                <thead className="bg-[#0A2342] text-white">
                  <tr>
                    <th className="text-left px-4 py-3">Test</th>
                    <th className="text-left px-4 py-3">Sample Type</th>
                  </tr>
                </thead>
                <tbody>
                  {panelItems.map((item, i) => (
                    <tr key={item.test} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-[#0A2342]">{item.test}</td>
                      <td className="px-4 py-3 text-gray-600">{item.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600">Additional tests such as urethral swab cultures or Androflor microbiome analysis can be added to the panel. Ask our team for details when booking.</p>
          </div>
        </section>
        <FAQAccordion faqs={faqs} />
        <CTASection title="Book Your Full STI Panel" subtitle="Complete sexual health screening in one visit. Results within 24-48 hours." />
      </main>
    </>
  );
}
