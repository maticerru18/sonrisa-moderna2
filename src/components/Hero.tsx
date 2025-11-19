import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import heroImage from "@/assets/20210116_095610-1024x1024.webp";

export const Hero = () => {
  return (
    <section className="relative min-h-[78vh] flex items-center bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Text Content - 55% */}
          <div className="md:col-span-7 space-y-6 fade-in">
            <h1 className="text-[42px] md:text-[48px] font-bold leading-tight text-secondary">
              Recuperá tu sonrisa con confianza
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Atención personalizada y tecnología avanzada. Turnos rápidos, tratamientos modernos y planes accesibles. 
              <span className="block mt-2 font-medium text-foreground">Primera consulta con diagnóstico completo.</span>
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="text-base font-semibold px-8 py-6 hover-lift shadow-[var(--shadow-subtle)]"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar turno
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base font-semibold px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-[120ms]"
              >
                <Phone className="mr-2 h-5 w-5" />
                Consultar por WhatsApp
              </Button>
            </div>

            {/* Microcopy */}
            <p className="text-sm text-muted-foreground pt-2">
              Duración: 30 min · Turnos disponibles esta semana
            </p>
          </div>

          {/* Image - 45% */}
          <div className="md:col-span-5 fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-hover)]">
              <img 
                src={heroImage} 
                alt="Dr. profesional en clínica dental moderna"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
