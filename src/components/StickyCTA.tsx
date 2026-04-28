import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyCTA = () => {
  return (
    <>
      {/* Mobile bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-border bg-background/95 backdrop-blur grid grid-cols-2 gap-2 p-2 shadow-elevated">
        <Button
          asChild
          className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold h-12"
        >
          <a href="tel:+919999999999"><Phone className="w-4 h-4 mr-1" />Call CA</a>
        </Button>
        <Button asChild className="bg-whatsapp hover:bg-whatsapp/90 text-white font-bold h-12">
          <a href="https://wa.me/919999999999?text=Hi,%20I%20need%20help%20with%20ROC%20Amnesty%20Scheme">
            <MessageCircle className="w-4 h-4 mr-1" />WhatsApp
          </a>
        </Button>
      </div>

      {/* Floating WhatsApp - desktop */}
      <a
        href="https://wa.me/919999999999?text=Hi,%20I%20need%20help%20with%20ROC%20Amnesty%20Scheme"
        target="_blank"
        rel="noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white font-bold px-5 py-3 rounded-full shadow-elevated animate-pulse-urgent"
      >
        <MessageCircle className="w-5 h-5" />
        Chat with CA
      </a>
    </>
  );
};

export default StickyCTA;