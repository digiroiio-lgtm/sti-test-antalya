import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import CTASection from "@/components/ui/CTASection";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema } from "@/lib/schemas";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Our Doctors | STI Test Antalya Private Sexual Health Clinic",
  description: "Meet our experienced, English-speaking sexual health doctors at STI Test Antalya. Qualified specialists in sexual and reproductive medicine.",
  alternates: { canonical: `${siteConfig.url}/our-doctors` },
  openGraph: { title: "Our Doctors | STI Test Antalya", description: "English-speaking sexual health doctors in Antalya, Turkey.", url: `${siteConfig.url}/our-doctors`, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function OurDoctorsPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Our Doctors", url: `${siteConfig.url}/our-doctors` }])} />
      <main>
        <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "Our Doctors", href: "/our-doctors" },
        ]} />
        <section className="bg-[#0A2342] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Medical Team</h1>
            <p className="text-xl text-blue-200">Experienced, empathetic, English-speaking sexual health specialists.</p>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Specialists in Sexual Health Medicine</h2>
            <p className="text-gray-600 mb-4">Our clinical team comprises experienced doctors with specialist training in sexual and reproductive medicine, genitourinary medicine (GUM), and infectious disease. All our doctors are registered with the Turkish Medical Association and hold specialist qualifications.</p>
            <p className="text-gray-600 mb-4">We understand that visiting a sexual health clinic can feel sensitive. Our doctors approach every consultation with empathy, professionalism, and complete non-judgement. There is no question too personal — your health is our only concern.</p>
            <h3 className="text-xl font-bold text-[#0A2342] mb-4 mt-8">Our Commitment to You</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✓ All doctors speak fluent English</li>
              <li>✓ Specialist training in sexual health medicine</li>
              <li>✓ Non-judgmental, empathetic consultations</li>
              <li>✓ Complete medical confidentiality</li>
              <li>✓ Up-to-date knowledge of current STI guidelines</li>
              <li>✓ Female doctors available upon request</li>
            </ul>
            <div className="bg-blue-50 rounded-lg p-6 mt-8 border border-blue-100">
              <p className="text-gray-600 text-sm">For patient privacy, we do not publish individual doctor profiles online. Please contact us via WhatsApp if you have specific requirements regarding your consultation, including a preference for a female doctor.</p>
            </div>
          </div>
        </section>
        <CTASection title="Book a Consultation" subtitle="Our doctors are ready to help. Private, confidential, English-language appointments available." />
      </main>
    </>
  );
}
