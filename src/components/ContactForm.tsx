import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export const ContactForm = () => {
  const { toast } = useToast();
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    acceptPolicy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptPolicy) {
      toast({
        title: "Error",
        description: "Debes aceptar la política de privacidad",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "¡Perfecto! Tu turno quedó reservado.",
      description: "Te contactamos por WhatsApp en breve para confirmar.",
    });
  };

  return (
    <section ref={ref} className="section-padding">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className={cn(
            "text-center mb-8 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Reservá tu turno
            </h2>
            <p className="text-lg text-muted-foreground">
              Completá el formulario y te confirmamos en minutos
            </p>
          </div>

          <form onSubmit={handleSubmit} className={cn(
            "space-y-6 transition-all duration-700 delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input
                id="name"
                required
                placeholder="Juan Pérez"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono / Celular</Label>
              <Input
                id="phone"
                type="tel"
                required
                placeholder="+54 11 1234-5678"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email (opcional)</Label>
              <Input
                id="email"
                type="email"
                placeholder="juan@ejemplo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Motivo de consulta</Label>
              <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger id="service">
                  <SelectValue placeholder="Seleccioná un servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="limpieza">Limpieza y control</SelectItem>
                  <SelectItem value="blanqueamiento">Blanqueamiento dental</SelectItem>
                  <SelectItem value="ortodoncia">Ortodoncia</SelectItem>
                  <SelectItem value="implantes">Implantes dentales</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="policy"
                checked={formData.acceptPolicy}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, acceptPolicy: checked as boolean })
                }
              />
              <label
                htmlFor="policy"
                className="text-sm text-muted-foreground leading-tight cursor-pointer"
              >
                Acepto la{" "}
                <a href="/politica" className="text-primary underline">
                  política de privacidad
                </a>
              </label>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full font-semibold hover-lift"
            >
              Reservar mi turno
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
