/* Fold 6 — The Solution Reveal
   Centered layout. Philo & Xeny flank the φιλοξενία wordmark,
   eyes turned inward, floating at different vertical heights.
*/
import { PhiloBlob, XenyBlob } from './Blobs';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState, useEffect, useRef } from 'react';
import philoXeniLogo from '../../imports/philo-xeni-logo.png';

const KEYFRAMES = `
@keyframes philo-hover {
  0%,100% { transform: translateY(0px) rotate(0.8deg); }
  55%      { transform: translateY(-9px) rotate(-0.5deg); }
}
@keyframes xeni-hover {
  0%,100% { transform: translateY(0px) rotate(-0.6deg); }
  50%      { transform: translateY(-6px) rotate(0.9deg); }
}
`;

export default function FoldSix() {
  const [showGradient, setShowGradient] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showBlobs, setShowBlobs] = useState(false);
  const [showGreekText, setShowGreekText] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Fade in gradient first
          setTimeout(() => setShowGradient(true), 100);
          // Then fade in content
          setTimeout(() => setShowContent(true), 1200);
          // Finally bring in blobs from sides
          setTimeout(() => setShowBlobs(true), 1800);
          // After 3 seconds, fade out Greek text
          setTimeout(() => setShowGreekText(false), 4000);
          // Then fade in logo
          setTimeout(() => setShowLogo(true), 5000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        fontFamily: 'Figtree, sans-serif',
        padding: '0 0 130px',
        overflow: 'hidden',
        textAlign: 'center',
        backgroundColor: '#FFFAF8',
      }}>
      <style>{KEYFRAMES}</style>

      {/* Pink banner at the top */}
      <div style={{
        width: '100%',
        backgroundColor: '#2C2825',
        padding: '12px 0',
        marginBottom: '100px',
        opacity: showContent ? 1 : 0,
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <p style={{
          fontSize: 10,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
          color: '#FFFFFF',
          margin: 0,
        }}>
          The Solution
        </p>
      </div>

      {/* Soft secondary bloom — lower right */}
      <div aria-hidden style={{
        position: 'absolute', bottom: -80, right: '-6%',
        width: 440, height: 320, borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(255,155,110,0.10) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 clamp(1.5rem, 6vw, 4rem)' }}>

        {/* ── WORDMARK ROW with flanking blobs ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px 0 8px',
          marginBottom: 18,
        }}>
          {/* Philo — left, slides in from left */}
          <div style={{
            marginRight: 20, zIndex: 2,
            transform: showBlobs ? 'translateX(0) translateY(-14px)' : 'translateX(-200px) translateY(-14px)',
            opacity: showBlobs ? 1 : 0,
            filter: 'drop-shadow(0 8px 20px rgba(255,140,100,0.30)) drop-shadow(0 2px 6px rgba(255,140,100,0.18))',
            transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}>
            <PhiloBlob size={80} eyeDir="right" anim="philo-hover 6.5s ease-in-out infinite" />
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
              fontWeight: 700, color: '#1C1917',
              letterSpacing: '-0.024em', lineHeight: 1,
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
              alt="Philo and Xeni"
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
            marginLeft: 20, zIndex: 2,
            transform: showBlobs ? 'translateX(0) translateY(12px)' : 'translateX(200px) translateY(12px)',
            opacity: showBlobs ? 1 : 0,
            filter: 'drop-shadow(0 8px 20px rgba(166,188,255,0.35)) drop-shadow(0 2px 6px rgba(166,188,255,0.20))',
            transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}>
            <XenyBlob size={72} eyeDir="left" anim="xeni-hover 7.2s ease-in-out 1.1s infinite" />
          </div>
        </div>

        {/* Italic subtitle */}
        <div style={{
          fontFamily: "'Playfair Display','Gelasio',serif",
          fontSize: 'clamp(18px, 2.4vw, 22px)',
          fontWeight: 400, fontStyle: 'italic',
          color: 'rgba(28,25,23,0.46)', letterSpacing: '-0.01em',
          marginBottom: 32,
          opacity: showContent ? 1 : 0,
          transform: showContent ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
        }}>
          — the love of strangers.
        </div>

        {/* Body */}
        <p style={{
          fontSize: 15, lineHeight: 1.80,
          color: 'rgba(28,25,23,0.60)',
          maxWidth: '46ch', margin: '0 auto',
          opacity: showContent ? 1 : 0,
          transform: showContent ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s',
        }}>
          Philo and Xeny are two AI agents named after the two halves of φιλοξενία — the ancient Greek word for the love of strangers. Together they do what no platform feature has managed: connect the right person to the right place, in the right way.
        </p>

      </div>
    </section>
  );
}