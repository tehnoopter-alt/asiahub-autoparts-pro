import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Catalog } from "@/components/site/Catalog";
import { Process } from "@/components/site/Process";
import { About } from "@/components/site/About";
import { Reviews } from "@/components/site/Reviews";
import { Contacts } from "@/components/site/Contacts";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Seo } from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="ASIAHUB — ноускаты и автозапчасти из Китая в РФ и РБ"
        description="Прямые поставки ноускатов и автозапчастей премиум-класса из Китая в Россию и Беларусь: BMW, Mercedes, Audi, Porsche, Lexus."
        path="/"
        keywords="ноускаты из Китая, автозапчасти из Китая, доставка ноускатов РФ Беларусь, ASIAHUB"
      />
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Process />
        <About />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
