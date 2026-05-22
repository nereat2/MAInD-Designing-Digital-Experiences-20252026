import { useEffect, useRef, useState } from 'react';

/* ── TOKENS ─────────────────────────────────── */
const XENY        = '#8B9ED4';
const XENY_LIGHT  = '#B8B0E8';
const CHARCOAL    = '#2C2825';
const BG_HOST     = '#F7F6FB';
const BG_GUEST    = '#F7F6FB';
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
        background: 'rgba(44,40,37,0.08)'
      }} />
      <span style={{
        fontSize: 11, fontWeight: 400, letterSpacing: '0.04em', flexShrink: 0,
        color: 'rgba(44,40,37,0.38)'
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
      color: CHARCOAL
    }}>{children}</h3>
  );
}

/* ── HOST CAROUSEL PHONE ─────────────────────── */
function HostCarousel() {
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
        <ScreenPh variant="host" label="Video walkthrough — guidebook creation process" />
      </Phone>
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
      background: 'rgba(139,158,212,0.10)',
      border: '1px solid rgba(139,158,212,0.20)',
      borderRadius: 16, padding: '24px 28px', maxWidth: 640, marginBottom: 28
    }}>
      <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.6, color: CHARCOAL }}>{children}</p>
    </div>
  );
}

/* ── SMALL PHONE (guest moments) ──────────────── */
function SmallPhone({ label, width = 185, height = 375 }: { label: string; width?: number; height?: number }) {
  return (
    <Phone
      width={width} height={height} radius={34}
      notchW={40} notchH={6} notchTop={10}
    >
      <StatusBar />
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
      <StatusBar />
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
        textTransform: 'uppercase', marginBottom: 8, color: XENY
      }}>{stepLabel}</p>
      <p style={{
        fontSize: 13, lineHeight: 1.65, maxWidth: '42ch', marginBottom: 20,
        color: 'rgba(44,40,37,0.65)'
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

          {/* Sub-header */}
          <div ref={gSubHead.ref} style={reveal(gSubHead)}>
            <SubHeader tag="Guest" meta="Live guidebook experience" />
          </div>

          {/* Framing */}
          <div ref={gFraming.ref} style={reveal(gFraming, 80)}>
            <Framing>The host isn't there.<br />But it feels like they are.</Framing>
          </div>

          {/* Moment 1: Getting started */}
          <Moment
            stepLabel="Getting started"
            desc="Accessed from the booking confirmation or a notification. The guest sets their preferences — what the host suggests, what they actually want to see, and what Xeny recommends based on their profile."
            delay={180}
          >
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '0px',
              width: '100%'
            }}>
              <div style={{ alignSelf: 'flex-start' }}>
                <SmallPhone label="Entry" width={280} height={568} />
              </div>
              <div style={{ alignSelf: 'flex-end', marginTop: '-100px' }}>
                <SmallPhone label="Customisation" width={280} height={568} />
              </div>
              <div style={{ alignSelf: 'flex-start', marginTop: '-100px' }}>
                <SmallPhone label="Preference setting" width={280} height={568} />
              </div>
            </div>
          </Moment>

          {/* Moment 2: On the ground — Hero */}
          <Moment
            stepLabel="On the ground"
            desc="A live map that knows where you are. As you approach a stop, the host's tip surfaces — read it or listen to it in the host's own voice."
            delay={180}
          >
            <HeroPhone />
          </Moment>

          {/* Guest callout */}
          <div ref={gCta.ref} style={reveal(gCta, 380)}>
            <CalloutGuest>Every guest leaves the place a little better known than before.</CalloutGuest>
          </div>

          {/* Data callout */}
          <div ref={gData.ref} style={{ ...reveal(gData, 480), paddingLeft: 22, borderLeft: `3px solid ${XENY}`, maxWidth: 560 }}>
            <p style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em', color: CHARCOAL, lineHeight: 1, marginBottom: 10 }}>48%</p>
            <p style={{ fontSize: 15, lineHeight: 1.72, color: 'rgba(44,40,37,0.65)', marginBottom: 8 }}>
              of guests visited places they would never have found without a host recommendation. Xeny makes that happen for every guest, every stay — and lets them pass it on.
            </p>
            <p style={{ fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(44,40,37,0.38)' }}>
              Airbnb UK, 2024
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}