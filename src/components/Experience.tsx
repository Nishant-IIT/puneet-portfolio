import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <Badge variant="secondary" className="mb-4 text-sm">
            Experience
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Clinical Experience
          </h2>
        </div>

        <Card className="max-w-2xl mx-auto border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Stethoscope className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-primary">
                    Medical Intern
                  </h3>
                  <Badge variant="outline" className="text-xs">
                    1 Year (Ongoing)
                  </Badge>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Dr. R. N. Cooper Municipal General Hospital, Mumbai
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
