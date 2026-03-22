import { Button } from "@/components/ui/button";
import { CalendarCheck, ChevronDown, PhoneCall } from "lucide-react";
import { useEffect, useRef } from "react";

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.classList.add("in-view");
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToBook = () => {
    document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/dental-hero.dim_1200x800.jpg"
          alt="Dental clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-2xl">
          <div ref={contentRef} className="animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary-blue rounded-full px-4 py-1.5 text-sm font-medium mb-6 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse inline-block" />
              Trusted Root Canal Specialists
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-blue leading-[1.1] mb-6">
              Brighten Your{" "}
              <span className="text-mint relative">
                Smile
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 10 Q100 2 198 10"
                    stroke="oklch(0.75 0.12 175)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              with Expert Dental Care
            </h1>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Advanced treatments with gentle care –{" "}
              <span className="font-semibold text-foreground">
                your comfort is our priority.
              </span>{" "}
              Specializing in pain-free root canal treatments and comprehensive
              dental services.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-mint text-white hover:opacity-90 rounded-full px-8 py-6 text-base font-semibold shadow-mint transition-all duration-200 hover:shadow-lg"
                onClick={scrollToBook}
                data-ocid="hero.primary_button"
              >
                <CalendarCheck className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <a
                href="tel:+918790021647"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary-blue font-semibold text-base hover:bg-primary hover:text-white transition-all duration-200"
                data-ocid="hero.secondary_button"
              >
                <PhoneCall className="h-5 w-5" />
                Call Now: +91 8790021647
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-border/50">
              {[
                { val: "500+", label: "Happy Patients" },
                { val: "10+", label: "Years Experience" },
                { val: "19+", label: "Services" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl font-bold text-primary-blue">
                    {stat.val}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-primary/40 h-8 w-8" />
      </div>
    </section>
  );
}
