import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/asiahub-logo.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#catalog", label: "Каталог" },
  { href: "#process", label: "Как заказать" },
  { href: "#about", label: "О компании" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="rounded-lg bg-foreground/95 px-3 py-1.5">
            <img src={logo} alt="ASIAHUB логотип" className="h-8 w-auto md:h-9" width={200} height={40} />
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+79219637633" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4 text-primary" />
            +7 921 963-76-33
          </a>
          <Button variant="hero" size="sm" asChild>
            <a href="#contacts">Заказать подбор</a>
          </Button>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-x flex flex-col gap-1 py-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a href="tel:+79219637633" className="mt-2 flex items-center gap-2 px-3 py-2 text-sm font-semibold">
              <Phone className="h-4 w-4 text-primary" />
              +7 921 963-76-33
            </a>
            <Button variant="hero" className="mt-2" asChild>
              <a href="#contacts" onClick={() => setOpen(false)}>Заказать подбор</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
