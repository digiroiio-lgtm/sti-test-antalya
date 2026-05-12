import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, articleSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "How Much Is an STI Test in Turkey? | Price Guide 2025",
  description: "STI test costs in Turkey compared with the UK, Germany, and US. Full STI panel, individual tests, HIV, HPV. Private clinic prices in Antalya.",
  alternates: { canonical: `${siteConfig.url}/blog/how-much-is-an-sti-test-in-turkey` },
  openGraph: { title: "How Much Is an STI Test in Turkey? | Price Guide 2025", description: "Complete price guide to STI testing in Turkey vs UK, Germany, and US.", url: `${siteConfig.url}/blog/how-much-is-an-sti-test-in-turkey`, siteName: siteConfig.name, type: "article" },
};

export default function HowMuchIsSTITestTurkeyPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog` }, { name: "How Much Is an STI Test in Turkey?", url: `${siteConfig.url}/blog/how-much-is-an-sti-test-in-turkey` }])} />
      <SchemaOrg schema={articleSchema("How Much Is an STI Test in Turkey?", `${siteConfig.url}/blog/how-much-is-an-sti-test-in-turkey`, "2025-01-15", "A complete price guide to STI testing costs in Turkey.")} />
      <main>
        <Breadcrumb items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: "How Much Is an STI Test in Turkey?", href: "/blog/how-much-is-an-sti-test-in-turkey" },
        ]} />
        <section className="bg-[#0A2342] text-white py-16">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-blue-300 text-sm mb-4">January 15, 2025 · 6 min read</div>
            <h1 className="text-4xl font-bold mb-4">How Much Is an STI Test in Turkey?</h1>
            <p className="text-blue-200 text-xl">A complete price guide to private STI testing in Turkey, with comparison to UK, German, and US prices.</p>
          </div>
        </section>
        <article className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-gray-600 space-y-6">
            <p>One of the most common questions we receive from international patients is about cost. STI testing in Turkey is substantially more affordable than in most Western European countries or the United States — and the quality is equivalent.</p>
            <h2 className="text-2xl font-bold text-[#0A2342]">STI Test Prices in Turkey vs Europe</h2>
            <p>Here is a rough comparison of private STI testing costs across different countries:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 text-[#0A2342]">Test</th>
                    <th className="p-3 border border-gray-200 text-[#0A2342]">Turkey</th>
                    <th className="p-3 border border-gray-200 text-[#0A2342]">UK</th>
                    <th className="p-3 border border-gray-200 text-[#0A2342]">Germany</th>
                    <th className="p-3 border border-gray-200 text-[#0A2342]">USA</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["HIV test", "€15–25", "£30–50", "€40–80", "$50–100"],
                    ["Full STI panel", "€60–120", "£150–300", "€180–350", "$250–500"],
                    ["HPV test", "€30–50", "£60–120", "€80–150", "$100–200"],
                    ["Chlamydia + Gonorrhea PCR", "€25–40", "£50–80", "€60–100", "$80–150"],
                    ["Hepatitis B + C", "€20–40", "£40–80", "€50–100", "$80–150"],
                  ].map(row => (
                    <tr key={row[0]} className="hover:bg-gray-50">
                      <td className="p-3 border border-gray-200 font-medium">{row[0]}</td>
                      <td className="p-3 border border-gray-200 text-center text-green-700 font-semibold">{row[1]}</td>
                      <td className="p-3 border border-gray-200 text-center">{row[2]}</td>
                      <td className="p-3 border border-gray-200 text-center">{row[3]}</td>
                      <td className="p-3 border border-gray-200 text-center">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500">*Prices are approximate and may vary. Contact us for current pricing.</p>
            <h2 className="text-2xl font-bold text-[#0A2342]">Why Is STI Testing Cheaper in Turkey?</h2>
            <p>Lower labour costs, more favourable currency exchange rates, and a competitive private healthcare market all contribute to Turkey&apos;s more affordable pricing. Crucially, these savings do not come at the expense of quality — Turkish private laboratories use the same PCR and ELISA technologies as their European counterparts.</p>
            <h2 className="text-2xl font-bold text-[#0A2342]">What Is Included in Our Full STI Panel?</h2>
            <p>Our full STI panel includes testing for HIV-1/2, syphilis, chlamydia, gonorrhea, herpes (HSV-1 and HSV-2), hepatitis B, hepatitis C, mycoplasma genitalium, trichomonas, and ureaplasma. HPV testing can be added for a small additional cost.</p>
            <p>Contact us via WhatsApp for a personalised quote based on your specific testing requirements.</p>
          </div>
        </article>
        <CTASection title="Get a Price Quote" subtitle="Contact us via WhatsApp for current pricing and to book your appointment." />
      </main>
    </>
  );
}
