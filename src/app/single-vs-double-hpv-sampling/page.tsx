import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Single vs Double HPV Sampling | Which Do I Need?",
  description:
    "Should you have single or double HPV sampling? This guide explains the difference between one-site and two-site HPV swab testing and when double sampling is recommended.",
  alternates: { canonical: `${siteConfig.url}/single-vs-double-hpv-sampling` },
  openGraph: {
    title: "Single vs Double HPV Sampling | Which Do I Need?",
    description: "Single vs double HPV swab sampling explained. When is double sampling recommended? Antalya private clinic guide.",
    url: `${siteConfig.url}/single-vs-double-hpv-sampling`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "What is double HPV sampling?",
    a: "Double HPV sampling means collecting two separate swabs — typically one from the genital area (glans, shaft, or foreskin) and one from inside the urethra — and running HPV genotyping on each sample independently.",
  },
  {
    q: "When is double sampling recommended?",
    a: "Double sampling is recommended when symptoms are present at more than one anatomical site, when there is a history of persistent or recurrent HPV, when a complex or multi-site presentation exists, or when maximum diagnostic sensitivity is desired.",
  },
  {
    q: "Is double sampling twice as expensive?",
    a: "Double sampling is £600, compared to £300 for single-site testing. This reflects the additional sample, laboratory processing, and interpretation involved.",
  },
  {
    q: "Can single sampling miss HPV if it is only at one site?",
    a: "Single sampling tests only the site from which the swab was taken. If HPV is present only at the urethral site but a genital swab was taken, it would not be detected. Your doctor will advise on the most appropriate site based on your symptoms and examination.",
  },
  {
    q: "How does the doctor decide which sampling to recommend?",
    a: "During your consultation, the doctor will assess your symptoms, sexual history, and clinical examination findings. Based on this, they will recommend either single-site testing or double sampling.",
  },
];

export default function SingleVsDoubleHPVPage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "HPV Test Antalya", url: `${siteConfig.url}/hpv-test-antalya` },
          { name: "Single vs Double HPV Sampling", url: `${siteConfig.url}/single-vs-double-hpv-sampling` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />

      <main>
        <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "Single vs Double HPV Sampling", href: "/single-vs-double-hpv-sampling" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Single vs Double HPV Sampling</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              The number of swab sites taken for HPV testing affects diagnostic sensitivity. This guide explains when one site is sufficient and when double sampling is recommended.
            </p>
            <a
              href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              💬 Ask Which Sampling You Need
            </a>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-8">Single vs Double: At a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 bg-[#F9FAFB] rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-[#0A2342] mb-2">Single Sampling — £300</h3>
                <p className="text-gray-600 text-sm mb-4">One swab from the primary anatomical site</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-4">
                  {[
                    "Symptoms at one defined site",
                    "Routine preventive screening",
                    "No urethral symptoms",
                    "Standard sexual health check",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl border-2 border-[#2563EB] shadow-md">
                <h3 className="text-xl font-bold text-[#0A2342] mb-2">Double Sampling — £600</h3>
                <p className="text-gray-600 text-sm mb-4">Genital swab + urethral swab</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-4">
                  {[
                    "Symptoms at multiple sites",
                    "Persistent or recurring HPV",
                    "Complex clinical presentation",
                    "High-risk exposure history",
                    "Maximum diagnostic sensitivity",
                    "Previous positive at one site",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Why Site Matters for HPV Detection</h2>
            <p className="text-gray-600 mb-4">
              HPV is a localised infection. It can infect epithelial cells at a specific anatomical site without spreading throughout the urogenital tract. This means that HPV present at the urethral mucosa may not be present at the glans and vice versa.
            </p>
            <p className="text-gray-600 mb-4">
              For most patients with straightforward symptoms localised to one area, a single swab from that site is sufficient. However, when symptoms are diffuse, recurrent, or involve multiple locations, sampling from both the genital surface and the urethral opening maximises the chance of detection.
            </p>

            <div className="mt-8 p-5 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="font-semibold text-amber-800">Important Note</p>
              <p className="text-amber-700 text-sm mt-1">
                The choice between single and double sampling should always be guided by a doctor&apos;s clinical assessment. During your consultation in Antalya, our physician will examine and advise accordingly. Contact us via WhatsApp if you are unsure which option applies to your situation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Related Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "HPV Genotyping Test", href: "/hpv-genotyping-test" },
                { label: "HPV PCR Test", href: "/hpv-pcr-test" },
                { label: "HPV Test Price", href: "/hpv-test-price" },
                { label: "Compare Packages", href: "/standard-vs-double-hpv-package" },
                { label: "HPV Test Antalya", href: "/hpv-test-antalya" },
                { label: "HPV Testing for Men", href: "/hpv-testing-for-men" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block p-3 bg-white rounded-lg text-[#2563EB] text-sm font-medium hover:bg-blue-50 transition-colors border border-gray-100"
                >
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FAQAccordion faqs={faqs} />
        <CTASection title="Consult Our Doctors to Choose the Right Sampling" subtitle="WhatsApp us. We will advise which HPV sampling option is right for your clinical situation." />
      </main>
    </>
  );
}
