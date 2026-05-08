import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "STI Test Prices Antalya | Private Sexual Health Testing Costs Turkey",
  description:
    "Full STI testing price list in Antalya, Turkey. HPV genotyping from £300, HIV blood tests from £240, Androflor from £360. Transparent pricing, no hidden fees.",
  alternates: { canonical: `${siteConfig.url}/prices` },
  openGraph: {
    title: "STI Test Prices Antalya | Private Sexual Health Testing Costs Turkey",
    description:
      "Transparent STI testing prices in Antalya. HPV, HIV, Androflor, and full package costs. Often 50–70% less than UK/EU clinics.",
    url: `${siteConfig.url}/prices`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const tests = [
  {
    name: "HPV Genotyping Test",
    price: "£300",
    detail: "Identifies high-risk and low-risk HPV strains. Single-site sampling (genital or urethral).",
    href: "/hpv-test-price",
    highlight: false,
  },
  {
    name: "Double HPV Sampling",
    price: "£600",
    detail: "Genital swab + urethral swab. Recommended for persistent symptoms or complex cases.",
    href: "/hpv-test-price",
    highlight: true,
  },
  {
    name: "HIV Blood Tests",
    price: "£240",
    detail: "Comprehensive HIV laboratory blood screening. 4th generation, confidential, fast results.",
    href: "/hiv-test-price-antalya",
    highlight: false,
  },
  {
    name: "Androflor Test",
    price: "£360",
    detail: "Advanced male urogenital microbiome analysis. Detects 30+ pathogens via PCR.",
    href: "/androflor-test-price",
    highlight: false,
  },
  {
    name: "Standard STI Package",
    price: "£900",
    detail: "HPV Genotyping + Androflor + HIV. Includes initial and follow-up consultation.",
    href: "/sti-test-packages",
    highlight: true,
  },
  {
    name: "Double HPV Package",
    price: "£1,200",
    detail: "Dual HPV sampling + Androflor + HIV. Best for complex or persistent symptoms.",
    href: "/sti-test-packages",
    highlight: true,
  },
];

const faqs = [
  {
    q: "Are these prices all-inclusive?",
    a: "Yes. Listed prices include the test, laboratory analysis, and result reporting. Package prices include initial and follow-up consultations. There are no hidden fees.",
  },
  {
    q: "Why is STI testing cheaper in Turkey than the UK?",
    a: "Turkey's lower operating costs, currency exchange benefits, and competitive private healthcare market allow clinics to offer high-quality testing at significantly lower prices than Western Europe without compromising on quality.",
  },
  {
    q: "Do prices include consultation?",
    a: "Individual test prices include a brief pre-test consultation. Full package prices (£900 and £1,200) include both an initial consultation and a follow-up results consultation.",
  },
  {
    q: "Can I pay in GBP, EUR or USD?",
    a: "Yes. We accept payment in GBP, EUR, USD, and Turkish Lira. Card payments and cash are accepted.",
  },
  {
    q: "Is there a price difference between single and double HPV sampling?",
    a: "Yes. Single-site HPV genotyping is £300. Double sampling covering both genital and urethral sites is £600. Your doctor will advise which is appropriate based on your clinical presentation.",
  },
  {
    q: "Are walk-in prices the same as booked appointments?",
    a: "Yes, prices are the same whether you walk in or book in advance. We recommend booking via WhatsApp to minimise wait times.",
  },
];

export default function PricesPage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "STI Test Prices", url: `${siteConfig.url}/prices` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />
      <SchemaOrg
        schema={productSchema({
          name: "Standard STI Package — HPV + HIV + Androflor",
          description:
            "Comprehensive private STI screening package in Antalya including HPV genotyping, HIV blood tests, and Androflor microbiome analysis.",
          url: `${siteConfig.url}/sti-test-packages`,
          priceGBP: 900,
        })}
      />

      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              STI Testing Prices in Antalya, Turkey
            </h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Transparent, all-inclusive pricing for private sexual health testing. Often 50–70% less than UK or European clinics — with no compromise on quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                💬 Ask About Pricing
              </a>
              <Link
                href="/sti-test-packages"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0A2342] transition-colors"
              >
                View Packages
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F9FAFB]">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] text-center mb-4">Full Price List</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              All prices are in British Pounds (GBP). We also accept EUR, USD, and Turkish Lira.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tests.map((t) => (
                <div
                  key={t.name}
                  className={`rounded-xl border p-6 relative ${
                    t.highlight ? "border-[#2563EB] bg-white shadow-md" : "border-gray-200 bg-white"
                  }`}
                >
                  {t.highlight && (
                    <span className="absolute top-4 right-4 bg-[#2563EB] text-white text-xs font-bold px-2 py-1 rounded">
                      Popular
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-[#0A2342] mb-1">{t.name}</h3>
                  <p className="text-3xl font-bold text-[#2563EB] mb-3">{t.price}</p>
                  <p className="text-gray-600 text-sm mb-4">{t.detail}</p>
                  <Link href={t.href} className="text-[#2563EB] text-sm font-semibold hover:underline">
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">
              How Do Antalya STI Test Prices Compare?
            </h2>
            <p className="text-gray-600 mb-6">
              Private sexual health testing in Turkey is significantly more affordable than in Western Europe or the USA, while using the same laboratory-grade equipment and testing methodologies.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#0A2342] text-white">
                    <th className="p-3 text-left">Test</th>
                    <th className="p-3 text-center">Antalya (GBP)</th>
                    <th className="p-3 text-center">UK Private (GBP)</th>
                    <th className="p-3 text-center">Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["HPV Genotyping", "£300", "£500–£700", "Up to 57%"],
                    ["HIV Blood Test", "£240", "£350–£500", "Up to 52%"],
                    ["Androflor Test", "£360", "£600–£900", "Up to 60%"],
                    ["Full Package", "£900–£1,200", "£1,800–£2,500", "Up to 55%"],
                  ].map(([test, antalya, uk, saving]) => (
                    <tr key={test} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3 font-medium text-[#0A2342]">{test}</td>
                      <td className="p-3 text-center font-bold text-[#2563EB]">{antalya}</td>
                      <td className="p-3 text-center text-gray-600">{uk}</td>
                      <td className="p-3 text-center text-green-600 font-semibold">{saving}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * UK prices are approximate market estimates for private clinics. Actual prices may vary. Antalya prices are our current standard rates in GBP equivalent — contact us for the latest quote, as exchange rates may affect GBP equivalents.
            </p>
          </div>
        </section>

        <section className="py-16 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-8 text-center">What Is Included in the Price?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: "🔬", title: "Laboratory Analysis", desc: "ISO-standard PCR and molecular testing in a certified laboratory." },
                { icon: "📋", title: "Result Report", desc: "Full written result report delivered securely. Digital copy available." },
                { icon: "🩺", title: "Pre-Test Consultation", desc: "Brief consultation with English-speaking medical staff before testing." },
                { icon: "🔒", title: "Confidentiality", desc: "All testing is completely confidential. Results never shared without consent." },
                { icon: "🌍", title: "English Support", desc: "English-speaking staff throughout — booking, testing, and results." },
                { icon: "📞", title: "Post-Test Support", desc: "Questions after your results? Our team is available via WhatsApp." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 bg-white rounded-lg border border-gray-100">
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-[#0A2342] mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Individual Test Price Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "HPV Test Price", href: "/hpv-test-price" },
                { label: "HIV Test Price", href: "/hiv-test-price-antalya" },
                { label: "Androflor Test Price", href: "/androflor-test-price" },
                { label: "STI Test Packages", href: "/sti-test-packages" },
                { label: "Full STI Panel Cost", href: "/std-test-cost-turkey" },
                { label: "Compare Packages", href: "/standard-vs-double-hpv-package" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block p-3 bg-[#F9FAFB] rounded-lg text-[#2563EB] text-sm font-medium hover:bg-blue-50 transition-colors border border-gray-100"
                >
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FAQAccordion faqs={faqs} />
        <CTASection
          title="Get a Personalised Price Quote"
          subtitle="Message us on WhatsApp with your testing needs and we'll provide a clear, all-inclusive quote."
        />
      </main>
    </>
  );
}
