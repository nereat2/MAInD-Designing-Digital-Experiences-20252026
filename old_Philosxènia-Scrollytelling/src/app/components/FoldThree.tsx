export default function FoldThree() {
  return (
    <section className="w-full" style={{ fontFamily: 'Figtree, sans-serif' }}>
      {/* FOLD 3A - THE SYSTEM */}
      <div
        style={{
          backgroundColor: '#F4F3F1',
          paddingTop: '100px',
          paddingBottom: '80px'
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
            THE PROBLEM
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: '46px',
              fontWeight: 700,
              lineHeight: '1.1',
              color: '#2C2825',
              letterSpacing: '-0.025em',
              maxWidth: '22ch',
              marginBottom: '56px'
            }}
          >
            Every actor in the system is optimising for the wrong thing.
          </h2>

          {/* Three-column layout */}
          <div className="grid grid-cols-3 gap-6 mb-14">
            {/* Column 1 - Platforms */}
            <div>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'rgba(44, 40, 37, 0.45)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginBottom: '14px'
                }}
              >
                Platforms
              </div>
              <div
                style={{
                  width: '24px',
                  height: '1px',
                  backgroundColor: 'rgba(44, 40, 37, 0.15)',
                  marginBottom: '14px'
                }}
              />
              <div
                style={{
                  fontSize: '23px',
                  fontWeight: 700,
                  lineHeight: '1.25',
                  color: '#2C2825',
                  letterSpacing: '-0.01em'
                }}
              >
                Profit from volume.
              </div>
              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  color: 'rgba(44, 40, 37, 0.60)',
                  marginTop: '6px'
                }}
              >
                More listings, more take-rate.
              </div>
            </div>

            {/* Column 2 - Hosts */}
            <div>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'rgba(44, 40, 37, 0.45)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginBottom: '14px'
                }}
              >
                Hosts
              </div>
              <div
                style={{
                  width: '24px',
                  height: '1px',
                  backgroundColor: 'rgba(44, 40, 37, 0.15)',
                  marginBottom: '14px'
                }}
              />
              <div
                style={{
                  fontSize: '23px',
                  fontWeight: 700,
                  lineHeight: '1.25',
                  color: '#2C2825',
                  letterSpacing: '-0.01em'
                }}
              >
                Optimised for occupancy.
              </div>
              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  color: 'rgba(44, 40, 37, 0.60)',
                  marginTop: '6px'
                }}
              >
                Calendars beat character.
              </div>
            </div>

            {/* Column 3 - Guests */}
            <div>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'rgba(44, 40, 37, 0.45)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginBottom: '14px'
                }}
              >
                Guests
              </div>
              <div
                style={{
                  width: '24px',
                  height: '1px',
                  backgroundColor: 'rgba(44, 40, 37, 0.15)',
                  marginBottom: '14px'
                }}
              />
              <div
                style={{
                  fontSize: '23px',
                  fontWeight: 700,
                  lineHeight: '1.25',
                  color: '#2C2825',
                  letterSpacing: '-0.01em'
                }}
              >
                Filtered by price.
              </div>
              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  color: 'rgba(44, 40, 37, 0.60)',
                  marginTop: '6px'
                }}
              >
                The cheapest wins the search.
              </div>
            </div>
          </div>

          {/* Closing line */}
          <div
            style={{
              fontSize: '16px',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: '1.6',
              color: 'rgba(44, 40, 37, 0.40)',
              maxWidth: '52ch'
            }}
          >
            A solution owned by one platform will always serve that platform first.
          </div>
        </div>
      </div>

      {/* FOLD 3B - THE BACKLASH */}
      <div
        className="relative"
        style={{
          backgroundColor: '#1A1917',
          paddingTop: '100px',
          paddingBottom: '100px',
          overflow: 'hidden'
        }}
      >
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
            THE EVIDENCE
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: '46px',
              fontWeight: 700,
              lineHeight: '1.1',
              color: 'rgba(255, 255, 255, 0.95)',
              letterSpacing: '-0.025em',
              maxWidth: '22ch',
              marginBottom: '24px'
            }}
          >
            Cities across Europe have started pushing back.
          </h2>

          {/* Body copy */}
          <p
            style={{
              fontSize: '17px',
              fontWeight: 400,
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.65)',
              maxWidth: '58ch',
              marginBottom: '52px'
            }}
          >
            P2P accommodation was supposed to strengthen local communities. Instead it has displaced residents, driven up rents, and turned neighbourhoods into tourist infrastructure.
          </p>

          {/* Map visual */}
          <div
            className="relative w-full overflow-hidden mb-10"
            style={{
              height: '340px',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}
          >
            {/* Map image */}
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200"
              alt="World map"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '52% 38%',
                opacity: 0.55,
                mixBlendMode: 'luminosity'
              }}
            />
            {/* Dark tint overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(26,25,23,0.45) 0%, rgba(26,25,23,0.25) 50%, rgba(26,25,23,0.55) 100%)'
              }}
            />
            {/* City dots — positions tuned to Europe on the world map image */}
            {/* Europe occupies roughly 38–62% x, 18–58% y of this map */}
            {[
              { name: 'Madrid',     x: '37.5%', y: '55%'  },
              { name: 'Barcelona',  x: '40.5%', y: '50%'  },
              { name: 'Paris',      x: '40%',   y: '38%'  },
              { name: 'Amsterdam',  x: '41%',   y: '30%'  },
              { name: 'Berlin',     x: '45.5%', y: '29%'  },
              { name: 'Florence',   x: '44.5%', y: '46%'  },
              { name: 'Budapest',   x: '47.5%', y: '37%'  },
              { name: 'Athens',     x: '49%',   y: '56%'  },
            ].map((city) => (
              <div
                key={city.name}
                style={{
                  position: 'absolute',
                  left: city.x,
                  top: city.y,
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                {/* Pulse ring */}
                <div style={{ position: 'relative', width: '20px', height: '20px' }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,56,92,0.22)',
                    border: '1px solid rgba(255,56,92,0.5)'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: '#FF385C'
                  }} />
                </div>
                {/* Label */}
                <div style={{
                  fontSize: '9px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.85)',
                  whiteSpace: 'nowrap',
                  background: 'rgba(26,25,23,0.7)',
                  padding: '2px 5px',
                  borderRadius: '3px'
                }}>
                  {city.name}
                </div>
              </div>
            ))}
            {/* Corner label */}
            <div style={{
              position: 'absolute',
              bottom: '14px',
              right: '16px',
              fontSize: '10px',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.30)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              8 cities · 6 countries · 2024–2026
            </div>
          </div>

          {/* City data grid — 4 × 2, no overlap */}
          <div
            className="grid gap-3 mb-16"
            style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
          >
            {[
              {
                city: 'Barcelona',
                stat: '10,000+ homes returned to residential market. All tourist licences expire 2028.'
              },
              {
                city: 'Amsterdam',
                stat: 'Airbnb listings fell 54% between 2019 and 2024.'
              },
              {
                city: 'Berlin',
                stat: '8,105 apartments returned to long-term housing.'
              },
              {
                city: 'Paris',
                stat: '90-day annual cap. Two hosts fined €80K and €150K, Feb 2026.'
              },
              {
                city: 'Spain',
                stat: '€64M fine for Airbnb, Dec 2025. 65,122 unlicensed listings.'
              },
              {
                city: 'Athens',
                stat: 'New short-term rental licences banned in central districts from Jan 2025.'
              },
              {
                city: 'Florence',
                stat: 'Moratorium on new licences in the historic centre.'
              },
              {
                city: 'Budapest',
                stat: 'District referendum — ban on short-term rentals from 2026.'
              },
            ].map((item) => (
              <div
                key={item.city}
                style={{
                  borderLeft: '2px solid rgba(255,56,92,0.5)',
                  paddingLeft: '12px',
                  paddingTop: '2px',
                  paddingBottom: '2px'
                }}
              >
                <div style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.90)',
                  marginBottom: '4px'
                }}>
                  {item.city}
                </div>
                <div style={{
                  fontSize: '12px',
                  lineHeight: '1.55',
                  color: 'rgba(255,255,255,0.50)'
                }}>
                  {item.stat}
                </div>
              </div>
            ))}
          </div>

          {/* Pull Quote */}
          <div className="flex items-start gap-4 max-w-[640px]">
            <div
              style={{
                width: '2px',
                backgroundColor: '#FF385C',
                alignSelf: 'stretch',
                minHeight: '100%',
                marginRight: '14px'
              }}
            />
            <div>
              <div
                style={{
                  fontSize: '23px',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: '1.5',
                  color: 'rgba(255, 255, 255, 0.85)',
                  maxWidth: '40ch'
                }}
              >
                "The problem is not just Paris. It is all of Europe."
              </div>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.40)',
                  marginTop: '12px'
                }}
              >
                — Anne Hidalgo, former Mayor of Paris
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOLD 3C - THE HUMAN COST */}
      <div
        style={{
          backgroundColor: '#211D1B',
          paddingTop: '100px',
          paddingBottom: '120px'
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
            THE HUMAN COST
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: '46px',
              fontWeight: 700,
              lineHeight: '1.1',
              color: 'rgba(255, 255, 255, 0.95)',
              letterSpacing: '-0.025em',
              marginBottom: '56px'
            }}
          >
            The platform promised belonging.<br />It delivered ratings.
          </h2>

          {/* Two Quote Cards */}
          <div className="grid grid-cols-2 gap-5 mb-12">
            {/* Left Card - Academic */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                borderRadius: '14px',
                padding: '32px'
              }}
            >
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.30)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                  marginBottom: '20px'
                }}
              >
                ACADEMIC RESEARCH
              </div>
              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.80)',
                  marginBottom: '20px'
                }}
              >
                "Once people rate and review each other's social persona on the Airbnb platform, human beings adapt their behavior to the platform's reward-and-punish structure."
              </div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  color: 'rgba(255, 255, 255, 0.38)'
                }}
              >
                — Christiaens, T. (2025). Trust and power in Airbnb's digital rating and reputation system.
              </div>
            </div>

            {/* Right Card - Community */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                borderRadius: '14px',
                padding: '32px'
              }}
            >
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.30)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                  marginBottom: '20px'
                }}
              >
                HOST COMMUNITY
              </div>
              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.80)',
                  marginBottom: '20px'
                }}
              >
                "This is the hospitality industry. It's run by real folks. You can't add AI for help. I don't want anything to do with a computer making decisions for anyone, especially in hospitality."
              </div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  color: 'rgba(255, 255, 255, 0.38)'
                }}
              >
                — Verified host, r/airbnb_hosts
              </div>
            </div>
          </div>

          {/* Closing Body */}
          <p
            style={{
              fontSize: '17px',
              fontWeight: 400,
              lineHeight: '1.75',
              color: 'rgba(255, 255, 255, 0.65)',
              maxWidth: '58ch'
            }}
          >
            Hosts have become performers. Guests have become bookings. The communities that once made these places worth visiting are being hollowed out — one five-star review at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
