# Rainbow Group of Companies — Website Prototype

A design prototype for a proposed new website for Rainbow Group of Companies, an
education holding group based in Thane (W), Maharashtra.

> [!IMPORTANT]
> **This is an unofficial proposal prototype and is not affiliated with, endorsed
> by, or operated by Rainbow Group of Companies.** It is a design concept built
> for client review. It is not the company's official website, and it is not
> connected to their live site, CMS, hosting, or any internal system.

---

## Status

Concept prototype for client presentation. Not production software.

| Area | State |
| --- | --- |
| Homepage | Complete |
| Institution pages (2, dynamic route) | Complete |
| Careers | Complete |
| Privacy / Terms | Placeholder shells awaiting legal copy |
| Forms | Front-end only — show a success state, no backend |

## Content and imagery disclaimers

Two things in this repo are **deliberately not real** and must be replaced before
any production use:

1. **Photography is stock.** Every image is free-licence stock from
   [Unsplash](https://unsplash.com/license), centralised in
   [`src/data/images.ts`](src/data/images.ts). None of it shows Rainbow Group
   campuses, staff, or students. Swap the photo IDs in that one file to replace
   them everywhere.

2. **Unverifiable content is marked as placeholder.** Leadership names,
   testimonials, curriculum details, accreditations, facilities, and job openings
   are all written as explicit `[to be provided by client]` markers in
   [`src/data/site.ts`](src/data/site.ts). Nothing about the organisation has been
   invented or embellished — figures such as "50,000+ learners" and "20+ years"
   are reproduced from the company's own public website.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** — theme tokens live in `@theme inline` inside
  [`src/app/globals.css`](src/app/globals.css); there is no `tailwind.config.ts`
- **Framer Motion** — scroll and entrance animation
- **Lucide React** — icons

## Getting started

```bash
npm install
```

```bash
npm run dev
```

Then open <http://localhost:3030> (the dev script is bound to port 3030).

## Project structure

```
src/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── careers/                    # Careers page + client-side form
│   ├── institutions/[slug]/        # Dynamic institution pages
│   ├── privacy/  terms/            # Legal placeholders
│   └── globals.css                 # Tailwind theme tokens + animations
├── components/
│   ├── layout/                     # Navbar, Footer, LegalPage shell
│   ├── home/                       # Homepage sections
│   └── ui/                         # EduPattern illustrations, WhatsApp button
└── data/
    ├── site.ts                     # All copy, contact details, placeholders
    └── images.ts                   # Stock photography registry
```

Content is intentionally separated from presentation: `src/data/` holds
everything the client needs to review or replace, so copy changes never require
touching component code.

## Deployment

Deploys to [Vercel](https://vercel.com) with no configuration — import the repo
and it builds as-is. Remote images are allow-listed for `images.unsplash.com` in
[`next.config.ts`](next.config.ts); that entry should be removed once client
photography replaces the stock imagery.

## Licence

Proprietary. Prepared for client proposal purposes.
