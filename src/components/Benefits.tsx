import { User, Scan, Clock, ShieldCheck } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: User,
    title: "Atención personalizada",
    description: "Plan de tratamiento individualizado"
  },
  {
    icon: Scan,
    title: "Tecnología digital",
    description: "Radiografías 3D y escáner intraoral"
  },
  {
    icon: Clock,
    title: "Turnos rápidos",
    description: "Reserva online en menos de 1 minuto"
  },
  {
    icon: ShieldCheck,
    title: "Garantía profesional",
    description: "Seguimiento post-tratamiento incluido"
  }
];

export const Benefits = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className={cn(
                  "flex flex-col items-center text-center space-y-3 transition-all duration-700",
                  isInView 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-secondary stroke-[2]" />
                </div>
                <h3 className="text-lg font-semibold text-secondary">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
