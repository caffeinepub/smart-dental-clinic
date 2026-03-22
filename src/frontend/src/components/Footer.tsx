import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Book Appointment", href: "#book" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Root Canals",
  "Teeth Whitening",
  "Dental Implants",
  "Teeth Cleaning",
  "Cosmetic Procedures",
  "Emergency Care",
  "Paediatrics",
  "Veneers & Crowns",
];

const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com",
    hoverColor: "#1877F2",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com",
    hoverColor: "#E1306C",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
    hoverColor: "#1DA1F2",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://youtube.com",
    hoverColor: "#FF0000",
  },
];

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-white relative overflow-hidden">
      {/* Colorful wave divider at top */}
      <div
        className="h-2 w-full"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.55 0.12 230), oklch(0.75 0.12 175), oklch(0.72 0.18 35), oklch(0.65 0.18 290), oklch(0.70 0.18 350), oklch(0.55 0.12 230))",
          backgroundSize: "200% 100%",
          animation: "gradient-shift 6s linear infinite",
        }}
      />

      <div className="bg-footer pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="text-3xl animate-bounce-gentle inline-block">
                  🦷
                </span>
                <div>
                  <div className="font-display font-bold text-xl text-white">
                    SMart Dental
                  </div>
                  <div className="text-xs text-white/50">Root Canal Clinic</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Expert dental care with a gentle touch. Your smile is our
                mission.
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, label, href, hoverColor }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110"
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        hoverColor;
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        `0 4px 15px ${hoverColor}60`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "";
                      (e.currentTarget as HTMLElement).style.boxShadow = "";
                    }}
                    data-ocid="footer.link"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white text-base mb-5">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link.href)}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1"
                      data-ocid="footer.link"
                    >
                      <span
                        className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
                        style={{ background: "oklch(0.75 0.12 175)" }}
                      />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-white text-base mb-5">
                Our Services
              </h3>
              <ul className="space-y-2.5">
                {serviceLinks.map((s) => (
                  <li key={s}>
                    <button
                      type="button"
                      onClick={() => scrollTo("#services")}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-200 text-left"
                      data-ocid="footer.link"
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-white text-base mb-5">
                Contact Info
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-2 text-white/70">
                  <span className="mt-0.5">📍</span>
                  <span>SMart Dental Clinic, Hyderabad, Telangana, India</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <span>📞</span>
                  <a
                    href="tel:+918790021647"
                    className="hover:text-white transition-colors"
                    data-ocid="footer.link"
                  >
                    +91 8790021647
                  </a>
                </div>
                <div className="flex items-start gap-2 text-white/70">
                  <span className="mt-0.5">🕐</span>
                  <div className="leading-relaxed">
                    <div>Mon–Sat: 10 am – 9 pm</div>
                    <div className="text-white/50">Sun: 10 am – 2 pm</div>
                  </div>
                </div>
                <a
                  href="https://wa.me/918790021647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white text-xs font-semibold px-4 py-2 rounded-full mt-2 transition-all duration-200 hover:scale-105"
                  style={{ background: "#25D366" }}
                  data-ocid="footer.link"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {year} SMart Dental Clinic. All Rights Reserved.
            </p>
            <p className="text-white/30 text-xs">
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/60 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Colorful gradient line at very bottom */}
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.65 0.18 290), oklch(0.70 0.18 350), oklch(0.72 0.18 35), oklch(0.82 0.15 75), oklch(0.72 0.16 155), oklch(0.75 0.12 175))",
        }}
      />
    </footer>
  );
}
