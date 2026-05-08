import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "STI vs STD: What Is the Difference? | Guide",
  description:
    "What is the difference between an STI and an STD? Sexually transmitted infection vs sexually transmitted disease explained. Medical guide from Antalya clinic.",
  alternates: { canonical: `${siteConfig.url}/sti-vs-std` },
  openGraph: {
    title: "STI vs STD: What Is the Difference?",
    description: "STI and STD are often used interchangeably, but they have distinct medical meanings. Here is what the difference means for testing and treatment.",
    url: `${siteConfig.url}/sti-vs-std`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "What is the difference between an STI and an STD?",
    a: "STI (Sexually Transmitted Infection) refers to the presence of a pathogen (virus, bacteria, or parasite) transmitted sexually. STD (Sexually Transmitted Disease) refers specifically to when the infection causes symptoms or disease. Many STIs are asymptomatic — meaning infection is present but no disease symptoms have developed — so the term STI is considered more accurate.",
  },
  {
    q: "Is STI testing the same as STD testing?",
    a: "Yes, in practice the tests are the same. Whether a clinic uses the term 'STI test' or 'STD test', they are testing for the same pathogens. The terminology shift from STD to STI reflects modern understanding that many infections are asymptomatic and should be detected before they progress to disease.",
  },
  {
    q: "Why does the terminology matter?",
    a: "The distinction matters clinically because it encourages testing even without symptoms. Someone with an 'STI' (asymptomatic infection) benefits from knowing their status to prevent transmission and complications. Waiting until it becomes an 'STD' (disease with symptoms) allows preventable harm.",
  },
  {
    q: "Do doctors use STI or STD?",
    a: "Most modern healthcare guidelines and organisations (WHO, CDC, NHS) prefer STI as the primary term. However, STD remains widely understood and is often used in search contexts.",
  },
];

export default function STIvsSTDPage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "STI vs STD", url: `${siteConfig.url}/sti-vs-std` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />

      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">STI vs STD: What Is the Difference?</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              The terms STI and STD are often used interchangeably, but they have distinct medical meanings. Understanding the difference clarifies when and why testing matters.
            </p>
            <a
              href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              💬 Book Testing
            </a>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Definitions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="p-6 bg-[#F9FAFB] rounded-xl">
                <h3 className="text-xl font-bold text-[#0A2342] mb-3">STI — Sexually Transmitted Infection</h3>
                <p className="text-gray-600 text-sm">
                  An infection caused by a pathogen (bacterium, virus, or parasite) that is transmitted through sexual contact. An STI may be present without causing any symptoms. Examples: chlamydia (often asymptomatic), HPV (usually asymptomatic), early HIV infection.
                </p>
              </div>
              <div className="p-6 bg-[#F9FAFB] rounded-xl">
                <h3 className="text-xl font-bold text-[#0A2342] mb-3">STD — Sexually Transmitted Disease</h3>
                <p className="text-gray-600 text-sm">
                  A sexually transmitted infection that has progressed to cause recognisable disease, symptoms, or complications. All STDs begin as STIs. Examples: genital warts (HPV disease), AIDS (advanced HIV disease), symptomatic gonorrhoea.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Why Testing Before Symptoms Matters</h2>
            <p className="text-gray-600 mb-4">
              The key clinical implication of the STI/STD distinction is that many infections cause no symptoms during the period when they are most transmissible and most treatable. Waiting for symptoms means:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Missed opportunity for early treatment",
                "Unknowing transmission to partners",
                "Increased risk of long-term complications",
                "HPV progression to cellular changes before detection",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-500 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600">
              Regular STI screening — regardless of symptoms — is the recommended approach for sexually active individuals with new or multiple partners.
            </p>
          </div>
        </section>

        <section className="py-12 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Related Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "Full STI Panel", href: "/full-sti-panel" },
                { label: "STI Test Antalya", href: "/sti-test-antalya" },
                { label: "STD Test Antalya", href: "/std-test-antalya" },
                { label: "Full Panel vs Basic Test", href: "/full-sti-panel-vs-basic-std-test" },
                { label: "HPV vs Herpes", href: "/hpv-vs-herpes" },
                { label: "STI Packages", href: "/sti-test-packages" },
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
        <CTASection title="Get Tested in Antalya" subtitle="Private STI screening. Confidential results. English-speaking clinic. No referral needed." />
      </main>
    </>
  );
}
