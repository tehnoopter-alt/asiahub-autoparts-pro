import { ArrowRight, ShieldCheck, Truck, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-noskat.jpg";
import gendirImg from "@/assets/gendir.png";

export const Hero = () => {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-gradient-hero pt-32 md:pt-40">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" aria-hidden />

      <div className="container-x relative">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:items-center">
          <div className="animate-fade-up">
            <div className="eyebrow mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Доставка из Китая · РФ и РБ
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
              Ноускаты <br className="hidden sm:block" />
              <span className="text-gradient-accent">премиум-класса</span> <br className="hidden sm:block" />
              из Китая под заказ
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              ASIAHUB — мост между бизнесом и Азией. Прямые поставки передних частей кузова
              для BMW, Mercedes, Audi, Porsche, Lexus и других премиальных марок.
              Полное сопровождение сделки от подбора до вашего склада.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="xl" asChild>
                <a href="#contacts">
                  Подобрать ноускат
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#catalog">Смотреть каталог</a>
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8 max-w-lg">
              <div>
                <dt className="text-2xl font-display font-bold text-foreground md:text-3xl">14–28<span className="text-primary">д</span></dt>
                <dd className="mt-1 text-xs text-muted-foreground md:text-sm">срок доставки</dd>
              </div>
              <div>
                <dt className="text-2xl font-display font-bold text-foreground md:text-3xl">100<span className="text-primary">%</span></dt>
                <dd className="mt-1 text-xs text-muted-foreground md:text-sm">оригинал / OEM</dd>
              </div>
              <div>
                <dt className="text-2xl font-display font-bold text-foreground md:text-3xl">2<span className="text-primary">+</span></dt>
                <dd className="mt-1 text-xs text-muted-foreground md:text-sm">страны доставки</dd>
              </div>
            </dl>
          </div>

          <div className="relative animate-fade-in delay-200">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-accent opacity-20 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-elegant">
              <img
                src={heroImg}
                alt="Премиальный ноускат BMW в студийном свете"
                className="h-full w-full object-cover"
                width={1600}
                height={1100}
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-3">
                <div className="glass-card rounded-xl px-4 py-3">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">в наличии</p>
                  <p className="text-sm font-semibold">BMW · Mercedes · Audi</p>
                </div>
                <div className="glass-card rounded-xl px-4 py-3">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">направление</p>
                  <p className="text-sm font-semibold">КНР → РФ / РБ</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-20 grid gap-4 border-y border-border py-6 sm:grid-cols-3 md:gap-8 md:py-8">
          {[
            { icon: Truck, t: "Прямая логистика", d: "Без посредников, фиксированные сроки" },
            { icon: ShieldCheck, t: "Контроль качества", d: "Проверка на фабрике перед отправкой" },
            { icon: Globe2, t: "РФ и Беларусь", d: "Доставка до склада или транспортной" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">{t}</p>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
