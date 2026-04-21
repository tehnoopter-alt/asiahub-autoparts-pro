import logo from "@/assets/asiahub-logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="inline-block rounded-lg bg-foreground/95 px-3 py-2">
              <img src={logo} alt="ASIAHUB" className="h-9 w-auto" loading="lazy" width={200} height={40} />
            </div>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              ASIAHUB — прямые поставки ноускатов и автозапчастей премиум-сегмента из Китая в Россию и Беларусь.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">Навигация</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#catalog" className="hover:text-primary transition-colors">Каталог</a></li>
              <li><a href="#process" className="hover:text-primary transition-colors">Как заказать</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">О компании</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a></li>
              <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">Контакты</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="tel:+79219637633" className="hover:text-primary">+7 921 963-76-33</a></li>
              <li><a href="mailto:9637633@mail.ru" className="hover:text-primary">9637633@mail.ru</a></li>
              <li>Пн–Сб, 09:00–20:00 МСК</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">Реквизиты</h4>
            <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
              <li>ООО «АЗИЯ ХАБ»</li>
              <li>ИНН 7817152934 / КПП 781701001</li>
              <li>ОГРН 1267800026372</li>
              <li>ОКВЭД 45.32 · ОКПО 84306454</li>
              <li className="pt-2">Ген. директор Матюненко В. Г.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ООО «АЗИЯ ХАБ». Все права защищены.</p>
          <p>Санкт-Петербург · Доставка в РФ и РБ</p>
        </div>
      </div>
    </footer>
  );
};
