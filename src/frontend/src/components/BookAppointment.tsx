import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBookAppointment } from "@/hooks/useQueries";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

const servicesList = [
  "Teeth Whitening",
  "Bonding",
  "Check-ups",
  "Cosmetic Procedures",
  "Dental Implants",
  "Dentures & Bridges",
  "Emergency Care",
  "Extractions",
  "Fillings & Sealants",
  "Laser Dentistry",
  "Mouth Guards",
  "Online Dentist Booking",
  "Oral Surgery",
  "Paediatrics",
  "Root Canals",
  "Teeth Cleaning",
  "Teeth Reshaping",
  "Veneers & Crowns",
  "X-ray",
];

export function BookAppointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
  });
  const { mutate, isPending, isSuccess, isError } = useBookAppointment();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service || !form.date) return;
    mutate(form);
  };

  const updateField =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <section
      id="book"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.55 0.12 230) 0%, oklch(0.42 0.1 235) 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-white/70 uppercase tracking-widest">
            Quick & Easy Booking
          </span>
          <h2 className="font-display text-4xl font-bold text-white mt-2 mb-3">
            Book Your Appointment
          </h2>
          <p className="text-white/70">
            Fill in the form below and we'll confirm your visit within the hour
          </p>
        </div>

        <div
          className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] p-8 md:p-10"
          data-ocid="book.panel"
        >
          {isSuccess ? (
            <div className="text-center py-10" data-ocid="book.success_state">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="h-10 w-10 text-green-500" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Appointment Requested!
              </h3>
              <p className="text-muted-foreground mb-6">
                Thank you, {form.name}! We'll call you at {form.phone} to
                confirm your appointment.
              </p>
              <Button
                onClick={() =>
                  setForm({ name: "", phone: "", service: "", date: "" })
                }
                className="bg-primary-blue text-white rounded-full"
                data-ocid="book.secondary_button"
              >
                Book Another
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="space-y-2">
                <Label htmlFor="book-name" className="text-sm font-medium">
                  Full Name *
                </Label>
                <Input
                  id="book-name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={updateField("name")}
                  required
                  className="rounded-xl border-border focus:border-primary"
                  data-ocid="book.input"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="book-phone" className="text-sm font-medium">
                  Phone Number *
                </Label>
                <Input
                  id="book-phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={updateField("phone")}
                  required
                  className="rounded-xl border-border"
                  data-ocid="book.input"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Service *</Label>
                <Select
                  value={form.service}
                  onValueChange={(v) =>
                    setForm((prev) => ({ ...prev, service: v }))
                  }
                  required
                >
                  <SelectTrigger className="rounded-xl" data-ocid="book.select">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {servicesList.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="book-date" className="text-sm font-medium">
                  Preferred Date *
                </Label>
                <Input
                  id="book-date"
                  type="date"
                  value={form.date}
                  onChange={updateField("date")}
                  required
                  className="rounded-xl"
                  min={new Date().toISOString().split("T")[0]}
                  data-ocid="book.input"
                />
              </div>

              {isError && (
                <div
                  className="sm:col-span-2 bg-red-50 text-red-600 rounded-xl px-4 py-3 text-sm"
                  data-ocid="book.error_state"
                >
                  Something went wrong. Please try again or call us directly.
                </div>
              )}

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-mint text-white rounded-full py-6 text-base font-semibold shadow-mint hover:opacity-90 transition-all"
                  data-ocid="book.submit_button"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Confirming...
                    </>
                  ) : (
                    "Confirm Appointment"
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
