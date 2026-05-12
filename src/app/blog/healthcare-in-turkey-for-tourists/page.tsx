import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, articleSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Healthcare in Turkey for Tourists | Private Medical Guide 2025",
  description: "Complete guide to accessing private healthcare in Turkey as a tourist. Costs, quality, how to book, what to expect. Sexual health and general medicine.",
  alternates: { canonical: `${siteConfig.url}/blog/healthcare-in-turkey-for-tourists` },
  openGraph: { title: "Healthcare in Turkey for Tourists | Private Medical Guide 2025", description: "How to access private healthcare in Turkey as a tourist.", url: `${siteConfig.url}/blog/healthcare-in-turkey-for-tourists`, siteName: siteConfig.name, type: "article" },
};

export default function HealthcareTurkeyTouristsPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog` }, { name: "Healthcare in Turkey for Tourists", url: `${siteConfig.url}/blog/healthcare-in-turkey-for-tourists` }])} />
      <SchemaOrg schema={articleSchema("Healthcare in Turkey for Tourists", `${siteConfig.url}/blog/healthcare-in-turkey-for-tourists`, "2024-12-15", "Guide to private healthcare in Turkey for tourists.")} />
      <main>
        <Breadcrumb items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: "Healthcare in Turkey for Tourists", href: "/blog/healthcare-in-turkey-for-tourists" },
        ]} />
        <section className="bg-[#0A2342] text-white py-16">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-blue-300 text-sm mb-4">December 15, 2024 · 7 min read</div>
            <h1 className="text-4xl font-bold mb-4">Healthcare in Turkey for Tourists</h1>
            <p className="text-blue-200 text-xl">Everything you need to know about accessing high-quality private medical care during your visit to Turkey.</p>
          </div>
        </section>
        <article className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-gray-600 space-y-6">
            <p>Turkey has invested heavily in its private healthcare sector over the past two decades. The result is a network of modern private hospitals, specialist clinics, and diagnostic centres that offer healthcare quality comparable to Western Europe — at significantly lower cost.</p>
            <h2 className="text-2xl font-bold text-[#0A2342]">Public vs Private Healthcare in Turkey</h2>
            <p>Turkey has two tiers of healthcare: public (Devlet Hastanesi) and private (Özel Hastane). As a tourist, you can access both — but private is almost always the better choice for the following reasons:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Language:</strong> Private clinics are far more likely to have English-speaking staff</li>
              <li><strong>Wait times:</strong> Private clinics offer same-day or next-day appointments vs. potentially hours in public</li>
              <li><strong>Confidentiality:</strong> Private clinics offer superior patient privacy</li>
              <li><strong>Comfort:</strong> Modern facilities and better patient experience</li>
            </ul>
            <h2 className="text-2xl font-bold text-[#0A2342]">How Much Does Private Healthcare Cost in Turkey?</h2>
            <p>Private healthcare in Turkey costs approximately 30–70% less than equivalent private care in the UK, Germany, or the USA. A GP consultation typically costs €20–40, specialist consultations €40–80, and blood tests are priced individually or in panels.</p>
            <h2 className="text-2xl font-bold text-[#0A2342]">Do I Need Travel Insurance?</h2>
            <p>Travel insurance is recommended for Turkey. However, many tourists prefer to self-pay for sensitive services (such as sexual health testing) to maintain complete confidentiality — as insurance claims create a paper trail.</p>
            <h2 className="text-2xl font-bold text-[#0A2342]">What Should I Bring to a Private Clinic in Turkey?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Passport or national ID card</li>
              <li>Cash or credit card for payment</li>
              <li>Any relevant medical history (optional)</li>
              <li>Travel insurance documents (if claiming)</li>
            </ul>
            <h2 className="text-2xl font-bold text-[#0A2342]">Emergency Medical Care in Turkey</h2>
            <p>In an emergency, dial 112 (the European emergency number, also used in Turkey). Major private hospitals in Antalya have 24/7 emergency departments. For non-emergency medical needs during your holiday, private clinics like ours offer rapid, walk-in appointments.</p>
          </div>
        </article>
        <CTASection title="Need Healthcare in Antalya?" subtitle="Private, English-speaking clinic. Same-day appointments available." />
      </main>
    </>
  );
}
