import { MessageCircle } from "lucide-react";

const WhatsAppFab = () => (
  <a
    href="https://wa.me/9884828069?text=Hi%20I%20need%20ACP%20Sheets%20Details"
    target="_blank"
    rel="noreferrer"
    aria-label="WhatsApp"
    className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-elegant hover:scale-110 transition-transform duration-300 animate-glow-pulse"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);

export default WhatsAppFab;
