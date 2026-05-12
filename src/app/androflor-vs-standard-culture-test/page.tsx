import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Androflor vs Standard Culture Test | Which Is Better?",
  description:
    "Androflor PCR microbiome test vs standard microbiological culture compared. Coverage, accuracy, turnaround, and why Androflor detects more. Antalya clinic guide.",
  alternates: { canonical: `${siteConfig.url}/androflor-vs-standard-culture-test` },
  openGraph: {
    title: "Androflor vs Standard Culture Test | Which Is Better?",
    description: "Androflor PCR vs standard microbiological culture: which detects more and why?",
    url: `${siteConfig.url}/androflor-vs-standard-culture-test`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "What is a standard culture test?",
    a: "A standard microbiological culture test involves incubating a sample on growth media and visually identifying organisms that grow. It is effective for many bacteria but cannot detect viruses, some fastidious organisms, or organisms present in very low numbers.",
  },
  {
    q: "How is the Androflor test different from a culture?",
    a: "The Androflor test uses real-time PCR to detect the DNA of 30+ microorganisms directly from the sample, without needing them to grow in culture. This gives it significantly higher sensitivity, the ability to detect non-cultivable organisms, and faster turnaround times.",
  },
  {
    q: "Can a standard culture detect HPV, HSV, or mycoplasma?",
    a: "No. Standard culture cannot detect viruses like HPV or HSV. Mycoplasma genitalium, one of the most clinically significant male urogenital pathogens, grows extremely slowly and unreliably in culture. PCR methods like Androflor detect it routinely.",
  },
  {
    q: "Why might I have negative culture results but positive Androflor?",
    a: "Culture misses many clinically significant organisms, including viruses, mycoplasma species, and anaerobic bacteria. Patients with persistent symptoms and negative culture results are often found to have detectable pathogens on Androflor PCR analysis.",
  },
];

export default function AndroflorVsCulturePage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Androflor Test", url: `${siteConfig.url}/androflor-test` },
          { name: "Androflor vs Standard Culture", url: `${siteConfig.url}/androflor-vs-standard-culture-test` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />

      <main>
        <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "Androflor vs Culture Test", href: "/androflor-vs-standard-culture-test" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Androflor vs Standard Culture Test</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              PCR-based Androflor testing and traditional microbiological culture represent fundamentally different levels of diagnostic coverage. Here is what the difference means in practice.
            </p>
            <a
              href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              💬 Book Androflor Test
            </a>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-8">Comparison: Androflor vs Culture</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#0A2342] text-white">
                    <th className="p-3 text-left">Feature</th>
                    <th className="p-3 text-center">Standard Culture</th>
                    <th className="p-3 text-center">Androflor PCR</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Number of organisms detected", "5–10 (cultivable only)", "30+ (any detectable DNA)"],
                    ["Detects viruses (HPV, HSV)", "✗ No", "✓ Yes"],
                    ["Detects Mycoplasma genitalium", "Unreliable", "✓ Yes"],
                    ["Detects Ureaplasma species", "Unreliable", "✓ Yes"],
                    ["Detects anaerobic bacteria", "✗ No", "✓ Yes"],
                    ["Sensitivity for low counts", "Low", "High"],
                    ["Turnaround time", "3–7 days", "24–48 hours"],
                    ["Antibiotic sensitivity testing", "✓ Yes", "✗ No"],
                    ["Recommended for complex cases", "Limited", "✓ Yes"],
                  ].map(([feature, culture, androflor]) => (
                    <tr key={feature} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3 font-medium text-[#0A2342]">{feature}</td>
                      <td className="p-3 text-center text-gray-700">{culture}</td>
                      <td className="p-3 text-center text-gray-700">{androflor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-[#0A2342] mb-4">When Androflor Is Superior</h2>
            <p className="text-gray-600 mb-4">
              For patients with persistent urogenital symptoms that have not been explained by standard tests, Androflor provides the most comprehensive diagnostic picture available. The organisms it detects — particularly Mycoplasma genitalium, Ureaplasma species, and various anaerobic bacteria — are among the most common causes of chronic non-specific urethritis and unexplained urogenital symptoms in men.
            </p>
            <p className="text-gray-600">
              Standard culture has an important role in identifying antibiotic-resistant strains of bacteria it can grow. However, for initial screening and for patients with unexplained symptoms, Androflor offers significantly broader coverage.
            </p>
          </div>
        </section>

        <section className="py-12 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Related Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "Androflor Test", href: "/androflor-test" },
                { label: "Androflor Test Price", href: "/androflor-test-price" },
                { label: "Male Urogenital Flora Test", href: "/male-urogenital-flora-test" },
                { label: "Advanced Microbiome Test", href: "/advanced-male-microbiome-test" },
                { label: "STI Packages", href: "/sti-test-packages" },
                { label: "Full STI Panel", href: "/full-sti-panel" },
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
        <CTASection title="Book Androflor Testing in Antalya" subtitle="The most comprehensive male urogenital microbiome test. £360. Private clinic." />
      </main>
    </>
  );
}
