export default function FoldSix() {
  return (
    <section className="w-full" style={{ fontFamily: 'Figtree, sans-serif' }}>
      {/* PART 1 - THE REVEAL (White background) */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          paddingTop: '120px',
          paddingBottom: '72px'
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
              marginBottom: '24px'
            }}
          >
            THE SOLUTION
          </div>

          {/* Headline - φιλοξενία in Gelica */}
          <h2
            style={{
              fontFamily: 'Gelasio, serif',
              fontSize: '88px',
              fontWeight: 700,
              color: '#2C2825',
              letterSpacing: '-0.02em',
              lineHeight: '1',
              marginBottom: '16px'
            }}
          >
            φιλοξενία
          </h2>

          {/* Sub-headline */}
          <div
            style={{
              fontFamily: 'Gelasio, serif',
              fontSize: '34px',
              fontWeight: 500,
              color: 'rgba(44, 40, 37, 0.55)',
              letterSpacing: '-0.01em',
              paddingLeft: '2ch',
              marginBottom: '28px'
            }}
          >
            — the love of strangers.
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '15px',
              fontWeight: 500,
              color: 'rgba(44, 40, 37, 0.50)',
              letterSpacing: '0.03em',
              marginBottom: '36px'
            }}
          >
            One concept. Two agents. One shared intelligence.
          </div>

          {/* Body copy */}
          <div style={{ maxWidth: '58ch' }}>
            <p
              style={{
                fontSize: '17px',
                fontWeight: 400,
                lineHeight: '1.75',
                color: 'rgba(44, 40, 37, 0.70)'
              }}
            >
              Philo and Xeny are named after the two halves of φιλοξενία — the ancient Greek word for the love of strangers. Philo, the love of, lives on the platform: helping hosts shape their listing identity and helping guests find the right stay. Xeny, the stranger, lives in the world: guiding guests through a place the way only a host who truly knows it can.
            </p>
            <p
              style={{
                fontSize: '17px',
                fontWeight: 500,
                lineHeight: '1.75',
                color: 'rgba(44, 40, 37, 0.85)',
                marginTop: '20px'
              }}
            >
              They share the same knowledge base. What one learns, the other uses.
            </p>
          </div>
        </div>
      </div>

      {/* PART 2 - AGENT CARDS (Gradient background) */}
      <div
        style={{
          background: 'linear-gradient(135deg, #FFD4B0 0%, #FFC4B0 50%, #FFB8C0 100%)',
          paddingTop: '80px',
          paddingBottom: '80px'
        }}
      >
        <div className="max-w-[900px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-6">
            {/* Philo Card */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: '0 24px 64px rgba(0,0,0,0.10)'
              }}
            >
              {/* Philo Orb with Eyes */}
              <div className="relative" style={{ width: '96px', height: '96px', marginBottom: '24px' }}>
                {/* Outer glow */}
                <div
                  className="absolute inset-0"
                  style={{
                    width: '136px',
                    height: '136px',
                    left: '-20px',
                    top: '-20px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 30% 30%, rgba(255, 176, 133, 0.3) 0%, rgba(255, 140, 122, 0.3) 45%, rgba(255, 255, 255, 0) 70%)',
                    filter: 'blur(12px)'
                  }}
                />
                {/* Main orb */}
                <div
                  className="relative"
                  style={{
                    width: '96px',
                    height: '96px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 30% 30%, #FFB085 0%, #FF8C7A 45%, rgba(255, 235, 230, 0.95) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  {/* Eyes */}
                  <div
                    style={{
                      width: '10px',
                      height: '20px',
                      backgroundColor: 'white',
                      borderRadius: '10px'
                    }}
                  />
                  <div
                    style={{
                      width: '10px',
                      height: '20px',
                      backgroundColor: 'white',
                      borderRadius: '10px'
                    }}
                  />
                </div>
              </div>

              {/* Card content */}
              <div
                style={{
                  fontFamily: 'Gelasio, serif',
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#2C2825'
                }}
              >
                Philo
              </div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#FF385C',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  marginTop: '4px'
                }}
              >
                Optimise
              </div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: 'rgba(44, 40, 37, 0.40)',
                  letterSpacing: '0.03em',
                  marginTop: '8px'
                }}
              >
                Browser-based · Host + Guest
              </div>
              <div
                style={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: 'rgba(44, 40, 37, 0.08)',
                  margin: '16px 0'
                }}
              />
              <p
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  lineHeight: '1.65',
                  color: 'rgba(44, 40, 37, 0.68)'
                }}
              >
                The intelligence layer inside the platform. Builds listings that sound like their host. Finds stays that feel like the guest.
              </p>
            </div>

            {/* Xeny Card */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: '0 24px 64px rgba(0,0,0,0.10)'
              }}
            >
              {/* Xeny Orb with Eyes */}
              <div className="relative" style={{ width: '96px', height: '96px', marginBottom: '24px' }}>
                {/* Outer glow */}
                <div
                  className="absolute inset-0"
                  style={{
                    width: '136px',
                    height: '136px',
                    left: '-20px',
                    top: '-20px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 30% 30%, rgba(184, 176, 232, 0.3) 0%, rgba(212, 168, 200, 0.3) 45%, rgba(255, 255, 255, 0) 70%)',
                    filter: 'blur(12px)'
                  }}
                />
                {/* Main orb */}
                <div
                  className="relative"
                  style={{
                    width: '96px',
                    height: '96px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 30% 30%, #B8B0E8 0%, #D4A8C8 45%, #FFB8B8 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  {/* Eyes */}
                  <div
                    style={{
                      width: '10px',
                      height: '20px',
                      backgroundColor: 'white',
                      borderRadius: '10px'
                    }}
                  />
                  <div
                    style={{
                      width: '10px',
                      height: '20px',
                      backgroundColor: 'white',
                      borderRadius: '10px'
                    }}
                  />
                </div>
              </div>

              {/* Card content */}
              <div
                style={{
                  fontFamily: 'Gelasio, serif',
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#2C2825'
                }}
              >
                Xeny
              </div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#8B9ED4',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  marginTop: '4px'
                }}
              >
                Wander
              </div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: 'rgba(44, 40, 37, 0.40)',
                  letterSpacing: '0.03em',
                  marginTop: '8px'
                }}
              >
                Mobile app · Host + Guest
              </div>
              <div
                style={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: 'rgba(44, 40, 37, 0.08)',
                  margin: '16px 0'
                }}
              />
              <p
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  lineHeight: '1.65',
                  color: 'rgba(44, 40, 37, 0.68)'
                }}
              >
                The intelligence layer in the world. Turns local knowledge into a living guide. Walks the guest through a place like a local would.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PART 3 - SHARED KNOWLEDGE BASE (Warm off-white) */}
      <div
        style={{
          backgroundColor: '#F4F3F1',
          paddingTop: '80px',
          paddingBottom: '72px'
        }}
      >
        <div className="max-w-[900px] mx-auto px-8">
          {/* Section label */}
          <div
            style={{
              fontSize: '10px',
              fontWeight: 500,
              color: 'rgba(44, 40, 37, 0.30)',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              marginBottom: '8px'
            }}
          >
            THE SHARED KNOWLEDGE BASE
          </div>

          {/* Intro line */}
          <p
            style={{
              fontSize: '17px',
              fontWeight: 400,
              color: 'rgba(44, 40, 37, 0.65)',
              lineHeight: '1.6',
              marginBottom: '40px'
            }}
          >
            Both agents draw from the same three layers of intelligence.
          </p>

          {/* Three knowledge layer cards */}
          <div className="grid grid-cols-3 gap-4 mb-18">
            {/* Location Layer */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.07)',
                borderRadius: '16px',
                padding: '28px'
              }}
            >
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#FF8C7A'
                }}
              />
              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#2C2825',
                  marginTop: '12px'
                }}
              >
                Location layer
              </div>
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  color: 'rgba(44, 40, 37, 0.65)',
                  marginTop: '8px'
                }}
              >
                The spatial intelligence that makes the experience feel physically real.
              </p>
              <div
                style={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: 'rgba(0, 0, 0, 0.06)',
                  marginTop: '16px',
                  marginBottom: '14px'
                }}
              />
              <div className="flex flex-wrap gap-1.5">
                {['POI database', 'area context', 'routing data', 'distance + travel time', 'spatial sequences'].map(
                  (tag) => (
                    <div
                      key={tag}
                      style={{
                        backgroundColor: '#F0EFED',
                        borderRadius: '20px',
                        padding: '4px 10px',
                        fontSize: '11px',
                        fontWeight: 400,
                        color: 'rgba(44, 40, 37, 0.55)'
                      }}
                    >
                      {tag}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* User Layer */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.07)',
                borderRadius: '16px',
                padding: '28px'
              }}
            >
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#8B9ED4'
                }}
              />
              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#2C2825',
                  marginTop: '12px'
                }}
              >
                User layer
              </div>
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  color: 'rgba(44, 40, 37, 0.65)',
                  marginTop: '8px'
                }}
              >
                The spatial intelligence that makes the experience feel physically real.
              </p>
              <div
                style={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: 'rgba(0, 0, 0, 0.06)',
                  marginTop: '16px',
                  marginBottom: '14px'
                }}
              />
              <div className="flex flex-wrap gap-1.5">
                {['host stories + tone', 'guest preferences', 'dialogue memory', 'user context', 'feedback loops'].map(
                  (tag) => (
                    <div
                      key={tag}
                      style={{
                        backgroundColor: '#F0EFED',
                        borderRadius: '20px',
                        padding: '4px 10px',
                        fontSize: '11px',
                        fontWeight: 400,
                        color: 'rgba(44, 40, 37, 0.55)'
                      }}
                    >
                      {tag}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Market Layer */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.07)',
                borderRadius: '16px',
                padding: '28px'
              }}
            >
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#88C4A8'
                }}
              />
              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#2C2825',
                  marginTop: '12px'
                }}
              >
                Market layer
              </div>
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  color: 'rgba(44, 40, 37, 0.65)',
                  marginTop: '8px'
                }}
              >
                The spatial intelligence that makes the experience feel physically real.
              </p>
              <div
                style={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: 'rgba(0, 0, 0, 0.06)',
                  marginTop: '16px',
                  marginBottom: '14px'
                }}
              />
              <div className="flex flex-wrap gap-1.5">
                {['demand data', 'competitor listings', 'pricing patterns', 'guest segments', 'supply context'].map(
                  (tag) => (
                    <div
                      key={tag}
                      style={{
                        backgroundColor: '#F0EFED',
                        borderRadius: '20px',
                        padding: '4px 10px',
                        fontSize: '11px',
                        fontWeight: 400,
                        color: 'rgba(44, 40, 37, 0.55)'
                      }}
                    >
                      {tag}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PART 4 - EXPERIENCE PILLARS */}
      <div
        style={{
          backgroundColor: '#F4F3F1',
          paddingBottom: '80px'
        }}
      >
        <div className="max-w-[900px] mx-auto px-8">
          {/* Section label */}
          <div
            style={{
              fontSize: '10px',
              fontWeight: 500,
              color: 'rgba(44, 40, 37, 0.30)',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              marginBottom: '8px'
            }}
          >
            WHAT MAKES IT DIFFERENT
          </div>

          {/* Intro line */}
          <p
            style={{
              fontSize: '17px',
              fontWeight: 400,
              color: 'rgba(44, 40, 37, 0.65)',
              lineHeight: '1.6',
              marginBottom: '40px'
            }}
          >
            Three things that no platform feature, chatbot, or filter system delivers.
          </p>

          {/* Three pillars */}
          <div className="grid grid-cols-3 gap-4 mb-20">
            {/* Pillar 1 */}
            <div>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 300,
                  color: 'rgba(44, 40, 37, 0.25)',
                  letterSpacing: '0.1em'
                }}
              >
                01
              </div>
              <div
                style={{
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#2C2825',
                  marginTop: '10px'
                }}
              >
                Conversation-driven
              </div>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '1.7',
                  color: 'rgba(44, 40, 37, 0.62)',
                  marginTop: '10px'
                }}
              >
                The host's identity is captured through dialogue, not forms. Voice or text — no dropdowns, no templates. The agent asks, listens, and builds.
              </p>
            </div>

            {/* Pillar 2 */}
            <div>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 300,
                  color: 'rgba(44, 40, 37, 0.25)',
                  letterSpacing: '0.1em'
                }}
              >
                02
              </div>
              <div
                style={{
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#2C2825',
                  marginTop: '10px'
                }}
              >
                Territory-rooted
              </div>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '1.7',
                  color: 'rgba(44, 40, 37, 0.62)',
                  marginTop: '10px'
                }}
              >
                Every recommendation is grounded in real spatial and local data. Not generic suggestions — intelligence that knows the specific place, its context, and what makes it different from everywhere else.
              </p>
            </div>

            {/* Pillar 3 */}
            <div>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 300,
                  color: 'rgba(44, 40, 37, 0.25)',
                  letterSpacing: '0.1em'
                }}
              >
                03
              </div>
              <div
                style={{
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#2C2825',
                  marginTop: '10px'
                }}
              >
                Personally matched
              </div>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '1.7',
                  color: 'rgba(44, 40, 37, 0.62)',
                  marginTop: '10px'
                }}
              >
                The guest's personality and desires shape what surfaces — not their budget. The right stay finds the right person because the system understands both.
              </p>
            </div>
          </div>

          {/* TRANSITION LINE */}
          <div
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: 'rgba(44, 40, 37, 0.10)',
              marginBottom: '48px'
            }}
          />

          <div
            style={{
              fontSize: '26px',
              fontWeight: 700,
              color: '#2C2825',
              letterSpacing: '-0.02em',
              marginBottom: '20px'
            }}
          >
            Here's what they actually do.
          </div>

          <div className="flex items-center gap-4">
            <div
              style={{
                fontSize: '12px',
                fontWeight: 500,
                color: '#FF385C',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              Philo →
            </div>
            <div
              style={{
                fontSize: '12px',
                fontWeight: 500,
                color: '#8B9ED4',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              Xeny →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
