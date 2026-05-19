export default function FoldTwo() {
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
          style={{
            fontSize: '11px',
            fontWeight: 500,
            color: '#FF385C',
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            marginBottom: '20px'
          }}
        >
          THE PROJECT
        </div>

        {/* Headline */}
        <h2
          style={{
            fontSize: '50px',
            fontWeight: 700,
            lineHeight: '1.1',
            color: '#2C2825',
            letterSpacing: '-0.025em',
            maxWidth: '18ch',
            marginBottom: '28px'
          }}
        >
          We built the intelligence layer that brings it back.
        </h2>

        {/* Body Copy */}
        <div style={{ marginBottom: '56px' }}>
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
            Philo & Xeny are two AI agents that live inside the P2P accommodation ecosystem. Philo helps hosts express who they are — and helps guests find what they're actually looking for. Xeny turns a host's knowledge of a place into a living guide that travels with the guest.
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
        <div className="grid grid-cols-2 gap-4 mb-12">
          {/* Philo Card */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.07)',
              borderRadius: '16px',
              padding: '32px'
            }}
          >
            {/* Philo Orb */}
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 30%, #FFB085 0%, #FF8C7A 45%, rgba(255, 255, 255, 0.9) 100%)',
                filter: 'blur(8px)',
                marginBottom: '10px'
              }}
            />

            {/* Tag Line */}
            <div
              style={{
                fontSize: '15px',
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

          {/* Xeny Card */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.07)',
              borderRadius: '16px',
              padding: '32px'
            }}
          >
            {/* Xeny Orb */}
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 30%, #B8B0E8 0%, #E8A0B8 45%, rgba(255, 255, 255, 0.9) 100%)',
                filter: 'blur(8px)',
                marginBottom: '10px'
              }}
            />

            {/* Tag Line */}
            <div
              style={{
                fontSize: '15px',
                fontWeight: 600,
                color: '#2C2825',
                marginBottom: '8px'
              }}
            >
              Xeny — Wander
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

      {/* Full-width banner strip */}
      <div
        style={{
          borderTop: '1px solid rgba(44, 40, 37, 0.10)',
          borderBottom: '1px solid rgba(44, 40, 37, 0.10)',
          backgroundColor: 'rgba(44, 40, 37, 0.03)',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          paddingTop: '18px',
          paddingBottom: '18px',
          paddingLeft: '40px',
          paddingRight: '40px'
        }}
      >
        {/* Left zone */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flexShrink: 0 }}>
          <span
            style={{
              fontSize: '10px',
              fontWeight: 500,
              color: 'rgba(44, 40, 37, 0.40)',
              textTransform: 'uppercase',
              letterSpacing: '0.14em'
            }}
          >
            Our proof of concept
          </span>
          <span
            style={{
              fontSize: '26px',
              fontWeight: 700,
              color: '#FF385C',
              letterSpacing: '-0.02em',
              lineHeight: '1'
            }}
          >
            Airbnb
          </span>
        </div>

        {/* Vertical divider */}
        <div
          style={{
            width: '1px',
            height: '36px',
            backgroundColor: 'rgba(44, 40, 37, 0.13)',
            marginLeft: '32px',
            marginRight: '32px',
            flexShrink: 0
          }}
        />

        {/* Right zone — three descriptors */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          {[
            'Largest P2P platform in Europe',
            'Most contested by cities',
            'Widest gap between promise and reality'
          ].map((label, i, arr) => (
            <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: 'rgba(44, 40, 37, 0.55)',
                  lineHeight: '1.4'
                }}
              >
                {label}
              </span>
              {i < arr.length - 1 && (
                <span
                  style={{
                    width: '3px',
                    height: '3px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(44, 40, 37, 0.22)',
                    display: 'inline-block',
                    flexShrink: 0
                  }}
                />
              )}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
