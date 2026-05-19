import { useState, useRef, useEffect, useCallback } from 'react';

/* ── tokens ───────────────────────────────────────── */
const BG       = '#FFF0EC';
const CARD     = '#FAFAF7';
const CHARCOAL = '#2C2825';
const CORAL    = '#FF385C';
const SHADOW   = '0 2px 16px rgba(0,0,0,0.06)';
const T_BODY   = 'rgba(44,40,37,0.62)';
const T_MUTED  = 'rgba(44,40,37,0.38)';
const DIVIDER  = 'rgba(44,40,37,0.08)';
const EASE     = 'cubic-bezier(0.16, 1, 0.3, 1)';

/* ── scroll-reveal wrapper ────────────────────────── */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.7s ${EASE} ${delay}ms, transform 0.7s ${EASE} ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ── city data ────────────────────────────────────── */
const CITY_DOTS = [
  { city: 'Barcelona', info: 'All tourist apartment licences expire 2028. 10,000+ homes returned to residential market.',           cx: 210, cy: 342 },
  { city: 'Amsterdam', info: 'Airbnb listings fell 54% between 2019 and 2024.',                                                    cx: 246, cy: 168 },
  { city: 'Berlin',    info: '8,105 apartments returned to residential housing.',                                                  cx: 330, cy: 162 },
  { city: 'Paris',     info: '90-day annual cap since January 2025. Two hosts fined €80,000 and €150,000 in February 2026.',       cx: 228, cy: 218 },
  { city: 'Spain',     info: '€64 million fine for Airbnb, December 2025. 65,122 unlicensed listings.',                           cx: 168, cy: 305 },
  { city: 'Athens',    info: 'Ban on new short-term rental licences in central districts from January 2025.',                     cx: 432, cy: 375 },
  { city: 'Florence',  info: 'Moratorium on new licences in historic centre. Protecting against touristification.',               cx: 314, cy: 302 },
  { city: 'Budapest',  info: 'District referendum resulted in ban on short-term rentals from 2026.',                              cx: 405, cy: 228 },
];

const CITY_CARDS = [
  { city: 'Barcelona', stat: 'All tourist apartment licences expire 2028. 10,000+ homes returned to residential market.' },
  { city: 'Amsterdam', stat: 'Airbnb listings fell 54% between 2019 and 2024.' },
  { city: 'Berlin',    stat: '8,105 apartments returned to residential housing.' },
  { city: 'Paris',     stat: '90-day annual cap since January 2025. Two hosts fined €80,000 and €150,000 in February 2026.' },
  { city: 'Spain',     stat: '€64 million fine for Airbnb, December 2025. 65,122 unlicensed listings.' },
  { city: 'Athens',    stat: 'Ban on new short-term rental licences in central districts from January 2025.' },
  { city: 'Florence',  stat: 'Moratorium on new licences in historic centre. Protecting against "touristification."' },
  { city: 'Budapest',  stat: 'District referendum resulted in ban on short-term rentals from 2026.' },
];

/* ── component ────────────────────────────────────── */
export default function FoldThree() {
  const [expanded, setExpanded] = useState(false);
  const [tooltip, setTooltip] = useState<{
    visible: boolean; city: string; info: string; left: number; top: number;
  }>({ visible: false, city: '', info: '', left: 0, top: 0 });

  const svgRef    = useRef<SVGSVGElement>(null);
  const wrapRef   = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleDotEnter = useCallback((dot: typeof CITY_DOTS[0]) => {
    const svgEl  = svgRef.current;
    const wrapEl = wrapRef.current;
    if (!svgEl || !wrapEl) return;
    const svgRect  = svgEl.getBoundingClientRect();
    const wrapRect = wrapEl.getBoundingClientRect();
    const scaleX   = svgRect.width  / 700;
    const scaleY   = svgRect.height / 480;
    setTooltip({
      visible: true,
      city: dot.city,
      info: dot.info,
      left: dot.cx * scaleX + (svgRect.left - wrapRect.left) + 12,
      top:  dot.cy * scaleY + (svgRect.top  - wrapRect.top)  - 8,
    });
  }, []);

  const handleDotLeave = useCallback(() => {
    setTooltip(t => ({ ...t, visible: false }));
  }, []);

  const handleCollapse = () => {
    setExpanded(false);
    setTimeout(() => triggerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };

  return (
    <section style={{ backgroundColor: BG, paddingTop: '100px', paddingBottom: '100px', fontFamily: 'Figtree, sans-serif' }}>
      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 clamp(1.5rem, 6vw, 4rem)' }}>

        {/* Eyebrow */}
        <Reveal>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: CORAL, marginBottom: '20px' }}>
            The problem
          </p>
        </Reveal>

        {/* Headline */}
        <Reveal delay={100}>
          <h2 style={{ fontSize: 'clamp(2.75rem, 3.8vw, 3rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', color: CHARCOAL, maxWidth: '24ch', marginBottom: '56px' }}>
            Across the system, every actor is optimising for the wrong thing.
          </h2>
        </Reveal>

        {/* Three columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {([
            { label: 'PLATFORMS', prefix: 'Profit from',   struck: 'quality',    real: 'volume',    desc: 'More listings, more take-rate.' },
            { label: 'HOSTS',     prefix: 'Optimised for', struck: 'identity',   real: 'occupancy', desc: 'Calendars beat character.' },
            { label: 'GUESTS',    prefix: 'Filtered by',   struck: 'experience', real: 'price',     desc: 'Cheapest wins the search.' },
          ] as const).map((col, i) => (
            <Reveal key={col.label} delay={200 + i * 100}>
              <div style={{
                background: CARD,
                borderRadius: '18px',
                boxShadow: SHADOW,
                padding: '32px 28px 28px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxSizing: 'border-box',
              }}>
                <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: T_MUTED, marginBottom: '18px', flexShrink: 0 }}>
                  {col.label}
                </p>
                <h3 style={{ fontSize: '20px', fontWeight: 600, lineHeight: 1.3, color: CHARCOAL, flex: 1, margin: 0 }}>
                  {col.prefix}{' '}
                  <span style={{
                    color: 'rgba(44,40,37,0.28)',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    textDecoration: 'line-through',
                    textDecorationColor: CORAL,
                    textDecorationThickness: '2px',
                  }}>
                    {col.struck}
                  </span>
                  {' '}
                  <span style={{ color: CHARCOAL, fontWeight: 800 }}>{col.real}</span>
                </h3>
                <div style={{ borderTop: `1px solid ${DIVIDER}`, paddingTop: '14px', flexShrink: 0 }}>
                  <p style={{ fontSize: '13px', lineHeight: 1.65, color: T_BODY, margin: 0 }}>
                    {col.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing callout — no box, two-line split weight */}
        <Reveal delay={500}>
          <div style={{ marginBottom: '28px' }}>
            <p style={{ fontSize: '15px', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.7, color: 'rgba(44,40,37,0.58)', marginBottom: '6px' }}>
              A solution owned by one platform will always serve that platform first.
            </p>
            <p style={{ fontSize: '18px', fontWeight: 800, lineHeight: 1.35, letterSpacing: '-0.02em', color: CHARCOAL }}>
              The intelligence needs to sit above them.
            </p>
          </div>
        </Reveal>

        {/* Expand trigger — frosted glass pill */}
        <Reveal>
          <button
            ref={triggerRef}
            onClick={() => setExpanded(v => !v)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.50)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              border: '1px solid rgba(255,255,255,0.82)',
              borderRadius: '100px',
              padding: '9px 20px',
              fontFamily: 'Figtree, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              color: CHARCOAL,
              cursor: 'pointer',
            }}
          >
            <span style={{
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: 1,
              color: 'rgba(44,40,37,0.70)',
              display: 'block',
              transition: `transform 0.35s ${EASE}`,
              transform: expanded ? 'rotate(45deg)' : 'rotate(0deg)',
            }}>+</span>
            See full research
          </button>
        </Reveal>

        {/* ── Expandable section ── */}
        <div style={{
          display: 'grid',
          gridTemplateRows: expanded ? '1fr' : '0fr',
          transition: `grid-template-rows 0.75s ${EASE}`,
        }}>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ paddingTop: '56px', paddingBottom: '8px' }}>

              {/* Map label */}
              <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: T_MUTED, marginBottom: '20px' }}>
                European cities pushing back
              </p>

              {/* Map card */}
              <div
                ref={wrapRef}
                style={{
                  background: CARD,
                  borderRadius: '20px',
                  boxShadow: SHADOW,
                  padding: '36px 40px 28px',
                  marginBottom: '48px',
                  position: 'relative',
                }}
              >
                {/* Tooltip */}
                <div style={{
                  position: 'absolute',
                  background: CHARCOAL,
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 500,
                  lineHeight: 1.4,
                  padding: '10px 14px',
                  borderRadius: '10px',
                  maxWidth: '200px',
                  pointerEvents: 'none',
                  opacity: tooltip.visible ? 1 : 0,
                  transform: tooltip.visible ? 'translateY(0)' : 'translateY(4px)',
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                  zIndex: 20,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
                  left: tooltip.left,
                  top: tooltip.top,
                  whiteSpace: 'normal',
                }}>
                  <strong style={{ display: 'block', marginBottom: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: CORAL, fontStyle: 'normal' }}>
                    {tooltip.city}
                  </strong>
                  {tooltip.info}
                </div>

                <svg
                  ref={svgRef}
                  viewBox="0 0 700 480"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                >
                  <defs>
                    <filter id="f3glow">
                      <feGaussianBlur stdDeviation="2.5" result="blur"/>
                      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                  </defs>

                  {/* Europe outline */}
                  <path
                    d="M 118,430
                       C 105,400 98,370 108,335
                       C 118,300 112,275 136,270
                       C 152,266 158,246 162,225
                       C 166,205 152,198 172,188
                       C 188,180 184,172 210,165
                       C 234,158 238,144 265,138
                       C 285,133 292,112 322,92
                       C 346,74 378,80 398,118
                       C 412,145 450,124 478,114
                       C 494,108 500,126 502,148
                       C 506,172 514,195 500,228
                       C 486,261 470,272 459,296
                       C 448,320 454,340 440,363
                       C 432,378 440,395 424,404
                       C 413,411 400,392 388,369
                       C 370,338 364,318 350,303
                       C 338,290 344,348 352,380
                       C 359,406 352,428 336,433
                       C 320,438 313,415 296,393
                       C 276,366 263,334 252,312
                       C 241,292 226,300 216,326
                       C 206,350 200,373 178,394
                       C 156,415 132,432 118,430 Z"
                    fill="rgba(44,40,37,0.04)"
                    stroke="rgba(44,40,37,0.12)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  {/* Scandinavia */}
                  <path
                    d="M 322,92 C 332,72 354,48 380,40 C 404,32 422,48 426,68 C 430,86 414,98 398,118"
                    fill="none"
                    stroke="rgba(44,40,37,0.12)"
                    strokeWidth="1.5"
                  />
                  {/* Italy boot */}
                  <path
                    d="M 302,326 C 308,348 322,375 342,398 C 352,410 356,424 350,432 C 344,440 328,432 318,416 C 304,396 294,368 290,348 Z"
                    fill="rgba(44,40,37,0.03)"
                    stroke="rgba(44,40,37,0.10)"
                    strokeWidth="1.5"
                  />
                  {/* UK */}
                  <path
                    d="M 184,172 C 175,158 170,138 178,120 C 185,104 198,98 210,106 C 220,114 218,132 210,145 C 204,156 192,165 184,172 Z"
                    fill="none"
                    stroke="rgba(44,40,37,0.10)"
                    strokeWidth="1.2"
                  />

                  {/* City dots */}
                  {CITY_DOTS.map(dot => (
                    <g
                      key={dot.city}
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => handleDotEnter(dot)}
                      onMouseLeave={handleDotLeave}
                    >
                      <circle cx={dot.cx} cy={dot.cy} r={16} fill={CORAL} fillOpacity={0.20} />
                      <circle cx={dot.cx} cy={dot.cy} r={6}  fill={CORAL} filter="url(#f3glow)" />
                    </g>
                  ))}
                </svg>
              </div>

              {/* Pull quote */}
              <div style={{ marginBottom: '48px', paddingLeft: '22px', borderLeft: `3px solid ${CORAL}` }}>
                <blockquote style={{ fontSize: '21px', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.5, color: 'rgba(44,40,37,0.85)', marginBottom: '12px', maxWidth: '44ch' }}>
                  "The problem is not just Paris. It is all of Europe."
                </blockquote>
                <cite style={{ fontSize: '13px', fontStyle: 'normal', color: T_MUTED }}>
                  — Anne Hidalgo, former Mayor of Paris
                </cite>
              </div>

              {/* City grid label */}
              <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: T_MUTED, marginBottom: '16px' }}>
                City by city
              </p>

              {/* City cards — 2 columns */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '48px' }}>
                {CITY_CARDS.map(item => (
                  <div
                    key={item.city}
                    style={{
                      background: CARD,
                      borderRadius: '14px',
                      boxShadow: SHADOW,
                      padding: '20px 22px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    <p style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: CHARCOAL,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      margin: 0,
                    }}>
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: CORAL, flexShrink: 0, display: 'inline-block' }} />
                      {item.city}
                    </p>
                    <p style={{ fontSize: '13px', lineHeight: 1.6, color: T_BODY, margin: 0 }}>
                      {item.stat}
                    </p>
                  </div>
                ))}
              </div>

              {/* Research quotes label */}
              <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: T_MUTED, marginBottom: '16px' }}>
                What the evidence says
              </p>

              {/* Quote cards — 2 columns */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '40px' }}>
                {[
                  {
                    label: 'Academic Research',
                    text: '"Once people rate and review each other\'s social persona on the Airbnb platform, human beings adapt their behavior to the platform\'s reward-and-punish structure."',
                    attr: '— Christiaens, T. (2025). Trust and power in Airbnb\'s digital rating and reputation system.',
                  },
                  {
                    label: 'Host Community',
                    text: '"This is the hospitality industry. It\'s run by real folks. You can\'t add AI for help. I don\'t want anything to do with a computer making decisions for anyone, especially in hospitality."',
                    attr: '— Verified host, r/airbnb_hosts',
                  },
                ].map(q => (
                  <div
                    key={q.label}
                    style={{
                      background: CARD,
                      borderRadius: '14px',
                      boxShadow: SHADOW,
                      padding: '26px 26px 22px',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: T_MUTED, marginBottom: '14px' }}>
                      {q.label}
                    </p>
                    <p style={{ fontSize: '14px', lineHeight: 1.75, fontStyle: 'italic', color: 'rgba(44,40,37,0.85)', marginBottom: '16px', flex: 1 }}>
                      {q.text}
                    </p>
                    <p style={{ fontSize: '12px', lineHeight: 1.5, color: T_MUTED, paddingTop: '14px', borderTop: `1px solid ${DIVIDER}` }}>
                      {q.attr}
                    </p>
                  </div>
                ))}
              </div>

              {/* Closing line */}
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: T_BODY, maxWidth: '58ch', marginBottom: '40px' }}>
                Hosts have become performers. Guests have become bookings. The communities that once made these places worth visiting are being hollowed out — one five-star review at a time.
              </p>

              {/* Collapse trigger */}
              <button
                onClick={handleCollapse}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'none',
                  border: 'none',
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: T_MUTED,
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 10V2M2 6l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Collapse research
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
