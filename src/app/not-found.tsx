import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Page Not Found | STI Test Antalya",
  description: "The page you are looking for could not be found. Return to STI Test Antalya for private sexual health testing in Antalya.",
  robots: { index: false, follow: true },
};

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/sti-test-antalya", label: "STI Testing Antalya" },
  { href: "/hiv-blood-test", label: "HIV Blood Test" },
  { href: "/hpv-genotyping-test", label: "HPV Genotyping Test" },
  { href: "/androflor-test", label: "Androflor Test" },
  { href: "/sti-test-packages", label: "Test Packages" },
  { href: "/prices", label: "Pricing" },
  { href: "/contact", label: "Contact Us" },
];

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-24">
      <div className="max-w-2xl w-full text-center">
        <p className="text-6xl font-bold text-[#0A2342] mb-4">404</p>
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-10">
          The page you are looking for does not exist or has been moved. Please
          use the links below to find what you need.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block bg-gray-50 border border-gray-200 rounded-lg px-3 py-3 text-sm font-medium text-[#0A2342] hover:bg-[#0A2342] hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="bg-[#0A2342] text-white rounded-2xl p-8">
          <p className="text-lg font-semibold mb-2">Need Help?</p>
          <p className="text-blue-100 mb-6 text-sm">
            Our English-speaking team is available to assist you with booking or
            answering any questions about STI testing in Antalya.
          </p>
          <a
            href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </main>
  );
}
