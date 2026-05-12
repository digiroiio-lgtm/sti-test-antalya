import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schemas";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Private HIV Testing Antalya | Confidential HIV Test Turkey",
  description:
    "Private and confidential HIV testing in Antalya. Anonymous testing available. English-speaking doctors. Same-day or next-day results. No referral needed.",
  alternates: { canonical: `${siteConfig.url}/private-hiv-testing` },
  openGraph: {
    title: "Private HIV Testing Antalya | Confidential HIV Test Turkey",
    description: "Private HIV testing in Antalya. Anonymous, confidential, fast. English-speaking clinic.",
    url: `${siteConfig.url}/private-hiv-testing`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "Is private HIV testing truly confidential?",
    a: "Yes. All HIV testing at our clinic is fully confidential. Results are never shared with employers, insurance companies, or any third party without your explicit written consent.",
  },
  {
    q: "Can I get an anonymous HIV test in Antalya?",
    a: "Yes. Anonymous testing means no documentation linking your identity to your result. You attend under a reference number rather than your name. Anonymous results cannot be used for official documentation.",
  },
  {
    q: "Do I need a referral for private HIV testing in Turkey?",
    a: "No. Private clinics in Turkey do not require a doctor's referral. You can book directly by WhatsApp, phone, or walk in.",
  },
  {
    q: "How long do private HIV test results take in Antalya?",
    a: "Laboratory HIV tests are typically available the same day or within 24 hours. Rapid HIV tests provide results in 20–30 minutes.",
  },
  {
    q: "Will HIV testing affect my travel insurance?",
    a: "Private, anonymous HIV testing does not appear on insurance records. If confidentiality is important to you, we recommend our anonymous testing option. Discuss any specific concerns with our team.",
  },
];

export default function PrivateHIVTestingPage() {
  return (
    <>
      <SchemaOrg
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "HIV Test Antalya", url: `${siteConfig.url}/hiv-test-antalya` },
          { name: "Private HIV Testing", url: `${siteConfig.url}/private-hiv-testing` },
        ])}
      />
      <SchemaOrg schema={faqSchema(faqs)} />

      <main>
        <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "Private HIV Testing Antalya", href: "/private-hiv-testing" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Private HIV Testing in Antalya</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Completely confidential HIV testing in Antalya. Anonymous testing available. English-speaking doctors. No referral needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                💬 Book Private HIV Test
              </a>
              <Link
                href="/hiv-test-price-antalya"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0A2342] transition-colors"
              >
                Pricing — From £240
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Your Privacy Is Our Priority</h2>
            <p className="text-gray-600 mb-6">
              We understand that HIV testing requires absolute discretion. Our clinic operates a strictly private, confidential service designed to protect your personal information at every step.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "🔒", title: "No Third-Party Disclosure", desc: "Results are never shared with employers, insurers, or any third party without explicit written consent." },
                { icon: "👤", title: "Anonymous Testing Option", desc: "Test under a reference number rather than your name. Ideal if you require complete anonymity." },
                { icon: "🖥️", title: "Secure Digital Results", desc: "Results delivered via secure digital channel. No paper trail in unsecured correspondence." },
                { icon: "🗣️", title: "English-Speaking Team", desc: "Our team communicates clearly and sensitively throughout the testing process." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-[#F9FAFB] rounded-lg">
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-[#0A2342] mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#F9FAFB]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Related Pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "HIV Test Antalya", href: "/hiv-test-antalya" },
                { label: "HIV Blood Test", href: "/hiv-blood-test" },
                { label: "Rapid HIV Test", href: "/rapid-hiv-test-antalya" },
                { label: "Rapid vs Lab HIV Test", href: "/rapid-hiv-test-vs-laboratory-test" },
                { label: "HIV Test Price", href: "/hiv-test-price-antalya" },
                { label: "Anonymous Testing", href: "/anonymous-sti-testing" },
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
        <CTASection title="Book Private HIV Testing Today" subtitle="Completely confidential. Anonymous option available. Same-day appointments in Antalya." />
      </main>
    </>
  );
}
