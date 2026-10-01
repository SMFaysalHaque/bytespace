# ByteSpace — Project Progress & Handoff

Last updated: 2026-09-30

This document is the single source of truth for where the project stands and what comes
next. Read it first when resuming work.

---

## 1. Project Overview

Build the **ByteSpace** website from a Figma design.

- **Required:** full, mobile-responsive landing page.
- **Bonus:** Login and Signup pages.
- **Delivery:** public GitHub repo, feature branch + Pull Request (never commit to main
  directly), deploy to Vercel, submit the live URL.

### Figma source

- File key: `9cUx8hCvrqEinx2Kq3o6jC`
- Landing page node: `8004-248`
- Login / Signup nodes: **to be provided.**

> Important: pulling any section's design requires a live Figma MCP connection. The MCP
> server must be connected before each section can be read/implemented. If it is not
> connected, reconnect it first, then continue.

---

## 2. Locked Decisions

| Area | Decision |
| --- | --- |
| Framework | Next.js (App Router) + TypeScript (strict) + Tailwind CSS v4 |
| Deployment | Vercel |
| Architecture | Feature-based (`src/features/*`), reusable components |
| Data | Single static `src/data` layer. **No API calls.** |
| Auth | Lightweight React Context + `localStorage`, one static credential |
| Theme | Single theme only (no dark mode) |
| i18n | None (English only) |
| UI primitives | Hand-built with Tailwind (no shadcn/ui) |
| Code style | **No comments anywhere. No AI attribution anywhere.** Prettier + ESLint |

### Git / deploy workflow

- The repo, branches, PRs, and Vercel are managed by the project owner.
- After each chunk, a plain commit message is provided (no AI-attribution trailers).
- Work happens on a feature branch, PR into main.

### Static login credential

- Email: `demo@bytespace.com`
- Password: `Demo@12345`
- Display name: `Demo User`
- Anyone who "signs up" still logs in with this same static credential.
- After login, the navbar shows an avatar circle → dropdown with username + Logout.

---

## 3. Design System (extracted from Figma)

### Fonts

- **Poppins** — headings/display (weights 500, 600). Loaded via `next/font/google`.
- **Satoshi** — body/labels (weights 400, 500, 700, 900). Not on Google Fonts;
  self-hosted from `src/assets/fonts/*.woff2` via `next/font/local`.

### Colors (Tailwind utility → hex)

- `primary` `#003BE2` (Persian Blue) · `primary-hover` `#0031BD`
- `accent` `#D4FB20` · `accent-bright` `#CBFC01` (Electric Lime)
- `violet` `#7F30F7` · `violet-deep` `#300B6A`
- `ink` `#242528` · `ink-muted` `#4B4C53` · `muted` `#82868E`
- `line` `#E5E6E8` · `surface` `#F5F5F6`
- `shuttle-200` `#CED0D3` · `shuttle-300` `#ABAEB5` · `shuttle-900` `#3A3B3F`

### Type scale (from Figma variables)

- Heading L/M/S/XS → Poppins 600 (72 / 44 / 24 / 20)
- Display S/XS → Poppins 500 (44 / 36)
- Body L/M/S/XS → Satoshi 400 · Label XL–XS → Satoshi 500

---

## 4. Landing Page Sections (top → bottom)

From the Figma landing frame, in order:

1. Hero (blue) — heading, search bar, person image, floating stat cards
2. Partner logo strip
3. "Discover Your Passion, Build Your Skills" — category filter + course cards grid
4. "Explore Diverse Learning Paths" — category icon tiles
5. "Your Path to Professional Growth" — copy + image + stats (12K / 70+ / 16)
6. "Create & Manage Courses Easily" — feature list + image
7. "Unlock Your Potential as a Creator" — dark CTA band
8. "Discover What Our Community Is Saying" — testimonials
9. Footer — logo, newsletter, link columns

---

## 5. Status — What's Done

### Course Details page ✅ (branch `courseDetails`)

- Route `/courses` (`src/app/courses/page.tsx`), wiring the existing navbar "Courses" link.
- Feature `src/features/course/components/`: `course-detail-view` (layout), `course-hero`,
  `course-video`, `course-sidebar`, `course-content` (interactive About/Lessons/Reviews
  tabs), `course-about` (description + sneak peek + key points), `course-lessons` (modules
  + lesson content + progress tracking), `course-reviews` (rating summary + distribution +
  filter pills + individual review cards).
- Content in `src/data/course-details.ts`, typed via `CourseDetail` in `src/types`.
- Assets added under `public/images/icons` (signal, star-rate, people, share, play,
  source, videocam, badge, consultation, videocam-module, star-filled),
  `public/images/courses` (digital-asset-poster, sneak-peek-1..4), and
  `public/images/reviews` (reviewer-1..4).
- Blue hero overlaps the two-column body; overlap scales per breakpoint so the video stays
  on blue and the tabs sit on white. All three tab panels verified responsive (xs→xxl, no
  horizontal overflow) and tab switching confirmed.
- Commit message: `feat: add course details page with interactive tabs and responsive layout`

### Chunk 1 — Project setup + skeleton ✅ COMPLETE

- Scaffolded Next.js 16 + React 19 + TS strict + Tailwind v4, `@/*` alias.
- Removed generated `CLAUDE.md`, `AGENTS.md`, and default branding SVGs.
- Fonts: Poppins (google) + Satoshi (self-hosted) centralized in `src/config/fonts.ts`.
- Theme tokens in `src/app/globals.css` from Figma variables (single theme).
- Static data layer in `src/data/` (courses, categories, testimonials, partners,
  features, stats, navigation, footer) typed via `src/types`.
- Feature-based skeleton, `lib/utils.ts` (`cn`), constants, config.
- Tooling: ESLint clean, Prettier configured, README rewritten.
- Verified: `npm run lint` ✓, `npm run build` ✓, `npm run format` ✓.
- Commit message: `chore: scaffold Next.js project with Tailwind, fonts, theme tokens and static data layer`

> Content note: `courses` / `testimonials` / `partners` currently hold realistic seed
> data referencing `public/images/...` (not yet added). Exact copy and real images will
> be finalized when the matching sections are built (chunk 3), which requires the Figma
> MCP connection.

### Current file structure

```
src/
├── app/            layout.tsx, page.tsx (placeholder), globals.css, favicon.ico
├── assets/fonts/   Satoshi-{Regular,Medium,Bold,Black}.woff2
├── components/
│   ├── ui/         (empty — chunk 2/3)
│   └── shared/     (empty — chunk 2)
├── config/         fonts.ts, site.ts
├── constants/      index.ts (ROUTES, AUTH_STORAGE_KEY)
├── data/           categories, courses, features, footer, navigation, partners,
│                   stats, testimonials, index (barrel)
├── features/
│   ├── landing/components/  (empty — chunk 3)
│   └── auth/{components,hooks,schemas}/ (empty — chunk 5)
├── lib/            utils.ts (cn)
├── providers/      (empty — chunk 5, AuthProvider)
└── types/          index.ts
public/images/{courses,authors,testimonials,partners}/
```

---

## 6. Plan — What's Next

Each chunk ends with a reviewable stop + a plain commit message. Nothing is committed
without owner review.

- **Chunk 2 — Shared layout.** Navbar (logged-out state) + Footer + layout primitives
  (Container, Section, SectionHeading), Button/Input UI primitives. Introduce route
  groups `(marketing)` / `(auth)`.
  *Requires Figma MCP connection for the header + footer designs.*

- **Chunk 3 — Landing sections.** Build all sections in order (Hero → Testimonials),
  each reading from `src/data`. Download and wire real images/icons/SVGs from Figma into
  `public/images`. Finalize seed content against the design.
  *Requires Figma MCP connection per section.*

- **Chunk 4 — Responsive pass.** Mobile/tablet breakpoints across all sections;
  hamburger menu for the navbar.

- **Chunk 5 — Auth.** `AuthProvider` (Context + localStorage), login/signup pages built
  from the provided Figma designs, React Hook Form + Zod validation, navbar avatar
  dropdown + logout, protected behavior as needed.
  *Requires the Login/Signup Figma node links + Figma MCP connection.*

- **Chunk 6 — Polish.** Metadata/SEO per route, accessibility, favicon/OG image, final
  review, build verification.

---

## 7. Pending Inputs Needed From Owner

- [ ] Login / Signup Figma node links (for chunk 5).
- [ ] Confirm the Figma MCP connection is live before each design-dependent chunk.
- [ ] GitHub repo + branch created, Vercel project connected (owner-managed).

---

## 8. How to Resume

```bash
cd ByteSpace
npm install      # if dependencies are missing
npm run dev      # http://localhost:3000
npm run build    # verify production build
npm run lint
npm run format
```

Then continue from **Chunk 2** in section 6 above. Confirm the Figma MCP connection is
active first.
