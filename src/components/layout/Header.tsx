"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sti-test-antalya", label: "Services" },
  { href: "/hiv-test-antalya", label: "HIV Testing" },
  { href: "/hpv-test-antalya", label: "HPV Testing" },
  { href: "/prices", label: "Prices" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#0A2342]">
          STI Test Antalya
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-[#2563EB] font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#16A34A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm"
        >
          💬 WhatsApp
        </a>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-700"></div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#2563EB] font-medium py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`${siteConfig.whatsapp}?text=${siteConfig.whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16A34A] text-white px-4 py-2 rounded-lg font-semibold text-center mt-2"
            >
              💬 WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
