export default function FoldFive() {
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
          THE OPPORTUNITY
        </div>

        {/* Headline */}
        <h2
          style={{
            fontSize: '42px',
            fontWeight: 700,
            lineHeight: '1.1',
            color: '#2C2825',
            letterSpacing: '-0.025em',
            maxWidth: '26ch',
            marginBottom: '72px'
          }}
        >
          A $36 billion European market, growing at 11% a year. Still waiting for the layer that makes it human.
        </h2>

        {/* BLOCK 1 - THE MARKET */}
        <div style={{ marginBottom: '64px' }}>
          {/* Block label */}
          <div>
            <div
              style={{
                fontSize: '10px',
                fontWeight: 500,
                color: 'rgba(44, 40, 37, 0.30)',
                textTransform: 'uppercase',
                letterSpacing: '0.18em'
              }}
            >
              THE MARKET
            </div>
            <div
              style={{
                width: '100%',
                height: '1px',
                backgroundColor: 'rgba(44, 40, 37, 0.10)',
                marginTop: '10px',
                marginBottom: '24px'
              }}
            />
          </div>

          {/* Two-column layout: body left, data right */}
          <div className="grid grid-cols-[52fr_44fr] gap-12">
            {/* Left column - Body copy */}
            <div>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.75',
                  color: 'rgba(44, 40, 37, 0.68)',
                  maxWidth: '52ch'
                }}
              >
                The European vacation rental market is worth $36 billion in 2025 and projected to reach $81 billion by 2030. 95% of travellers say personalised recommendations based on their interests would make them more likely to book a stay.
              </p>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.75',
                  color: 'rgba(44, 40, 37, 0.68)',
                  maxWidth: '52ch',
                  marginTop: '16px'
                }}
              >
                The demand is documented. The infrastructure to serve it at the identity level doesn't exist yet.
              </p>
            </div>

            {/* Right column - Data callouts */}
            <div className="relative pl-6">
              {/* Vertical rule */}
              <div
                className="absolute left-0 top-0 bottom-0"
                style={{
                  width: '1px',
                  backgroundColor: 'rgba(44, 40, 37, 0.10)'
                }}
              />

              <div className="flex flex-col gap-6">
                {/* Callout 1 */}
                <div>
                  <div
                    style={{
                      fontSize: '36px',
                      fontWeight: 700,
                      color: '#2C2825',
                      letterSpacing: '-0.03em',
                      lineHeight: '1'
                    }}
                  >
                    $36bn
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 400,
                      color: 'rgba(44, 40, 37, 0.50)',
                      marginTop: '4px'
                    }}
                  >
                    European STR market, 2025
                  </div>
                </div>

                {/* Callout 2 */}
                <div>
                  <div
                    style={{
                      fontSize: '36px',
                      fontWeight: 700,
                      color: '#2C2825',
                      letterSpacing: '-0.03em',
                      lineHeight: '1'
                    }}
                  >
                    $81bn
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 400,
                      color: 'rgba(44, 40, 37, 0.50)',
                      marginTop: '4px'
                    }}
                  >
                    Projected by 2030
                  </div>
                </div>

                {/* Callout 3 - Accent color */}
                <div>
                  <div
                    style={{
                      fontSize: '36px',
                      fontWeight: 700,
                      color: '#FF385C',
                      letterSpacing: '-0.03em',
                      lineHeight: '1'
                    }}
                  >
                    95%
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 400,
                      color: 'rgba(44, 40, 37, 0.50)',
                      marginTop: '4px'
                    }}
                  >
                    Travellers want personalised recommendations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 2 - THE MOMENT */}
        <div style={{ marginBottom: '64px' }}>
          {/* Block label */}
          <div>
            <div
              style={{
                fontSize: '10px',
                fontWeight: 500,
                color: 'rgba(44, 40, 37, 0.30)',
                textTransform: 'uppercase',
                letterSpacing: '0.18em'
              }}
            >
              THE MOMENT
            </div>
            <div
              style={{
                width: '100%',
                height: '1px',
                backgroundColor: 'rgba(44, 40, 37, 0.10)',
                marginTop: '10px',
                marginBottom: '24px'
              }}
            />
          </div>

          {/* Two-column layout: data left, body right (swapped) */}
          <div className="grid grid-cols-[44fr_52fr] gap-12">
            {/* Left column - Large data callout */}
            <div>
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#2C2825',
                  letterSpacing: '-0.04em',
                  lineHeight: '1'
                }}
              >
                $2–4tn
              </div>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 400,
                  color: 'rgba(44, 40, 37, 0.50)',
                  maxWidth: '22ch',
                  lineHeight: '1.5',
                  marginTop: '8px'
                }}
              >
                AI value potential in travel & hospitality by 2030
              </div>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 400,
                  color: 'rgba(44, 40, 37, 0.28)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginTop: '10px'
                }}
              >
                McKinsey
              </div>
            </div>

            {/* Right column - Body copy */}
            <div>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.75',
                  color: 'rgba(44, 40, 37, 0.68)',
                  maxWidth: '52ch'
                }}
              >
                Airbnb is already building AI into the platform — conversational search, AI-powered listings, automated support. But it is building from the top down: optimising for the platform's metrics, not for the host's voice or the guest's actual desire.
              </p>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.9',
                  color: 'rgba(44, 40, 37, 0.68)',
                  maxWidth: '52ch',
                  marginTop: '16px'
                }}
              >
                The intelligence layer at the human level hasn't been built.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 3 - THE GAP */}
        <div style={{ marginBottom: '80px' }}>
          {/* Block label */}
          <div>
            <div
              style={{
                fontSize: '10px',
                fontWeight: 500,
                color: 'rgba(44, 40, 37, 0.30)',
                textTransform: 'uppercase',
                letterSpacing: '0.18em'
              }}
            >
              THE GAP NOBODY IS FILLING
            </div>
            <div
              style={{
                width: '100%',
                height: '1px',
                backgroundColor: 'rgba(44, 40, 37, 0.10)',
                marginTop: '10px',
                marginBottom: '24px'
              }}
            />
          </div>

          {/* Full-width body copy */}
          <div>
            <p
              style={{
                fontSize: '17px',
                fontWeight: 400,
                lineHeight: '1.75',
                color: 'rgba(44, 40, 37, 0.68)',
                maxWidth: '72ch'
              }}
            >
              Every existing AI tool does one thing — pricing, messaging, or photo ranking. None of them connect territory intelligence, host identity, and guest personality into a single continuous experience.
            </p>
            <p
              style={{
                fontSize: '17px',
                fontWeight: 600,
                lineHeight: '1.75',
                color: 'rgba(44, 40, 37, 0.88)',
                maxWidth: '72ch',
                marginTop: '16px'
              }}
            >
              That is what Philo & Xeny do. And unlike a platform feature, they sit above any single platform — making the solution expandable, transferable, and genuinely defensible.
            </p>
          </div>
        </div>

        {/* CLOSING LINE */}
        <div>
          {/* Horizontal rule */}
          <div
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: 'rgba(44, 40, 37, 0.12)',
              marginBottom: '48px'
            }}
          />

          {/* Closing statement */}
          <div
            style={{
              fontSize: '30px',
              fontWeight: 700,
              lineHeight: '1.2',
              color: '#2C2825',
              letterSpacing: '-0.02em',
              maxWidth: '24ch',
              marginBottom: '24px'
            }}
          >
            The idea was never wrong. The execution forgot the humans. We're fixing that.
          </div>

          {/* φιλοξενία hint */}
          <div className="flex items-center gap-3">
            <div
              style={{
                width: '24px',
                height: '1px',
                backgroundColor: '#FF385C'
              }}
            />
            <div
              style={{
                fontSize: '12px',
                fontWeight: 400,
                color: 'rgba(255, 56, 92, 0.70)',
                letterSpacing: '0.04em'
              }}
            >
              φιλοξενία
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
