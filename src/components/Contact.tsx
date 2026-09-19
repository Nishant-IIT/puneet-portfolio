import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import { EMAIL } from "@/lib/profile";

const contactInfo = [
  {
    icon: Phone,
    title: "Call",
    detail: PHONE_DISPLAY,
    href: `tel:${PHONE_TEL}`,
    action: "Call Now",
    color: "text-green-600 bg-green-50",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: PHONE_DISPLAY,
    href: `https://wa.me/${PHONE_TEL.replace("+", "")}`,
    action: "Message on WhatsApp",
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: Mail,
    title: "Email",
    detail: EMAIL,
    href: `mailto:${EMAIL}`,
    action: "Send Email",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: MapPin,
    title: "Based In",
    detail: "Mumbai, India",
    color: "text-blue-600 bg-blue-50",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <Badge variant="secondary" className="mb-4 text-sm">
            Get In Touch
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Contact
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Feel free to reach out by phone, WhatsApp, or email.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <Card key={info.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${info.color}`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-1 text-primary">
                    {info.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{info.detail}</p>
                  {info.href && (
                    <Button asChild variant="outline" size="sm" className="text-xs sm:text-sm">
                      <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                        {info.action}
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
