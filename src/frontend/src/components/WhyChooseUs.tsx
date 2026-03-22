import { Cpu, DollarSign, Heart, Phone, UserCheck } from "lucide-react";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: UserCheck,
    title: "Experienced Dentist",
    desc: "Over 10 years of specialized experience in root canal and cosmetic dentistry.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Cpu,
    title: "Advanced Technology",
    desc: "State-of-the-art digital X-rays, laser equipment, and modern instruments.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Heart,
    title: "Pain-free Treatments",
    desc: "Gentle techniques and modern anesthesia ensure comfortable experiences.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    desc: "Transparent pricing with flexible payment plans to suit your budget.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Phone,
    title: "Emergency Support",
    desc: "Immediate care available for dental emergencies – call us anytime.",
    color: "bg-orange-50 text-orange-600",
  },
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll(".animate-fade-up");
            let i = 0;
            for (const el of els) {
              setTimeout(() => el.classList.add("in-view"), i * 100);
              i++;
            }
          }
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="section-alt py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-sm font-semibold text-mint uppercase tracking-widest">
            Our Strengths
          </span>
          <h2 className="font-display text-4xl font-bold text-foreground mt-2 mb-4">
            Why Choose <span className="text-primary-blue">SMart Dental?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine expertise, technology, and compassion for the best dental
            experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="animate-fade-up bg-white rounded-2xl p-6 text-center shadow-card card-hover"
                style={{ transitionDelay: `${idx * 100}ms` }}
                data-ocid={`why-us.item.${idx + 1}`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mx-auto mb-5`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
