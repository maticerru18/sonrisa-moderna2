import beforeAfterImage from "@/assets/before-after-1.jpg";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export const BeforeAfter = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className={cn(
          "text-center mb-12 transition-all duration-700",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Resultados reales
          </h2>
          <p className="text-lg text-muted-foreground">
            Casos antes y después de nuestros tratamientos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className={cn(
              "relative group overflow-hidden rounded-2xl shadow-[var(--shadow-hover)] transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}>
              <img
                src={beforeAfterImage}
                alt="Caso antes del tratamiento"
                className="w-full h-[300px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-semibold text-lg mb-1">Antes</p>
                  <p className="text-sm opacity-90">Blanqueamiento dental</p>
                </div>
              </div>
            </div>
            
            <div className={cn(
              "relative group overflow-hidden rounded-2xl shadow-[var(--shadow-hover)] transition-all duration-700 delay-400",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}>
              <img
                src={beforeAfterImage}
                alt="Caso después del tratamiento"
                className="w-full h-[300px] object-cover brightness-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-semibold text-lg mb-1">Después</p>
                  <p className="text-sm opacity-90">Tratamiento: 1 sesión</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Resultados pueden variar según cada caso. Consulta con profesionales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
