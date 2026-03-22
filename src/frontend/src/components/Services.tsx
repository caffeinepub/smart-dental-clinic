import { useEffect, useRef } from "react";

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
    <section id="services" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-sm font-semibold text-mint uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="font-display text-4xl font-bold text-foreground mt-2 mb-4">
            Our Dental <span className="text-primary-blue">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive care for your entire family under one roof
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, idx) => (
            <div
              key={service.name}
              className="animate-fade-up bg-white rounded-2xl border border-border p-6 service-card-hover cursor-pointer group"
              style={{ transitionDelay: `${idx * 40}ms` }}
              data-ocid={`services.item.${idx + 1}`}
            >
              <div className="service-icon w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-2xl mb-4 transition-all duration-250">
                {service.icon}
              </div>
              <h3 className="font-semibold text-foreground text-base mb-1.5 group-hover:text-primary-blue transition-colors">
                {service.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
