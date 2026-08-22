import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Seo, SITE_URL } from "@/components/Seo";
import { cn } from "@/lib/utils";
import { catalogBrands, findBrandBySlug, itemsByBrand } from "@/lib/catalog-data";
import NotFound from "./NotFound";

const CatalogPage = () => {
  const { brand: brandSlug } = useParams();
  const brand = findBrandBySlug(brandSlug);

  if (brandSlug && !brand) return <NotFound />;

  const items = itemsByBrand(brand?.name);
  const path = brand ? `/catalog/${brand.slug}` : "/catalog";

  const title = brand
    ? `Ноускаты ${brand.name} из Китая — доставка в РФ и РБ | ASIAHUB`
    : "Каталог ноускатов из Китая — BMW, Mercedes, Audi | ASIAHUB";
  const description = brand
    ? `Ноускаты ${brand.name} под заказ из Китая: подбор по VIN, проверка на фабрике, доставка в Россию и Беларусь. Гарантия 30 дней.`
    : "Каталог ноускатов премиум-марок из Китая: BMW, Mercedes, Audi, Porsche, Lexus, Toyota. Подбор по VIN, доставка в РФ и РБ.";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Каталог", item: `${SITE_URL}/catalog` },
        ...(brand
          ? [{ "@type": "ListItem", position: 3, name: brand.name, item: `${SITE_URL}${path}` }]
          : []),
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: title,
      itemListElement: items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `Ноускат ${it.brand} ${it.model}`,
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={title}
        description={description}
        path={path}
        keywords={`ноускат ${brand?.name ?? "BMW Mercedes Audi"}, купить ноускат из Китая, автозапчасти Китай Россия Беларусь`}
        jsonLd={jsonLd}
      />
      <Header />
      <main className="section">
        <div className="container-x">
          <nav className="text-sm text-muted-foreground" aria-label="Хлебные крошки">
            <Link to="/" className="hover:text-foreground">Главная</Link>
            <span className="mx-2">/</span>
            {brand ? (
              <>
                <Link to="/catalog" className="hover:text-foreground">Каталог</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">{brand.name}</span>
              </>
            ) : (
              <span className="text-foreground">Каталог</span>
            )}
          </nav>

          <h1 className="mt-6 font-display text-3xl font-bold leading-tight md:text-5xl">
            {brand ? (
              <>Ноускаты <span className="text-gradient-accent">{brand.name}</span> из Китая</>
            ) : (
              <>Каталог <span className="text-gradient-accent">ноускатов</span> из Китая</>
            )}
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">{description}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            <Link
              to="/catalog"
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-all",
                !brand
                  ? "border-primary bg-primary text-primary-foreground shadow-glow"
                  : "border-border bg-secondary/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              Все
            </Link>
            {catalogBrands.map((b) => (
              <Link
                key={b.slug}
                to={`/catalog/${b.slug}`}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm font-medium transition-all",
                  brand?.slug === b.slug
                    ? "border-primary bg-primary text-primary-foreground shadow-glow"
                    : "border-border bg-secondary/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {b.name}
              </Link>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it) => (
              <article
                key={it.brand + it.model}
                className="group glass-card overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={it.image}
                    alt={`Ноускат ${it.brand} ${it.model} ${it.years}`}
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
                  <p className="text-xs uppercase tracking-widest text-primary">{it.brand}</p>
                  <h2 className="mt-1 font-display text-xl font-semibold">{it.model}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{it.years}</p>
                  <p className="mt-3 font-display text-base font-bold">{it.price}</p>
                  <Button variant="hero" className="mt-6 w-full" asChild>
                    <Link to="/#contacts">Заказать подбор</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            Не нашли свою модель?{" "}
            <Link to="/#contacts" className="font-semibold text-primary hover:underline">
              Оставьте заявку
            </Link>{" "}
            — найдём за 24 часа.
          </p>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default CatalogPage;
