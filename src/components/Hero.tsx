import { Phone, GraduationCap, Stethoscope, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PHONE_TEL } from "@/lib/contact";
import { PLACEHOLDER_PHOTO_URL } from "@/lib/profile";

export function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 sm:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Dr. Puneet Pandey
                <span className="block text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mt-2">
                  Compassionate, Patient-First Care
                </span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4 lg:px-0">
                Currently completing his medical internship at Dr. R. N. Cooper
                Municipal General Hospital, Mumbai, after completing his MBBS
                from HBT Medical College &amp; Dr. R. N. Cooper Municipal
                General Hospital, Mumbai. Committed to compassionate,
                patient-first care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button asChild size="lg" className="w-full sm:w-auto h-12 sm:h-14 text-base">
                  <a href="#contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Get In Touch
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-12 sm:h-14 text-base">
                  <a href={`tel:${PHONE_TEL}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span className="font-bold text-lg text-primary">MBBS</span>
                  </div>
                  <p className="text-sm text-muted-foreground">HBT Medical College</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <Stethoscope className="w-5 h-5 text-primary" />
                    <span className="font-bold text-lg text-primary">1 Year</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Medical Internship (Ongoing)</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <Heart className="w-5 h-5 text-primary" />
                    <span className="font-bold text-lg text-primary">Patient-First</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Compassionate Care</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 order-1 lg:order-2 w-full flex justify-center">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <img
                src={PLACEHOLDER_PHOTO_URL}
                alt="Placeholder portrait — replace with Dr. Puneet Pandey's photo"
                className="w-full h-full object-cover rounded-full shadow-xl border-4 border-white"
              />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full shadow-lg flex items-center justify-center border border-border">
                <Stethoscope className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
