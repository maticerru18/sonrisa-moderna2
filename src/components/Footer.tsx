import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Clínica Dental Premium</h3>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p>Av. Ejemplo 1234, Buenos Aires, Argentina</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+541112345678" className="hover:text-accent transition-colors">
                  +54 11 1234-5678
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@clinicadental.com" className="hover:text-accent transition-colors">
                  info@clinicadental.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Horarios</h3>
            <div className="space-y-2 text-sm opacity-90">
              <p>Lunes a Viernes: 9:00 - 20:00</p>
              <p>Sábados: 9:00 - 13:00</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <div className="space-y-2 text-sm opacity-90">
              <a href="/politica" className="block hover:text-accent transition-colors">
                Política de privacidad
              </a>
              <a href="/terminos" className="block hover:text-accent transition-colors">
                Términos y condiciones
              </a>
              <div className="flex gap-4 pt-2">
                <a href="#" className="hover:text-accent transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-white/20 pt-8 text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 hover-lift mb-4"
          >
            Agendar ahora
          </Button>
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Clínica Dental Premium. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
