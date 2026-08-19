# arockia.cloud

Personal website for Arockia Arulnathan A — Cybersecurity Leader & CISO. Built with Next.js (App Router), Tailwind CSS, and Framer Motion, exported as a fully static site.

## Stack

- **Next.js 16** (App Router, TypeScript), `output: "export"` — no server required
- **Tailwind CSS v4** for styling and design tokens (dark/light theme via `next-themes`)
- **Framer Motion** for page transitions, scroll reveals, and micro-interactions
- **next-mdx-remote** for the blog — posts live as MDX files in `src/content/blog`
- **Formspree** for the contact form (client-side, no backend)

## Content

All CV-derived content lives in one typed file: [`src/content/data/profile.ts`](src/content/data/profile.ts). Every page (Home, Profile, Services, Projects, Contact) reads from it — update it in one place to update the whole site.

Blog posts are MDX files in [`src/content/blog`](src/content/blog). Add a new `.mdx` file with frontmatter (`title`, `excerpt`, `date`, `tag`) to publish a new post.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form setup

The contact form posts to [Formspree](https://formspree.io). Create a free form there, then set the form ID as an env var:

```bash
cp .env.local.example .env.local
# edit .env.local and set NEXT_PUBLIC_FORMSPREE_ID=your-form-id
```

Until this is set, the form UI still works but shows a message asking visitors to email directly instead of submitting.

## Build & deploy (static export)

```bash
npm run build
```

This produces a fully static site in `/out`, deployable to any static host:

- **Cloudflare Pages**: build command `npm run build`, output directory `out`
- **Netlify**: build command `npm run build`, publish directory `out`
- **GitHub Pages**: push the contents of `out/` to the `gh-pages` branch (or use a GitHub Action)

Point the `arockia.cloud` domain at whichever host you choose (CNAME/A records per that host's custom-domain instructions), then set `NEXT_PUBLIC_FORMSPREE_ID` as a build-time environment variable on that host so it gets inlined into the static build.

To preview the exported site locally: `npx serve out`.

## Updating the résumé download

Replace [`public/resume/Arockia_Arulnathan_CV.pdf`](public/resume/Arockia_Arulnathan_CV.pdf) with an updated CV using the same filename — the "Download CV" button on the homepage links directly to it.
