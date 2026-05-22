import { useState, useRef, useEffect, useCallback } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

/* ── tokens ───────────────────────────────────────── */
const BG       = '#F5F4F1';
const CHARCOAL = '#2C2825';
const CORAL    = '#FF385C';
const T_BODY   = 'rgba(44,40,37,0.58)';
const T_MUTED  = 'rgba(44,40,37,0.35)';
const DIVIDER  = 'rgba(44,40,37,0.09)';
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
const CITY_MARKERS = [
  { city: 'Barcelona', info: 'All tourist apartment licences expire 2028. 10,000+ homes returned to residential market.', lng: 2.1734, lat: 41.3851 },
  { city: 'Amsterdam', info: 'Airbnb listings fell 54% between 2019 and 2024.', lng: 4.9041, lat: 52.3676 },
  { city: 'Berlin', info: '8,105 apartments returned to residential housing.', lng: 13.4050, lat: 52.5200 },
  { city: 'Paris', info: '90-day annual cap since January 2025. Two hosts fined €80,000 and €150,000 in February 2026.', lng: 2.3522, lat: 48.8566 },
  { city: 'Madrid', info: '€64 million fine for Airbnb, December 2025. 65,122 unlicensed listings.', lng: -3.7038, lat: 40.4168 },
  { city: 'Athens', info: 'Ban on new short-term rental licences in central districts from January 2025.', lng: 23.7275, lat: 37.9838 },
  { city: 'Florence', info: 'Moratorium on new licences in historic centre. Protecting against touristification.', lng: 11.2558, lat: 43.7696 },
  { city: 'Budapest', info: 'District referendum resulted in ban on short-term rentals from 2026.', lng: 19.0402, lat: 47.4979 },
];

const CITY_CARDS = [
  { city: 'Barcelona', stat: 'All tourist apartment licences expire 2028. 10,000+ homes returned to residential market.' },
  { city: 'Amsterdam', stat: 'Airbnb listings fell 54% between 2019 and 2024.' },
  { city: 'Berlin',    stat: '8,105 apartments returned to residential housing.' },
  { city: 'Paris',     stat: '90-day annual cap since January 2025. Two hosts fined €80,000 and €150,000 in February 2026.' },
  { city: 'Madrid',    stat: '€64 million fine for Airbnb, December 2025. 65,122 unlicensed listings.' },
  { city: 'Athens',    stat: 'Ban on new short-term rental licences in central districts from January 2025.' },
  { city: 'Florence',  stat: 'Moratorium on new licences in historic centre. Protecting against "touristification."' },
  { city: 'Budapest',  stat: 'District referendum resulted in ban on short-term rentals from 2026.' },
];

/* ── component ────────────────────────────────────── */
export default function FoldThree() {
  const [expanded, setExpanded] = useState(false);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!expanded || !mapContainer.current || map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://api.maptiler.com/maps/base-v4/style.json?key=4sqwxca14Ssy0zS0EJFX',
      center: [13.88826, 48.96847],
      zoom: 3.6,
    });

    // Add markers for each city
    CITY_MARKERS.forEach((marker) => {
      const el = document.createElement('div');
      el.className = 'city-marker';
      el.style.width = '24px';
      el.style.height = '24px';
      el.style.borderRadius = '50%';
      el.style.backgroundColor = '#FF385C';
      el.style.border = '3px solid rgba(255, 255, 255, 0.9)';
      el.style.boxShadow = '0 2px 8px rgba(255, 56, 92, 0.4)';
      el.style.cursor = 'pointer';

      const popup = new maplibregl.Popup({ offset: 25 }).setHTML(
        `<div style="padding: 8px;">
          <strong style="display: block; margin-bottom: 6px; font-size: 13px; color: #FF385C; text-transform: uppercase; letter-spacing: 0.08em;">${marker.city}</strong>
          <p style="margin: 0; font-size: 12px; line-height: 1.5; color: #2C2825;">${marker.info}</p>
        </div>`
      );

      new maplibregl.Marker({ element: el })
        .setLngLat([marker.lng, marker.lat])
        .setPopup(popup)
        .addTo(map.current!);
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [expanded]);

  const handleCollapse = () => {
    setExpanded(false);
    setTimeout(() => triggerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };

  return (
    <section style={{ background: BG, paddingTop: '130px', paddingBottom: '130px', fontFamily: 'Figtree, sans-serif', minHeight: '100vh', boxSizing: 'border-box', borderTop: '1px solid rgba(44,40,37,0.06)' }}>
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

        {/* Three editorial rows */}
        <div style={{ borderTop: `1px solid ${DIVIDER}`, marginBottom: '48px' }}>
          {([
            { num: '01', label: 'Platforms', prefix: 'Profit from',   struck: 'quality',    real: 'volume',    desc: 'More listings, more take-rate. Quality is unverifiable at scale — so it stops mattering.' },
            { num: '02', label: 'Hosts',     prefix: 'Optimised for', struck: 'identity',   real: 'occupancy', desc: 'Calendars beat character. The algorithm rewards availability, not authenticity.' },
            { num: '03', label: 'Guests',    prefix: 'Filtered by',   struck: 'experience', real: 'price',     desc: 'Cheapest wins the search. Discovery by feel is impossible when everything is sorted by cost.' },
          ] as const).map((row, i) => (
            <Reveal key={row.label} delay={180 + i * 100}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '44px 1fr 1fr',
                gap: '0 40px',
                alignItems: 'center',
                padding: '32px 0',
                borderBottom: `1px solid ${DIVIDER}`,
                transition: `background 0.2s ease`,
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(44,40,37,0.02)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {/* Index number */}
                <span style={{
                  fontSize: '12px', fontWeight: 500,
                  color: T_MUTED, letterSpacing: '0.06em',
                  alignSelf: 'start', paddingTop: '4px',
                }}>{row.num}</span>

                {/* Left: actor label + full sentence title */}
                <div>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '10px', fontWeight: 700,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: T_MUTED, marginBottom: '12px',
                  }}>{row.label}</span>
                  <p style={{ fontSize: '22px', fontWeight: 500, lineHeight: 1.3, color: CHARCOAL, margin: 0 }}>
                    {row.prefix}{' '}
                    <span style={{
                      color: 'rgba(44,40,37,0.32)',
                      fontStyle: 'italic',
                      textDecoration: 'line-through',
                      textDecorationColor: CORAL,
                      textDecorationThickness: '2px',
                    }}>{row.struck}</span>{' '}
                    <span style={{
                      fontWeight: 800,
                      letterSpacing: '-0.025em',
                    }}>{row.real}</span>
                  </p>
                </div>

                {/* Right: description */}
                <div>
                  <p style={{ fontSize: '13px', lineHeight: 1.75, color: T_BODY, margin: 0 }}>
                    {row.desc}
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

        {/* Expand trigger */}
        <Reveal>
          <button
            ref={triggerRef}
            onClick={() => setExpanded(!expanded)}
            style={{
              background: '#FF385C',
              border: 'none',
              borderRadius: '100px',
              padding: '14px 32px',
              fontFamily: 'Figtree, sans-serif',
              fontSize: '15px',
              fontWeight: 600,
              color: '#FFFFFF',
              cursor: 'pointer',
              letterSpacing: '-0.01em',
              transition: 'background 0.2s ease, transform 0.15s ease',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#E6314F'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#FF385C'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <span style={{
              fontSize: '18px',
              fontWeight: 300,
              lineHeight: 1,
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
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  boxShadow: '0 1px 3px rgba(44,40,37,0.06), 0 8px 24px rgba(44,40,37,0.05)',
                  border: `1px solid ${DIVIDER}`,
                  padding: '0',
                  marginBottom: '48px',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '500px'
                }}
              >
                <div
                  ref={mapContainer}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
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
                      background: '#FFFFFF',
                      borderRadius: '14px',
                      boxShadow: '0 1px 3px rgba(44,40,37,0.06)',
                      border: `1px solid ${DIVIDER}`,
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
                      background: '#FFFFFF',
                      borderRadius: '14px',
                      boxShadow: '0 1px 3px rgba(44,40,37,0.06)',
                      border: `1px solid ${DIVIDER}`,
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