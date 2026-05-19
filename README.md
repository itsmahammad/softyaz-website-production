# Softy.az Website

Production-ready multilingual website for Softy.az, built with Next.js App Router, TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit contact and domain info

Edit `src/config/site.ts`.

Important fields:
- `siteUrl`: used for canonical URLs, sitemap, Open Graph and JSON-LD
- `whatsappNumber`
- `instagram`
- `linkedin`
- `personalWebsite`

For Vercel preview/production, set:

```bash
NEXT_PUBLIC_SITE_URL=https://softyaz.vercel.app
```

When the custom domain is ready, change it to:

```bash
NEXT_PUBLIC_SITE_URL=https://softy.az
```

## Edit services, packages, FAQs and blog

- Services: `src/content/services.ts`
- Packages/pricing: `src/content/packages.ts`
- FAQ: `src/content/faqs.ts`
- Blog posts: `src/content/blog.ts`
- UI labels/translations: `src/i18n/dictionaries/`

Each page supports:
- Azerbaijani: `/az`
- Russian: `/ru`
- English: `/en`

## SEO

Implemented:
- localized metadata
- canonical URLs from one configurable `siteUrl`
- hreflang alternates
- sitemap: `/sitemap.xml`
- robots: `/robots.txt`
- LocalBusiness/ProfessionalService JSON-LD
- Service JSON-LD
- FAQPage JSON-LD
- BlogPosting JSON-LD
- BreadcrumbList JSON-LD

After deployment:
1. Add the domain to Google Search Console.
2. Submit `https://your-domain/sitemap.xml`.
3. Connect Instagram/LinkedIn profile links.
4. Add real customer review screenshots when available.

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Add `NEXT_PUBLIC_SITE_URL`.
4. Deploy.
5. When the custom domain is purchased, add it in Vercel Project Settings and update `NEXT_PUBLIC_SITE_URL`.
