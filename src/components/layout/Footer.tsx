import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-[#0A2342] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">STI Test Antalya</h3>
            <p className="text-blue-200 text-sm">{siteConfig.description}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/our-clinic" className="hover:text-white">Our Clinic</Link></li>
              <li><Link href="/our-doctors" className="hover:text-white">Our Doctors</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><Link href="/full-sti-panel" className="hover:text-white">Full STI Panel</Link></li>
              <li><Link href="/hiv-test-antalya" className="hover:text-white">HIV Testing</Link></li>
              <li><Link href="/hpv-test-antalya" className="hover:text-white">HPV Testing</Link></li>
              <li><Link href="/chlamydia-test" className="hover:text-white">Chlamydia Test</Link></li>
              <li><Link href="/syphilis-test" className="hover:text-white">Syphilis Test</Link></li>
              <li><Link href="/same-day-sti-results" className="hover:text-white">Same-Day Results</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li>📍 {siteConfig.address}</li>
              <li>📞 {siteConfig.phone}</li>
              <li>✉️ {siteConfig.email}</li>
              <li>
                <a
                  href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  💬 WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
          <p>© {new Date().getFullYear()} STI Test Antalya. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/medical-disclaimer" className="hover:text-white">Medical Disclaimer</Link>
            <Link href="/patient-privacy" className="hover:text-white">Patient Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
