import { Phone, Stethoscope, Heart, MapPin, Mail } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import { EMAIL } from "@/lib/profile";

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">Dr. Puneet Pandey</h3>
                  <p className="text-sm opacity-90">Medical Intern, MBBS</p>
                </div>
              </div>
              <p className="text-sm opacity-90 leading-relaxed mb-6">
                Committed to compassionate, patient-first care.
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Heart className="w-4 h-4" />
                <span className="text-xs">Patient Focused</span>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="font-bold text-base mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm opacity-90 hover:opacity-100 transition-opacity inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="font-bold text-base mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href={`tel:${PHONE_TEL}`} className="text-sm opacity-90 hover:opacity-100">
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href={`mailto:${EMAIL}`} className="text-sm opacity-90 hover:opacity-100">
                    {EMAIL}
                  </a>
                </div>
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm opacity-90">Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-sm opacity-75">
              © {new Date().getFullYear()} Dr. Puneet Pandey. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
