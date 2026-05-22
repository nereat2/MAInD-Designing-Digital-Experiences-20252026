import { PhiloBlob, XeniBlob } from './Blobs';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState, useEffect, useRef } from 'react';
import airbnbLogo from '../../imports/Airbnb_App_Logo_Sept_29_2020.png';

export default function FoldTwo() {
  const eyebrow = useScrollReveal();
  const headline = useScrollReveal(0.15, 80);
  const body = useScrollReveal(0.15, 160);
  const cards = useScrollReveal(0.15, 240);
  const banner = useScrollReveal(0.15, 320);

  const [showPhiloText, setShowPhiloText] = useState(false);
  const [showXeniText, setShowXeniText] = useState(false);

  useEffect(() => {
    if (cards.isVisible) {
      setTimeout(() => setShowPhiloText(true), 2200);
      setTimeout(() => setShowXeniText(true), 2400);
    }
  }, [cards.isVisible]);

  return (
    <section
      className="w-full"
      style={{
        backgroundColor: '#F4F3F1',
        paddingTop: '110px',
        paddingBottom: '110px',
        fontFamily: 'Figtree, sans-serif'
      }}
    >
      <div className="max-w-[760px] mx-auto px-8">
        {/* Eyebrow */}
        <div
          ref={eyebrow.ref}
          style={{
            fontSize: '11px',
            fontWeight: 500,
            color: '#FF385C',
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            marginBottom: '20px',
            ...eyebrow.style
          }}
        >
          THE PROJECT
        </div>

        {/* Headline */}
        <h2
          ref={headline.ref}
          style={{
            fontSize: '50px',
            fontWeight: 700,
            lineHeight: '1.1',
            color: '#2C2825',
            letterSpacing: '-0.025em',
            maxWidth: '18ch',
            marginBottom: '28px',
            ...headline.style
          }}
        >
          We built the intelligence layer that brings it back.
        </h2>

        {/* Body Copy */}
        <div ref={body.ref} style={{ marginBottom: '56px', ...body.style }}>
          <p
            style={{
              fontSize: '17px',
              fontWeight: 400,
              lineHeight: '1.7',
              color: 'rgba(44, 40, 37, 0.75)',
              maxWidth: '62ch',
              marginBottom: '16px'
            }}
          >
            Philo & Xeni are two AI agents that live inside the P2P accommodation ecosystem. Philo helps hosts express who they are — and helps guests find what they're actually looking for. Xeni turns a host's knowledge of a place into a living guide that travels with the guest.
          </p>
          <p
            style={{
              fontSize: '17px',
              fontWeight: 400,
              lineHeight: '1.7',
              color: 'rgba(44, 40, 37, 0.75)',
              maxWidth: '62ch'
            }}
          >
            Together, they do what no platform feature, no chatbot, and no filter system has managed: connect the right person to the right place, in the right way.
          </p>
        </div>

        {/* Agent Cards */}
        <div ref={cards.ref} className="grid grid-cols-2 gap-4 mb-12">
          {/* Philo Card */}
          <div
            style={{
              padding: '32px'
            }}
          >
            {/* Philo Blob */}
            <div style={{
              marginTop: '24px',
              marginBottom: '32px',
              opacity: cards.isVisible ? 1 : 0,
              transform: cards.isVisible ? 'translateX(0) scale(1)' : 'translateX(-60px) scale(0.85)',
              transition: 'opacity 2s cubic-bezier(0.16, 1, 0.3, 1), transform 2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
              <PhiloBlob size={96} />
            </div>

            {/* Text Content */}
            <div style={{
              opacity: showPhiloText ? 1 : 0,
              transform: showPhiloText ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
              {/* Tag Line */}
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#2C2825',
                  marginBottom: '8px'
                }}
              >
                Philo — Optimise
              </div>

              {/* Meta Line */}
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: 'rgba(44, 40, 37, 0.45)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '10px'
                }}
              >
                Browser-based · Host + Guest
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  color: 'rgba(44, 40, 37, 0.65)'
                }}
              >
                Helps hosts shape their listing identity. Helps guests search by feel, not filter.
              </p>
            </div>
          </div>

          {/* Xeni Card */}
          <div
            style={{
              padding: '32px'
            }}
          >
            {/* Xeni Blob */}
            <div style={{
              marginTop: '24px',
              marginBottom: '32px',
              opacity: cards.isVisible ? 1 : 0,
              transform: cards.isVisible ? 'translateX(0) scale(1)' : 'translateX(60px) scale(0.85)',
              transition: 'opacity 2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
            }}>
              <XeniBlob size={96} eyeDir="left" />
            </div>

            {/* Text Content */}
            <div style={{
              opacity: showXeniText ? 1 : 0,
              transform: showXeniText ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
              {/* Tag Line */}
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#2C2825',
                  marginBottom: '8px'
                }}
              >
                Xeni — Wander
              </div>

              {/* Meta Line */}
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: 'rgba(44, 40, 37, 0.45)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '10px'
                }}
              >
                Mobile app · Host + Guest
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  color: 'rgba(44, 40, 37, 0.65)'
                }}
              >
                Turns local knowledge into a shareable guide. Lets guests experience a place the way a local would.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Full-width banner strip */}
      <div ref={banner.ref} style={{
        background: 'linear-gradient(to bottom, #F5E6E0 0%, #FDFCFA 100%)',
        width: '100%',
        padding: '64px clamp(2rem, 6vw, 5rem)',
        ...banner.style
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Top label */}
          <div style={{
            fontSize: '11px', fontWeight: 500,
            color: 'rgba(44, 40, 37, 0.50)',
            textTransform: 'uppercase', letterSpacing: '0.16em',
            marginBottom: '24px'
          }}>
            Our proof of concept
          </div>

          {/* Main content row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '48px'
          }}>
            {/* Large Airbnb wordmark */}
            <div style={{
              fontSize: 'clamp(64px, 8vw, 96px)', fontWeight: 800,
              color: '#FF385C', letterSpacing: '-0.03em', lineHeight: 0.95,
              flexShrink: 0
            }}>
              Airbnb
            </div>

            {/* Three descriptors stacked in the middle */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              flex: 1
            }}>
              {[
                'Largest P2P platform in Europe',
                'Most contested by cities',
                'Widest gap between promise and reality',
              ].map((label) => (
                <div key={label} style={{
                  fontSize: '16px', fontWeight: 500,
                  color: 'rgba(44, 40, 37, 0.70)', lineHeight: '1.5',
                  display: 'flex', alignItems: 'center', gap: '12px'
                }}>
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    backgroundColor: 'rgba(44, 40, 37, 0.30)',
                    flexShrink: 0
                  }} />
                  {label}
                </div>
              ))}
            </div>

            {/* Airbnb logo on the right */}
            <div style={{ flexShrink: 0 }}>
              <img
                src={airbnbLogo}
                alt="Airbnb logo"
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'contain',
                  borderRadius: '16px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15), 0 16px 48px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}