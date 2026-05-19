import { useState, useRef, useEffect } from 'react';

const CORAL    = '#FF385C';
const CHARCOAL = '#2C2825';
const T_MUTED  = 'rgba(44,40,37,0.38)';

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function useAnimOnce(delay = 0) {
  const ref   = useRef<HTMLDivElement>(null);
  const [prog, setProg] = useState(0);
  const fired = useRef(false);
  const raf   = useRef(0);
  const start = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          setTimeout(() => {
            start.current = 0;
            const tick = (ts: number) => {
              if (!start.current) start.current = ts;
              const t = Math.min((ts - start.current) / 1200, 1);
              setProg(easeOut(t));
              if (t < 1) raf.current = requestAnimationFrame(tick);
            };
            raf.current = requestAnimationFrame(tick);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => { obs.disconnect(); cancelAnimationFrame(raf.current); };
  }, [delay]);

  return { ref, prog };
}

/* ── fill bar cell ────────────────────────────────── */
function FillBarCell({
  delay, fillPct, fillOpacity = 1, projected = false,
  countTo, prefix = '', suffix = '', label, sublabel,
}: {
  delay: number; fillPct: number; fillOpacity?: number; projected?: boolean;
  countTo: number; prefix?: string; suffix?: string; label: string; sublabel?: string;
}) {
  const { ref, prog } = useAnimOnce(delay);

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* bar */}
      <div style={{ position: 'relative' }}>
        {projected && (
          <div style={{
            position: 'absolute', right: 0, bottom: '100%', marginBottom: '5px',
            fontSize: '10px', color: `rgba(255,56,92,0.70)`, fontWeight: 400,
          }}>
            projected
          </div>
        )}
        <div style={{ width: '100%', height: '6px', borderRadius: '100px', background: 'rgba(44,40,37,0.08)', overflow: 'hidden' }}>
          <div style={{ height: '100%', borderRadius: '100px', background: CORAL, opacity: fillOpacity, width: `${fillPct * prog}%` }} />
        </div>
      </div>
      {/* number */}
      <div style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-0.03em', color: CHARCOAL, lineHeight: 1 }}>
        {prefix}{Math.round(countTo * prog)}{suffix}
      </div>
      <div style={{ fontSize: '14px', color: 'rgba(44,40,37,0.55)', lineHeight: 1.4 }}>{label}</div>
      {sublabel && <div style={{ fontSize: '11px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: T_MUTED }}>{sublabel}</div>}
    </div>
  );
}

/* ── arc ring cell ────────────────────────────────── */
function ArcCell({ delay }: { delay: number }) {
  const { ref, prog } = useAnimOnce(delay);
  const r    = 27;
  const circ = 2 * Math.PI * r;

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <svg width="64" height="64" viewBox="0 0 64 64" style={{ display: 'block' }}>
        <circle cx="32" cy="32" r={r} fill="none" stroke="rgba(44,40,37,0.08)" strokeWidth="5" />
        <circle
          cx="32" cy="32" r={r} fill="none"
          stroke={CORAL} strokeWidth="5" strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={circ - circ * 0.95 * prog}
          transform="rotate(-90 32 32)"
        />
      </svg>
      <div style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-0.03em', color: CHARCOAL, lineHeight: 1 }}>
        {Math.round(95 * prog)}%
      </div>
      <div style={{ fontSize: '14px', color: 'rgba(44,40,37,0.55)', lineHeight: 1.4 }}>
        of travellers want personalised recommendations
      </div>
    </div>
  );
}

/* ── range indicator cell ─────────────────────────── */
function RangeCell({ delay }: { delay: number }) {
  const { ref, prog } = useAnimOnce(delay);
  const segStart = 25;
  const segEnd   = 60;
  const curEnd   = segStart + (segEnd - segStart) * prog;

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* range graphic */}
      <div style={{ position: 'relative', height: '40px' }}>
        <div style={{ position: 'absolute', top: '12px', left: 0, right: 0, height: '1px', background: 'rgba(44,40,37,0.12)' }} />
        <div style={{ position: 'absolute', top: '10.5px', left: `${segStart}%`, width: `${Math.max(0, curEnd - segStart)}%`, height: '3px', background: CORAL }} />
        <div style={{ position: 'absolute', left: `${segStart}%`, top: '6px', width: '8px', height: '8px', borderRadius: '50%', background: CORAL, transform: 'translateX(-50%)' }} />
        <div style={{ position: 'absolute', left: `${segEnd}%`, top: '6px', width: '8px', height: '8px', borderRadius: '50%', background: CORAL, transform: 'translateX(-50%)', opacity: prog }} />
        <div style={{ position: 'absolute', left: `${segStart}%`, top: '24px', transform: 'translateX(-50%)', fontSize: '10px', color: T_MUTED, whiteSpace: 'nowrap' }}>$2tn</div>
        <div style={{ position: 'absolute', left: `${segEnd}%`, top: '24px', transform: 'translateX(-50%)', fontSize: '10px', color: T_MUTED, whiteSpace: 'nowrap', opacity: prog }}>$4tn</div>
      </div>
      {/* number fades in */}
      <div style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-0.03em', color: CHARCOAL, lineHeight: 1, opacity: prog }}>
        $2–4tn
      </div>
      <div style={{ fontSize: '14px', color: 'rgba(44,40,37,0.55)', lineHeight: 1.4 }}>
        AI value potential in travel & hospitality by 2030
      </div>
      <div style={{ fontSize: '11px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: T_MUTED }}>
        McKinsey
      </div>
    </div>
  );
}

/* ── main ─────────────────────────────────────────── */
export default function FoldFive() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: '#F4F3F1', paddingTop: '100px', paddingBottom: '120px', fontFamily: 'Figtree, sans-serif' }}
    >
      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 clamp(1.5rem, 6vw, 4rem)' }}>

        {/* Eyebrow */}
        <p style={{ fontSize: '11px', fontWeight: 500, color: CORAL, textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '20px' }}>
          The opportunity
        </p>

        {/* Headline */}
        <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.75rem)', fontWeight: 700, lineHeight: 1.1, color: CHARCOAL, letterSpacing: '-0.025em', maxWidth: '26ch', marginBottom: '72px' }}>
          A market growing at 11% a year. Still waiting for the layer that makes it human.
        </h2>

        {/* Four graphic callouts — 2×2 grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px 40px', marginBottom: '80px' }}>
          <FillBarCell
            delay={0} fillPct={44} countTo={36} prefix="$" suffix="bn"
            label="European short-term rental market" sublabel="2025"
          />
          <FillBarCell
            delay={150} fillPct={100} fillOpacity={0.7} projected countTo={81} prefix="$" suffix="bn"
            label="Projected by 2030"
          />
          <ArcCell delay={300} />
          <RangeCell delay={450} />
        </div>

        {/* Closing line */}
        <div style={{ borderTop: '1px solid rgba(44,40,37,0.12)', paddingTop: '48px' }}>
          <div style={{ fontSize: '30px', fontWeight: 700, lineHeight: 1.2, color: CHARCOAL, letterSpacing: '-0.02em', maxWidth: '24ch', marginBottom: '24px' }}>
            The gap is real. The moment is now. This is where we start.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '24px', height: '1px', backgroundColor: CORAL }} />
            <div style={{ fontSize: '12px', fontWeight: 400, color: 'rgba(255,56,92,0.70)', letterSpacing: '0.04em' }}>
              φιλοξενία
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
