import { Laptop, Palette, Gamepad2, MonitorCog } from "lucide-react";
import type { Locale } from "@/config/site";

const az = (value: string) => value.replaceAll("{e}", "\u0259").replaceAll("{sh}", "\u015f").replaceAll("{i}", "\u0131").replaceAll("{g}", "\u011f").replaceAll("{u}", "\u00fc").replaceAll("{o}", "\u00f6").replaceAll("{ch}", "\u00e7");
const tr = (value: string, en: string) => ({ az: az(value), ru: en, en });
const list = (items: string[]) => ({ az: items.map(az), ru: items.map((item) => item.replaceAll(/\{[^}]+\}/g, "")), en: items.map((item) => item.replaceAll(/\{[^}]+\}/g, "")) });

export const seoPackages = [
  { slug: "memar-dizayner-paketi", icon: Palette, title: tr("Memar v{e} dizayner paketi", "Architect and designer pack"), seoTitle: tr("Memar v{e} Dizayner Proqram Paketi | AutoCAD, Revit, 3ds Max | Softy.az", "Architect and Designer Software Pack | Softy.az"), description: tr("AutoCAD, Revit, 3ds Max, SketchUp, Lumion, V-Ray, Enscape v{e} Adobe proqramlar{i} il{e} memarl{i}q/dizayn i{sh}l{e}ri {u}{ch}{u}n proqram paketi.", "Software pack for architecture and design work."), includes: list(["AutoCAD, Revit v{e} 3ds Max", "SketchUp, Lumion, Enscape v{e} V-Ray", "Adobe dizayn proqramlar{i}", "Driver v{e} render {u}{ch}{u}n ilkin yoxlama"]), related: ["autocad-qurasdirilmasi", "revit-qurasdirilmasi", "3ds-max-qurasdirilmasi", "lumion-vray-enscape"] },
  { slug: "ofis-telebe-paketi", icon: Laptop, title: tr("Ofis v{e} t{e}l{e}b{e} paketi", "Office and student pack"), seoTitle: tr("Ofis v{e} T{e}l{e}b{e} Proqram Paketi | Office, PDF, Brauzer | Softy.az", "Office and Student Software Pack | Softy.az"), description: tr("D{e}rs, ofis v{e} g{u}nd{e}lik istifad{e} {u}{ch}{u}n Office, PDF, brauzer, arxiv, antivirus v{e} laz{i}mi proqramlar.", "Office and daily software pack for students and office users."), includes: list(["Microsoft Office", "PDF, brauzer v{e} arxiv proqramlar{i}", "Antivirus v{e} t{e}hl{u}k{e}sizlik ayarlar{i}", "Formatdan sonra laz{i}mi proqramlar"]), related: ["office-proqramlari", "formatdan-sonra-proqramlar", "proqram-yazilmasi"] },
  { slug: "oyun-ve-performans-paketi", icon: Gamepad2, title: tr("Oyun v{e} performans paketi", "Gaming and performance pack"), seoTitle: tr("Oyun v{e} Performans Paketi | Driver, DirectX, FPS D{e}st{e}yi | Softy.az", "Gaming and Performance Pack | Softy.az"), description: tr("Oyunlar {u}{ch}{u}n driver, DirectX, Visual C++, performans sazlamalar{i} v{e} Windows optimizasiyas{i}.", "Gaming setup with drivers, DirectX, Visual C++ and performance tuning."), includes: list(["GPU driver yoxlanmas{i}", "DirectX v{e} Visual C++ komponentl{e}ri", "Oyun a{ch}{i}l{i}{sh} x{e}talar{i}", "Windows performans sazlamalar{i}"]), related: ["oyun-qurasdirilmasi", "driver-qurasdirilmasi", "komputer-optimizasiya"] },
  { slug: "tam-komputer-qurulumu", icon: MonitorCog, title: tr("Tam komp{u}ter qurulumu", "Full computer setup"), seoTitle: tr("Tam Komp{u}ter Qurulumu | Windows, Driver, Office, Antivirus | Softy.az", "Full Computer Setup | Softy.az"), description: tr("Yeni laptop v{e} ya format olunmu{sh} komp{u}ter {u}{ch}{u}n Windows, driver, Office, antivirus, optimizasiya v{e} laz{i}mi proqramlar.", "Full setup for new or formatted laptops and PCs."), includes: list(["Windows 10/11", "Driver, Office v{e} antivirus", "G{u}nd{e}lik v{e} pe{sh}{e}kar proqramlar", "Formatdan sonra optimizasiya"]), related: ["komputer-formati", "noutbuk-formati", "windows-qurasdirilmasi", "formatdan-sonra-proqramlar"] }
] as const;

export function getSeoPackage(slug: string) {
  return seoPackages.find((item) => item.slug === slug);
}

export type SeoPackage = (typeof seoPackages)[number];
export type SeoPackageSlug = SeoPackage["slug"];
export function localizedPackagePath(locale: Locale, slug: string) {
  return `/${locale}/paketler/${slug}`;
}
