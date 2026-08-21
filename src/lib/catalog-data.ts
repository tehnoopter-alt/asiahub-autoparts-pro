import bmw from "@/assets/noskat-bmw.jpg";
import mercedes from "@/assets/noskat-mercedes.jpg";
import audi from "@/assets/noskat-audi.jpg";
import porsche from "@/assets/noskat-porsche.jpg";
import lexus from "@/assets/noskat-lexus.jpg";
import toyota from "@/assets/noskat-toyota.jpg";

export type CatalogItem = {
  brand: string;
  model: string;
  years: string;
  price: string;
  condition: "Новый" | "OEM" | "Б/У отличное";
  image: string;
};

export const catalogItems: CatalogItem[] = [
  { brand: "BMW", model: "5 Series G30", years: "2017–2023", price: "от 285 000 ₽", condition: "OEM", image: bmw },
  { brand: "Mercedes", model: "E-Class W213", years: "2016–2023", price: "от 320 000 ₽", condition: "OEM", image: mercedes },
  { brand: "Audi", model: "A6 C8", years: "2018–2024", price: "от 295 000 ₽", condition: "OEM", image: audi },
  { brand: "Porsche", model: "Cayenne 9Y0", years: "2018–2024", price: "от 540 000 ₽", condition: "Новый", image: porsche },
  { brand: "Lexus", model: "LX 600 / 570", years: "2016–2024", price: "от 410 000 ₽", condition: "OEM", image: lexus },
  { brand: "Toyota", model: "Land Cruiser 300", years: "2021–2024", price: "от 380 000 ₽", condition: "Новый", image: toyota },
];

export type BrandInfo = { name: string; slug: string };

export const catalogBrands: BrandInfo[] = [
  { name: "BMW", slug: "bmw" },
  { name: "Mercedes", slug: "mercedes" },
  { name: "Audi", slug: "audi" },
  { name: "Porsche", slug: "porsche" },
  { name: "Lexus", slug: "lexus" },
  { name: "Toyota", slug: "toyota" },
];

export const findBrandBySlug = (slug?: string) =>
  catalogBrands.find((b) => b.slug === slug?.toLowerCase());

export const itemsByBrand = (brand?: string) =>
  brand ? catalogItems.filter((i) => i.brand === brand) : catalogItems;
