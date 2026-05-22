---

**FIGMA MAKE PROMPT — FOLD 7: PHILO · OPTIMISE (7A + 7B)**

---

Create a two-part product demonstration section for Philo. This is the first fold where the prototype screens become the primary content. The visual register is fully in Phase 2 — warm, alive, Philo's palette throughout. 7A is efficient and evidential. 7B is the hero: the most immersive product section on the page.

**SHARED BACKGROUND FOR THIS SECTION**
Both sub-folds sit on a warm white #FFFAF8 — slightly warmer than the neutral off-white of the problem arc. Philo's coral gradient appears as an ambient background element: a large soft radial glow in the top-right corner of the section (peach #FFD4B0 at centre fading to transparent over ~600px radius, opacity 40%). This glow is decorative atmosphere, not a structural element — it should feel like warmth in the room, not a banner.

---

## FOLD 7A — PHILO / HOST

Top padding: 100px.

**Eyebrow:** "PHILO · OPTIMISE · HOST"
- Figtree Medium, 11px, uppercase, letter-spacing 0.16em
- Colour: #FF385C
- Margin below: 20px

**Headline:** "Your listing, in your voice."
- Figtree Bold or PP Neue Montreal Bold
- 44–48px, line height 1.08, letter-spacing −0.025em, colour #2C2825
- Margin below: 28px

**From → To block:**
Two lines, stacked:
- Line 1: "From 40+ structured steps that strip away personality"
- Arrow element: a thin horizontal rule (32px, 1px, #2C2825 at 20% opacity) with a small rightward chevron (→) at the end in #FF385C
- Line 2: "to a conversation that captures it."

Treatment:
- Both lines: Figtree Regular, 15px, line height 1.6
- Line 1: colour #2C2825 at 45% opacity
- "to a conversation that captures it." — colour #2C2825 at 85% opacity, Figtree Medium
- The arrow sits between the two lines, left-aligned, margin top/below 8px
- Margin below entire From→To block: 56px

**Layout from here: two columns, 48/48 split, 56px gap**

**Left column — three interaction steps:**

Each step is a numbered prose block. No bullets, no cards, no icons. Just number + title + description, separated by thin rules.

Structure per step:
- Step number: "01" / "02" / "03" — Figtree Light, 11px, colour #FF385C at 60% opacity, letter-spacing 0.1em
- Step title: e.g. "The host talks." — Figtree SemiBold, 17px, colour #2C2825, margin top 8px
- Step description: body text — Figtree Regular, 15px, line height 1.7, colour #2C2825 at 65% opacity, margin top 8px
- Thin rule below each step (except last): full column width, 1px, #2C2825 at 8% opacity, margin top 24px, margin below 24px

Step content:

**01 — The host talks.**
"Philo asks open questions and listens — what kind of place is this, what makes it different, how does the host experience the neighbourhood. Voice or text, no forms, no dropdowns."

**02 — The territory thinks.**
"Philo cross-references local POI data and market signals — what the area offers, how comparable listings are positioned, what guests in this location actually search for. The listing is shaped by context, not just content."

**03 — The listing builds live.**
"The host watches their listing take shape in real time and can adjust anything in conversation — one message to change the tone, add a detail, reframe a section. The result sounds like them, not like a template."

Below the three steps, margin top 32px:
Feature callout box — light warm background #FFF3EE, border-radius 12px, padding 20px 24px, no border:
- Small label: "VOICE + TEXT INPUT" — Figtree Medium, 10px, uppercase, letter-spacing 0.16em, colour #FF385C, margin below 8px
- Body: "The host describes their place the way they'd tell a friend about it. Philo translates that into a listing that performs without losing the person behind it." — Figtree Regular, 14px, line height 1.65, colour #2C2825 at 70% opacity

**Right column — three screens in a stacked/offset sequence:**

Three phone mockup frames, arranged vertically with a slight leftward offset on alternating frames (like a fanned stack, but vertical):

Frame treatment:
- Rounded rectangle, border-radius 32px, border 8px solid #1A1917
- Width: ~200px each — smaller than hero size, since three need to fit and be readable
- Soft shadow: 0 16px 48px rgba(0,0,0,0.12)

Screen content (use create-listing-screens-1.png assets):
- Frame 1: Philo intro screen — warm coral aurora top, Philo orb avatar, "Hi! I'm Philo your listing co-pilot", Let's go button
- Frame 2: Conversation in progress — Philo asking about the property, host reply building, voice/text input bar at bottom
- Frame 3: Listing preview building — "Bright 1BR Apartment in Central Zurich near Station" showing in standard Airbnb listing format, Philo's message "Done! How does this look?"

Frames 1 and 3 are positioned normally. Frame 2 is offset 20px to the right and slightly overlaps both neighbours — it's the active conversation state and should feel like it's "in the middle" of the action.

Bottom padding for 7A: 80px, then a thin full-width section divider: 1px, #2C2825 at 8% opacity.

---

## FOLD 7B — PHILO / GUEST *(hero)*

Top padding: 80px from the divider.

**Eyebrow:** "PHILO · OPTIMISE · GUEST"
- Same eyebrow treatment, colour #FF385C

**Headline:** "Search for a feeling, not a filter."
- Figtree Bold, 52–58px — larger than 7A's headline. This is the hero. Line height 1.06, letter-spacing −0.03em, colour #2C2825
- Max width ~18 characters
- Margin below: 28px

**From → To block:**
Same structural treatment as 7A but content changes:
- Line 1: "From location + dates + price"
- Arrow
- Line 2: "to a conversation about who you are and what this trip is actually for."

**Body copy** (full width of left column, margin top 28px):
"Philo doesn't ask where you want to go and how many beds you need. It asks what kind of trip this is. What you want to feel when you arrive. Whether you want to be in the middle of things or away from them. It learns as it talks and matches against listings — not just their amenities, but their hosts' identities, the neighbourhoods they're in, and the guidebooks they've built for their guests."

- Figtree Regular, 17px, line height 1.75, colour #2C2825 at 68% opacity, max width ~54ch
- Margin below: 56px

**HERO SCREEN LAYOUT — full content width, centred**

Five phone frames arranged in a horizontal arc — not a flat row. The centre frame (frame 3) is largest and sits highest. Frames 2 and 4 are slightly smaller and drop ~30px lower. Frames 1 and 5 are slightly smaller again and drop ~60px lower. This arc creates depth and makes the centre screen the focal point without hiding the outer screens.

Frame sizing:
- Centre frame (3): width ~240px
- Adjacent frames (2, 4): width ~210px
- Outer frames (1, 5): width ~185px

Frame treatment: same border-radius 32px, 8px solid #1A1917 border, shadow. Outer frames have slightly reduced shadow opacity (0.08 instead of 0.12) to reinforce the depth hierarchy.

Screen content (use search-screens-1.png and search-screens-2.png assets):
- Frame 1: Philo opening — "What kind of place are you looking for?" — the agent avatar, voice/text options
- Frame 2: Conversation mid-flow — user has described "rustic, peaceful, outside the city" — preference chips "Rustic" and "Outside city" appearing around the orb
- Frame 3 (hero/centre): "Perfect, I think I've got the vibe!" — Philo confirming understanding, displayed largest
- Frame 4: Search results — guidebook-tagged listing card "Flat in Florence", Philo's summary line below the listing title, standard Airbnb UI elements
- Frame 5: Listing detail — "Properties with a Guidebook offer a more authentic stay" callout, booking details visible

Below the screen arc, margin top 56px:

**Two feature callouts — side by side, equal width, 24px gap:**

Each callout: warm tinted background #FFF3EE, border-radius 14px, padding 24px 28px, no border.

Callout 1 — Guidebook signal:
- Label: "GUIDEBOOK SIGNAL" — Figtree Medium, 10px, uppercase, letter-spacing 0.16em, colour #FF385C, margin below 10px
- Body: "Listings with guidebooks surface differently — they carry a signal that the host knows this place and has invested their knowledge into the stay." — Figtree Regular, 14px, line height 1.65, colour #2C2825 at 70% opacity

Callout 2 — Curated shortlist:
- Label: "CURATED SHORTLIST" — same label treatment
- Body: "The result isn't a grid of identical cards. It's a shortlist with a reason: here is why this one fits you." — same body treatment

**Data callout — full width, below the two feature callouts, margin top 40px:**

Left border: 3px solid #FF385C, full height of the block, 16px to the left of the text.
- Stat: "64%" — Figtree Bold, 40px, colour #2C2825, letter-spacing −0.02em
- Statement: "of Airbnb guests feel more culturally connected through Airbnb than through a hotel. Philo makes that connection findable — not accidental." — Figtree Regular, 16px, line height 1.7, colour #2C2825 at 70% opacity, max width ~56ch, margin top 8px
- Source: "Airbnb UK, 2024" — Figtree Regular, 11px, uppercase, letter-spacing 0.08em, colour #2C2825 at 30% opacity, margin top 10px

Bottom padding: 120px

---

**HOW 7A AND 7B RELATE**
They share the eyebrow system and the From→To block structure. But 7B has a larger headline, wider body copy, five screens instead of three, a full-width arc layout instead of a two-column stack, and two feature callouts plus a data point. The asymmetry is the point: the jury should feel that the guest experience got more design investment. That's a product decision made visible.

---

**COLOURS**
- Section background: #FFFAF8
- Ambient glow: #FFD4B0 at 40% opacity
- Feature callout backgrounds: #FFF3EE
- Phone frame border: #1A1917
- Eyebrow + labels + accents: #FF385C
- Left border on data callout: #FF385C
- Text primary: #2C2825
- Body text: #2C2825 at 65–70% opacity
- Step numbers: #FF385C at 60% opacity
- Divider between 7A and 7B: #2C2825 at 8% opacity

**FONTS**
Figtree or PP Neue Montreal throughout. Gelica only if agent name "Philo" appears in a display context — otherwise not needed in this fold.

**FEEL**
7A: Efficient and credible — three steps, three screens, one callout. Clean evidence. 7B: Immersive and warm — the screen arc creates depth, the body copy earns its length, the data lands with weight. Together they show two sides of the same agent without repeating the same visual pattern twice.