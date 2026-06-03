# Maine Volunteer Lawyers Project — Website

Built with [Astro](https://astro.build). No framework dependencies, fast static output, deploys to Vercel.

---

## Getting Started

**Requirements:** Node.js 18+

```bash
npm install          # install dependencies
npm run dev          # dev server → http://localhost:4321
npm run build        # production build
npm run preview      # preview production build locally
```

---

## Project Structure

```
src/
├── config.ts                  # All shared data: URLs, stats, testimonials, quick-exit URL
├── components/
│   ├── QuickExit.astro        # Safety exit button — must stay on every page
│   ├── Nav.astro              # Sticky nav + mobile hamburger drawer
│   ├── Footer.astro           # Site footer
│   ├── Testimonial.astro      # Hero testimonial block (renders placeholder when null)
│   ├── Hero.astro             # Homepage hero with stat blocks
│   ├── TwoPaths.astro         # "I need help" / "I want to volunteer" split
│   ├── Mission.astro          # Mission statement section
│   ├── HowItWorks.astro       # 3-step process
│   ├── Spotlight.astro        # Volunteer testimonial section
│   └── DonateBand.astro       # Donation CTA strip
├── layouts/
│   ├── BaseLayout.astro       # HTML shell, fonts, meta tags
│   ├── PageLayout.astro       # Top-level page chrome (QuickExit + Nav + Footer)
│   └── PracticeAreaLayout.astro  # Shared layout for all /legal-help/* pages
├── pages/
│   ├── index.astro
│   ├── get-help.astro
│   ├── for-attorneys.astro
│   ├── for-community-members.astro
│   ├── about-vlp.astro
│   ├── careers.astro
│   ├── contact.astro
│   ├── donate.astro
│   ├── other-resources.astro
│   └── legal-help/
│       ├── small-claims.astro
│       ├── family-matters.astro
│       ├── protection-from-abuse.astro
│       ├── workers-rights.astro
│       └── general-civil.astro
└── styles/
    └── global.css             # Design tokens, shared utilities, responsive variables
```

---

## Before Launch — Content Placeholders

The following need real content from VLP staff before launch:

| What | Where | How to add |
|------|-------|-----------|
| Testimonials | `src/config.ts` → `testimonials` | Set `quote` and `attribution` for `client`, `attorney`, and `community`. Placeholder is shown until filled. |
| Staff photo | `src/pages/about-vlp.astro` hero | Replace the `.hero-photo-placeholder` div with `<img src="..." alt="VLP staff">` (800×600px recommended) |
| Intern form URL | `src/config.ts` → `internUrl` | Verify this is the correct form — the ID currently matches `communityVolunteerUrl`, which may be a copy-paste error |

---

## config.ts

All shared data lives in `src/config.ts`. Update once and every page picks up the change.

```ts
// External URLs
intakeUrl             // Online intake form
donateUrl             // PayPal donation link
attorneyVolunteerUrl  // Attorney volunteer interest form
communityVolunteerUrl // Community volunteer application
internUrl             // Summer intern application (⚠ verify URL — see placeholder note above)
careersApplyUrl       // Job application form
quickExitUrl          // Destination for the Quick Exit safety button (currently weather.com)

// Site stats — shown in homepage hero and donate page
siteStats: {
  clientsServed,      // e.g. '2,000+'
  countiesServed,     // e.g. '16'
  yearsServing,       // e.g. '40+'
}

// Testimonials — set quote + attribution to display; leave null to show a placeholder
testimonials: {
  client,             // Used on get-help hero
  attorney,           // Used on for-attorneys hero and Spotlight section
  community,          // Used on for-community-members hero
}
```

---

## Design Tokens

All values are CSS custom properties in `src/styles/global.css`.

### Colors

| Variable       | Value     | Usage |
|----------------|-----------|-------|
| `--navy`       | `#1b4f72` | Heroes, action/process sections, dark backgrounds |
| `--navy-mid`   | `#2471a3` | TwoPaths volunteer panel only; not used as a standalone section background |
| `--blue`       | `#2e86c1` | Buttons, links, accents |
| `--blue-light` | `#5dade2` | Hover states, highlights on dark backgrounds |
| `--cream`      | `#f4f8fc` | Primary light section background |
| `--light-gray` | `#e8f0f8` | Supplementary sections (FAQs, directories, legal notices) |
| `--slate`      | `#4a6880` | Body text on light backgrounds |
| `--text`       | `#152d44` | Primary text color |
| `--danger`     | `#7b2d26` | Safety banners, warning boxes |

### Section color system

Page sections follow a consistent rule:

- **`--navy`** — heroes and sections focused on action, process, or key program details
- **`--cream`** — primary informational content sections
- **`--light-gray`** — supplementary or reference material (FAQs, resource directories, legal notices)
- **`--blue`** — the donate band accent on the homepage only

Most pages alternate `navy → cream → navy → cream`. Use `--light-gray` for any section that sits outside the main page narrative.

### Layout & spacing

| Variable           | Default | Breakpoints |
|--------------------|---------|-------------|
| `--page-padding-x` | `80px`  | 48px at 1024px, 20px at 768px |
| `--hero-pt`        | `96px`  | 64px at 768px |
| `--hero-pb`        | `88px`  | 56px at 768px |
| `--hero-min-h`     | `620px` | 0 at 768px |

---

## Global CSS Utilities

`src/styles/global.css` provides shared classes used across pages. Don't redefine these locally:

| Class | Purpose |
|-------|---------|
| `.btn-primary` | Primary CTA button |
| `.btn-outline` | Outline button (for use on dark backgrounds) |
| `.btn-secondary` | Secondary button (dark backgrounds) |
| `.section-inner` | Max-width content wrapper (1200px centered) |
| `.section-header` | Centered section heading block |
| `.section-header.light` | Section heading variant for dark backgrounds |
| `.section-sub` | Section subtitle beneath a heading |
| `.hero-gradient` | Radial gradient overlay on hero sections |
| `.hero-sub` | Hero subtitle text |
| `.hero-inner` | Inner content wrapper for hero sections (`position: relative; z-index: 1`) |
| `.eyebrow` | Small all-caps label with line (light background variant) |
| `.eyebrow-blue` | Small all-caps label with line (dark background variant) |
| `.card-badge` | Small pill label on a card (e.g. "Fastest response") |
| `.faq-list / .faq-item / .faq-q / .faq-chevron / .faq-a` | Accordion FAQ component styles |
| `.notice-box` | Blue-bordered informational callout |
| `.warning-box` | Red-bordered warning callout |
| `.sidebar-card` | White bordered card for sidebars |
| `.content-body` | Prose content styles for practice area pages |

---

## Adding a New Page

1. Create `src/pages/your-page.astro`
2. Import `PageLayout` and any data you need from `config.ts`

```astro
---
import PageLayout from '../layouts/PageLayout.astro';
import { intakeUrl } from '../config';
---

<PageLayout title="Page Title | VLP" activePage="Nav Link Label">
  <main>
    <!-- your sections here -->
  </main>
</PageLayout>
```

For a new practice area page under `/legal-help/`, use `PracticeAreaLayout` instead — see an existing page in `src/pages/legal-help/` as a reference.

---

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel auto-detects Astro — click Deploy
4. Point your domain in Vercel's dashboard

Every push to `main` redeploys automatically.

> **Note:** The site is statically built. The copyright year in the footer is set at build time — update it in `src/components/Footer.astro` and redeploy when the year rolls over.

---

## The Quick Exit Button

`QuickExit.astro` is a critical safety feature for visitors who may be in domestic violence situations. It must remain on every page. Clicking it immediately navigates away using `window.location.replace()` so the browser back button won't return the user to the VLP site.

- The destination URL is set in `src/config.ts` → `quickExitUrl` (currently `weather.com`)
- `PageLayout` and `PracticeAreaLayout` both include it automatically
