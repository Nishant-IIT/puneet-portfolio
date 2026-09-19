import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Heart, Stethoscope } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import { PLACEHOLDER_PHOTO_URL } from "@/lib/profile";

const quickFacts = [
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, India",
  },
  {
    icon: Phone,
    label: "Direct Line",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_TEL}`,
  },
  {
    icon: Stethoscope,
    label: "Currently",
    value: "Medical Intern (Ongoing)",
  },
];

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <Badge variant="secondary" className="mb-4 text-sm">
            About
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Dedicated to Patient-First Care
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="relative order-2 lg:order-1">
            <img
              src={PLACEHOLDER_PHOTO_URL}
              alt="Placeholder portrait — replace with Dr. Puneet Pandey's photo"
              className="w-full h-[300px] sm:h-[400px] lg:h-[460px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Dedicated to Patient Care</p>
                    <p className="text-xs text-muted-foreground">
                      Compassionate, patient-first medicine
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">
                A Commitment to Compassionate Medicine
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-sm sm:text-base">
                  Dr. Puneet Pandey is currently completing his medical
                  internship at Dr. R. N. Cooper Municipal General Hospital,
                  Mumbai, after completing his MBBS from HBT Medical College
                  &amp; Dr. R. N. Cooper Municipal General Hospital, Mumbai.
                </p>
                <p className="text-sm sm:text-base">
                  Committed to compassionate, patient-first care, he brings a
                  thorough and attentive approach to every stage of his
                  clinical training, focused on treating patients with the
                  respect and understanding they deserve.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {quickFacts.map((fact) => {
                const Icon = fact.icon;
                const content = (
                  <>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">
                      {fact.label}
                    </p>
                    <p className="text-sm font-semibold text-primary">{fact.value}</p>
                  </>
                );
                return (
                  <div key={fact.label} className="text-center sm:text-left">
                    {fact.href ? (
                      <a href={fact.href}>{content}</a>
                    ) : (
                      content
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
