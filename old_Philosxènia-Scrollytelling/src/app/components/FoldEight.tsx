export default function FoldEight() {
  return (
    <section className="w-full" style={{ fontFamily: 'Figtree, sans-serif' }}>
      {/* FOLD 8A - XENY / HOST */}
      <div
        className="relative"
        style={{
          backgroundColor: '#FFFAF8',
          paddingTop: '100px',
          paddingBottom: '80px'
        }}
      >
        {/* Cool ambient glow in top-left */}
        <div
          className="absolute top-0 left-0 pointer-events-none"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(200, 192, 240, 0.25) 0%, transparent 70%)',
            opacity: 1
          }}
        />

        <div className="relative max-w-[900px] mx-auto px-8">
          {/* Eyebrow */}
          <div
            style={{
              fontSize: '11px',
              fontWeight: 500,
              color: '#8B9ED4',
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              marginBottom: '20px'
            }}
          >
            XENY · WANDER · HOST
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: '46px',
              fontWeight: 700,
              lineHeight: '1.08',
              color: '#2C2825',
              letterSpacing: '-0.025em',
              marginBottom: '32px'
            }}
          >
            Your knowledge of this place, made shareable.
          </h2>

          {/* Body copy */}
          <div style={{ maxWidth: '54ch', marginBottom: '48px' }}>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '1.75',
                color: 'rgba(44, 40, 37, 0.68)'
              }}
            >
              The host knows which café opens early on weekdays, which street has the best light on a Sunday morning, which local bakery doesn't appear in any guide. That knowledge lives in their head and, without Xeny, dies there.
            </p>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '1.75',
                color: 'rgba(44, 40, 37, 0.68)',
                marginTop: '16px'
              }}
            >
              Xeny searches the territory around the listing — local POIs, walking routes, area context — and presents a starting point. The host reviews, adjusts, and adds what only they know: personal stories, favourite spots, the places that never make any list. The result is a guide that sounds like the host, not like TripAdvisor.
            </p>
          </div>

          {/* Two columns */}
          <div className="grid grid-cols-2 gap-14">
            {/* Left column - Steps */}
            <div>
              {/* Step 01 */}
              <div>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 300,
                    color: 'rgba(139, 158, 212, 0.70)',
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
                    marginTop: '8px'
                  }}
                >
                  Xeny does the groundwork.
                </div>
                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: 400,
                    lineHeight: '1.7',
                    color: 'rgba(44, 40, 37, 0.65)',
                    marginTop: '8px'
                  }}
                >
                  It pulls territory data around the listing — points of interest, walking distances, neighbourhood context — and builds a draft itinerary the host can react to rather than starting from scratch.
                </p>
              </div>

              <div
                style={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: 'rgba(44, 40, 37, 0.08)',
                  margin: '24px 0'
                }}
              />

              {/* Step 02 */}
              <div>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 300,
                    color: 'rgba(139, 158, 212, 0.70)',
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
                    marginTop: '8px'
                  }}
                >
                  The host adds what only they know.
                </div>
                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: 400,
                    lineHeight: '1.7',
                    color: 'rgba(44, 40, 37, 0.65)',
                    marginTop: '8px'
                  }}
                >
                  Personal stops, private stories, the things that aren't on any map. The host's voice is what turns a list of places into a guide worth following.
                </p>
              </div>
            </div>

            {/* Right column - Two tilted screens */}
            <div className="relative flex items-center justify-center gap-4" style={{ height: '500px' }}>
              {/* Screen 1 - tilted counterclockwise */}
              <div
                style={{
                  width: '210px',
                  borderRadius: '32px',
                  border: '8px solid #1A1917',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  aspectRatio: '9/19.5',
                  transform: 'rotate(-3deg)',
                  zIndex: 1
                }}
              >
                <div className="w-full h-full flex flex-col" style={{ padding: '16px' }}>
                  {/* Xeny orb */}
                  <div className="flex justify-center" style={{ marginBottom: '20px' }}>
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle at 30% 30%, #B8B0E8 0%, #D4A8C8 50%, #FFB8B8 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <div style={{ width: '8px', height: '16px', backgroundColor: 'white', borderRadius: '8px' }} />
                      <div style={{ width: '8px', height: '16px', backgroundColor: 'white', borderRadius: '8px' }} />
                    </div>
                  </div>

                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#222222', textAlign: 'center', marginBottom: '16px' }}>
                    Let me search about your neighbourhood
                  </div>

                  {/* Guide card */}
                  <div
                    style={{
                      backgroundColor: '#F7F7F7',
                      borderRadius: '12px',
                      padding: '12px',
                      marginBottom: '16px'
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: '60px',
                        backgroundColor: '#DDDDDD',
                        borderRadius: '8px',
                        marginBottom: '8px'
                      }}
                    />
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#222222', marginBottom: '4px' }}>
                      Zurich Guide
                    </div>
                    <div style={{ fontSize: '10px', color: '#717171' }}>
                      4 stops · ~30 min · 1.8 km
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: '11px',
                      color: '#717171',
                      textAlign: 'center',
                      marginBottom: '12px'
                    }}
                  >
                    I can customize this for you
                  </div>

                  {/* Input bar */}
                  <div
                    style={{
                      marginTop: 'auto',
                      backgroundColor: '#F7F7F7',
                      borderRadius: '20px',
                      padding: '10px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      border: '1px solid #DDDDDD'
                    }}
                  >
                    <div style={{ fontSize: '11px', color: '#999999', flex: 1 }}>
                      Voice or text
                    </div>
                  </div>
                </div>
              </div>

              {/* Screen 2 - tilted clockwise */}
              <div
                style={{
                  width: '210px',
                  borderRadius: '32px',
                  border: '8px solid #1A1917',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                  overflow: 'hidden',
                  backgroundColor: '#F7F7F7',
                  aspectRatio: '9/19.5',
                  transform: 'rotate(3deg)',
                  zIndex: 2
                }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center" style={{ padding: '20px' }}>
                  {/* Xeny orb with floating chips */}
                  <div className="relative" style={{ marginBottom: '32px' }}>
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle at 30% 30%, #B8B0E8 0%, #D4A8C8 50%, #FFB8B8 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      <div style={{ width: '10px', height: '18px', backgroundColor: 'white', borderRadius: '10px' }} />
                      <div style={{ width: '10px', height: '18px', backgroundColor: 'white', borderRadius: '10px' }} />
                    </div>

                    {/* Floating context chips */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '-15px',
                        left: '-30px',
                        backgroundColor: '#E8D9F0',
                        borderRadius: '16px',
                        padding: '4px 10px',
                        fontSize: '10px',
                        color: '#222222',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Searching
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        top: '5px',
                        right: '-35px',
                        backgroundColor: '#E8D9F0',
                        borderRadius: '16px',
                        padding: '4px 10px',
                        fontSize: '10px',
                        color: '#222222',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Personal
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-15px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#E8D9F0',
                        borderRadius: '16px',
                        padding: '4px 10px',
                        fontSize: '10px',
                        color: '#222222',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Lugano
                    </div>
                  </div>

                  {/* User message */}
                  <div
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      padding: '12px',
                      fontSize: '11px',
                      color: '#222222',
                      lineHeight: '1.5',
                      textAlign: 'center'
                    }}
                  >
                    Show me places that are emotionally meaningful, not just tourist spots
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          width: '100%',
          height: '1px',
          backgroundColor: 'rgba(0, 0, 0, 0.08)'
        }}
      />

      {/* FOLD 8B - XENY / GUEST (HERO - EMOTIONAL PEAK) */}
      <div
        className="relative"
        style={{
          backgroundColor: '#0D0C14',
          paddingTop: '100px',
          paddingBottom: '120px',
          overflow: 'hidden'
        }}
      >
        {/* Aurora gradient descending from top */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: '55%',
            background: 'linear-gradient(180deg, rgba(155, 143, 216, 0.6) 0%, rgba(232, 160, 184, 0.5) 35%, rgba(240, 184, 160, 0.4) 70%, transparent 100%)'
          }}
        />

        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            opacity: 0.15,
            mixBlendMode: 'overlay'
          }}
        />

        <div className="relative max-w-[1100px] mx-auto px-8">
          {/* Eyebrow */}
          <div
            style={{
              fontSize: '11px',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.55)',
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              marginBottom: '24px'
            }}
          >
            XENY · WANDER · GUEST
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: '56px',
              fontWeight: 700,
              lineHeight: '1.06',
              color: 'rgba(255, 255, 255, 0.90)',
              letterSpacing: '-0.03em',
              marginBottom: '32px'
            }}
          >
            The host isn't there.<br />But it feels like they are.
          </h2>

          {/* Body copy */}
          <p
            style={{
              fontSize: '17px',
              fontWeight: 400,
              lineHeight: '1.75',
              color: 'rgba(255, 255, 255, 0.65)',
              maxWidth: '52ch',
              marginBottom: '64px'
            }}
          >
            Once the guest arrives, the guidebook becomes a live companion. Not a static PDF. A location-aware experience that knows where they are, what's nearby, and what the host would say about it if they were walking alongside them.
          </p>

          {/* Five screen arc */}
          <div className="relative flex items-end justify-center gap-5" style={{ height: '550px', marginBottom: '32px' }}>
            {/* Screen 1 - Outer left */}
            <div
              style={{
                width: '175px',
                borderRadius: '32px',
                border: '8px solid #1A1917',
                boxShadow: '0 16px 48px rgba(0,0,0,0.35)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                aspectRatio: '9/19.5',
                position: 'relative',
                top: '80px',
                transform: 'rotate(-2deg)'
              }}
            >
              <div className="w-full h-full flex flex-col" style={{ padding: '16px' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#222222', marginBottom: '12px' }}>
                  Welcome to Zurich!
                </div>
                <div
                  style={{
                    backgroundColor: '#F7F7F7',
                    borderRadius: '12px',
                    padding: '12px',
                    marginBottom: '12px'
                  }}
                >
                  <div style={{ fontSize: '11px', fontWeight: 600, color: '#222222', marginBottom: '6px' }}>
                    Zurich Foodie Spot
                  </div>
                  <div style={{ fontSize: '10px', color: '#717171', marginBottom: '4px' }}>
                    12 places listed
                  </div>
                  <div style={{ fontSize: '10px', color: '#717171' }}>
                    41 min walk
                  </div>
                </div>
                <div style={{ fontSize: '10px', color: '#717171', lineHeight: '1.5' }}>
                  I've curated my favorite local spots for you to explore
                </div>
              </div>
            </div>

            {/* Screen 2 - Adjacent left */}
            <div
              style={{
                width: '210px',
                borderRadius: '32px',
                border: '8px solid #1A1917',
                boxShadow: '0 20px 56px rgba(0,0,0,0.6)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                aspectRatio: '9/19.5',
                position: 'relative',
                top: '40px',
                transform: 'rotate(-1deg)'
              }}
            >
              <div className="w-full h-full" style={{ backgroundColor: '#F0F0F0', position: 'relative' }}>
                {/* Map placeholder */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: '#E8E8E8'
                  }}
                />

                {/* Map pins */}
                <div style={{ position: 'absolute', top: '30%', left: '40%', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF385C' }} />
                <div style={{ position: 'absolute', top: '45%', left: '55%', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF385C' }} />
                <div style={{ position: 'absolute', top: '60%', left: '35%', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF385C' }} />

                {/* Current location dot */}
                <div
                  style={{
                    position: 'absolute',
                    top: '30%',
                    left: '40%',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: '#4A90E2',
                    border: '3px solid white'
                  }}
                />

                {/* Route line */}
                <svg
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%'
                  }}
                >
                  <path
                    d="M 80 150 Q 100 180, 115 220 Q 130 260, 70 300"
                    stroke="#8B9ED4"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
            </div>

            {/* Screen 3 - Centre (Hero) */}
            <div
              style={{
                width: '260px',
                borderRadius: '36px',
                border: '10px solid #1A1917',
                boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                aspectRatio: '9/19.5',
                position: 'relative',
                top: '0px',
                zIndex: 10
              }}
            >
              <div className="w-full h-full flex flex-col">
                {/* Playing banner */}
                <div
                  style={{
                    backgroundColor: '#FF385C',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <div style={{ fontSize: '11px', color: 'white', fontWeight: 600 }}>
                    ▶ Playing: Stop 1 — Café Borrone
                  </div>
                </div>

                {/* Map view */}
                <div
                  style={{
                    flex: 1,
                    backgroundColor: '#E8E8E8',
                    position: 'relative'
                  }}
                >
                  {/* YOU ARE HERE marker */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '35%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      backgroundColor: '#4A90E2',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '10px',
                      fontWeight: 600,
                      whiteSpace: 'nowrap'
                    }}
                  >
                    YOU ARE HERE
                  </div>

                  {/* Location pin */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '40%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: '24px'
                    }}
                  >
                    📍
                  </div>
                </div>

                {/* Host note card */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '16px',
                    borderTop: '1px solid #DDDDDD'
                  }}
                >
                  <div style={{ fontSize: '11px', fontWeight: 600, color: '#FF385C', marginBottom: '6px' }}>
                    Host's note:
                  </div>
                  <div style={{ fontSize: '12px', color: '#222222', lineHeight: '1.5', marginBottom: '12px' }}>
                    "The host's absolute favourite spot for a morning cappuccino and people watching."
                  </div>

                  {/* Route card */}
                  <div
                    style={{
                      backgroundColor: '#F7F7F7',
                      borderRadius: '10px',
                      padding: '10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 600, color: '#222222' }}>
                        Next: Local Bakery
                      </div>
                      <div style={{ fontSize: '10px', color: '#717171' }}>
                        5 min walk · 400m
                      </div>
                    </div>
                    <div style={{ fontSize: '18px' }}>→</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Screen 4 - Adjacent right */}
            <div
              style={{
                width: '210px',
                borderRadius: '32px',
                border: '8px solid #1A1917',
                boxShadow: '0 20px 56px rgba(0,0,0,0.6)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                aspectRatio: '9/19.5',
                position: 'relative',
                top: '40px',
                transform: 'rotate(1deg)'
              }}
            >
              <div className="w-full h-full flex flex-col" style={{ padding: '16px' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#222222', marginBottom: '4px' }}>
                  Based on where you are
                </div>
                <div style={{ fontSize: '10px', color: '#717171', marginBottom: '16px' }}>
                  Updated suggestion
                </div>

                <div
                  style={{
                    backgroundColor: '#FFF3EE',
                    border: '1px solid #FFD4B0',
                    borderRadius: '12px',
                    padding: '12px'
                  }}
                >
                  <div style={{ fontSize: '11px', fontWeight: 600, color: '#222222', marginBottom: '6px' }}>
                    🌅 Sunset viewpoint
                  </div>
                  <div style={{ fontSize: '10px', color: '#717171', lineHeight: '1.5', marginBottom: '8px' }}>
                    Golden hour is in 20 min — this spot has the best view in the area
                  </div>
                  <div style={{ fontSize: '10px', color: '#FF385C', fontWeight: 600 }}>
                    8 min walk from here
                  </div>
                </div>
              </div>
            </div>

            {/* Screen 5 - Outer right */}
            <div
              style={{
                width: '175px',
                borderRadius: '32px',
                border: '8px solid #1A1917',
                boxShadow: '0 16px 48px rgba(0,0,0,0.35)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                aspectRatio: '9/19.5',
                position: 'relative',
                top: '80px',
                transform: 'rotate(2deg)'
              }}
            >
              <div className="w-full h-full flex flex-col" style={{ padding: '16px' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#222222', marginBottom: '12px' }}>
                  Add your story
                </div>
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '1',
                    backgroundColor: '#F0F0F0',
                    borderRadius: '12px',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px'
                  }}
                >
                  📸
                </div>
                <div style={{ fontSize: '10px', color: '#717171', lineHeight: '1.5', marginBottom: '12px' }}>
                  Share your experience to help future guests
                </div>
                <div
                  style={{
                    backgroundColor: '#8B9ED4',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '20px',
                    textAlign: 'center',
                    fontSize: '11px',
                    fontWeight: 600
                  }}
                >
                  Upload photo
                </div>
              </div>
            </div>
          </div>

          {/* Moment labels below screens */}
          <div className="flex justify-center gap-16 mb-20">
            {['Activation', 'The map', 'Approaching', 'Context', 'Contribute'].map((label, i) => (
              <div key={label} className="flex flex-col items-center">
                <div
                  style={{
                    width: '1px',
                    height: '32px',
                    backgroundColor: 'rgba(255, 255, 255, 0.20)',
                    marginBottom: '12px'
                  }}
                />
                <div
                  style={{
                    fontSize: '10px',
                    fontWeight: 300,
                    color: 'rgba(255, 255, 255, 0.30)',
                    marginBottom: '4px'
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.70)'
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* "What it feels like" typographic moment */}
          <div className="text-center mb-16">
            <div
              style={{
                fontFamily: 'Gelasio, serif',
                fontSize: '38px',
                fontWeight: 500,
                lineHeight: '1.3',
                color: 'rgba(255, 255, 255, 0.88)',
                letterSpacing: '-0.01em',
                maxWidth: '20ch',
                margin: '0 auto',
                marginBottom: '16px'
              }}
            >
              A museum audio guide, but for an entire neighbourhood.
            </div>
            <div
              style={{
                fontSize: '18px',
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.50)',
                maxWidth: '36ch',
                margin: '0 auto'
              }}
            >
              Except the narrator is the person who actually lives there.
            </div>
          </div>

          {/* Data callout */}
          <div className="flex gap-4 max-w-[900px]">
            <div
              style={{
                width: '3px',
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                flexShrink: 0
              }}
            />
            <div>
              <div
                style={{
                  fontSize: '40px',
                  fontWeight: 700,
                  color: 'rgba(255, 255, 255, 0.95)',
                  letterSpacing: '-0.02em',
                  lineHeight: '1'
                }}
              >
                48%
              </div>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.65)',
                  maxWidth: '56ch',
                  marginTop: '8px'
                }}
              >
                of Airbnb guests visited places they would never have found without a host recommendation. Xeny makes that happen for every guest, every stay — whether the host is present or not.
              </p>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.28)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginTop: '10px'
                }}
              >
                Airbnb UK, 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
