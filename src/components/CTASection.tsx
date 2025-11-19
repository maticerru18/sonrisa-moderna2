import { Button } from "@/components/ui/button";
import { Calendar, Phone, Clock, CreditCard, Gift } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export const CTASection = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-secondary text-white">
      <div className="container-custom text-center">
        <div className={cn(
          "max-w-3xl mx-auto space-y-8 transition-all duration-700",
          isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold">
            Tu sonrisa puede cambiar hoy
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Agendá tu turno en menos de 1 minuto — confirmación inmediata por WhatsApp
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-white text-secondary hover:bg-white/90 font-semibold px-8 py-6 hover-lift"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar turno
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold px-8 py-6 transition-all duration-[120ms]"
            >
              <Phone className="mr-2 h-5 w-5" />
              Consultar por WhatsApp
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-8 h-8 text-accent" />
              <p className="font-medium">Turnos en 24h</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CreditCard className="w-8 h-8 text-accent" />
              <p className="font-medium">Planes de financiación</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Gift className="w-8 h-8 text-accent" />
              <p className="font-medium">Consulta inicial gratuita</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
