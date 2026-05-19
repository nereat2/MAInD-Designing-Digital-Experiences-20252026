import { ChevronUp } from 'lucide-react';

export default function FoldNine() {
  return (
    <section
      className="relative w-full"
      style={{
        backgroundColor: '#FDFCFA',
        fontFamily: 'Figtree, sans-serif',
        paddingTop: '120px',
        paddingBottom: '64px'
      }}
    >
      {/* Ghost orbs - barely visible reminder of both agents */}
      <div
        className="absolute top-20 right-32 pointer-events-none"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 176, 133, 0.15) 0%, rgba(255, 140, 122, 0.15) 50%, transparent 100%)',
          filter: 'blur(40px)'
        }}
      />
      <div
        className="absolute top-32 right-20 pointer-events-none"
        style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, rgba(184, 176, 232, 0.15) 0%, rgba(212, 168, 200, 0.15) 50%, transparent 100%)',
          filter: 'blur(40px)'
        }}
      />

      <div className="relative max-w-[900px] mx-auto px-8">
        {/* Eyebrow */}
        <div
          style={{
            fontSize: '11px',
            fontWeight: 500,
            color: '#FF385C',
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            marginBottom: '20px'
          }}
        >
          THE BIGGER PICTURE
        </div>

        {/* Headline */}
        <h2
          style={{
            fontSize: '42px',
            fontWeight: 700,
            lineHeight: '1.1',
            color: '#2C2825',
            letterSpacing: '-0.025em',
            maxWidth: '28ch',
            marginBottom: '28px'
          }}
        >
          We manage the intelligence. Philo & Xeny deploy wherever people and places need to connect.
        </h2>

        {/* Body copy */}
        <p
          style={{
            fontSize: '17px',
            fontWeight: 400,
            lineHeight: '1.75',
            color: 'rgba(44, 40, 37, 0.68)',
            maxWidth: '58ch',
            marginBottom: '64px'
          }}
        >
          P2P accommodation is the starting point. But the intelligence layer — territory data, host identity, local knowledge, guest personality — is not specific to Airbnb, or even to accommodation. Any context where a person arrives somewhere new and needs a local to help them navigate it is a context for this system.
        </p>

        {/* Expansion sequence */}
        <div style={{ marginBottom: '72px' }}>
          <div className="flex items-center flex-wrap gap-4">
            {/* P2P Accommodation - Active */}
            <div
              style={{
                backgroundColor: '#FF385C',
                color: 'white',
                borderRadius: '20px',
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: 600
              }}
            >
              P2P Accommodation
            </div>

            <div style={{ fontSize: '16px', color: 'rgba(44, 40, 37, 0.25)', fontWeight: 400 }}>
              →
            </div>

            {/* Mobility */}
            <div
              style={{
                backgroundColor: '#F0EFED',
                color: '#2C2825',
                borderRadius: '20px',
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: 600
              }}
            >
              Mobility
            </div>

            <div style={{ fontSize: '16px', color: 'rgba(44, 40, 37, 0.25)', fontWeight: 400 }}>
              →
            </div>

            {/* Restaurants & Dining */}
            <div
              style={{
                backgroundColor: '#F0EFED',
                color: '#2C2825',
                borderRadius: '20px',
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: 600
              }}
            >
              Restaurants & Dining
            </div>

            <div style={{ fontSize: '16px', color: 'rgba(44, 40, 37, 0.25)', fontWeight: 400 }}>
              →
            </div>

            {/* Local Experiences */}
            <div
              style={{
                backgroundColor: '#F0EFED',
                color: '#2C2825',
                borderRadius: '20px',
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: 600
              }}
            >
              Local Experiences
            </div>

            <div style={{ fontSize: '16px', color: 'rgba(44, 40, 37, 0.25)', fontWeight: 400 }}>
              →
            </div>

            {/* Travel */}
            <div
              style={{
                backgroundColor: '#F0EFED',
                color: '#2C2825',
                borderRadius: '20px',
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: 600
              }}
            >
              Travel
            </div>
          </div>

          <div
            style={{
              fontSize: '13px',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'rgba(44, 40, 37, 0.40)',
              marginTop: '14px'
            }}
          >
            Starting with P2P accommodation, designed to go further.
          </div>
        </div>

        {/* Three next-step blocks */}
        <div className="grid grid-cols-3 gap-6 mb-32">
          {/* Include */}
          <div>
            <div
              style={{
                fontFamily: 'Gelasio, serif',
                fontSize: '22px',
                fontWeight: 500,
                color: '#2C2825'
              }}
            >
              Include
            </div>
            <div
              style={{
                width: '100%',
                height: '1px',
                backgroundColor: 'rgba(44, 40, 37, 0.12)',
                marginTop: '12px',
                marginBottom: '16px'
              }}
            />
            <p
              style={{
                fontSize: '15px',
                fontWeight: 400,
                lineHeight: '1.7',
                color: 'rgba(44, 40, 37, 0.62)'
              }}
            >
              A collaboration layer connecting local businesses and tourism organisations — letting verified local knowledge surface through the host's voice as genuine recommendations, not advertising.
            </p>
          </div>

          {/* Explore */}
          <div>
            <div
              style={{
                fontFamily: 'Gelasio, serif',
                fontSize: '22px',
                fontWeight: 500,
                color: '#2C2825'
              }}
            >
              Explore
            </div>
            <div
              style={{
                width: '100%',
                height: '1px',
                backgroundColor: 'rgba(44, 40, 37, 0.12)',
                marginTop: '12px',
                marginBottom: '16px'
              }}
            />
            <p
              style={{
                fontSize: '15px',
                fontWeight: 400,
                lineHeight: '1.7',
                color: 'rgba(44, 40, 37, 0.62)'
              }}
            >
              Cross-platform integration — Booking.com, Hostelworld, Tripadvisor. The intelligence layer is platform-agnostic by design.
            </p>
          </div>

          {/* Extend */}
          <div>
            <div
              style={{
                fontFamily: 'Gelasio, serif',
                fontSize: '22px',
                fontWeight: 500,
                color: '#2C2825'
              }}
            >
              Extend
            </div>
            <div
              style={{
                width: '100%',
                height: '1px',
                backgroundColor: 'rgba(44, 40, 37, 0.12)',
                marginTop: '12px',
                marginBottom: '16px'
              }}
            />
            <p
              style={{
                fontSize: '15px',
                fontWeight: 400,
                lineHeight: '1.7',
                color: 'rgba(44, 40, 37, 0.62)'
              }}
            >
              Outside mobile, into other surfaces and contexts where the same connection between person and place needs to happen.
            </p>
          </div>
        </div>

        {/* Closing statement - the most important moment */}
        <div>
          {/* Horizontal rule */}
          <div
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: 'rgba(44, 40, 37, 0.10)',
              marginBottom: '80px'
            }}
          />

          {/* Three-line closing - centered */}
          <div className="text-center" style={{ marginBottom: '80px' }}>
            {/* φιλοξενία - largest on the page */}
            <div
              style={{
                fontFamily: 'Gelasio, serif',
                fontSize: '88px',
                fontWeight: 700,
                color: '#2C2825',
                letterSpacing: '-0.02em',
                lineHeight: '1'
              }}
            >
              φιλοξενία
            </div>

            {/* — the love of strangers. */}
            <div
              style={{
                fontFamily: 'Gelasio, serif',
                fontSize: '34px',
                fontWeight: 400,
                color: 'rgba(44, 40, 37, 0.50)',
                letterSpacing: '-0.01em',
                marginTop: '16px'
              }}
            >
              — the love of strangers.
            </div>

            {/* Wherever people and places need to connect. */}
            <div
              style={{
                fontSize: '18px',
                fontWeight: 400,
                color: 'rgba(44, 40, 37, 0.45)',
                letterSpacing: '0.02em',
                marginTop: '24px'
              }}
            >
              Wherever people and places need to connect.
            </div>
          </div>

          {/* Credits */}
          <div>
            <div
              style={{
                width: '100%',
                height: '1px',
                backgroundColor: 'rgba(44, 40, 37, 0.08)',
                marginBottom: '24px'
              }}
            />

            <div className="text-center">
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: 'rgba(44, 40, 37, 0.32)',
                  letterSpacing: '0.03em'
                }}
              >
                Gürünlü Günseli · Nerea Asensio · Mélanie Turano · Peng-Hsuan Lee Jennifer · Walter De Nicola
              </div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: 'rgba(44, 40, 37, 0.32)',
                  letterSpacing: '0.03em',
                  marginTop: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px'
                }}
              >
                <span>SUPSI MAIND · In collaboration with Spark Reply · 2026</span>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    opacity: 0.25,
                    transition: 'opacity 0.2s'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.25')}
                  aria-label="Back to top"
                >
                  <ChevronUp size={12} color="#2C2825" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
