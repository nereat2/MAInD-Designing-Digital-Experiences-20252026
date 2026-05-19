import { useEffect, useRef, useState } from 'react';

/* ── TOKENS ─────────────────────────────────── */
const XENY        = '#8B9ED4';
const XENY_LIGHT  = '#B8B0E8';
const CHARCOAL    = '#2C2825';
const BG_HOST     = '#F7F6FB';
const BG_GUEST    = '#1E1A38';
const BEZEL       = '#1A1917';

/* ── REVEAL HOOK ─────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ── PHONE FRAME ─────────────────────────────── */
function Phone({
  width, height, radius, notchW = 56, notchH = 7, notchTop = 13,
  shadow, children, style = {}
}: {
  width: number; height: number; radius: number;
  notchW?: number; notchH?: number; notchTop?: number;
  shadow?: string; children: React.ReactNode; style?: React.CSSProperties;
}) {
  return (
    <div style={{
      position: 'relative',
      width, height, flexShrink: 0,
      background: BEZEL,
      borderRadius: radius,
      boxShadow: shadow ?? '0 24px 64px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(255,255,255,0.06)',
      ...style
    }}>
      {/* Notch */}
      <div style={{
        position: 'absolute', top: notchTop, left: '50%',
        transform: 'translateX(-50%)',
        width: notchW, height: notchH,
        background: BEZEL, borderRadius: 100, zIndex: 10
      }} />
      {/* Screen */}
      <div style={{
        position: 'absolute', inset: 9,
        borderRadius: radius - 8,
        overflow: 'hidden',
        background: '#F5F3EF'
      }}>
        {children}
      </div>
    </div>
  );
}

/* ── STATUS BAR ──────────────────────────────── */
function StatusBar({ light = false }: { light?: boolean }) {
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: 28,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 14px', fontSize: 10, fontWeight: 600, zIndex: 5,
      color: light ? 'rgba(255,255,255,0.7)' : CHARCOAL
    }}>
      <span>9:41</span>
      <span style={{ fontSize: 9, opacity: 0.6 }}>●●●</span>
    </div>
  );
}

/* ── SCREEN PLACEHOLDER ──────────────────────── */
function ScreenPh({ variant, label }: { variant: 'host' | 'guest'; label: string }) {
  const isGuest = variant === 'guest';
  return (
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 10, padding: 20, textAlign: 'center',
      background: isGuest
        ? 'linear-gradient(155deg,#2E2854 0%,#261F4E 100%)'
        : 'linear-gradient(155deg,#EEECfA 0%,#E8E4F5 100%)'
    }}>
      {/* Play icon circle */}
      <div style={{
        width: 36, height: 36, borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: isGuest ? 'rgba(139,158,212,0.20)' : 'rgba(139,158,212,0.15)',
        flexShrink: 0
      }}>
        <div style={{
          width: 0, height: 0, borderStyle: 'solid',
          borderWidth: '6px 0 6px 10px',
          borderColor: `transparent transparent transparent ${isGuest ? XENY_LIGHT : XENY}`,
          marginLeft: 2
        }} />
      </div>
      <p style={{
        fontSize: 10, fontWeight: 500, lineHeight: 1.5,
        maxWidth: '16ch', letterSpacing: '0.02em',
        color: isGuest ? 'rgba(255,255,255,0.50)' : 'rgba(44,40,37,0.42)'
      }}>{label}</p>
    </div>
  );
}

/* ── SUB-HEADER ──────────────────────────────── */
function SubHeader({ tag, meta, light = false }: { tag: string; meta: string; light?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
      <span style={{
        fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
        textTransform: 'uppercase', color: '#FFFFFF',
        padding: '5px 14px', borderRadius: 100, flexShrink: 0,
        lineHeight: 1, background: XENY
      }}>{tag}</span>
      <span style={{
        flex: 1, height: 1,
        background: light ? 'rgba(255,255,255,0.10)' : 'rgba(44,40,37,0.08)'
      }} />
      <span style={{
        fontSize: 11, fontWeight: 400, letterSpacing: '0.04em', flexShrink: 0,
        color: light ? 'rgba(255,255,255,0.38)' : 'rgba(44,40,37,0.38)'
      }}>{meta}</span>
    </div>
  );
}

/* ── FRAMING LINE ─────────────────────────────── */
function Framing({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h3 style={{
      fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
      fontWeight: 700, lineHeight: 1.15,
      letterSpacing: '-0.022em', maxWidth: '36ch', marginBottom: 48,
      color: light ? 'rgba(255,255,255,0.92)' : CHARCOAL
    }}>{children}</h3>
  );
}

/* ── HOST CAROUSEL PHONE ─────────────────────── */
const SLIDES = [
  { num: '01 / 05', label: 'Lens selection — choose what kind of guide to make' },
  { num: '02 / 05', label: 'Memory-based conversation — your stories, extracted' },
  { num: '03 / 05', label: 'Dynamic personalisation — tuned to each guest' },
  { num: '04 / 05', label: 'Draft generation — a complete itinerary, ready to review' },
  { num: '05 / 05', label: "Publish — live in the guest's confirmation" },
];

function HostCarousel() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  function onScroll() {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    setActive(idx);
  }

  function goTo(i: number) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 40 }}>
      <p style={{
        fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
        textTransform: 'uppercase', marginBottom: 8, color: XENY
      }}>01–05 — Build the guidebook</p>
      <p style={{
        fontSize: 13, lineHeight: 1.65, maxWidth: '42ch', marginBottom: 20,
        color: 'rgba(44,40,37,0.65)'
      }}>
        A five-step conversation that pulls from your listing, your territory and your own stories — and turns them into something every guest actually wants to follow.
      </p>

      <Phone width={242} height={490} radius={38}>
        <StatusBar />
        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          style={{
            position: 'absolute', inset: 0, top: 28,
            display: 'flex', overflowX: 'scroll',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none'
          }}
        >
          {SLIDES.map((s, i) => (
            <div key={i} style={{
              minWidth: '100%', height: '100%', scrollSnapAlign: 'start', flexShrink: 0,
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', gap: 10, padding: 16, textAlign: 'center',
              background: i % 2 === 0
                ? 'linear-gradient(155deg,#EEECfA 0%,#E8E4F5 100%)'
                : 'linear-gradient(155deg,#F0EDF8 0%,#EAE4F2 100%)'
            }}>
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: XENY }}>{s.num}</span>
              <p style={{ fontSize: 11, color: 'rgba(44,40,37,0.42)', maxWidth: '18ch', lineHeight: 1.5 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </Phone>

      {/* Dots */}
      <div style={{ display: 'flex', gap: 6, marginTop: 16 }}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              height: 6, borderRadius: 100, border: 'none', cursor: 'pointer',
              transition: 'width 0.3s, background 0.3s',
              width: i === active ? 18 : 6,
              background: i === active ? XENY : 'rgba(139,158,212,0.25)'
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── CALLOUT HOST ─────────────────────────────── */
function CalloutHost({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: 'rgba(139,158,212,0.10)',
      border: '1px solid rgba(139,158,212,0.20)',
      borderRadius: 16, padding: '24px 28px', maxWidth: 640
    }}>
      <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.6, color: CHARCOAL }}>{children}</p>
    </div>
  );
}

/* ── CALLOUT GUEST ─────────────────────────────── */
function CalloutGuest({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.09)',
      borderRadius: 16, padding: '24px 28px', maxWidth: 640, marginBottom: 28
    }}>
      <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.6, color: 'rgba(255,255,255,0.90)' }}>{children}</p>
    </div>
  );
}

/* ── SMALL PHONE (guest moments) ──────────────── */
function SmallPhone({ label }: { label: string }) {
  return (
    <Phone
      width={185} height={375} radius={34}
      notchW={40} notchH={6} notchTop={10}
    >
      <StatusBar light />
      <ScreenPh variant="guest" label={label} />
    </Phone>
  );
}

/* ── HERO PHONE (on the ground) ──────────────── */
function HeroPhone() {
  return (
    <Phone
      width={290} height={580} radius={40}
      notchW={64} notchH={8} notchTop={14}
      shadow="0 32px 80px rgba(0,0,0,0.50), 0 0 60px rgba(139,158,212,0.25), inset 0 0 0 1px rgba(255,255,255,0.08)"
      style={{ filter: 'drop-shadow(0 0 40px rgba(155,143,216,0.25))' }}
    >
      {/* Aurora shimmer at top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '50%',
        background: 'linear-gradient(to bottom, rgba(184,176,232,0.55) 0%, rgba(212,168,200,0.30) 50%, transparent 100%)',
        zIndex: 1
      }} />
      {/* Dark bg */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(175deg,#2C2650 0%,#211C44 100%)'
      }} />
      {/* Play icon */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: '50%',
          background: 'rgba(139,158,212,0.18)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{
            width: 0, height: 0, borderStyle: 'solid',
            borderWidth: '8px 0 8px 14px',
            borderColor: `transparent transparent transparent ${XENY_LIGHT}`,
            marginLeft: 3
          }} />
        </div>
        <p style={{
          fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.38)',
          maxWidth: '20ch', lineHeight: 1.55, textAlign: 'center', letterSpacing: '0.02em'
        }}>Live wander experience — map, location trigger, host tip activating</p>
      </div>
      <StatusBar light />
    </Phone>
  );
}

/* ── MOMENT ───────────────────────────────────── */
function Moment({
  stepLabel, desc, delay = 0, children
}: {
  stepLabel: string; desc: string; delay?: number; children: React.ReactNode;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{
        marginBottom: 64,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`
      }}
    >
      <p style={{
        fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
        textTransform: 'uppercase', marginBottom: 8, color: 'rgba(255,255,255,0.55)'
      }}>{stepLabel}</p>
      <p style={{
        fontSize: 13, lineHeight: 1.65, maxWidth: '42ch', marginBottom: 20,
        color: 'rgba(255,255,255,0.65)'
      }}>{desc}</p>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>{children}</div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   FOLD EIGHT
══════════════════════════════════════════════ */
export default function FoldEight() {
  /* Reveal refs for host section */
  const eyebrow   = useReveal();
  const subHead   = useReveal();
  const framing   = useReveal();
  const carousel  = useReveal();
  const hostCta   = useReveal();

  /* Guest section */
  const gSubHead  = useReveal();
  const gFraming  = useReveal();
  const gCta      = useReveal();
  const gData     = useReveal();

  function reveal(r: ReturnType<typeof useReveal>, delay = 0): React.CSSProperties {
    return {
      opacity: r.visible ? 1 : 0,
      transform: r.visible ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`
    };
  }

  return (
    <section style={{ fontFamily: 'Figtree, sans-serif' }}>

      {/* ══ HOST SECTION ══ */}
      <div style={{ position: 'relative', background: BG_HOST, padding: '100px 0 80px', overflow: 'hidden' }}>

        {/* Ambient glows */}
        <div aria-hidden style={{
          position: 'absolute', top: -100, left: -100, width: 640, height: 640, pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(circle,rgba(184,176,232,0.32) 0%,transparent 65%)'
        }} />
        <div aria-hidden style={{
          position: 'absolute', bottom: -80, right: -60, width: 400, height: 400, pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(circle,rgba(212,168,200,0.20) 0%,transparent 65%)'
        }} />

        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 clamp(1.5rem,6vw,4rem)', position: 'relative', zIndex: 1 }}>

          {/* Eyebrow */}
          <div ref={eyebrow.ref} style={{ ...reveal(eyebrow), marginBottom: 64 }}>
            <p style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: 11, fontWeight: 500, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: XENY
            }}>
              <span style={{ width: 20, height: 1, background: XENY, opacity: 0.5, display: 'inline-block' }} />
              Xeny · Wander
            </p>
          </div>

          {/* Sub-header */}
          <div ref={subHead.ref} style={reveal(subHead, 80)}>
            <SubHeader tag="Host" meta="Guidebook creation" />
          </div>

          {/* Framing */}
          <div ref={framing.ref} style={reveal(framing, 180)}>
            <Framing>Your knowledge of this place, made shareable.</Framing>
          </div>

          {/* Carousel */}
          <div ref={carousel.ref} style={reveal(carousel, 280)}>
            <HostCarousel />
          </div>

          {/* Callout */}
          <div ref={hostCta.ref} style={reveal(hostCta, 380)}>
            <CalloutHost>The result sounds like you. Not like TripAdvisor.</CalloutHost>
          </div>
        </div>
      </div>

      {/* ══ GUEST SECTION ══ */}
      <div style={{ position: 'relative', background: BG_GUEST, padding: '80px 0 100px', overflow: 'hidden' }}>

        {/* Aurora */}
        <div aria-hidden style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '72%', pointerEvents: 'none', zIndex: 0,
          background: 'linear-gradient(to bottom,rgba(184,176,232,0.72) 0%,rgba(212,168,200,0.50) 25%,rgba(240,184,160,0.28) 52%,transparent 100%)'
        }} />

        {/* Grain */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, opacity: 0.12, pointerEvents: 'none', zIndex: 0, mixBlendMode: 'overlay',
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '180px 180px'
        }} />

        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 clamp(1.5rem,6vw,4rem)', position: 'relative', zIndex: 1 }}>

          {/* Sub-header */}
          <div ref={gSubHead.ref} style={reveal(gSubHead)}>
            <SubHeader tag="Guest" meta="Live guidebook experience" light />
          </div>

          {/* Framing */}
          <div ref={gFraming.ref} style={reveal(gFraming, 80)}>
            <Framing light>The host isn't there.<br />But it feels like they are.</Framing>
          </div>

          {/* Moment 1: Getting started */}
          <Moment
            stepLabel="Getting started"
            desc="Accessed from the booking confirmation or a notification. The guest sets their preferences — what the host suggests, what they actually want to see, and what Xeny recommends based on their profile."
            delay={180}
          >
            <SmallPhone label="Entry" />
            <SmallPhone label="Customisation" />
            <SmallPhone label="Preference setting" />
          </Moment>

          {/* Moment 2: On the ground — Hero */}
          <Moment
            stepLabel="On the ground"
            desc="A live map that knows where you are. As you approach a stop, the host's tip surfaces — read it or listen to it in the host's own voice."
            delay={180}
          >
            <HeroPhone />
          </Moment>

          {/* Moment 3: Your turn */}
          <Moment
            stepLabel="Your turn"
            desc="Rate the itinerary and add your own notes for next time."
            delay={280}
          >
            <SmallPhone label="Rating" />
            <SmallPhone label="Notes" />
          </Moment>

          {/* Guest callout */}
          <div ref={gCta.ref} style={reveal(gCta, 380)}>
            <CalloutGuest>Every guest leaves the place a little better known than before.</CalloutGuest>
          </div>

          {/* Data callout */}
          <div ref={gData.ref} style={{ ...reveal(gData, 480), paddingLeft: 22, borderLeft: '3px solid rgba(255,255,255,0.30)', maxWidth: 560 }}>
            <p style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em', color: 'rgba(255,255,255,0.92)', lineHeight: 1, marginBottom: 10 }}>48%</p>
            <p style={{ fontSize: 15, lineHeight: 1.72, color: 'rgba(255,255,255,0.62)', marginBottom: 8 }}>
              of guests visited places they would never have found without a host recommendation. Xeny makes that happen for every guest, every stay — and lets them pass it on.
            </p>
            <p style={{ fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)' }}>
              Airbnb UK, 2024
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
