import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const TITLE = "Страница не найдена (404) — ASIAHUB";
const DESCRIPTION = "Запрошенная страница не существует. Вернитесь на главную ASIAHUB — ноускаты и автозапчасти из Китая.";

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [, key, val] = selector.match(/\[(.+?)="(.+?)"\]/) ?? [];
    if (key && val) el.setAttribute(key, val);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    const prevTitle = document.title;
    document.title = TITLE;
    setMeta('meta[name="description"]', "content", DESCRIPTION);
    setMeta('meta[property="og:title"]', "content", TITLE);
    setMeta('meta[name="twitter:title"]', "content", TITLE);
    setMeta('meta[property="og:description"]', "content", DESCRIPTION);
    setMeta('meta[name="twitter:description"]', "content", DESCRIPTION);
    setMeta('meta[name="robots"]', "content", "noindex");

    return () => {
      document.title = prevTitle;
      document.head.querySelector('meta[name="robots"]')?.remove();
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Страница не найдена</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Вернуться на главную
        </a>
      </div>
    </div>
  );
};

export default NotFound;
