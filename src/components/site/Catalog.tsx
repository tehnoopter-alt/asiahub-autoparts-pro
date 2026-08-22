import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import bmw from "@/assets/noskat-bmw.jpg";
import mercedes from "@/assets/noskat-mercedes.jpg";
import audi from "@/assets/noskat-audi.jpg";
import porsche from "@/assets/noskat-porsche.jpg";
import lexus from "@/assets/noskat-lexus.jpg";
import toyota from "@/assets/noskat-toyota.jpg";

type Item = {
  brand: string;
  model: string;
  years: string;
  price: string;
  condition: "Новый" | "OEM" | "Б/У отличное";
  image: string;
};

const items: Item[] = [
  { brand: "BMW", model: "5 Series G30", years: "2017–2023", price: "от 285 000 ₽", condition: "OEM", image: bmw },
  { brand: "Mercedes", model: "E-Class W213", years: "2016–2023", price: "от 320 000 ₽", condition: "OEM", image: mercedes },
  { brand: "Audi", model: "A6 C8", years: "2018–2024", price: "от 295 000 ₽", condition: "OEM", image: audi },
  { brand: "Porsche", model: "Cayenne 9Y0", years: "2018–2024", price: "от 540 000 ₽", condition: "Новый", image: porsche },
  { brand: "Lexus", model: "LX 600 / 570", years: "2016–2024", price: "от 410 000 ₽", condition: "OEM", image: lexus },
  { brand: "Toyota", model: "Land Cruiser 300", years: "2021–2024", price: "от 380 000 ₽", condition: "Новый", image: toyota },
];

const brands = ["Все", "BMW", "Mercedes", "Audi", "Porsche", "Lexus", "Toyota"];

export const Catalog = () => {
  const [active, setActive] = useState("Все");
  const filtered = active === "Все" ? items : items.filter((i) => i.brand === active);

  return (
    <section id="catalog" className="section relative">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="eyebrow mb-4">Каталог</div>
            <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
              Ноускаты для <span className="text-gradient-accent">премиальных марок</span>
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Подбираем переднюю часть кузова под VIN. Если модели нет в наличии — найдём за 24 часа на фабрике в КНР.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => setActive(b)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-all",
                active === b
                  ? "border-primary bg-primary text-primary-foreground shadow-glow"
                  : "border-border bg-secondary/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              {b}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((it) => (
            <article
              key={it.brand + it.model}
              className="group glass-card overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={it.image}
                  alt={`Ноускат ${it.brand} ${it.model}`}
                  loading="lazy"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest backdrop-blur">
                  {it.condition}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary">{it.brand}</p>
                    <h3 className="mt-1 font-display text-xl font-semibold">{it.model}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{it.years}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Цена</p>
                    <p className="mt-1 font-display text-base font-bold text-foreground">{it.price}</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between"><span>Комплектация</span><span className="text-foreground">с фарами, бампером, капотом</span></li>
                  <li className="flex justify-between"><span>Состояние</span><span className="text-foreground">проверка на фабрике</span></li>
                  <li className="flex justify-between"><span>Гарантия</span><span className="text-foreground">30 дней</span></li>
                </ul>

                <Button variant="hero" className="mt-6 w-full" asChild>
                  <a href="#contacts">Заказать подбор</a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Смотреть <a href="/catalog" className="font-semibold text-primary hover:underline">полный каталог</a> или{" "}
          <a href="#contacts" className="font-semibold text-primary hover:underline">оставьте заявку</a> — найдём модель за 24 часа.
        </p>
      </div>
    </section>
  );
};
