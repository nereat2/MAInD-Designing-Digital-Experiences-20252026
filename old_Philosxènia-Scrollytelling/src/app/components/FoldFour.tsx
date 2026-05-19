export default function FoldFour() {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: '#F4F3F1',
        paddingTop: '100px',
        paddingBottom: '120px',
        fontFamily: 'Figtree, sans-serif'
      }}
    >
      <div className="max-w-[900px] mx-auto px-8">
        {/* FOLD 4A - MARCO (HOST) */}
        <div className="mb-20">
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
            TWO SIDES OF THE SAME STAY — HOST
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: '46px',
              fontWeight: 700,
              lineHeight: '1.08',
              color: '#2C2825',
              letterSpacing: '-0.025em',
              maxWidth: '20ch',
              marginBottom: '40px'
            }}
          >
            The host wears every hat. And none of them fit.
          </h2>

          {/* Two-column layout: narrative left, evidence right */}
          <div className="grid grid-cols-[52fr_44fr] gap-12">
            {/* Left column - Narrative */}
            <div>
              {/* Quote block with coral accent */}
              <div className="flex gap-5 mb-8">
                <div
                  style={{
                    width: '3px',
                    backgroundColor: '#FF385C',
                    flexShrink: 0
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: '19px',
                      fontWeight: 400,
                      fontStyle: 'italic',
                      lineHeight: '1.6',
                      color: 'rgba(44, 40, 37, 0.88)',
                      marginBottom: '14px'
                    }}
                  >
                    "I don't just want to rent my place. I want it to stand out, perform well, and reflect the way I experience this place."
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 400,
                      color: 'rgba(44, 40, 37, 0.40)',
                      letterSpacing: '0.02em'
                    }}
                  >
                    — Marco, 35. Evolving host.
                  </div>
                </div>
              </div>

              {/* Body copy */}
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.75',
                  color: 'rgba(44, 40, 37, 0.68)',
                  maxWidth: '52ch'
                }}
              >
                Marco has deep local knowledge he's never been able to formalise. He manages his property remotely, depends on the algorithm for visibility, and spends more time on operations than on the thing that made him want to host in the first place. His listing looks like everyone else's — because the tools he has don't know how to capture who he actually is.
              </p>
            </div>

            {/* Right column - Evidence */}
            <div>
              {/* Phone mockup frame */}
              <div
                style={{
                  borderRadius: '28px',
                  border: '8px solid #1A1917',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  aspectRatio: '9/19.5'
                }}
              >
                {/* Mockup content - Airbnb listing creation flow */}
                <div className="w-full h-full flex flex-col" style={{ backgroundColor: '#FFFFFF' }}>
                  {/* Header */}
                  <div style={{ padding: '20px 16px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                    <div style={{ fontSize: '11px', color: '#717171', marginBottom: '8px' }}>Step 1 of 40+</div>
                    <div style={{ fontSize: '18px', fontWeight: 600, color: '#222222' }}>What would you like to host?</div>
                  </div>

                  {/* Options */}
                  <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div
                      style={{
                        border: '1px solid #DDDDDD',
                        borderRadius: '12px',
                        padding: '16px',
                        backgroundColor: '#FFFFFF'
                      }}
                    >
                      <div style={{ fontSize: '15px', fontWeight: 600, color: '#222222', marginBottom: '4px' }}>
                        An entire place
                      </div>
                      <div style={{ fontSize: '13px', color: '#717171' }}>
                        Guests have the whole place
                      </div>
                    </div>
                    <div
                      style={{
                        border: '1px solid #DDDDDD',
                        borderRadius: '12px',
                        padding: '16px',
                        backgroundColor: '#FFFFFF'
                      }}
                    >
                      <div style={{ fontSize: '15px', fontWeight: 600, color: '#222222', marginBottom: '4px' }}>
                        A private room
                      </div>
                      <div style={{ fontSize: '13px', color: '#717171' }}>
                        Guests sleep in a private room
                      </div>
                    </div>
                    <div
                      style={{
                        border: '1px solid #DDDDDD',
                        borderRadius: '12px',
                        padding: '16px',
                        backgroundColor: '#FFFFFF'
                      }}
                    >
                      <div style={{ fontSize: '15px', fontWeight: 600, color: '#222222', marginBottom: '4px' }}>
                        A shared room
                      </div>
                      <div style={{ fontSize: '13px', color: '#717171' }}>
                        Guests sleep in a shared space
                      </div>
                    </div>
                  </div>

                  {/* Continue indicator */}
                  <div style={{ marginTop: 'auto', padding: '16px', opacity: 0.4 }}>
                    <div style={{ fontSize: '12px', color: '#717171', textAlign: 'center' }}>
                      ... and 39+ more steps
                    </div>
                  </div>
                </div>
              </div>

              {/* Callout label */}
              <div style={{ marginTop: '14px' }}>
                <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(44, 40, 37, 0.40)' }}>
                  The current experience:{' '}
                </span>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(44, 40, 37, 0.75)' }}>
                  40+ steps to publish a listing.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(44, 40, 37, 0.08)',
            margin: '80px 0'
          }}
        />

        {/* FOLD 4B - SOFIA (GUEST) */}
        <div>
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
            TWO SIDES OF THE SAME STAY — GUEST
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: '46px',
              fontWeight: 700,
              lineHeight: '1.08',
              color: '#2C2825',
              letterSpacing: '-0.025em',
              maxWidth: '20ch',
              marginBottom: '40px'
            }}
          >
            The guest knows the feeling.<br />The platform doesn't speak that language.
          </h2>

          {/* Two-column layout: evidence left, narrative right (swapped) */}
          <div className="grid grid-cols-[44fr_52fr] gap-12">
            {/* Left column - Evidence */}
            <div>
              {/* Phone mockup frame */}
              <div
                style={{
                  borderRadius: '28px',
                  border: '8px solid #1A1917',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  aspectRatio: '9/19.5'
                }}
              >
                {/* Mockup content - Airbnb search interface */}
                <div className="w-full h-full flex flex-col" style={{ backgroundColor: '#F7F7F7' }}>
                  {/* Search bar */}
                  <div style={{ padding: '16px', backgroundColor: '#FFFFFF', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                    <div
                      style={{
                        backgroundColor: '#F7F7F7',
                        borderRadius: '24px',
                        padding: '12px 16px',
                        fontSize: '14px',
                        color: '#717171'
                      }}
                    >
                      Where to? · Dates · Guests
                    </div>
                  </div>

                  {/* Category tabs */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '12px',
                      padding: '16px',
                      backgroundColor: '#FFFFFF',
                      overflowX: 'auto',
                      borderBottom: '1px solid rgba(0,0,0,0.08)'
                    }}
                  >
                    {['Beachfront', 'Cabins', 'Trending', 'Luxe', 'Amazing'].map((cat) => (
                      <div
                        key={cat}
                        style={{
                          fontSize: '12px',
                          color: '#717171',
                          whiteSpace: 'nowrap',
                          padding: '8px 12px',
                          border: '1px solid #DDDDDD',
                          borderRadius: '20px',
                          backgroundColor: '#FFFFFF'
                        }}
                      >
                        {cat}
                      </div>
                    ))}
                  </div>

                  {/* Listings grid */}
                  <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i}>
                        <div
                          style={{
                            width: '100%',
                            aspectRatio: '1',
                            backgroundColor: '#DDDDDD',
                            borderRadius: '12px',
                            marginBottom: '8px'
                          }}
                        />
                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#222222', marginBottom: '2px' }}>
                          ${50 + i * 20}/night
                        </div>
                        <div style={{ fontSize: '12px', color: '#717171' }}>★ 4.{90 + i}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Callout label */}
              <div style={{ marginTop: '14px' }}>
                <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(44, 40, 37, 0.40)' }}>
                  The current experience:{' '}
                </span>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(44, 40, 37, 0.75)' }}>
                  Location, dates, price. That's it.
                </span>
              </div>
            </div>

            {/* Right column - Narrative */}
            <div>
              {/* Quote block with blue accent */}
              <div className="flex gap-5 mb-8">
                <div
                  style={{
                    width: '3px',
                    backgroundColor: '#8B9ED4',
                    flexShrink: 0
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: '19px',
                      fontWeight: 400,
                      fontStyle: 'italic',
                      lineHeight: '1.6',
                      color: 'rgba(44, 40, 37, 0.88)',
                      marginBottom: '14px'
                    }}
                  >
                    "I want to feel like a local, not a tourist. But every platform treats me like a booking."
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 400,
                      color: 'rgba(44, 40, 37, 0.40)',
                      letterSpacing: '0.02em'
                    }}
                  >
                    — Sofia, 28. Frequent traveller.
                  </div>
                </div>
              </div>

              {/* Body copy */}
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.75',
                  color: 'rgba(44, 40, 37, 0.68)',
                  maxWidth: '52ch',
                  marginBottom: '28px'
                }}
              >
                Sofia travels for experiences, not accommodation. But every search interface gives her the same options: where, when, how many beds, how much. There's no field for what she actually wants — the neighbourhood that feels right, the host who knows where to eat on a Tuesday night, the stay that connects her to the place rather than just putting her in it.
              </p>

              {/* Data callouts */}
              <div>
                {/* Callout 1 */}
                <div style={{ marginBottom: '16px' }}>
                  <span style={{ fontSize: '32px', fontWeight: 700, color: '#2C2825', letterSpacing: '-0.02em' }}>
                    22%
                  </span>
                  <span
                    style={{
                      fontSize: '14px',
                      fontWeight: 400,
                      color: 'rgba(44, 40, 37, 0.60)',
                      marginLeft: '10px'
                    }}
                  >
                    of Airbnb guests travel specifically for a local experience.
                  </span>
                </div>

                {/* Divider */}
                <div
                  style={{
                    width: '20px',
                    height: '1px',
                    backgroundColor: 'rgba(44, 40, 37, 0.15)',
                    marginBottom: '16px'
                  }}
                />

                {/* Callout 2 */}
                <div style={{ marginBottom: '10px' }}>
                  <span style={{ fontSize: '32px', fontWeight: 700, color: '#2C2825', letterSpacing: '-0.02em' }}>
                    48%
                  </span>
                  <span
                    style={{
                      fontSize: '14px',
                      fontWeight: 400,
                      color: 'rgba(44, 40, 37, 0.60)',
                      marginLeft: '10px'
                    }}
                  >
                    visited places they would never have found without a host recommendation.
                  </span>
                </div>

                {/* Source */}
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 400,
                    color: 'rgba(44, 40, 37, 0.32)',
                    letterSpacing: '0.06em'
                  }}
                >
                  Airbnb UK, 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
