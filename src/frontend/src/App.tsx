import { About } from "@/components/About";
import { BookAppointment } from "@/components/BookAppointment";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen font-sans">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <BookAppointment />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
