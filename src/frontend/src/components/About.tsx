import { Award, CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  { val: "500+", label: "Happy Patients", icon: "😊" },
  { val: "10+", label: "Years Experience", icon: "🏆" },
  { val: "19+", label: "Services Offered", icon: "🦷" },
  { val: "100%", label: "Safe & Hygienic", icon: "🛡️" },
];

const highlights = [
  "Specialists in pain-free Root Canal Treatments",
  "State-of-the-art modern dental equipment",
  "Sterile, ISO-compliant hygienic environment",
  "Experienced and certified dental team",
  "Personalized care for each patient",
  "Affordable pricing with flexible payment options",
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
    <section id="about" className="section-alt py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="animate-fade-in relative">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(46,134,193,0.2)]">
              <img
                src="/assets/generated/dental-about.dim_600x500.jpg"
                alt="SMart Dental Clinic"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-card p-5 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="text-primary-blue h-6 w-6" />
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
              <span className="text-sm font-semibold text-mint uppercase tracking-widest">
                About Us
              </span>
              <h2 className="font-display text-4xl font-bold text-foreground mt-2 mb-6">
                About <span className="text-primary-blue">SMart Dental</span>{" "}
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
                  <CheckCircle2 className="h-5 w-5 text-mint flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="animate-fade-up bg-white rounded-2xl p-4 text-center shadow-card card-hover"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="font-display text-2xl font-bold text-primary-blue">
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
