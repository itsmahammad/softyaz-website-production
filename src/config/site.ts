export const siteConfig = {
  name: "Softy.az",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://softyaz.vercel.app",
  futureDomain: "https://softy.az",
  defaultLocale: "az",
  locales: ["az", "ru", "en"] as const,
  whatsappNumber: "+994513221233",
  whatsappDisplay: "+994 51 322 12 33",
  instagram: "https://instagram.com/softy.az_",
  linkedin: "https://www.linkedin.com/in/itsmahammad/",
  personalWebsite: "https://mahammad-mammadov.vercel.app/",
  email: "hello@softy.az",
  serviceArea: ["Baku", "Azerbaijan"],
  discount: {
    az: "3 və daha çox proqram quraşdırılmasında 20% endirim",
    ru: "20% скидка при установке 3 и более программ",
    en: "20% discount when installing 3 or more apps"
  }
};

export type Locale = (typeof siteConfig.locales)[number];
