import { Award, CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  {
    val: "500+",
    label: "Happy Patients",
    icon: "😊",
    gradient:
      "linear-gradient(135deg, oklch(0.55 0.12 230 / 0.15), oklch(0.75 0.12 175 / 0.15))",
    border: "oklch(0.55 0.12 230 / 0.3)",
  },
  {
    val: "10+",
    label: "Years Experience",
    icon: "🏆",
    gradient:
      "linear-gradient(135deg, oklch(0.72 0.18 35 / 0.15), oklch(0.82 0.15 75 / 0.15))",
    border: "oklch(0.72 0.18 35 / 0.3)",
  },
  {
    val: "19+",
    label: "Services Offered",
    icon: "🦷",
    gradient:
      "linear-gradient(135deg, oklch(0.65 0.18 290 / 0.15), oklch(0.70 0.18 350 / 0.15))",
    border: "oklch(0.65 0.18 290 / 0.3)",
  },
  {
    val: "100%",
    label: "Safe & Hygienic",
    icon: "🛡️",
    gradient:
      "linear-gradient(135deg, oklch(0.72 0.16 155 / 0.15), oklch(0.75 0.12 175 / 0.15))",
    border: "oklch(0.72 0.16 155 / 0.3)",
  },
];

const highlights = [
  "Specialists in pain-free Root Canal Treatments",
  "State-of-the-art modern dental equipment",
  "Sterile, ISO-compliant hygienic environment",
  "Experienced and certified dental team",
  "Personalized care for each patient",
  "Affordable pricing with flexible payment options",
];

const checkColors = [
  "oklch(0.75 0.12 175)",
  "oklch(0.55 0.12 230)",
  "oklch(0.72 0.18 35)",
  "oklch(0.65 0.18 290)",
  "oklch(0.72 0.16 155)",
  "oklch(0.70 0.18 350)",
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll(
              ".animate-fade-up, .animate-fade-in",
            );
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
      id="about"
      className="py-24"
      ref={sectionRef}
      style={{
        background:
          "linear-gradient(160deg, oklch(0.97 0.02 220) 0%, oklch(0.98 0.015 175) 50%, oklch(0.97 0.015 230) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="animate-fade-in relative">
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                boxShadow:
                  "0 20px 60px oklch(0.55 0.12 230 / 0.2), 0 0 0 3px oklch(0.75 0.12 175 / 0.3)",
              }}
            >
              <img
                src="/assets/generated/dental-about.dim_600x500.jpg"
                alt="SMart Dental Clinic"
                className="w-full h-[480px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.55 0.12 230 / 0.3), transparent 60%)",
                }}
              />
            </div>
            {/* Floating badge with animated ring */}
            <div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 animate-float animate-color-ring"
              style={{ boxShadow: "0 8px 30px oklch(0.55 0.12 230 / 0.2)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.12 230 / 0.15), oklch(0.75 0.12 175 / 0.15))",
                  }}
                >
                  <Award
                    className="h-6 w-6"
                    style={{ color: "oklch(0.55 0.12 230)" }}
                  />
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">
                    Certified Clinic
                  </div>
                  <div className="text-xs text-muted-foreground">
                    ISO Compliant
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="animate-fade-up">
              <span
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: "oklch(0.75 0.12 175)" }}
              >
                About Us
              </span>
              <h2 className="font-display text-4xl font-bold mt-2 mb-6">
                About{" "}
                <span className="text-gradient-blue-mint">SMart Dental</span>{" "}
                Clinic
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                SMart Dental is a premier root canal specialist clinic dedicated
                to providing exceptional dental care in a warm, welcoming
                environment. For over a decade, we have been transforming smiles
                and improving oral health with compassion, precision, and the
                latest technology.
              </p>
            </div>

            <ul className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <li
                  key={item}
                  className="animate-fade-up flex items-center gap-3"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <CheckCircle2
                    className="h-5 w-5 flex-shrink-0 transition-colors duration-500"
                    style={{ color: checkColors[i % checkColors.length] }}
                  />
                  <span className="text-foreground font-medium text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Stats with gradient borders */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="animate-fade-up rounded-2xl p-4 text-center card-hover"
                  style={{
                    background: stat.gradient,
                    border: `2px solid ${stat.border}`,
                  }}
                >
                  <div className="text-2xl mb-1 animate-bounce-gentle">
                    {stat.icon}
                  </div>
                  <div
                    className="font-display text-2xl font-bold"
                    style={{ color: "oklch(0.45 0.12 230)" }}
                  >
                    {stat.val}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
