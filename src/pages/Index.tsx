import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Catalog } from "@/components/site/Catalog";
import { Process } from "@/components/site/Process";
import { About } from "@/components/site/About";
import { Reviews } from "@/components/site/Reviews";
import { Contacts } from "@/components/site/Contacts";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
