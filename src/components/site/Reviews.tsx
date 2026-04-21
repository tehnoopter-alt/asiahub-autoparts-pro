import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Алексей К.",
    role: "СТО «Премиум-Авто», Москва",
    text: "Заказывали ноускат на Porsche Cayenne — пришёл за 22 дня в идеальном состоянии. Все элементы оригинальные, фото с фабрики высылали лично. Работаем с ASIAHUB уже второй год.",
  },
  {
    name: "Дмитрий М.",
    role: "Частный клиент, Минск",
    text: "BMW G30 — ноускат от ребят встал как родной. Цена ниже, чем у локальных перекупов, и менеджер вёл от подбора до получения в Минске. Рекомендую.",
  },
  {
    name: "Сергей В.",
    role: "Авторазбор, СПб",
    text: "Берём оптом несколько раз в месяц. Стабильные сроки, понятная логистика, документы в порядке. Это редкое сочетание для поставок из Китая.",
  },
];

export const Reviews = () => {
  return (
    <section id="reviews" className="section bg-secondary/20 relative">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-4">Отзывы клиентов</div>
          <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
            Нам доверяют <span className="text-gradient-accent">СТО, дилеры и автовладельцы</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="glass-card relative rounded-2xl p-7">
              <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/30" />
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-sm leading-relaxed text-foreground/90 md:text-base">
                «{r.text}»
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-semibold">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
