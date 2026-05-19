import React from 'react';
import { ChevronUp } from 'lucide-react';

const PILLS = ['P2P Accommodation', 'Mobility', 'Restaurants & Dining', 'Local Experiences', 'Travel'];

function ArrowConnector() {
  return (
    <svg width={24} height={12} viewBox="0 0 24 12" fill="none" style={{ flexShrink: 0 }}>
      <line x1={0} y1={6} x2={18} y2={6}
        stroke="rgba(44,40,37,0.22)" strokeWidth={1.5} strokeLinecap="round" />
      <polyline points="13,2 19,6 13,10"
        stroke="rgba(44,40,37,0.22)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export default function FoldNine() {
  return (
    <section style={{ background: '#FDFCFA', fontFamily: 'Figtree, sans-serif' }}>

      {/* ── Inner content ── */}
      <div style={{
        maxWidth: 960, margin: '0 auto',
        padding: '120px clamp(1.5rem, 6vw, 4rem) 0'
      }}>
        {/* Headline */}
        <h2 style={{
          fontSize: 'clamp(2.8rem, 4.5vw, 3.25rem)',
          fontWeight: 700, lineHeight: 1.1,
          letterSpacing: '-0.028em', color: '#2C2825',
          maxWidth: '22ch', marginBottom: 72
        }}>
          Local knowledge and human connection — at scale, for any context that needs it.
        </h2>

        {/* Sequence label */}
        <p style={{
          fontSize: 11, fontWeight: 500,
          textTransform: 'uppercase', letterSpacing: '0.16em',
          color: 'rgba(44,40,37,0.36)', marginBottom: 20
        }}>
          STARTING HERE. BUILT TO GO FURTHER.
        </p>

        {/* Pill row */}
        <div style={{
          display: 'flex', alignItems: 'center', flexWrap: 'wrap',
          gap: 10, marginBottom: 100
        }}>
          {PILLS.map((label, i) => (
            <React.Fragment key={label}>
              <div style={
                i === 0 ? {
                  background: '#FF385C', color: 'white',
                  borderRadius: 100, padding: '9px 18px',
                  fontSize: 13, fontWeight: 600, lineHeight: 1, flexShrink: 0
                } : {
                  background: 'transparent',
                  border: '1.5px solid rgba(44,40,37,0.18)',
                  color: '#2C2825',
                  borderRadius: 100, padding: '9px 18px',
                  fontSize: 13, fontWeight: 600, lineHeight: 1, flexShrink: 0
                }
              }>{label}</div>
              {i < PILLS.length - 1 && <ArrowConnector />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Full-width rule */}
      <div style={{ width: '100%', height: 1, background: 'rgba(44,40,37,0.08)' }} />

      {/* Closing statement */}
      <div style={{ textAlign: 'center', padding: '72px 24px 80px' }}>
        <div style={{
          fontFamily: "'Playfair Display', 'Gelasio', serif",
          fontSize: 'clamp(6rem, 10vw, 7.5rem)',
          fontWeight: 700, lineHeight: 1,
          letterSpacing: '-0.02em', color: '#2C2825'
        }}>
          φιλοξενία
        </div>
        <div style={{
          fontFamily: "'Playfair Display', 'Gelasio', serif",
          fontSize: 'clamp(1.75rem, 3vw, 2rem)',
          fontWeight: 400, fontStyle: 'italic',
          color: 'rgba(44,40,37,0.50)', letterSpacing: '-0.01em',
          marginTop: 14
        }}>
          — the love of strangers.
        </div>
        <div style={{
          fontSize: 'clamp(1rem, 1.5vw, 1.0625rem)',
          fontWeight: 400, color: 'rgba(44,40,37,0.42)',
          letterSpacing: '0.02em', marginTop: 20
        }}>
          Wherever people and places need to connect.
        </div>
      </div>

      {/* Credits */}
      <div style={{ width: '100%', height: 1, background: 'rgba(44,40,37,0.08)' }} />
      <div style={{ textAlign: 'center', padding: '24px 24px 48px' }}>
        <div style={{
          fontSize: 12, fontWeight: 400, lineHeight: 1.7,
          color: 'rgba(44,40,37,0.30)'
        }}>
          Gürünlü Günseli · Nerea Asensio · Mélanie Turano · Peng-Hsuan Lee Jennifer · Walter De Nicola
        </div>
        <div style={{
          fontSize: 12, fontWeight: 400, lineHeight: 1.7,
          color: 'rgba(44,40,37,0.30)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12
        }}>
          <span>SUPSI MAIND · In collaboration with Spark Reply · 2026</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 4, display: 'inline-flex', alignItems: 'center',
              opacity: 0.25, transition: 'opacity 0.2s'
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.25')}
            aria-label="Back to top"
          >
            <ChevronUp size={12} color="#2C2825" />
          </button>
        </div>
      </div>

    </section>
  );
}
