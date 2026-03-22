import { Button } from "@/components/ui/button";
import { CalendarCheck, ChevronDown, Heart, PhoneCall } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const clinicPhotos = [
  {
    src: "/assets/generated/clinic-interior-1.dim_800x600.jpg",
    alt: "Our Clinic",
    label: "Our Clinic",
  },
  {
    src: "/assets/generated/clinic-interior-2.dim_800x600.jpg",
    alt: "Treatment Room",
    label: "Treatment Room",
  },
  {
    src: "/assets/generated/clinic-interior-3.dim_800x600.jpg",
    alt: "Waiting Area",
    label: "Waiting Area",
  },
];

const stats = [
  { val: 500, suffix: "+", label: "Happy Patients" },
  { val: 10, suffix: "+", label: "Years Experience" },
  { val: 19, suffix: "+", label: "Services" },
];

const statColors = [
  "oklch(0.55 0.12 230)",
  "oklch(0.72 0.18 35)",
  "oklch(0.65 0.18 290)",
];

const particles = [
  { id: "tooth-1", emoji: "🦷", left: 8, top: 15, delay: 0, dur: 3 },
  { id: "sparkle-1", emoji: "✨", left: 20, top: 40, delay: 0.5, dur: 4 },
  { id: "tooth-2", emoji: "🦷", left: 32, top: 65, delay: 1, dur: 3 },
  { id: "sparkle-2", emoji: "✨", left: 44, top: 15, delay: 1.5, dur: 5 },
  { id: "tooth-3", emoji: "🦷", left: 56, top: 40, delay: 2, dur: 3 },
  { id: "sparkle-3", emoji: "✨", left: 68, top: 65, delay: 2.5, dur: 4 },
  { id: "tooth-4", emoji: "🦷", left: 80, top: 15, delay: 3, dur: 3 },
  { id: "sparkle-4", emoji: "✨", left: 92, top: 40, delay: 3.5, dur: 5 },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const photosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (contentRef.current) contentRef.current.classList.add("in-view");
      if (photosRef.current) photosRef.current.classList.add("in-view");
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
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.96 0.03 220) 0%, oklch(0.98 0.02 175) 40%, oklch(0.97 0.03 35) 80%, oklch(0.96 0.03 220) 100%)",
          backgroundSize: "300% 300%",
        }}
      />

      {/* Hero image overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/dental-hero.dim_1200x800.jpg"
          alt="Dental clinic"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/30" />
      </div>

      {/* Floating decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="animate-blob absolute rounded-full opacity-20"
          style={{
            width: "400px",
            height: "400px",
            top: "-100px",
            right: "10%",
            background:
              "radial-gradient(circle, oklch(0.75 0.12 175), oklch(0.55 0.12 230))",
            filter: "blur(60px)",
          }}
        />
        <div
          className="animate-blob-delay-2 absolute rounded-full opacity-15"
          style={{
            width: "300px",
            height: "300px",
            bottom: "10%",
            left: "5%",
            background:
              "radial-gradient(circle, oklch(0.72 0.18 35), oklch(0.82 0.15 75))",
            filter: "blur(50px)",
          }}
        />
        <div
          className="animate-blob-delay-4 absolute rounded-full opacity-10"
          style={{
            width: "250px",
            height: "250px",
            top: "40%",
            right: "30%",
            background:
              "radial-gradient(circle, oklch(0.65 0.18 290), oklch(0.75 0.12 175))",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Floating dental emoji particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute text-2xl opacity-10 animate-float"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
            }}
          >
            {p.emoji}
          </span>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div ref={contentRef} className="animate-fade-up">
            {/* Specialty badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-4 border"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.12 230 / 0.1), oklch(0.75 0.12 175 / 0.1))",
                borderColor: "oklch(0.75 0.12 175 / 0.4)",
                color: "oklch(0.45 0.12 230)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-scale-pulse inline-block"
                style={{ background: "oklch(0.75 0.12 175)" }}
              />
              Trusted Root Canal Specialists
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4">
              <span className="text-gradient-blue-mint">Brighten Your</span>{" "}
              <span className="relative inline-block">
                <span className="text-gradient">Smile</span>
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 10 Q100 2 198 10"
                    stroke="oklch(0.72 0.18 35)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              <span className="text-primary-blue">with Expert Dental Care</span>
            </h1>

            {/* Tagline - vibrant animated */}
            <div
              className="inline-flex items-center gap-2.5 rounded-2xl px-5 py-3 mb-6 shadow-lg animate-gradient"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.72 0.18 35), oklch(0.65 0.18 290), oklch(0.55 0.12 230))",
                backgroundSize: "200% 200%",
              }}
            >
              <Heart className="h-5 w-5 fill-white text-white shrink-0 animate-scale-pulse" />
              <span className="font-bold text-base sm:text-lg tracking-wide text-white">
                We want your safety, not money
              </span>
            </div>

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
                className="text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 border-0"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.75 0.12 175), oklch(0.55 0.12 230))",
                }}
                onClick={scrollToBook}
                data-ocid="hero.primary_button"
              >
                <CalendarCheck className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <a
                href="tel:+918790021647"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 font-semibold text-base transition-all duration-200 hover:scale-105"
                style={{
                  borderColor: "oklch(0.72 0.18 35)",
                  color: "oklch(0.58 0.18 35)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "oklch(0.72 0.18 35)";
                  (e.currentTarget as HTMLElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.color =
                    "oklch(0.58 0.18 35)";
                }}
                data-ocid="hero.secondary_button"
              >
                <PhoneCall className="h-5 w-5" />
                Call: +91 8790021647
              </a>
            </div>

            {/* Trust indicators with count-up */}
            <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-border/50">
              {stats.map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="font-display text-2xl font-bold"
                    style={{ color: statColors[i] }}
                  >
                    <CountUp target={stat.val} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Clinic photos collage */}
          <div
            ref={photosRef}
            className="hidden lg:grid animate-fade-up"
            style={{
              animationDelay: "0.2s",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "auto auto",
              gap: "12px",
            }}
          >
            {/* Large photo spans 2 rows */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl group"
              style={{ gridRow: "1 / 3" }}
            >
              <img
                src={clinicPhotos[0].src}
                alt={clinicPhotos[0].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ minHeight: "280px" }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.12 230 / 0.3), oklch(0.75 0.12 175 / 0.2))",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <span className="text-white text-sm font-semibold">
                  {clinicPhotos[0].label}
                </span>
              </div>
            </div>

            {/* Two smaller photos stacked */}
            {clinicPhotos.slice(1).map((photo, i) => (
              <div
                key={photo.alt}
                className="relative rounded-2xl overflow-hidden shadow-lg group"
                style={{ height: "160px" }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      i === 0
                        ? "oklch(0.72 0.18 35 / 0.25)"
                        : "oklch(0.65 0.18 290 / 0.25)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3">
                  <span className="text-white text-xs font-semibold">
                    {photo.label}
                  </span>
                </div>
              </div>
            ))}

            {/* Badge overlay */}
            <div className="col-span-2 flex justify-center">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 shadow-md border animate-color-ring"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(8px)",
                  borderColor: "oklch(0.75 0.12 175 / 0.4)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-scale-pulse"
                  style={{ background: "oklch(0.75 0.12 175)" }}
                />
                <span className="text-sm font-medium text-primary-blue">
                  State-of-the-art facility
                </span>
              </div>
            </div>
          </div>

          {/* Mobile: horizontal scroll photos */}
          <div className="lg:hidden flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory">
            {clinicPhotos.map((photo) => (
              <div
                key={photo.alt}
                className="relative rounded-xl overflow-hidden shadow-md shrink-0 snap-start"
                style={{ width: "200px", height: "140px" }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2">
                  <span className="text-white text-xs font-semibold">
                    {photo.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown
          className="h-8 w-8"
          style={{ color: "oklch(0.55 0.12 230 / 0.5)" }}
        />
      </div>
    </section>
  );
}
