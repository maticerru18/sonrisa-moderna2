import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CTASection } from "@/components/CTASection";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="inicio">
        <Hero />
      </div>
      <div id="beneficios" className="scroll-mt-20">
        <Benefits />
      </div>
      <div id="nosotros" className="scroll-mt-20">
        <About />
      </div>
      <div id="servicios" className="scroll-mt-20">
        <Services />
      </div>
      <div id="testimonios" className="scroll-mt-20">
        <Testimonials />
      </div>
      <BeforeAfter />
      <CTASection />
      <div id="contacto" className="scroll-mt-20">
        <ContactForm />
      </div>
      <FAQ />
      <Footer />
      <MobileStickyCTA />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
