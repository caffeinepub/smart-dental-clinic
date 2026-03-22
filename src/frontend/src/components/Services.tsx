import { useEffect, useRef } from "react";

const serviceColors = [
  {
    bg: "oklch(0.94 0.05 230)",
    icon: "oklch(0.55 0.12 230)",
    hover: "oklch(0.55 0.12 230)",
  },
  {
    bg: "oklch(0.94 0.05 175)",
    icon: "oklch(0.65 0.14 175)",
    hover: "oklch(0.65 0.14 175)",
  },
  {
    bg: "oklch(0.94 0.06 35)",
    icon: "oklch(0.62 0.16 35)",
    hover: "oklch(0.62 0.16 35)",
  },
  {
    bg: "oklch(0.94 0.05 290)",
    icon: "oklch(0.55 0.16 290)",
    hover: "oklch(0.55 0.16 290)",
  },
  {
    bg: "oklch(0.94 0.05 155)",
    icon: "oklch(0.58 0.15 155)",
    hover: "oklch(0.58 0.15 155)",
  },
];

const services = [
  {
    icon: "✨",
    name: "Teeth Whitening",
    desc: "Brighten your smile with professional whitening",
  },
  {
    icon: "🔗",
    name: "Bonding",
    desc: "Repair chips and cracks with tooth-colored resin",
  },
  {
    icon: "🔍",
    name: "Check-ups",
    desc: "Regular exams for optimal oral health",
  },
  {
    icon: "💎",
    name: "Cosmetic Procedures",
    desc: "Transform your smile with cosmetic dentistry",
  },
  {
    icon: "🦷",
    name: "Dental Implants",
    desc: "Permanent tooth replacement solutions",
  },
  {
    icon: "🦴",
    name: "Dentures & Bridges",
    desc: "Restore missing teeth with custom prosthetics",
  },
  {
    icon: "🚨",
    name: "Emergency Care",
    desc: "Immediate relief for dental emergencies 24/7",
  },
  {
    icon: "⚕️",
    name: "Extractions",
    desc: "Safe and gentle tooth removal procedures",
  },
  {
    icon: "🩹",
    name: "Fillings & Sealants",
    desc: "Cavity treatment and prevention coatings",
  },
  {
    icon: "🔬",
    name: "Laser Dentistry",
    desc: "Precise treatment with advanced laser technology",
  },
  {
    icon: "🛡️",
    name: "Mouth Guards",
    desc: "Custom protection for sports and bruxism",
  },
  {
    icon: "📅",
    name: "Online Dentist Booking",
    desc: "Convenient appointment scheduling online",
  },
  {
    icon: "🏥",
    name: "Oral Surgery",
    desc: "Complex procedures performed by specialists",
  },
  {
    icon: "👶",
    name: "Paediatrics",
    desc: "Gentle dental care for children of all ages",
  },
  {
    icon: "🦷",
    name: "Root Canals",
    desc: "Expert pain-free root canal treatments",
  },
  {
    icon: "🪥",
    name: "Teeth Cleaning",
    desc: "Professional scaling and polishing",
  },
  {
    icon: "📐",
    name: "Teeth Reshaping",
    desc: "Contouring for a symmetrical perfect smile",
  },
  {
    icon: "👑",
    name: "Veneers & Crowns",
    desc: "Porcelain covers for a flawless appearance",
  },
  { icon: "🩻", name: "X-ray", desc: "Digital X-rays for precise diagnosis" },
];

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll(".animate-fade-up");
            let i = 0;
            for (const el of els) {
              setTimeout(() => el.classList.add("in-view"), i * 60);
              i++;
            }
          }
        }
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="py-24 relative"
      ref={sectionRef}
      style={{
        background:
          "repeating-linear-gradient(135deg, white 0px, white 40px, oklch(0.97 0.02 220) 40px, oklch(0.97 0.02 220) 41px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "oklch(0.72 0.18 35)" }}
          >
            What We Offer
          </span>
          <h2 className="font-display text-4xl font-bold mt-2 mb-4">
            Our Dental <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive care for your entire family under one roof
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, idx) => {
            const color = serviceColors[idx % serviceColors.length];
            return (
              <div
                key={service.name}
                className="animate-fade-up bg-white rounded-2xl border border-border/60 p-6 service-card-hover cursor-pointer group relative overflow-hidden"
                style={{
                  transitionDelay: `${idx * 40}ms`,
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = `0 10px 30px ${color.hover}40`;
                  el.style.borderColor = `${color.hover}60`;
                  el.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "";
                  el.style.borderColor = "";
                  el.style.transform = "";
                }}
                data-ocid={`services.item.${idx + 1}`}
              >
                {/* Top color accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${color.icon}, ${color.bg})`,
                  }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-all duration-300"
                  style={{ background: color.bg }}
                >
                  <span className="group-hover:animate-bounce-gentle inline-block">
                    {service.icon}
                  </span>
                </div>
                <h3
                  className="font-semibold text-foreground text-base mb-1.5 transition-colors duration-200"
                  style={{} as React.CSSProperties}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = color.icon;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "";
                  }}
                >
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
