import { Link } from "react-router-dom";
import { Instagram, Youtube, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { NAV, SITE } from "../lib/content";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-white/20 shadow-[3px_3px_0px_0px_rgba(245,124,0,1)] bg-white">
                <img src={SITE.logo} alt={`${SITE.shortName} logo`} className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="block font-bold text-lg leading-tight">{SITE.shortName}</span>
                <span className="block text-[10px] text-gray-400 uppercase tracking-wide">Matric HR. Sec. School</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A trusted Matric Higher Secondary School in Padalur, committed to academic excellence,
              values, and the all-round development of every child.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-school-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-school-orange transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-school-orange transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-gray-400 hover:text-school-orange text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><Link to="/events" className="text-gray-400 hover:text-school-orange text-sm transition-colors">Yoga & Wellness</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-school-orange text-sm transition-colors">Sports & Games</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-school-orange text-sm transition-colors">Arts & Culture</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-school-orange text-sm transition-colors">Community Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 mt-0.5 text-school-orange" />
                {SITE.phone}
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 mt-0.5 text-school-orange" />
                {SITE.email}
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 text-school-orange" />
                {SITE.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-school-orange transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-school-orange transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
