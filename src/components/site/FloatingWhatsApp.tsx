import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/79219637633?text=Здравствуйте!%20Хочу%20заказать%20ноускат"
      target="_blank"
      rel="noopener"
      aria-label="Написать в WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-accent text-primary-foreground shadow-glow transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 -z-10 rounded-full bg-primary/40 blur-xl animate-pulse" />
    </a>
  );
};
