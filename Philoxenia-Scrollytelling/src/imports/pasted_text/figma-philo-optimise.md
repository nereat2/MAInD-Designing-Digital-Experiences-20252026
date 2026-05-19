---

**FIGMA MAKE PROMPT — FOLD 7: PHILO · OPTIMISE (FULL BUILD)**

---

Build Fold 7 as one complete section with two clearly labelled sub-sections — Host above, Guest below. All mockups use the same phone frame style throughout.

---

**BACKGROUND**
`#FFFAF8` — warm white, same as established in the solution section. A large soft ambient glow in the top-right corner: radial gradient, peach `rgba(255,180,130,0.38)` at centre fading to transparent over ~600px radius. Purely atmospheric, no hard edge.

Top padding: 100px. Bottom padding: 120px.

---

**SECTION EYEBROW**
"Philo · Optimise" — Figtree Medium, 11px, uppercase, letter-spacing 0.16em, colour #FF385C. A short 20px horizontal line in coral at 50% opacity sits to the left of the text. Margin below: 64px.

---

**PHONE FRAME — shared component across all mockups**

All phones use the same frame style, three sizes:

Standard: 242px wide × 490px tall
Large (carousel): 265px wide × 530px tall
Small (suggestions): 185px wide × 375px tall

Frame treatment: background #1A1917, border-radius 38px, box-shadow `0 24px 64px rgba(0,0,0,0.16)`. A small pill-shaped notch at top-centre (56px × 7px, same dark colour). Screen inset 9px from the frame edge, border-radius 30px inside, overflow hidden. A minimal status bar at the top of the screen: "9:41" on the left, three small signal/battery icons on the right, 10px Figtree SemiBold, dark charcoal.

---

## SUB-SECTION 1 — HOST

**Sub-section header row** (full content width, flex row):
- Pill: "HOST" — Figtree Bold, 11px, uppercase, letter-spacing 0.14em, white text on #FF385C coral background, border-radius 100px, padding 5px 14px
- Thin rule: extends to fill remaining width, 1px, rgba(44,40,37,0.08)
- Meta label at far right: "Listing creation & optimisation" — Figtree Regular, 11px, colour rgba(44,40,37,0.38), letter-spacing 0.04em

Margin below header row: 28px.

**Framing line:** "Your listing, finally as distinctive as the place it's in."
Figtree Bold, 30–34px, line height 1.15, letter-spacing −0.022em, colour #2C2825, max width ~36ch. Margin below: 48px.

**Two standard phone mockups side by side, 40px gap, left-aligned:**

Each mockup group (label + descriptor above the phone):

Mockup 1:
- Step label: "01 — Capture your identity" — Figtree SemiBold, 11px, uppercase, letter-spacing 0.14em, colour #FF385C. Margin below: 8px.
- Descriptor: "Philo interviews you about your space, your neighbourhood, your hosting style. Voice or text — no forms." — Figtree Regular, 13px, line height 1.65, colour rgba(44,40,37,0.65), max width 34ch. Margin below: 20px.
- Standard phone frame containing a video placeholder: warm coral-tinted background (gradient #FFF0EC → #FFEAE0), centred play icon (40px circle, rgba(255,56,92,0.12) background, coral triangle inside), label below icon: "[VIDEO: Tell me about your place]" in 11px muted text.

Mockup 2:
- Step label: "02 — Build your listing"
- Descriptor: "Philo generates a listing shaped by your identity, local context and what guests in your area are actually looking for."
- Same phone frame treatment, label: "[VIDEO: Make your place stand out]"

**Callout block** below the two phones, margin top 40px, max width 640px:
Background #FFF3EE, border-radius 16px, padding 24px 28px.
- Main text: "The result? A listing that feels relevant, distinctive, and worth booking — not just another option in the grid." — Figtree SemiBold, 15px, line height 1.6, colour #2C2825. Margin below: 10px.
- Supporting detail: "Enriched with local events, partner businesses and territory data — so your listing reflects the full value of where you are." — Figtree Regular, 12px, line height 1.65, colour rgba(44,40,37,0.65).

---

**CENTRE DIVIDER** (between sub-sections, margin top and bottom 80px):

Three elements in a horizontal row:
- Left rule: flex 1, 1px, rgba(44,40,37,0.08)
- Centre label: "Philo · Optimise" — Figtree SemiBold, 10px, uppercase, letter-spacing 0.16em, colour rgba(44,40,37,0.28), padding 0 16px
- Right rule: flex 1, same

---

## SUB-SECTION 2 — GUEST

**Sub-section header row** (identical structure to Host):
- Pill: "GUEST" — same pill treatment, same #FF385C coral background, white text. Both pills are coral — both sub-sections belong to Philo, whose palette is warm coral throughout. The label text alone differentiates them.
- Thin rule extending to fill width
- Meta label: "Search & discovery"

Margin below: 28px.

**Framing line:** "A search that actually knows what you're looking for."
Same treatment as Host framing line. Margin below: 48px.

---

**Step 01 — Analysis carousel:**

Step label: "01 — Understanding you" — same step label treatment.
Descriptor: "Philo learns your travel style, past trips, preferences and needs. It remembers what you've booked, what you loved, and what matters to you." — same descriptor treatment. Margin below: 20px.

Large phone frame (265×530px) containing a horizontally swipeable carousel:
- 10 slides, each full-screen within the phone, scroll-snap per slide
- Alternating warm tints: odd slides #FFF0EC → #FFEAE0, even slides #F5F3EF → #EDEAE4
- Each slide shows its number ("01 / 10" in 10px coral spaced caps) and a placeholder label ("[SCREENS: Agent analysis flow]" in 11px muted text)
- At the bottom of the phone screen: a 72px × 4px scroll indicator bar (background rgba(44,40,37,0.10)), with a coral thumb that moves as the user swipes — thumb width is 1/10th of the track, position updates with scroll

Margin below this phone: 48px.

---

**Step 02 — Suggestion phones:**

Step label: "02 — Your shortlist" — same treatment.
Descriptor: "Not a grid of identical cards. A curated shortlist — each recommendation with a reason. Built around you, not around price." — same treatment. Margin below: 20px.

Three small phone frames (185×375px each) in a horizontal row, 20px gap:
- Each contains a static screen placeholder: neutral gradient #F5F3EF → #EDEAE4, centred label text ("[SCREEN: Suggestion 1]", "[SCREEN: Suggestion 2]", "[SCREEN: Suggestion 3]")
- Same frame styling as all other phones

Margin below: 40px.

**Callout block** (same treatment as Host callout):
- Main: "Travelling with a dog? Always booking mountain stays? Looking for somewhere quiet? Philo already knows."
- Supporting: "Results enriched with real-time local data — events, new businesses, and partner experiences in the area."

---

**COLOURS**
- Background: #FFFAF8
- Ambient glow: rgba(255,180,130,0.38) radial, top-right
- Both sub-section pills: #FF385C coral, white text
- Step labels: #FF385C
- Callout backgrounds: #FFF3EE
- Video/screen placeholders: #FFF0EC → #FFEAE0 (warm) or #F5F3EF → #EDEAE4 (neutral)
- Phone frame: #1A1917
- Carousel indicator: rgba(44,40,37,0.10) track, #FF385C thumb
- Text primary: #2C2825
- Body text: rgba(44,40,37,0.65)
- Muted/meta: rgba(44,40,37,0.38)
- Divider rules: rgba(44,40,37,0.08)

**FONTS**
Figtree throughout. PP Neue Montreal if available — use instead of Figtree.