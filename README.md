# Secolix — Enterprise Cybersecurity Website

A premium, light-theme, enterprise-grade cybersecurity company website built with
React + Vite. Redesigned from the original Secolix corporate site with an expanded
information architecture, a live animated network background, and a full set of
enterprise sections.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  data.js                 content for services, industries, process, case studies, resources
  App.jsx                 page composition
  main.jsx                entry point
  styles.css              design system + all section styles
  components/
    Background.jsx        fixed ambient network canvas (page-wide, reduced-motion aware)
    Nav.jsx                sticky header, Solutions mega menu, mobile nav
    Hero.jsx               hero + animated "Defense Core" radar visualization
    Trust.jsx              enterprise trust / capability strip
    Services.jsx           capability bento grid + modal trigger
    Pipeline.jsx           signature animated defense pipeline (Internet → Protected)
    Operations.jsx         live hunt-console terminal + operations cards
    AISection.jsx          AI-in-the-loop capabilities + pulse visualization
    ThreatMap.jsx          abstract global threat intelligence network visualization
    Platform.jsx           MDR/SOC product roadmap + dashboard preview
    Why.jsx                positioning section
    Process.jsx            six-step security process
    Industries.jsx         industries served
    CaseStudies.jsx        representative engagement examples (clearly labeled, non-fabricated)
    Resources.jsx          knowledge center cards
    Contact.jsx            security review request form
    Footer.jsx             site footer
    ServiceModal.jsx       accessible service detail dialog
```

## Design notes

- Premium white/light theme with deep-navy typography and a teal (`#08aeb4`) brand accent,
  carried over from the existing Secolix brand identity rather than replaced.
- Live network canvas behind the whole page, plus a signature animated "defense pipeline"
  diagram — both respect `prefers-reduced-motion`.
- No fabricated statistics, customer logos, certifications or testimonials. The SOC
  dashboard and hunt console are clearly framed as illustrative product previews, and
  case studies are labeled "Representative engagement" rather than real client claims.
- Fully responsive: dedicated layouts at desktop, tablet (≤1080px), and mobile
  (≤950px, ≤600px) breakpoints, not just a shrunk desktop layout.
- Accessible: semantic headings, keyboard-operable service cards and modal, visible
  focus states, `aria-*` attributes on interactive nav/modal elements.
- SEO: descriptive title/meta, Open Graph + Twitter cards, canonical URL, and
  Organization structured data in `index.html`.

> The contact form is a frontend demo. Connect it to your preferred email/API/CRM
> endpoint before production.
