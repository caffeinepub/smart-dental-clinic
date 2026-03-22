import { Quote } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Hyderabad",
    rating: 5,
    text: "I was terrified of root canals, but Dr. SMart made it completely painless. The clinic is spotless, the team is warm, and I was in and out in under an hour. Highly recommend!",
    initials: "PS",
    topColor: "oklch(0.55 0.12 230)",
    avatarGradient:
      "linear-gradient(135deg, oklch(0.55 0.12 230), oklch(0.65 0.14 220))",
    quoteColor: "oklch(0.55 0.12 230 / 0.5)",
  },
  {
    name: "Ravi Kumar",
    location: "Secunderabad",
    rating: 5,
    text: "Excellent experience! Got teeth whitening done and the results are amazing. The staff explains every step clearly, and the pricing is very reasonable. My family now visits regularly.",
    initials: "RK",
    topColor: "oklch(0.72 0.18 35)",
    avatarGradient:
      "linear-gradient(135deg, oklch(0.72 0.18 35), oklch(0.82 0.15 55))",
    quoteColor: "oklch(0.72 0.18 35 / 0.5)",
  },
  {
    name: "Ananya Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "SMart Dental is simply the best dental clinic I've visited. The technology they use is state-of-the-art, and my dental implant procedure was smooth and professional. 10/10!",
    initials: "AR",
    topColor: "oklch(0.65 0.18 290)",
    avatarGradient:
      "linear-gradient(135deg, oklch(0.65 0.18 290), oklch(0.70 0.18 350))",
    quoteColor: "oklch(0.65 0.18 290 / 0.5)",
  },
  {
    name: "Mohammed Farhan",
    location: "Begumpet",
    rating: 5,
    text: "Brought my 8-year-old for her first check-up and she loved it! The team is amazing with kids – patient, gentle, and reassuring. We'll definitely be coming back for all our dental needs.",
    initials: "MF",
    topColor: "oklch(0.72 0.16 155)",
    avatarGradient:
      "linear-gradient(135deg, oklch(0.72 0.16 155), oklch(0.75 0.12 175))",
    quoteColor: "oklch(0.72 0.16 155 / 0.5)",
  },
];

const starDelays = ["0s", "0.2s", "0.4s", "0.6s", "0.8s"];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-4">
      <span
        className="text-lg animate-star"
        style={{ color: "oklch(0.82 0.15 75)", animationDelay: starDelays[0] }}
      >
        ★
      </span>
      <span
        className="text-lg animate-star"
        style={{ color: "oklch(0.82 0.15 75)", animationDelay: starDelays[1] }}
      >
        ★
      </span>
      <span
        className="text-lg animate-star"
        style={{ color: "oklch(0.82 0.15 75)", animationDelay: starDelays[2] }}
      >
        ★
      </span>
      <span
        className="text-lg animate-star"
        style={{ color: "oklch(0.82 0.15 75)", animationDelay: starDelays[3] }}
      >
        ★
      </span>
      <span
        className="text-lg animate-star"
        style={{ color: "oklch(0.82 0.15 75)", animationDelay: starDelays[4] }}
      >
        ★
      </span>
    </div>
  );
}

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll(".animate-fade-up");
            let i = 0;
            for (const el of els) {
              setTimeout(() => el.classList.add("in-view"), i * 120);
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
      id="testimonials"
      className="py-24"
      ref={sectionRef}
      style={{
        background:
          "linear-gradient(160deg, white 0%, oklch(0.97 0.015 220) 50%, white 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "oklch(0.70 0.18 350)" }}
          >
            Patient Stories
          </span>
          <h2 className="font-display text-4xl font-bold mt-2 mb-4">
            What Our <span className="text-gradient">Patients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real experiences from real patients who trusted us with their smiles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="animate-fade-up bg-white rounded-2xl border border-border/60 p-6 shadow-card card-hover relative overflow-hidden"
              style={{
                transitionDelay: `${idx * 120}ms`,
                borderTop: `4px solid ${t.topColor}`,
              }}
              data-ocid={`testimonials.item.${idx + 1}`}
            >
              {/* Colored quote icon */}
              <Quote
                className="h-9 w-9 absolute top-5 right-5"
                style={{ color: t.quoteColor }}
              />

              <StarRating />

              <p className="text-foreground text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: t.avatarGradient }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
