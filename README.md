# Vertex Studio — Agency Site

Marketing site for a hybrid creative agency + AI/automation studio serving clients in the US and Europe. Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and a Three.js (React Three Fiber) animated hero.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** for styling
- **React Three Fiber / drei** for the animated 3D hero object
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customizing

All brand name, tagline, contact email, and page copy live in one place:

- `src/lib/content.ts` — brand info, nav links, hero copy, services, process steps, "why us" points, contact section.

Update that file to change the agency name (`brand.name` / `brand.fullName`), contact email, and all on-page text without touching component code.

Component files (all in `src/components/`):

- `Nav.tsx`, `Hero.tsx`, `HeroScene.tsx` / `Scene3D.tsx` (3D hero object), `Services.tsx`, `Process.tsx`, `WhyUs.tsx`, `Contact.tsx`, `Footer.tsx`.

## Deploying

Deploys cleanly to [Vercel](https://vercel.com/new) — connect this repo and it will build with zero extra config.
