import { Quote } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Hyderabad",
    rating: 5,
    text: "I was terrified of root canals, but Dr. SMart made it completely painless. The clinic is spotless, the team is warm, and I was in and out in under an hour. Highly recommend!",
    initials: "PS",
  },
  {
    name: "Ravi Kumar",
    location: "Secunderabad",
    rating: 5,
    text: "Excellent experience! Got teeth whitening done and the results are amazing. The staff explains every step clearly, and the pricing is very reasonable. My family now visits regularly.",
    initials: "RK",
  },
  {
    name: "Ananya Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "SMart Dental is simply the best dental clinic I've visited. The technology they use is state-of-the-art, and my dental implant procedure was smooth and professional. 10/10!",
    initials: "AR",
  },
  {
    name: "Mohammed Farhan",
    location: "Begumpet",
    rating: 5,
    text: "Brought my 8-year-old for her first check-up and she loved it! The team is amazing with kids – patient, gentle, and reassuring. We'll definitely be coming back for all our dental needs.",
    initials: "MF",
  },
];

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
    <section id="testimonials" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-sm font-semibold text-mint uppercase tracking-widest">
            Patient Stories
          </span>
          <h2 className="font-display text-4xl font-bold text-foreground mt-2 mb-4">
            What Our <span className="text-primary-blue">Patients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real experiences from real patients who trusted us with their smiles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="animate-fade-up bg-white rounded-2xl border border-border p-6 shadow-card card-hover relative"
              style={{ transitionDelay: `${idx * 120}ms` }}
              data-ocid={`testimonials.item.${idx + 1}`}
            >
              <Quote className="h-8 w-8 text-primary/10 absolute top-5 right-5" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: static star ratings
                  <span key={i} className="text-star text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-foreground text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary-blue font-bold text-sm flex-shrink-0">
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
