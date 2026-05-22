import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp } from 'lucide-react';
import philoXeniLogo from '../../imports/philo-xeni-logo-1.png';
import { PhiloBlob, XenyBlob } from './Blobs';

const PILLS = ['P2P Accommodation', 'Mobility', 'Restaurants & Dining', 'Local Experiences', 'Travel'];

const KEYFRAMES = `
@keyframes philo-hover-nine {
  0%,100% { transform: translateY(0px) rotate(0.8deg); }
  55%      { transform: translateY(-9px) rotate(-0.5deg); }
}
@keyframes xeni-hover-nine {
  0%,100% { transform: translateY(0px) rotate(-0.6deg); }
  50%      { transform: translateY(-6px) rotate(0.9deg); }
}
`;

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
  const [isTransformed, setIsTransformed] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showBlobs, setShowBlobs] = useState(false);
  const [showGreekText, setShowGreekText] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [showHeadline, setShowHeadline] = useState(false);
  const [showPills, setShowPills] = useState(false);
  const closingRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headlineObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowHeadline(true);
          // Start showing pills after headline animation
          setTimeout(() => setShowPills(true), 1500);
        }
      },
      { threshold: 0.3 }
    );

    if (headlineRef.current) {
      headlineObserver.observe(headlineRef.current);
    }

    return () => {
      if (headlineRef.current) {
        headlineObserver.unobserve(headlineRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Fade in content
          setTimeout(() => setShowContent(true), 100);
          // Bring in blobs from sides
          setTimeout(() => setShowBlobs(true), 800);
          // After 3 seconds, fade out Greek text
          setTimeout(() => setShowGreekText(false), 3000);
          // Then fade in logo
          setTimeout(() => setShowLogo(true), 4000);
          // Legacy transform for other elements
          setIsTransformed(true);
        }
      },
      { threshold: 0.5 }
    );

    if (closingRef.current) {
      observer.observe(closingRef.current);
    }

    return () => {
      if (closingRef.current) {
        observer.unobserve(closingRef.current);
      }
    };
  }, []);

  return (
    <section style={{ background: '#F4F3F1', fontFamily: 'Figtree, sans-serif' }}>
      <style>{KEYFRAMES}</style>

      {/* ── Inner content ── */}
      <div style={{
        maxWidth: 960, margin: '0 auto',
        padding: '120px clamp(1.5rem, 6vw, 4rem) 0'
      }}>
        {/* Headline */}
        <h2
          ref={headlineRef}
          style={{
            fontSize: 'clamp(2.8rem, 4.5vw, 3.25rem)',
            fontWeight: 700, lineHeight: 1.1,
            letterSpacing: '-0.028em', color: '#2C2825',
            maxWidth: '22ch', marginBottom: 72
          }}
        >
          {[
            'Local', 'knowledge', 'and', 'human', 'connection', '—', 'at', 'scale,', 
            'for', 'any', 'context', 'that', 'needs', 'it.'
          ].map((word, i) => (
            <span
              key={i}
              style={{
                opacity: showHeadline ? 1 : 0,
                transform: showHeadline ? 'translateY(0)' : 'translateY(10px)',
                transition: `opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s`,
                display: 'inline-block',
                marginRight: '0.3em'
              }}
            >
              {word}
            </span>
          ))}
        </h2>

        {/* Sequence label */}
        <p style={{
          fontSize: 11, fontWeight: 500,
          textTransform: 'uppercase', letterSpacing: '0.16em',
          color: 'rgba(44,40,37,0.36)', marginBottom: 20,
          opacity: showPills ? 1 : 0,
          transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
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
              <div style={{
                ...(i === 0 ? {
                  background: '#FF385C', color: 'white',
                  borderRadius: 100, padding: '9px 18px',
                  fontSize: 13, fontWeight: 600, lineHeight: 1, flexShrink: 0
                } : {
                  background: 'transparent',
                  border: '1.5px solid rgba(44,40,37,0.18)',
                  color: '#2C2825',
                  borderRadius: 100, padding: '9px 18px',
                  fontSize: 13, fontWeight: 600, lineHeight: 1, flexShrink: 0
                }),
                opacity: showPills ? 1 : 0,
                transform: showPills ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                transition: `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.15}s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.15}s`
              }}>{label}</div>
              {i < PILLS.length - 1 && (
                <div style={{
                  opacity: showPills ? 1 : 0,
                  transition: `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.15 + 0.1}s`
                }}>
                  <ArrowConnector />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Full-width rule */}
      <div style={{ width: '100%', height: 1, background: 'rgba(44,40,37,0.08)' }} />

      {/* Closing statement */}
      <div
        ref={closingRef}
        style={{
          textAlign: 'center',
          padding: '72px 24px 80px',
          background: '#F4F3F1',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* ── WORDMARK ROW with flanking blobs ── */}
        <div style={{
          position: 'relative',
          height: 'clamp(10rem, 14vw, 12rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '48px'
        }}>
          {/* Philo — left, slides in from left */}
          <div style={{
            position: 'absolute',
            left: 'calc(50% - clamp(220px, 26vw, 280px))',
            top: '50%',
            transform: showBlobs ? 'translateX(0) translateY(-50%)' : 'translateX(-200px) translateY(-50%)',
            opacity: showBlobs ? 1 : 0,
            filter: 'drop-shadow(0 8px 20px rgba(255,140,100,0.30)) drop-shadow(0 2px 6px rgba(255,140,100,0.18))',
            transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 2,
          }}>
            <PhiloBlob size={70} eyeDir="right" anim="philo-hover-nine 6.5s ease-in-out infinite" />
          </div>

          {/* φιλοξενία wordmark and logo container */}
          <div style={{
            position: 'relative',
            display: 'inline-block',
            minWidth: 'clamp(300px, 40vw, 400px)',
            minHeight: 'clamp(56px, 8vw, 80px)',
          }}>
            {/* φιλοξενία text */}
            <div style={{
              fontFamily: "'Playfair Display','Gelasio',serif",
              fontSize: 'clamp(56px, 8vw, 80px)',
              fontWeight: 700,
              color: '#1C1917',
              letterSpacing: '-0.024em',
              lineHeight: 1,
              opacity: showContent && showGreekText ? 1 : 0,
              transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              whiteSpace: 'nowrap',
            }}>
              φιλοξενία
            </div>

            {/* Philo&Xeni logo */}
            <img
              src={philoXeniLogo}
              alt="Philo and Xeni logo"
              style={{
                opacity: showLogo ? 1 : 0,
                transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'clamp(280px, 35vw, 360px)',
                height: 'auto',
              }}
            />
          </div>

          {/* Xeny — right, slides in from right */}
          <div style={{
            position: 'absolute',
            right: 'calc(50% - clamp(220px, 26vw, 280px))',
            top: '50%',
            transform: showBlobs ? 'translateX(0) translateY(-50%)' : 'translateX(200px) translateY(-50%)',
            opacity: showBlobs ? 1 : 0,
            filter: 'drop-shadow(0 8px 20px rgba(166,188,255,0.35)) drop-shadow(0 2px 6px rgba(166,188,255,0.20))',
            transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            zIndex: 2,
          }}>
            <XenyBlob size={62} eyeDir="left" anim="xeni-hover-nine 7.2s ease-in-out 1.1s infinite" />
          </div>
        </div>

        {/* Italic subtitle */}
        <div style={{
          fontFamily: "'Playfair Display', 'Gelasio', serif",
          fontSize: 'clamp(1.75rem, 3vw, 2rem)',
          fontWeight: 400, fontStyle: 'italic',
          color: 'rgba(44,40,37,0.50)', letterSpacing: '-0.01em',
          marginBottom: 14,
          opacity: showContent ? 1 : 0,
          transform: showContent ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
        }}>
          — the love of strangers.
        </div>

        {/* Body text */}
        <div style={{
          fontSize: 'clamp(1rem, 1.5vw, 1.0625rem)',
          fontWeight: 400, color: 'rgba(44,40,37,0.42)',
          letterSpacing: '0.02em',
          opacity: showContent ? 1 : 0,
          transform: showContent ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s',
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