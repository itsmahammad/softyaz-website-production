import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "Softy.az | Proqram quraşdırılması və texniki dəstək",
    template: "%s"
  },
  description: "Softy.az proqram quraşdırılması, Windows/Linux setup, driverlər, optimizasiya və uzaqdan texniki dəstək xidmətləri göstərir.",
  metadataBase: new URL(siteConfig.siteUrl),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" }
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az">
      <body>{children}</body>
    </html>
  );
}
