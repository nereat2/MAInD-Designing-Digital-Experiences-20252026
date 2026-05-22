import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import hostImage from '../../imports/host-archaetype.png';
import guestImage from '../../imports/guest.png';

const BG      = '#F4F3F1';
const SURFACE = '#FAFAF7';
const CHARCOAL = '#2C2825';
const CORAL   = '#FF385C';
const BORDER  = 'rgba(44,40,37,0.09)';
const T_BODY  = 'rgba(44,40,37,0.65)';
const T_MUTED = 'rgba(44,40,37,0.38)';
const EASE    = 'cubic-bezier(0.16, 1, 0.3, 1)';

/* ── image placeholder ──────────────────────── */
function ImagePlaceholder({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
    </div>
  );
}

/* ── expand button ────────────────────────── */
function ExpandBtn({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.82)',
        borderRadius: '100px',
        padding: '7px 16px 7px 12px',
        fontFamily: 'Figtree, sans-serif',
        fontSize: '12px',
        fontWeight: 500,
        color: CHARCOAL,
        cursor: 'pointer',
        alignSelf: 'flex-start',
      }}
    >
      <span style={{
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        background: CORAL,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <span style={{
          color: 'white',
          fontSize: '13px',
          fontWeight: 300,
          lineHeight: 1,
          display: 'block',
          transition: `transform 0.35s ${EASE}`,
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>+</span>
      </span>
      {open ? 'Hide' : "What's missing"}
    </button>
  );
}

/* ── bullet list ──────────────────────────── */
function BulletList({ items, open }: { items: string[]; open: boolean }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: open ? '1fr' : '0fr',
      transition: `grid-template-rows 0.55s ${EASE}`,
    }}>
      <div style={{ overflow: 'hidden' }}>
        <ul style={{ listStyle: 'none', padding: 0, paddingTop: '14px', paddingBottom: '4px', margin: 0 }}>
          {items.map((item, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '10px',
                fontSize: '13px',
                lineHeight: 1.65,
                color: T_BODY,
                padding: '7px 0',
                borderBottom: i < items.length - 1 ? '0.5px solid rgba(44,40,37,0.07)' : 'none',
              }}
            >
              <span style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: 'rgba(44,40,37,0.22)',
                flexShrink: 0,
                marginTop: '7px',
                display: 'inline-block',
              }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── column ───────────────────────────────── */
interface ColProps {
  tag: string;
  placeholder: React.ReactNode;
  statLabel: string;
  bullets: string[];
  dataNum: string;
  dataText: string;
  dataSource: string;
}

function Col({ tag, placeholder, statLabel, bullets, dataNum, dataText, dataSource }: ColProps) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Side label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
        <span style={{
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: CHARCOAL,
          background: 'rgba(44,40,37,0.07)',
          borderRadius: '100px',
          padding: '4px 12px',
          whiteSpace: 'nowrap',
        }}>
          {tag}
        </span>
        <span style={{ flex: 1, height: '1px', background: BORDER }} />
      </div>

      {/* Screen frame */}
      <div style={{
        height: '300px',
        borderRadius: '20px',
        overflow: 'hidden',
        border: `0.5px solid ${BORDER}`,
        background: SURFACE,
        marginBottom: '20px',
        flexShrink: 0,
      }}>
        {placeholder}
      </div>

      {/* Stat label */}
      <p style={{
        fontSize: '15px',
        fontWeight: 700,
        letterSpacing: '-0.015em',
        color: CHARCOAL,
        marginBottom: '14px',
        lineHeight: 1.3,
      }}>
        {statLabel}
      </p>

      {/* Expand */}
      <ExpandBtn open={open} onClick={() => setOpen(v => !v)} />
      <BulletList items={bullets} open={open} />

      {/* Data callout */}
      <div style={{ marginTop: '20px', paddingTop: '18px', borderTop: `1px solid ${BORDER}` }}>
        <p style={{
          fontSize: '34px',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: CHARCOAL,
          lineHeight: 1,
          marginBottom: '8px',
        }}>
          {dataNum}
        </p>
        <p style={{ fontSize: '13px', lineHeight: 1.65, color: T_BODY, maxWidth: '36ch', marginBottom: '6px' }}>
          {dataText}
        </p>
        <p style={{ fontSize: '11px', color: T_MUTED, letterSpacing: '0.04em' }}>
          {dataSource}
        </p>
      </div>
    </div>
  );
}

/* ── main ─────────────────────────────────── */
export default function FoldFour() {
  const eyebrow = useScrollReveal();
  const headline = useScrollReveal(0.15, 80);
  const columns = useScrollReveal(0.15, 160);

  return (
    <section style={{ backgroundColor: BG, padding: '100px 0', fontFamily: 'Figtree, sans-serif' }}>
      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 clamp(1.5rem, 6vw, 4rem)' }}>

        <p ref={eyebrow.ref} style={{
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: CORAL,
          marginBottom: '20px',
          ...eyebrow.style
        }}>
          The current reality
        </p>

        <h2 ref={headline.ref} style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: '-0.025em',
          color: CHARCOAL,
          maxWidth: '24ch',
          marginBottom: '56px',
          ...headline.style
        }}>
          Two people. Two frustrations. One broken system.
        </h2>

        <div ref={columns.ref} style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          ...columns.style
        }}>
          <Col
            tag="Host"
            placeholder={<ImagePlaceholder src={hostImage} alt="Host archetype" />}
            statLabel="40+ steps to publish a listing."
            bullets={[
              'No prompts for personality or local identity',
              'Generic fields that make every listing sound the same',
              'Visibility driven by algorithm performance, not authenticity',
              'Local knowledge never makes it into the listing',
            ]}
            dataNum="9 million"
            dataText="listings globally. Almost none of them sound different from each other."
            dataSource="Airbnb / Skift Research, 2024"
          />
          <Col
            tag="Guest"
            placeholder={<ImagePlaceholder src={guestImage} alt="Guest archetype" />}
            statLabel="Location, dates, price. That's it."
            bullets={[
              'No way to search by mood, feeling or experience',
              'Results are identical cards ranked by price',
              'No visibility into who the host actually is',
              "Host's local knowledge stays invisible",
            ]}
            dataNum="48%"
            dataText="of guests visited places they'd never have found without a host recommendation — yet the platform gives hosts no way to share that knowledge."
            dataSource="Airbnb UK, 2024"
          />
        </div>

      </div>
    </section>
  );
}
