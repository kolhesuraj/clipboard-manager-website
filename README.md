# Clipboard Manager — Website

Marketing / landing page for the Clipboard Manager app. Built with React + Vite + Tailwind CSS.  
Deploy to any static host (GitHub Pages, Netlify, Vercel) — zero backend required.

---

## Stack

- **React 18** — component-based UI
- **Vite** — instant HMR dev server and optimized production build
- **Tailwind CSS v3** — utility-first styling
- **TypeScript** — strict mode enabled

---

## Development

```bash
git clone https://github.com/kolhesuraj/clipboard-manager-website.git
cd clipboard-manager-website
npm install
npm run dev        # starts dev server at http://localhost:5173
```

---

## Build

```bash
npm run build      # outputs to website/dist/
npm run preview    # serve the production build locally
```

The `dist/` folder is a fully static site — drop it on any CDN or static host.

---

## Deploy to GitHub Pages

1. Build: `npm run build`
2. Push the `dist/` contents to the `gh-pages` branch, or configure GitHub Actions to do it automatically.
3. Set GitHub Pages source to the `gh-pages` branch root.

### One-liner deploy (manual)

```bash
npm run build
npx gh-pages -d dist
```

---

## Project Structure

```
website/
├── src/
│   ├── main.tsx               # React entry point
│   ├── App.tsx                # Root component (composes all sections)
│   ├── index.css              # Tailwind directives + base overrides
│   └── components/
│       ├── Nav.tsx            # Sticky navigation bar
│       ├── Hero.tsx           # Hero section with app mockup
│       ├── Features.tsx       # 3-column feature grid
│       ├── HowItWorks.tsx     # Step-by-step flow
│       ├── Install.tsx        # Install guide + requirements
│       └── Footer.tsx         # Footer links
├── index.html                 # Vite HTML entry
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

---

## Customisation

- **GitHub URL** — search for `kolhesuraj` and replace with the real org/user in `Nav.tsx`, `Hero.tsx`, and `Footer.tsx`.
- **Colors** — primary accent is Tailwind `indigo-500`. Change globally via the `tailwind.config.js` `extend.colors` block.
- **Content** — all section copy lives directly in each component file; no CMS or external data source.
