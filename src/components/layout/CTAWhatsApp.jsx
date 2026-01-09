import { MessageCircle } from "lucide-react";

export default function CTAWhatsApp() {
  return (
    <a
      href="https://wa.me/393331234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-(--color-accent) px-5 py-3 text-sm font-semibold text-black shadow-lg hover:bg-(--color-accent-hover) transition"
      aria-label="Contatta CoreLab Training su WhatsApp"
    >
      <MessageCircle size={18} />
      Parla con un coach
    </a>
  );
}
