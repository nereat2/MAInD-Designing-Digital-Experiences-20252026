---

**FIGMA MAKE PROMPT — FOLD 3: THE WORLD THAT BROKE (UPDATED)**

---

Create a single-section problem statement with a clean, always-visible top block and a collapsible research section below. No dark backgrounds anywhere in this fold.

---

**BACKGROUND**
`#FFF0EC` — a very light warm coral. Soft, clearly distinct from the off-white of surrounding folds, on-brand without competing with the solution sections that come later.

**Card surface colour:** `#FAFAF7` — near-white. Cards lift cleanly off the coral background.

---

## ALWAYS-VISIBLE BLOCK

Top padding: 100px.

**Eyebrow:** "THE PROBLEM"
Figtree Medium, 11px, uppercase, letter-spacing 0.16em, colour #FF385C. Margin below: 20px.

**Headline:** "Across the system, every actor is optimising for the wrong thing."
Figtree Bold, 44–48px, line height 1.1, letter-spacing −0.025em, colour #2C2825, max width ~24 characters. Margin below: 56px.

---

**THREE COLUMNS — equal width, 16px gaps**

Each column is a card: background #FAFAF7, border-radius 18px, subtle shadow only (`0 2px 16px rgba(0,0,0,0.06)`), no border, no top stripe decoration. Padding: 32px 28px 28px.

**Internal layout uses flexbox (column direction) so the divider line always sits at the same height across all three cards regardless of headline length:**

- Label at top: e.g. "PLATFORMS" — Figtree SemiBold, 10px, uppercase, letter-spacing 0.18em, colour #2C2825 at 38% opacity. Margin below: 18px.
- Headline area (flex: 1 — this stretches to fill available space, pushing the descriptor to the bottom): e.g. "Profit from quality volume" — Figtree SemiBold, 20px, line height 1.3, colour #2C2825. No margin below — flex handles the spacing.
- Descriptor with top divider (always pinned to bottom): thin rule 1px #2C2825 at 8% opacity, then 14px padding-top, then the descriptor text — Figtree Regular, 13px, line height 1.65, colour #2C2825 at 62% opacity.

**Strikethrough treatment inside each headline:**

The struck word (quality / identity / experience):
- `text-decoration: line-through`, decoration colour #FF385C, thickness 2px
- Colour: #2C2825 at 28% opacity
- Font weight: 400, font style: italic

The replacement word (volume / occupancy / price):
- Font weight: 800
- Colour: #2C2825 at full opacity

Column content:

| Label | Headline | Descriptor |
|---|---|---|
| PLATFORMS | Profit from ~~quality~~ **volume** | More listings, more take-rate. |
| HOSTS | Optimised for ~~identity~~ **occupancy** | Calendars beat character. |
| GUESTS | Filtered by ~~experience~~ **price** | Cheapest wins the search. |

Margin below columns: 32px.

---

**CLOSING CALLOUT — no box, no background, two-line split weight**

Two lines of text, stacked, no container:

Line 1: "A solution owned by one platform will always serve that platform first."
- Figtree Regular italic, 15px, line height 1.7, colour #2C2825 at 58% opacity
- Margin below: 6px

Line 2: "The intelligence needs to sit above them."
- Figtree ExtraBold, 18px, line height 1.35, letter-spacing −0.02em, colour #2C2825 at full opacity

No border, no background, no box. The weight jump between the two lines is the emphasis. Margin below entire callout block: 28px.

---

**EXPAND TRIGGER — frosted glass pill**

Matches the eyebrow pill treatment from Fold 1:
- Background: rgba(255,255,255,0.50)
- Backdrop filter: blur(14px)
- Border: 1px solid rgba(255,255,255,0.82)
- Border-radius: 100px
- Padding: 9px 20px
- Display: inline-flex, align items centre, gap 8px

Contents:
- "+" symbol: Figtree Light, 16px, colour #2C2825 at 70% opacity. Rotates to "×" when open.
- Label: "See full research" — Figtree Medium, 13px, colour #2C2825

No filled icon circle. The pill itself is the affordance.

---

## COLLAPSIBLE RESEARCH SECTION

Hidden by default. Opens smoothly downward when the pill is clicked. All content below uses the same coral background `#FFF0EC` with `#FAFAF7` cards.

Top padding inside expanded section: 56px.

**Europe map**
Label: "EUROPEAN CITIES PUSHING BACK" — same muted label treatment.
Map container: #FAFAF7 card, border-radius 20px, padding 36px 40px. SVG map of Europe, simplified outline at ~12% opacity charcoal stroke on transparent fill. 8 coral dots (#FF385C) positioned at approximate city locations, each with a soft glow ring (same coral, 20% opacity, 2× radius). Hover on a dot shows a small tooltip with the city name and stat.

**Pull quote** (below map, margin top 48px)
Left border: 3px solid #FF385C, padding-left 22px. No background.
- Quote: Figtree Regular italic, 21px, line height 1.5, colour #2C2825 at 85% opacity, max width ~44ch
- Attribution: Figtree Regular, 13px, colour #2C2825 at 38% opacity, margin top 12px

**City cards grid** (2-column, 12px gaps)
Same card treatment as the columns: #FAFAF7, border-radius 14px, shadow only, padding 20px 22px.
- City name: Figtree Bold, 14px, with a small 7px coral dot before the text
- Stat: Figtree Regular, 13px, line height 1.6, colour #2C2825 at 62% opacity

8 cities: Barcelona, Amsterdam, Berlin, Paris, Spain, Athens, Florence, Budapest — content as specified.

**Two research quote cards** (side by side, 16px gap)
Same card treatment, padding 26px.
- Card label: 10px uppercase muted label
- Quote text: Figtree Regular italic, 14px, line height 1.75, colour #2C2825 at 85%
- Attribution: 12px, colour #2C2825 at 38%, separated by thin top rule

Left card: ACADEMIC RESEARCH / Christiaens 2025 quote
Right card: HOST COMMUNITY / r/airbnb_hosts quote

**Closing line** (full width, below quote cards)
Figtree Regular, 16px, line height 1.8, colour #2C2825 at 62% opacity, max width ~58ch. "Hosts have become performers…" etc.

**Collapse trigger** (bottom of expanded section)
Plain text button, no background: small upward chevron icon + "Collapse research" — Figtree Medium, 13px, colour #2C2825 at 38% opacity. Clicking collapses and scrolls back to the expand pill.

Bottom padding: 100px.

---

**COLOURS**
- Section background: #FFF0EC
- Card surface: #FAFAF7
- Text primary: #2C2825
- Body text: #2C2825 at 62–68% opacity
- Muted text: #2C2825 at 38% opacity
- Eyebrow + coral accents: #FF385C
- Struck word: #2C2825 at 28% opacity, decoration colour #FF385C
- Replacement word: #2C2825 at 100%, weight 800
- Callout line 1: #2C2825 at 58% opacity, italic
- Callout line 2: #2C2825 at 100%, ExtraBold
- Frosted pill: rgba(255,255,255,0.50) + blur
- City dots: #FF385C

**FONTS**
Figtree throughout. PP Neue Montreal if available — use instead of Figtree. No Gelica in this fold.

**FEEL**
Warm, editorial, credible. The coral background signals that we're in the problem section without going dark. The three cards are clean and structured. The closing callout lands through typography alone — no visual container needed, just weight doing the work.