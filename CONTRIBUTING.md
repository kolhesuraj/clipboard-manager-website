# Contributing to the Website

This covers how to work on the landing page. For contributing to the Electron app itself, see the [app CONTRIBUTING guide](../CONTRIBUTING.md).

---

## Setup

```bash
cd website
npm install
npm run dev
```

The dev server starts at `http://localhost:5173` with hot module replacement — changes to any `.tsx` or `.css` file appear instantly without a page reload.

---

## Making Changes

Each section of the page is its own component in `src/components/`. Most content edits are just changing strings or arrays inside the component files — no build config changes needed.

| Section | File |
|---|---|
| Navigation | `src/components/Nav.tsx` |
| Hero + app mockup | `src/components/Hero.tsx` |
| Feature cards | `src/components/Features.tsx` |
| How It Works steps | `src/components/HowItWorks.tsx` |
| Install guide | `src/components/Install.tsx` |
| Footer | `src/components/Footer.tsx` |

---

## Styling

All styling uses **Tailwind CSS utility classes** directly on JSX elements — no CSS module files.  
Custom design tokens (background colors, border opacity) are defined in `tailwind.config.js` under `theme.extend`.

---

## Pull Request Checklist

- [ ] `npm run build` passes with zero TypeScript errors
- [ ] Page looks correct on both desktop (1280px+) and mobile (375px)
- [ ] No hardcoded `localhost` URLs in production content
- [ ] Replace `your-username` placeholder if adding real GitHub links

---

## Code Style

- TypeScript strict mode — no `any` types
- No CSS module files — use Tailwind classes only
- One component per file
- No comments unless the intent is genuinely non-obvious
