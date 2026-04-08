# Baptiste Friboulet — Portfolio · CLAUDE.md

Personal portfolio built with **React 19 + TypeScript + Vite + Tailwind CSS v4**,
deployed automatically on **GitHub Pages** via GitHub Actions.

---

## Tech stack

| Layer      | Choice                                    |
|------------|-------------------------------------------|
| Framework  | React 19 (JSX transform)                  |
| Language   | TypeScript 5 (strict mode)                |
| Build      | Vite 6                                    |
| Styling    | Tailwind CSS v4 (`@import "tailwindcss"`) |
| Router     | React Router v7 — **HashRouter** (required for GitHub Pages) |
| Icons      | Font Awesome 6.5 via CDN                  |
| Font       | Outfit (Google Fonts CDN)                 |

---

## Project layout

```
src/
  hooks/
    useMouseParallax.ts   # starfield parallax on mouse move
    useScrollReveal.ts    # IntersectionObserver fade-in
    useNavbarScroll.ts    # hide/show navbar on scroll direction
  components/
    Starfield.tsx         # fixed star background + light beam
    DistortionOverlay.tsx # split-panel reveal on home page load
    GradientCard.tsx      # card with cursor-following radial gradient
    Navbar.tsx            # fixed header with hide-on-scroll
    Layout.tsx            # Outlet wrapper shared by all routes
  pages/
    Home.tsx
    About.tsx
    Projects.tsx
    Contact.tsx
  App.tsx                 # HashRouter + route definitions
  main.tsx
  index.css               # Tailwind v4 import + global CSS classes
```

---

## Key conventions

### Tailwind v4
Use `@import "tailwindcss"` in `index.css` — **not** the v3 directives
(`@tailwind base/components/utilities`). The `@tailwindcss/vite` plugin handles
the rest; no `tailwind.config.js` is needed.

### HashRouter — mandatory
GitHub Pages serves static files with no server-side routing. All navigation
**must** use `HashRouter` from `react-router`. Never switch to `BrowserRouter`
or add a `404.html` redirect hack.

### Scroll-reveal pattern
Add `data-reveal` + `className="reveal-hidden"` to any element you want to
animate in on scroll. `useScrollReveal` (wired in `Layout.tsx`) picks them up
automatically via `IntersectionObserver` and swaps in `reveal-visible`.

### GradientCard
Accepts all native `div` HTML attributes (spread via `...rest`), including
`data-reveal`. Use it as the outermost wrapper for any card.

### DistortionOverlay
Only on `Home.tsx`. It mounts two full-screen panels that slide out, then fades
in the page content. Do **not** use it on inner pages.

### Navbar
Shown on all pages **except** `/` (home has its own inline nav). Hide/show is
controlled by `useNavbarScroll` reacting to scroll direction.

---

## Development

```bash
npm run dev      # start Vite dev server
npm run build    # tsc type-check + Vite production build
npm run preview  # preview the dist/ output locally
```

---

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`:
`checkout → setup-node → npm ci → npm run build → configure-pages → upload-artifact → deploy-pages`

**First-time setup:** go to *Settings → Pages → Source → GitHub Actions* and
save. Subsequent pushes deploy automatically.

---

## Adding / updating content

| What                  | Where                          |
|-----------------------|--------------------------------|
| Hero text             | `src/pages/Home.tsx`           |
| Bio cards             | `src/pages/About.tsx`          |
| Tech list             | `src/pages/About.tsx` → `TECH_SECTIONS` |
| Featured projects     | `src/pages/Projects.tsx` → `FEATURED`  |
| Minor projects        | `src/pages/Projects.tsx` → `MINOR_TITLES` |
| Contact links         | `src/pages/Contact.tsx` → `CONTACTS`   |
| Global styles / stars | `src/index.css`                |
