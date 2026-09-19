import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Stethoscope,
  HeartPulse,
  Salad,
  Thermometer,
  Pill,
  Users,
  Activity,
  Siren,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Health Check-ups",
    description:
      "Comprehensive physical examinations and preventive health screenings",
    tags: ["Preventive Care", "Annual Check-up"],
  },
  {
    icon: HeartPulse,
    title: "Chronic Disease Management",
    description:
      "Expert management of diabetes, hypertension, and thyroid disorders",
    tags: ["Diabetes", "Hypertension", "Thyroid"],
  },
  {
    icon: Salad,
    title: "Lifestyle & Wellness",
    description:
      "Personalized diet plans, exercise guidance, and stress management",
    tags: ["Nutrition", "Fitness"],
  },
  {
    icon: Thermometer,
    title: "Infectious Disease Care",
    description: "Treatment of fever, viral infections, and seasonal illnesses",
    tags: ["Fever", "Viral Care"],
  },
  {
    icon: Pill,
    title: "Medication Management",
    description: "Prescription optimization and monitoring of drug interactions",
    tags: ["Prescriptions", "Follow-up"],
  },
  {
    icon: Users,
    title: "Family Medicine",
    description: "Healthcare for all age groups from children to elderly",
    tags: ["All Ages", "Family Care"],
  },
  {
    icon: Activity,
    title: "Cardiac Care",
    description: "ECG, cardiac risk assessment, and preventive cardiology",
    tags: ["ECG", "Heart Health"],
  },
  {
    icon: Siren,
    title: "Emergency Consultation",
    description: "Urgent care for acute medical conditions and emergencies",
    tags: ["Urgent Care", "24/7"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <Badge variant="secondary" className="mb-4 text-sm">
            Our Services
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Medical Services
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Comprehensive healthcare solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="border-0 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
