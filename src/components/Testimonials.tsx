import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Lucía G.",
    age: 34,
    treatment: "Blanqueamiento · 2025",
    rating: 5,
    text: "Tenía mucha inseguridad al sonreír. Con el tratamiento de blanqueamiento y la atención del equipo hoy me siento otra persona.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Martín R.",
    age: 46,
    treatment: "Implante · 2024",
    rating: 5,
    text: "Profesionales y claros. Me hicieron un implante y todo salió excelente; el posoperatorio fue explicado paso a paso.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Carla P.",
    age: 28,
    treatment: "Ortodoncia · 2025",
    rating: 5,
    text: "Reservé online y en 48hs ya tenía el turno confirmado. Muy recomendable. El trato es excelente y los resultados superaron mis expectativas.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80"
  }
];

export const Testimonials = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="section-padding">
      <div className="container-custom">
        <div className={cn(
          "text-center mb-12 transition-all duration-700",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-lg text-muted-foreground">
            Más de 5.000 pacientes confían en nosotros
          </p>
        </div>

        <div className={cn(
          "transition-all duration-700 delay-300",
          isInView ? "opacity-100" : "opacity-0"
        )}>
          <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 6000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-0 shadow-[var(--shadow-subtle)] h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-secondary">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.treatment}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        </div>
      </div>
    </section>
  );
};
