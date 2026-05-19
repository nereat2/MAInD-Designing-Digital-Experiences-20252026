import { ChevronRight } from 'lucide-react';

export default function FoldSeven() {
  return (
    <section
      className="relative w-full"
      style={{
        backgroundColor: '#FFFAF8',
        fontFamily: 'Figtree, sans-serif'
      }}
    >
      {/* Ambient glow in top-right */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255, 212, 176, 0.4) 0%, transparent 70%)',
          opacity: 1
        }}
      />

      {/* FOLD 7A - PHILO / HOST */}
      <div className="relative" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
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
            PHILO · OPTIMISE · HOST
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: '46px',
              fontWeight: 700,
              lineHeight: '1.08',
              color: '#2C2825',
              letterSpacing: '-0.025em',
              marginBottom: '28px'
            }}
          >
            Your listing, in your voice.
          </h2>

          {/* From → To block */}
          <div style={{ marginBottom: '56px' }}>
            <div
              style={{
                fontSize: '15px',
                fontWeight: 400,
                lineHeight: '1.6',
                color: 'rgba(44, 40, 37, 0.45)'
              }}
            >
              From 40+ structured steps that strip away personality
            </div>
            <div className="flex items-center gap-2" style={{ margin: '8px 0' }}>
              <div
                style={{
                  width: '32px',
                  height: '1px',
                  backgroundColor: 'rgba(44, 40, 37, 0.20)'
                }}
              />
              <ChevronRight size={14} color="#FF385C" strokeWidth={2} />
            </div>
            <div
              style={{
                fontSize: '15px',
                fontWeight: 500,
                lineHeight: '1.6',
                color: 'rgba(44, 40, 37, 0.85)'
              }}
            >
              to a conversation that captures it.
            </div>
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
                    color: 'rgba(255, 56, 92, 0.60)',
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
                  The host talks.
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
                  Philo asks open questions and listens — what kind of place is this, what makes it different, how does the host experience the neighbourhood. Voice or text, no forms, no dropdowns.
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
                    color: 'rgba(255, 56, 92, 0.60)',
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
                  The territory thinks.
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
                  Philo cross-references local POI data and market signals — what the area offers, how comparable listings are positioned, what guests in this location actually search for. The listing is shaped by context, not just content.
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

              {/* Step 03 */}
              <div>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 300,
                    color: 'rgba(255, 56, 92, 0.60)',
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
                    marginTop: '8px'
                  }}
                >
                  The listing builds live.
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
                  The host watches their listing take shape in real time and can adjust anything in conversation — one message to change the tone, add a detail, reframe a section. The result sounds like them, not like a template.
                </p>
              </div>

              {/* Feature callout */}
              <div
                style={{
                  backgroundColor: '#FFF3EE',
                  borderRadius: '12px',
                  padding: '20px 24px',
                  marginTop: '32px'
                }}
              >
                <div
                  style={{
                    fontSize: '10px',
                    fontWeight: 500,
                    color: '#FF385C',
                    textTransform: 'uppercase',
                    letterSpacing: '0.16em',
                    marginBottom: '8px'
                  }}
                >
                  VOICE + TEXT INPUT
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '1.65',
                    color: 'rgba(44, 40, 37, 0.70)'
                  }}
                >
                  The host describes their place the way they'd tell a friend about it. Philo translates that into a listing that performs without losing the person behind it.
                </p>
              </div>
            </div>

            {/* Right column - Screens */}
            <div className="relative flex flex-col items-center gap-6">
              {/* Screen 1 - Philo intro */}
              <div
                style={{
                  width: '200px',
                  borderRadius: '32px',
                  border: '8px solid #1A1917',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  aspectRatio: '9/19.5'
                }}
              >
                <div className="w-full h-full flex flex-col">
                  {/* Aurora gradient top */}
                  <div
                    style={{
                      height: '120px',
                      background: 'linear-gradient(180deg, #FFB085 0%, #FF8C7A 50%, rgba(255,255,255,0.95) 100%)'
                    }}
                  />

                  {/* Content */}
                  <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* Philo orb */}
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle at 30% 30%, #FFB085 0%, #FF8C7A 50%, rgba(255, 235, 230, 0.95) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        marginTop: '-32px',
                        marginBottom: '16px'
                      }}
                    >
                      <div style={{ width: '8px', height: '16px', backgroundColor: 'white', borderRadius: '8px' }} />
                      <div style={{ width: '8px', height: '16px', backgroundColor: 'white', borderRadius: '8px' }} />
                    </div>

                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#222222', textAlign: 'center', marginBottom: '8px' }}>
                      Hi! I'm Philo
                    </div>
                    <div style={{ fontSize: '12px', color: '#717171', textAlign: 'center', marginBottom: '20px' }}>
                      your listing co-pilot
                    </div>

                    <div
                      style={{
                        marginTop: 'auto',
                        width: '100%',
                        backgroundColor: '#FF385C',
                        color: 'white',
                        padding: '12px',
                        borderRadius: '24px',
                        textAlign: 'center',
                        fontSize: '14px',
                        fontWeight: 600
                      }}
                    >
                      Let's go
                    </div>
                  </div>
                </div>
              </div>

              {/* Screen 2 - Conversation (offset right) */}
              <div
                style={{
                  width: '200px',
                  borderRadius: '32px',
                  border: '8px solid #1A1917',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                  overflow: 'hidden',
                  backgroundColor: '#F7F7F7',
                  aspectRatio: '9/19.5',
                  marginLeft: '20px'
                }}
              >
                <div className="w-full h-full flex flex-col" style={{ padding: '16px' }}>
                  <div style={{ fontSize: '11px', color: '#717171', marginBottom: '12px' }}>
                    Conversation
                  </div>

                  {/* Philo message */}
                  <div
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      padding: '12px',
                      marginBottom: '12px',
                      fontSize: '12px',
                      color: '#222222',
                      lineHeight: '1.4'
                    }}
                  >
                    Tell me about your place. What kind of space is it?
                  </div>

                  {/* Host reply building */}
                  <div
                    style={{
                      backgroundColor: '#FFE8DD',
                      borderRadius: '16px',
                      padding: '12px',
                      marginBottom: '12px',
                      fontSize: '12px',
                      color: '#222222',
                      lineHeight: '1.4',
                      marginLeft: 'auto',
                      maxWidth: '80%'
                    }}
                  >
                    It's a bright one-bedroom near the station...
                  </div>

                  {/* Input bar */}
                  <div
                    style={{
                      marginTop: 'auto',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '20px',
                      padding: '10px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      border: '1px solid #DDDDDD'
                    }}
                  >
                    <div style={{ fontSize: '11px', color: '#999999', flex: 1 }}>
                      Type or speak...
                    </div>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#FF385C' }} />
                  </div>
                </div>
              </div>

              {/* Screen 3 - Listing preview */}
              <div
                style={{
                  width: '200px',
                  borderRadius: '32px',
                  border: '8px solid #1A1917',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  aspectRatio: '9/19.5'
                }}
              >
                <div className="w-full h-full flex flex-col" style={{ padding: '16px' }}>
                  <div style={{ fontSize: '11px', color: '#717171', marginBottom: '12px' }}>
                    Preview
                  </div>

                  {/* Listing card */}
                  <div>
                    <div
                      style={{
                        width: '100%',
                        aspectRatio: '16/10',
                        backgroundColor: '#DDDDDD',
                        borderRadius: '12px',
                        marginBottom: '10px'
                      }}
                    />
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#222222', marginBottom: '4px' }}>
                      Bright 1BR Apartment in Central Zurich
                    </div>
                    <div style={{ fontSize: '11px', color: '#717171', marginBottom: '4px' }}>
                      Near Station · 2 guests
                    </div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#222222' }}>
                      CHF 120 / night
                    </div>
                  </div>

                  {/* Philo message */}
                  <div
                    style={{
                      marginTop: '16px',
                      backgroundColor: '#F7F7F7',
                      borderRadius: '12px',
                      padding: '10px',
                      fontSize: '11px',
                      color: '#222222'
                    }}
                  >
                    Done! How does this look?
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
          backgroundColor: 'rgba(44, 40, 37, 0.08)'
        }}
      />

      {/* FOLD 7B - PHILO / GUEST (HERO) */}
      <div className="relative" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
        <div className="max-w-[1000px] mx-auto px-8">
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
            PHILO · OPTIMISE · GUEST
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: '56px',
              fontWeight: 700,
              lineHeight: '1.06',
              color: '#2C2825',
              letterSpacing: '-0.03em',
              maxWidth: '18ch',
              marginBottom: '28px'
            }}
          >
            Search for a feeling, not a filter.
          </h2>

          {/* From → To block */}
          <div style={{ marginBottom: '28px' }}>
            <div
              style={{
                fontSize: '15px',
                fontWeight: 400,
                lineHeight: '1.6',
                color: 'rgba(44, 40, 37, 0.45)'
              }}
            >
              From location + dates + price
            </div>
            <div className="flex items-center gap-2" style={{ margin: '8px 0' }}>
              <div
                style={{
                  width: '32px',
                  height: '1px',
                  backgroundColor: 'rgba(44, 40, 37, 0.20)'
                }}
              />
              <ChevronRight size={14} color="#FF385C" strokeWidth={2} />
            </div>
            <div
              style={{
                fontSize: '15px',
                fontWeight: 500,
                lineHeight: '1.6',
                color: 'rgba(44, 40, 37, 0.85)'
              }}
            >
              to a conversation about who you are and what this trip is actually for.
            </div>
          </div>

          {/* Body copy */}
          <p
            style={{
              fontSize: '17px',
              fontWeight: 400,
              lineHeight: '1.75',
              color: 'rgba(44, 40, 37, 0.68)',
              maxWidth: '54ch',
              marginBottom: '56px'
            }}
          >
            Philo doesn't ask where you want to go and how many beds you need. It asks what kind of trip this is. What you want to feel when you arrive. Whether you want to be in the middle of things or away from them. It learns as it talks and matches against listings — not just their amenities, but their hosts' identities, the neighbourhoods they're in, and the guidebooks they've built for their guests.
          </p>

          {/* Hero screen arc - 5 screens */}
          <div className="relative flex items-end justify-center gap-4" style={{ height: '480px', marginBottom: '56px' }}>
            {/* Screen 1 - Opening (smallest, lowest) */}
            <div
              style={{
                width: '185px',
                borderRadius: '32px',
                border: '8px solid #1A1917',
                boxShadow: '0 16px 48px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                aspectRatio: '9/19.5',
                position: 'relative',
                top: '60px'
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center" style={{ padding: '20px' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 30% 30%, #FFB085 0%, #FF8C7A 50%, rgba(255, 235, 230, 0.95) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '5px',
                    marginBottom: '16px'
                  }}
                >
                  <div style={{ width: '6px', height: '14px', backgroundColor: 'white', borderRadius: '6px' }} />
                  <div style={{ width: '6px', height: '14px', backgroundColor: 'white', borderRadius: '6px' }} />
                </div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#222222', textAlign: 'center', marginBottom: '4px' }}>
                  What kind of place
                </div>
                <div style={{ fontSize: '11px', color: '#717171', textAlign: 'center' }}>
                  are you looking for?
                </div>
              </div>
            </div>

            {/* Screen 2 - Conversation (medium, mid-low) */}
            <div
              style={{
                width: '210px',
                borderRadius: '32px',
                border: '8px solid #1A1917',
                boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                overflow: 'hidden',
                backgroundColor: '#F7F7F7',
                aspectRatio: '9/19.5',
                position: 'relative',
                top: '30px'
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center" style={{ padding: '20px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 30% 30%, #FFB085 0%, #FF8C7A 50%, rgba(255, 235, 230, 0.95) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    marginBottom: '20px',
                    position: 'relative'
                  }}
                >
                  <div style={{ width: '8px', height: '16px', backgroundColor: 'white', borderRadius: '8px' }} />
                  <div style={{ width: '8px', height: '16px', backgroundColor: 'white', borderRadius: '8px' }} />

                  {/* Floating preference chips */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-25px',
                      left: '-10px',
                      backgroundColor: '#FFE8DD',
                      borderRadius: '16px',
                      padding: '4px 10px',
                      fontSize: '10px',
                      color: '#222222',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Rustic
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-25px',
                      right: '-15px',
                      backgroundColor: '#FFE8DD',
                      borderRadius: '16px',
                      padding: '4px 10px',
                      fontSize: '10px',
                      color: '#222222',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Outside city
                  </div>
                </div>

                <div style={{ fontSize: '12px', color: '#717171', textAlign: 'center' }}>
                  rustic, peaceful, outside the city
                </div>
              </div>
            </div>

            {/* Screen 3 - Hero/Centre (largest, highest) */}
            <div
              style={{
                width: '240px',
                borderRadius: '32px',
                border: '8px solid #1A1917',
                boxShadow: '0 20px 56px rgba(0,0,0,0.14)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                aspectRatio: '9/19.5',
                position: 'relative',
                top: '0px'
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center" style={{ padding: '24px' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 30% 30%, #FFB085 0%, #FF8C7A 50%, rgba(255, 235, 230, 0.95) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    marginBottom: '24px'
                  }}
                >
                  <div style={{ width: '10px', height: '20px', backgroundColor: 'white', borderRadius: '10px' }} />
                  <div style={{ width: '10px', height: '20px', backgroundColor: 'white', borderRadius: '10px' }} />
                </div>

                <div style={{ fontSize: '16px', fontWeight: 600, color: '#222222', textAlign: 'center', marginBottom: '8px' }}>
                  Perfect, I think I've got the vibe!
                </div>
                <div style={{ fontSize: '13px', color: '#717171', textAlign: 'center' }}>
                  Let me find some places for you
                </div>
              </div>
            </div>

            {/* Screen 4 - Search results (medium, mid-low) */}
            <div
              style={{
                width: '210px',
                borderRadius: '32px',
                border: '8px solid #1A1917',
                boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                aspectRatio: '9/19.5',
                position: 'relative',
                top: '30px'
              }}
            >
              <div className="w-full h-full flex flex-col" style={{ padding: '16px' }}>
                <div style={{ fontSize: '11px', color: '#717171', marginBottom: '12px' }}>
                  3 stays match your vibe
                </div>

                {/* Listing card */}
                <div>
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '16/10',
                      backgroundColor: '#DDDDDD',
                      borderRadius: '12px',
                      marginBottom: '10px'
                    }}
                  />
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#222222', marginBottom: '4px' }}>
                    Flat in Florence
                  </div>
                  <div style={{ fontSize: '10px', color: '#717171', marginBottom: '6px' }}>
                    ⭐ 4.95 · Guidebook included
                  </div>
                  <div
                    style={{
                      fontSize: '10px',
                      color: '#717171',
                      lineHeight: '1.4',
                      backgroundColor: '#F7F7F7',
                      padding: '8px',
                      borderRadius: '8px'
                    }}
                  >
                    Rustic villa with terraced garden, 20min from city center
                  </div>
                </div>
              </div>
            </div>

            {/* Screen 5 - Listing detail (smallest, lowest) */}
            <div
              style={{
                width: '185px',
                borderRadius: '32px',
                border: '8px solid #1A1917',
                boxShadow: '0 16px 48px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                aspectRatio: '9/19.5',
                position: 'relative',
                top: '60px'
              }}
            >
              <div className="w-full h-full flex flex-col" style={{ padding: '16px' }}>
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '16/10',
                    backgroundColor: '#DDDDDD',
                    borderRadius: '12px',
                    marginBottom: '12px'
                  }}
                />

                <div
                  style={{
                    backgroundColor: '#FFF3EE',
                    borderRadius: '10px',
                    padding: '10px',
                    marginBottom: '12px'
                  }}
                >
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#FF385C', marginBottom: '4px' }}>
                    ✨ Guidebook included
                  </div>
                  <div style={{ fontSize: '9px', color: '#222222', lineHeight: '1.4' }}>
                    Properties with a Guidebook offer a more authentic stay
                  </div>
                </div>

                <div style={{ fontSize: '11px', fontWeight: 600, color: '#222222', marginBottom: '4px' }}>
                  €95 / night
                </div>
                <div style={{ fontSize: '10px', color: '#717171' }}>
                  Nov 15-18 · 2 guests
                </div>
              </div>
            </div>
          </div>

          {/* Two feature callouts */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            <div
              style={{
                backgroundColor: '#FFF3EE',
                borderRadius: '14px',
                padding: '24px 28px'
              }}
            >
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 500,
                  color: '#FF385C',
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                  marginBottom: '10px'
                }}
              >
                GUIDEBOOK SIGNAL
              </div>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '1.65',
                  color: 'rgba(44, 40, 37, 0.70)'
                }}
              >
                Listings with guidebooks surface differently — they carry a signal that the host knows this place and has invested their knowledge into the stay.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#FFF3EE',
                borderRadius: '14px',
                padding: '24px 28px'
              }}
            >
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 500,
                  color: '#FF385C',
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                  marginBottom: '10px'
                }}
              >
                CURATED SHORTLIST
              </div>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '1.65',
                  color: 'rgba(44, 40, 37, 0.70)'
                }}
              >
                The result isn't a grid of identical cards. It's a shortlist with a reason: here is why this one fits you.
              </p>
            </div>
          </div>

          {/* Data callout */}
          <div className="flex gap-4">
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
                  fontSize: '40px',
                  fontWeight: 700,
                  color: '#2C2825',
                  letterSpacing: '-0.02em',
                  lineHeight: '1'
                }}
              >
                64%
              </div>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.7',
                  color: 'rgba(44, 40, 37, 0.70)',
                  maxWidth: '56ch',
                  marginTop: '8px'
                }}
              >
                of Airbnb guests feel more culturally connected through Airbnb than through a hotel. Philo makes that connection findable — not accidental.
              </p>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 400,
                  color: 'rgba(44, 40, 37, 0.30)',
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
