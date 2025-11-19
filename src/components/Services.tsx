import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Smile, Brackets, Activity } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Activity,
    title: "Limpieza y Control",
    description: "Prevención y limpieza profesional con pulido y pauta de higiene.",
    price: "Desde $8.000",
  },
  {
    icon: Sparkles,
    title: "Blanqueamiento dental",
    description: "Resultados visibles en 1 sesión. Método seguro y controlado.",
    price: "Desde $25.000",
  },
  {
    icon: Brackets,
    title: "Ortodoncia estética",
    description: "Brackets transparentes / alineadores invisibles.",
    price: "Consultar plan",
  },
  {
    icon: Smile,
    title: "Implantes dentales",
    description: "Reemplazo permanente con planificación 3D.",
    price: "Desde $120.000",
  },
];

export const Services = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className={cn(
          "text-center mb-12 transition-all duration-700",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Nuestros servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tratamientos personalizados con tecnología de última generación
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className={cn(
                  "border-0 shadow-[var(--shadow-subtle)] hover-lift transition-all duration-700",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-semibold text-secondary">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm font-medium text-accent">
                          {service.price}
                        </span>
                        <Button variant="link" className="p-0 h-auto text-primary">
                          Pedir turno →
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
