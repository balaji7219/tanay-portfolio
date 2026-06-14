# Digital Marketer Portfolio — React

A modern, responsive portfolio for a digital marketer (marketing videos, paid ads, growth),
built with **React + Vite**. Componentized, with all copy driven from a single data file.

## Tech

- React 18 + Vite 5
- Plain CSS (no UI library) — theme via CSS variables in `src/index.css`
- IntersectionObserver scroll-reveal via a custom `useReveal` hook

## Project structure

```
portfolio-react/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # React entry
    ├── App.jsx               # Page composition
    ├── index.css             # Global styles + theme
    ├── hooks/
    │   └── useReveal.js       # Scroll-reveal animation hook
    ├── data/
    │   └── content.js         # ← Edit all text/stats/projects here
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Marquee.jsx
        ├── Services.jsx
        ├── Work.jsx
        ├── Experience.jsx
        ├── Testimonials.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Getting started

```bash
npm install
npm run dev       # start dev server (http://localhost:5173)
npm run build     # production build to /dist
npm run preview   # preview the build
```

## Customize

- **All content** (name, stats, services, projects, experience, testimonials, nav, email)
  lives in `src/data/content.js`. Edit there — no component changes needed.
- **Colors / theme** — CSS variables at the top of `src/index.css` (`--brand`, `--brand-2`, `--accent`).
- **Showreel** — replace the `alert` in `src/components/Hero.jsx` with a real `<video>` or YouTube/Vimeo embed.
