import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, medicalClinicSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "About Us | STI Test Antalya Private Sexual Health Clinic",
  description: "Learn about STI Test Antalya — our private sexual health clinic, our mission to provide confidential testing, and our experienced English-speaking medical team.",
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: { title: "About STI Test Antalya", description: "Private sexual health clinic in Antalya. Confidential, professional, English-speaking.", url: `${siteConfig.url}/about`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function AboutPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "About", url: `${siteConfig.url}/about` }])} />
      <SchemaOrg schema={medicalClinicSchema()} />
      <main>
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About STI Test Antalya</h1>
            <p className="text-xl text-blue-200 mb-8">Antalya&apos;s dedicated private sexual health clinic. Confidential, professional, and English-speaking.</p>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">STI Test Antalya was founded with a clear purpose: to provide international visitors and residents in Antalya with access to private, confidential, and high-quality sexual health testing services — services that are often difficult to access through public healthcare or require lengthy waits in private practice.</p>
            <p className="text-gray-600 mb-4">We understand that sexual health is personal. Our entire clinic is designed around your privacy and comfort. From your first WhatsApp message to receiving your results, every step is handled with the utmost discretion.</p>
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6 mt-10">Why We Are Different</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "English-Speaking Team", desc: "All doctors and patient-facing staff speak English fluently. No language barrier, no misunderstandings." },
                { title: "Walk-In & Same-Day Available", desc: "We accommodate last-minute and same-day bookings for tourists on tight schedules." },
                { title: "International Lab Standards", desc: "We use accredited laboratories with PCR and ELISA methodologies equivalent to UK/EU standards." },
                { title: "Complete Confidentiality", desc: "No information is ever shared with third parties. Your results are yours alone." },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-[#0A2342] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTASection title="Get in Touch" subtitle="Questions about our clinic or services? Contact us via WhatsApp anytime." />
      </main>
    </>
  );
}
