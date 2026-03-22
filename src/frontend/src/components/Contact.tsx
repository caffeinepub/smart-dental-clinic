import { Button } from "@/components/ui/button";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

const workingHours = [
  { day: "Sunday", hours: "10 am – 2 pm", short: true },
  { day: "Monday", hours: "10 am – 9 pm", short: false },
  { day: "Tuesday", hours: "10 am – 9 pm", short: false },
  { day: "Wednesday", hours: "10 am – 9 pm", short: false },
  { day: "Thursday", hours: "10 am – 9 pm", short: false },
  { day: "Friday", hours: "10 am – 9 pm", short: false },
  { day: "Saturday", hours: "10 am – 9 pm", short: false },
];

export function Contact() {
  return (
    <section id="contact" className="section-alt py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-mint uppercase tracking-widest">
            Reach Out
          </span>
          <h2 className="font-display text-4xl font-bold text-foreground mt-2 mb-4">
            Get In <span className="text-primary-blue">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We're here to help – visit us or reach out anytime
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <div className="space-y-5">
                <div
                  className="flex items-start gap-4"
                  data-ocid="contact.card"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+918790021647"
                      className="text-primary-blue text-lg font-bold hover:underline"
                      data-ocid="contact.link"
                    >
                      +91 8790021647
                    </a>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Address
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      SMart Dental (Root Canal Clinic)
                      <br />
                      Tukka Rao Complex, Court Chowrasta,
                      <br />
                      Ambedkar Rd, beside Trinity Girls College,
                      <br />
                      Karimnagar, Telangana 505001
                    </p>
                    <a
                      href="https://maps.app.goo.gl/yqiqME4bkKJH1wiy8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-blue text-xs font-semibold hover:underline mt-1 inline-block"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="h-6 w-6 text-primary-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-3">
                      Working Hours
                    </h3>
                    <div className="space-y-1.5">
                      {workingHours.map(({ day, hours, short }) => (
                        <div
                          key={day}
                          className={`flex justify-between items-center text-sm ${
                            short
                              ? "text-muted-foreground/70"
                              : "text-foreground"
                          }`}
                        >
                          <span
                            className={short ? "font-normal" : "font-medium"}
                          >
                            {day}
                          </span>
                          <span
                            className={`tabular-nums ${
                              short
                                ? "text-muted-foreground"
                                : "font-semibold text-primary-blue"
                            }`}
                          >
                            {hours}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground/60 mt-3 italic">
                      * Hours may differ on public holidays
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="tel:+918790021647"
                className="flex-1"
                data-ocid="contact.primary_button"
              >
                <Button className="w-full bg-primary-blue text-white rounded-xl py-5 hover:opacity-90 transition-all">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>
              <a
                href="https://wa.me/918790021647"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
                data-ocid="contact.secondary_button"
              >
                <Button className="w-full bg-[#25D366] text-white rounded-xl py-5 hover:opacity-90 transition-all">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-card h-96 lg:h-full min-h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.3!2d79.1288!3d18.4386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccd9e3850b7e11%3A0x15f269fbbec2a032!2sSMart%20Dental%20(%20Root%20Canal%20Clinic%20)!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SMart Dental Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
