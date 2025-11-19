import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

export const MobileStickyCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-[var(--shadow-hover)] z-50">
      <div className="flex gap-2 p-3">
        <Button 
          className="flex-1 font-semibold"
          size="lg"
        >
          <Phone className="mr-2 h-4 w-4" />
          WhatsApp
        </Button>
        <Button 
          className="flex-1 font-semibold"
          variant="secondary"
          size="lg"
        >
          <Calendar className="mr-2 h-4 w-4" />
          Agendar
        </Button>
      </div>
    </div>
  );
};
