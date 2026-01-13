import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-white pt-24 pb-12">

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/img16.jpg')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/70" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                <img
                  src="/img/logo.jpg"
                  alt="Verdant Impact Logo"
                  className="w-5 h-5 object-contain"
                />

              </div>
              <span className="text-xl font-display font-bold">
                Verdant Impact
              </span>
            </div>

            <p className="text-white/70 leading-relaxed">
              Empowering climate-resilient livestock farming through community-led
              commerce and technology.
            </p>

            {/* Social Media */}
            <div className="flex gap-4">


              <a
                href="https://www.linkedin.com/company/verdantimpact/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://www.facebook.com/verdant.impact/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/verdant.impact/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>


          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>
                  Verdant Food Park, Rajawas, Jaipur-Sikar Highway, Jaipur
                  <br />
                  Rajasthan, India 302001
                </span>
              </li>

              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:info@verdantimpact.com"
                  className="hover:text-white transition-colors"
                >
                  info@verdantimpact.com
                </a>
              </li>

              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+917891011401"
                  className="hover:text-white transition-colors"
                >
                  +91 789 10 11 401
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© 2026 Verdant Impact. All rights reserved.</p>
          <p>Designed with nature in mind.</p>
        </div>
      </div>
    </footer>
  );
}
