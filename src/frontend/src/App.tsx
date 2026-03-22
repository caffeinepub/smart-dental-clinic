import { About } from "@/components/About";
import { AdminDashboard } from "@/components/AdminDashboard";
import { BookAppointment } from "@/components/BookAppointment";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { AuthProvider } from "@/components/auth";
import { useAuth } from "@/components/auth";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const queryClient = new QueryClient();

function AppContent() {
  const { isAuthenticated } = useAuth();
  const [showDashboard, setShowDashboard] = useState(false);

  if (isAuthenticated && showDashboard) {
    return <AdminDashboard onBack={() => setShowDashboard(false)} />;
  }

  return (
    <div className="min-h-screen font-sans">
      <Navbar onOpenDashboard={() => setShowDashboard(true)} />
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
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppContent />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}
