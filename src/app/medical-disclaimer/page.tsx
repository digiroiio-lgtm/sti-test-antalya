import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Medical Disclaimer | STI Test Antalya",
  description: "Medical disclaimer for STI Test Antalya. Information about the nature of content on this website and its limitations.",
  alternates: { canonical: `${siteConfig.url}/medical-disclaimer` },
};

export default function MedicalDisclaimerPage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Medical Disclaimer", url: `${siteConfig.url}/medical-disclaimer` }])} />
      <main className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#0A2342] mb-8">Medical Disclaimer</h1>
          <div className="prose prose-gray max-w-none space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-bold text-[#0A2342] mb-4">General Information Only</h2>
              <p>The content on the STI Test Antalya website is provided for general informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[#0A2342] mb-4">No Doctor-Patient Relationship</h2>
              <p>Reading or using information on this website does not create a doctor-patient relationship between you and STI Test Antalya. Always seek the advice of your doctor or qualified healthcare provider with any questions regarding a medical condition.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[#0A2342] mb-4">Test Results</h2>
              <p>Laboratory test results must be interpreted by a qualified medical professional in the context of your individual clinical situation. A negative test result does not guarantee the absence of infection — all tests have a window period and a small margin of uncertainty.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[#0A2342] mb-4">Emergency Situations</h2>
              <p>If you are experiencing a medical emergency, contact the emergency services (112 in Turkey) immediately. Do not use this website to seek emergency medical advice.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[#0A2342] mb-4">Accuracy of Information</h2>
              <p>While we make every effort to keep information current and accurate, medical guidance evolves. We recommend consulting a healthcare professional for the most up-to-date advice relevant to your situation.</p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
