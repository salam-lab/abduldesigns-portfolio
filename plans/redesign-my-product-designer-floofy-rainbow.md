# Redesign — Senior Product Designer Portfolio

## Context

The current portfolio (AbdulDesigns / Abdul Salam) reads as a visually experimental **UI designer** site: heavy custom cursor, aurora/grain/perspective-grid backgrounds, 3D tilt cards, animated gradient text everywhere, and repeated bio copy across Home and About. The goal is to reposition it as a **senior Product Designer** portfolio in the mold of Linear / Stripe / Vercel / Ramp — minimal, premium, confident, recruiter-first. A recruiter spending <2 minutes should immediately grasp who Abdul is, what kind of Product Designer he is, which products he's shipped, and why to open a case study — with content hierarchy and case-study quality doing the work instead of motion.

Architecture decision (confirmed with user): **keep multi-page routing** (`/`, `/work`, `/work/:slug`, `/about`, `/contact`). A new floating right-side section nav (ChatGPT-style) appears **only on the homepage and case study pages**. The top `Navbar` stays for cross-route navigation.

## Goals → Concrete changes

### 1. Positioning & copy (`src/app/data/portfolio.ts`)
- `brand.role`: `"UI/UX & Product Designer"` → **`"Product Designer"`**. Sweep all visible "UI/UX Designer" strings (Hero bio, About bio, `experience[].role`) to "Product Designer" phrasing where authentic.
- Rewrite `expertise`/skills language around **Product Strategy, UX Research, Product Discovery, Design Systems, Design Thinking, Business Goals, Cross-functional Collaboration, Problem Solving** (goal #8).
- Add a new **`skills`** export (goal #9) — an authentic, grouped list:
  `Product Strategy, Product Discovery, UX Research, Design Systems, Rapid Prototyping, Design Thinking, Data-informed Design, Workshop Facilitation, Cross-functional Collaboration, Design QA, AI-assisted Design, AI Workflow Integration`.
  Shape suggestion: `{ name: string; group: "Strategy" | "Craft" | "Collaboration" | "AI" }[]` so the section can cluster them.
- **CaseStudy interface additions** for card + STAR:
  - Add `industry: string` (e.g. "Fintech", "Logistics", "SaaS / Design System").
  - Add `task: string` (the STAR "Task": responsibilities + constraints). Reuse existing fields for the rest: `problem` → **Situation**, `task` → **Task**, `process[]` → **Action**, `metrics[]` + `outcome` → **Result**.
  - `role`, `timeline` already exist → surfaced on the card.
  - Add a short `cardOutcome: string` (one-line headline metric/result for the card, e.g. "−41% checkout abandonment").
- Keep all three studies (flowpay / logitrack / novasaas); only extend their objects. Populate `task` + `industry` + `cardOutcome` from existing copy.

### 2. Theme system — light + dark (goal #10, #11)
- `src/styles/globals.css`: the app's real tokens are the `--ad-*` vars, currently **dark-only in `:root`**. Restructure:
  - Move current dark values into a **`.dark { … }}`** block (or `:root.dark`).
  - Define a polished **light palette** in `:root` (default). Light: near-white bg (`#fafafb`/`#ffffff`), `--ad-surface` = subtle gray, dark text, softened borders, muted accent glows. Keep the cyan/blue/purple accents but desaturate glows for light mode so it reads enterprise, not neon.
  - Reduce reliance on `--ad-glow`/aurora saturation; both themes must pass contrast (goal #10). Body text uses `--ad-text` on `--ad-bg` at AA.
- Theme provider: add `src/app/components/ThemeProvider.tsx` (context + `localStorage` persist + `prefers-color-scheme` initial) that toggles a `.dark` class on `document.documentElement`. Wrap in `Root.tsx`.
- Add a compact **theme toggle** (sun/moon, lucide) into `Navbar.tsx` (desktop + mobile menu).
- Default theme: **dark** (preserves current brand), user-overridable and persisted.

### 3. Reduce animation / de-award-site (goal #7, #11)
- **Delete the custom cursor**: remove `CustomCursor.tsx` usage from `Root.tsx` and remove the `cursor: none` block in `globals.css` (restore native cursor). Delete the component file.
- Simplify decorative backdrops in `Root.tsx`: drop `.aurora` + `.bg-pattern` perspective grid + `.grain` for a calmer surface. Keep at most a single very-subtle static gradient/grid; remove `grid-flow` and aurora keyframes usage.
- `ui-bits.tsx`:
  - `Reveal`: keep but make it subtle — remove the `blur()` filter, shorten duration (~0.4s), smaller `y` (12). Keep `useReducedMotion` guard.
  - `Button`: reduce `whileHover` to a small color/opacity shift (drop `y:-3, scale:1.02`); keep `whileTap` minimal. Remove `.cta` shine sweep class (and its CSS).
- `CaseStudyCard.tsx`: **remove 3D tilt + spotlight**; replace with a clean, static card that has a subtle hover (border + slight bg change, small image zoom optional). Restructure content to show **Product · Industry · Role · Timeline · Outcome** with strong hierarchy (goal #3).
- Home `Typewriter`: replace with a static, strong headline (typewriter is decorative). Keep a single subtle fade-in.
- Remove `text-gradient-anim` continuous animation from headings (use static `text-gradient` sparingly, or solid text). Keep `ToolsMarquee` optional/static or drop.

### 4. Homepage reorder + floating nav (goal #2, #5, #6)
Rewrite `src/app/pages/Home.tsx` section order and give each a stable `id`:
1. `#hero` — **clean Hero**: strong headline (Product Designer value prop), one-line sub, 2 CTAs (View work / Contact). Remove the profile card's duplicated bio/industry/live-project block and the stats-heavy clutter; keep it spare with lots of whitespace. No repeated biography (that lives in `#about`).
2. `#work` — **Featured Product Case Studies** (primary focus): 3 redesigned `CaseStudyCard`s with clear Product/Industry/Role/Timeline/Outcome, strong CTA into each study. Link to full `/work`.
3. `#experience` — **Experience / Companies**: timeline from `experience[]` (reused from About).
4. `#skills` — **Skills & Expertise**: new `skills` grouped list + condensed `expertise`.
5. `#about` — **About Me** (condensed preview): short bio + portrait + link to `/about`. This is the ONLY place the bio appears on the homepage.
6. `#contact` — **Contact**: reuse `CTABand`/contact CTA linking to `/contact` (+ email).

- New component `src/app/components/SectionNav.tsx`: fixed right-center, minimal dots+labels, active-section indicator via `IntersectionObserver` (reuse the pattern from `CaseStudy.tsx` lines ~49-63), smooth-scroll on click with offset for the fixed navbar. Hidden on small screens; respects reduced motion. Accepts a `sections: {id,label}[]` prop.
- Render `SectionNav` on Home (the 6 sections above) and on CaseStudy.

### 5. Case Study page → STAR + floating nav (goal #4, #5, #6)
Rewrite `src/app/pages/CaseStudy.tsx`:
- **Remove the left `SideNav`**; use the shared `SectionNav` (right-side) instead.
- Section IDs + labels become STAR: `#overview` (context: role/timeline/team/industry), `#situation` (from `problem`), `#task` (from new `task`), `#action` (research/process/wireframes/decisions/iterations/collaboration/testing — from `process[]` + `gallery` + `beforeAfter`), `#result` (metrics + outcome + learnings).
- Emphasize decision-making narrative headings ("Why", "Trade-offs") over pure screens. Keep `ImageWithFallback` galleries but secondary to the story.
- Fix all anchors so `SectionNav` items map exactly to rendered `id`s (goal #6) and scroll-spy margins are tuned (`-45% 0px -50% 0px`).

### 6. Typography & spacing (goal #12)
- Increase base body size (~16–18px) and line-height (~1.6) for reading blocks; add generous, consistent section vertical rhythm (8pt grid). Strengthen heading hierarchy (clear H1/H2/section-label scale) while removing decorative animated gradients. Adjust in `globals.css` utilities + per-section classes. Note `theme.css @layer base` sets default h1–h4 sizes; override with explicit classes where needed (project rule: avoid Tailwind text-size/weight utilities unless intentionally changing type — here type change IS the intent, so it's acceptable, applied deliberately).

## Files to create / modify
- **Modify** `src/app/data/portfolio.ts` — role rename, `skills` export, CaseStudy `industry`/`task`/`cardOutcome`, copy sweep.
- **Modify** `src/styles/globals.css` — light+dark `--ad-*` tokens, remove `cursor:none`, remove `.cta` shine, calmer backdrops, typography rhythm.
- **Create** `src/app/components/ThemeProvider.tsx`, `src/app/components/SectionNav.tsx`.
- **Modify** `src/app/components/Root.tsx` — wrap ThemeProvider, drop custom cursor + heavy backdrops.
- **Modify** `src/app/components/Navbar.tsx` — theme toggle; ensure homepage nav links can anchor-scroll to sections.
- **Modify** `src/app/components/CaseStudyCard.tsx` — static premium card w/ Product/Industry/Role/Timeline/Outcome.
- **Modify** `src/app/components/ui-bits.tsx` — calmer `Reveal`/`Button`.
- **Rewrite** `src/app/pages/Home.tsx` — reorder + ids + SectionNav + clean hero.
- **Rewrite** `src/app/pages/CaseStudy.tsx` — STAR + SectionNav.
- **Modify** `src/app/pages/About.tsx` — de-dupe bio vs homepage, Product Designer language, reuse `skills`.
- **Delete** `src/app/components/CustomCursor.tsx`.
- Light touch: `src/app/pages/Work.tsx`, `Contact.tsx`, `Footer.tsx`, `CTABand.tsx` for theme/animation/language consistency.

## Verification
- App runs on the existing Vite dev server (do NOT run `vite build` or start a new server). Open the preview surface.
- Homepage: confirm section order Hero → Work → Experience → Skills → About → Contact; floating right nav shows active section, click scrolls smoothly with correct offset, every item maps to a real section.
- Case study: floating nav shows STAR sections (Overview/Situation/Task/Action/Result); scroll-spy highlights correctly; no left sidebar remains.
- Cards show Product, Industry, Role, Timeline, Outcome.
- Toggle theme: both light and dark are polished, text meets contrast, persists on reload, no neon glare in light mode.
- Native cursor restored; no custom cursor; motion is subtle; `prefers-reduced-motion` disables remaining transitions.
- No duplicate/removed data errors; "Product Designer" language throughout; bio not repeated between Home and About.
