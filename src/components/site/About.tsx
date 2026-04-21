import { Building2, Handshake, Container, Award } from "lucide-react";

const stats = [
  { v: "5+", l: "лет на рынке Азия–СНГ" },
  { v: "1 200+", l: "успешных поставок" },
  { v: "40+", l: "проверенных фабрик в КНР" },
  { v: "98%", l: "клиентов возвращаются" },
];

const values = [
  { icon: Container, t: "Прямые контракты", d: "Работаем напрямую с фабриками и проверенными разборками без цепочки посредников." },
  { icon: Handshake, t: "Полное сопровождение", d: "От подбора по VIN до получения на вашем складе — один менеджер на сделку." },
  { icon: Award, t: "Премиум-сегмент", d: "Специализируемся на ноускатах для BMW, Mercedes, Audi, Porsche, Lexus." },
  { icon: Building2, t: "Юр. лицо в РФ", d: "ООО «АЗИЯ ХАБ», Санкт-Петербург. Прозрачные документы и НДС-режим." },
];

export const About = () => {
  return (
    <section id="about" className="section relative">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <div className="eyebrow mb-4">О компании</div>
            <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
              ASIAHUB — ваш центр <br />
              <span className="text-gradient-accent">управления поставками</span> из Китая
            </h2>
            <p className="mt-6 text-muted-foreground md:text-lg">
              Мы построили инфраструктуру, которая закрывает весь цикл поставки автокомпонентов:
              поиск на фабриках КНР, контроль качества, логистика, таможенное оформление и доставка
              до вашего склада в России и Беларуси.
            </p>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Работаем как с частными автовладельцами, так и с СТО, дилерами и оптовыми закупщиками.
              Каждая сделка сопровождается договором и фотоотчётом.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.l} className="border-l-2 border-primary pl-4">
                  <dt className="font-display text-2xl font-bold md:text-3xl">{s.v}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground md:text-sm">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.t} className="glass-card rounded-2xl p-6 transition-all hover:border-primary/40 hover:-translate-y-0.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-accent text-primary-foreground">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
