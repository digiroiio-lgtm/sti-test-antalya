import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema } from "@/lib/schemas";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | STI Test Antalya",
  description: "Privacy policy for STI Test Antalya. How we collect, use, and protect your personal and medical information.",
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Privacy Policy", url: `${siteConfig.url}/privacy-policy` }])} />
      <main className="py-16 bg-white">
        <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        ]} />
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#0A2342] mb-8">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: January 2025</p>
          <div className="prose prose-gray max-w-none space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-bold text-[#0A2342] mb-4">1. Who We Are</h2>
              <p>STI Test Antalya (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is a private medical clinic based in Antalya, Turkey. We are committed to protecting your personal information and your right to privacy.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[#0A2342] mb-4">2. Information We Collect</h2>
              <p>We may collect the following categories of personal data:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Name and contact details (email, phone, WhatsApp)</li>
                <li>Date of birth and passport/ID information</li>
                <li>Medical and health information relevant to your consultation and testing</li>
                <li>Payment information (processed securely and not stored)</li>
                <li>Communication records (WhatsApp messages, emails)</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[#0A2342] mb-4">3. How We Use Your Information</h2>
              <p>We use your personal data solely to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide you with the medical services you have requested</li>
                <li>Communicate your test results securely</li>
                <li>Process appointments and follow-up care</li>
                <li>Comply with Turkish medical regulations and record-keeping requirements</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[#0A2342] mb-4">4. Data Sharing</h2>
              <p>We do not sell, rent, or share your personal data with third parties, except where required by Turkish law or with your explicit written consent. We do not share your information with insurance companies, employers, or other healthcare providers without your permission.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[#0A2342] mb-4">5. Data Retention</h2>
              <p>Medical records are retained for the minimum period required by Turkish medical law (typically 5 years). You may request deletion of non-medical personal data at any time.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[#0A2342] mb-4">6. Contact Us</h2>
              <p>For privacy-related enquiries, contact us at: <a href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline">{siteConfig.email}</a></p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
