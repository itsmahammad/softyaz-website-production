import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { isLocale } from "@/lib/i18n";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: "Softy.az | Proqram quraşdırılması və texniki dəstək",
    template: "%s"
  },
  description: "Softy.az proqram quraşdırılması, Windows/Linux qurulumu, driverlər, optimizasiya və uzaqdan texniki dəstək xidmətləri göstərir.",
  metadataBase: new URL(siteConfig.siteUrl),
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  verification: {
    google: "QmGPGad-khTwaH5E8X8cnr4Gd5u2arWzkkoMAJ_h26I"
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" }
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export default async function RootLayout({ children, params }: { children: React.ReactNode; params?: Promise<{ locale?: string }> }) {
  const resolvedParams = params ? await params : undefined;
  const rawLocale = resolvedParams?.locale ?? "";
  const locale = isLocale(rawLocale) ? rawLocale : siteConfig.defaultLocale;

  return (
    <html lang={locale}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
