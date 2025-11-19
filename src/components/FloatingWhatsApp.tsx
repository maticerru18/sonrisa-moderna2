import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    // Reemplazar con tu número de WhatsApp (formato: 549XXXXXXXXXX)
    const phoneNumber = "5491123456789";
    const message = encodeURIComponent("Hola! Me gustaría consultar sobre los servicios dentales.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Pulso animado */}
      <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
      
      {/* Botón principal */}
      <div className="relative w-14 h-14 bg-accent hover:bg-accent/90 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
        <MessageCircle className="w-7 h-7 text-white" />
      </div>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-secondary text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
        Escribinos por WhatsApp
      </span>
    </button>
  );
};
