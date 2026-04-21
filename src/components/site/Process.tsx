import { Search, Calculator, FileSignature, Truck, PackageCheck } from "lucide-react";

const steps = [
  { icon: Search, title: "Подбор по VIN", text: "Принимаем заявку, уточняем VIN и комплектацию. Подбираем именно вашу деталь." },
  { icon: Calculator, title: "Расчёт стоимости", text: "В течение 24 часов присылаем точную цену с доставкой до вашего города." },
  { icon: FileSignature, title: "Оформление сделки", text: "Договор, безопасная оплата, фото детали и накладная — всё прозрачно." },
  { icon: Truck, title: "Логистика КНР → РФ/РБ", text: "Контролируем отгрузку, таможню и доставку. Сроки от 14 до 28 дней." },
  { icon: PackageCheck, title: "Получение на складе", text: "Выдача с проверкой на терминале СПб или доставка ТК до двери." },
];

export const Process = () => {
  return (
    <section id="process" className="section bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-4">Процесс заказа</div>
          <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
            5 шагов от заявки <br />
            до <span className="text-gradient-accent">вашего склада</span>
          </h2>
        </div>

        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="glass-card relative rounded-2xl p-6 transition-all hover:border-primary/40"
            >
              <div className="absolute -top-4 right-5 rounded-md bg-gradient-accent px-2 py-1 font-display text-xs font-bold text-primary-foreground">
                0{i + 1}
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
