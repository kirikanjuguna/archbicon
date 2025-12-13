import Link from "next/link";
import { Building2, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-sky-100">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="w-7 h-7 text-sky-300" />
            <span className="text-2xl font-bold">Archbicon</span>
          </div>
          <p className="text-sky-200 text-sm leading-relaxed max-w-sm">
            Architectural design, construction management, and consultancy —
            building modern spaces with precision, creativity, and excellence.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sky-200">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-4 text-sky-200 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-sky-300" />
              info@archbicon.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-sky-300" />
              +254 700 000 000
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sky-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sky-300 text-sm">
          © {new Date().getFullYear()} Archbicon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
