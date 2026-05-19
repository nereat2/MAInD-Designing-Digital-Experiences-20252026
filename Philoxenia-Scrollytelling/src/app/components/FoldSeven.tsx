import { useRef, useState } from 'react';

const CORAL    = '#FF385C';
const CHARCOAL = '#2C2825';
const FRAME_BG = '#1A1917';
const T_BODY   = 'rgba(44,40,37,0.65)';
const T_MUTED  = 'rgba(44,40,37,0.38)';

/* ── Status bar ───────────────────────────────────── */
function StatusBar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px 4px', flexShrink: 0 }}>
      <span style={{ fontSize: '10px', fontWeight: 600, color: CHARCOAL }}>9:41</span>
      <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '1.5px', alignItems: 'flex-end' }}>
          {[5, 7, 9, 11].map((h, i) => (
            <div key={i} style={{ width: '2.5px', height: `${h}px`, backgroundColor: CHARCOAL, borderRadius: '1px', opacity: i === 3 ? 0.3 : 1 }} />
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
          <div style={{ width: '14px', height: '7px', border: `1px solid ${CHARCOAL}`, borderRadius: '2px', padding: '1px' }}>
            <div style={{ width: '65%', height: '100%', backgroundColor: CHARCOAL, borderRadius: '1px' }} />
          </div>
          <div style={{ width: '2px', height: '4px', backgroundColor: CHARCOAL, borderRadius: '0 1px 1px 0' }} />
        </div>
      </div>
    </div>
  );
}

/* ── Phone frame ──────────────────────────────────── */
function PhoneFrame({ width, height, children }: { width: number; height: number; children: React.ReactNode }) {
  return (
    <div style={{
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: FRAME_BG,
      borderRadius: '38px',
      boxShadow: '0 24px 64px rgba(0,0,0,0.16)',
      padding: '9px',
      position: 'relative',
      flexShrink: 0,
    }}>
      {/* Pill notch */}
      <div style={{
        position: 'absolute',
        top: '9px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '56px',
        height: '7px',
        backgroundColor: FRAME_BG,
        borderRadius: '0 0 6px 6px',
        zIndex: 10,
      }} />
      {/* Screen */}
      <div style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: '30px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <StatusBar />
        {children}
      </div>
    </div>
  );
}

/* ── Video placeholder ────────────────────────────── */
function VideoPlaceholder({ label }: { label: string }) {
  return (
    <div style={{
      flex: 1,
      background: 'linear-gradient(180deg, #FFF0EC 0%, #FFEAE0 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px',
    }}>
      <div style={{
        width: '40px', height: '40px', borderRadius: '50%',
        backgroundColor: 'rgba(255,56,92,0.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: `10px solid ${CORAL}`, marginLeft: '3px' }} />
      </div>
      <p style={{ fontSize: '11px', color: T_MUTED, textAlign: 'center', padding: '0 16px' }}>{label}</p>
    </div>
  );
}

/* ── Carousel phone ───────────────────────────────── */
function CarouselPhone({ width, height }: { width: number; height: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [thumbPos, setThumbPos] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setThumbPos(max > 0 ? el.scrollLeft / max : 0);
  };

  return (
    <PhoneFrame width={width} height={height}>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: 'flex',
          overflowX: 'scroll',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          flex: 1,
          minHeight: 0,
        }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} style={{
            flexShrink: 0,
            width: '100%',
            height: '100%',
            scrollSnapAlign: 'start',
            background: i % 2 === 0
              ? 'linear-gradient(180deg, #FFF0EC 0%, #FFEAE0 100%)'
              : 'linear-gradient(180deg, #F5F3EF 0%, #EDEAE4 100%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', gap: '10px',
          }}>
            <p style={{ fontSize: '10px', color: CORAL, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {String(i + 1).padStart(2, '0')} / 10
            </p>
            <p style={{ fontSize: '11px', color: T_MUTED, textAlign: 'center' }}>
              [SCREENS: Agent analysis flow]
            </p>
          </div>
        ))}
      </div>
      {/* Scroll indicator */}
      <div style={{ padding: '10px 16px 14px', flexShrink: 0 }}>
        <div style={{ height: '4px', backgroundColor: 'rgba(44,40,37,0.10)', borderRadius: '2px', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            left: `${thumbPos * 90}%`,
            width: '10%',
            height: '100%',
            backgroundColor: CORAL,
            borderRadius: '2px',
            transition: 'left 0.1s ease',
          }} />
        </div>
      </div>
    </PhoneFrame>
  );
}

/* ── Suggestion phone ─────────────────────────────── */
function SuggestionPhone({ width, height, label }: { width: number; height: number; label: string }) {
  return (
    <PhoneFrame width={width} height={height}>
      <div style={{
        flex: 1,
        background: 'linear-gradient(180deg, #F5F3EF 0%, #EDEAE4 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
      }}>
        <p style={{ fontSize: '11px', color: T_MUTED, textAlign: 'center' }}>{label}</p>
      </div>
    </PhoneFrame>
  );
}

/* ── Sub-section header row ───────────────────────── */
function SectionHeader({ pill, meta }: { pill: string; meta: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
      <div style={{
        backgroundColor: CORAL, color: 'white', borderRadius: '100px', padding: '5px 14px',
        fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', flexShrink: 0,
      }}>
        {pill}
      </div>
      <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(44,40,37,0.08)' }} />
      <p style={{ fontSize: '11px', fontWeight: 400, color: T_MUTED, letterSpacing: '0.04em', flexShrink: 0 }}>{meta}</p>
    </div>
  );
}

/* ── Step label + descriptor ──────────────────────── */
function StepHead({ label, desc, maxW = '34ch' }: { label: string; desc: string; maxW?: string }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <p style={{ fontSize: '11px', fontWeight: 600, color: CORAL, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '8px' }}>{label}</p>
      <p style={{ fontSize: '13px', fontWeight: 400, lineHeight: 1.65, color: T_BODY, maxWidth: maxW }}>{desc}</p>
    </div>
  );
}

/* ── Callout block ────────────────────────────────── */
function Callout({ main, sub }: { main: string; sub: string }) {
  return (
    <div style={{ backgroundColor: '#FFF3EE', borderRadius: '16px', padding: '24px 28px', maxWidth: '640px', marginTop: '40px' }}>
      <p style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.6, color: CHARCOAL, marginBottom: '10px' }}>{main}</p>
      <p style={{ fontSize: '12px', fontWeight: 400, lineHeight: 1.65, color: T_BODY }}>{sub}</p>
    </div>
  );
}

/* ── main ─────────────────────────────────────────── */
export default function FoldSeven() {
  return (
    <section
      className="relative w-full"
      style={{ backgroundColor: '#FFFAF8', paddingTop: '100px', paddingBottom: '120px', fontFamily: 'Figtree, sans-serif' }}
    >
      {/* Ambient glow — top */}
      <div className="absolute top-0 right-0 pointer-events-none" style={{
        width: '700px', height: '600px',
        background: 'radial-gradient(circle, rgba(255,180,130,0.38) 0%, transparent 70%)',
      }} />
      {/* Ambient glow — bottom (covers guest section) */}
      <div className="absolute bottom-0 right-0 pointer-events-none" style={{
        width: '700px', height: '600px',
        background: 'radial-gradient(circle, rgba(255,180,130,0.32) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 clamp(1.5rem, 6vw, 4rem)', position: 'relative' }}>

        {/* Section eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '64px' }}>
          <div style={{ width: '20px', height: '1px', backgroundColor: 'rgba(255,56,92,0.50)' }} />
          <p style={{ fontSize: '11px', fontWeight: 500, color: CORAL, textTransform: 'uppercase', letterSpacing: '0.16em' }}>
            Philo · Optimise
          </p>
        </div>

        {/* ══ HOST ══════════════════════════════════════ */}
        <SectionHeader pill="HOST" meta="Listing creation & optimisation" />

        <h2 style={{
          fontSize: 'clamp(1.875rem, 3vw, 2.125rem)', fontWeight: 700, lineHeight: 1.15,
          letterSpacing: '-0.022em', color: CHARCOAL, maxWidth: '36ch', marginBottom: '48px',
        }}>
          Your listing, finally as distinctive as the place it's in.
        </h2>

        {/* Two standard phones */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
          <div>
            <StepHead
              label="01 — Capture your identity"
              desc="Philo interviews you about your space, your neighbourhood, your hosting style. Voice or text — no forms."
            />
            <PhoneFrame width={242} height={490}>
              <VideoPlaceholder label="[VIDEO: Tell me about your place]" />
            </PhoneFrame>
          </div>

          <div>
            <StepHead
              label="02 — Build your listing"
              desc="Philo generates a listing shaped by your identity, local context and what guests in your area are actually looking for."
            />
            <PhoneFrame width={242} height={490}>
              <VideoPlaceholder label="[VIDEO: Make your place stand out]" />
            </PhoneFrame>
          </div>
        </div>

        <Callout
          main="The result? A listing that feels relevant, distinctive, and worth booking — not just another option in the grid."
          sub="Enriched with local events, partner businesses and territory data — so your listing reflects the full value of where you are."
        />

        {/* ══ GUEST ═════════════════════════════════════ */}
        <div style={{ marginTop: '80px' }} />
        <SectionHeader pill="GUEST" meta="Search & discovery" />

        <h2 style={{
          fontSize: 'clamp(1.875rem, 3vw, 2.125rem)', fontWeight: 700, lineHeight: 1.15,
          letterSpacing: '-0.022em', color: CHARCOAL, maxWidth: '36ch', marginBottom: '48px',
        }}>
          A search that actually knows what you're looking for.
        </h2>

        {/* Step 01 — carousel */}
        <StepHead
          label="01 — Understanding you"
          desc="Philo learns your travel style, past trips, preferences and needs. It remembers what you've booked, what you loved, and what matters to you."
          maxW="44ch"
        />
        <CarouselPhone width={265} height={530} />

        {/* Step 02 — three suggestion phones */}
        <div style={{ marginTop: '48px' }}>
          <StepHead
            label="02 — Your shortlist"
            desc="Not a grid of identical cards. A curated shortlist — each recommendation with a reason. Built around you, not around price."
            maxW="44ch"
          />
          <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <SuggestionPhone width={185} height={375} label="[SCREEN: Suggestion 1]" />
            <SuggestionPhone width={185} height={375} label="[SCREEN: Suggestion 2]" />
            <SuggestionPhone width={185} height={375} label="[SCREEN: Suggestion 3]" />
          </div>
        </div>

        <Callout
          main="Travelling with a dog? Always booking mountain stays? Looking for somewhere quiet? Philo already knows."
          sub="Results enriched with real-time local data — events, new businesses, and partner experiences in the area."
        />

      </div>
    </section>
  );
}
