import { useAuth } from "@/components/auth";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, LogIn, LogOut, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  onOpenDashboard?: () => void;
}

export function Navbar({ onOpenDashboard }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, isLoggingIn, login, logout } = useAuth();

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

        {/* Right side buttons */}
        <div className="hidden lg:flex items-center gap-2">
          {isAuthenticated ? (
            <>
              <Button
                variant="outline"
                size="sm"
                className="border-[#2E86C1] text-[#2E86C1] hover:bg-blue-50 rounded-full px-4"
                onClick={onOpenDashboard}
                data-ocid="nav.primary_button"
              >
                <LayoutDashboard size={14} className="mr-1.5" />
                Dashboard
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full px-4"
                onClick={logout}
                data-ocid="nav.secondary_button"
              >
                <LogOut size={14} className="mr-1.5" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-500 hover:text-[#2E86C1] rounded-full px-4"
                onClick={login}
                disabled={isLoggingIn}
                data-ocid="nav.secondary_button"
              >
                <LogIn size={14} className="mr-1.5" />
                {isLoggingIn ? "Signing in..." : "Admin Login"}
              </Button>
              <Button
                className="bg-primary-blue text-white hover:opacity-90 rounded-full px-6 shadow-blue transition-all duration-200"
                onClick={() => handleNav("#book")}
                data-ocid="nav.primary_button"
              >
                Book Appointment
              </Button>
            </>
          )}
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
          {isAuthenticated ? (
            <>
              <Button
                variant="outline"
                className="border-[#2E86C1] text-[#2E86C1] rounded-full mt-1"
                onClick={() => {
                  setMenuOpen(false);
                  onOpenDashboard?.();
                }}
                data-ocid="nav.primary_button"
              >
                <LayoutDashboard size={14} className="mr-1.5" />
                Admin Dashboard
              </Button>
              <Button
                variant="ghost"
                className="text-red-500 hover:bg-red-50 rounded-full"
                onClick={() => {
                  setMenuOpen(false);
                  logout();
                }}
                data-ocid="nav.secondary_button"
              >
                <LogOut size={14} className="mr-1.5" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                className="bg-primary-blue text-white rounded-full mt-2"
                onClick={() => handleNav("#book")}
                data-ocid="nav.primary_button"
              >
                Book Appointment
              </Button>
              <Button
                variant="ghost"
                className="text-gray-500 hover:text-[#2E86C1] rounded-full"
                onClick={login}
                disabled={isLoggingIn}
                data-ocid="nav.secondary_button"
              >
                <LogIn size={14} className="mr-1.5" />
                {isLoggingIn ? "Signing in..." : "Admin Login"}
              </Button>
            </>
          )}
        </div>
      )}
    </header>
  );
}
