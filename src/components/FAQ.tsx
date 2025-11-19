import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿Cuánto cuestan los tratamientos?",
    answer: "Los costos varían según el tratamiento. Una limpieza desde $8.000, blanqueamiento desde $25.000. Te damos un presupuesto detallado en la primera consulta."
  },
  {
    question: "¿Aceptan obras sociales?",
    answer: "Sí, trabajamos con las principales obras sociales y prepagas. Consultanos por tu cobertura específica."
  },
  {
    question: "¿Cuánto tiempo de espera hay para turnos?",
    answer: "Generalmente tenemos disponibilidad en las siguientes 48-72 horas. Para urgencias atendemos el mismo día."
  },
  {
    question: "¿Ofrecen planes de financiación?",
    answer: "Sí, tenemos planes de financiación en 3, 6 y 12 cuotas sin interés para tratamientos mayores."
  },
  {
    question: "¿Qué debo hacer antes de mi primera visita?",
    answer: "No necesitás preparación especial. Si tenés estudios previos (radiografías, informes), traélos. Llegá 10 minutos antes para completar la ficha."
  }
];

export const FAQ = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className={cn(
            "text-center mb-12 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Resolvemos las dudas más comunes
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={cn(
                  "bg-white rounded-xl shadow-[var(--shadow-subtle)] px-6 border-0 transition-all duration-700",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <AccordionTrigger className="text-left font-semibold text-secondary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
