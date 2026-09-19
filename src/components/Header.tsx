"use client";

import { useState } from "react";
import { Menu, Phone, Stethoscope } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
              <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-primary">
                Dr. Puneet Pandey
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                Medical Intern, MBBS
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="ml-4">
              <a href={`tel:${PHONE_TEL}`}>
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </nav>

          <div className="lg:hidden flex items-center gap-3">
            <Button asChild size="sm" className="hidden sm:flex">
              <a href={`tel:${PHONE_TEL}`}>
                <Phone className="w-4 h-4 mr-2" />
                Call
              </a>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-0">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Links to sections of the site and contact options
                </SheetDescription>
                <div className="flex flex-col space-y-6 mt-8 px-4">
                  <div className="text-center pb-4 border-b border-border">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <Stethoscope className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-primary">
                      Dr. Puneet Pandey
                    </h2>
                    <p className="text-muted-foreground">Medical Intern, MBBS</p>
                  </div>

                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={handleNavClick}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>

                  <div className="pt-4 space-y-3">
                    <Button asChild className="w-full h-12" onClick={handleNavClick}>
                      <a href={`tel:${PHONE_TEL}`}>
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                      </a>
                    </Button>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">
                        Reach out directly
                      </p>
                      <a href={`tel:${PHONE_TEL}`} className="text-primary font-semibold">
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
