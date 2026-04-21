import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const PHONE = "+7 921 963-76-33";
const PHONE_TEL = "+79219637633";
const PHONE_DIGITS = "79219637633";
const EMAIL = "9637633@mail.ru";

const schema = z.object({
  name: z.string().trim().min(2, "Укажите имя").max(80),
  phone: z.string().trim().min(6, "Укажите телефон").max(30),
  car: z.string().trim().min(2, "Укажите марку и модель").max(120),
  message: z.string().trim().max(800).optional(),
});

export const Contacts = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast({ title: "Проверьте форму", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);

    const text =
      `Заявка с сайта ASIAHUB%0A` +
      `Имя: ${encodeURIComponent(parsed.data.name)}%0A` +
      `Телефон: ${encodeURIComponent(parsed.data.phone)}%0A` +
      `Авто: ${encodeURIComponent(parsed.data.car)}%0A` +
      (parsed.data.message ? `Комментарий: ${encodeURIComponent(parsed.data.message)}` : "");

    window.open(`https://wa.me/${PHONE_DIGITS}?text=${text}`, "_blank", "noopener");
    toast({ title: "Заявка отправлена", description: "Мы открыли WhatsApp — отправьте сообщение, чтобы мы связались с вами." });
    form.reset();
    setLoading(false);
  };

  return (
    <section id="contacts" className="section relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" aria-hidden />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-4">Контакты</div>
          <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
            Оставьте заявку — <br />
            <span className="text-gradient-accent">подберём ноускат за 24 часа</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Расскажите, какое у вас авто. Мы рассчитаем стоимость и сроки доставки в РФ или РБ.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <form
            onSubmit={onSubmit}
            className="glass-card rounded-3xl p-6 md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" name="name" placeholder="Владимир" required maxLength={80} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+7 ___ ___ __ __" required maxLength={30} />
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <Label htmlFor="car">Марка, модель и год</Label>
              <Input id="car" name="car" placeholder="BMW 5 Series G30, 2020" required maxLength={120} />
            </div>

            <div className="mt-5 space-y-2">
              <Label htmlFor="message">Комментарий <span className="text-muted-foreground font-normal">(не обязательно)</span></Label>
              <Textarea id="message" name="message" rows={4} placeholder="VIN, состояние, особые требования…" maxLength={800} />
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button type="submit" variant="hero" size="lg" disabled={loading} className="flex-1">
                <Send className="h-4 w-4" />
                {loading ? "Отправляем…" : "Отправить заявку"}
              </Button>
              <Button type="button" variant="heroOutline" size="lg" asChild>
                <a href={`https://t.me/+${PHONE_DIGITS}`} target="_blank" rel="noopener">
                  <MessageCircle className="h-4 w-4" />
                  Telegram
                </a>
              </Button>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              Нажимая «Отправить», вы соглашаетесь на обработку персональных данных.
            </p>
          </form>

          <div className="space-y-4">
            <a href={`tel:${PHONE_TEL}`} className="glass-card flex items-start gap-4 rounded-2xl p-6 transition-all hover:border-primary/40">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Телефон / WhatsApp</p>
                <p className="mt-1 font-display text-lg font-semibold">{PHONE}</p>
                <p className="text-sm text-muted-foreground">Пн–Сб, 09:00–20:00 МСК</p>
              </div>
            </a>

            <a href={`mailto:${EMAIL}`} className="glass-card flex items-start gap-4 rounded-2xl p-6 transition-all hover:border-primary/40">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">E-mail</p>
                <p className="mt-1 font-display text-lg font-semibold">{EMAIL}</p>
                <p className="text-sm text-muted-foreground">Ответим в течение 2 часов</p>
              </div>
            </a>

            <div className="glass-card flex items-start gap-4 rounded-2xl p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Офис</p>
                <p className="mt-1 font-display text-lg font-semibold">Санкт-Петербург</p>
                <p className="text-sm text-muted-foreground">196140, ул. Нины Петровой, д. 8, к. 1, стр. 1</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 text-sm">
              <p className="font-semibold mb-2">Зоны доставки</p>
              <p className="text-muted-foreground">🇷🇺 Россия — все регионы (СДЭК, ПЭК, авто-доставка)</p>
              <p className="text-muted-foreground">🇧🇾 Беларусь — Минск и все областные центры</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
