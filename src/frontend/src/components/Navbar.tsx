import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          className="flex items-center gap-2 group"
          data-ocid="nav.link"
          onClick={() => handleNav("#home")}
        >
          <span className="text-2xl">🦷</span>
          <div>
            <span className="font-display font-bold text-lg text-primary-blue leading-none block">
              SMart Dental
            </span>
            <span className="text-xs text-muted-foreground leading-none block">
              Root Canal Clinic
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary-blue transition-colors duration-200 rounded-lg hover:bg-muted"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            className="bg-primary-blue text-white hover:opacity-90 rounded-full px-6 shadow-blue transition-all duration-200"
            onClick={() => handleNav("#book")}
            data-ocid="nav.primary_button"
          >
            Book Appointment
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          data-ocid="nav.toggle"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-2 shadow-lg">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left px-4 py-3 rounded-lg text-sm font-medium hover:bg-muted hover:text-primary-blue transition-colors"
              data-ocid="nav.link"
            >
              {link.label}
            </button>
          ))}
          <Button
            className="bg-primary-blue text-white rounded-full mt-2"
            onClick={() => handleNav("#book")}
            data-ocid="nav.primary_button"
          >
            Book Appointment
          </Button>
        </div>
      )}
    </header>
  );
}
