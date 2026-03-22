import { Cpu, DollarSign, Heart, Phone, UserCheck } from "lucide-react";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: UserCheck,
    title: "Experienced Dentist",
    desc: "Over 10 years of specialized experience in root canal and cosmetic dentistry.",
    gradient:
      "linear-gradient(135deg, oklch(0.55 0.12 230), oklch(0.65 0.14 220))",
    glowColor: "oklch(0.55 0.12 230 / 0.35)",
    topBorder: "oklch(0.55 0.12 230)",
    iconBg: "oklch(0.94 0.05 230)",
  },
  {
    icon: Cpu,
    title: "Advanced Technology",
    desc: "State-of-the-art digital X-rays, laser equipment, and modern instruments.",
    gradient:
      "linear-gradient(135deg, oklch(0.65 0.18 290), oklch(0.55 0.16 300))",
    glowColor: "oklch(0.65 0.18 290 / 0.35)",
    topBorder: "oklch(0.65 0.18 290)",
    iconBg: "oklch(0.94 0.05 290)",
  },
  {
    icon: Heart,
    title: "Pain-free Treatments",
    desc: "Gentle techniques and modern anesthesia ensure comfortable experiences.",
    gradient:
      "linear-gradient(135deg, oklch(0.70 0.18 350), oklch(0.72 0.18 35))",
    glowColor: "oklch(0.70 0.18 350 / 0.35)",
    topBorder: "oklch(0.70 0.18 350)",
    iconBg: "oklch(0.95 0.05 350)",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    desc: "Transparent pricing with flexible payment plans to suit your budget.",
    gradient:
      "linear-gradient(135deg, oklch(0.72 0.16 155), oklch(0.65 0.14 165))",
    glowColor: "oklch(0.72 0.16 155 / 0.35)",
    topBorder: "oklch(0.72 0.16 155)",
    iconBg: "oklch(0.94 0.05 155)",
  },
  {
    icon: Phone,
    title: "Emergency Support",
    desc: "Immediate care available for dental emergencies – call us anytime.",
    gradient:
      "linear-gradient(135deg, oklch(0.72 0.18 35), oklch(0.82 0.15 55))",
    glowColor: "oklch(0.72 0.18 35 / 0.35)",
    topBorder: "oklch(0.72 0.18 35)",
    iconBg: "oklch(0.94 0.06 35)",
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
    <section
      id="why-us"
      className="py-24"
      ref={sectionRef}
      style={{
        background:
          "linear-gradient(160deg, oklch(0.96 0.03 175) 0%, oklch(0.97 0.02 200) 50%, oklch(0.96 0.025 220) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "oklch(0.65 0.18 290)" }}
          >
            Our Strengths
          </span>
          <h2 className="font-display text-4xl font-bold mt-2 mb-4">
            Why Choose <span className="text-gradient">SMart Dental?</span>
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
                className="animate-fade-up bg-white rounded-2xl p-6 text-center shadow-card transition-all duration-300 cursor-default"
                style={{
                  transitionDelay: `${idx * 100}ms`,
                  borderTop: `4px solid ${feature.topBorder}`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = `0 20px 40px ${feature.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "";
                  el.style.boxShadow = "";
                }}
                data-ocid={`why-us.item.${idx + 1}`}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: feature.iconBg }}
                >
                  <Icon
                    className="h-7 w-7"
                    style={{
                      background: feature.gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      // fallback for non-text elements
                      color: feature.topBorder,
                    }}
                  />
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
