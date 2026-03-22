import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918790021647"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat with us on WhatsApp"
      data-ocid="whatsapp.primary_button"
    >
      <div className="relative">
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Chat with us
          <div className="absolute top-full right-4 border-4 border-transparent border-t-foreground" />
        </div>

        {/* Button */}
        <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] whatsapp-pulse hover:scale-110 transition-transform duration-200">
          <MessageCircle className="h-7 w-7 text-white" />
        </div>
      </div>
    </a>
  );
}
