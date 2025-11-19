import { Button } from "@/components/ui/button";
import { Award, GraduationCap, Clock } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export const About = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={cn(
            "order-2 md:order-1 transition-all duration-700 delay-100",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}>
            <div className="relative">
              <div className="w-[260px] h-[260px] mx-auto rounded-full overflow-hidden shadow-[var(--shadow-hover)] border-4 border-accent/20">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80"
                  alt="Dr. Matías Pérez - Odontólogo especialista"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={cn(
            "order-1 md:order-2 space-y-6 transition-all duration-700 delay-300",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Dr. Matías Pérez
              </h2>
              <p className="text-lg text-muted-foreground mb-2">
                Odontólogo · MP: 12345
              </p>
              <p className="text-base text-muted-foreground">
                Especialista en estética dental e implantes
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  12 años de experiencia en odontología avanzada
                </p>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Especialización en Implantología - Universidad de Buenos Aires
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Certificado por el Colegio Odontológico de la Provincia
                </p>
              </div>
            </div>

            <Button variant="link" className="p-0 h-auto text-primary font-medium">
              Conocé la clínica →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
